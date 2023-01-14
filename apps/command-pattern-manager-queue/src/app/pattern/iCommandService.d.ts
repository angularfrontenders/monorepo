import { CommandName } from './invoice/commands/commands';
import { ICommand } from '../pattern/iCommand';

export interface ICommandService {
   getCommandName: () => CommandName;
   build(): ICommand;
}