import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { CompaniesList } from "../../../../entities/CompaniesList";
import { Company } from "../../../../entities/Company";
export class Model {
private _companiesList!: any;
private _company!: Company;
constructor(private formGroupArray: any) {
this._companiesList = new CompaniesList();
this._company = new Company(formGroupArray["Company"]);
}
public set CompaniesList(valores: any) {
this._companiesList = valores;
}
public get CompaniesList(): any {
return this._companiesList;
}
public set Company(valores: any) {
this._company = CobisDesignerUtil.getEntityData(this._company, valores);
}
public get Company():Company{
return this._company;
}
}