import { Component, OnInit } from "@angular/core";

import { PersonModelService } from "./pattern/services/personModel.service";
import { IPerson } from "./pattern/entities/iPerson";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  public constructor(private _personModelService: PersonModelService) {}

  title = "Memento pattern";

  originalModel: string;
  modifiedModel: string;
  restoredModel: string;

  public ngOnInit(): void {
    //Create new person
    const myModel: IPerson = {
      id: "1",
      name: "test",
      country: {
        id: 1,
        name: "spain",
        code: "ES",
      },
      birthDate: new Date(),
    };

    //Store the person in model service
    this._personModelService.setModel(myModel);
    this.originalModel = this._personModelService.toString();

    //Make backup/memento
    this._personModelService.makeModelBackup();

    //Change values
    myModel.id = "2";
    myModel.name = "modified";
    myModel.country = null;
    myModel.birthDate.setDate(myModel.birthDate.getDate() - 1);
    this.modifiedModel = this._personModelService.toString();

    //Restore memento
    this._personModelService.restoreModelBackup();
    this.restoredModel = this._personModelService.toString();
  }
}
