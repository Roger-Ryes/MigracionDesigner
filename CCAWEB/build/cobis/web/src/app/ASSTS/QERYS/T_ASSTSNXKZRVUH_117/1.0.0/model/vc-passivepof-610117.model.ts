import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { DataPassivePortfolio } from "../../../../entities/DataPassivePortfolio";
export class Model {
private _dataPassivePortfolio!: DataPassivePortfolio;
constructor(private formGroupArray: any) {
this._dataPassivePortfolio = new DataPassivePortfolio(formGroupArray["DataPassivePortfolio"]);
}
public set DataPassivePortfolio(valores: any) {
this._dataPassivePortfolio = CobisDesignerUtil.getEntityData(this._dataPassivePortfolio, valores);
}
public get DataPassivePortfolio():DataPassivePortfolio{
return this._dataPassivePortfolio;
}
}