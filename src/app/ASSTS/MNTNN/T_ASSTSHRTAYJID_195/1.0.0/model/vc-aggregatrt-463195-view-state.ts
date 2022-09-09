//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022

import { CobisDesignerUtil, ConstantsApi, VisualValidationTypeEnum } from "cobis-designer";
import { CobisCommonsService } from 'cobis-commons';
import {FormBuilder, FormGroup,ValidatorFn, Validators} from "@angular/forms";
import { of } from 'rxjs';
import {
CobisGroupBoxModel,
CobisCheckBoxModel,
CobisDateFieldModel,
CobisDateTimeFieldModel,
CobisMaskedTextBoxModel,
CobisNumericInputBoxModel,
CobisNumericInputButtonModel,
CobisRadioButtonListModel,
CobisTextAreaModel,
CobisSpacerModel,
CobisSeparatorModel,
CobisCompositevaModel,
CobisTextInputBoxModel,
CobisTextInputButtonModel,
CobisTimePickerModel,
CobisDropDownListModel,
CobisFileUploadModel,
CobisGridModel,
CobisButtonModel,
CobisCollapsibleContainerModel,
CobisCollapsibleItemModel,
CobisTabbedLayoutContainerModel,
CobisTabbedLayoutTabModel,
CobisControlModel,
CobisTextLabelModel,
LayoutConstants,
DropDownListValidators,
CobisMultiSelectModel,
CustomValidators,
ComplexConstants,
FilterData,
FilterType,
Util,
CommonsConstants,
PositionTab,
CustomValidatorOperator,
TextCaseOptions,
ControlType
} from "cobis-designer-controls";
export class ViewState {
public T_ASSTSHRTAYJID_195!:FormGroup;
public VC_AGGREGATRT_463195:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_AGGREGATST_650397 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_1KIRFVKPRWSWCCE_730397: CobisDropDownListModel = new CobisDropDownListModel();
public VA_8482SGVAKLBEUXQ_566397: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public CM_TASSTSHR_TNS: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_AGGREGATRT_463195.id="VC_AGGREGATRT_463195";
this.VC_AGGREGATRT_463195.name="AggregateDeferredItemsForm";
this.VC_AGGREGATRT_463195.colSpan=1;
this.VC_AGGREGATRT_463195.columns=1;
this.VC_AGGREGATRT_463195.enabled=ConstantsApi.mode.All;
this.G_AGGREGATST_650397.id="G_AGGREGATST_650397";
this.G_AGGREGATST_650397.name="Group1930";
this.G_AGGREGATST_650397.columns=3;
this.G_AGGREGATST_650397.labelOrientation="Top";
this.G_AGGREGATST_650397.colSpan=1;
this.G_AGGREGATST_650397.enabled=ConstantsApi.mode.All;
this.G_AGGREGATST_650397.visible=ConstantsApi.mode.All;
this.G_AGGREGATST_650397.attList = ["item","amount"];
this.CM_TASSTSHR_TNS.id = "CM_TASSTSHR_TNS";
this.CM_TASSTSHR_TNS.name = "Command1";
this.CM_TASSTSHR_TNS.causesValidation=false;
this.CM_TASSTSHR_TNS.submitOnEnter=false;
this.CM_TASSTSHR_TNS.setFocus=false;
this.CM_TASSTSHR_TNS.close=false;
this.CM_TASSTSHR_TNS.label = cobis.translate("ASSTS.LBL_ASSTS_TRANSMITR_50090");
this.CM_TASSTSHR_TNS.enabled = ConstantsApi.mode.All;
this.CM_TASSTSHR_TNS.visible= ConstantsApi.mode.All;
this.VA_1KIRFVKPRWSWCCE_730397.label = cobis.translate("ASSTS.LBL_ASSTS_CONCEPTOO_16181");
this.VA_1KIRFVKPRWSWCCE_730397.blankOption=true;
this.VA_1KIRFVKPRWSWCCE_730397.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905");
this.VA_1KIRFVKPRWSWCCE_730397.entity = "AggregateDeferredItemsEntity";
this.VA_1KIRFVKPRWSWCCE_730397.attribute = "item";
this.VA_1KIRFVKPRWSWCCE_730397.textField = "value";
this.VA_1KIRFVKPRWSWCCE_730397.valueField = "code";
this.VA_1KIRFVKPRWSWCCE_730397.showId= true;
this.VA_1KIRFVKPRWSWCCE_730397.name="item";
this.VA_1KIRFVKPRWSWCCE_730397.id="VA_1KIRFVKPRWSWCCE_730397";
this.VA_1KIRFVKPRWSWCCE_730397.colSpan=2;
this.VA_1KIRFVKPRWSWCCE_730397.withoutLabel = false;
this.VA_1KIRFVKPRWSWCCE_730397.readOnly = ConstantsApi.mode.Query;
this.VA_1KIRFVKPRWSWCCE_730397.enabled = ConstantsApi.mode.All;
this.VA_1KIRFVKPRWSWCCE_730397.visible= ConstantsApi.mode.All;
this.VA_8482SGVAKLBEUXQ_566397.label = cobis.translate("ASSTS.LBL_ASSTS_MONTOEMFX_52083");
this.VA_8482SGVAKLBEUXQ_566397.entity = "AggregateDeferredItemsEntity";
this.VA_8482SGVAKLBEUXQ_566397.attribute = "amount";
this.VA_8482SGVAKLBEUXQ_566397.textCase= TextCaseOptions.NONE;
this.VA_8482SGVAKLBEUXQ_566397.format= "n";
this.VA_8482SGVAKLBEUXQ_566397.name="amount";
this.VA_8482SGVAKLBEUXQ_566397.id="VA_8482SGVAKLBEUXQ_566397";
this.VA_8482SGVAKLBEUXQ_566397.colSpan=1;
this.VA_8482SGVAKLBEUXQ_566397.withoutLabel = false;
this.VA_8482SGVAKLBEUXQ_566397.readOnly = ConstantsApi.mode.Query;
this.VA_8482SGVAKLBEUXQ_566397.enabled = ConstantsApi.mode.All;
this.VA_8482SGVAKLBEUXQ_566397.visible= ConstantsApi.mode.All;
this.T_ASSTSHRTAYJID_195 = this.formBuilder.group({
AggregateDeferredItemsEntity: this.formBuilder.group({
item:[{value: null, disabled: !this.VA_1KIRFVKPRWSWCCE_730397.visible},CobisDesignerUtil.getValidationFunctions(this.VA_1KIRFVKPRWSWCCE_730397.validationFunctions!)],
amount:[{value: null, disabled: !this.VA_8482SGVAKLBEUXQ_566397.visible},CobisDesignerUtil.getValidationFunctions(this.VA_8482SGVAKLBEUXQ_566397.validationFunctions!)],
operation:[null],
description:[null],
}
),
});
}
}