import { Injectable } from '@angular/core';

import { ICommandManagerService } from '../../iCommandManagerService';
import { ICommandService } from '../../iCommandService';
import { CommandName } from '../commands/commands';

import { CreateHeaderCommandService } from '../commands/create-header/create-header-command.service';
import { ModifyTotalAmountCommandService } from '../commands/modify-total-amount/modify-total-amount-command.service';

@Injectable({
    providedIn: 'root'
})
export class CommandManagerService implements ICommandManagerService {
    private _commands: Array<ICommandService> = [];

    public constructor(
        _createHeaderCommandService: CreateHeaderCommandService,
        _modifyTotalAmountCommandService: ModifyTotalAmountCommandService
    ) {
        this._commands = [_createHeaderCommandService, _modifyTotalAmountCommandService];
    }

    public getCommand = (commandName: CommandName): ICommandService | undefined =>
        this._commands.find((command: ICommandService) => command.getCommandName() === commandName);
}
