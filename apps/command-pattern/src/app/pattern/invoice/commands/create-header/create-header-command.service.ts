import { Injectable } from '@angular/core';

// Services
import { ModelService } from '../../services/model.service';
import { ValidatorService } from '../../services/validator.service';
import { CreateHeaderCommandBuilderService } from './create-header-command-builder.service';
import { CreateHeaderCommandDataService } from './create-header-command-data.service';
// Interfaces
import { IInvoice } from '../../../iInvoice';
import { ICommandService } from '../../../iCommandService';
import { ICreateHeaderCommand } from './iCreateHeaderCommand';
import { IResultCommand } from '../../../iResultCommand';

@Injectable({
  providedIn: 'root'
})
export class CreateHeaderCommandService implements ICommandService {

  public constructor(
    private _modelService: ModelService,
    private _validatorService: ValidatorService,
    private _createHeaderCommandBuilderService:CreateHeaderCommandBuilderService,
    private _createHeaderCommandDataService: CreateHeaderCommandDataService) {
     }

  public async execute(): Promise<void> {
    // Get model
    const invoice: IInvoice = this._modelService.getModel();

    // Validate model
    if (this._validatorService.validate(invoice).length === 0) {
      // Build command
      const command: ICreateHeaderCommand = this._createHeaderCommandBuilderService.build(invoice);
      // Send command
      try {
          const result: IResultCommand = await this._createHeaderCommandDataService.send(command);
      } catch(Error) {
          console.log('Error');
      }
    }
  }

}
