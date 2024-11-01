import { SubscriberTemplate } from '../subscriberTemplate';

export class VipSubscriber extends SubscriberTemplate {
    public constructor(amount: number) {
        super(amount);
    }

    public getDescription(): string {
        return 'Vip Subscriber';
    }
}
