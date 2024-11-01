import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ResourcesService } from './resources.service';
import { DataService } from './data.service';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [DataService, ResourcesService, provideHttpClient(withInterceptorsFromDi())]
})
export class ResourcesModule {}
