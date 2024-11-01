import { ComplementTemplate } from './complementTemplate';
import { SubscriberTemplate } from '../subscriberTemplate';

export class LaundryComplement extends ComplementTemplate {
    public constructor(subscriber: SubscriberTemplate, amount: number) {
        super(subscriber, amount);
    }

    public override getDescription(): string {
        return `${super.getDescription()} with Laundry`;
    }
}
