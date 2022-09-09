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
public T_LNSPRGNPCEXYE_633!:FormGroup;
public VC_OPERATIOPA_648633:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OPERATIAAD_786198 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OPERATIUTN_807198 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OPERATIAEO_858198 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OPERATIYTE_172198 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_ECPR_JAA30: CobisGridModel = new CobisGridModel();
public G_OPERATIMTO_363198 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_NUMOPERATIONRWY_828198: CobisTextLabelModel = new CobisTextLabelModel();
public VA_OPERATIONTYPEEE_239198: CobisTextLabelModel = new CobisTextLabelModel();
public VA_AMOUNTEWSEJLOSB_545198: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TIRFEEYVRGJBTQS_146198: CobisTextLabelModel = new CobisTextLabelModel();
public VA_VALUEDATEKMJLVF_161198: CobisDateFieldModel = new CobisDateFieldModel();
public VA_INTERESTBRXDBGI_239198: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_FEEOFWVFIUKFNPP_635198: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_TERMTYPEOWIDGEH_595198: CobisDropDownListModel = new CobisDropDownListModel();
public VA_TERMMUMJBESVPSA_498198: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_TYPEFEEARBRJCKA_414198: CobisDropDownListModel = new CobisDropDownListModel();
public VA_FIRSTDUEDATEACN_138198: CobisDateFieldModel = new CobisDateFieldModel();
public VA_FIXEDPAYEMENYTY_637198: CobisCheckBoxModel = new CobisCheckBoxModel();
public VA_PAYMENTDAYEFRJN_549198: CobisDropDownListModel = new CobisDropDownListModel();
public VA_TERMINTERESTGWH_345198: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_TERMCAPITALLSSH_857198: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_EXTENDEDPAYMEDA_710198: CobisDateFieldModel = new CobisDateFieldModel();
public VA_DAYSGRACEDEFUUU_853198: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public Spacer2905: CobisSpacerModel = new CobisSpacerModel();
public VA_MONTHGRACEFIJFA_429198: CobisDropDownListModel = new CobisDropDownListModel();
public VA_TERMGRACECAPTAT_881198: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_TERMGRACEINTTET_849198: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_BASEINTERESTAAC_534198: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public VA_TYPEAMORTIZATTN_681198: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public VA_AVOIDHOLIDAYSSS_789198: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public VA_TYPEGRACEBHAAVJ_350198: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public VA_9468GILHMJRMZIF_745198: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_BALLONFEEWWRPRY_949198: CobisCheckBoxModel = new CobisCheckBoxModel();
public VA_RANDOMGRACEYJOS_359198: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_GENERATEINSUENC_694198: CobisCheckBoxModel = new CobisCheckBoxModel();
public VA_INITIALINTERTSE_643198: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_REDISCOUNTDAEET_581198: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_SOLIDARITYTOGWR_286198: CobisCheckBoxModel = new CobisCheckBoxModel();
public VA_IVASDFHAPWJFULF_560198: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public Spacer2387: CobisSpacerModel = new CobisSpacerModel();
public VA_VAVABUTTONRDGI5_636198: CobisButtonModel = new CobisButtonModel();
public VA_VAVABUTTONNXJJ__482198: CobisButtonModel = new CobisButtonModel();
public VA_VAVABUTTONZDFPF_173198: CobisButtonModel = new CobisButtonModel();
public VA_VAVABUTTONOH3FZ_246198: CobisButtonModel = new CobisButtonModel();
public VA_VAVABUTTONNPM_2_987198: CobisButtonModel = new CobisButtonModel();
public VA_VAVABUTTONVJFY0_286198: CobisButtonModel = new CobisButtonModel();
public VA_SPACER2979MSHFC_211198: CobisSpacerModel = new CobisSpacerModel();
public VA_SPACER1486BFHYH_817198: CobisSpacerModel = new CobisSpacerModel();
public VA_VAVABUTTONPJ080_778198: CobisButtonModel = new CobisButtonModel();
public VA_SPACER2660NECGA_809198: CobisSpacerModel = new CobisSpacerModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_OPERATIOPA_648633.id="VC_OPERATIOPA_648633";
this.VC_OPERATIOPA_648633.name="OperationPaymentDayUpdateForm";
this.VC_OPERATIOPA_648633.colSpan=1;
this.VC_OPERATIOPA_648633.columns=1;
this.VC_OPERATIOPA_648633.enabled=ConstantsApi.mode.All;
this.G_OPERATIAAD_786198.id="G_OPERATIAAD_786198";
this.G_OPERATIAAD_786198.name="GroupLayout1904";
this.G_OPERATIAAD_786198.columns=1;
this.G_OPERATIAAD_786198.childrenGroups = ["G_OPERATIUTN_807198","G_OPERATIAEO_858198","G_OPERATIYTE_172198","G_OPERATIMTO_363198"];
this.G_OPERATIAAD_786198.colSpan=1;
this.G_OPERATIAAD_786198.enabled=ConstantsApi.mode.All;
this.G_OPERATIAAD_786198.visible=ConstantsApi.mode.All;
this.G_OPERATIUTN_807198.id="G_OPERATIUTN_807198";
this.G_OPERATIUTN_807198.name="Group1528";
this.G_OPERATIUTN_807198.columns=4;
this.G_OPERATIUTN_807198.labelOrientation="Top";
this.G_OPERATIUTN_807198.colSpan=1;
this.G_OPERATIUTN_807198.enabled=ConstantsApi.mode.All;
this.G_OPERATIUTN_807198.visible=ConstantsApi.mode.All;
this.G_OPERATIUTN_807198.attList = ["numOperation","operationType","amount","tirFee"];
this.G_OPERATIAEO_858198.id="G_OPERATIAEO_858198";
this.G_OPERATIAEO_858198.name="Group1844";
this.G_OPERATIAEO_858198.columns=12;
this.G_OPERATIAEO_858198.labelOrientation="Top";
this.G_OPERATIAEO_858198.colSpan=1;
this.G_OPERATIAEO_858198.enabled=ConstantsApi.mode.All;
this.G_OPERATIAEO_858198.visible=ConstantsApi.mode.All;
this.G_OPERATIAEO_858198.attList = ["valueDate","interest","fee","termType","term","typeFee","firstDueDate","fixedPayementDay","paymentDay","termInterest","termCapital","extendedPaymentDate","daysGraceDefault","monthGrace","termGraceCapital","termGraceInterest","baseInterestCalculation","typeAmortization","avoidHolidays","typeGrace","graceDividend","ballonFee","randomGrace","generateInsurance","initialInterestRest","rediscountDate","solidarity","iva"];
this.G_OPERATIYTE_172198.id="G_OPERATIYTE_172198";
this.G_OPERATIYTE_172198.name="Group1319";
this.G_OPERATIYTE_172198.columns=1;
this.G_OPERATIYTE_172198.labelOrientation="Top";
this.G_OPERATIYTE_172198.colSpan=1;
this.G_OPERATIYTE_172198.enabled=ConstantsApi.mode.All;
this.G_OPERATIYTE_172198.visible=ConstantsApi.mode.All;
this.G_OPERATIYTE_172198.attList = ["dividend","expirationDate","balanceCapital","dynamicField1","dynamicField2","dynamicField3","dynamicField4","dynamicField5","dynamicField6","dynamicField7","dynamicField8","dynamicField9","dynamicField10","dynamicField11","dynamicField12","dynamicField13","dynamicField14","dynamicField15","dynamicField16","dynamicField17","dynamicField18","dynamicField19","dynamicField20","fee"];
this.G_OPERATIMTO_363198.id="G_OPERATIMTO_363198";
this.G_OPERATIMTO_363198.name="Group2565";
this.G_OPERATIMTO_363198.columns=6;
this.G_OPERATIMTO_363198.labelOrientation="Top";
this.G_OPERATIMTO_363198.colSpan=1;
this.G_OPERATIMTO_363198.enabled=ConstantsApi.mode.All;
this.G_OPERATIMTO_363198.visible=ConstantsApi.mode.All;
this.VA_NUMOPERATIONRWY_828198.id = "VA_NUMOPERATIONRWY_828198";
this.VA_NUMOPERATIONRWY_828198.name = "numOperation";
this.VA_NUMOPERATIONRWY_828198.label = cobis.translate("LNSPR.LBL_LOANS_NUMOPERCA_22664");
this.VA_NUMOPERATIONRWY_828198.attribute = "numOperation";
this.VA_NUMOPERATIONRWY_828198.colSpan = 1;
this.VA_NUMOPERATIONRWY_828198.withoutLabel = false;
this.VA_NUMOPERATIONRWY_828198.enabled = ConstantsApi.mode.None;
this.VA_NUMOPERATIONRWY_828198.visible= ConstantsApi.mode.All;
this.VA_OPERATIONTYPEEE_239198.id = "VA_OPERATIONTYPEEE_239198";
this.VA_OPERATIONTYPEEE_239198.name = "operationType";
this.VA_OPERATIONTYPEEE_239198.label = cobis.translate("LNSPR.LBL_LNSPR_TIPOOPERN_51275");
this.VA_OPERATIONTYPEEE_239198.attribute = "operationType";
this.VA_OPERATIONTYPEEE_239198.colSpan = 1;
this.VA_OPERATIONTYPEEE_239198.withoutLabel = false;
this.VA_OPERATIONTYPEEE_239198.enabled = ConstantsApi.mode.None;
this.VA_OPERATIONTYPEEE_239198.visible= ConstantsApi.mode.All;
this.VA_AMOUNTEWSEJLOSB_545198.id = "VA_AMOUNTEWSEJLOSB_545198";
this.VA_AMOUNTEWSEJLOSB_545198.name = "amount";
this.VA_AMOUNTEWSEJLOSB_545198.label = cobis.translate("LNSPR.LBL_LOANS_MONTOPEGS_72415");
this.VA_AMOUNTEWSEJLOSB_545198.attribute = "amount";
this.VA_AMOUNTEWSEJLOSB_545198.colSpan = 1;
this.VA_AMOUNTEWSEJLOSB_545198.withoutLabel = false;
this.VA_AMOUNTEWSEJLOSB_545198.enabled = ConstantsApi.mode.All;
this.VA_AMOUNTEWSEJLOSB_545198.visible= ConstantsApi.mode.All;
this.VA_TIRFEEYVRGJBTQS_146198.id = "VA_TIRFEEYVRGJBTQS_146198";
this.VA_TIRFEEYVRGJBTQS_146198.name = "tirFee";
this.VA_TIRFEEYVRGJBTQS_146198.label = cobis.translate("LNSPR.LBL_LNSPR_TIRJAFJMF_82035");
this.VA_TIRFEEYVRGJBTQS_146198.attribute = "tirFee";
this.VA_TIRFEEYVRGJBTQS_146198.colSpan = 1;
this.VA_TIRFEEYVRGJBTQS_146198.withoutLabel = false;
this.VA_TIRFEEYVRGJBTQS_146198.enabled = ConstantsApi.mode.All;
this.VA_TIRFEEYVRGJBTQS_146198.visible= ConstantsApi.mode.All;
this.VA_VALUEDATEKMJLVF_161198.label = cobis.translate("LNSPR.LBL_LNSPR_FECHAVALR_40841");
this.VA_VALUEDATEKMJLVF_161198.entity = "AmortizationFormEntity";
this.VA_VALUEDATEKMJLVF_161198.attribute = "valueDate";
this.VA_VALUEDATEKMJLVF_161198.name="valueDate";
this.VA_VALUEDATEKMJLVF_161198.id="VA_VALUEDATEKMJLVF_161198";
this.VA_VALUEDATEKMJLVF_161198.colSpan=2;
this.VA_VALUEDATEKMJLVF_161198.withoutLabel = false;
this.VA_VALUEDATEKMJLVF_161198.readOnly = ConstantsApi.mode.Query;
this.VA_VALUEDATEKMJLVF_161198.enabled = ConstantsApi.mode.All;
this.VA_VALUEDATEKMJLVF_161198.visible= ConstantsApi.mode.All;
this.VA_INTERESTBRXDBGI_239198.label = cobis.translate("LNSPR.LBL_LNSPR_TASATOTAA_19550");
this.VA_INTERESTBRXDBGI_239198.entity = "AmortizationFormEntity";
this.VA_INTERESTBRXDBGI_239198.attribute = "interest";
this.VA_INTERESTBRXDBGI_239198.textCase= TextCaseOptions.NONE;
this.VA_INTERESTBRXDBGI_239198.format= "#.00###";
this.VA_INTERESTBRXDBGI_239198.name="interest";
this.VA_INTERESTBRXDBGI_239198.id="VA_INTERESTBRXDBGI_239198";
this.VA_INTERESTBRXDBGI_239198.colSpan=2;
this.VA_INTERESTBRXDBGI_239198.withoutLabel = false;
this.VA_INTERESTBRXDBGI_239198.readOnly = ConstantsApi.mode.None;
this.VA_INTERESTBRXDBGI_239198.enabled = ConstantsApi.mode.None;
this.VA_INTERESTBRXDBGI_239198.visible= ConstantsApi.mode.All;
this.VA_FEEOFWVFIUKFNPP_635198.label = cobis.translate("LNSPR.LBL_LOANS_CUOTAQUGL_10106");
this.VA_FEEOFWVFIUKFNPP_635198.entity = "AmortizationFormEntity";
this.VA_FEEOFWVFIUKFNPP_635198.attribute = "fee";
this.VA_FEEOFWVFIUKFNPP_635198.textCase= TextCaseOptions.NONE;
this.VA_FEEOFWVFIUKFNPP_635198.isCustomValidated=true;
this.VA_FEEOFWVFIUKFNPP_635198.format= "c";
this.VA_FEEOFWVFIUKFNPP_635198.name="fee";
this.VA_FEEOFWVFIUKFNPP_635198.id="VA_FEEOFWVFIUKFNPP_635198";
this.VA_FEEOFWVFIUKFNPP_635198.colSpan=3;
this.VA_FEEOFWVFIUKFNPP_635198.withoutLabel = false;
this.VA_FEEOFWVFIUKFNPP_635198.readOnly = ConstantsApi.mode.Query;
this.VA_FEEOFWVFIUKFNPP_635198.enabled = ConstantsApi.mode.All;
this.VA_FEEOFWVFIUKFNPP_635198.visible= ConstantsApi.mode.All;
this.VA_TERMTYPEOWIDGEH_595198.label = cobis.translate("LNSPR.LBL_LNSPR_TIPOPLAOZ_41477");
this.VA_TERMTYPEOWIDGEH_595198.blankOption=true;
this.VA_TERMTYPEOWIDGEH_595198.placeHolderLabel = cobis.translate("LNSPR.LBL_LNSPR_SELECCIOI_13820");
this.VA_TERMTYPEOWIDGEH_595198.entity = "AmortizationFormEntity";
this.VA_TERMTYPEOWIDGEH_595198.attribute = "termType";
this.VA_TERMTYPEOWIDGEH_595198.textField = "value";
this.VA_TERMTYPEOWIDGEH_595198.valueField = "code";
this.VA_TERMTYPEOWIDGEH_595198.showId= true;
this.VA_TERMTYPEOWIDGEH_595198.name="termType";
this.VA_TERMTYPEOWIDGEH_595198.id="VA_TERMTYPEOWIDGEH_595198";
this.VA_TERMTYPEOWIDGEH_595198.colSpan=3;
this.VA_TERMTYPEOWIDGEH_595198.withoutLabel = false;
this.VA_TERMTYPEOWIDGEH_595198.readOnly = ConstantsApi.mode.Query;
this.VA_TERMTYPEOWIDGEH_595198.enabled = ConstantsApi.mode.All;
this.VA_TERMTYPEOWIDGEH_595198.visible= ConstantsApi.mode.All;
this.VA_TERMMUMJBESVPSA_498198.label = cobis.translate("LNSPR.LBL_LNSPR_PLAZOYJVK_49555");
this.VA_TERMMUMJBESVPSA_498198.entity = "AmortizationFormEntity";
this.VA_TERMMUMJBESVPSA_498198.attribute = "term";
this.VA_TERMMUMJBESVPSA_498198.maxlength= 5;
this.VA_TERMMUMJBESVPSA_498198.textCase= TextCaseOptions.NONE;
this.VA_TERMMUMJBESVPSA_498198.format= "n0";
this.VA_TERMMUMJBESVPSA_498198.name="term";
this.VA_TERMMUMJBESVPSA_498198.id="VA_TERMMUMJBESVPSA_498198";
this.VA_TERMMUMJBESVPSA_498198.colSpan=2;
this.VA_TERMMUMJBESVPSA_498198.withoutLabel = false;
this.VA_TERMMUMJBESVPSA_498198.readOnly = ConstantsApi.mode.Query;
this.VA_TERMMUMJBESVPSA_498198.enabled = ConstantsApi.mode.All;
this.VA_TERMMUMJBESVPSA_498198.visible= ConstantsApi.mode.All;
this.VA_TYPEFEEARBRJCKA_414198.label = cobis.translate("LNSPR.LBL_LOANS_TIPOCUOTT_42607");
this.VA_TYPEFEEARBRJCKA_414198.blankOption=true;
this.VA_TYPEFEEARBRJCKA_414198.placeHolderLabel = cobis.translate("LNSPR.LBL_LNSPR_SELECCIOI_13820");
this.VA_TYPEFEEARBRJCKA_414198.entity = "AmortizationFormEntity";
this.VA_TYPEFEEARBRJCKA_414198.attribute = "typeFee";
this.VA_TYPEFEEARBRJCKA_414198.textField = "value";
this.VA_TYPEFEEARBRJCKA_414198.valueField = "code";
this.VA_TYPEFEEARBRJCKA_414198.showId= true;
this.VA_TYPEFEEARBRJCKA_414198.name="typeFee";
this.VA_TYPEFEEARBRJCKA_414198.id="VA_TYPEFEEARBRJCKA_414198";
this.VA_TYPEFEEARBRJCKA_414198.colSpan=4;
this.VA_TYPEFEEARBRJCKA_414198.withoutLabel = false;
this.VA_TYPEFEEARBRJCKA_414198.readOnly = ConstantsApi.mode.Query;
this.VA_TYPEFEEARBRJCKA_414198.enabled = ConstantsApi.mode.All;
this.VA_TYPEFEEARBRJCKA_414198.visible= ConstantsApi.mode.All;
this.VA_FIRSTDUEDATEACN_138198.label = cobis.translate("LNSPR.LBL_LNSPR_FECHA1ENI_10027");
this.VA_FIRSTDUEDATEACN_138198.entity = "AmortizationFormEntity";
this.VA_FIRSTDUEDATEACN_138198.attribute = "firstDueDate";
this.VA_FIRSTDUEDATEACN_138198.name="firstDueDate";
this.VA_FIRSTDUEDATEACN_138198.id="VA_FIRSTDUEDATEACN_138198";
this.VA_FIRSTDUEDATEACN_138198.colSpan=3;
this.VA_FIRSTDUEDATEACN_138198.withoutLabel = false;
this.VA_FIRSTDUEDATEACN_138198.readOnly = ConstantsApi.mode.Query;
this.VA_FIRSTDUEDATEACN_138198.enabled = ConstantsApi.mode.All;
this.VA_FIRSTDUEDATEACN_138198.visible= ConstantsApi.mode.All;
this.VA_FIXEDPAYEMENYTY_637198.id = "VA_FIXEDPAYEMENYTY_637198";
this.VA_FIXEDPAYEMENYTY_637198.name = "fixedPayementDay";
this.VA_FIXEDPAYEMENYTY_637198.label = cobis.translate("LNSPR.LBL_LOANS_FECHAPAGJ_50615");
this.VA_FIXEDPAYEMENYTY_637198.entity = "AmortizationFormEntity";
this.VA_FIXEDPAYEMENYTY_637198.attribute = "fixedPayementDay";
this.VA_FIXEDPAYEMENYTY_637198.colSpan = 3;
this.VA_FIXEDPAYEMENYTY_637198.withoutLabel = false;
this.VA_FIXEDPAYEMENYTY_637198.readOnly =ConstantsApi.mode.Query;
this.VA_FIXEDPAYEMENYTY_637198.enabled = ConstantsApi.mode.All;
this.VA_FIXEDPAYEMENYTY_637198.visible= ConstantsApi.mode.All;
this.VA_PAYMENTDAYEFRJN_549198.label = cobis.translate("LNSPR.LBL_LOANS_DAPAGOUDL_21888");
this.VA_PAYMENTDAYEFRJN_549198.blankOption=true;
this.VA_PAYMENTDAYEFRJN_549198.placeHolderLabel = cobis.translate("LNSPR.LBL_LNSPR_SELECCIOI_13820");
this.VA_PAYMENTDAYEFRJN_549198.entity = "AmortizationFormEntity";
this.VA_PAYMENTDAYEFRJN_549198.attribute = "paymentDay";
this.VA_PAYMENTDAYEFRJN_549198.textField = "value";
this.VA_PAYMENTDAYEFRJN_549198.valueField = "code";
this.VA_PAYMENTDAYEFRJN_549198.name="paymentDay";
this.VA_PAYMENTDAYEFRJN_549198.id="VA_PAYMENTDAYEFRJN_549198";
this.VA_PAYMENTDAYEFRJN_549198.colSpan=2;
this.VA_PAYMENTDAYEFRJN_549198.withoutLabel = false;
this.VA_PAYMENTDAYEFRJN_549198.readOnly = ConstantsApi.mode.Query;
this.VA_PAYMENTDAYEFRJN_549198.enabled = ConstantsApi.mode.All;
this.VA_PAYMENTDAYEFRJN_549198.visible= ConstantsApi.mode.All;
this.VA_TERMINTERESTGWH_345198.label = cobis.translate("LNSPR.LBL_LOANS_PINTLRXZD_97383");
this.VA_TERMINTERESTGWH_345198.entity = "AmortizationFormEntity";
this.VA_TERMINTERESTGWH_345198.attribute = "termInterest";
this.VA_TERMINTERESTGWH_345198.textCase= TextCaseOptions.NONE;
this.VA_TERMINTERESTGWH_345198.format= "n0";
this.VA_TERMINTERESTGWH_345198.name="termInterest";
this.VA_TERMINTERESTGWH_345198.id="VA_TERMINTERESTGWH_345198";
this.VA_TERMINTERESTGWH_345198.colSpan=2;
this.VA_TERMINTERESTGWH_345198.withoutLabel = false;
this.VA_TERMINTERESTGWH_345198.readOnly = ConstantsApi.mode.Query;
this.VA_TERMINTERESTGWH_345198.enabled = ConstantsApi.mode.All;
this.VA_TERMINTERESTGWH_345198.visible= ConstantsApi.mode.All;
this.VA_TERMCAPITALLSSH_857198.label = cobis.translate("LNSPR.LBL_LOANS_PCAPMXIYV_12380");
this.VA_TERMCAPITALLSSH_857198.entity = "AmortizationFormEntity";
this.VA_TERMCAPITALLSSH_857198.attribute = "termCapital";
this.VA_TERMCAPITALLSSH_857198.textCase= TextCaseOptions.NONE;
this.VA_TERMCAPITALLSSH_857198.format= "n0";
this.VA_TERMCAPITALLSSH_857198.name="termCapital";
this.VA_TERMCAPITALLSSH_857198.id="VA_TERMCAPITALLSSH_857198";
this.VA_TERMCAPITALLSSH_857198.colSpan=2;
this.VA_TERMCAPITALLSSH_857198.withoutLabel = false;
this.VA_TERMCAPITALLSSH_857198.readOnly = ConstantsApi.mode.Query;
this.VA_TERMCAPITALLSSH_857198.enabled = ConstantsApi.mode.All;
this.VA_TERMCAPITALLSSH_857198.visible= ConstantsApi.mode.All;
this.VA_EXTENDEDPAYMEDA_710198.label = cobis.translate("LNSPR.LBL_LOANS_FECHAPADE_78424");
this.VA_EXTENDEDPAYMEDA_710198.entity = "AmortizationFormEntity";
this.VA_EXTENDEDPAYMEDA_710198.attribute = "extendedPaymentDate";
this.VA_EXTENDEDPAYMEDA_710198.name="extendedPaymentDate";
this.VA_EXTENDEDPAYMEDA_710198.id="VA_EXTENDEDPAYMEDA_710198";
this.VA_EXTENDEDPAYMEDA_710198.colSpan=3;
this.VA_EXTENDEDPAYMEDA_710198.withoutLabel = false;
this.VA_EXTENDEDPAYMEDA_710198.readOnly = ConstantsApi.mode.Query;
this.VA_EXTENDEDPAYMEDA_710198.enabled = ConstantsApi.mode.All;
this.VA_EXTENDEDPAYMEDA_710198.visible= ConstantsApi.mode.All;
this.VA_DAYSGRACEDEFUUU_853198.label = cobis.translate("LNSPR.LBL_LOANS_DASGRACAM_55117");
this.VA_DAYSGRACEDEFUUU_853198.entity = "AmortizationFormEntity";
this.VA_DAYSGRACEDEFUUU_853198.attribute = "daysGraceDefault";
this.VA_DAYSGRACEDEFUUU_853198.maxlength= 4;
this.VA_DAYSGRACEDEFUUU_853198.textCase= TextCaseOptions.NONE;
this.VA_DAYSGRACEDEFUUU_853198.format= "####";
this.VA_DAYSGRACEDEFUUU_853198.name="daysGraceDefault";
this.VA_DAYSGRACEDEFUUU_853198.id="VA_DAYSGRACEDEFUUU_853198";
this.VA_DAYSGRACEDEFUUU_853198.colSpan=2;
this.VA_DAYSGRACEDEFUUU_853198.withoutLabel = false;
this.VA_DAYSGRACEDEFUUU_853198.readOnly = ConstantsApi.mode.Query;
this.VA_DAYSGRACEDEFUUU_853198.enabled = ConstantsApi.mode.All;
this.VA_DAYSGRACEDEFUUU_853198.visible= ConstantsApi.mode.All;
this.Spacer2905.id = "Spacer2905";
this.Spacer2905.name = "Spacer2905";
this.Spacer2905.colSpan = 1;
this.Spacer2905.visible= ConstantsApi.mode.All;
this.VA_MONTHGRACEFIJFA_429198.label = cobis.translate("LNSPR.LBL_LOANS_MESGRACII_45853");
this.VA_MONTHGRACEFIJFA_429198.entity = "AmortizationFormEntity";
this.VA_MONTHGRACEFIJFA_429198.attribute = "monthGrace";
this.VA_MONTHGRACEFIJFA_429198.textField = "value";
this.VA_MONTHGRACEFIJFA_429198.valueField = "code";
this.VA_MONTHGRACEFIJFA_429198.name="monthGrace";
this.VA_MONTHGRACEFIJFA_429198.id="VA_MONTHGRACEFIJFA_429198";
this.VA_MONTHGRACEFIJFA_429198.colSpan=2;
this.VA_MONTHGRACEFIJFA_429198.withoutLabel = false;
this.VA_MONTHGRACEFIJFA_429198.readOnly = ConstantsApi.mode.Query;
this.VA_MONTHGRACEFIJFA_429198.enabled = ConstantsApi.mode.All;
this.VA_MONTHGRACEFIJFA_429198.visible= ConstantsApi.mode.All;
this.VA_TERMGRACECAPTAT_881198.label = cobis.translate("LNSPR.LBL_LOANS_PERGRACIA_37297");
this.VA_TERMGRACECAPTAT_881198.entity = "AmortizationFormEntity";
this.VA_TERMGRACECAPTAT_881198.attribute = "termGraceCapital";
this.VA_TERMGRACECAPTAT_881198.maxlength= 3;
this.VA_TERMGRACECAPTAT_881198.textCase= TextCaseOptions.NONE;
this.VA_TERMGRACECAPTAT_881198.format= "###";
this.VA_TERMGRACECAPTAT_881198.name="termGraceCapital";
this.VA_TERMGRACECAPTAT_881198.id="VA_TERMGRACECAPTAT_881198";
this.VA_TERMGRACECAPTAT_881198.colSpan=2;
this.VA_TERMGRACECAPTAT_881198.withoutLabel = false;
this.VA_TERMGRACECAPTAT_881198.readOnly = ConstantsApi.mode.Query;
this.VA_TERMGRACECAPTAT_881198.enabled = ConstantsApi.mode.All;
this.VA_TERMGRACECAPTAT_881198.visible= ConstantsApi.mode.All;
this.VA_TERMGRACEINTTET_849198.label = cobis.translate("LNSPR.LBL_LOANS_PERGRACIS_30530");
this.VA_TERMGRACEINTTET_849198.entity = "AmortizationFormEntity";
this.VA_TERMGRACEINTTET_849198.attribute = "termGraceInterest";
this.VA_TERMGRACEINTTET_849198.maxlength= 3;
this.VA_TERMGRACEINTTET_849198.textCase= TextCaseOptions.NONE;
this.VA_TERMGRACEINTTET_849198.format= "###";
this.VA_TERMGRACEINTTET_849198.name="termGraceInterest";
this.VA_TERMGRACEINTTET_849198.id="VA_TERMGRACEINTTET_849198";
this.VA_TERMGRACEINTTET_849198.colSpan=2;
this.VA_TERMGRACEINTTET_849198.withoutLabel = false;
this.VA_TERMGRACEINTTET_849198.readOnly = ConstantsApi.mode.Query;
this.VA_TERMGRACEINTTET_849198.enabled = ConstantsApi.mode.All;
this.VA_TERMGRACEINTTET_849198.visible= ConstantsApi.mode.All;
this.VA_BASEINTERESTAAC_534198.id = "VA_BASEINTERESTAAC_534198";
this.VA_BASEINTERESTAAC_534198.name = "baseInterestCalculation";
this.VA_BASEINTERESTAAC_534198.attribute = "baseInterestCalculation";
this.VA_BASEINTERESTAAC_534198.label = cobis.translate("LNSPR.LBL_LOANS_BASECLCOO_88666");
this.VA_BASEINTERESTAAC_534198.colSpan = 4;
this.VA_BASEINTERESTAAC_534198.withoutLabel = false;
this.VA_BASEINTERESTAAC_534198.readOnly = ConstantsApi.mode.Query;
this.VA_BASEINTERESTAAC_534198.entity = "AmortizationFormEntity";
this.VA_BASEINTERESTAAC_534198.enabled = ConstantsApi.mode.All;
this.VA_BASEINTERESTAAC_534198.visible= ConstantsApi.mode.All;
this.VA_BASEINTERESTAAC_534198.textField = "value";
this.VA_BASEINTERESTAAC_534198.valueField = "code";
this.VA_TYPEAMORTIZATTN_681198.id = "VA_TYPEAMORTIZATTN_681198";
this.VA_TYPEAMORTIZATTN_681198.name = "typeAmortization";
this.VA_TYPEAMORTIZATTN_681198.attribute = "typeAmortization";
this.VA_TYPEAMORTIZATTN_681198.label = cobis.translate("LNSPR.LBL_LNSPR_TIPOAMOCN_60024");
this.VA_TYPEAMORTIZATTN_681198.colSpan = 4;
this.VA_TYPEAMORTIZATTN_681198.withoutLabel = false;
this.VA_TYPEAMORTIZATTN_681198.readOnly = ConstantsApi.mode.Query;
this.VA_TYPEAMORTIZATTN_681198.entity = "AmortizationFormEntity";
this.VA_TYPEAMORTIZATTN_681198.enabled = ConstantsApi.mode.All;
this.VA_TYPEAMORTIZATTN_681198.visible= ConstantsApi.mode.All;
this.VA_TYPEAMORTIZATTN_681198.textField = "value";
this.VA_TYPEAMORTIZATTN_681198.valueField = "code";
this.VA_AVOIDHOLIDAYSSS_789198.id = "VA_AVOIDHOLIDAYSSS_789198";
this.VA_AVOIDHOLIDAYSSS_789198.name = "avoidHolidays";
this.VA_AVOIDHOLIDAYSSS_789198.attribute = "avoidHolidays";
this.VA_AVOIDHOLIDAYSSS_789198.label = cobis.translate("LNSPR.LBL_LNSPR_EVITARDAR_30713");
this.VA_AVOIDHOLIDAYSSS_789198.colSpan = 3;
this.VA_AVOIDHOLIDAYSSS_789198.withoutLabel = false;
this.VA_AVOIDHOLIDAYSSS_789198.readOnly = ConstantsApi.mode.Query;
this.VA_AVOIDHOLIDAYSSS_789198.entity = "AmortizationFormEntity";
this.VA_AVOIDHOLIDAYSSS_789198.enabled = ConstantsApi.mode.All;
this.VA_AVOIDHOLIDAYSSS_789198.visible= ConstantsApi.mode.All;
this.VA_AVOIDHOLIDAYSSS_789198.textField = "value";
this.VA_AVOIDHOLIDAYSSS_789198.valueField = "code";
this.VA_TYPEGRACEBHAAVJ_350198.id = "VA_TYPEGRACEBHAAVJ_350198";
this.VA_TYPEGRACEBHAAVJ_350198.name = "typeGrace";
this.VA_TYPEGRACEBHAAVJ_350198.attribute = "typeGrace";
this.VA_TYPEGRACEBHAAVJ_350198.label = cobis.translate("LNSPR.LBL_LNSPR_ACOBROGRR_70469");
this.VA_TYPEGRACEBHAAVJ_350198.colSpan = 3;
this.VA_TYPEGRACEBHAAVJ_350198.withoutLabel = false;
this.VA_TYPEGRACEBHAAVJ_350198.readOnly = ConstantsApi.mode.Query;
this.VA_TYPEGRACEBHAAVJ_350198.entity = "AmortizationFormEntity";
this.VA_TYPEGRACEBHAAVJ_350198.enabled = ConstantsApi.mode.All;
this.VA_TYPEGRACEBHAAVJ_350198.visible= ConstantsApi.mode.All;
this.VA_TYPEGRACEBHAAVJ_350198.textField = "value";
this.VA_TYPEGRACEBHAAVJ_350198.valueField = "code";
this.VA_9468GILHMJRMZIF_745198.label = cobis.translate("LNSPR.LBL_LNSPR_NUMDIVARD_99309");
this.VA_9468GILHMJRMZIF_745198.entity = "AmortizationFormEntity";
this.VA_9468GILHMJRMZIF_745198.attribute = "graceDividend";
this.VA_9468GILHMJRMZIF_745198.maxlength= 5;
this.VA_9468GILHMJRMZIF_745198.textCase= TextCaseOptions.NONE;
this.VA_9468GILHMJRMZIF_745198.format= "n0";
this.VA_9468GILHMJRMZIF_745198.name="graceDividend";
this.VA_9468GILHMJRMZIF_745198.id="VA_9468GILHMJRMZIF_745198";
this.VA_9468GILHMJRMZIF_745198.colSpan=2;
this.VA_9468GILHMJRMZIF_745198.withoutLabel = false;
this.VA_9468GILHMJRMZIF_745198.readOnly = ConstantsApi.mode.Query;
this.VA_9468GILHMJRMZIF_745198.enabled = ConstantsApi.mode.All;
this.VA_9468GILHMJRMZIF_745198.visible= ConstantsApi.mode.All;
this.VA_BALLONFEEWWRPRY_949198.id = "VA_BALLONFEEWWRPRY_949198";
this.VA_BALLONFEEWWRPRY_949198.name = "ballonFee";
this.VA_BALLONFEEWWRPRY_949198.label = cobis.translate("LNSPR.LBL_LNSPR_CUOTABAON_17343");
this.VA_BALLONFEEWWRPRY_949198.entity = "AmortizationFormEntity";
this.VA_BALLONFEEWWRPRY_949198.attribute = "ballonFee";
this.VA_BALLONFEEWWRPRY_949198.colSpan = 3;
this.VA_BALLONFEEWWRPRY_949198.withoutLabel = false;
this.VA_BALLONFEEWWRPRY_949198.readOnly =ConstantsApi.mode.Query;
this.VA_BALLONFEEWWRPRY_949198.enabled = ConstantsApi.mode.All;
this.VA_BALLONFEEWWRPRY_949198.visible= ConstantsApi.mode.All;
this.VA_BALLONFEEWWRPRY_949198.trueValue ="S";
this.VA_BALLONFEEWWRPRY_949198.falseValue ="N";
this.VA_RANDOMGRACEYJOS_359198.entity = "AmortizationFormEntity";
this.VA_RANDOMGRACEYJOS_359198.attribute = "randomGrace";
this.VA_RANDOMGRACEYJOS_359198.textCase= TextCaseOptions.NONE;
this.VA_RANDOMGRACEYJOS_359198.name="randomGrace";
this.VA_RANDOMGRACEYJOS_359198.id="VA_RANDOMGRACEYJOS_359198";
this.VA_RANDOMGRACEYJOS_359198.colSpan=1;
this.VA_RANDOMGRACEYJOS_359198.withoutLabel = false;
this.VA_RANDOMGRACEYJOS_359198.readOnly = ConstantsApi.mode.Query;
this.VA_RANDOMGRACEYJOS_359198.enabled = ConstantsApi.mode.All;
this.VA_RANDOMGRACEYJOS_359198.visible= ConstantsApi.mode.None;
this.VA_GENERATEINSUENC_694198.id = "VA_GENERATEINSUENC_694198";
this.VA_GENERATEINSUENC_694198.name = "generateInsurance";
this.VA_GENERATEINSUENC_694198.label = cobis.translate("LNSPR.LBL_LOANS_GENERARSE_14617");
this.VA_GENERATEINSUENC_694198.entity = "AmortizationFormEntity";
this.VA_GENERATEINSUENC_694198.attribute = "generateInsurance";
this.VA_GENERATEINSUENC_694198.colSpan = 2;
this.VA_GENERATEINSUENC_694198.withoutLabel = true;
this.VA_GENERATEINSUENC_694198.readOnly =ConstantsApi.mode.Query;
this.VA_GENERATEINSUENC_694198.enabled = ConstantsApi.mode.None;
this.VA_GENERATEINSUENC_694198.visible= ConstantsApi.mode.None;
this.VA_INITIALINTERTSE_643198.label = cobis.translate("LNSPR.LBL_LOANS_CUOTAINTL_31668");
this.VA_INITIALINTERTSE_643198.entity = "AmortizationFormEntity";
this.VA_INITIALINTERTSE_643198.attribute = "initialInterestRest";
this.VA_INITIALINTERTSE_643198.textCase= TextCaseOptions.NONE;
this.VA_INITIALINTERTSE_643198.format= "#.00###";
this.VA_INITIALINTERTSE_643198.name="initialInterestRest";
this.VA_INITIALINTERTSE_643198.id="VA_INITIALINTERTSE_643198";
this.VA_INITIALINTERTSE_643198.colSpan=2;
this.VA_INITIALINTERTSE_643198.withoutLabel = false;
this.VA_INITIALINTERTSE_643198.readOnly = ConstantsApi.mode.Query;
this.VA_INITIALINTERTSE_643198.enabled = ConstantsApi.mode.None;
this.VA_INITIALINTERTSE_643198.visible= ConstantsApi.mode.None;
this.VA_REDISCOUNTDAEET_581198.label = cobis.translate("LNSPR.LBL_LOANS_FECHARENO_30734");
this.VA_REDISCOUNTDAEET_581198.entity = "AmortizationFormEntity";
this.VA_REDISCOUNTDAEET_581198.attribute = "rediscountDate";
this.VA_REDISCOUNTDAEET_581198.textCase= TextCaseOptions.NONE;
this.VA_REDISCOUNTDAEET_581198.name="rediscountDate";
this.VA_REDISCOUNTDAEET_581198.id="VA_REDISCOUNTDAEET_581198";
this.VA_REDISCOUNTDAEET_581198.colSpan=2;
this.VA_REDISCOUNTDAEET_581198.withoutLabel = false;
this.VA_REDISCOUNTDAEET_581198.readOnly = ConstantsApi.mode.Query;
this.VA_REDISCOUNTDAEET_581198.enabled = ConstantsApi.mode.None;
this.VA_REDISCOUNTDAEET_581198.visible= ConstantsApi.mode.None;
this.VA_SOLIDARITYTOGWR_286198.id = "VA_SOLIDARITYTOGWR_286198";
this.VA_SOLIDARITYTOGWR_286198.name = "solidarity";
this.VA_SOLIDARITYTOGWR_286198.label = cobis.translate("LNSPR.LBL_LOANS_PAGOLEYID_82535");
this.VA_SOLIDARITYTOGWR_286198.entity = "AmortizationFormEntity";
this.VA_SOLIDARITYTOGWR_286198.attribute = "solidarity";
this.VA_SOLIDARITYTOGWR_286198.colSpan = 2;
this.VA_SOLIDARITYTOGWR_286198.withoutLabel = false;
this.VA_SOLIDARITYTOGWR_286198.readOnly =ConstantsApi.mode.Query;
this.VA_SOLIDARITYTOGWR_286198.enabled = ConstantsApi.mode.None;
this.VA_SOLIDARITYTOGWR_286198.visible= ConstantsApi.mode.None;
this.VA_IVASDFHAPWJFULF_560198.label = cobis.translate("LNSPR.LBL_LNSPR_TASAIVAAE_29597");
this.VA_IVASDFHAPWJFULF_560198.entity = "AmortizationFormEntity";
this.VA_IVASDFHAPWJFULF_560198.attribute = "iva";
this.VA_IVASDFHAPWJFULF_560198.textCase= TextCaseOptions.NONE;
this.VA_IVASDFHAPWJFULF_560198.format= "n";
this.VA_IVASDFHAPWJFULF_560198.name="iva";
this.VA_IVASDFHAPWJFULF_560198.id="VA_IVASDFHAPWJFULF_560198";
this.VA_IVASDFHAPWJFULF_560198.colSpan=2;
this.VA_IVASDFHAPWJFULF_560198.withoutLabel = false;
this.VA_IVASDFHAPWJFULF_560198.readOnly = ConstantsApi.mode.Query;
this.VA_IVASDFHAPWJFULF_560198.enabled = ConstantsApi.mode.All;
this.VA_IVASDFHAPWJFULF_560198.visible= ConstantsApi.mode.None;
this.Spacer2387.id = "Spacer2387";
this.Spacer2387.name = "Spacer2387";
this.Spacer2387.colSpan = 1;
this.Spacer2387.visible= ConstantsApi.mode.All;
this.QV_ECPR_JAA30.pageSize=13;
this.QV_ECPR_JAA30.id='QV_ECPR_JAA30';
this.QV_ECPR_JAA30.name='QV_ECPR_JAA30';
this.QV_ECPR_JAA30.pageable=true;
this.QV_ECPR_JAA30.sortable=false;
this.QV_ECPR_JAA30.resizable=true;
this.QV_ECPR_JAA30.scrollable=true
this.QV_ECPR_JAA30.confirmRowDeletion=false;
this.QV_ECPR_JAA30.exportToExcel=true;
this.QV_ECPR_JAA30.exportToPdf=false;
this.QV_ECPR_JAA30.height=0;
this.QV_ECPR_JAA30.filterableColumns=false;
this.QV_ECPR_JAA30.entityName='AmortizationEntity';
this.QV_ECPR_JAA30.appendRecords=false;
this.QV_ECPR_JAA30.rowDetail=false;
this.QV_ECPR_JAA30.columnMenu = true;
this.QV_ECPR_JAA30.editMode=CommonsConstants.GRID_EDIT_MODE_INLINE;
this.QV_ECPR_JAA30.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
this.QV_ECPR_JAA30.actions=[ComplexConstants.GRID_ACTION_DELETE,ComplexConstants.GRID_ACTION_UPDATE];
//GridCommands:
this.QV_ECPR_JAA30.commandsButton=[
{
id : 'CEQV_201QV_ECPR_JAA30_396',
image:'',
label: cobis.translate('LNSPR.LBL_LOANS_NUEVOPCDH_48132'),
name : 'GridCommand',
tooltip:'',
setFocus:false,
userControl:'Button',
enabled:true,
visible:true
},
];
//RowCommands:
//Creacion de columnas del Grid
this.QV_ECPR_JAA30.columns = Util.filterByMode(this.mode, [
{
id : "VA_DIVIDENDJQEBXYL_179198",
label : cobis.translate('LNSPR.LBL_LOANS_DIVIDENOO_68814'),
field : 'dividend',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 125,
properties :
{
id :'VA_DIVIDENDJQEBXYL_179198',
name :'dividend',
withoutLabel : true,
attribute : 'dividend',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_EXPIRATIONDATTE_941198",
label : cobis.translate('LNSPR.LBL_LOANS_VENCIMINO_55304'),
field : 'expirationDate',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties : {
id :'VA_EXPIRATIONDATTE_941198',
name :'expirationDate',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'expirationDate',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'AmortizationEntity',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
required : true,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]),
messagesValidations : {
required: cobis.translate('LNSPR.MSG_LOANS_ESTECAMAE_46076')
},
}
},
{
id : "VA_BALANCECAPITLLL_258198",
label : cobis.translate('LNSPR.LBL_LOANS_SALDOCAPP_21556'),
field : 'balanceCapital',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_BALANCECAPITLLL_258198',
name :'balanceCapital',
withoutLabel : true,
attribute : 'balanceCapital',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD111_201198",
field : 'dynamicField1',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_DYNAMICFIELD111_201198',
name :'dynamicField1',
withoutLabel : true,
attribute : 'dynamicField1',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
required : true,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]),
messagesValidations : {
required: cobis.translate('LNSPR.MSG_LOANS_ESTECAMAE_46076')
},
}
},
{
id : "VA_DYNAMICFIELD222_976198",
field : 'dynamicField2',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_DYNAMICFIELD222_976198',
name :'dynamicField2',
withoutLabel : true,
attribute : 'dynamicField2',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD333_680198",
field : 'dynamicField3',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_DYNAMICFIELD333_680198',
name :'dynamicField3',
withoutLabel : true,
attribute : 'dynamicField3',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD444_619198",
field : 'dynamicField4',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_DYNAMICFIELD444_619198',
name :'dynamicField4',
withoutLabel : true,
attribute : 'dynamicField4',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD555_803198",
field : 'dynamicField5',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_DYNAMICFIELD555_803198',
name :'dynamicField5',
withoutLabel : true,
attribute : 'dynamicField5',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD666_861198",
field : 'dynamicField6',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_DYNAMICFIELD666_861198',
name :'dynamicField6',
withoutLabel : true,
attribute : 'dynamicField6',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD777_256198",
field : 'dynamicField7',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_DYNAMICFIELD777_256198',
name :'dynamicField7',
withoutLabel : true,
attribute : 'dynamicField7',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD888_910198",
field : 'dynamicField8',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_DYNAMICFIELD888_910198',
name :'dynamicField8',
withoutLabel : true,
attribute : 'dynamicField8',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD999_904198",
field : 'dynamicField9',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_DYNAMICFIELD999_904198',
name :'dynamicField9',
withoutLabel : true,
attribute : 'dynamicField9',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD011_387198",
field : 'dynamicField10',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_DYNAMICFIELD011_387198',
name :'dynamicField10',
withoutLabel : true,
attribute : 'dynamicField10',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD111_909198",
field : 'dynamicField11',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_DYNAMICFIELD111_909198',
name :'dynamicField11',
withoutLabel : true,
attribute : 'dynamicField11',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD121_508198",
field : 'dynamicField12',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_DYNAMICFIELD121_508198',
name :'dynamicField12',
withoutLabel : true,
attribute : 'dynamicField12',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD311_753198",
field : 'dynamicField13',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_DYNAMICFIELD311_753198',
name :'dynamicField13',
withoutLabel : true,
attribute : 'dynamicField13',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD411_866198",
field : 'dynamicField14',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_DYNAMICFIELD411_866198',
name :'dynamicField14',
withoutLabel : true,
attribute : 'dynamicField14',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD551_120198",
field : 'dynamicField15',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_DYNAMICFIELD551_120198',
name :'dynamicField15',
withoutLabel : true,
attribute : 'dynamicField15',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD111_346198",
field : 'dynamicField16',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_DYNAMICFIELD111_346198',
name :'dynamicField16',
withoutLabel : true,
attribute : 'dynamicField16',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD777_257198",
field : 'dynamicField17',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_DYNAMICFIELD777_257198',
name :'dynamicField17',
withoutLabel : true,
attribute : 'dynamicField17',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD181_740198",
field : 'dynamicField18',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_DYNAMICFIELD181_740198',
name :'dynamicField18',
withoutLabel : true,
attribute : 'dynamicField18',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD911_217198",
field : 'dynamicField19',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_DYNAMICFIELD911_217198',
name :'dynamicField19',
withoutLabel : true,
attribute : 'dynamicField19',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD000_944198",
field : 'dynamicField20',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_DYNAMICFIELD000_944198',
name :'dynamicField20',
withoutLabel : true,
attribute : 'dynamicField20',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_FEEOLAUUHKGPDCB_657198",
label : cobis.translate('LNSPR.LBL_LOANS_CUOTAQUGL_10106'),
field : 'fee',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_FEEOLAUUHKGPDCB_657198',
name :'fee',
withoutLabel : true,
attribute : 'fee',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
isOnChangeControl:true,
}
},
]);
this.VA_VAVABUTTONRDGI5_636198.id = "VA_VAVABUTTONRDGI5_636198";
this.VA_VAVABUTTONRDGI5_636198.name = "VA_VAVABUTTONRDGI5_636198";
this.VA_VAVABUTTONRDGI5_636198.label = cobis.translate("LNSPR.LBL_LOANS_CALCULARR_36878");
this.VA_VAVABUTTONRDGI5_636198.colSpan = 1;
this.VA_VAVABUTTONRDGI5_636198.withoutLabel = true;
this.VA_VAVABUTTONRDGI5_636198.causesValidation=false;
this.VA_VAVABUTTONRDGI5_636198.submitOnEnter=false;
this.VA_VAVABUTTONRDGI5_636198.setFocus=false;
this.VA_VAVABUTTONRDGI5_636198.enabled = ConstantsApi.mode.All;
this.VA_VAVABUTTONRDGI5_636198.visible= ConstantsApi.mode.All;
this.VA_VAVABUTTONRDGI5_636198.icon = "";
this.VA_VAVABUTTONNXJJ__482198.id = "VA_VAVABUTTONNXJJ__482198";
this.VA_VAVABUTTONNXJJ__482198.name = "VA_VAVABUTTONNXJJ__482198";
this.VA_VAVABUTTONNXJJ__482198.label = cobis.translate("LNSPR.LBL_LOANS_ADICIONAA_20544");
this.VA_VAVABUTTONNXJJ__482198.colSpan = 1;
this.VA_VAVABUTTONNXJJ__482198.withoutLabel = true;
this.VA_VAVABUTTONNXJJ__482198.causesValidation=false;
this.VA_VAVABUTTONNXJJ__482198.submitOnEnter=false;
this.VA_VAVABUTTONNXJJ__482198.setFocus=false;
this.VA_VAVABUTTONNXJJ__482198.enabled = ConstantsApi.mode.All;
this.VA_VAVABUTTONNXJJ__482198.visible= ConstantsApi.mode.All;
this.VA_VAVABUTTONNXJJ__482198.icon = "";
this.VA_VAVABUTTONZDFPF_173198.id = "VA_VAVABUTTONZDFPF_173198";
this.VA_VAVABUTTONZDFPF_173198.name = "VA_VAVABUTTONZDFPF_173198";
this.VA_VAVABUTTONZDFPF_173198.label = cobis.translate("LNSPR.LBL_LOANS_GRACIAYDM_14967");
this.VA_VAVABUTTONZDFPF_173198.colSpan = 1;
this.VA_VAVABUTTONZDFPF_173198.withoutLabel = true;
this.VA_VAVABUTTONZDFPF_173198.causesValidation=false;
this.VA_VAVABUTTONZDFPF_173198.submitOnEnter=false;
this.VA_VAVABUTTONZDFPF_173198.setFocus=false;
this.VA_VAVABUTTONZDFPF_173198.enabled = ConstantsApi.mode.All;
this.VA_VAVABUTTONZDFPF_173198.visible= ConstantsApi.mode.All;
this.VA_VAVABUTTONZDFPF_173198.icon = "";
this.VA_VAVABUTTONOH3FZ_246198.id = "VA_VAVABUTTONOH3FZ_246198";
this.VA_VAVABUTTONOH3FZ_246198.name = "VA_VAVABUTTONOH3FZ_246198";
this.VA_VAVABUTTONOH3FZ_246198.label = cobis.translate("LNSPR.LBL_LOANS_RECALCUAR_13089");
this.VA_VAVABUTTONOH3FZ_246198.colSpan = 1;
this.VA_VAVABUTTONOH3FZ_246198.withoutLabel = true;
this.VA_VAVABUTTONOH3FZ_246198.causesValidation=false;
this.VA_VAVABUTTONOH3FZ_246198.submitOnEnter=false;
this.VA_VAVABUTTONOH3FZ_246198.setFocus=false;
this.VA_VAVABUTTONOH3FZ_246198.enabled = ConstantsApi.mode.All;
this.VA_VAVABUTTONOH3FZ_246198.visible= ConstantsApi.mode.All;
this.VA_VAVABUTTONOH3FZ_246198.icon = "";
this.VA_VAVABUTTONNPM_2_987198.id = "VA_VAVABUTTONNPM_2_987198";
this.VA_VAVABUTTONNPM_2_987198.name = "VA_VAVABUTTONNPM_2_987198";
this.VA_VAVABUTTONNPM_2_987198.label = cobis.translate("LNSPR.LBL_LOANS_GUARDARRY_43346");
this.VA_VAVABUTTONNPM_2_987198.colSpan = 1;
this.VA_VAVABUTTONNPM_2_987198.withoutLabel = true;
this.VA_VAVABUTTONNPM_2_987198.causesValidation=false;
this.VA_VAVABUTTONNPM_2_987198.submitOnEnter=false;
this.VA_VAVABUTTONNPM_2_987198.setFocus=false;
this.VA_VAVABUTTONNPM_2_987198.enabled = ConstantsApi.mode.All;
this.VA_VAVABUTTONNPM_2_987198.visible= ConstantsApi.mode.All;
this.VA_VAVABUTTONNPM_2_987198.icon = "";
this.VA_VAVABUTTONVJFY0_286198.id = "VA_VAVABUTTONVJFY0_286198";
this.VA_VAVABUTTONVJFY0_286198.name = "VA_VAVABUTTONVJFY0_286198";
this.VA_VAVABUTTONVJFY0_286198.label = cobis.translate("LNSPR.LBL_LNSPR_IMPRIMIRR_54076");
this.VA_VAVABUTTONVJFY0_286198.colSpan = 1;
this.VA_VAVABUTTONVJFY0_286198.withoutLabel = true;
this.VA_VAVABUTTONVJFY0_286198.causesValidation=false;
this.VA_VAVABUTTONVJFY0_286198.submitOnEnter=false;
this.VA_VAVABUTTONVJFY0_286198.setFocus=false;
this.VA_VAVABUTTONVJFY0_286198.enabled = ConstantsApi.mode.All;
this.VA_VAVABUTTONVJFY0_286198.visible= ConstantsApi.mode.None;
this.VA_SPACER2979MSHFC_211198.id = "VA_SPACER2979MSHFC_211198";
this.VA_SPACER2979MSHFC_211198.name = "Spacer2979";
this.VA_SPACER2979MSHFC_211198.colSpan = 1;
this.VA_SPACER2979MSHFC_211198.visible= ConstantsApi.mode.All;
this.VA_SPACER1486BFHYH_817198.id = "VA_SPACER1486BFHYH_817198";
this.VA_SPACER1486BFHYH_817198.name = "Spacer1486";
this.VA_SPACER1486BFHYH_817198.colSpan = 1;
this.VA_SPACER1486BFHYH_817198.visible= ConstantsApi.mode.All;
this.VA_VAVABUTTONPJ080_778198.id = "VA_VAVABUTTONPJ080_778198";
this.VA_VAVABUTTONPJ080_778198.name = "VA_VAVABUTTONPJ080_778198";
this.VA_VAVABUTTONPJ080_778198.label = cobis.translate("LNSPR.LBL_LOANS_IMPRIMISS_89532");
this.VA_VAVABUTTONPJ080_778198.colSpan = 2;
this.VA_VAVABUTTONPJ080_778198.withoutLabel = true;
this.VA_VAVABUTTONPJ080_778198.causesValidation=false;
this.VA_VAVABUTTONPJ080_778198.submitOnEnter=false;
this.VA_VAVABUTTONPJ080_778198.setFocus=false;
this.VA_VAVABUTTONPJ080_778198.enabled = ConstantsApi.mode.None;
this.VA_VAVABUTTONPJ080_778198.visible= ConstantsApi.mode.None;
this.VA_SPACER2660NECGA_809198.id = "VA_SPACER2660NECGA_809198";
this.VA_SPACER2660NECGA_809198.name = "Spacer2660";
this.VA_SPACER2660NECGA_809198.colSpan = 1;
this.VA_SPACER2660NECGA_809198.visible= ConstantsApi.mode.All;
this.T_LNSPRGNPCEXYE_633 = this.formBuilder.group({
AmortizationFormEntity: this.formBuilder.group({
numOperation:[{value: null, disabled: !this.VA_NUMOPERATIONRWY_828198.visible}],
operationType:[{value: null, disabled: !this.VA_OPERATIONTYPEEE_239198.visible}],
amount:[{value: null, disabled: !this.VA_AMOUNTEWSEJLOSB_545198.visible}],
tirFee:[{value: null, disabled: !this.VA_TIRFEEYVRGJBTQS_146198.visible}],
valueDate:[{value: null, disabled: !this.VA_VALUEDATEKMJLVF_161198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_VALUEDATEKMJLVF_161198.validationFunctions!)],
interest:[{value: null, disabled: !this.VA_INTERESTBRXDBGI_239198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_INTERESTBRXDBGI_239198.validationFunctions!)],
fee:[{value: null, disabled: !this.VA_FEEOFWVFIUKFNPP_635198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_FEEOFWVFIUKFNPP_635198.validationFunctions!)],
termType:[{value: null, disabled: !this.VA_TERMTYPEOWIDGEH_595198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TERMTYPEOWIDGEH_595198.validationFunctions!)],
term:[{value: null, disabled: !this.VA_TERMMUMJBESVPSA_498198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TERMMUMJBESVPSA_498198.validationFunctions!)],
typeFee:[{value: null, disabled: !this.VA_TYPEFEEARBRJCKA_414198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TYPEFEEARBRJCKA_414198.validationFunctions!)],
firstDueDate:[{value: null, disabled: !this.VA_FIRSTDUEDATEACN_138198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_FIRSTDUEDATEACN_138198.validationFunctions!)],
fixedPayementDay:[{value: false, disabled: !this.VA_FIXEDPAYEMENYTY_637198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_FIXEDPAYEMENYTY_637198.validationFunctions!)],
paymentDay:[{value: null, disabled: !this.VA_PAYMENTDAYEFRJN_549198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PAYMENTDAYEFRJN_549198.validationFunctions!)],
termInterest:[{value: null, disabled: !this.VA_TERMINTERESTGWH_345198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TERMINTERESTGWH_345198.validationFunctions!)],
termCapital:[{value: null, disabled: !this.VA_TERMCAPITALLSSH_857198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TERMCAPITALLSSH_857198.validationFunctions!)],
extendedPaymentDate:[{value: null, disabled: !this.VA_EXTENDEDPAYMEDA_710198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_EXTENDEDPAYMEDA_710198.validationFunctions!)],
daysGraceDefault:[{value: null, disabled: !this.VA_DAYSGRACEDEFUUU_853198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_DAYSGRACEDEFUUU_853198.validationFunctions!)],
monthGrace:[{value: null, disabled: !this.VA_MONTHGRACEFIJFA_429198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_MONTHGRACEFIJFA_429198.validationFunctions!)],
termGraceCapital:[{value: null, disabled: !this.VA_TERMGRACECAPTAT_881198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TERMGRACECAPTAT_881198.validationFunctions!)],
termGraceInterest:[{value: null, disabled: !this.VA_TERMGRACEINTTET_849198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TERMGRACEINTTET_849198.validationFunctions!)],
baseInterestCalculation:[{value: null, disabled: !this.VA_BASEINTERESTAAC_534198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_BASEINTERESTAAC_534198.validationFunctions!)],
typeAmortization:[{value: null, disabled: !this.VA_TYPEAMORTIZATTN_681198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TYPEAMORTIZATTN_681198.validationFunctions!)],
avoidHolidays:[{value: null, disabled: !this.VA_AVOIDHOLIDAYSSS_789198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_AVOIDHOLIDAYSSS_789198.validationFunctions!)],
typeGrace:[{value: null, disabled: !this.VA_TYPEGRACEBHAAVJ_350198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TYPEGRACEBHAAVJ_350198.validationFunctions!)],
graceDividend:[{value: null, disabled: !this.VA_9468GILHMJRMZIF_745198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_9468GILHMJRMZIF_745198.validationFunctions!)],
ballonFee:[{value: false, disabled: !this.VA_BALLONFEEWWRPRY_949198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_BALLONFEEWWRPRY_949198.validationFunctions!)],
randomGrace:[{value: null, disabled: !this.VA_RANDOMGRACEYJOS_359198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_RANDOMGRACEYJOS_359198.validationFunctions!)],
generateInsurance:[{value: false, disabled: !this.VA_GENERATEINSUENC_694198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_GENERATEINSUENC_694198.validationFunctions!)],
initialInterestRest:[{value: null, disabled: !this.VA_INITIALINTERTSE_643198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_INITIALINTERTSE_643198.validationFunctions!)],
rediscountDate:[{value: null, disabled: !this.VA_REDISCOUNTDAEET_581198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_REDISCOUNTDAEET_581198.validationFunctions!)],
solidarity:[{value: false, disabled: !this.VA_SOLIDARITYTOGWR_286198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_SOLIDARITYTOGWR_286198.validationFunctions!)],
iva:[{value: null, disabled: !this.VA_IVASDFHAPWJFULF_560198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_IVASDFHAPWJFULF_560198.validationFunctions!)],
safeTerm:[null],
calculatesNetRate:[null],
operationCode:[null],
equalDues:[null],
capital:[null],
chargeIn:[null],
threeYear:[null],
}
),
AmortizationEntity: this.formBuilder.group({
dividend:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DIVIDENDJQEBXYL_179198')],
expirationDate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_EXPIRATIONDATTE_941198')],
balanceCapital:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_BALANCECAPITLLL_258198')],
dynamicField1:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD111_201198')],
dynamicField2:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD222_976198')],
dynamicField3:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD333_680198')],
dynamicField4:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD444_619198')],
dynamicField5:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD555_803198')],
dynamicField6:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD666_861198')],
dynamicField7:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD777_256198')],
dynamicField8:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD888_910198')],
dynamicField9:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD999_904198')],
dynamicField10:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD011_387198')],
dynamicField11:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD111_909198')],
dynamicField12:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD121_508198')],
dynamicField13:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD311_753198')],
dynamicField14:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD411_866198')],
dynamicField15:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD551_120198')],
dynamicField16:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD111_346198')],
dynamicField17:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD777_257198')],
dynamicField18:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD181_740198')],
dynamicField19:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD911_217198')],
dynamicField20:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD000_944198')],
fee:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_FEEOLAUUHKGPDCB_657198')],
}
),
});
}
}