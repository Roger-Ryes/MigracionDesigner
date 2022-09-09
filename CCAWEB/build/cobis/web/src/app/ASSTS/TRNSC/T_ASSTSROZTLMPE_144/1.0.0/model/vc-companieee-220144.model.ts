import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { CompaniesSearchFilter } from "../../../../entities/CompaniesSearchFilter";
import { CompaniesList } from "../../../../entities/CompaniesList";
export class Model {
private _companiesSearchFilter!: CompaniesSearchFilter;
public CompaniesList!: any;
private _companiesListRowData!: CompaniesList;
constructor(private formGroupArray: any) {
this._companiesSearchFilter = new CompaniesSearchFilter(formGroupArray["CompaniesSearchFilter"]);
this.CompaniesList = [];
this._companiesListRowData = new CompaniesList(formGroupArray["CompaniesList"]);
}
public set CompaniesSearchFilter(valores: any) {
this._companiesSearchFilter = CobisDesignerUtil.getEntityData(this._companiesSearchFilter, valores);
}
public get CompaniesSearchFilter():CompaniesSearchFilter{
return this._companiesSearchFilter;
}
public set CompaniesListRowData(entity: any) {
this._companiesListRowData = entity;
}
public get CompaniesListRowData() {
return this._companiesListRowData;
}
}