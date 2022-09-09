import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { OperationTypeLineList } from "../../../../entities/OperationTypeLineList";
import { ProductLineDistributionList } from "../../../../entities/ProductLineDistributionList";
import { ProductLineDistribution } from "../../../../entities/ProductLineDistribution";
import { ProductLineList } from "../../../../entities/ProductLineList";
export class Model {
private _operationTypeLineList!: any;
public ProductLineDistributionList!: any;
private _productLineDistributionListRowData!: ProductLineDistributionList;
private _productLineDistribution!: ProductLineDistribution;
private _productLineList!: any;
constructor(private formGroupArray: any) {
this._operationTypeLineList = new OperationTypeLineList();
this.ProductLineDistributionList = [];
this._productLineDistributionListRowData = new ProductLineDistributionList(formGroupArray["ProductLineDistributionList"]);
this._productLineDistribution = new ProductLineDistribution(formGroupArray["ProductLineDistribution"]);
this._productLineList = new ProductLineList();
}
public set OperationTypeLineList(valores: any) {
this._operationTypeLineList = valores;
}
public get OperationTypeLineList(): any {
return this._operationTypeLineList;
}
public set ProductLineDistributionListRowData(entity: any) {
this._productLineDistributionListRowData = entity;
}
public get ProductLineDistributionListRowData() {
return this._productLineDistributionListRowData;
}
public set ProductLineDistribution(valores: any) {
this._productLineDistribution = CobisDesignerUtil.getEntityData(this._productLineDistribution, valores);
}
public get ProductLineDistribution():ProductLineDistribution{
return this._productLineDistribution;
}
public set ProductLineList(valores: any) {
this._productLineList = valores;
}
public get ProductLineList(): any {
return this._productLineList;
}
}