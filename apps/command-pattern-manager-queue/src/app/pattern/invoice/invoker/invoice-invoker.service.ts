import { Injectable } from '@angular/core';

import { IInvoiceInvokerService } from './iInvoiceInvokerService';
import { ICommandService } from '../../iCommandService';
import { InvokerService } from '../../invoker/invoker.service';
import { CommandName } from '../commands/commands';
import { CommandManagerService } from '../command-manager/command-manager.service';
import { Queue } from '../../../utilities/queue';
import { IInvoice } from '../../iInvoice';
import { ICommand } from '../../iCommand';

@Injectable({
    providedIn: 'root'
})
export class InvoiceInvokerService extends InvokerService implements IInvoiceInvokerService {
    private _queue: Queue = new Queue();

    public constructor(private _commandManagerService: CommandManagerService) {
        super();
    }

    public invokeInvoiceCommand(commandName: CommandName): void {
        const commandService: ICommandService | undefined = this._commandManagerService.getCommand(commandName);
        const command: ICommand | undefined = commandService?.build();
        if (!this.isCommand(command)) {
            throw new Error('No command!');
        }

        if (command.enqueue()) {
            this._queue.enqueue(command);
        } else {
            command.execute();
        }
    }
}
