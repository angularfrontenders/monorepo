import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Case1OuterComponent } from './case1-outer/case1-outer.component';
import { Case1InnerComponent } from './case1-inner/case1-inner.component';
import { Case2OuterComponent } from './case2-outer/case2-outer.component';
import { Case2InnerComponent } from './case2-inner/case2-inner.component';
import { Case3InnerComponent } from './case3-inner/case3-inner.component';
import { Case3OuterComponent } from './case3-outer/case3-outer.component';

@NgModule({
    declarations: [
        AppComponent,
        Case1OuterComponent,
        Case1InnerComponent,
        Case2OuterComponent,
        Case2InnerComponent,
        Case3InnerComponent,
        Case3OuterComponent
    ],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
