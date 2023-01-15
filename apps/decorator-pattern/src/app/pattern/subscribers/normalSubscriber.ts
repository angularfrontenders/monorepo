import { SubscriberTemplate } from '../subscriberTemplate';

export class NormalSubscriber extends SubscriberTemplate {

    public constructor(amount: number) {
        super(amount);
    }

    public getDescription(): string {
        return 'Normal Subscriber';
    }
}