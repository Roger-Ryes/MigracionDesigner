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
public T_ASSTSVIKJRAKP_845!:FormGroup;
public VC_COMPANYCEE_242845:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_COMPANYACR_999399 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_COMPANYECE_756399 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_COMPANYCTE_467399 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_COMPANYTCT_526399 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_COMPANYAEE_130399 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_COMPANYECE_272399 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_COMPANYRTT_593399 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_INSTITUTIONBQXY_678399: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public Spacer1915: CobisSpacerModel = new CobisSpacerModel();
public VA_RUCHZFGFPZCYSSW_363399: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_COMPANYNAMEZNHG_699399: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_ADDRESSDAOSWZAE_648399: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_PHONEECCKKVFLPC_585399: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_CONTACTZVFBCLKT_306399: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_PAYMENTAREASIKP_341399: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_PAYMENTPERCEEAT_841399: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_PAYMENTSERVICCC_447399: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public VA_PAYMENTFREQUNCN_755399: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public VA_CLIENTRGTMTTEWO_906399: CobisNumericInputButtonModel = new CobisNumericInputButtonModel();
public VA_PAYMENTUVUDGASL_450399: CobisDropDownListModel = new CobisDropDownListModel();
public VA_ACCOUNTNAAOFHSO_558399: CobisTextInputButtonModel = new CobisTextInputButtonModel();
public VA_STATEENISMIMLSA_521399: CobisDropDownListModel = new CobisDropDownListModel();
public VA_CLASSIFICATIOOO_860399: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public Spacer2797: CobisSpacerModel = new CobisSpacerModel();
public VA_RATEAPPLYPXKFDI_823399: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_CATEGORYYTSTFKH_328399: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_ANTIQUITYRFLXWZ_659399: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_TERMZDNRKAQLHBA_730399: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public Spacer2283: CobisSpacerModel = new CobisSpacerModel();
public VA_AGREEMENTZHTVHP_162399: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public CM_TASSTSVI_S4A: CobisButtonModel = new CobisButtonModel();
public CM_TASSTSVI_9TC: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_COMPANYCEE_242845.id="VC_COMPANYCEE_242845";
this.VC_COMPANYCEE_242845.name="CompanyCreateForm";
this.VC_COMPANYCEE_242845.colSpan=1;
this.VC_COMPANYCEE_242845.columns=1;
this.VC_COMPANYCEE_242845.enabled=ConstantsApi.mode.All;
this.G_COMPANYACR_999399.id="G_COMPANYACR_999399";
this.G_COMPANYACR_999399.name="GroupLayout1301";
this.G_COMPANYACR_999399.columns=1;
this.G_COMPANYACR_999399.childrenGroups = ["G_COMPANYECE_756399","G_COMPANYCTE_467399","G_COMPANYTCT_526399","G_COMPANYAEE_130399","G_COMPANYECE_272399","G_COMPANYRTT_593399"];
this.G_COMPANYACR_999399.colSpan=1;
this.G_COMPANYACR_999399.enabled=ConstantsApi.mode.All;
this.G_COMPANYACR_999399.visible=ConstantsApi.mode.All;
this.G_COMPANYECE_756399.id="G_COMPANYECE_756399";
this.G_COMPANYECE_756399.name="Group1821";
this.G_COMPANYECE_756399.columns=4;
this.G_COMPANYECE_756399.labelOrientation="Top";
this.G_COMPANYECE_756399.colSpan=1;
this.G_COMPANYECE_756399.enabled=ConstantsApi.mode.All;
this.G_COMPANYECE_756399.visible=ConstantsApi.mode.All;
this.G_COMPANYECE_756399.attList = ["institution","ruc"];
this.G_COMPANYCTE_467399.id="G_COMPANYCTE_467399";
this.G_COMPANYCTE_467399.name="Group2791";
this.G_COMPANYCTE_467399.columns=4;
this.G_COMPANYCTE_467399.labelOrientation="Top";
this.G_COMPANYCTE_467399.colSpan=1;
this.G_COMPANYCTE_467399.enabled=ConstantsApi.mode.All;
this.G_COMPANYCTE_467399.visible=ConstantsApi.mode.All;
this.G_COMPANYCTE_467399.attList = ["companyName","address"];
this.G_COMPANYTCT_526399.id="G_COMPANYTCT_526399";
this.G_COMPANYTCT_526399.name="Group1901";
this.G_COMPANYTCT_526399.columns=3;
this.G_COMPANYTCT_526399.labelOrientation="Top";
this.G_COMPANYTCT_526399.colSpan=1;
this.G_COMPANYTCT_526399.enabled=ConstantsApi.mode.All;
this.G_COMPANYTCT_526399.visible=ConstantsApi.mode.All;
this.G_COMPANYTCT_526399.attList = ["phone","contact","paymentArea"];
this.G_COMPANYAEE_130399.id="G_COMPANYAEE_130399";
this.G_COMPANYAEE_130399.name="Group2114";
this.G_COMPANYAEE_130399.columns=12;
this.G_COMPANYAEE_130399.labelOrientation="Top";
this.G_COMPANYAEE_130399.colSpan=1;
this.G_COMPANYAEE_130399.enabled=ConstantsApi.mode.All;
this.G_COMPANYAEE_130399.visible=ConstantsApi.mode.All;
this.G_COMPANYAEE_130399.attList = ["paymentPercentage","paymentFormService","paymentFrequency"];
this.G_COMPANYECE_272399.id="G_COMPANYECE_272399";
this.G_COMPANYECE_272399.name="Group2354";
this.G_COMPANYECE_272399.columns=12;
this.G_COMPANYECE_272399.labelOrientation="Top";
this.G_COMPANYECE_272399.colSpan=1;
this.G_COMPANYECE_272399.enabled=ConstantsApi.mode.All;
this.G_COMPANYECE_272399.visible=ConstantsApi.mode.All;
this.G_COMPANYECE_272399.attList = ["client","paymentForm","account"];
this.G_COMPANYRTT_593399.id="G_COMPANYRTT_593399";
this.G_COMPANYRTT_593399.name="Group2128";
this.G_COMPANYRTT_593399.columns=12;
this.G_COMPANYRTT_593399.labelOrientation="Top";
this.G_COMPANYRTT_593399.colSpan=1;
this.G_COMPANYRTT_593399.enabled=ConstantsApi.mode.All;
this.G_COMPANYRTT_593399.visible=ConstantsApi.mode.All;
this.G_COMPANYRTT_593399.attList = ["state","classification","rateApply","category","antiquity","term","agreement"];
this.CM_TASSTSVI_S4A.id = "CM_TASSTSVI_S4A";
this.CM_TASSTSVI_S4A.name = "Command1";
this.CM_TASSTSVI_S4A.causesValidation=true;
this.CM_TASSTSVI_S4A.submitOnEnter=false;
this.CM_TASSTSVI_S4A.setFocus=false;
this.CM_TASSTSVI_S4A.close=false;
this.CM_TASSTSVI_S4A.label = cobis.translate("ASSTS.LBL_ASSTS_GUARDARRI_81055");
this.CM_TASSTSVI_S4A.enabled = ConstantsApi.mode.All;
this.CM_TASSTSVI_S4A.visible= ConstantsApi.mode.All;
this.CM_TASSTSVI_9TC.id = "CM_TASSTSVI_9TC";
this.CM_TASSTSVI_9TC.name = "Command2";
this.CM_TASSTSVI_9TC.causesValidation=false;
this.CM_TASSTSVI_9TC.submitOnEnter=false;
this.CM_TASSTSVI_9TC.setFocus=false;
this.CM_TASSTSVI_9TC.close=true;
this.CM_TASSTSVI_9TC.label = cobis.translate("ASSTS.LBL_ASSTS_CANCELARR_70217");
this.CM_TASSTSVI_9TC.enabled = ConstantsApi.mode.All;
this.CM_TASSTSVI_9TC.visible= ConstantsApi.mode.All;
this.VA_INSTITUTIONBQXY_678399.label = cobis.translate("ASSTS.LBL_ASSTS_CDIGOINIC_90755");
this.VA_INSTITUTIONBQXY_678399.entity = "Company";
this.VA_INSTITUTIONBQXY_678399.attribute = "institution";
this.VA_INSTITUTIONBQXY_678399.maxlength= 10;
this.VA_INSTITUTIONBQXY_678399.textCase= TextCaseOptions.UPPER_CASE;
this.VA_INSTITUTIONBQXY_678399.textLocked = true;
this.VA_INSTITUTIONBQXY_678399.name="institution";
this.VA_INSTITUTIONBQXY_678399.id="VA_INSTITUTIONBQXY_678399";
this.VA_INSTITUTIONBQXY_678399.colSpan=1;
this.VA_INSTITUTIONBQXY_678399.withoutLabel = false;
this.VA_INSTITUTIONBQXY_678399.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_INSTITUTIONBQXY_678399.enabled = ConstantsApi.mode.None;
this.VA_INSTITUTIONBQXY_678399.visible= ConstantsApi.mode.All;
this.Spacer1915.id = "Spacer1915";
this.Spacer1915.name = "Spacer1915";
this.Spacer1915.colSpan = 1;
this.Spacer1915.visible= ConstantsApi.mode.All;
this.VA_RUCHZFGFPZCYSSW_363399.label = cobis.translate("ASSTS.LBL_ASSTS_RUCOPKJYJ_12792");
this.VA_RUCHZFGFPZCYSSW_363399.entity = "Company";
this.VA_RUCHZFGFPZCYSSW_363399.attribute = "ruc";
this.VA_RUCHZFGFPZCYSSW_363399.maxlength= 30;
this.VA_RUCHZFGFPZCYSSW_363399.textCase= TextCaseOptions.UPPER_CASE;
this.VA_RUCHZFGFPZCYSSW_363399.name="ruc";
this.VA_RUCHZFGFPZCYSSW_363399.id="VA_RUCHZFGFPZCYSSW_363399";
this.VA_RUCHZFGFPZCYSSW_363399.colSpan=2;
this.VA_RUCHZFGFPZCYSSW_363399.withoutLabel = false;
this.VA_RUCHZFGFPZCYSSW_363399.readOnly = ConstantsApi.mode.Query;
this.VA_RUCHZFGFPZCYSSW_363399.enabled = ConstantsApi.mode.All;
this.VA_RUCHZFGFPZCYSSW_363399.visible= ConstantsApi.mode.All;
this.VA_RUCHZFGFPZCYSSW_363399.inputRestrictionValidators = { lettersAndNumbers: true};
this.VA_RUCHZFGFPZCYSSW_363399.required = true;
this.VA_RUCHZFGFPZCYSSW_363399.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_RUCHZFGFPZCYSSW_363399.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_CAMPOREUI_74379')
};
this.VA_COMPANYNAMEZNHG_699399.label = cobis.translate("ASSTS.LBL_ASSTS_NOMBRECMM_80342");
this.VA_COMPANYNAMEZNHG_699399.entity = "Company";
this.VA_COMPANYNAMEZNHG_699399.attribute = "companyName";
this.VA_COMPANYNAMEZNHG_699399.maxlength= 64;
this.VA_COMPANYNAMEZNHG_699399.textCase= TextCaseOptions.UPPER_CASE;
this.VA_COMPANYNAMEZNHG_699399.name="companyName";
this.VA_COMPANYNAMEZNHG_699399.id="VA_COMPANYNAMEZNHG_699399";
this.VA_COMPANYNAMEZNHG_699399.colSpan=2;
this.VA_COMPANYNAMEZNHG_699399.withoutLabel = false;
this.VA_COMPANYNAMEZNHG_699399.readOnly = ConstantsApi.mode.Query;
this.VA_COMPANYNAMEZNHG_699399.enabled = ConstantsApi.mode.All;
this.VA_COMPANYNAMEZNHG_699399.visible= ConstantsApi.mode.All;
this.VA_COMPANYNAMEZNHG_699399.required = true;
this.VA_COMPANYNAMEZNHG_699399.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_COMPANYNAMEZNHG_699399.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_CAMPOREUI_74379')
};
this.VA_ADDRESSDAOSWZAE_648399.label = cobis.translate("ASSTS.LBL_ASSTS_DIRECCINN_30768");
this.VA_ADDRESSDAOSWZAE_648399.entity = "Company";
this.VA_ADDRESSDAOSWZAE_648399.attribute = "address";
this.VA_ADDRESSDAOSWZAE_648399.maxlength= 64;
this.VA_ADDRESSDAOSWZAE_648399.textCase= TextCaseOptions.UPPER_CASE;
this.VA_ADDRESSDAOSWZAE_648399.name="address";
this.VA_ADDRESSDAOSWZAE_648399.id="VA_ADDRESSDAOSWZAE_648399";
this.VA_ADDRESSDAOSWZAE_648399.colSpan=2;
this.VA_ADDRESSDAOSWZAE_648399.withoutLabel = false;
this.VA_ADDRESSDAOSWZAE_648399.readOnly = ConstantsApi.mode.Query;
this.VA_ADDRESSDAOSWZAE_648399.enabled = ConstantsApi.mode.All;
this.VA_ADDRESSDAOSWZAE_648399.visible= ConstantsApi.mode.All;
this.VA_ADDRESSDAOSWZAE_648399.required = true;
this.VA_ADDRESSDAOSWZAE_648399.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_ADDRESSDAOSWZAE_648399.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_CAMPOREUI_74379')
};
this.VA_PHONEECCKKVFLPC_585399.label = cobis.translate("ASSTS.LBL_ASSTS_TELFONOPO_65834");
this.VA_PHONEECCKKVFLPC_585399.entity = "Company";
this.VA_PHONEECCKKVFLPC_585399.attribute = "phone";
this.VA_PHONEECCKKVFLPC_585399.maxlength= 64;
this.VA_PHONEECCKKVFLPC_585399.textCase= TextCaseOptions.UPPER_CASE;
this.VA_PHONEECCKKVFLPC_585399.name="phone";
this.VA_PHONEECCKKVFLPC_585399.id="VA_PHONEECCKKVFLPC_585399";
this.VA_PHONEECCKKVFLPC_585399.colSpan=1;
this.VA_PHONEECCKKVFLPC_585399.withoutLabel = false;
this.VA_PHONEECCKKVFLPC_585399.readOnly = ConstantsApi.mode.Query;
this.VA_PHONEECCKKVFLPC_585399.enabled = ConstantsApi.mode.All;
this.VA_PHONEECCKKVFLPC_585399.visible= ConstantsApi.mode.All;
this.VA_PHONEECCKKVFLPC_585399.inputRestrictionValidators = { onlyNumbers: true};
this.VA_CONTACTZVFBCLKT_306399.label = cobis.translate("ASSTS.LBL_ASSTS_CONTACTOO_49432");
this.VA_CONTACTZVFBCLKT_306399.entity = "Company";
this.VA_CONTACTZVFBCLKT_306399.attribute = "contact";
this.VA_CONTACTZVFBCLKT_306399.maxlength= 64;
this.VA_CONTACTZVFBCLKT_306399.textCase= TextCaseOptions.UPPER_CASE;
this.VA_CONTACTZVFBCLKT_306399.name="contact";
this.VA_CONTACTZVFBCLKT_306399.id="VA_CONTACTZVFBCLKT_306399";
this.VA_CONTACTZVFBCLKT_306399.colSpan=1;
this.VA_CONTACTZVFBCLKT_306399.withoutLabel = false;
this.VA_CONTACTZVFBCLKT_306399.readOnly = ConstantsApi.mode.Query;
this.VA_CONTACTZVFBCLKT_306399.enabled = ConstantsApi.mode.All;
this.VA_CONTACTZVFBCLKT_306399.visible= ConstantsApi.mode.All;
this.VA_PAYMENTAREASIKP_341399.label = cobis.translate("ASSTS.LBL_ASSTS_REACOBROO_55398");
this.VA_PAYMENTAREASIKP_341399.entity = "Company";
this.VA_PAYMENTAREASIKP_341399.attribute = "paymentArea";
this.VA_PAYMENTAREASIKP_341399.maxlength= 64;
this.VA_PAYMENTAREASIKP_341399.textCase= TextCaseOptions.UPPER_CASE;
this.VA_PAYMENTAREASIKP_341399.name="paymentArea";
this.VA_PAYMENTAREASIKP_341399.id="VA_PAYMENTAREASIKP_341399";
this.VA_PAYMENTAREASIKP_341399.colSpan=1;
this.VA_PAYMENTAREASIKP_341399.withoutLabel = false;
this.VA_PAYMENTAREASIKP_341399.readOnly = ConstantsApi.mode.Query;
this.VA_PAYMENTAREASIKP_341399.enabled = ConstantsApi.mode.All;
this.VA_PAYMENTAREASIKP_341399.visible= ConstantsApi.mode.All;
this.VA_PAYMENTAREASIKP_341399.required = true;
this.VA_PAYMENTAREASIKP_341399.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_PAYMENTAREASIKP_341399.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_CAMPOREUI_74379')
};
this.VA_PAYMENTPERCEEAT_841399.label = cobis.translate("ASSTS.LBL_ASSTS_SERVICIOD_53492");
this.VA_PAYMENTPERCEEAT_841399.entity = "Company";
this.VA_PAYMENTPERCEEAT_841399.attribute = "paymentPercentage";
this.VA_PAYMENTPERCEEAT_841399.textCase= TextCaseOptions.UPPER_CASE;
this.VA_PAYMENTPERCEEAT_841399.format= "n";
this.VA_PAYMENTPERCEEAT_841399.name="paymentPercentage";
this.VA_PAYMENTPERCEEAT_841399.id="VA_PAYMENTPERCEEAT_841399";
this.VA_PAYMENTPERCEEAT_841399.colSpan=3;
this.VA_PAYMENTPERCEEAT_841399.withoutLabel = false;
this.VA_PAYMENTPERCEEAT_841399.readOnly = ConstantsApi.mode.Query;
this.VA_PAYMENTPERCEEAT_841399.enabled = ConstantsApi.mode.All;
this.VA_PAYMENTPERCEEAT_841399.visible= ConstantsApi.mode.All;
this.VA_PAYMENTPERCEEAT_841399.required = true;
this.VA_PAYMENTPERCEEAT_841399.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('1.00','99.99')],[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_PAYMENTPERCEEAT_841399.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_CAMPOREUI_74379'),valueRange: cobis.translate('ASSTS.MSG_ASSTS_PORCENTA9_55570')
};
this.VA_PAYMENTSERVICCC_447399.id = "VA_PAYMENTSERVICCC_447399";
this.VA_PAYMENTSERVICCC_447399.name = "paymentFormService";
this.VA_PAYMENTSERVICCC_447399.attribute = "paymentFormService";
this.VA_PAYMENTSERVICCC_447399.label = cobis.translate("ASSTS.LBL_ASSTS_APAGOSEOC_29261");
this.VA_PAYMENTSERVICCC_447399.colSpan = 4;
this.VA_PAYMENTSERVICCC_447399.withoutLabel = false;
this.VA_PAYMENTSERVICCC_447399.readOnly = ConstantsApi.mode.Query;
this.VA_PAYMENTSERVICCC_447399.entity = "Company";
this.VA_PAYMENTSERVICCC_447399.enabled = ConstantsApi.mode.All;
this.VA_PAYMENTSERVICCC_447399.visible= ConstantsApi.mode.All;
this.VA_PAYMENTSERVICCC_447399.textField = "value";
this.VA_PAYMENTSERVICCC_447399.valueField = "code";
this.VA_PAYMENTFREQUNCN_755399.id = "VA_PAYMENTFREQUNCN_755399";
this.VA_PAYMENTFREQUNCN_755399.name = "paymentFrequency";
this.VA_PAYMENTFREQUNCN_755399.attribute = "paymentFrequency";
this.VA_PAYMENTFREQUNCN_755399.label = cobis.translate("ASSTS.LBL_ASSTS_FRECUENDE_67079");
this.VA_PAYMENTFREQUNCN_755399.colSpan = 5;
this.VA_PAYMENTFREQUNCN_755399.withoutLabel = false;
this.VA_PAYMENTFREQUNCN_755399.readOnly = ConstantsApi.mode.Query;
this.VA_PAYMENTFREQUNCN_755399.entity = "Company";
this.VA_PAYMENTFREQUNCN_755399.enabled = ConstantsApi.mode.All;
this.VA_PAYMENTFREQUNCN_755399.visible= ConstantsApi.mode.All;
this.VA_PAYMENTFREQUNCN_755399.textField = "value";
this.VA_PAYMENTFREQUNCN_755399.valueField = "code";
this.VA_CLIENTRGTMTTEWO_906399.id = "VA_CLIENTRGTMTTEWO_906399";
this.VA_CLIENTRGTMTTEWO_906399.name = "client";
this.VA_CLIENTRGTMTTEWO_906399.label = cobis.translate("ASSTS.LBL_ASSTS_CLIENTEMG_56892");
this.VA_CLIENTRGTMTTEWO_906399.entity = "Company";
this.VA_CLIENTRGTMTTEWO_906399.attribute = "client";
this.VA_CLIENTRGTMTTEWO_906399.colSpan = 3;
this.VA_CLIENTRGTMTTEWO_906399.format = "";
this.VA_CLIENTRGTMTTEWO_906399.readOnly = ConstantsApi.mode.Query;
this.VA_CLIENTRGTMTTEWO_906399.enabled = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_CLIENTRGTMTTEWO_906399.visible= ConstantsApi.mode.All;
this.VA_CLIENTRGTMTTEWO_906399.textLocked = true;
this.VA_CLIENTRGTMTTEWO_906399.required = true;
this.VA_CLIENTRGTMTTEWO_906399.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_CLIENTRGTMTTEWO_906399.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_CAMPOREUI_74379')
};
this.VA_PAYMENTUVUDGASL_450399.label = cobis.translate("ASSTS.LBL_ASSTS_APAGOPQXA_89595");
this.VA_PAYMENTUVUDGASL_450399.entity = "Company";
this.VA_PAYMENTUVUDGASL_450399.attribute = "paymentForm";
this.VA_PAYMENTUVUDGASL_450399.textField = "descripcion";
this.VA_PAYMENTUVUDGASL_450399.valueField = "producto";
this.VA_PAYMENTUVUDGASL_450399.name="paymentForm";
this.VA_PAYMENTUVUDGASL_450399.id="VA_PAYMENTUVUDGASL_450399";
this.VA_PAYMENTUVUDGASL_450399.colSpan=4;
this.VA_PAYMENTUVUDGASL_450399.withoutLabel = false;
this.VA_PAYMENTUVUDGASL_450399.readOnly = ConstantsApi.mode.Query;
this.VA_PAYMENTUVUDGASL_450399.enabled = ConstantsApi.mode.All;
this.VA_PAYMENTUVUDGASL_450399.visible= ConstantsApi.mode.All;
this.VA_PAYMENTUVUDGASL_450399.required = true;
this.VA_PAYMENTUVUDGASL_450399.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_PAYMENTUVUDGASL_450399.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_CAMPOREUI_74379')
};
this.VA_ACCOUNTNAAOFHSO_558399.id = "VA_ACCOUNTNAAOFHSO_558399";
this.VA_ACCOUNTNAAOFHSO_558399.name = "account";
this.VA_ACCOUNTNAAOFHSO_558399.label = cobis.translate("ASSTS.LBL_ASSTS_NROCUENAT_58031");
this.VA_ACCOUNTNAAOFHSO_558399.entity = "Company";
this.VA_ACCOUNTNAAOFHSO_558399.attribute = "account";
this.VA_ACCOUNTNAAOFHSO_558399.colSpan = 5;
this.VA_ACCOUNTNAAOFHSO_558399.format = "";
this.VA_ACCOUNTNAAOFHSO_558399.maxlength= 24;
this.VA_ACCOUNTNAAOFHSO_558399.readOnly = ConstantsApi.mode.Query;
this.VA_ACCOUNTNAAOFHSO_558399.enabled = ConstantsApi.mode.All;
this.VA_ACCOUNTNAAOFHSO_558399.visible= ConstantsApi.mode.All;
this.VA_STATEENISMIMLSA_521399.label = cobis.translate("ASSTS.LBL_ASSTS_ESTADOEAI_33340");
this.VA_STATEENISMIMLSA_521399.blankOption=true;
this.VA_STATEENISMIMLSA_521399.entity = "Company";
this.VA_STATEENISMIMLSA_521399.attribute = "state";
this.VA_STATEENISMIMLSA_521399.textField = "value";
this.VA_STATEENISMIMLSA_521399.valueField = "code";
this.VA_STATEENISMIMLSA_521399.name="state";
this.VA_STATEENISMIMLSA_521399.id="VA_STATEENISMIMLSA_521399";
this.VA_STATEENISMIMLSA_521399.colSpan=3;
this.VA_STATEENISMIMLSA_521399.withoutLabel = false;
this.VA_STATEENISMIMLSA_521399.readOnly = ConstantsApi.mode.Query;
this.VA_STATEENISMIMLSA_521399.enabled = ConstantsApi.mode.All;
this.VA_STATEENISMIMLSA_521399.visible= ConstantsApi.mode.All;
this.VA_STATEENISMIMLSA_521399.required = true;
this.VA_STATEENISMIMLSA_521399.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_STATEENISMIMLSA_521399.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_CAMPOREUI_74379')
};
this.VA_CLASSIFICATIOOO_860399.label = cobis.translate("ASSTS.LBL_ASSTS_CLASIFIIC_39554");
this.VA_CLASSIFICATIOOO_860399.entity = "Company";
this.VA_CLASSIFICATIOOO_860399.attribute = "classification";
this.VA_CLASSIFICATIOOO_860399.maxlength= 10;
this.VA_CLASSIFICATIOOO_860399.textCase= TextCaseOptions.UPPER_CASE;
this.VA_CLASSIFICATIOOO_860399.name="classification";
this.VA_CLASSIFICATIOOO_860399.id="VA_CLASSIFICATIOOO_860399";
this.VA_CLASSIFICATIOOO_860399.colSpan=4;
this.VA_CLASSIFICATIOOO_860399.withoutLabel = false;
this.VA_CLASSIFICATIOOO_860399.readOnly = ConstantsApi.mode.Query;
this.VA_CLASSIFICATIOOO_860399.enabled = ConstantsApi.mode.All;
this.VA_CLASSIFICATIOOO_860399.visible= ConstantsApi.mode.All;
this.VA_CLASSIFICATIOOO_860399.inputRestrictionValidators = { lettersAndNumbers: true};
this.Spacer2797.id = "Spacer2797";
this.Spacer2797.name = "Spacer2797";
this.Spacer2797.colSpan = 2;
this.Spacer2797.visible= ConstantsApi.mode.All;
this.VA_RATEAPPLYPXKFDI_823399.label = cobis.translate("ASSTS.LBL_ASSTS_TASAAAPCR_88019");
this.VA_RATEAPPLYPXKFDI_823399.entity = "Company";
this.VA_RATEAPPLYPXKFDI_823399.attribute = "rateApply";
this.VA_RATEAPPLYPXKFDI_823399.textCase= TextCaseOptions.UPPER_CASE;
this.VA_RATEAPPLYPXKFDI_823399.format= "n";
this.VA_RATEAPPLYPXKFDI_823399.name="rateApply";
this.VA_RATEAPPLYPXKFDI_823399.id="VA_RATEAPPLYPXKFDI_823399";
this.VA_RATEAPPLYPXKFDI_823399.colSpan=3;
this.VA_RATEAPPLYPXKFDI_823399.withoutLabel = false;
this.VA_RATEAPPLYPXKFDI_823399.readOnly = ConstantsApi.mode.Query;
this.VA_RATEAPPLYPXKFDI_823399.enabled = ConstantsApi.mode.All;
this.VA_RATEAPPLYPXKFDI_823399.visible= ConstantsApi.mode.All;
this.VA_RATEAPPLYPXKFDI_823399.required = true;
this.VA_RATEAPPLYPXKFDI_823399.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('1','99.99')],[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_RATEAPPLYPXKFDI_823399.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_CAMPOREUI_74379'),valueRange: cobis.translate('ASSTS.MSG_ASSTS_PORCENTA9_55570')
};
this.VA_CATEGORYYTSTFKH_328399.label = cobis.translate("ASSTS.LBL_ASSTS_CATEGORAA_59396");
this.VA_CATEGORYYTSTFKH_328399.entity = "Company";
this.VA_CATEGORYYTSTFKH_328399.attribute = "category";
this.VA_CATEGORYYTSTFKH_328399.maxlength= 10;
this.VA_CATEGORYYTSTFKH_328399.textCase= TextCaseOptions.UPPER_CASE;
this.VA_CATEGORYYTSTFKH_328399.name="category";
this.VA_CATEGORYYTSTFKH_328399.id="VA_CATEGORYYTSTFKH_328399";
this.VA_CATEGORYYTSTFKH_328399.colSpan=3;
this.VA_CATEGORYYTSTFKH_328399.withoutLabel = false;
this.VA_CATEGORYYTSTFKH_328399.readOnly = ConstantsApi.mode.Query;
this.VA_CATEGORYYTSTFKH_328399.enabled = ConstantsApi.mode.All;
this.VA_CATEGORYYTSTFKH_328399.visible= ConstantsApi.mode.All;
this.VA_CATEGORYYTSTFKH_328399.inputRestrictionValidators = { lettersAndNumbers: true};
this.VA_ANTIQUITYRFLXWZ_659399.label = cobis.translate("ASSTS.LBL_ASSTS_ANTIGEDDD_85913");
this.VA_ANTIQUITYRFLXWZ_659399.entity = "Company";
this.VA_ANTIQUITYRFLXWZ_659399.attribute = "antiquity";
this.VA_ANTIQUITYRFLXWZ_659399.maxlength= 10;
this.VA_ANTIQUITYRFLXWZ_659399.textCase= TextCaseOptions.UPPER_CASE;
this.VA_ANTIQUITYRFLXWZ_659399.name="antiquity";
this.VA_ANTIQUITYRFLXWZ_659399.id="VA_ANTIQUITYRFLXWZ_659399";
this.VA_ANTIQUITYRFLXWZ_659399.colSpan=2;
this.VA_ANTIQUITYRFLXWZ_659399.withoutLabel = false;
this.VA_ANTIQUITYRFLXWZ_659399.readOnly = ConstantsApi.mode.Query;
this.VA_ANTIQUITYRFLXWZ_659399.enabled = ConstantsApi.mode.All;
this.VA_ANTIQUITYRFLXWZ_659399.visible= ConstantsApi.mode.All;
this.VA_ANTIQUITYRFLXWZ_659399.inputRestrictionValidators = { onlyNumbers: true};
this.VA_ANTIQUITYRFLXWZ_659399.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('1','99')]
]);
this.VA_ANTIQUITYRFLXWZ_659399.messagesValidations = {
valueRange: cobis.translate('ASSTS.MSG_ASSTS_SEDEBERZE_11968')
};
this.VA_TERMZDNRKAQLHBA_730399.label = cobis.translate("ASSTS.LBL_ASSTS_PLAZOYJVK_49555");
this.VA_TERMZDNRKAQLHBA_730399.entity = "Company";
this.VA_TERMZDNRKAQLHBA_730399.attribute = "term";
this.VA_TERMZDNRKAQLHBA_730399.maxlength= 10;
this.VA_TERMZDNRKAQLHBA_730399.textCase= TextCaseOptions.UPPER_CASE;
this.VA_TERMZDNRKAQLHBA_730399.name="term";
this.VA_TERMZDNRKAQLHBA_730399.id="VA_TERMZDNRKAQLHBA_730399";
this.VA_TERMZDNRKAQLHBA_730399.colSpan=2;
this.VA_TERMZDNRKAQLHBA_730399.withoutLabel = false;
this.VA_TERMZDNRKAQLHBA_730399.readOnly = ConstantsApi.mode.Query;
this.VA_TERMZDNRKAQLHBA_730399.enabled = ConstantsApi.mode.All;
this.VA_TERMZDNRKAQLHBA_730399.visible= ConstantsApi.mode.All;
this.VA_TERMZDNRKAQLHBA_730399.inputRestrictionValidators = { onlyNumbers: true};
this.Spacer2283.id = "Spacer2283";
this.Spacer2283.name = "Spacer2283";
this.Spacer2283.colSpan = 2;
this.Spacer2283.visible= ConstantsApi.mode.All;
this.VA_AGREEMENTZHTVHP_162399.id = "VA_AGREEMENTZHTVHP_162399";
this.VA_AGREEMENTZHTVHP_162399.name = "agreement";
this.VA_AGREEMENTZHTVHP_162399.attribute = "agreement";
this.VA_AGREEMENTZHTVHP_162399.label = cobis.translate("ASSTS.LBL_ASSTS_CONVENIOO_84856");
this.VA_AGREEMENTZHTVHP_162399.colSpan = 3;
this.VA_AGREEMENTZHTVHP_162399.withoutLabel = false;
this.VA_AGREEMENTZHTVHP_162399.readOnly = ConstantsApi.mode.Query;
this.VA_AGREEMENTZHTVHP_162399.entity = "Company";
this.VA_AGREEMENTZHTVHP_162399.enabled = ConstantsApi.mode.All;
this.VA_AGREEMENTZHTVHP_162399.visible= ConstantsApi.mode.All;
this.VA_AGREEMENTZHTVHP_162399.textField = "value";
this.VA_AGREEMENTZHTVHP_162399.valueField = "code";
this.T_ASSTSVIKJRAKP_845 = this.formBuilder.group({
Company: this.formBuilder.group({
institution:[{value: null, disabled: !this.VA_INSTITUTIONBQXY_678399.visible},CobisDesignerUtil.getValidationFunctions(this.VA_INSTITUTIONBQXY_678399.validationFunctions!)],
ruc:[{value: null, disabled: !this.VA_RUCHZFGFPZCYSSW_363399.visible},CobisDesignerUtil.getValidationFunctions(this.VA_RUCHZFGFPZCYSSW_363399.validationFunctions!)],
companyName:[{value: null, disabled: !this.VA_COMPANYNAMEZNHG_699399.visible},CobisDesignerUtil.getValidationFunctions(this.VA_COMPANYNAMEZNHG_699399.validationFunctions!)],
address:[{value: null, disabled: !this.VA_ADDRESSDAOSWZAE_648399.visible},CobisDesignerUtil.getValidationFunctions(this.VA_ADDRESSDAOSWZAE_648399.validationFunctions!)],
phone:[{value: null, disabled: !this.VA_PHONEECCKKVFLPC_585399.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PHONEECCKKVFLPC_585399.validationFunctions!)],
contact:[{value: null, disabled: !this.VA_CONTACTZVFBCLKT_306399.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CONTACTZVFBCLKT_306399.validationFunctions!)],
paymentArea:[{value: null, disabled: !this.VA_PAYMENTAREASIKP_341399.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PAYMENTAREASIKP_341399.validationFunctions!)],
paymentPercentage:[{value: null, disabled: !this.VA_PAYMENTPERCEEAT_841399.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PAYMENTPERCEEAT_841399.validationFunctions!)],
paymentFormService:[{value: null, disabled: !this.VA_PAYMENTSERVICCC_447399.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PAYMENTSERVICCC_447399.validationFunctions!)],
paymentFrequency:[{value: null, disabled: !this.VA_PAYMENTFREQUNCN_755399.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PAYMENTFREQUNCN_755399.validationFunctions!)],
client:[{value: null, disabled: !this.VA_CLIENTRGTMTTEWO_906399.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CLIENTRGTMTTEWO_906399.validationFunctions!)],
paymentForm:[{value: null, disabled: !this.VA_PAYMENTUVUDGASL_450399.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PAYMENTUVUDGASL_450399.validationFunctions!)],
account:[{value: null, disabled: !this.VA_ACCOUNTNAAOFHSO_558399.visible},CobisDesignerUtil.getValidationFunctions(this.VA_ACCOUNTNAAOFHSO_558399.validationFunctions!)],
state:[{value: null, disabled: !this.VA_STATEENISMIMLSA_521399.visible},CobisDesignerUtil.getValidationFunctions(this.VA_STATEENISMIMLSA_521399.validationFunctions!)],
classification:[{value: null, disabled: !this.VA_CLASSIFICATIOOO_860399.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CLASSIFICATIOOO_860399.validationFunctions!)],
rateApply:[{value: null, disabled: !this.VA_RATEAPPLYPXKFDI_823399.visible},CobisDesignerUtil.getValidationFunctions(this.VA_RATEAPPLYPXKFDI_823399.validationFunctions!)],
category:[{value: null, disabled: !this.VA_CATEGORYYTSTFKH_328399.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CATEGORYYTSTFKH_328399.validationFunctions!)],
antiquity:[{value: null, disabled: !this.VA_ANTIQUITYRFLXWZ_659399.visible},CobisDesignerUtil.getValidationFunctions(this.VA_ANTIQUITYRFLXWZ_659399.validationFunctions!)],
term:[{value: null, disabled: !this.VA_TERMZDNRKAQLHBA_730399.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TERMZDNRKAQLHBA_730399.validationFunctions!)],
agreement:[{value: null, disabled: !this.VA_AGREEMENTZHTVHP_162399.visible},CobisDesignerUtil.getValidationFunctions(this.VA_AGREEMENTZHTVHP_162399.validationFunctions!)],
clientName:[null],
archive:[null],
}
),
});
}
}