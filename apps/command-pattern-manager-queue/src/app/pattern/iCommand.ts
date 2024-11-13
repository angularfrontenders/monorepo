export interface ICommand {
    execute(): Promise<void>;
    enqueue(): boolean;
}
