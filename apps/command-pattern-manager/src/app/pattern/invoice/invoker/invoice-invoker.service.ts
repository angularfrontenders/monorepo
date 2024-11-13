import { Injectable } from '@angular/core';

import { IInvoiceInvokerService } from './iInvoiceInvokerService';
import { ICommandService } from '../../iCommandService';
import { InvokerService } from '../../invoker/invoker.service';
import { CommandName } from '../commands/commands';
import { CommandManagerService } from '../command-manager/command-manager.service';

@Injectable({
    providedIn: 'root'
})
export class InvoiceInvokerService extends InvokerService implements IInvoiceInvokerService {
    public constructor(private _commandManagerService: CommandManagerService) {
        super();
    }

    public async invokeInvoiceCommand(commandName: CommandName): Promise<void> {
        const command: ICommandService | undefined = this._commandManagerService.getCommand(commandName);
        if (!command) {
            throw new Error('No command found!');
        }
        this.setCommand(command);
        await this.invoke();
    }
}
