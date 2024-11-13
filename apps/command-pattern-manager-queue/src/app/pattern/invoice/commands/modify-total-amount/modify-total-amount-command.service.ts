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
import { CommandName } from '../commands';

@Injectable({
    providedIn: 'root'
})
export class ModifyTotalAmountCommandService implements ICommandService {
    public constructor(
        private _modelService: ModelService,
        private _validatorService: ValidatorService,
        private _modifyTotalAmountCommandBuilderService: ModifyTotalAmountCommandBuilderService,
        private _modifyTotalAmountCommandDataService: ModifyTotalAmountCommandDataService
    ) {}

    public getCommandName = () => CommandName.ModifyTotalAmount;

    public build(): ModifyTotalAmountCommand {
        const command: ModifyTotalAmountCommand = new ModifyTotalAmountCommand(
            this._modelService,
            this._validatorService,
            this._modifyTotalAmountCommandBuilderService,
            this._modifyTotalAmountCommandDataService
        );
        return command;
    }
}

export class ModifyTotalAmountCommand {
    private _model: IInvoice | undefined;

    public constructor(
        private _modelService: ModelService,
        private _validatorService: ValidatorService,
        private _modifyTotalAmountCommandBuilderService: ModifyTotalAmountCommandBuilderService,
        private _modifyTotalAmountCommandDataService: ModifyTotalAmountCommandDataService
    ) {
        this._model = _modelService.getModelCloned();
    }

    public enqueue(): boolean {
        return this._model?.id === undefined;
    }

    public async execute(): Promise<void> {
        // Get model
        const invoice: IInvoice | undefined = this._modelService.getModel();
        if (!invoice || !this._model) {
            return;
        }
        if (!this.hasChanges(this._model)) {
            return;
        }
        if (this.isNew()) {
            return;
        }

        // Set id
        if (!this._model.id) {
            this._model.id = invoice.id;
        }

        // Validate model
        if (this._validatorService.validate(this._model).length === 0) {
            // Build command
            const command: IModifyTotalAmountCommand = this._modifyTotalAmountCommandBuilderService.build(this._model);
            // Send command
            try {
                const result: IResultCommand = await this._modifyTotalAmountCommandDataService.send(command);
            } catch (Error) {
                console.log('Error');
            }
        }
    }

    private hasChanges(invoice: IInvoice): boolean {
        if (invoice) {
            return this._modelService.hasChanges(invoice, 'totalAmount');
        }
        return false;
    }

    private isNew(): boolean {
        return this._modelService.isNew();
    }
}
