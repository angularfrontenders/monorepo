import { Component, OnInit } from '@angular/core';
import { SubscriberTemplate } from './pattern/subscriberTemplate';
import { VipSubscriber } from './pattern/subscribers/VipSubscriber';
import { LaundryComplement } from './pattern/complements/laundryComplement';
import { BigTowelComplement } from './pattern/complements/bigTowelComplement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Decorator pattern';
  public subscriber: SubscriberTemplate;


  public ngOnInit(): void {
    this.subscriber = new VipSubscriber(200)
    this.subscriber = new LaundryComplement(this.subscriber, 100);
    this.subscriber = new BigTowelComplement(this.subscriber, 10);
  }

}
