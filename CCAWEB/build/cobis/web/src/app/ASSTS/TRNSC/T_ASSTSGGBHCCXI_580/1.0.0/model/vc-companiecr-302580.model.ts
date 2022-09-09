import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { CompaniesBatch } from "../../../../entities/CompaniesBatch";
import { CompaniesDiscountsFileList } from "../../../../entities/CompaniesDiscountsFileList";
import { CompaniesDiscountsFile } from "../../../../entities/CompaniesDiscountsFile";
import { CompaniesDiscountsList } from "../../../../entities/CompaniesDiscountsList";
export class Model {
private _companiesBatch!: CompaniesBatch;
public CompaniesDiscountsFileList!: any;
private _companiesDiscountsFileListRowData!: CompaniesDiscountsFileList;
private _companiesDiscountsFile!: any;
public CompaniesDiscountsList!: any;
private _companiesDiscountsListRowData!: CompaniesDiscountsList;
constructor(private formGroupArray: any) {
this._companiesBatch = new CompaniesBatch(formGroupArray["CompaniesBatch"]);
this.CompaniesDiscountsFileList = [];
this._companiesDiscountsFileListRowData = new CompaniesDiscountsFileList(formGroupArray["CompaniesDiscountsFileList"]);
this._companiesDiscountsFile = new CompaniesDiscountsFile();
this.CompaniesDiscountsList = [];
this._companiesDiscountsListRowData = new CompaniesDiscountsList(formGroupArray["CompaniesDiscountsList"]);
}
public set CompaniesBatch(valores: any) {
this._companiesBatch = CobisDesignerUtil.getEntityData(this._companiesBatch, valores);
}
public get CompaniesBatch():CompaniesBatch{
return this._companiesBatch;
}
public set CompaniesDiscountsFileListRowData(entity: any) {
this._companiesDiscountsFileListRowData = entity;
}
public get CompaniesDiscountsFileListRowData() {
return this._companiesDiscountsFileListRowData;
}
public set CompaniesDiscountsFile(valores: any) {
this._companiesDiscountsFile = valores;
}
public get CompaniesDiscountsFile(): any {
return this._companiesDiscountsFile;
}
public set CompaniesDiscountsListRowData(entity: any) {
this._companiesDiscountsListRowData = entity;
}
public get CompaniesDiscountsListRowData() {
return this._companiesDiscountsListRowData;
}
}