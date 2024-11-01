import { Injectable } from '@angular/core';
import { ModelTemplateService } from '../patterns/templateMethod/modelTemplate.service';

import { IPerson } from '../entities/iPerson';

@Injectable()
export class PersonModelService extends ModelTemplateService<IPerson> {}
