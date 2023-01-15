export abstract class SubscriberTemplate {
    private _amount = 0;

    public constructor(amount: number) {
        this._amount = amount;
    }

    public getAmount(): number {
        return this._amount;
    }

    public abstract getDescription(): string;
}