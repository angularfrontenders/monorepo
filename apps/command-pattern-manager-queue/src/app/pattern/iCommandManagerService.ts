import { ICommandService } from './iCommandService';
import { CommandName } from './invoice/commands/commands';

export interface ICommandManagerService {
    getCommand: (commandName: CommandName) => ICommandService | undefined;
}
