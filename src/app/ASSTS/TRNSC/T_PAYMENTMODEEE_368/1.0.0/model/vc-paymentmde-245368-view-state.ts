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
public T_PAYMENTMODEEE_368!:FormGroup;
public VC_PAYMENTMDE_245368:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PAYMENTMEE_184216 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PAYMENTEME_565216 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PAYMENTDEM_994216 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PAYMENTOOM_242216 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PAYMENTODD_442216 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PAYMENTMED_539216 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_SUMTOTALIXKGRMZ_574216: CobisTextLabelModel = new CobisTextLabelModel();
public VA_DIFFERENCELFJSU_881216: CobisTextLabelModel = new CobisTextLabelModel();
public VA_4212YIFTVBCOPPD_140216: CobisDropDownListModel = new CobisDropDownListModel();
public VA_8983QPJHQZZOSML_321216: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_AMOUNTTROZKVYME_221216: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_QUOTATIONTRMFKT_807216: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_QUOTETYPETRDZXF_817216: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public Spacer2237: CobisDropDownListModel = new CobisDropDownListModel();
public Spacer2675: CobisDropDownListModel = new CobisDropDownListModel();
public VA_4894WDHQNMCYSAK_586216: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_6386FQVBTKCYFWG_461216: CobisTextInputButtonModel = new CobisTextInputButtonModel();
public VA_2481BBVZTGCBDCR_830216: CobisTextInputButtonModel = new CobisTextInputButtonModel();
public Spacer2254: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public Spacer2495: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public Spacer2547: CobisCheckBoxModel = new CobisCheckBoxModel();
public Spacer1695: CobisDropDownListModel = new CobisDropDownListModel();
public CM_TPAYMENT_NS7: CobisButtonModel = new CobisButtonModel();
public CM_TPAYMENT_TEC: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_PAYMENTMDE_245368.id="VC_PAYMENTMDE_245368";
this.VC_PAYMENTMDE_245368.name="PaymentModeForm";
this.VC_PAYMENTMDE_245368.colSpan=1;
this.VC_PAYMENTMDE_245368.columns=1;
this.VC_PAYMENTMDE_245368.enabled=ConstantsApi.mode.All;
this.G_PAYMENTMEE_184216.id="G_PAYMENTMEE_184216";
this.G_PAYMENTMEE_184216.name="GroupLayout2892";
this.G_PAYMENTMEE_184216.columns=3;
this.G_PAYMENTMEE_184216.childrenGroups = ["G_PAYMENTEME_565216"];
this.G_PAYMENTMEE_184216.colSpan=1;
this.G_PAYMENTMEE_184216.enabled=ConstantsApi.mode.All;
this.G_PAYMENTMEE_184216.visible=ConstantsApi.mode.All;
this.G_PAYMENTEME_565216.id="G_PAYMENTEME_565216";
this.G_PAYMENTEME_565216.name="Group2486";
this.G_PAYMENTEME_565216.columns=4;
this.G_PAYMENTEME_565216.labelOrientation="Top";
this.G_PAYMENTEME_565216.colSpan=3;
this.G_PAYMENTEME_565216.enabled=ConstantsApi.mode.All;
this.G_PAYMENTEME_565216.visible=ConstantsApi.mode.All;
this.G_PAYMENTEME_565216.attList = ["sumTotal","difference"];
this.G_PAYMENTDEM_994216.id="G_PAYMENTDEM_994216";
this.G_PAYMENTDEM_994216.name="Group2192";
this.G_PAYMENTDEM_994216.columns=3;
this.G_PAYMENTDEM_994216.labelOrientation="Top";
this.G_PAYMENTDEM_994216.colSpan=1;
this.G_PAYMENTDEM_994216.enabled=ConstantsApi.mode.All;
this.G_PAYMENTDEM_994216.visible=ConstantsApi.mode.All;
this.G_PAYMENTDEM_994216.attList = ["currencyId","payAmount","amountTr"];
this.G_PAYMENTOOM_242216.id="G_PAYMENTOOM_242216";
this.G_PAYMENTOOM_242216.name="Group1756";
this.G_PAYMENTOOM_242216.columns=3;
this.G_PAYMENTOOM_242216.labelOrientation="Top";
this.G_PAYMENTOOM_242216.colSpan=1;
this.G_PAYMENTOOM_242216.enabled=ConstantsApi.mode.All;
this.G_PAYMENTOOM_242216.visible=ConstantsApi.mode.All;
this.G_PAYMENTOOM_242216.attList = ["quotationTr","quoteTypeTr","officeId"];
this.G_PAYMENTODD_442216.id="G_PAYMENTODD_442216";
this.G_PAYMENTODD_442216.name="Group2429";
this.G_PAYMENTODD_442216.columns=4;
this.G_PAYMENTODD_442216.labelOrientation="Top";
this.G_PAYMENTODD_442216.colSpan=1;
this.G_PAYMENTODD_442216.enabled=ConstantsApi.mode.All;
this.G_PAYMENTODD_442216.visible=ConstantsApi.mode.All;
this.G_PAYMENTODD_442216.attList = ["payFormId","promoterTerm","clientFullName","accountNumber","concept"];
this.G_PAYMENTMED_539216.id="G_PAYMENTMED_539216";
this.G_PAYMENTMED_539216.name="Group2756";
this.G_PAYMENTMED_539216.columns=3;
this.G_PAYMENTMED_539216.labelOrientation="Top";
this.G_PAYMENTMED_539216.colSpan=1;
this.G_PAYMENTMED_539216.enabled=ConstantsApi.mode.All;
this.G_PAYMENTMED_539216.visible=ConstantsApi.mode.None;
this.G_PAYMENTMED_539216.attList = ["checkNumber","restrictiveCrossing","economicDestination"];
this.CM_TPAYMENT_NS7.id = "CM_TPAYMENT_NS7";
this.CM_TPAYMENT_NS7.name = "Command1";
this.CM_TPAYMENT_NS7.causesValidation=true;
this.CM_TPAYMENT_NS7.submitOnEnter=false;
this.CM_TPAYMENT_NS7.setFocus=false;
this.CM_TPAYMENT_NS7.close=false;
this.CM_TPAYMENT_NS7.label = cobis.translate("ASSTS.LBL_ASSTS_ACEPTARDV_64984");
this.CM_TPAYMENT_NS7.enabled = ConstantsApi.mode.All;
this.CM_TPAYMENT_NS7.visible= ConstantsApi.mode.All;
this.CM_TPAYMENT_TEC.id = "CM_TPAYMENT_TEC";
this.CM_TPAYMENT_TEC.name = "Command2";
this.CM_TPAYMENT_TEC.causesValidation=false;
this.CM_TPAYMENT_TEC.submitOnEnter=false;
this.CM_TPAYMENT_TEC.setFocus=false;
this.CM_TPAYMENT_TEC.close=false;
this.CM_TPAYMENT_TEC.label = cobis.translate("ASSTS.LBL_ASSTS_CANCELARR_99965");
this.CM_TPAYMENT_TEC.enabled = ConstantsApi.mode.All;
this.CM_TPAYMENT_TEC.visible= ConstantsApi.mode.All;
this.VA_SUMTOTALIXKGRMZ_574216.id = "VA_SUMTOTALIXKGRMZ_574216";
this.VA_SUMTOTALIXKGRMZ_574216.name = "sumTotal";
this.VA_SUMTOTALIXKGRMZ_574216.label = cobis.translate("ASSTS.LBL_ASSTS_TOTALDEEE_75722");
this.VA_SUMTOTALIXKGRMZ_574216.attribute = "sumTotal";
this.VA_SUMTOTALIXKGRMZ_574216.colSpan = 1;
this.VA_SUMTOTALIXKGRMZ_574216.withoutLabel = false;
this.VA_SUMTOTALIXKGRMZ_574216.enabled = ConstantsApi.mode.All;
this.VA_SUMTOTALIXKGRMZ_574216.visible= ConstantsApi.mode.None;
this.VA_DIFFERENCELFJSU_881216.id = "VA_DIFFERENCELFJSU_881216";
this.VA_DIFFERENCELFJSU_881216.name = "difference";
this.VA_DIFFERENCELFJSU_881216.label = cobis.translate("ASSTS.LBL_ASSTS_DIFERENQI_53704");
this.VA_DIFFERENCELFJSU_881216.attribute = "difference";
this.VA_DIFFERENCELFJSU_881216.colSpan = 3;
this.VA_DIFFERENCELFJSU_881216.withoutLabel = false;
this.VA_DIFFERENCELFJSU_881216.enabled = ConstantsApi.mode.All;
this.VA_DIFFERENCELFJSU_881216.visible= ConstantsApi.mode.All;
this.VA_4212YIFTVBCOPPD_140216.label = cobis.translate("ASSTS.LBL_ASSTS_MONEDADEO_21507");
this.VA_4212YIFTVBCOPPD_140216.blankOption=true;
this.VA_4212YIFTVBCOPPD_140216.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905");
this.VA_4212YIFTVBCOPPD_140216.entity = "PaymentForm";
this.VA_4212YIFTVBCOPPD_140216.attribute = "currencyId";
this.VA_4212YIFTVBCOPPD_140216.textField = "value";
this.VA_4212YIFTVBCOPPD_140216.valueField = "code";
this.VA_4212YIFTVBCOPPD_140216.name="currencyId";
this.VA_4212YIFTVBCOPPD_140216.id="VA_4212YIFTVBCOPPD_140216";
this.VA_4212YIFTVBCOPPD_140216.colSpan=1;
this.VA_4212YIFTVBCOPPD_140216.withoutLabel = false;
this.VA_4212YIFTVBCOPPD_140216.readOnly = ConstantsApi.mode.Query;
this.VA_4212YIFTVBCOPPD_140216.enabled = ConstantsApi.mode.All;
this.VA_4212YIFTVBCOPPD_140216.visible= ConstantsApi.mode.All;
this.VA_4212YIFTVBCOPPD_140216.required = true;
this.VA_4212YIFTVBCOPPD_140216.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_4212YIFTVBCOPPD_140216.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.VA_8983QPJHQZZOSML_321216.label = cobis.translate("ASSTS.LBL_ASSTS_VALORNPRH_26284");
this.VA_8983QPJHQZZOSML_321216.entity = "PaymentForm";
this.VA_8983QPJHQZZOSML_321216.attribute = "payAmount";
this.VA_8983QPJHQZZOSML_321216.textCase= TextCaseOptions.NONE;
this.VA_8983QPJHQZZOSML_321216.format= "c";
this.VA_8983QPJHQZZOSML_321216.name="payAmount";
this.VA_8983QPJHQZZOSML_321216.id="VA_8983QPJHQZZOSML_321216";
this.VA_8983QPJHQZZOSML_321216.colSpan=1;
this.VA_8983QPJHQZZOSML_321216.withoutLabel = false;
this.VA_8983QPJHQZZOSML_321216.readOnly = ConstantsApi.mode.Query;
this.VA_8983QPJHQZZOSML_321216.enabled = ConstantsApi.mode.All;
this.VA_8983QPJHQZZOSML_321216.visible= ConstantsApi.mode.All;
this.VA_8983QPJHQZZOSML_321216.required = true;
this.VA_8983QPJHQZZOSML_321216.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_8983QPJHQZZOSML_321216.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.VA_AMOUNTTROZKVYME_221216.label = cobis.translate("ASSTS.LBL_ASSTS_VALOROPZW_68487");
this.VA_AMOUNTTROZKVYME_221216.entity = "PaymentForm";
this.VA_AMOUNTTROZKVYME_221216.attribute = "amountTr";
this.VA_AMOUNTTROZKVYME_221216.textCase= TextCaseOptions.NONE;
this.VA_AMOUNTTROZKVYME_221216.format= "c";
this.VA_AMOUNTTROZKVYME_221216.name="amountTr";
this.VA_AMOUNTTROZKVYME_221216.id="VA_AMOUNTTROZKVYME_221216";
this.VA_AMOUNTTROZKVYME_221216.colSpan=1;
this.VA_AMOUNTTROZKVYME_221216.withoutLabel = false;
this.VA_AMOUNTTROZKVYME_221216.readOnly = ConstantsApi.mode.Query;
this.VA_AMOUNTTROZKVYME_221216.enabled = ConstantsApi.mode.None;
this.VA_AMOUNTTROZKVYME_221216.visible= ConstantsApi.mode.All;
this.VA_QUOTATIONTRMFKT_807216.label = cobis.translate("ASSTS.LBL_ASSTS_COTIZACNN_31924");
this.VA_QUOTATIONTRMFKT_807216.entity = "PaymentForm";
this.VA_QUOTATIONTRMFKT_807216.attribute = "quotationTr";
this.VA_QUOTATIONTRMFKT_807216.textCase= TextCaseOptions.NONE;
this.VA_QUOTATIONTRMFKT_807216.format= "#,######0.000000";
this.VA_QUOTATIONTRMFKT_807216.name="quotationTr";
this.VA_QUOTATIONTRMFKT_807216.id="VA_QUOTATIONTRMFKT_807216";
this.VA_QUOTATIONTRMFKT_807216.colSpan=1;
this.VA_QUOTATIONTRMFKT_807216.withoutLabel = false;
this.VA_QUOTATIONTRMFKT_807216.readOnly = ConstantsApi.mode.Query;
this.VA_QUOTATIONTRMFKT_807216.enabled = ConstantsApi.mode.All;
this.VA_QUOTATIONTRMFKT_807216.visible= ConstantsApi.mode.All;
this.VA_QUOTETYPETRDZXF_817216.label = cobis.translate("ASSTS.LBL_ASSTS_TIPOCOTAA_28357");
this.VA_QUOTETYPETRDZXF_817216.entity = "PaymentForm";
this.VA_QUOTETYPETRDZXF_817216.attribute = "quoteTypeTr";
this.VA_QUOTETYPETRDZXF_817216.textCase= TextCaseOptions.NONE;
this.VA_QUOTETYPETRDZXF_817216.name="quoteTypeTr";
this.VA_QUOTETYPETRDZXF_817216.id="VA_QUOTETYPETRDZXF_817216";
this.VA_QUOTETYPETRDZXF_817216.colSpan=1;
this.VA_QUOTETYPETRDZXF_817216.withoutLabel = false;
this.VA_QUOTETYPETRDZXF_817216.readOnly = ConstantsApi.mode.Query;
this.VA_QUOTETYPETRDZXF_817216.enabled = ConstantsApi.mode.All;
this.VA_QUOTETYPETRDZXF_817216.visible= ConstantsApi.mode.All;
this.Spacer2237.label = cobis.translate("ASSTS.LBL_ASSTS_OFICINAHX_44623");
this.Spacer2237.blankOption=true;
this.Spacer2237.entity = "PaymentForm";
this.Spacer2237.attribute = "officeId";
this.Spacer2237.textField = "value";
this.Spacer2237.valueField = "code";
this.Spacer2237.name="officeId";
this.Spacer2237.id="Spacer2237";
this.Spacer2237.colSpan=1;
this.Spacer2237.withoutLabel = false;
this.Spacer2237.readOnly = ConstantsApi.mode.Query;
this.Spacer2237.enabled = ConstantsApi.mode.All;
this.Spacer2237.visible= ConstantsApi.mode.All;
this.Spacer2237.required = true;
this.Spacer2237.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.Spacer2237.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.Spacer2675.label = cobis.translate("ASSTS.LBL_ASSTS_APAGOPQXA_89595");
this.Spacer2675.blankOption=true;
this.Spacer2675.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905");
this.Spacer2675.entity = "PaymentForm";
this.Spacer2675.attribute = "payFormId";
this.Spacer2675.cascadeFrom = "VA_4212YIFTVBCOPPD_140216";
this.VA_4212YIFTVBCOPPD_140216.isCascadeParent = true;
this.Spacer2675.textField = "descripcion";
this.Spacer2675.valueField = "producto";
this.Spacer2675.name="payFormId";
this.Spacer2675.id="Spacer2675";
this.Spacer2675.colSpan=2;
this.Spacer2675.withoutLabel = false;
this.Spacer2675.readOnly = ConstantsApi.mode.Query;
this.Spacer2675.enabled = ConstantsApi.mode.All;
this.Spacer2675.visible= ConstantsApi.mode.All;
this.Spacer2675.required = true;
this.Spacer2675.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.Spacer2675.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.VA_4894WDHQNMCYSAK_586216.label = cobis.translate("ASSTS.LBL_ASSTS_PLAZOYJVK_49555");
this.VA_4894WDHQNMCYSAK_586216.entity = "PaymentForm";
this.VA_4894WDHQNMCYSAK_586216.attribute = "promoterTerm";
this.VA_4894WDHQNMCYSAK_586216.textCase= TextCaseOptions.NONE;
this.VA_4894WDHQNMCYSAK_586216.format= "n0";
this.VA_4894WDHQNMCYSAK_586216.name="promoterTerm";
this.VA_4894WDHQNMCYSAK_586216.id="VA_4894WDHQNMCYSAK_586216";
this.VA_4894WDHQNMCYSAK_586216.colSpan=2;
this.VA_4894WDHQNMCYSAK_586216.withoutLabel = false;
this.VA_4894WDHQNMCYSAK_586216.readOnly = ConstantsApi.mode.Query;
this.VA_4894WDHQNMCYSAK_586216.enabled = ConstantsApi.mode.All;
this.VA_4894WDHQNMCYSAK_586216.visible= ConstantsApi.mode.All;
this.VA_6386FQVBTKCYFWG_461216.id = "VA_6386FQVBTKCYFWG_461216";
this.VA_6386FQVBTKCYFWG_461216.name = "clientFullName";
this.VA_6386FQVBTKCYFWG_461216.label = cobis.translate("ASSTS.LBL_ASSTS_BENEFICII_99714");
this.VA_6386FQVBTKCYFWG_461216.entity = "PaymentForm";
this.VA_6386FQVBTKCYFWG_461216.attribute = "clientFullName";
this.VA_6386FQVBTKCYFWG_461216.colSpan = 2;
this.VA_6386FQVBTKCYFWG_461216.format = "";
this.VA_6386FQVBTKCYFWG_461216.maxlength= 100;
this.VA_6386FQVBTKCYFWG_461216.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_6386FQVBTKCYFWG_461216.enabled = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_6386FQVBTKCYFWG_461216.visible= ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_2481BBVZTGCBDCR_830216.id = "VA_2481BBVZTGCBDCR_830216";
this.VA_2481BBVZTGCBDCR_830216.name = "accountNumber";
this.VA_2481BBVZTGCBDCR_830216.label = cobis.translate("ASSTS.LBL_ASSTS_REFERENAI_72258");
this.VA_2481BBVZTGCBDCR_830216.entity = "PaymentForm";
this.VA_2481BBVZTGCBDCR_830216.attribute = "accountNumber";
this.VA_2481BBVZTGCBDCR_830216.colSpan = 2;
this.VA_2481BBVZTGCBDCR_830216.format = "";
this.VA_2481BBVZTGCBDCR_830216.maxlength= 20;
this.VA_2481BBVZTGCBDCR_830216.readOnly = ConstantsApi.mode.None;
this.VA_2481BBVZTGCBDCR_830216.enabled = ConstantsApi.mode.All;
this.VA_2481BBVZTGCBDCR_830216.visible= ConstantsApi.mode.All;
this.VA_2481BBVZTGCBDCR_830216.inputRestrictionValidators = { onlyNumbers: true};
this.VA_2481BBVZTGCBDCR_830216.required = true;
this.VA_2481BBVZTGCBDCR_830216.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_2481BBVZTGCBDCR_830216.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.Spacer2254.label = cobis.translate("ASSTS.LBL_ASSTS_CONCEPTOO_16181");
this.Spacer2254.entity = "PaymentForm";
this.Spacer2254.attribute = "concept";
this.Spacer2254.maxlength= 255;
this.Spacer2254.textCase= TextCaseOptions.UPPER_CASE;
this.Spacer2254.name="concept";
this.Spacer2254.id="Spacer2254";
this.Spacer2254.colSpan=2;
this.Spacer2254.withoutLabel = false;
this.Spacer2254.readOnly = ConstantsApi.mode.Query;
this.Spacer2254.enabled = ConstantsApi.mode.All;
this.Spacer2254.visible= ConstantsApi.mode.All;
this.Spacer2495.label = cobis.translate("ASSTS.LBL_ASSTS_CHEQUECLR_65293");
this.Spacer2495.entity = "PaymentForm";
this.Spacer2495.attribute = "checkNumber";
this.Spacer2495.textCase= TextCaseOptions.UPPER_CASE;
this.Spacer2495.name="checkNumber";
this.Spacer2495.id="Spacer2495";
this.Spacer2495.colSpan=1;
this.Spacer2495.withoutLabel = false;
this.Spacer2495.readOnly = ConstantsApi.mode.Query;
this.Spacer2495.enabled = ConstantsApi.mode.All;
this.Spacer2495.visible= ConstantsApi.mode.All;
this.Spacer2547.id = "Spacer2547";
this.Spacer2547.name = "restrictiveCrossing";
this.Spacer2547.label = cobis.translate("ASSTS.LBL_ASSTS_CRUCERECI_95868");
this.Spacer2547.entity = "PaymentForm";
this.Spacer2547.attribute = "restrictiveCrossing";
this.Spacer2547.colSpan = 1;
this.Spacer2547.withoutLabel = false;
this.Spacer2547.readOnly =ConstantsApi.mode.Query;
this.Spacer2547.enabled = ConstantsApi.mode.All;
this.Spacer2547.visible= ConstantsApi.mode.All;
this.Spacer1695.label = cobis.translate("ASSTS.LBL_ASSTS_DESTINOCE_57201");
this.Spacer1695.entity = "PaymentForm";
this.Spacer1695.attribute = "economicDestination";
this.Spacer1695.textField = "value";
this.Spacer1695.valueField = "code";
this.Spacer1695.name="economicDestination";
this.Spacer1695.id="Spacer1695";
this.Spacer1695.colSpan=1;
this.Spacer1695.withoutLabel = false;
this.Spacer1695.readOnly = ConstantsApi.mode.Query;
this.Spacer1695.enabled = ConstantsApi.mode.All;
this.Spacer1695.visible= ConstantsApi.mode.All;
this.T_PAYMENTMODEEE_368 = this.formBuilder.group({
DisbursementResult: this.formBuilder.group({
sumTotal:[{value: null, disabled: !this.VA_SUMTOTALIXKGRMZ_574216.visible}],
difference:[{value: null, disabled: !this.VA_DIFFERENCELFJSU_881216.visible}],
}
),
PaymentForm: this.formBuilder.group({
currencyId:[{value: null, disabled: !this.VA_4212YIFTVBCOPPD_140216.visible},CobisDesignerUtil.getValidationFunctions(this.VA_4212YIFTVBCOPPD_140216.validationFunctions!)],
payAmount:[{value: null, disabled: !this.VA_8983QPJHQZZOSML_321216.visible},CobisDesignerUtil.getValidationFunctions(this.VA_8983QPJHQZZOSML_321216.validationFunctions!)],
amountTr:[{value: null, disabled: !this.VA_AMOUNTTROZKVYME_221216.visible},CobisDesignerUtil.getValidationFunctions(this.VA_AMOUNTTROZKVYME_221216.validationFunctions!)],
quotationTr:[{value: null, disabled: !this.VA_QUOTATIONTRMFKT_807216.visible},CobisDesignerUtil.getValidationFunctions(this.VA_QUOTATIONTRMFKT_807216.validationFunctions!)],
quoteTypeTr:[{value: null, disabled: !this.VA_QUOTETYPETRDZXF_817216.visible},CobisDesignerUtil.getValidationFunctions(this.VA_QUOTETYPETRDZXF_817216.validationFunctions!)],
officeId:[{value: null, disabled: !this.Spacer2237.visible},CobisDesignerUtil.getValidationFunctions(this.Spacer2237.validationFunctions!)],
payFormId:[{value: null, disabled: !this.Spacer2675.visible},CobisDesignerUtil.getValidationFunctions(this.Spacer2675.validationFunctions!)],
promoterTerm:[{value: null, disabled: !this.VA_4894WDHQNMCYSAK_586216.visible},CobisDesignerUtil.getValidationFunctions(this.VA_4894WDHQNMCYSAK_586216.validationFunctions!)],
clientFullName:[{value: null, disabled: !this.VA_6386FQVBTKCYFWG_461216.visible},CobisDesignerUtil.getValidationFunctions(this.VA_6386FQVBTKCYFWG_461216.validationFunctions!)],
accountNumber:[{value: null, disabled: !this.VA_2481BBVZTGCBDCR_830216.visible},CobisDesignerUtil.getValidationFunctions(this.VA_2481BBVZTGCBDCR_830216.validationFunctions!)],
concept:[{value: null, disabled: !this.Spacer2254.visible},CobisDesignerUtil.getValidationFunctions(this.Spacer2254.validationFunctions!)],
checkNumber:[{value: null, disabled: !this.Spacer2495.visible},CobisDesignerUtil.getValidationFunctions(this.Spacer2495.validationFunctions!)],
restrictiveCrossing:[{value: false, disabled: !this.Spacer2547.visible},CobisDesignerUtil.getValidationFunctions(this.Spacer2547.validationFunctions!)],
economicDestination:[{value: null, disabled: !this.Spacer1695.visible},CobisDesignerUtil.getValidationFunctions(this.Spacer1695.validationFunctions!)],
clientId:[null],
amountDsDec:[null],
currencyIdAux:[null],
reference:[null],
currencyName:[null],
currencyFlagAux:[null],
payFormName:[null],
payFormCategory:[null],
payQuoteLbl:[null],
}
),
});
}
}