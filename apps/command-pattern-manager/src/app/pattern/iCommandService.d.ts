import { CommandName } from './invoice/commands/commands';

export interface ICommandService {
    getCommandName: () => CommandName;
    execute(): Promise<void>;
}
