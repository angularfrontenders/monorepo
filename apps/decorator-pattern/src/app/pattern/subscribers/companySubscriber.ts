import { SubscriberTemplate } from '../subscriberTemplate';

export class CompanySubscriber extends SubscriberTemplate {
    public constructor(amount: number) {
        super(amount);
    }

    public getDescription(): string {
        return 'Company Subscriber';
    }
}
