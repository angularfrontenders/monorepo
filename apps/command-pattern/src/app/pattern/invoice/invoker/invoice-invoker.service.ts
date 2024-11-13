import { Injectable } from '@angular/core';

import { IInvokerService } from '../../iInvokerService';
import { ICommandService } from '../../iCommandService';

@Injectable({
    providedIn: 'root'
})
export class InvoiceInvokerService implements IInvokerService {
    private _command?: ICommandService = undefined;

    public setCommand(command: ICommandService): void {
        this._command = command;
    }

    public async invoke(): Promise<void> {
        if (this.isCommand(this._command)) {
            return await this._command.execute();
        } else {
            throw new Error('No command set');
        }
    }

    private isCommand(object: ICommandService | undefined): object is ICommandService {
        return object?.execute !== undefined;
    }
}
