import { SubscriberTemplate } from '../subscriberTemplate';

export class ComplementTemplate extends SubscriberTemplate {
    private _subscriber: SubscriberTemplate;

    public constructor(subscriber: SubscriberTemplate, amount: number) {
        super(amount);
        this._subscriber = subscriber;
    }

    public override getAmount(): number {
        return this._subscriber.getAmount() + super.getAmount();
    }

    public  getDescription(): string {
        return this._subscriber.getDescription();
    }
}