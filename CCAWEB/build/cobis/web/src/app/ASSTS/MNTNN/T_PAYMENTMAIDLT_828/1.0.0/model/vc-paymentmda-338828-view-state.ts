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
public T_PAYMENTMAIDLT_828!:FormGroup;
public VC_PAYMENTMDA_338828:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PAYMENTNNO_964701 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PAYMENTAMA_728701 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PAYMENTCCT_512701 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PAYMENTLNN_635701 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PAYMENTMNE_859701 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PAYMENTOEI_853701 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_CURRENCYRETETTO_736701: CobisDropDownListModel = new CobisDropDownListModel();
public VA_ACTIVEPASSIVEEE_865701: CobisDropDownListModel = new CobisDropDownListModel();
public VA_PRODUCTOFQZHBKU_354701: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_CATEGORYPGXZQCK_157701: CobisDropDownListModel = new CobisDropDownListModel();
public VA_DISBURSEMENTDSI_289701: CobisDropDownListModel = new CobisDropDownListModel();
public VA_VALUECODEEKTKMB_372701: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_DESCRIPTIONSUZS_167701: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_PAYMENTMETHODSD_816701: CobisDropDownListModel = new CobisDropDownListModel();
public VA_BANKSERVICESDQR_160701: CobisDropDownListModel = new CobisDropDownListModel();
public VA_PAYMENTATXPGDKX_602701: CobisDropDownListModel = new CobisDropDownListModel();
public VA_PAYMENTAUTLPCHV_485701: CobisDropDownListModel = new CobisDropDownListModel();
public VA_PAYMENTKWAZXHOL_773701: CobisDropDownListModel = new CobisDropDownListModel();
public VA_RETENTIONDAYSSS_990701: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_4075QLSXXQCUIPT_367701: CobisDropDownListModel = new CobisDropDownListModel();
public VA_CANALAHHGQQRYXT_909701: CobisDropDownListModel = new CobisDropDownListModel();
public VA_PCOBISNSCZVLGJB_151701: CobisDropDownListModel = new CobisDropDownListModel();
public VA_STATEUKNKICEOOK_121701: CobisDropDownListModel = new CobisDropDownListModel();
public VA_TRANSACCTIONKAF_634701: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public CM_TPAYMENT_TM7: CobisButtonModel = new CobisButtonModel();
public CM_TPAYMENT_08P: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_PAYMENTMDA_338828.id="VC_PAYMENTMDA_338828";
this.VC_PAYMENTMDA_338828.name="PaymentMaintenanceModal";
this.VC_PAYMENTMDA_338828.colSpan=1;
this.VC_PAYMENTMDA_338828.columns=1;
this.VC_PAYMENTMDA_338828.enabled=ConstantsApi.mode.All;
this.G_PAYMENTNNO_964701.id="G_PAYMENTNNO_964701";
this.G_PAYMENTNNO_964701.name="GroupLayout1108";
this.G_PAYMENTNNO_964701.columns=1;
this.G_PAYMENTNNO_964701.childrenGroups = ["G_PAYMENTAMA_728701","G_PAYMENTCCT_512701","G_PAYMENTLNN_635701","G_PAYMENTMNE_859701","G_PAYMENTOEI_853701"];
this.G_PAYMENTNNO_964701.colSpan=1;
this.G_PAYMENTNNO_964701.enabled=ConstantsApi.mode.All;
this.G_PAYMENTNNO_964701.visible=ConstantsApi.mode.All;
this.G_PAYMENTAMA_728701.id="G_PAYMENTAMA_728701";
this.G_PAYMENTAMA_728701.name="Group1768";
this.G_PAYMENTAMA_728701.columns=4;
this.G_PAYMENTAMA_728701.labelOrientation="Top";
this.G_PAYMENTAMA_728701.colSpan=1;
this.G_PAYMENTAMA_728701.enabled=ConstantsApi.mode.All;
this.G_PAYMENTAMA_728701.visible=ConstantsApi.mode.All;
this.G_PAYMENTAMA_728701.attList = ["currencyRetention","activePassive","product"];
this.G_PAYMENTCCT_512701.id="G_PAYMENTCCT_512701";
this.G_PAYMENTCCT_512701.name="Group2410";
this.G_PAYMENTCCT_512701.columns=4;
this.G_PAYMENTCCT_512701.labelOrientation="Top";
this.G_PAYMENTCCT_512701.colSpan=1;
this.G_PAYMENTCCT_512701.enabled=ConstantsApi.mode.All;
this.G_PAYMENTCCT_512701.visible=ConstantsApi.mode.All;
this.G_PAYMENTCCT_512701.attList = ["category","disbursement","valueCode"];
this.G_PAYMENTLNN_635701.id="G_PAYMENTLNN_635701";
this.G_PAYMENTLNN_635701.name="Group1760";
this.G_PAYMENTLNN_635701.columns=4;
this.G_PAYMENTLNN_635701.labelOrientation="Top";
this.G_PAYMENTLNN_635701.colSpan=1;
this.G_PAYMENTLNN_635701.enabled=ConstantsApi.mode.All;
this.G_PAYMENTLNN_635701.visible=ConstantsApi.mode.All;
this.G_PAYMENTLNN_635701.attList = ["description","paymentMethods"];
this.G_PAYMENTMNE_859701.id="G_PAYMENTMNE_859701";
this.G_PAYMENTMNE_859701.name="Group1320";
this.G_PAYMENTMNE_859701.columns=4;
this.G_PAYMENTMNE_859701.labelOrientation="Top";
this.G_PAYMENTMNE_859701.colSpan=1;
this.G_PAYMENTMNE_859701.enabled=ConstantsApi.mode.All;
this.G_PAYMENTMNE_859701.visible=ConstantsApi.mode.All;
this.G_PAYMENTMNE_859701.attList = ["bankServices","paymentATX","paymentAut","payment","retentiondays","over"];
this.G_PAYMENTOEI_853701.id="G_PAYMENTOEI_853701";
this.G_PAYMENTOEI_853701.name="Group2579";
this.G_PAYMENTOEI_853701.columns=4;
this.G_PAYMENTOEI_853701.labelOrientation="Top";
this.G_PAYMENTOEI_853701.colSpan=1;
this.G_PAYMENTOEI_853701.enabled=ConstantsApi.mode.All;
this.G_PAYMENTOEI_853701.visible=ConstantsApi.mode.All;
this.G_PAYMENTOEI_853701.attList = ["canal","pcobis","state","transacction"];
this.CM_TPAYMENT_TM7.id = "CM_TPAYMENT_TM7";
this.CM_TPAYMENT_TM7.name = "Command1";
this.CM_TPAYMENT_TM7.causesValidation=true;
this.CM_TPAYMENT_TM7.submitOnEnter=false;
this.CM_TPAYMENT_TM7.setFocus=false;
this.CM_TPAYMENT_TM7.close=false;
this.CM_TPAYMENT_TM7.label = cobis.translate("ASSTS.LBL_ASSTS_ACEPTARDV_64984");
this.CM_TPAYMENT_TM7.enabled = ConstantsApi.mode.All;
this.CM_TPAYMENT_TM7.visible= ConstantsApi.mode.All;
this.CM_TPAYMENT_08P.id = "CM_TPAYMENT_08P";
this.CM_TPAYMENT_08P.name = "Command2";
this.CM_TPAYMENT_08P.causesValidation=false;
this.CM_TPAYMENT_08P.submitOnEnter=false;
this.CM_TPAYMENT_08P.setFocus=false;
this.CM_TPAYMENT_08P.close=false;
this.CM_TPAYMENT_08P.label = cobis.translate("ASSTS.LBL_ASSTS_CANCELARR_70217");
this.CM_TPAYMENT_08P.enabled = ConstantsApi.mode.All;
this.CM_TPAYMENT_08P.visible= ConstantsApi.mode.All;
this.VA_CURRENCYRETETTO_736701.label = cobis.translate("ASSTS.LBL_ASSTS_MONEDATUB_92849");
this.VA_CURRENCYRETETTO_736701.entity = "MethodsRetention";
this.VA_CURRENCYRETETTO_736701.attribute = "currencyRetention";
this.VA_CURRENCYRETETTO_736701.textField = "value";
this.VA_CURRENCYRETETTO_736701.valueField = "code";
this.VA_CURRENCYRETETTO_736701.showId= true;
this.VA_CURRENCYRETETTO_736701.name="currencyRetention";
this.VA_CURRENCYRETETTO_736701.id="VA_CURRENCYRETETTO_736701";
this.VA_CURRENCYRETETTO_736701.colSpan=2;
this.VA_CURRENCYRETETTO_736701.withoutLabel = false;
this.VA_CURRENCYRETETTO_736701.readOnly = ConstantsApi.mode.Query;
this.VA_CURRENCYRETETTO_736701.enabled = ConstantsApi.mode.All;
this.VA_CURRENCYRETETTO_736701.visible= ConstantsApi.mode.All;
this.VA_ACTIVEPASSIVEEE_865701.label = cobis.translate("ASSTS.LBL_ASSTS_TIPOCARTR_61359");
this.VA_ACTIVEPASSIVEEE_865701.entity = "MethodsRetention";
this.VA_ACTIVEPASSIVEEE_865701.attribute = "activePassive";
this.VA_ACTIVEPASSIVEEE_865701.textField = "value";
this.VA_ACTIVEPASSIVEEE_865701.valueField = "code";
this.VA_ACTIVEPASSIVEEE_865701.showId= true;
this.VA_ACTIVEPASSIVEEE_865701.name="activePassive";
this.VA_ACTIVEPASSIVEEE_865701.id="VA_ACTIVEPASSIVEEE_865701";
this.VA_ACTIVEPASSIVEEE_865701.colSpan=1;
this.VA_ACTIVEPASSIVEEE_865701.withoutLabel = false;
this.VA_ACTIVEPASSIVEEE_865701.readOnly = ConstantsApi.mode.Query;
this.VA_ACTIVEPASSIVEEE_865701.enabled = ConstantsApi.mode.All;
this.VA_ACTIVEPASSIVEEE_865701.visible= ConstantsApi.mode.All;
this.VA_PRODUCTOFQZHBKU_354701.label = cobis.translate("ASSTS.LBL_ASSTS_IDENTIFCR_66965");
this.VA_PRODUCTOFQZHBKU_354701.entity = "MethodsRetention";
this.VA_PRODUCTOFQZHBKU_354701.attribute = "product";
this.VA_PRODUCTOFQZHBKU_354701.maxlength= 30;
this.VA_PRODUCTOFQZHBKU_354701.textCase= TextCaseOptions.UPPER_CASE;
this.VA_PRODUCTOFQZHBKU_354701.name="product";
this.VA_PRODUCTOFQZHBKU_354701.id="VA_PRODUCTOFQZHBKU_354701";
this.VA_PRODUCTOFQZHBKU_354701.colSpan=1;
this.VA_PRODUCTOFQZHBKU_354701.withoutLabel = false;
this.VA_PRODUCTOFQZHBKU_354701.readOnly = ConstantsApi.mode.Query;
this.VA_PRODUCTOFQZHBKU_354701.enabled = ConstantsApi.mode.All;
this.VA_PRODUCTOFQZHBKU_354701.visible= ConstantsApi.mode.All;
this.VA_PRODUCTOFQZHBKU_354701.required = true;
this.VA_PRODUCTOFQZHBKU_354701.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_PRODUCTOFQZHBKU_354701.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_CAMPOREUI_74379')
};
this.VA_CATEGORYPGXZQCK_157701.label = cobis.translate("ASSTS.LBL_ASSTS_CATEGORAA_59396");
this.VA_CATEGORYPGXZQCK_157701.blankOption=true;
this.VA_CATEGORYPGXZQCK_157701.entity = "MethodsRetention";
this.VA_CATEGORYPGXZQCK_157701.attribute = "category";
this.VA_CATEGORYPGXZQCK_157701.textField = "value";
this.VA_CATEGORYPGXZQCK_157701.valueField = "code";
this.VA_CATEGORYPGXZQCK_157701.showId= true;
this.VA_CATEGORYPGXZQCK_157701.name="category";
this.VA_CATEGORYPGXZQCK_157701.id="VA_CATEGORYPGXZQCK_157701";
this.VA_CATEGORYPGXZQCK_157701.colSpan=2;
this.VA_CATEGORYPGXZQCK_157701.withoutLabel = false;
this.VA_CATEGORYPGXZQCK_157701.readOnly = ConstantsApi.mode.Query;
this.VA_CATEGORYPGXZQCK_157701.enabled = ConstantsApi.mode.All;
this.VA_CATEGORYPGXZQCK_157701.visible= ConstantsApi.mode.All;
this.VA_CATEGORYPGXZQCK_157701.required = true;
this.VA_CATEGORYPGXZQCK_157701.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_CATEGORYPGXZQCK_157701.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_CAMPOREUI_74379')
};
this.VA_DISBURSEMENTDSI_289701.label = cobis.translate("ASSTS.LBL_ASSTS_DESEMBOLS_13177");
this.VA_DISBURSEMENTDSI_289701.entity = "MethodsRetention";
this.VA_DISBURSEMENTDSI_289701.attribute = "disbursement";
this.VA_DISBURSEMENTDSI_289701.textField = "value";
this.VA_DISBURSEMENTDSI_289701.valueField = "code";
this.VA_DISBURSEMENTDSI_289701.showId= true;
this.VA_DISBURSEMENTDSI_289701.name="disbursement";
this.VA_DISBURSEMENTDSI_289701.id="VA_DISBURSEMENTDSI_289701";
this.VA_DISBURSEMENTDSI_289701.colSpan=1;
this.VA_DISBURSEMENTDSI_289701.withoutLabel = false;
this.VA_DISBURSEMENTDSI_289701.readOnly = ConstantsApi.mode.Query;
this.VA_DISBURSEMENTDSI_289701.enabled = ConstantsApi.mode.All;
this.VA_DISBURSEMENTDSI_289701.visible= ConstantsApi.mode.All;
this.VA_VALUECODEEKTKMB_372701.label = cobis.translate("ASSTS.LBL_ASSTS_CDIGOVAOR_33178");
this.VA_VALUECODEEKTKMB_372701.entity = "MethodsRetention";
this.VA_VALUECODEEKTKMB_372701.attribute = "valueCode";
this.VA_VALUECODEEKTKMB_372701.textCase= TextCaseOptions.NONE;
this.VA_VALUECODEEKTKMB_372701.format= "n0";
this.VA_VALUECODEEKTKMB_372701.name="valueCode";
this.VA_VALUECODEEKTKMB_372701.id="VA_VALUECODEEKTKMB_372701";
this.VA_VALUECODEEKTKMB_372701.colSpan=1;
this.VA_VALUECODEEKTKMB_372701.withoutLabel = false;
this.VA_VALUECODEEKTKMB_372701.readOnly = ConstantsApi.mode.Query;
this.VA_VALUECODEEKTKMB_372701.enabled = ConstantsApi.mode.Query;
this.VA_VALUECODEEKTKMB_372701.visible= ConstantsApi.mode.All;
this.VA_DESCRIPTIONSUZS_167701.label = cobis.translate("ASSTS.LBL_ASSTS_DESCRIPNI_65857");
this.VA_DESCRIPTIONSUZS_167701.entity = "MethodsRetention";
this.VA_DESCRIPTIONSUZS_167701.attribute = "description";
this.VA_DESCRIPTIONSUZS_167701.maxlength= 70;
this.VA_DESCRIPTIONSUZS_167701.textCase= TextCaseOptions.UPPER_CASE;
this.VA_DESCRIPTIONSUZS_167701.name="description";
this.VA_DESCRIPTIONSUZS_167701.id="VA_DESCRIPTIONSUZS_167701";
this.VA_DESCRIPTIONSUZS_167701.colSpan=2;
this.VA_DESCRIPTIONSUZS_167701.withoutLabel = false;
this.VA_DESCRIPTIONSUZS_167701.readOnly = ConstantsApi.mode.Query;
this.VA_DESCRIPTIONSUZS_167701.enabled = ConstantsApi.mode.All;
this.VA_DESCRIPTIONSUZS_167701.visible= ConstantsApi.mode.All;
this.VA_DESCRIPTIONSUZS_167701.required = true;
this.VA_DESCRIPTIONSUZS_167701.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_DESCRIPTIONSUZS_167701.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_CAMPOREUI_74379')
};
this.VA_PAYMENTMETHODSD_816701.label = cobis.translate("ASSTS.LBL_ASSTS_APAGORERR_42797");
this.VA_PAYMENTMETHODSD_816701.blankOption=true;
this.VA_PAYMENTMETHODSD_816701.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905");
this.VA_PAYMENTMETHODSD_816701.entity = "MethodsRetention";
this.VA_PAYMENTMETHODSD_816701.attribute = "paymentMethods";
this.VA_PAYMENTMETHODSD_816701.textField = "value";
this.VA_PAYMENTMETHODSD_816701.valueField = "code";
this.VA_PAYMENTMETHODSD_816701.showId= true;
this.VA_PAYMENTMETHODSD_816701.name="paymentMethods";
this.VA_PAYMENTMETHODSD_816701.id="VA_PAYMENTMETHODSD_816701";
this.VA_PAYMENTMETHODSD_816701.colSpan=2;
this.VA_PAYMENTMETHODSD_816701.withoutLabel = false;
this.VA_PAYMENTMETHODSD_816701.readOnly = ConstantsApi.mode.Query;
this.VA_PAYMENTMETHODSD_816701.enabled = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_PAYMENTMETHODSD_816701.visible= ConstantsApi.mode.All;
this.VA_BANKSERVICESDQR_160701.label = cobis.translate("ASSTS.LBL_ASSTS_SERVICIOA_67043");
this.VA_BANKSERVICESDQR_160701.entity = "MethodsRetention";
this.VA_BANKSERVICESDQR_160701.attribute = "bankServices";
this.VA_BANKSERVICESDQR_160701.textField = "value";
this.VA_BANKSERVICESDQR_160701.valueField = "code";
this.VA_BANKSERVICESDQR_160701.showId= true;
this.VA_BANKSERVICESDQR_160701.name="bankServices";
this.VA_BANKSERVICESDQR_160701.id="VA_BANKSERVICESDQR_160701";
this.VA_BANKSERVICESDQR_160701.colSpan=1;
this.VA_BANKSERVICESDQR_160701.withoutLabel = false;
this.VA_BANKSERVICESDQR_160701.readOnly = ConstantsApi.mode.Query;
this.VA_BANKSERVICESDQR_160701.enabled = ConstantsApi.mode.All;
this.VA_BANKSERVICESDQR_160701.visible= ConstantsApi.mode.None;
this.VA_PAYMENTATXPGDKX_602701.label = cobis.translate("ASSTS.LBL_ASSTS_PAGOPORAA_60202");
this.VA_PAYMENTATXPGDKX_602701.entity = "MethodsRetention";
this.VA_PAYMENTATXPGDKX_602701.attribute = "paymentATX";
this.VA_PAYMENTATXPGDKX_602701.textField = "value";
this.VA_PAYMENTATXPGDKX_602701.valueField = "code";
this.VA_PAYMENTATXPGDKX_602701.showId= true;
this.VA_PAYMENTATXPGDKX_602701.name="paymentATX";
this.VA_PAYMENTATXPGDKX_602701.id="VA_PAYMENTATXPGDKX_602701";
this.VA_PAYMENTATXPGDKX_602701.colSpan=1;
this.VA_PAYMENTATXPGDKX_602701.withoutLabel = false;
this.VA_PAYMENTATXPGDKX_602701.readOnly = ConstantsApi.mode.Query;
this.VA_PAYMENTATXPGDKX_602701.enabled = ConstantsApi.mode.All;
this.VA_PAYMENTATXPGDKX_602701.visible= ConstantsApi.mode.All;
this.VA_PAYMENTAUTLPCHV_485701.label = cobis.translate("ASSTS.LBL_ASSTS_PAGOSAUTT_59705");
this.VA_PAYMENTAUTLPCHV_485701.entity = "MethodsRetention";
this.VA_PAYMENTAUTLPCHV_485701.attribute = "paymentAut";
this.VA_PAYMENTAUTLPCHV_485701.textField = "value";
this.VA_PAYMENTAUTLPCHV_485701.valueField = "code";
this.VA_PAYMENTAUTLPCHV_485701.showId= true;
this.VA_PAYMENTAUTLPCHV_485701.name="paymentAut";
this.VA_PAYMENTAUTLPCHV_485701.id="VA_PAYMENTAUTLPCHV_485701";
this.VA_PAYMENTAUTLPCHV_485701.colSpan=1;
this.VA_PAYMENTAUTLPCHV_485701.withoutLabel = false;
this.VA_PAYMENTAUTLPCHV_485701.readOnly = ConstantsApi.mode.Query;
this.VA_PAYMENTAUTLPCHV_485701.enabled = ConstantsApi.mode.All;
this.VA_PAYMENTAUTLPCHV_485701.visible= ConstantsApi.mode.All;
this.VA_PAYMENTKWAZXHOL_773701.label = cobis.translate("ASSTS.LBL_ASSTS_PAGOSBHJO_80531");
this.VA_PAYMENTKWAZXHOL_773701.entity = "MethodsRetention";
this.VA_PAYMENTKWAZXHOL_773701.attribute = "payment";
this.VA_PAYMENTKWAZXHOL_773701.textField = "value";
this.VA_PAYMENTKWAZXHOL_773701.valueField = "code";
this.VA_PAYMENTKWAZXHOL_773701.showId= true;
this.VA_PAYMENTKWAZXHOL_773701.name="payment";
this.VA_PAYMENTKWAZXHOL_773701.id="VA_PAYMENTKWAZXHOL_773701";
this.VA_PAYMENTKWAZXHOL_773701.colSpan=1;
this.VA_PAYMENTKWAZXHOL_773701.withoutLabel = false;
this.VA_PAYMENTKWAZXHOL_773701.readOnly = ConstantsApi.mode.Query;
this.VA_PAYMENTKWAZXHOL_773701.enabled = ConstantsApi.mode.All;
this.VA_PAYMENTKWAZXHOL_773701.visible= ConstantsApi.mode.All;
this.VA_RETENTIONDAYSSS_990701.label = cobis.translate("ASSTS.LBL_ASSTS_DASRETECN_29008");
this.VA_RETENTIONDAYSSS_990701.entity = "MethodsRetention";
this.VA_RETENTIONDAYSSS_990701.attribute = "retentiondays";
this.VA_RETENTIONDAYSSS_990701.textCase= TextCaseOptions.NONE;
this.VA_RETENTIONDAYSSS_990701.format= "n0";
this.VA_RETENTIONDAYSSS_990701.name="retentiondays";
this.VA_RETENTIONDAYSSS_990701.id="VA_RETENTIONDAYSSS_990701";
this.VA_RETENTIONDAYSSS_990701.colSpan=1;
this.VA_RETENTIONDAYSSS_990701.withoutLabel = false;
this.VA_RETENTIONDAYSSS_990701.readOnly = ConstantsApi.mode.Query;
this.VA_RETENTIONDAYSSS_990701.enabled = ConstantsApi.mode.All;
this.VA_RETENTIONDAYSSS_990701.visible= ConstantsApi.mode.All;
this.VA_RETENTIONDAYSSS_990701.required = true;
this.VA_RETENTIONDAYSSS_990701.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_RETENTIONDAYSSS_990701.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_CAMPOREUI_74379')
};
this.VA_4075QLSXXQCUIPT_367701.label = cobis.translate("ASSTS.LBL_ASSTS_SOBRANTSE_66830");
this.VA_4075QLSXXQCUIPT_367701.entity = "MethodsRetention";
this.VA_4075QLSXXQCUIPT_367701.attribute = "over";
this.VA_4075QLSXXQCUIPT_367701.textField = "value";
this.VA_4075QLSXXQCUIPT_367701.valueField = "code";
this.VA_4075QLSXXQCUIPT_367701.showId= true;
this.VA_4075QLSXXQCUIPT_367701.name="over";
this.VA_4075QLSXXQCUIPT_367701.id="VA_4075QLSXXQCUIPT_367701";
this.VA_4075QLSXXQCUIPT_367701.colSpan=1;
this.VA_4075QLSXXQCUIPT_367701.withoutLabel = false;
this.VA_4075QLSXXQCUIPT_367701.readOnly = ConstantsApi.mode.Query;
this.VA_4075QLSXXQCUIPT_367701.enabled = ConstantsApi.mode.All;
this.VA_4075QLSXXQCUIPT_367701.visible= ConstantsApi.mode.All;
this.VA_CANALAHHGQQRYXT_909701.label = cobis.translate("ASSTS.LBL_ASSTS_CANALGFWW_89486");
this.VA_CANALAHHGQQRYXT_909701.entity = "MethodsRetention";
this.VA_CANALAHHGQQRYXT_909701.attribute = "canal";
this.VA_CANALAHHGQQRYXT_909701.tooltip=cobis.translate("ASSTS.LBL_ASSTS_CANALGFWW_89486");
this.VA_CANALAHHGQQRYXT_909701.textField = "value";
this.VA_CANALAHHGQQRYXT_909701.valueField = "code";
this.VA_CANALAHHGQQRYXT_909701.showId= true;
this.VA_CANALAHHGQQRYXT_909701.name="canal";
this.VA_CANALAHHGQQRYXT_909701.id="VA_CANALAHHGQQRYXT_909701";
this.VA_CANALAHHGQQRYXT_909701.colSpan=1;
this.VA_CANALAHHGQQRYXT_909701.withoutLabel = false;
this.VA_CANALAHHGQQRYXT_909701.readOnly = ConstantsApi.mode.Query;
this.VA_CANALAHHGQQRYXT_909701.enabled = ConstantsApi.mode.All;
this.VA_CANALAHHGQQRYXT_909701.visible= ConstantsApi.mode.All;
this.VA_PCOBISNSCZVLGJB_151701.label = cobis.translate("ASSTS.LBL_ASSTS_PRODUCTIB_77965");
this.VA_PCOBISNSCZVLGJB_151701.blankOption=true;
this.VA_PCOBISNSCZVLGJB_151701.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905");
this.VA_PCOBISNSCZVLGJB_151701.entity = "MethodsRetention";
this.VA_PCOBISNSCZVLGJB_151701.attribute = "pcobis";
this.VA_PCOBISNSCZVLGJB_151701.textField = "value";
this.VA_PCOBISNSCZVLGJB_151701.valueField = "code";
this.VA_PCOBISNSCZVLGJB_151701.showId= true;
this.VA_PCOBISNSCZVLGJB_151701.name="pcobis";
this.VA_PCOBISNSCZVLGJB_151701.id="VA_PCOBISNSCZVLGJB_151701";
this.VA_PCOBISNSCZVLGJB_151701.colSpan=2;
this.VA_PCOBISNSCZVLGJB_151701.withoutLabel = false;
this.VA_PCOBISNSCZVLGJB_151701.readOnly = ConstantsApi.mode.Query;
this.VA_PCOBISNSCZVLGJB_151701.enabled = ConstantsApi.mode.All;
this.VA_PCOBISNSCZVLGJB_151701.visible= ConstantsApi.mode.All;
this.VA_STATEUKNKICEOOK_121701.label = cobis.translate("ASSTS.LBL_ASSTS_ESTADOEAI_33340");
this.VA_STATEUKNKICEOOK_121701.entity = "MethodsRetention";
this.VA_STATEUKNKICEOOK_121701.attribute = "state";
this.VA_STATEUKNKICEOOK_121701.textField = "value";
this.VA_STATEUKNKICEOOK_121701.valueField = "code";
this.VA_STATEUKNKICEOOK_121701.showId= true;
this.VA_STATEUKNKICEOOK_121701.name="state";
this.VA_STATEUKNKICEOOK_121701.id="VA_STATEUKNKICEOOK_121701";
this.VA_STATEUKNKICEOOK_121701.colSpan=2;
this.VA_STATEUKNKICEOOK_121701.withoutLabel = false;
this.VA_STATEUKNKICEOOK_121701.readOnly = ConstantsApi.mode.Query;
this.VA_STATEUKNKICEOOK_121701.enabled = ConstantsApi.mode.All;
this.VA_STATEUKNKICEOOK_121701.visible= ConstantsApi.mode.All;
this.VA_TRANSACCTIONKAF_634701.id = "VA_TRANSACCTIONKAF_634701";
this.VA_TRANSACCTIONKAF_634701.name = "transacction";
this.VA_TRANSACCTIONKAF_634701.attribute = "transacction";
this.VA_TRANSACCTIONKAF_634701.colSpan = 1;
this.VA_TRANSACCTIONKAF_634701.withoutLabel = false;
this.VA_TRANSACCTIONKAF_634701.readOnly = ConstantsApi.mode.Query;
this.VA_TRANSACCTIONKAF_634701.entity = "MethodsRetention";
this.VA_TRANSACCTIONKAF_634701.enabled = ConstantsApi.mode.All;
this.VA_TRANSACCTIONKAF_634701.visible= ConstantsApi.mode.All;
this.VA_TRANSACCTIONKAF_634701.textField = "value";
this.VA_TRANSACCTIONKAF_634701.valueField = "code";
this.T_PAYMENTMAIDLT_828 = this.formBuilder.group({
MethodsRetention: this.formBuilder.group({
currencyRetention:[{value: null, disabled: !this.VA_CURRENCYRETETTO_736701.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CURRENCYRETETTO_736701.validationFunctions!)],
activePassive:[{value: null, disabled: !this.VA_ACTIVEPASSIVEEE_865701.visible},CobisDesignerUtil.getValidationFunctions(this.VA_ACTIVEPASSIVEEE_865701.validationFunctions!)],
product:[{value: null, disabled: !this.VA_PRODUCTOFQZHBKU_354701.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PRODUCTOFQZHBKU_354701.validationFunctions!)],
category:[{value: null, disabled: !this.VA_CATEGORYPGXZQCK_157701.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CATEGORYPGXZQCK_157701.validationFunctions!)],
disbursement:[{value: null, disabled: !this.VA_DISBURSEMENTDSI_289701.visible},CobisDesignerUtil.getValidationFunctions(this.VA_DISBURSEMENTDSI_289701.validationFunctions!)],
valueCode:[{value: null, disabled: !this.VA_VALUECODEEKTKMB_372701.visible},CobisDesignerUtil.getValidationFunctions(this.VA_VALUECODEEKTKMB_372701.validationFunctions!)],
description:[{value: null, disabled: !this.VA_DESCRIPTIONSUZS_167701.visible},CobisDesignerUtil.getValidationFunctions(this.VA_DESCRIPTIONSUZS_167701.validationFunctions!)],
paymentMethods:[{value: null, disabled: !this.VA_PAYMENTMETHODSD_816701.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PAYMENTMETHODSD_816701.validationFunctions!)],
bankServices:[{value: null, disabled: !this.VA_BANKSERVICESDQR_160701.visible},CobisDesignerUtil.getValidationFunctions(this.VA_BANKSERVICESDQR_160701.validationFunctions!)],
paymentATX:[{value: null, disabled: !this.VA_PAYMENTATXPGDKX_602701.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PAYMENTATXPGDKX_602701.validationFunctions!)],
paymentAut:[{value: null, disabled: !this.VA_PAYMENTAUTLPCHV_485701.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PAYMENTAUTLPCHV_485701.validationFunctions!)],
payment:[{value: null, disabled: !this.VA_PAYMENTKWAZXHOL_773701.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PAYMENTKWAZXHOL_773701.validationFunctions!)],
retentiondays:[{value: null, disabled: !this.VA_RETENTIONDAYSSS_990701.visible},CobisDesignerUtil.getValidationFunctions(this.VA_RETENTIONDAYSSS_990701.validationFunctions!)],
over:[{value: null, disabled: !this.VA_4075QLSXXQCUIPT_367701.visible},CobisDesignerUtil.getValidationFunctions(this.VA_4075QLSXXQCUIPT_367701.validationFunctions!)],
canal:[{value: null, disabled: !this.VA_CANALAHHGQQRYXT_909701.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CANALAHHGQQRYXT_909701.validationFunctions!)],
pcobis:[{value: null, disabled: !this.VA_PCOBISNSCZVLGJB_151701.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PCOBISNSCZVLGJB_151701.validationFunctions!)],
state:[{value: null, disabled: !this.VA_STATEUKNKICEOOK_121701.visible},CobisDesignerUtil.getValidationFunctions(this.VA_STATEUKNKICEOOK_121701.validationFunctions!)],
transacction:[{value: null, disabled: !this.VA_TRANSACCTIONKAF_634701.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TRANSACCTIONKAF_634701.validationFunctions!)],
descriptionCanal:[null],
descCurrency:[null],
reversePro:[null],
bankInstrument:[null],
codeCategory:[null],
descripBank:[null],
descCOBIS:[null],
descriptionCategory:[null],
affectation:[null],
}
),
});
}
}