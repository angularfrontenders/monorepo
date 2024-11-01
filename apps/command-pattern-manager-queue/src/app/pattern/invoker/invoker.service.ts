import { Injectable } from '@angular/core';

import { IInvokerService } from '../iInvokerService';
import { ICommandService } from '../iCommandService';
import { ICommand } from '../iCommand';

@Injectable({
    providedIn: 'root'
})
export class InvokerService implements IInvokerService {
    private _command?: ICommandService = undefined;

    public setCommand(command: ICommandService): void {
        this._command = command;
    }

    public async invoke(): Promise<void> {
        const command: ICommand | undefined = this._command?.build();
        if (this.isCommand(command)) {
            await command.execute();
        } else {
            throw new Error('No command');
        }
    }

    protected isCommand(object: ICommand | undefined): object is ICommand {
        return object?.execute !== undefined;
    }
}
