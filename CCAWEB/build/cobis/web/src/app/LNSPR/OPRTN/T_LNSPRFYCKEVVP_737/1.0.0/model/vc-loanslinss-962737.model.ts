import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { LoansLines } from "../../../../entities/LoansLines";
import { LoansLinesList } from "../../../../entities/LoansLinesList";
export class Model {
private _loansLines!: LoansLines;
public LoansLinesList!: any;
private _loansLinesListRowData!: LoansLinesList;
constructor(private formGroupArray: any) {
this._loansLines = new LoansLines(formGroupArray["LoansLines"]);
this.LoansLinesList = [];
this._loansLinesListRowData = new LoansLinesList(formGroupArray["LoansLinesList"]);
}
public set LoansLines(valores: any) {
this._loansLines = CobisDesignerUtil.getEntityData(this._loansLines, valores);
}
public get LoansLines():LoansLines{
return this._loansLines;
}
public set LoansLinesListRowData(entity: any) {
this._loansLinesListRowData = entity;
}
public get LoansLinesListRowData() {
return this._loansLinesListRowData;
}
}