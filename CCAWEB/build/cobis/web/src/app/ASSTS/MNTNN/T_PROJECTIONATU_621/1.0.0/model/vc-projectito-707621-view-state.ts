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
public T_PROJECTIONATU_621!:FormGroup;
public VC_PROJECTITO_707621:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PROJECTOTQ_450517 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PROJECTIUQ_171517 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PROJECTINO_339517 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_VASIMPLELABELLL_915517: CobisTextLabelModel = new CobisTextLabelModel();
public Spacer2108: CobisSpacerModel = new CobisSpacerModel();
public VA_FECHAPROYECCOIN_790517: CobisDateFieldModel = new CobisDateFieldModel();
public Spacer2857: CobisSpacerModel = new CobisSpacerModel();
public VA_DIASPROYECCIONO_148517: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public Spacer2838: CobisSpacerModel = new CobisSpacerModel();
public VA_TIPOUWNWJMGVYCI_648517: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public VA_DATEPROCESSGJPH_342517: CobisDateFieldModel = new CobisDateFieldModel();
public VA_VASIMPLELABELLL_283517: CobisTextLabelModel = new CobisTextLabelModel();
public VA_MONTOVIGENTEENO_276517: CobisTextLabelModel = new CobisTextLabelModel();
public VA_MONTOVENCIDOXAY_846517: CobisTextLabelModel = new CobisTextLabelModel();
public VA_MONTOPRECANCALO_956517: CobisTextLabelModel = new CobisTextLabelModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_PROJECTITO_707621.id="VC_PROJECTITO_707621";
this.VC_PROJECTITO_707621.name="ProjectionQuotaForm";
this.VC_PROJECTITO_707621.colSpan=2;
this.VC_PROJECTITO_707621.columns=1;
this.VC_PROJECTITO_707621.enabled=ConstantsApi.mode.All;
this.G_PROJECTOTQ_450517.id="G_PROJECTOTQ_450517";
this.G_PROJECTOTQ_450517.name="GroupLayout1435";
this.G_PROJECTOTQ_450517.columns=2;
this.G_PROJECTOTQ_450517.childrenGroups = ["G_PROJECTIUQ_171517","G_PROJECTINO_339517"];
this.G_PROJECTOTQ_450517.colSpan=1;
this.G_PROJECTOTQ_450517.enabled=ConstantsApi.mode.All;
this.G_PROJECTOTQ_450517.visible=ConstantsApi.mode.All;
this.G_PROJECTIUQ_171517.id="G_PROJECTIUQ_171517";
this.G_PROJECTIUQ_171517.name="Group1567";
this.G_PROJECTIUQ_171517.columns=2;
this.G_PROJECTIUQ_171517.labelOrientation="Top";
this.G_PROJECTIUQ_171517.colSpan=1;
this.G_PROJECTIUQ_171517.enabled=ConstantsApi.mode.All;
this.G_PROJECTIUQ_171517.visible=ConstantsApi.mode.All;
this.G_PROJECTIUQ_171517.attList = ["projectionDate","projectionDays","typeCalculation","dateProcess"];
this.G_PROJECTINO_339517.id="G_PROJECTINO_339517";
this.G_PROJECTINO_339517.name="Group2298";
this.G_PROJECTINO_339517.columns=1;
this.G_PROJECTINO_339517.labelOrientation="Top";
this.G_PROJECTINO_339517.colSpan=1;
this.G_PROJECTINO_339517.enabled=ConstantsApi.mode.All;
this.G_PROJECTINO_339517.visible=ConstantsApi.mode.All;
this.G_PROJECTINO_339517.attList = ["currentAmountDue","amountOverdue","prepaymentAmount"];
this.VA_VASIMPLELABELLL_915517.id = "VA_VASIMPLELABELLL_915517";
this.VA_VASIMPLELABELLL_915517.name = "VA_VASIMPLELABELLL_915517";
this.VA_VASIMPLELABELLL_915517.label = cobis.translate("ASSTS.LBL_ASSTS_FECHAPRON_57586");
this.VA_VASIMPLELABELLL_915517.colSpan = 1;
this.VA_VASIMPLELABELLL_915517.withoutLabel = false;
this.VA_VASIMPLELABELLL_915517.enabled = ConstantsApi.mode.None;
this.VA_VASIMPLELABELLL_915517.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_915517.className ="control_titulo";
this.Spacer2108.id = "Spacer2108";
this.Spacer2108.name = "Spacer2108";
this.Spacer2108.colSpan = 1;
this.Spacer2108.visible= ConstantsApi.mode.All;
this.VA_FECHAPROYECCOIN_790517.label = cobis.translate("ASSTS.LBL_ASSTS_FECHAPRON_57586");
this.VA_FECHAPROYECCOIN_790517.entity = "ProjectionQuota";
this.VA_FECHAPROYECCOIN_790517.attribute = "projectionDate";
this.VA_FECHAPROYECCOIN_790517.isCustomValidated=true;
this.VA_FECHAPROYECCOIN_790517.name="fechaProyeccion";
this.VA_FECHAPROYECCOIN_790517.id="VA_FECHAPROYECCOIN_790517";
this.VA_FECHAPROYECCOIN_790517.colSpan=1;
this.VA_FECHAPROYECCOIN_790517.withoutLabel = false;
this.VA_FECHAPROYECCOIN_790517.readOnly = ConstantsApi.mode.Query;
this.VA_FECHAPROYECCOIN_790517.enabled = ConstantsApi.mode.All;
this.VA_FECHAPROYECCOIN_790517.visible= ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_FECHAPROYECCOIN_790517.required = true;
this.VA_FECHAPROYECCOIN_790517.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_FECHAPROYECCOIN_790517.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.Spacer2857.id = "Spacer2857";
this.Spacer2857.name = "Spacer2857";
this.Spacer2857.colSpan = 1;
this.Spacer2857.visible= ConstantsApi.mode.All;
this.VA_DIASPROYECCIONO_148517.label = cobis.translate("ASSTS.LBL_ASSTS_DIASPROCA_33799");
this.VA_DIASPROYECCIONO_148517.entity = "ProjectionQuota";
this.VA_DIASPROYECCIONO_148517.attribute = "projectionDays";
this.VA_DIASPROYECCIONO_148517.textCase= TextCaseOptions.NONE;
this.VA_DIASPROYECCIONO_148517.format= "n0";
this.VA_DIASPROYECCIONO_148517.name="projectionDays";
this.VA_DIASPROYECCIONO_148517.id="VA_DIASPROYECCIONO_148517";
this.VA_DIASPROYECCIONO_148517.colSpan=1;
this.VA_DIASPROYECCIONO_148517.withoutLabel = false;
this.VA_DIASPROYECCIONO_148517.readOnly = ConstantsApi.mode.Query;
this.VA_DIASPROYECCIONO_148517.enabled = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_DIASPROYECCIONO_148517.visible= ConstantsApi.mode.All;
this.VA_DIASPROYECCIONO_148517.inputRestrictionValidators = { onlyNumbers: true};
this.VA_DIASPROYECCIONO_148517.required = true;
this.VA_DIASPROYECCIONO_148517.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_DIASPROYECCIONO_148517.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.Spacer2838.id = "Spacer2838";
this.Spacer2838.name = "Spacer2838";
this.Spacer2838.colSpan = 1;
this.Spacer2838.visible= ConstantsApi.mode.All;
this.VA_TIPOUWNWJMGVYCI_648517.id = "VA_TIPOUWNWJMGVYCI_648517";
this.VA_TIPOUWNWJMGVYCI_648517.name = "tipoCalculo";
this.VA_TIPOUWNWJMGVYCI_648517.attribute = "typeCalculation";
this.VA_TIPOUWNWJMGVYCI_648517.label = cobis.translate("ASSTS.LBL_ASSTS_MODALIDOC_51998");
this.VA_TIPOUWNWJMGVYCI_648517.colSpan = 1;
this.VA_TIPOUWNWJMGVYCI_648517.withoutLabel = false;
this.VA_TIPOUWNWJMGVYCI_648517.readOnly = ConstantsApi.mode.Query;
this.VA_TIPOUWNWJMGVYCI_648517.entity = "ProjectionQuota";
this.VA_TIPOUWNWJMGVYCI_648517.enabled = ConstantsApi.mode.All;
this.VA_TIPOUWNWJMGVYCI_648517.visible= ConstantsApi.mode.All;
this.VA_TIPOUWNWJMGVYCI_648517.textField = "value";
this.VA_TIPOUWNWJMGVYCI_648517.valueField = "code";
this.VA_DATEPROCESSGJPH_342517.label = cobis.translate("ASSTS.LBL_ASSTS_FECHAPRSC_69139");
this.VA_DATEPROCESSGJPH_342517.entity = "ProjectionQuota";
this.VA_DATEPROCESSGJPH_342517.attribute = "dateProcess";
this.VA_DATEPROCESSGJPH_342517.name="dateProcess";
this.VA_DATEPROCESSGJPH_342517.id="VA_DATEPROCESSGJPH_342517";
this.VA_DATEPROCESSGJPH_342517.colSpan=1;
this.VA_DATEPROCESSGJPH_342517.withoutLabel = false;
this.VA_DATEPROCESSGJPH_342517.readOnly = ConstantsApi.mode.Query;
this.VA_DATEPROCESSGJPH_342517.enabled = ConstantsApi.mode.All;
this.VA_DATEPROCESSGJPH_342517.visible= ConstantsApi.mode.None;
this.VA_VASIMPLELABELLL_283517.id = "VA_VASIMPLELABELLL_283517";
this.VA_VASIMPLELABELLL_283517.name = "VA_VASIMPLELABELLL_283517";
this.VA_VASIMPLELABELLL_283517.label = cobis.translate("ASSTS.LBL_ASSTS_PROYECCTI_84293");
this.VA_VASIMPLELABELLL_283517.colSpan = 1;
this.VA_VASIMPLELABELLL_283517.withoutLabel = false;
this.VA_VASIMPLELABELLL_283517.enabled = ConstantsApi.mode.None;
this.VA_VASIMPLELABELLL_283517.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_283517.className ="control_titulo";
this.VA_MONTOVIGENTEENO_276517.id = "VA_MONTOVIGENTEENO_276517";
this.VA_MONTOVIGENTEENO_276517.name = "montoVigenteVencido";
this.VA_MONTOVIGENTEENO_276517.label = cobis.translate("ASSTS.LBL_ASSTS_MONTOVIEE_67403");
this.VA_MONTOVIGENTEENO_276517.attribute = "currentAmountDue";
this.VA_MONTOVIGENTEENO_276517.colSpan = 1;
this.VA_MONTOVIGENTEENO_276517.withoutLabel = false;
this.VA_MONTOVIGENTEENO_276517.enabled = ConstantsApi.mode.Query;
this.VA_MONTOVIGENTEENO_276517.visible= ConstantsApi.mode.All;
this.VA_MONTOVIGENTEENO_276517.className ="control_monto_vencido";
this.VA_MONTOVENCIDOXAY_846517.id = "VA_MONTOVENCIDOXAY_846517";
this.VA_MONTOVENCIDOXAY_846517.name = "montoVencido";
this.VA_MONTOVENCIDOXAY_846517.label = cobis.translate("ASSTS.LBL_ASSTS_MONTOVEDC_35140");
this.VA_MONTOVENCIDOXAY_846517.attribute = "amountOverdue";
this.VA_MONTOVENCIDOXAY_846517.colSpan = 1;
this.VA_MONTOVENCIDOXAY_846517.withoutLabel = false;
this.VA_MONTOVENCIDOXAY_846517.enabled = ConstantsApi.mode.Query;
this.VA_MONTOVENCIDOXAY_846517.visible= ConstantsApi.mode.All;
this.VA_MONTOVENCIDOXAY_846517.className ="control_monto_vencido";
this.VA_MONTOPRECANCALO_956517.id = "VA_MONTOPRECANCALO_956517";
this.VA_MONTOPRECANCALO_956517.name = "montoPrecancelacion";
this.VA_MONTOPRECANCALO_956517.label = cobis.translate("ASSTS.LBL_ASSTS_MONTOPRCE_54604");
this.VA_MONTOPRECANCALO_956517.attribute = "prepaymentAmount";
this.VA_MONTOPRECANCALO_956517.colSpan = 1;
this.VA_MONTOPRECANCALO_956517.withoutLabel = false;
this.VA_MONTOPRECANCALO_956517.enabled = ConstantsApi.mode.Query;
this.VA_MONTOPRECANCALO_956517.visible= ConstantsApi.mode.All;
this.VA_MONTOPRECANCALO_956517.className ="control_monto_vencido";
this.T_PROJECTIONATU_621 = this.formBuilder.group({
ProjectionQuota: this.formBuilder.group({
projectionDate:[{value: null, disabled: !this.VA_FECHAPROYECCOIN_790517.visible},CobisDesignerUtil.getValidationFunctions(this.VA_FECHAPROYECCOIN_790517.validationFunctions!)],
projectionDays:[{value: null, disabled: !this.VA_DIASPROYECCIONO_148517.visible},CobisDesignerUtil.getValidationFunctions(this.VA_DIASPROYECCIONO_148517.validationFunctions!)],
typeCalculation:[{value: null, disabled: !this.VA_TIPOUWNWJMGVYCI_648517.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TIPOUWNWJMGVYCI_648517.validationFunctions!)],
dateProcess:[{value: null, disabled: !this.VA_DATEPROCESSGJPH_342517.visible},CobisDesignerUtil.getValidationFunctions(this.VA_DATEPROCESSGJPH_342517.validationFunctions!)],
currentAmountDue:[{value: null, disabled: !this.VA_MONTOVIGENTEENO_276517.visible}],
amountOverdue:[{value: null, disabled: !this.VA_MONTOVENCIDOXAY_846517.visible}],
prepaymentAmount:[{value: null, disabled: !this.VA_MONTOPRECANCALO_956517.visible}],
expirationDays:[null],
}
),
});
}
}