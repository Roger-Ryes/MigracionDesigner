import { CobisCommonsService } from "cobis-commons";
import { CobisModelCatalog, CobisDesignerUtil } from "cobis-designer";
import { ModalTasaEntity } from "../../../../entities/ModalTasaEntity";
export class Model {
public ModalTasaEntity!: any;
private _modalTasaEntityRowData!: ModalTasaEntity;
constructor(private formGroupArray: any) {
this.ModalTasaEntity = [];
this._modalTasaEntityRowData = new ModalTasaEntity(formGroupArray["ModalTasaEntity"]);
}
public set ModalTasaEntityRowData(entity: any) {
this._modalTasaEntityRowData = entity;
}
public get ModalTasaEntityRowData() {
return this._modalTasaEntityRowData;
}
}