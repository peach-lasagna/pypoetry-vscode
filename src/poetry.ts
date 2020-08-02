import { throws } from 'assert';
import { window, QuickInput } from 'vscode';

import { exec } from 'child_process';

function run_in_terminal(command: string): void {
    exec(command, (error: any, stdout: any, stderr: any): void => {
        let res: string;

        if (error) {
            res = `error: ${error.message}`;
            window.showErrorMessage(res)
            console.error(res)
        }
        else if (stderr) {
            res = `stderr: ${stderr}`;
            window.showWarningMessage(res)
            console.warn(res)
        }
        else {
            res = `stdout: ${stdout}`;
            window.showInformationMessage(res)
            console.log(res)
        }
    });
}

abstract class PoetryAbs {
    abstract _new(): void;
    abstract _init(): void;
    abstract _install(): void;
    abstract _update(): void;
    abstract _add(): void;
    abstract _remove(): void;
    abstract _show(): void;
    abstract _build(): void;
    abstract _publish(): void;
    abstract _config(): void;
    abstract _run(): void;
    abstract _shell(): void;
    abstract _check(): void;
    abstract _search(): void;
    abstract _lock(): void;
    abstract _version(): void;
    abstract _export(): void;
    abstract _env(): void;
}

export class Poetry extends PoetryAbs {
    input: QuickInput | undefined;

    constructor(inp: QuickInput | undefined) {
        super()
        this.input = inp;
    }

    _new(): void {

    }
    _init(): void {

    }
    _install(): void {

    }
    _update(): void {

    }
    _add(): void {

    }
    _remove(): void {

    }
    _show(): void {

    }
    _build(): void {

    }
    _publish(): void {

    }
    _config(): void {

    }
    _run(): void {

    }
    _shell(): void {
        run_in_terminal("poetry shell")
    }
    _check(): void {
        run_in_terminal("poetry check")
    }
    _search(): void {

    }
    _lock(): void {
        run_in_terminal("poetry lock")
    }
    _version(): void {

    }
    _export(): void {

    }
    _env(): void {

    }
}

