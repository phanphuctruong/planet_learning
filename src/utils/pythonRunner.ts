/**
 * In-browser lightweight Python and Turtle execution simulator for Starship Pythonia
 */

export interface RunResult {
  stdout: string[];
  isError: boolean;
  errorMessage?: string;
  isTurtle: boolean;
  turtleCommands?: TurtleAction[];
}

export interface TurtleAction {
  action: 'forward' | 'backward' | 'left' | 'right' | 'circle' | 'color' | 'penup' | 'pendown' | 'goto' | 'begin_fill' | 'end_fill' | 'dot';
  params: (number | string)[];
}

/**
 * Execute Python code in a safe browser-friendly simulator
 */
export function runPythonCode(
  code: string,
  userInputs: string[] = []
): RunResult {
  const stdout: string[] = [];
  const lines = code.split('\n');
  const isTurtle = /import\s+turtle|turtle\./i.test(code);
  const turtleCommands: TurtleAction[] = [];

  let inputIndex = 0;
  const getNextInput = (promptStr: string = ''): string => {
    if (promptStr) {
      stdout.push(promptStr);
    }
    if (inputIndex < userInputs.length) {
      const val = userInputs[inputIndex++];
      stdout.push(`> ${val}`);
      return val;
    }
    // Default fallback inputs for autonomous runs
    return 'Chiến Binh Sao';
  };

  try {
    // Basic state environment for simulator
    const variables: Record<string, any> = {};

    // Check if turtle
    if (isTurtle) {
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;

        // Extract print calls inside turtle scripts
        if (trimmed.startsWith('print(')) {
          const content = extractPrintContent(trimmed, variables);
          stdout.push(content);
          continue;
        }

        // Extract turtle commands
        const cmdMatch = trimmed.match(/(?:[a-zA-Z0-9_]+\.)?([a-zA-Z0-9_]+)\((.*)\)/);
        if (cmdMatch) {
          const fn = cmdMatch[1].toLowerCase();
          const rawArgs = cmdMatch[2].trim();
          const args = rawArgs
            ? rawArgs.split(',').map(s => {
                const clean = s.trim().replace(/^['"]|['"]$/g, '');
                const n = Number(clean);
                return isNaN(n) ? clean : n;
              })
            : [];

          switch (fn) {
            case 'forward':
            case 'fd':
              turtleCommands.push({ action: 'forward', params: [Number(args[0]) || 50] });
              break;
            case 'backward':
            case 'bk':
            case 'back':
              turtleCommands.push({ action: 'backward', params: [Number(args[0]) || 50] });
              break;
            case 'left':
            case 'lt':
              turtleCommands.push({ action: 'left', params: [Number(args[0]) || 90] });
              break;
            case 'right':
            case 'rt':
              turtleCommands.push({ action: 'right', params: [Number(args[0]) || 90] });
              break;
            case 'circle':
              turtleCommands.push({ action: 'circle', params: [Number(args[0]) || 40] });
              break;
            case 'color':
            case 'pencolor':
              turtleCommands.push({ action: 'color', params: [String(args[0] || '#00e5ff')] });
              break;
            case 'penup':
            case 'up':
              turtleCommands.push({ action: 'penup', params: [] });
              break;
            case 'pendown':
            case 'down':
              turtleCommands.push({ action: 'pendown', params: [] });
              break;
            case 'goto':
            case 'setpos':
              turtleCommands.push({ action: 'goto', params: [Number(args[0]) || 0, Number(args[1]) || 0] });
              break;
            case 'begin_fill':
              turtleCommands.push({ action: 'begin_fill', params: [] });
              break;
            case 'end_fill':
              turtleCommands.push({ action: 'end_fill', params: [] });
              break;
            case 'dot':
              turtleCommands.push({ action: 'dot', params: [Number(args[0]) || 10] });
              break;
          }
        }
      }

      stdout.push('🎨 [RÙA KHÔNG GIAN] Đã khởi tạo canvas và hoàn thành hành trình vẽ.');
      return {
        stdout,
        isError: false,
        isTurtle: true,
        turtleCommands,
      };
    }

    // General Python Execution Simulator
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;

      // Handle simple print
      if (trimmed.startsWith('print(')) {
        const content = extractPrintContent(trimmed, variables);
        // Expand \n if any
        const sublines = content.split('\\n');
        sublines.forEach(sl => stdout.push(sl));
        continue;
      }

      // Handle input assignment: ten = input("...") or tuoi = int(input("..."))
      const inputAssignMatch = trimmed.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(?:int\()?\s*input\((.*)\)\s*\)?$/);
      if (inputAssignMatch) {
        const varName = inputAssignMatch[1];
        const promptRaw = inputAssignMatch[2].replace(/^['"]|['"]$/g, '');
        const isInt = trimmed.includes('int(input');
        const rawVal = getNextInput(promptRaw);
        variables[varName] = isInt ? (parseInt(rawVal, 10) || 0) : rawVal;
        continue;
      }

      // Handle simple variable assignments: x = 10, y = "abc", z = [1, 2]
      const assignMatch = trimmed.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+)$/);
      if (assignMatch && !trimmed.startsWith('if') && !trimmed.startsWith('for') && !trimmed.startsWith('while')) {
        const varName = assignMatch[1];
        const expr = assignMatch[2].trim();
        variables[varName] = evaluateSimpleExpr(expr, variables);
        continue;
      }

      // Handle for loop: for i in range(1, 5):
      const forMatch = trimmed.match(/^for\s+([a-zA-Z_][a-zA-Z0-9_]*)\s+in\s+range\((.*)\)\s*:$/);
      if (forMatch) {
        const loopVar = forMatch[1];
        const rangeArgs = forMatch[2].split(',').map(s => Number(s.trim()));
        let start = 0, stop = 0, step = 1;
        if (rangeArgs.length === 1) {
          stop = rangeArgs[0] || 0;
        } else if (rangeArgs.length === 2) {
          start = rangeArgs[0] || 0;
          stop = rangeArgs[1] || 0;
        } else if (rangeArgs.length === 3) {
          start = rangeArgs[0] || 0;
          stop = rangeArgs[1] || 0;
          step = rangeArgs[2] || 1;
        }

        // Collect loop body
        const loopBody: string[] = [];
        let j = i + 1;
        while (j < lines.length && (lines[j].startsWith('    ') || lines[j].startsWith('\t') || !lines[j].trim())) {
          loopBody.push(lines[j]);
          j++;
        }
        i = j - 1; // Advance loop index

        // Execute loop body
        let iterations = 0;
        const maxIter = 50;
        if (step > 0) {
          for (let val = start; val < stop; val += step) {
            if (++iterations > maxIter) break;
            variables[loopVar] = val;
            executeBlock(loopBody, variables, stdout, getNextInput);
          }
        } else if (step < 0) {
          for (let val = start; val > stop; val += step) {
            if (++iterations > maxIter) break;
            variables[loopVar] = val;
            executeBlock(loopBody, variables, stdout, getNextInput);
          }
        }
        continue;
      }

      // Handle list append: ba_lo.append("x")
      const appendMatch = trimmed.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\.append\((.*)\)$/);
      if (appendMatch) {
        const listName = appendMatch[1];
        const item = appendMatch[2].trim().replace(/^['"]|['"]$/g, '');
        if (Array.isArray(variables[listName])) {
          variables[listName].push(item);
        }
        continue;
      }
    }

    if (stdout.length === 0) {
      stdout.push('✨ Chương trình đã hoàn tất không có lỗi đầu ra.');
    }

    return {
      stdout,
      isError: false,
      isTurtle: false,
    };
  } catch (err: any) {
    return {
      stdout,
      isError: true,
      errorMessage: err.message || 'Lỗi cú pháp hoặc runtime error trong code Python.',
      isTurtle: false,
    };
  }
}

