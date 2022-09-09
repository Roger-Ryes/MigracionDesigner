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
public T_LNSPRKEGMFGIE_785!:FormGroup;
public VC_OPERATIONN_207785:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OPERATIREA_304309 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OPERATILGA_375309 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OPERATISNM_844309 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OPERATINPL_449309 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_PAYMENTMETHODDD_220309: CobisDropDownListModel = new CobisDropDownListModel();
public VA_VABUTTONOHXRHAO_106309: CobisButtonModel = new CobisButtonModel();
public VA_ALLOWSRENEWALLL_150309: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public Spacer2788: CobisSpacerModel = new CobisSpacerModel();
public VA_READJUSTABLELXP_279309: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public VA_RESTRUCTURINGGG_731309: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public Spacer2903: CobisSpacerModel = new CobisSpacerModel();
public VA_PERIODICITYEHNN_689309: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_ACCEPTADDITIYNN_323309: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public Spacer2650: CobisSpacerModel = new CobisSpacerModel();
public VA_INTERESTPAYMNNE_508309: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public VA_PAYFULLFEEVHEVU_441309: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public Spacer2718: CobisSpacerModel = new CobisSpacerModel();
public VA_KINDPAYMENTDUCW_586309: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public VA_CASHPAYMENTSUUG_169309: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public Spacer2649: CobisSpacerModel = new CobisSpacerModel();
public VA_TYPEPAYMENTNPPY_513309: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public Spacer1700: CobisSpacerModel = new CobisSpacerModel();
public Spacer2104: CobisSpacerModel = new CobisSpacerModel();
public VA_4223IMHHOSVYCXY_300309: CobisCheckBoxModel = new CobisCheckBoxModel();
public Spacer2761: CobisSpacerModel = new CobisSpacerModel();
public Spacer2882: CobisSpacerModel = new CobisSpacerModel();
public VA_9193TCVDUUBRZAN_137309: CobisDropDownListModel = new CobisDropDownListModel();
public Spacer1931: CobisSpacerModel = new CobisSpacerModel();
public VA_VABUTTONFIRPTAQ_308309: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_OPERATIONN_207785.id="VC_OPERATIONN_207785";
this.VC_OPERATIONN_207785.name="OperationLoansGeneralParametersForm";
this.VC_OPERATIONN_207785.colSpan=1;
this.VC_OPERATIONN_207785.columns=1;
this.VC_OPERATIONN_207785.enabled=ConstantsApi.mode.All;
this.G_OPERATIREA_304309.id="G_OPERATIREA_304309";
this.G_OPERATIREA_304309.name="GroupLayout1405";
this.G_OPERATIREA_304309.columns=1;
this.G_OPERATIREA_304309.childrenGroups = ["G_OPERATILGA_375309","G_OPERATISNM_844309","G_OPERATINPL_449309"];
this.G_OPERATIREA_304309.colSpan=1;
this.G_OPERATIREA_304309.enabled=ConstantsApi.mode.All;
this.G_OPERATIREA_304309.visible=ConstantsApi.mode.All;
this.G_OPERATILGA_375309.id="G_OPERATILGA_375309";
this.G_OPERATILGA_375309.name="Group1449";
this.G_OPERATILGA_375309.columns=3;
this.G_OPERATILGA_375309.labelOrientation="Top";
this.G_OPERATILGA_375309.colSpan=1;
this.G_OPERATILGA_375309.enabled=ConstantsApi.mode.All;
this.G_OPERATILGA_375309.visible=ConstantsApi.mode.All;
this.G_OPERATILGA_375309.attList = ["paymentMethod"];
this.G_OPERATISNM_844309.id="G_OPERATISNM_844309";
this.G_OPERATISNM_844309.name="Group1258";
this.G_OPERATISNM_844309.columns=3;
this.G_OPERATISNM_844309.labelOrientation="Top";
this.G_OPERATISNM_844309.colSpan=1;
this.G_OPERATISNM_844309.enabled=ConstantsApi.mode.All;
this.G_OPERATISNM_844309.visible=ConstantsApi.mode.All;
this.G_OPERATISNM_844309.attList = ["allowsRenewal","readjustable","restructuring","periodicity","acceptAdditionalPayment","interestPayment","payFullFee","kindPayment","cashPayments","typePayment","benefitInterestRate","benefitBaseRate"];
this.G_OPERATINPL_449309.id="G_OPERATINPL_449309";
this.G_OPERATINPL_449309.name="Group1248";
this.G_OPERATINPL_449309.columns=3;
this.G_OPERATINPL_449309.labelOrientation="Top";
this.G_OPERATINPL_449309.colSpan=1;
this.G_OPERATINPL_449309.enabled=ConstantsApi.mode.All;
this.G_OPERATINPL_449309.visible=ConstantsApi.mode.All;
this.VA_PAYMENTMETHODDD_220309.label = cobis.translate("LNSPR.LBL_LNSPR_APAGOVQRF_51833");
this.VA_PAYMENTMETHODDD_220309.blankOption=true;
this.VA_PAYMENTMETHODDD_220309.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_PAYMENTMETHODDD_220309.entity = "GeneralParametersQuery";
this.VA_PAYMENTMETHODDD_220309.attribute = "paymentMethod";
this.VA_PAYMENTMETHODDD_220309.textField = "descripcion";
this.VA_PAYMENTMETHODDD_220309.valueField = "producto";
this.VA_PAYMENTMETHODDD_220309.showId= true;
this.VA_PAYMENTMETHODDD_220309.name="paymentMethod";
this.VA_PAYMENTMETHODDD_220309.id="VA_PAYMENTMETHODDD_220309";
this.VA_PAYMENTMETHODDD_220309.colSpan=2;
this.VA_PAYMENTMETHODDD_220309.withoutLabel = false;
this.VA_PAYMENTMETHODDD_220309.readOnly = ConstantsApi.mode.Query;
this.VA_PAYMENTMETHODDD_220309.enabled = ConstantsApi.mode.All;
this.VA_PAYMENTMETHODDD_220309.visible= ConstantsApi.mode.All;
this.VA_VABUTTONOHXRHAO_106309.id = "VA_VABUTTONOHXRHAO_106309";
this.VA_VABUTTONOHXRHAO_106309.name = "VA_VABUTTONOHXRHAO_106309";
this.VA_VABUTTONOHXRHAO_106309.label = cobis.translate("LNSPR.LBL_LNSPR_ESTABLEEE_58254");
this.VA_VABUTTONOHXRHAO_106309.colSpan = 1;
this.VA_VABUTTONOHXRHAO_106309.withoutLabel = false;
this.VA_VABUTTONOHXRHAO_106309.causesValidation=false;
this.VA_VABUTTONOHXRHAO_106309.submitOnEnter=false;
this.VA_VABUTTONOHXRHAO_106309.setFocus=false;
this.VA_VABUTTONOHXRHAO_106309.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONOHXRHAO_106309.visible= ConstantsApi.mode.None;
this.VA_ALLOWSRENEWALLL_150309.id = "VA_ALLOWSRENEWALLL_150309";
this.VA_ALLOWSRENEWALLL_150309.name = "allowsRenewal";
this.VA_ALLOWSRENEWALLL_150309.attribute = "allowsRenewal";
this.VA_ALLOWSRENEWALLL_150309.label = cobis.translate("LNSPR.LBL_LOANS_PERMITEAE_24309");
this.VA_ALLOWSRENEWALLL_150309.colSpan = 1;
this.VA_ALLOWSRENEWALLL_150309.withoutLabel = false;
this.VA_ALLOWSRENEWALLL_150309.readOnly = ConstantsApi.mode.Query;
this.VA_ALLOWSRENEWALLL_150309.entity = "GeneralParametersQuery";
this.VA_ALLOWSRENEWALLL_150309.enabled = ConstantsApi.mode.All;
this.VA_ALLOWSRENEWALLL_150309.visible= ConstantsApi.mode.All;
this.VA_ALLOWSRENEWALLL_150309.textField = "value";
this.VA_ALLOWSRENEWALLL_150309.valueField = "code";
this.Spacer2788.id = "Spacer2788";
this.Spacer2788.name = "Spacer2788";
this.Spacer2788.colSpan = 1;
this.Spacer2788.visible= ConstantsApi.mode.All;
this.VA_READJUSTABLELXP_279309.id = "VA_READJUSTABLELXP_279309";
this.VA_READJUSTABLELXP_279309.name = "readjustable";
this.VA_READJUSTABLELXP_279309.attribute = "readjustable";
this.VA_READJUSTABLELXP_279309.label = cobis.translate("LNSPR.LBL_LOANS_REAJUSTBB_76643");
this.VA_READJUSTABLELXP_279309.colSpan = 1;
this.VA_READJUSTABLELXP_279309.withoutLabel = false;
this.VA_READJUSTABLELXP_279309.readOnly = ConstantsApi.mode.Query;
this.VA_READJUSTABLELXP_279309.entity = "GeneralParametersQuery";
this.VA_READJUSTABLELXP_279309.enabled = ConstantsApi.mode.All;
this.VA_READJUSTABLELXP_279309.visible= ConstantsApi.mode.All;
this.VA_READJUSTABLELXP_279309.textField = "value";
this.VA_READJUSTABLELXP_279309.valueField = "code";
this.VA_RESTRUCTURINGGG_731309.id = "VA_RESTRUCTURINGGG_731309";
this.VA_RESTRUCTURINGGG_731309.name = "restructuring";
this.VA_RESTRUCTURINGGG_731309.attribute = "restructuring";
this.VA_RESTRUCTURINGGG_731309.label = cobis.translate("LNSPR.LBL_LNSPR_PERMITERR_47180");
this.VA_RESTRUCTURINGGG_731309.colSpan = 1;
this.VA_RESTRUCTURINGGG_731309.withoutLabel = false;
this.VA_RESTRUCTURINGGG_731309.readOnly = ConstantsApi.mode.Query;
this.VA_RESTRUCTURINGGG_731309.entity = "GeneralParametersQuery";
this.VA_RESTRUCTURINGGG_731309.enabled = ConstantsApi.mode.All;
this.VA_RESTRUCTURINGGG_731309.visible= ConstantsApi.mode.All;
this.VA_RESTRUCTURINGGG_731309.textField = "value";
this.VA_RESTRUCTURINGGG_731309.valueField = "code";
this.Spacer2903.id = "Spacer2903";
this.Spacer2903.name = "Spacer2903";
this.Spacer2903.colSpan = 1;
this.Spacer2903.visible= ConstantsApi.mode.All;
this.VA_PERIODICITYEHNN_689309.label = cobis.translate("LNSPR.LBL_LNSPR_PERODOREU_60621");
this.VA_PERIODICITYEHNN_689309.entity = "GeneralParametersQuery";
this.VA_PERIODICITYEHNN_689309.attribute = "periodicity";
this.VA_PERIODICITYEHNN_689309.maxlength= 3;
this.VA_PERIODICITYEHNN_689309.textCase= TextCaseOptions.NONE;
this.VA_PERIODICITYEHNN_689309.format= "n0";
this.VA_PERIODICITYEHNN_689309.name="periodicity";
this.VA_PERIODICITYEHNN_689309.id="VA_PERIODICITYEHNN_689309";
this.VA_PERIODICITYEHNN_689309.colSpan=1;
this.VA_PERIODICITYEHNN_689309.withoutLabel = false;
this.VA_PERIODICITYEHNN_689309.readOnly = ConstantsApi.mode.Query;
this.VA_PERIODICITYEHNN_689309.enabled = ConstantsApi.mode.All;
this.VA_PERIODICITYEHNN_689309.visible= ConstantsApi.mode.All;
this.VA_ACCEPTADDITIYNN_323309.id = "VA_ACCEPTADDITIYNN_323309";
this.VA_ACCEPTADDITIYNN_323309.name = "acceptAdditionalPayment";
this.VA_ACCEPTADDITIYNN_323309.attribute = "acceptAdditionalPayment";
this.VA_ACCEPTADDITIYNN_323309.label = cobis.translate("LNSPR.LBL_LNSPR_SEACEPTPD_46652");
this.VA_ACCEPTADDITIYNN_323309.colSpan = 1;
this.VA_ACCEPTADDITIYNN_323309.withoutLabel = false;
this.VA_ACCEPTADDITIYNN_323309.readOnly = ConstantsApi.mode.Query;
this.VA_ACCEPTADDITIYNN_323309.entity = "GeneralParametersQuery";
this.VA_ACCEPTADDITIYNN_323309.enabled = ConstantsApi.mode.All;
this.VA_ACCEPTADDITIYNN_323309.visible= ConstantsApi.mode.All;
this.VA_ACCEPTADDITIYNN_323309.textField = "value";
this.VA_ACCEPTADDITIYNN_323309.valueField = "code";
this.Spacer2650.id = "Spacer2650";
this.Spacer2650.name = "Spacer2650";
this.Spacer2650.colSpan = 1;
this.Spacer2650.visible= ConstantsApi.mode.All;
this.VA_INTERESTPAYMNNE_508309.id = "VA_INTERESTPAYMNNE_508309";
this.VA_INTERESTPAYMNNE_508309.name = "interestPayment";
this.VA_INTERESTPAYMNNE_508309.attribute = "interestPayment";
this.VA_INTERESTPAYMNNE_508309.colSpan = 1;
this.VA_INTERESTPAYMNNE_508309.withoutLabel = false;
this.VA_INTERESTPAYMNNE_508309.readOnly = ConstantsApi.mode.Query;
this.VA_INTERESTPAYMNNE_508309.entity = "GeneralParametersQuery";
this.VA_INTERESTPAYMNNE_508309.enabled = ConstantsApi.mode.All;
this.VA_INTERESTPAYMNNE_508309.visible= ConstantsApi.mode.All;
this.VA_INTERESTPAYMNNE_508309.textField = "value";
this.VA_INTERESTPAYMNNE_508309.valueField = "code";
this.VA_PAYFULLFEEVHEVU_441309.id = "VA_PAYFULLFEEVHEVU_441309";
this.VA_PAYFULLFEEVHEVU_441309.name = "payFullFee";
this.VA_PAYFULLFEEVHEVU_441309.attribute = "payFullFee";
this.VA_PAYFULLFEEVHEVU_441309.label = cobis.translate("LNSPR.LBL_LNSPR_SOLOPAGPE_90120");
this.VA_PAYFULLFEEVHEVU_441309.colSpan = 1;
this.VA_PAYFULLFEEVHEVU_441309.withoutLabel = false;
this.VA_PAYFULLFEEVHEVU_441309.readOnly = ConstantsApi.mode.Query;
this.VA_PAYFULLFEEVHEVU_441309.entity = "GeneralParametersQuery";
this.VA_PAYFULLFEEVHEVU_441309.enabled = ConstantsApi.mode.All;
this.VA_PAYFULLFEEVHEVU_441309.visible= ConstantsApi.mode.All;
this.VA_PAYFULLFEEVHEVU_441309.textField = "value";
this.VA_PAYFULLFEEVHEVU_441309.valueField = "code";
this.Spacer2718.id = "Spacer2718";
this.Spacer2718.name = "Spacer2718";
this.Spacer2718.colSpan = 1;
this.Spacer2718.visible= ConstantsApi.mode.All;
this.VA_KINDPAYMENTDUCW_586309.id = "VA_KINDPAYMENTDUCW_586309";
this.VA_KINDPAYMENTDUCW_586309.name = "kindPayment";
this.VA_KINDPAYMENTDUCW_586309.attribute = "kindPayment";
this.VA_KINDPAYMENTDUCW_586309.colSpan = 1;
this.VA_KINDPAYMENTDUCW_586309.withoutLabel = false;
this.VA_KINDPAYMENTDUCW_586309.readOnly = ConstantsApi.mode.Query;
this.VA_KINDPAYMENTDUCW_586309.entity = "GeneralParametersQuery";
this.VA_KINDPAYMENTDUCW_586309.enabled = ConstantsApi.mode.All;
this.VA_KINDPAYMENTDUCW_586309.visible= ConstantsApi.mode.All;
this.VA_KINDPAYMENTDUCW_586309.textField = "value";
this.VA_KINDPAYMENTDUCW_586309.valueField = "code";
this.VA_CASHPAYMENTSUUG_169309.id = "VA_CASHPAYMENTSUUG_169309";
this.VA_CASHPAYMENTSUUG_169309.name = "cashPayments";
this.VA_CASHPAYMENTSUUG_169309.attribute = "cashPayments";
this.VA_CASHPAYMENTSUUG_169309.label = cobis.translate("LNSPR.LBL_LNSPR_PERMITEGA_17261");
this.VA_CASHPAYMENTSUUG_169309.colSpan = 1;
this.VA_CASHPAYMENTSUUG_169309.withoutLabel = false;
this.VA_CASHPAYMENTSUUG_169309.readOnly = ConstantsApi.mode.Query;
this.VA_CASHPAYMENTSUUG_169309.entity = "GeneralParametersQuery";
this.VA_CASHPAYMENTSUUG_169309.enabled = ConstantsApi.mode.All;
this.VA_CASHPAYMENTSUUG_169309.visible= ConstantsApi.mode.All;
this.VA_CASHPAYMENTSUUG_169309.textField = "value";
this.VA_CASHPAYMENTSUUG_169309.valueField = "code";
this.Spacer2649.id = "Spacer2649";
this.Spacer2649.name = "Spacer2649";
this.Spacer2649.colSpan = 1;
this.Spacer2649.visible= ConstantsApi.mode.All;
this.VA_TYPEPAYMENTNPPY_513309.id = "VA_TYPEPAYMENTNPPY_513309";
this.VA_TYPEPAYMENTNPPY_513309.name = "typePayment";
this.VA_TYPEPAYMENTNPPY_513309.attribute = "typePayment";
this.VA_TYPEPAYMENTNPPY_513309.colSpan = 1;
this.VA_TYPEPAYMENTNPPY_513309.withoutLabel = false;
this.VA_TYPEPAYMENTNPPY_513309.readOnly = ConstantsApi.mode.Query;
this.VA_TYPEPAYMENTNPPY_513309.entity = "GeneralParametersQuery";
this.VA_TYPEPAYMENTNPPY_513309.enabled = ConstantsApi.mode.All;
this.VA_TYPEPAYMENTNPPY_513309.visible= ConstantsApi.mode.All;
this.VA_TYPEPAYMENTNPPY_513309.textField = "value";
this.VA_TYPEPAYMENTNPPY_513309.valueField = "code";
this.Spacer1700.id = "Spacer1700";
this.Spacer1700.name = "Spacer1700";
this.Spacer1700.colSpan = 1;
this.Spacer1700.visible= ConstantsApi.mode.All;
this.Spacer2104.id = "Spacer2104";
this.Spacer2104.name = "Spacer2104";
this.Spacer2104.colSpan = 1;
this.Spacer2104.visible= ConstantsApi.mode.All;
this.VA_4223IMHHOSVYCXY_300309.id = "VA_4223IMHHOSVYCXY_300309";
this.VA_4223IMHHOSVYCXY_300309.name = "benefitInterestRate";
this.VA_4223IMHHOSVYCXY_300309.label = cobis.translate("LNSPR.LBL_LNSPR_BENEFICSI_57450");
this.VA_4223IMHHOSVYCXY_300309.entity = "GeneralParametersQuery";
this.VA_4223IMHHOSVYCXY_300309.attribute = "benefitInterestRate";
this.VA_4223IMHHOSVYCXY_300309.colSpan = 1;
this.VA_4223IMHHOSVYCXY_300309.withoutLabel = false;
this.VA_4223IMHHOSVYCXY_300309.readOnly =ConstantsApi.mode.Query;
this.VA_4223IMHHOSVYCXY_300309.enabled = ConstantsApi.mode.All;
this.VA_4223IMHHOSVYCXY_300309.visible= ConstantsApi.mode.All;
this.VA_4223IMHHOSVYCXY_300309.trueValue ="S";
this.VA_4223IMHHOSVYCXY_300309.falseValue ="N";
this.Spacer2761.id = "Spacer2761";
this.Spacer2761.name = "Spacer2761";
this.Spacer2761.colSpan = 1;
this.Spacer2761.visible= ConstantsApi.mode.All;
this.Spacer2882.id = "Spacer2882";
this.Spacer2882.name = "Spacer2882";
this.Spacer2882.colSpan = 1;
this.Spacer2882.visible= ConstantsApi.mode.All;
this.VA_9193TCVDUUBRZAN_137309.label = cobis.translate("LNSPR.LBL_LNSPR_TASABASEC_16082");
this.VA_9193TCVDUUBRZAN_137309.entity = "GeneralParametersQuery";
this.VA_9193TCVDUUBRZAN_137309.attribute = "benefitBaseRate";
this.VA_9193TCVDUUBRZAN_137309.textField = "value";
this.VA_9193TCVDUUBRZAN_137309.valueField = "code";
this.VA_9193TCVDUUBRZAN_137309.showId= true;
this.VA_9193TCVDUUBRZAN_137309.name="benefitBaseRate";
this.VA_9193TCVDUUBRZAN_137309.id="VA_9193TCVDUUBRZAN_137309";
this.VA_9193TCVDUUBRZAN_137309.colSpan=1;
this.VA_9193TCVDUUBRZAN_137309.withoutLabel = false;
this.VA_9193TCVDUUBRZAN_137309.readOnly = ConstantsApi.mode.Query;
this.VA_9193TCVDUUBRZAN_137309.enabled = ConstantsApi.mode.All;
this.VA_9193TCVDUUBRZAN_137309.visible= ConstantsApi.mode.All;
this.Spacer1931.id = "Spacer1931";
this.Spacer1931.name = "Spacer1931";
this.Spacer1931.colSpan = 1;
this.Spacer1931.visible= ConstantsApi.mode.All;
this.VA_VABUTTONFIRPTAQ_308309.id = "VA_VABUTTONFIRPTAQ_308309";
this.VA_VABUTTONFIRPTAQ_308309.name = "VA_VABUTTONFIRPTAQ_308309";
this.VA_VABUTTONFIRPTAQ_308309.label = cobis.translate("LNSPR.LBL_LNSPR_GUARDARRI_81055");
this.VA_VABUTTONFIRPTAQ_308309.colSpan = 1;
this.VA_VABUTTONFIRPTAQ_308309.withoutLabel = false;
this.VA_VABUTTONFIRPTAQ_308309.causesValidation=false;
this.VA_VABUTTONFIRPTAQ_308309.submitOnEnter=false;
this.VA_VABUTTONFIRPTAQ_308309.setFocus=false;
this.VA_VABUTTONFIRPTAQ_308309.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONFIRPTAQ_308309.visible= ConstantsApi.mode.All;
this.T_LNSPRKEGMFGIE_785 = this.formBuilder.group({
GeneralParametersQuery: this.formBuilder.group({
paymentMethod:[{value: null, disabled: !this.VA_PAYMENTMETHODDD_220309.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PAYMENTMETHODDD_220309.validationFunctions!)],
allowsRenewal:[{value: null, disabled: !this.VA_ALLOWSRENEWALLL_150309.visible},CobisDesignerUtil.getValidationFunctions(this.VA_ALLOWSRENEWALLL_150309.validationFunctions!)],
readjustable:[{value: null, disabled: !this.VA_READJUSTABLELXP_279309.visible},CobisDesignerUtil.getValidationFunctions(this.VA_READJUSTABLELXP_279309.validationFunctions!)],
restructuring:[{value: null, disabled: !this.VA_RESTRUCTURINGGG_731309.visible},CobisDesignerUtil.getValidationFunctions(this.VA_RESTRUCTURINGGG_731309.validationFunctions!)],
periodicity:[{value: null, disabled: !this.VA_PERIODICITYEHNN_689309.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PERIODICITYEHNN_689309.validationFunctions!)],
acceptAdditionalPayment:[{value: null, disabled: !this.VA_ACCEPTADDITIYNN_323309.visible},CobisDesignerUtil.getValidationFunctions(this.VA_ACCEPTADDITIYNN_323309.validationFunctions!)],
interestPayment:[{value: null, disabled: !this.VA_INTERESTPAYMNNE_508309.visible},CobisDesignerUtil.getValidationFunctions(this.VA_INTERESTPAYMNNE_508309.validationFunctions!)],
payFullFee:[{value: null, disabled: !this.VA_PAYFULLFEEVHEVU_441309.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PAYFULLFEEVHEVU_441309.validationFunctions!)],
kindPayment:[{value: null, disabled: !this.VA_KINDPAYMENTDUCW_586309.visible},CobisDesignerUtil.getValidationFunctions(this.VA_KINDPAYMENTDUCW_586309.validationFunctions!)],
cashPayments:[{value: null, disabled: !this.VA_CASHPAYMENTSUUG_169309.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CASHPAYMENTSUUG_169309.validationFunctions!)],
typePayment:[{value: null, disabled: !this.VA_TYPEPAYMENTNPPY_513309.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TYPEPAYMENTNPPY_513309.validationFunctions!)],
benefitInterestRate:[{value: false, disabled: !this.VA_4223IMHHOSVYCXY_300309.visible},CobisDesignerUtil.getValidationFunctions(this.VA_4223IMHHOSVYCXY_300309.validationFunctions!)],
benefitBaseRate:[{value: null, disabled: !this.VA_9193TCVDUUBRZAN_137309.visible},CobisDesignerUtil.getValidationFunctions(this.VA_9193TCVDUUBRZAN_137309.validationFunctions!)],
safeTerm:[null],
termGraceCapital:[null],
avoidHolidays:[null],
equalDues:[null],
iva:[null],
extendedPaymentDate:[null],
account:[null],
paymentDay:[null],
allowsPrecancel:[null],
monthGrace:[null],
amount:[null],
typeDividend:[null],
paymentAccount:[null],
term:[null],
aggregate:[null],
graceDividend:[null],
typeFee:[null],
interest:[null],
termCapital:[null],
paymentCategory:[null],
termType:[null],
typeAmortization:[null],
tirFee:[null],
operationCode:[null],
sector:[null],
fee:[null],
amountApproved:[null],
typeLock:[null],
calculatesNetRate:[null],
fixedPayementDay:[null],
specialReadjustment:[null],
termGraceInterest:[null],
balloomFee:[null],
wayPayment:[null],
typeGrace:[null],
baseInterestCalculation:[null],
typeUnlock:[null],
valueDate:[null],
daysGraceDefault:[null],
value1:[null],
termInterest:[null],
}
),
});
}
}