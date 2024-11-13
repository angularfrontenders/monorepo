import { TestBed } from '@angular/core/testing';

import { ResourcesService } from './resources.service';
import { DataService } from './data.service';

describe('ResourcesService', () => {
    let service: ResourcesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ResourcesService, { provide: DataService, useValue: {} }]
        });
        service = TestBed.inject(ResourcesService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
