import { Injectable } from '@angular/core';

// Services
import { ModelService } from '../../services/model.service';
import { ValidatorService } from '../../services/validator.service';
import { ModifyTotalAmountCommandBuilderService } from './modify-total-amount-command-builder.service';
import { ModifyTotalAmountCommandDataService } from './modify-total-amount-command-data.service';

// Interfaces
import { ICommandService } from '../../../iCommandService';
import { IResultCommand } from '../../../iResultCommand';
import { IInvoice } from '../../../iInvoice';
import { IModifyTotalAmountCommand } from './iModifyTotalAmountCommand';

@Injectable({
  providedIn: 'root'
})
export class ModifyTotalAmountCommandService implements ICommandService {

  public constructor(
    private _modelService: ModelService,
    private _validatorService: ValidatorService,
    private _modifyTotalAmountCommandBuilderService: ModifyTotalAmountCommandBuilderService,
    private _modifyTotalAmountCommandDataService: ModifyTotalAmountCommandDataService) {
     }

  public async execute(): Promise<void> {
    // Get model
    const invoice: IInvoice = this._modelService.getModel();
    // Validate model
    if (this._validatorService.validate(invoice).length === 0) {
      // Build command
      const command: IModifyTotalAmountCommand = this._modifyTotalAmountCommandBuilderService.build(invoice);
      // Send command
      try {
        const result: IResultCommand = await this._modifyTotalAmountCommandDataService.send(command);
      } catch (Error) {
        console.log('Error');
      }
    }
  }
}
