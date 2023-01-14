import { ICommand } from '../pattern/iCommand';

export class Queue {

    private _queue: Array<ICommand> = [];
    private _locked = false;

    public enqueue(command: ICommand): void {
        this._queue.push(command);
        if (!this._locked) {
          this.next();
        }
    }

    public clear(): void {
      this._queue = [];
    }

    private next(): void {
      this._locked = true;
      const finished = () => {
        this._queue.length > 0 ? this.next() : this._locked = false;
      };
      const command: ICommand | undefined = this._queue.shift();
      if (!command){
        finished();
      }
      else {
        command.execute().then(finished).catch(finished);
      }

    }

  }
