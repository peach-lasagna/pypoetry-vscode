// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { commands, ExtensionContext, QuickInput } from 'vscode';
import { Poetry } from './poetry';


export function activate(context: ExtensionContext) {
    console.log('Activate pypoetry.');
    let inp: QuickInput | undefined;
    let poet = new Poetry(inp);

    function push_command(name: string, func: () => void): void {
        context.subscriptions.push(commands.registerCommand(name, func));
    }


    let coms: Map<string, () => void> () => ({
        'pypoetry.init': poet._init,
        'pypoetry.install': poet._install,
        'pypoetry.update': poet._update,
        'pypoetry.add': poet._add,
        'pypoetry.remove': poet._remove,
        'pypoetry.show': poet._show,
        'pypoetry.build': poet._build,
        'pypoetry.publish': poet._publish,
        'pypoetry.config': poet._config,
        'pypoetry.run': poet._run,
        'pypoetry.shell': poet._shell,
        'pypoetry.new': poet._new,
        'pypoetry.check': poet._check,
        'pypoetry.search': poet._search,
        'pypoetry.lock': poet._lock,
        'pypoetry.version': poet._version,
        'pypoetry.export': poet._export,
        'pypoetry.env': poet._env
    });
    coms.forEach((func, name) => push_command(name, func));
}

export function deactivate() {
    console.log("Deactivate pypoetry.")
}

/*
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { commands, ExtensionContext, QuickInput } from 'vscode';
import { Poetry } from './poetry';


export function activate(context: ExtensionContext) {
    console.log('Activate pypoetry.');
    let inp: QuickInput | undefined;
    let poet = new Poetry(inp);

    function push_command(name: string, func: () => void): void {
        context.subscriptions.push(commands.registerCommand(name, func));
    }

    interface Map<T> {
        [K: string]: T;
    }


    let coms: Map<() => void> = {
        'pypoetry.init': poet._init,
        'pypoetry.install': poet._install,
        'pypoetry.update': poet._update,
        'pypoetry.add': poet._add,
        'pypoetry.remove': poet._remove,
        'pypoetry.show': poet._show,
        'pypoetry.build': poet._build,
        'pypoetry.publish': poet._publish,
        'pypoetry.config': poet._config,
        'pypoetry.run': poet._run,
        'pypoetry.shell': poet._shell,
        'pypoetry.new': poet._new,
        'pypoetry.check': poet._check,
        'pypoetry.search': poet._search,
        'pypoetry.lock': poet._lock,
        'pypoetry.version': poet._version,
        'pypoetry.export': poet._export,
        'pypoetry.env': poet._env
    };
    for (const key, val in coms) {
        push_command(key, val)
    }
    coms.forEach((func, name) => push_command(name, func));
}

export function deactivate() {
    console.log("Deactivate pypoetry.")
}
*/
