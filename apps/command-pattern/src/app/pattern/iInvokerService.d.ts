import { ICommandService } from './iCommandService';

export interface IInvokerService
{
    setCommand(command: ICommandService): void;
    invoke(): Promise<void>;
} 