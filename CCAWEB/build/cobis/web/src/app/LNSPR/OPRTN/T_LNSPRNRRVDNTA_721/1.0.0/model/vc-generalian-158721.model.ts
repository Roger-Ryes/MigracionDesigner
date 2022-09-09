import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { LoansLinesHeader } from "../../../../entities/LoansLinesHeader";
export class Model {
private _loansLinesHeader!: any;
constructor(private formGroupArray: any) {
this._loansLinesHeader = new LoansLinesHeader();
}
public set LoansLinesHeader(valores: any) {
this._loansLinesHeader = valores;
}
public get LoansLinesHeader(): any {
return this._loansLinesHeader;
}
}