function extractPrintContent(printLine: string, vars: Record<string, any>): string {
  const match = printLine.match(/print\s*\(([\s\S]*)\)$/);
  if (!match) return '';
  const inner = match[1].trim();

  // If f-string: print(f"Hello {name}")
  if (inner.startsWith('f"') || inner.startsWith("f'")) {
    let str = inner.slice(2, -1);
    str = str.replace(/\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g, (_, vName) => {
      return vars[vName] !== undefined ? String(vars[vName]) : `{${vName}}`;
    });
    return str;
  }

  // Handle multiple comma separated args
  const parts = splitArgs(inner);
  return parts
    .map(p => {
      const clean = p.trim();
      if ((clean.startsWith('"') && clean.endsWith('"')) || (clean.startsWith("'") && clean.endsWith("'"))) {
        return clean.slice(1, -1);
      }
      if (vars[clean] !== undefined) {
        return typeof vars[clean] === 'object' ? JSON.stringify(vars[clean]) : String(vars[clean]);
      }
      return clean;
    })
    .join(' ');
}

function splitArgs(str: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  let quoteChar = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if ((char === '"' || char === "'") && (i === 0 || str[i - 1] !== '\\')) {
      if (inQuotes && char === quoteChar) {
        inQuotes = false;
      } else if (!inQuotes) {
        inQuotes = true;
        quoteChar = char;
      }
    }
    if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  if (current.trim()) {
    result.push(current.trim());
  }
  return result;
}

function evaluateSimpleExpr(expr: string, vars: Record<string, any>): any {
  const clean = expr.trim();
  // Array literal: ["a", "b"]
  if (clean.startsWith('[') && clean.endsWith(']')) {
    const inner = clean.slice(1, -1);
    if (!inner.trim()) return [];
    return splitArgs(inner).map(s => s.trim().replace(/^['"]|['"]$/g, ''));
  }
  // Number
  if (/^-?\d+(\.\d+)?$/.test(clean)) {
    return Number(clean);
  }
  // String
  if ((clean.startsWith('"') && clean.endsWith('"')) || (clean.startsWith("'") && clean.endsWith("'"))) {
    return clean.slice(1, -1);
  }
  // Boolean
  if (clean === 'True') return true;
  if (clean === 'False') return false;
  // Existing variable
  if (vars[clean] !== undefined) return vars[clean];

  return clean;
}

function executeBlock(
  lines: string[],
  vars: Record<string, any>,
  stdout: string[],
  getNextInput: (prompt?: string) => string
) {
  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;

    if (line.startsWith('print(')) {
      const content = extractPrintContent(line, vars);
      stdout.push(content);
    }
  }
}
