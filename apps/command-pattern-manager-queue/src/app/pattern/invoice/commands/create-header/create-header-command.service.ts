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
import { CommandName } from '../commands';

@Injectable({
    providedIn: 'root'
})
export class CreateHeaderCommandService implements ICommandService {
    public constructor(
        private _modelService: ModelService,
        private _validatorService: ValidatorService,
        private _createHeaderCommandBuilderService: CreateHeaderCommandBuilderService,
        private _createHeaderCommandDataService: CreateHeaderCommandDataService
    ) {}

    public getCommandName = () => CommandName.CreateHeader;

    public build(): CreateHeaderCommand {
        const command: CreateHeaderCommand = new CreateHeaderCommand(
            this._modelService,
            this._validatorService,
            this._createHeaderCommandBuilderService,
            this._createHeaderCommandDataService
        );
        return command;
    }
}

export class CreateHeaderCommand {
    private _model: IInvoice | undefined;

    public constructor(
        private _modelService: ModelService,
        private _validatorService: ValidatorService,
        private _createHeaderCommandBuilderService: CreateHeaderCommandBuilderService,
        private _createHeaderCommandDataService: CreateHeaderCommandDataService
    ) {
        this._model = this._modelService.getModelCloned();
    }

    public enqueue(): boolean {
        return true;
    }

    public async execute(): Promise<void> {
        // Get model
        const invoice: IInvoice | undefined = this._model;
        if (!invoice) {
            return;
        }

        // Validate model
        if (this._validatorService.validate(invoice).length === 0) {
            // Build command
            const command: ICreateHeaderCommand = this._createHeaderCommandBuilderService.build(invoice);
            // Send command
            try {
                const result: IResultCommand = await this._createHeaderCommandDataService.send(command);
                this.applyChanges(result);
            } catch (Error) {
                console.log('Error');
            }
        }
    }

    private applyChanges(result: IResultCommand): void {
        const invoice: IInvoice | undefined = this._modelService.getModel();
        if (invoice && this._model) {
            invoice.id = result.id;
        }
    }
}
