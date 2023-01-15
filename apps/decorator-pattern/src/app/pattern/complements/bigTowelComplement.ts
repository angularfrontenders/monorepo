import { ComplementTemplate } from './complementTemplate';
import { SubscriberTemplate } from '../subscriberTemplate';

export class BigTowelComplement extends ComplementTemplate {

    public constructor(subscriber: SubscriberTemplate, amount: number) {
        super(subscriber, amount);
    }

    public override getDescription(): string {
        return `${super.getDescription()} with Big Towel`;
    }

}