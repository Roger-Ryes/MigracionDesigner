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
public T_LNSPRSHDBNXGH_268!:FormGroup;
public VC_LOANSOPETN_404268:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSOPPAE_509518 : CobisCollapsibleContainerModel = new CobisCollapsibleContainerModel();
public G_LOANSOPTET_690518_item : CobisCollapsibleItemModel = new CobisCollapsibleItemModel();
public G_LOANSOPTET_690518 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSOPTAT_344518 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSOPIEI_892518 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSOPEDA_286518_item : CobisCollapsibleItemModel = new CobisCollapsibleItemModel();
public G_LOANSOPEDA_286518 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSOPENT_770518 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_GM97_JJJ11: CobisGridModel = new CobisGridModel();
public VA_TYPEOPERATIONNN_178518: CobisDropDownListModel = new CobisDropDownListModel();
public VA_OPERATIONACVLVA_383518: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_MONEYYUNMNTCAPG_708518: CobisDropDownListModel = new CobisDropDownListModel();
public VA_SUBSEGMENTIHNRO_703518: CobisDropDownListModel = new CobisDropDownListModel();
public VA_SECTORFUBPMDRRG_875518: CobisDropDownListModel = new CobisDropDownListModel();
public VA_AMOUNTQYVZWOGGF_373518: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_AMOUNTAPPROVEDD_905518: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_STATEDJGEIHUNRY_453518: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_FINANCIALDESNIO_774518: CobisDropDownListModel = new CobisDropDownListModel();
public VA_ECONOMICACTIIVV_350518: CobisDropDownListModel = new CobisDropDownListModel();
public VA_OFFICIALWGEPOTD_393518: CobisDropDownListModel = new CobisDropDownListModel();
public VA_OFFICESTHMPCXJO_201518: CobisDropDownListModel = new CobisDropDownListModel();
public VA_CREATIONDATEPOZ_377518: CobisDateFieldModel = new CobisDateFieldModel();
public VA_EXPIRATIONDAETE_274518: CobisDateFieldModel = new CobisDateFieldModel();
public VA_FIRSTDUEDATEPFW_397518: CobisDateFieldModel = new CobisDateFieldModel();
public VA_SYNDICATEDRJKWH_210518: CobisCheckBoxModel = new CobisCheckBoxModel();
public VA_SPACER1946PMOCU_341518: CobisSpacerModel = new CobisSpacerModel();
public VA_CREDITORTYPEBLZ_645518: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_CREDITLINEDUXXM_372518: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_REGISTRATIONURR_119518: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_CONTRACTNUMBERR_842518: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_DEBTTYPEANMTYAF_618518: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_AUTHDATEMFJNOLR_674518: CobisDateFieldModel = new CobisDateFieldModel();
public VA_AUTHNUMBERVDCKC_206518: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_REPOSITIONXBXIX_294518: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_SUBFINANCINGBDK_943518: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_FINANMARKETKWUR_337518: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_FACILITYNUMBEEE_816518: CobisTextInputBoxModel = new CobisTextInputBoxModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LOANSOPETN_404268.id="VC_LOANSOPETN_404268";
this.VC_LOANSOPETN_404268.name="LoansOperationUpdate";
this.VC_LOANSOPETN_404268.colSpan=1;
this.VC_LOANSOPETN_404268.columns=1;
this.VC_LOANSOPETN_404268.enabled=ConstantsApi.mode.All;
this.G_LOANSOPPAE_509518.id="G_LOANSOPPAE_509518";
this.G_LOANSOPPAE_509518.name="LoansOperationUpdate";
this.G_LOANSOPPAE_509518.enabled=ConstantsApi.mode.All;
this.G_LOANSOPPAE_509518.controlType = ControlType.COLLAPSIBLE;
this.G_LOANSOPPAE_509518.colSpan=1;
this.G_LOANSOPPAE_509518.childrenGroups = ["G_LOANSOPTET_690518_item","G_LOANSOPEDA_286518_item"];
this.G_LOANSOPTET_690518_item.id="G_LOANSOPTET_690518_item";
this.G_LOANSOPTET_690518_item.label=cobis.translate("LNSPR.LBL_LNSPR_DATOSGEER_56428");
this.G_LOANSOPTET_690518_item.childrenGroups = ['G_LOANSOPTET_690518'];
this.G_LOANSOPTET_690518_item.colSpan=1;
this.G_LOANSOPTET_690518_item.enabled=ConstantsApi.mode.All;
this.G_LOANSOPTET_690518_item.visible=ConstantsApi.mode.All;
this.G_LOANSOPTET_690518.id="G_LOANSOPTET_690518";
this.G_LOANSOPTET_690518.name="GroupLayout1590";
this.G_LOANSOPTET_690518.columns=1;
this.G_LOANSOPTET_690518.childrenGroups = ["G_LOANSOPTAT_344518","G_LOANSOPIEI_892518"];
this.G_LOANSOPTET_690518.colSpan=1;
this.G_LOANSOPTET_690518.enabled=ConstantsApi.mode.All;
this.G_LOANSOPTET_690518.visible=ConstantsApi.mode.All;
this.G_LOANSOPTAT_344518.id="G_LOANSOPTAT_344518";
this.G_LOANSOPTAT_344518.name="Group1516";
this.G_LOANSOPTAT_344518.columns=3;
this.G_LOANSOPTAT_344518.labelOrientation="Top";
this.G_LOANSOPTAT_344518.colSpan=1;
this.G_LOANSOPTAT_344518.enabled=ConstantsApi.mode.All;
this.G_LOANSOPTAT_344518.visible=ConstantsApi.mode.All;
this.G_LOANSOPTAT_344518.attList = ["typeOperation","operation","money","subsegment","sector","amount","amountApproved","state","financialDestination","economicActivity","official","office","creationDate","expirationDate","firstDueDate","syndicated"];
this.G_LOANSOPIEI_892518.id="G_LOANSOPIEI_892518";
this.G_LOANSOPIEI_892518.name="Group2254";
this.G_LOANSOPIEI_892518.columns=3;
this.G_LOANSOPIEI_892518.labelOrientation="Top";
this.G_LOANSOPIEI_892518.colSpan=1;
this.G_LOANSOPIEI_892518.enabled=ConstantsApi.mode.All;
this.G_LOANSOPIEI_892518.visible=ConstantsApi.mode.None;
this.G_LOANSOPIEI_892518.attList = ["creditorType","creditLine","registrationNumber","contractNumber"];
this.G_LOANSOPEDA_286518_item.id="G_LOANSOPEDA_286518_item";
this.G_LOANSOPEDA_286518_item.label=cobis.translate("LNSPR.LBL_LNSPR_DATOSADCO_69155");
this.G_LOANSOPEDA_286518_item.childrenGroups = ['G_LOANSOPEDA_286518'];
this.G_LOANSOPEDA_286518_item.colSpan=1;
this.G_LOANSOPEDA_286518_item.enabled=ConstantsApi.mode.All;
this.G_LOANSOPEDA_286518_item.visible=ConstantsApi.mode.None;
this.G_LOANSOPEDA_286518.id="G_LOANSOPEDA_286518";
this.G_LOANSOPEDA_286518.name="Group1977";
this.G_LOANSOPEDA_286518.columns=3;
this.G_LOANSOPEDA_286518.labelOrientation="Top";
this.G_LOANSOPEDA_286518.colSpan=1;
this.G_LOANSOPEDA_286518.enabled=ConstantsApi.mode.All;
this.G_LOANSOPEDA_286518.visible=ConstantsApi.mode.None;
this.G_LOANSOPEDA_286518.attList = ["debtType","authDate","authNumber","formReposition","subFinancing","finanMarket","facilityNumber"];
this.G_LOANSOPENT_770518.id="G_LOANSOPENT_770518";
this.G_LOANSOPENT_770518.name="Group1100";
this.G_LOANSOPENT_770518.columns=1;
this.G_LOANSOPENT_770518.labelOrientation="Top";
this.G_LOANSOPENT_770518.colSpan=1;
this.G_LOANSOPENT_770518.enabled=ConstantsApi.mode.All;
this.G_LOANSOPENT_770518.visible=ConstantsApi.mode.All;
this.G_LOANSOPENT_770518.attList = ["codParticipants","nameParticipants","percentageParticipants","roleP","mail","amountParticipants"];
this.VA_TYPEOPERATIONNN_178518.label = cobis.translate("LNSPR.LBL_LNSPR_TIPOOPERA_56822");
this.VA_TYPEOPERATIONNN_178518.blankOption=true;
this.VA_TYPEOPERATIONNN_178518.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_TYPEOPERATIONNN_178518.entity = "OperationEntity";
this.VA_TYPEOPERATIONNN_178518.attribute = "typeOperation";
this.VA_TYPEOPERATIONNN_178518.textField = "value";
this.VA_TYPEOPERATIONNN_178518.valueField = "code";
this.VA_TYPEOPERATIONNN_178518.showId= true;
this.VA_TYPEOPERATIONNN_178518.name="typeOperation";
this.VA_TYPEOPERATIONNN_178518.id="VA_TYPEOPERATIONNN_178518";
this.VA_TYPEOPERATIONNN_178518.colSpan=2;
this.VA_TYPEOPERATIONNN_178518.withoutLabel = false;
this.VA_TYPEOPERATIONNN_178518.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_TYPEOPERATIONNN_178518.enabled = ConstantsApi.mode.All;
this.VA_TYPEOPERATIONNN_178518.visible= ConstantsApi.mode.All;
this.VA_OPERATIONACVLVA_383518.label = cobis.translate("LNSPR.LBL_LOANS_NROOPERIN_32746");
this.VA_OPERATIONACVLVA_383518.entity = "OperationEntity";
this.VA_OPERATIONACVLVA_383518.attribute = "operation";
this.VA_OPERATIONACVLVA_383518.textCase= TextCaseOptions.NONE;
this.VA_OPERATIONACVLVA_383518.name="operation";
this.VA_OPERATIONACVLVA_383518.id="VA_OPERATIONACVLVA_383518";
this.VA_OPERATIONACVLVA_383518.colSpan=1;
this.VA_OPERATIONACVLVA_383518.withoutLabel = false;
this.VA_OPERATIONACVLVA_383518.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_OPERATIONACVLVA_383518.enabled = ConstantsApi.mode.All;
this.VA_OPERATIONACVLVA_383518.visible= ConstantsApi.mode.All;
this.VA_MONEYYUNMNTCAPG_708518.label = cobis.translate("LNSPR.LBL_LNSPR_MONEDAFCA_83005");
this.VA_MONEYYUNMNTCAPG_708518.blankOption=true;
this.VA_MONEYYUNMNTCAPG_708518.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_MONEYYUNMNTCAPG_708518.entity = "OperationEntity";
this.VA_MONEYYUNMNTCAPG_708518.attribute = "money";
this.VA_MONEYYUNMNTCAPG_708518.textField = "value";
this.VA_MONEYYUNMNTCAPG_708518.valueField = "code";
this.VA_MONEYYUNMNTCAPG_708518.showId= true;
this.VA_MONEYYUNMNTCAPG_708518.name="money";
this.VA_MONEYYUNMNTCAPG_708518.id="VA_MONEYYUNMNTCAPG_708518";
this.VA_MONEYYUNMNTCAPG_708518.colSpan=1;
this.VA_MONEYYUNMNTCAPG_708518.withoutLabel = false;
this.VA_MONEYYUNMNTCAPG_708518.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_MONEYYUNMNTCAPG_708518.enabled = ConstantsApi.mode.All;
this.VA_MONEYYUNMNTCAPG_708518.visible= ConstantsApi.mode.All;
this.VA_SUBSEGMENTIHNRO_703518.label = cobis.translate("LNSPR.LBL_LOANS_SUBSEGMEN_82660");
this.VA_SUBSEGMENTIHNRO_703518.blankOption=true;
this.VA_SUBSEGMENTIHNRO_703518.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_SUBSEGMENTIHNRO_703518.entity = "OperationEntity";
this.VA_SUBSEGMENTIHNRO_703518.attribute = "subsegment";
this.VA_SUBSEGMENTIHNRO_703518.textField = "value";
this.VA_SUBSEGMENTIHNRO_703518.valueField = "code";
this.VA_SUBSEGMENTIHNRO_703518.showId= true;
this.VA_SUBSEGMENTIHNRO_703518.name="subsegment";
this.VA_SUBSEGMENTIHNRO_703518.id="VA_SUBSEGMENTIHNRO_703518";
this.VA_SUBSEGMENTIHNRO_703518.colSpan=1;
this.VA_SUBSEGMENTIHNRO_703518.withoutLabel = false;
this.VA_SUBSEGMENTIHNRO_703518.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_SUBSEGMENTIHNRO_703518.enabled = ConstantsApi.mode.All;
this.VA_SUBSEGMENTIHNRO_703518.visible= ConstantsApi.mode.None;
this.VA_SECTORFUBPMDRRG_875518.label = cobis.translate("LNSPR.LBL_LOANS_SECTORQEZ_42002");
this.VA_SECTORFUBPMDRRG_875518.blankOption=true;
this.VA_SECTORFUBPMDRRG_875518.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_SECTORFUBPMDRRG_875518.entity = "OperationEntity";
this.VA_SECTORFUBPMDRRG_875518.attribute = "sector";
this.VA_SECTORFUBPMDRRG_875518.textField = "value";
this.VA_SECTORFUBPMDRRG_875518.valueField = "code";
this.VA_SECTORFUBPMDRRG_875518.showId= true;
this.VA_SECTORFUBPMDRRG_875518.name="sector";
this.VA_SECTORFUBPMDRRG_875518.id="VA_SECTORFUBPMDRRG_875518";
this.VA_SECTORFUBPMDRRG_875518.colSpan=1;
this.VA_SECTORFUBPMDRRG_875518.withoutLabel = false;
this.VA_SECTORFUBPMDRRG_875518.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_SECTORFUBPMDRRG_875518.enabled = ConstantsApi.mode.All;
this.VA_SECTORFUBPMDRRG_875518.visible= ConstantsApi.mode.All;
this.VA_AMOUNTQYVZWOGGF_373518.label = cobis.translate("LNSPR.LBL_LNSPR_MONTOEMFX_52083");
this.VA_AMOUNTQYVZWOGGF_373518.entity = "OperationEntity";
this.VA_AMOUNTQYVZWOGGF_373518.attribute = "amount";
this.VA_AMOUNTQYVZWOGGF_373518.maxlength= 15;
this.VA_AMOUNTQYVZWOGGF_373518.textCase= TextCaseOptions.NONE;
this.VA_AMOUNTQYVZWOGGF_373518.format= "c";
this.VA_AMOUNTQYVZWOGGF_373518.name="amount";
this.VA_AMOUNTQYVZWOGGF_373518.id="VA_AMOUNTQYVZWOGGF_373518";
this.VA_AMOUNTQYVZWOGGF_373518.colSpan=1;
this.VA_AMOUNTQYVZWOGGF_373518.withoutLabel = false;
this.VA_AMOUNTQYVZWOGGF_373518.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_AMOUNTQYVZWOGGF_373518.enabled = ConstantsApi.mode.All;
this.VA_AMOUNTQYVZWOGGF_373518.visible= ConstantsApi.mode.All;
this.VA_AMOUNTAPPROVEDD_905518.label = cobis.translate("LNSPR.LBL_LOANS_MONTOAPAR_32732");
this.VA_AMOUNTAPPROVEDD_905518.entity = "OperationEntity";
this.VA_AMOUNTAPPROVEDD_905518.attribute = "amountApproved";
this.VA_AMOUNTAPPROVEDD_905518.maxlength= 15;
this.VA_AMOUNTAPPROVEDD_905518.textCase= TextCaseOptions.NONE;
this.VA_AMOUNTAPPROVEDD_905518.format= "c";
this.VA_AMOUNTAPPROVEDD_905518.name="amountApproved";
this.VA_AMOUNTAPPROVEDD_905518.id="VA_AMOUNTAPPROVEDD_905518";
this.VA_AMOUNTAPPROVEDD_905518.colSpan=1;
this.VA_AMOUNTAPPROVEDD_905518.withoutLabel = false;
this.VA_AMOUNTAPPROVEDD_905518.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_AMOUNTAPPROVEDD_905518.enabled = ConstantsApi.mode.All;
this.VA_AMOUNTAPPROVEDD_905518.visible= ConstantsApi.mode.All;
this.VA_STATEDJGEIHUNRY_453518.label = cobis.translate("LNSPR.LBL_LNSPR_ESTADOEAI_33340");
this.VA_STATEDJGEIHUNRY_453518.entity = "OperationEntity";
this.VA_STATEDJGEIHUNRY_453518.attribute = "state";
this.VA_STATEDJGEIHUNRY_453518.textCase= TextCaseOptions.NONE;
this.VA_STATEDJGEIHUNRY_453518.name="state";
this.VA_STATEDJGEIHUNRY_453518.id="VA_STATEDJGEIHUNRY_453518";
this.VA_STATEDJGEIHUNRY_453518.colSpan=1;
this.VA_STATEDJGEIHUNRY_453518.withoutLabel = false;
this.VA_STATEDJGEIHUNRY_453518.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_STATEDJGEIHUNRY_453518.enabled = ConstantsApi.mode.All;
this.VA_STATEDJGEIHUNRY_453518.visible= ConstantsApi.mode.All;
this.VA_FINANCIALDESNIO_774518.label = cobis.translate("LNSPR.LBL_LNSPR_DESTINOFC_88919");
this.VA_FINANCIALDESNIO_774518.blankOption=true;
this.VA_FINANCIALDESNIO_774518.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_FINANCIALDESNIO_774518.entity = "OperationEntity";
this.VA_FINANCIALDESNIO_774518.attribute = "financialDestination";
this.VA_FINANCIALDESNIO_774518.textField = "value";
this.VA_FINANCIALDESNIO_774518.valueField = "code";
this.VA_FINANCIALDESNIO_774518.showId= true;
this.VA_FINANCIALDESNIO_774518.name="financialDestination";
this.VA_FINANCIALDESNIO_774518.id="VA_FINANCIALDESNIO_774518";
this.VA_FINANCIALDESNIO_774518.colSpan=1;
this.VA_FINANCIALDESNIO_774518.withoutLabel = false;
this.VA_FINANCIALDESNIO_774518.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_FINANCIALDESNIO_774518.enabled = ConstantsApi.mode.All;
this.VA_FINANCIALDESNIO_774518.visible= ConstantsApi.mode.All;
this.VA_ECONOMICACTIIVV_350518.label = cobis.translate("LNSPR.LBL_LNSPR_DESTINONN_50314");
this.VA_ECONOMICACTIIVV_350518.blankOption=true;
this.VA_ECONOMICACTIIVV_350518.entity = "OperationEntity";
this.VA_ECONOMICACTIIVV_350518.attribute = "economicActivity";
this.VA_ECONOMICACTIIVV_350518.textField = "value";
this.VA_ECONOMICACTIIVV_350518.valueField = "code";
this.VA_ECONOMICACTIIVV_350518.filterMinChars= 1;
this.VA_ECONOMICACTIIVV_350518.showId= true;
this.VA_ECONOMICACTIIVV_350518.name="economicActivity";
this.VA_ECONOMICACTIIVV_350518.id="VA_ECONOMICACTIIVV_350518";
this.VA_ECONOMICACTIIVV_350518.colSpan=1;
this.VA_ECONOMICACTIIVV_350518.withoutLabel = false;
this.VA_ECONOMICACTIIVV_350518.readOnly = ConstantsApi.mode.Query;
this.VA_ECONOMICACTIIVV_350518.enabled = ConstantsApi.mode.None;
this.VA_ECONOMICACTIIVV_350518.visible= ConstantsApi.mode.All;
this.VA_OFFICIALWGEPOTD_393518.label = cobis.translate("LNSPR.LBL_LNSPR_OFICIALCI_17854");
this.VA_OFFICIALWGEPOTD_393518.entity = "OperationEntity";
this.VA_OFFICIALWGEPOTD_393518.attribute = "official";
this.VA_OFFICIALWGEPOTD_393518.textField = "value";
this.VA_OFFICIALWGEPOTD_393518.valueField = "code";
this.VA_OFFICIALWGEPOTD_393518.showId= true;
this.VA_OFFICIALWGEPOTD_393518.name="official";
this.VA_OFFICIALWGEPOTD_393518.id="VA_OFFICIALWGEPOTD_393518";
this.VA_OFFICIALWGEPOTD_393518.colSpan=1;
this.VA_OFFICIALWGEPOTD_393518.withoutLabel = false;
this.VA_OFFICIALWGEPOTD_393518.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_OFFICIALWGEPOTD_393518.enabled = ConstantsApi.mode.None;
this.VA_OFFICIALWGEPOTD_393518.visible= ConstantsApi.mode.All;
this.VA_OFFICESTHMPCXJO_201518.label = cobis.translate("LNSPR.LBL_LNSPR_OFICINAGV_33565");
this.VA_OFFICESTHMPCXJO_201518.blankOption=true;
this.VA_OFFICESTHMPCXJO_201518.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_OFFICESTHMPCXJO_201518.entity = "OperationEntity";
this.VA_OFFICESTHMPCXJO_201518.attribute = "office";
this.VA_OFFICESTHMPCXJO_201518.textField = "value";
this.VA_OFFICESTHMPCXJO_201518.valueField = "code";
this.VA_OFFICESTHMPCXJO_201518.showId= true;
this.VA_OFFICESTHMPCXJO_201518.name="office";
this.VA_OFFICESTHMPCXJO_201518.id="VA_OFFICESTHMPCXJO_201518";
this.VA_OFFICESTHMPCXJO_201518.colSpan=2;
this.VA_OFFICESTHMPCXJO_201518.withoutLabel = false;
this.VA_OFFICESTHMPCXJO_201518.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_OFFICESTHMPCXJO_201518.enabled = ConstantsApi.mode.All;
this.VA_OFFICESTHMPCXJO_201518.visible= ConstantsApi.mode.All;
this.VA_CREATIONDATEPOZ_377518.label = cobis.translate("LNSPR.LBL_LNSPR_FECHACRNI_60847");
this.VA_CREATIONDATEPOZ_377518.entity = "OperationEntity";
this.VA_CREATIONDATEPOZ_377518.attribute = "creationDate";
this.VA_CREATIONDATEPOZ_377518.name="creationDate";
this.VA_CREATIONDATEPOZ_377518.id="VA_CREATIONDATEPOZ_377518";
this.VA_CREATIONDATEPOZ_377518.colSpan=1;
this.VA_CREATIONDATEPOZ_377518.withoutLabel = false;
this.VA_CREATIONDATEPOZ_377518.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_CREATIONDATEPOZ_377518.enabled = ConstantsApi.mode.All;
this.VA_CREATIONDATEPOZ_377518.visible= ConstantsApi.mode.All;
this.VA_EXPIRATIONDAETE_274518.label = cobis.translate("LNSPR.LBL_LNSPR_FECHAVENE_58948");
this.VA_EXPIRATIONDAETE_274518.entity = "OperationEntity";
this.VA_EXPIRATIONDAETE_274518.attribute = "expirationDate";
this.VA_EXPIRATIONDAETE_274518.name="expirationDate";
this.VA_EXPIRATIONDAETE_274518.id="VA_EXPIRATIONDAETE_274518";
this.VA_EXPIRATIONDAETE_274518.colSpan=1;
this.VA_EXPIRATIONDAETE_274518.withoutLabel = false;
this.VA_EXPIRATIONDAETE_274518.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_EXPIRATIONDAETE_274518.enabled = ConstantsApi.mode.All;
this.VA_EXPIRATIONDAETE_274518.visible= ConstantsApi.mode.All;
this.VA_FIRSTDUEDATEPFW_397518.label = cobis.translate("LNSPR.LBL_LNSPR_FECHA1ENI_10027");
this.VA_FIRSTDUEDATEPFW_397518.entity = "OperationEntity";
this.VA_FIRSTDUEDATEPFW_397518.attribute = "firstDueDate";
this.VA_FIRSTDUEDATEPFW_397518.name="firstDueDate";
this.VA_FIRSTDUEDATEPFW_397518.id="VA_FIRSTDUEDATEPFW_397518";
this.VA_FIRSTDUEDATEPFW_397518.colSpan=1;
this.VA_FIRSTDUEDATEPFW_397518.withoutLabel = false;
this.VA_FIRSTDUEDATEPFW_397518.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_FIRSTDUEDATEPFW_397518.enabled = ConstantsApi.mode.All;
this.VA_FIRSTDUEDATEPFW_397518.visible= ConstantsApi.mode.All;
this.VA_SYNDICATEDRJKWH_210518.id = "VA_SYNDICATEDRJKWH_210518";
this.VA_SYNDICATEDRJKWH_210518.name = "syndicated";
this.VA_SYNDICATEDRJKWH_210518.label = cobis.translate("LNSPR.LBL_LNSPR_SINDICADO_26170");
this.VA_SYNDICATEDRJKWH_210518.entity = "OperationEntity";
this.VA_SYNDICATEDRJKWH_210518.attribute = "syndicated";
this.VA_SYNDICATEDRJKWH_210518.colSpan = 1;
this.VA_SYNDICATEDRJKWH_210518.withoutLabel = false;
this.VA_SYNDICATEDRJKWH_210518.readOnly =ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_SYNDICATEDRJKWH_210518.enabled = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_SYNDICATEDRJKWH_210518.visible= ConstantsApi.mode.All;
this.VA_SPACER1946PMOCU_341518.id = "VA_SPACER1946PMOCU_341518";
this.VA_SPACER1946PMOCU_341518.name = "Spacer1946";
this.VA_SPACER1946PMOCU_341518.colSpan = 1;
this.VA_SPACER1946PMOCU_341518.visible= ConstantsApi.mode.All;
this.VA_CREDITORTYPEBLZ_645518.label = cobis.translate("LNSPR.LBL_LNSPR_TIPOACRER_55798");
this.VA_CREDITORTYPEBLZ_645518.entity = "OperationEntity";
this.VA_CREDITORTYPEBLZ_645518.attribute = "creditorType";
this.VA_CREDITORTYPEBLZ_645518.textCase= TextCaseOptions.NONE;
this.VA_CREDITORTYPEBLZ_645518.name="creditorType";
this.VA_CREDITORTYPEBLZ_645518.id="VA_CREDITORTYPEBLZ_645518";
this.VA_CREDITORTYPEBLZ_645518.colSpan=1;
this.VA_CREDITORTYPEBLZ_645518.withoutLabel = false;
this.VA_CREDITORTYPEBLZ_645518.readOnly = ConstantsApi.mode.Query;
this.VA_CREDITORTYPEBLZ_645518.enabled = ConstantsApi.mode.All;
this.VA_CREDITORTYPEBLZ_645518.visible= ConstantsApi.mode.All;
this.VA_CREDITLINEDUXXM_372518.label = cobis.translate("LNSPR.LBL_LNSPR_LINEAFIEN_44317");
this.VA_CREDITLINEDUXXM_372518.entity = "OperationEntity";
this.VA_CREDITLINEDUXXM_372518.attribute = "creditLine";
this.VA_CREDITLINEDUXXM_372518.maxlength= 24;
this.VA_CREDITLINEDUXXM_372518.textCase= TextCaseOptions.NONE;
this.VA_CREDITLINEDUXXM_372518.name="creditLine";
this.VA_CREDITLINEDUXXM_372518.id="VA_CREDITLINEDUXXM_372518";
this.VA_CREDITLINEDUXXM_372518.colSpan=1;
this.VA_CREDITLINEDUXXM_372518.withoutLabel = false;
this.VA_CREDITLINEDUXXM_372518.readOnly = ConstantsApi.mode.Query;
this.VA_CREDITLINEDUXXM_372518.enabled = ConstantsApi.mode.All;
this.VA_CREDITLINEDUXXM_372518.visible= ConstantsApi.mode.All;
this.VA_REGISTRATIONURR_119518.label = cobis.translate("LNSPR.LBL_LNSPR_NOREGISRT_17780");
this.VA_REGISTRATIONURR_119518.entity = "OperationEntity";
this.VA_REGISTRATIONURR_119518.attribute = "registrationNumber";
this.VA_REGISTRATIONURR_119518.textCase= TextCaseOptions.NONE;
this.VA_REGISTRATIONURR_119518.name="registrationNumber";
this.VA_REGISTRATIONURR_119518.id="VA_REGISTRATIONURR_119518";
this.VA_REGISTRATIONURR_119518.colSpan=1;
this.VA_REGISTRATIONURR_119518.withoutLabel = false;
this.VA_REGISTRATIONURR_119518.readOnly = ConstantsApi.mode.Query;
this.VA_REGISTRATIONURR_119518.enabled = ConstantsApi.mode.All;
this.VA_REGISTRATIONURR_119518.visible= ConstantsApi.mode.All;
this.VA_CONTRACTNUMBERR_842518.label = cobis.translate("LNSPR.LBL_LNSPR_NMEROCONN_68981");
this.VA_CONTRACTNUMBERR_842518.entity = "OperationEntity";
this.VA_CONTRACTNUMBERR_842518.attribute = "contractNumber";
this.VA_CONTRACTNUMBERR_842518.textCase= TextCaseOptions.NONE;
this.VA_CONTRACTNUMBERR_842518.name="contractNumber";
this.VA_CONTRACTNUMBERR_842518.id="VA_CONTRACTNUMBERR_842518";
this.VA_CONTRACTNUMBERR_842518.colSpan=1;
this.VA_CONTRACTNUMBERR_842518.withoutLabel = false;
this.VA_CONTRACTNUMBERR_842518.readOnly = ConstantsApi.mode.Query;
this.VA_CONTRACTNUMBERR_842518.enabled = ConstantsApi.mode.All;
this.VA_CONTRACTNUMBERR_842518.visible= ConstantsApi.mode.All;
this.VA_DEBTTYPEANMTYAF_618518.label = cobis.translate("LNSPR.LBL_LNSPR_TIPODEUAA_52427");
this.VA_DEBTTYPEANMTYAF_618518.entity = "OperationEntity";
this.VA_DEBTTYPEANMTYAF_618518.attribute = "debtType";
this.VA_DEBTTYPEANMTYAF_618518.textCase= TextCaseOptions.NONE;
this.VA_DEBTTYPEANMTYAF_618518.name="debtType";
this.VA_DEBTTYPEANMTYAF_618518.id="VA_DEBTTYPEANMTYAF_618518";
this.VA_DEBTTYPEANMTYAF_618518.colSpan=1;
this.VA_DEBTTYPEANMTYAF_618518.withoutLabel = false;
this.VA_DEBTTYPEANMTYAF_618518.readOnly = ConstantsApi.mode.Query;
this.VA_DEBTTYPEANMTYAF_618518.enabled = ConstantsApi.mode.All;
this.VA_DEBTTYPEANMTYAF_618518.visible= ConstantsApi.mode.All;
this.VA_AUTHDATEMFJNOLR_674518.label = cobis.translate("LNSPR.LBL_LNSPR_FECHAAUZN_27676");
this.VA_AUTHDATEMFJNOLR_674518.entity = "OperationEntity";
this.VA_AUTHDATEMFJNOLR_674518.attribute = "authDate";
this.VA_AUTHDATEMFJNOLR_674518.name="authDate";
this.VA_AUTHDATEMFJNOLR_674518.id="VA_AUTHDATEMFJNOLR_674518";
this.VA_AUTHDATEMFJNOLR_674518.colSpan=1;
this.VA_AUTHDATEMFJNOLR_674518.withoutLabel = false;
this.VA_AUTHDATEMFJNOLR_674518.readOnly = ConstantsApi.mode.Query;
this.VA_AUTHDATEMFJNOLR_674518.enabled = ConstantsApi.mode.All;
this.VA_AUTHDATEMFJNOLR_674518.visible= ConstantsApi.mode.All;
this.VA_AUTHNUMBERVDCKC_206518.label = cobis.translate("LNSPR.LBL_LNSPR_NOAUTORIN_87158");
this.VA_AUTHNUMBERVDCKC_206518.entity = "OperationEntity";
this.VA_AUTHNUMBERVDCKC_206518.attribute = "authNumber";
this.VA_AUTHNUMBERVDCKC_206518.textCase= TextCaseOptions.NONE;
this.VA_AUTHNUMBERVDCKC_206518.name="authNumber";
this.VA_AUTHNUMBERVDCKC_206518.id="VA_AUTHNUMBERVDCKC_206518";
this.VA_AUTHNUMBERVDCKC_206518.colSpan=1;
this.VA_AUTHNUMBERVDCKC_206518.withoutLabel = false;
this.VA_AUTHNUMBERVDCKC_206518.readOnly = ConstantsApi.mode.Query;
this.VA_AUTHNUMBERVDCKC_206518.enabled = ConstantsApi.mode.All;
this.VA_AUTHNUMBERVDCKC_206518.visible= ConstantsApi.mode.All;
this.VA_REPOSITIONXBXIX_294518.label = cobis.translate("LNSPR.LBL_LNSPR_AREPOSINN_21211");
this.VA_REPOSITIONXBXIX_294518.entity = "OperationEntity";
this.VA_REPOSITIONXBXIX_294518.attribute = "formReposition";
this.VA_REPOSITIONXBXIX_294518.textCase= TextCaseOptions.NONE;
this.VA_REPOSITIONXBXIX_294518.name="formReposition";
this.VA_REPOSITIONXBXIX_294518.id="VA_REPOSITIONXBXIX_294518";
this.VA_REPOSITIONXBXIX_294518.colSpan=1;
this.VA_REPOSITIONXBXIX_294518.withoutLabel = false;
this.VA_REPOSITIONXBXIX_294518.readOnly = ConstantsApi.mode.Query;
this.VA_REPOSITIONXBXIX_294518.enabled = ConstantsApi.mode.All;
this.VA_REPOSITIONXBXIX_294518.visible= ConstantsApi.mode.All;
this.VA_SUBFINANCINGBDK_943518.label = cobis.translate("LNSPR.LBL_LNSPR_CAUSAFIBO_36044");
this.VA_SUBFINANCINGBDK_943518.entity = "OperationEntity";
this.VA_SUBFINANCINGBDK_943518.attribute = "subFinancing";
this.VA_SUBFINANCINGBDK_943518.textCase= TextCaseOptions.NONE;
this.VA_SUBFINANCINGBDK_943518.name="subFinancing";
this.VA_SUBFINANCINGBDK_943518.id="VA_SUBFINANCINGBDK_943518";
this.VA_SUBFINANCINGBDK_943518.colSpan=1;
this.VA_SUBFINANCINGBDK_943518.withoutLabel = false;
this.VA_SUBFINANCINGBDK_943518.readOnly = ConstantsApi.mode.Query;
this.VA_SUBFINANCINGBDK_943518.enabled = ConstantsApi.mode.All;
this.VA_SUBFINANCINGBDK_943518.visible= ConstantsApi.mode.All;
this.VA_FINANMARKETKWUR_337518.label = cobis.translate("LNSPR.LBL_LNSPR_MERCADOOV_74755");
this.VA_FINANMARKETKWUR_337518.entity = "OperationEntity";
this.VA_FINANMARKETKWUR_337518.attribute = "finanMarket";
this.VA_FINANMARKETKWUR_337518.textCase= TextCaseOptions.NONE;
this.VA_FINANMARKETKWUR_337518.name="finanMarket";
this.VA_FINANMARKETKWUR_337518.id="VA_FINANMARKETKWUR_337518";
this.VA_FINANMARKETKWUR_337518.colSpan=1;
this.VA_FINANMARKETKWUR_337518.withoutLabel = false;
this.VA_FINANMARKETKWUR_337518.readOnly = ConstantsApi.mode.Query;
this.VA_FINANMARKETKWUR_337518.enabled = ConstantsApi.mode.All;
this.VA_FINANMARKETKWUR_337518.visible= ConstantsApi.mode.All;
this.VA_FACILITYNUMBEEE_816518.label = cobis.translate("LNSPR.LBL_LNSPR_FACILITMB_28174");
this.VA_FACILITYNUMBEEE_816518.entity = "OperationEntity";
this.VA_FACILITYNUMBEEE_816518.attribute = "facilityNumber";
this.VA_FACILITYNUMBEEE_816518.textCase= TextCaseOptions.NONE;
this.VA_FACILITYNUMBEEE_816518.name="facilityNumber";
this.VA_FACILITYNUMBEEE_816518.id="VA_FACILITYNUMBEEE_816518";
this.VA_FACILITYNUMBEEE_816518.colSpan=1;
this.VA_FACILITYNUMBEEE_816518.withoutLabel = false;
this.VA_FACILITYNUMBEEE_816518.readOnly = ConstantsApi.mode.Query;
this.VA_FACILITYNUMBEEE_816518.enabled = ConstantsApi.mode.All;
this.VA_FACILITYNUMBEEE_816518.visible= ConstantsApi.mode.All;
this.QV_GM97_JJJ11.id='QV_GM97_JJJ11';
this.QV_GM97_JJJ11.name='QV_GM97_JJJ11';
this.QV_GM97_JJJ11.pageable=false;
this.QV_GM97_JJJ11.sortable=false;
this.QV_GM97_JJJ11.resizable=false;
this.QV_GM97_JJJ11.scrollable=false
this.QV_GM97_JJJ11.confirmRowDeletion=false;
this.QV_GM97_JJJ11.exportToExcel=false;
this.QV_GM97_JJJ11.exportToPdf=false;
this.QV_GM97_JJJ11.height=0;
this.QV_GM97_JJJ11.filterableColumns=false;
this.QV_GM97_JJJ11.entityName='SyndicatedList';
this.QV_GM97_JJJ11.appendRecords=false;
this.QV_GM97_JJJ11.rowDetail=false;
this.QV_GM97_JJJ11.columnMenu = true;
this.QV_GM97_JJJ11.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_GM97_JJJ11.modeSelection=ComplexConstants.GRID_MODE_SELECTION_NONE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_GM97_JJJ11.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXHVY_271518",
label : cobis.translate('LNSPR.LBL_LNSPR_CODPARTPN_76216'),
field : 'codParticipants',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXHVY_271518',
name :'codParticipants',
withoutLabel : true,
attribute : 'codParticipants',
entity : 'SyndicatedList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXKXI_794518",
label : cobis.translate('LNSPR.LBL_LOANS_NOMBRETPH_86356'),
field : 'nameParticipants',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXKXI_794518',
name :'nameParticipants',
withoutLabel : true,
attribute : 'nameParticipants',
entity : 'SyndicatedList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXCTZ_403518",
label : cobis.translate('LNSPR.LBL_LNSPR_PARTGBUSR_65411'),
field : 'percentageParticipants',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXCTZ_403518',
name :'percentageParticipants',
withoutLabel : true,
attribute : 'percentageParticipants',
entity : 'SyndicatedList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXNKA_174518",
label : cobis.translate('LNSPR.LBL_LOANS_ROLNDGMQN_51274'),
field : 'roleP',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXNKA_174518',
name :'roleP',
withoutLabel : true,
attribute : 'roleP',
entity : 'SyndicatedList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXPKT_357518",
label : cobis.translate('LNSPR.LBL_LNSPR_CORREOHMW_60459'),
field : 'mail',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXPKT_357518',
name :'mail',
withoutLabel : true,
attribute : 'mail',
entity : 'SyndicatedList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXKNN_414518",
label : cobis.translate('LNSPR.LBL_LNSPR_MONTOPATT_30192'),
field : 'amountParticipants',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXKNN_414518',
name :'amountParticipants',
withoutLabel : true,
attribute : 'amountParticipants',
entity : 'SyndicatedList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_LNSPRSHDBNXGH_268 = this.formBuilder.group({
OperationEntity: this.formBuilder.group({
typeOperation:[{value: null, disabled: !this.VA_TYPEOPERATIONNN_178518.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TYPEOPERATIONNN_178518.validationFunctions!)],
operation:[{value: null, disabled: !this.VA_OPERATIONACVLVA_383518.visible},CobisDesignerUtil.getValidationFunctions(this.VA_OPERATIONACVLVA_383518.validationFunctions!)],
money:[{value: null, disabled: !this.VA_MONEYYUNMNTCAPG_708518.visible},CobisDesignerUtil.getValidationFunctions(this.VA_MONEYYUNMNTCAPG_708518.validationFunctions!)],
subsegment:[{value: null, disabled: !this.VA_SUBSEGMENTIHNRO_703518.visible},CobisDesignerUtil.getValidationFunctions(this.VA_SUBSEGMENTIHNRO_703518.validationFunctions!)],
sector:[{value: null, disabled: !this.VA_SECTORFUBPMDRRG_875518.visible},CobisDesignerUtil.getValidationFunctions(this.VA_SECTORFUBPMDRRG_875518.validationFunctions!)],
amount:[{value: null, disabled: !this.VA_AMOUNTQYVZWOGGF_373518.visible},CobisDesignerUtil.getValidationFunctions(this.VA_AMOUNTQYVZWOGGF_373518.validationFunctions!)],
amountApproved:[{value: null, disabled: !this.VA_AMOUNTAPPROVEDD_905518.visible},CobisDesignerUtil.getValidationFunctions(this.VA_AMOUNTAPPROVEDD_905518.validationFunctions!)],
state:[{value: null, disabled: !this.VA_STATEDJGEIHUNRY_453518.visible},CobisDesignerUtil.getValidationFunctions(this.VA_STATEDJGEIHUNRY_453518.validationFunctions!)],
financialDestination:[{value: null, disabled: !this.VA_FINANCIALDESNIO_774518.visible},CobisDesignerUtil.getValidationFunctions(this.VA_FINANCIALDESNIO_774518.validationFunctions!)],
economicActivity:[{value: null, disabled: !this.VA_ECONOMICACTIIVV_350518.visible},CobisDesignerUtil.getValidationFunctions(this.VA_ECONOMICACTIIVV_350518.validationFunctions!)],
official:[{value: null, disabled: !this.VA_OFFICIALWGEPOTD_393518.visible},CobisDesignerUtil.getValidationFunctions(this.VA_OFFICIALWGEPOTD_393518.validationFunctions!)],
office:[{value: null, disabled: !this.VA_OFFICESTHMPCXJO_201518.visible},CobisDesignerUtil.getValidationFunctions(this.VA_OFFICESTHMPCXJO_201518.validationFunctions!)],
creationDate:[{value: null, disabled: !this.VA_CREATIONDATEPOZ_377518.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CREATIONDATEPOZ_377518.validationFunctions!)],
expirationDate:[{value: null, disabled: !this.VA_EXPIRATIONDAETE_274518.visible},CobisDesignerUtil.getValidationFunctions(this.VA_EXPIRATIONDAETE_274518.validationFunctions!)],
firstDueDate:[{value: null, disabled: !this.VA_FIRSTDUEDATEPFW_397518.visible},CobisDesignerUtil.getValidationFunctions(this.VA_FIRSTDUEDATEPFW_397518.validationFunctions!)],
syndicated:[{value: false, disabled: !this.VA_SYNDICATEDRJKWH_210518.visible},CobisDesignerUtil.getValidationFunctions(this.VA_SYNDICATEDRJKWH_210518.validationFunctions!)],
creditorType:[{value: null, disabled: !this.VA_CREDITORTYPEBLZ_645518.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CREDITORTYPEBLZ_645518.validationFunctions!)],
creditLine:[{value: null, disabled: !this.VA_CREDITLINEDUXXM_372518.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CREDITLINEDUXXM_372518.validationFunctions!)],
registrationNumber:[{value: null, disabled: !this.VA_REGISTRATIONURR_119518.visible},CobisDesignerUtil.getValidationFunctions(this.VA_REGISTRATIONURR_119518.validationFunctions!)],
contractNumber:[{value: null, disabled: !this.VA_CONTRACTNUMBERR_842518.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CONTRACTNUMBERR_842518.validationFunctions!)],
field40:[null],
participantS:[null],
checkIRRtypeOperationValue:[null],
authNumber:[null],
mortageDescription:[null],
anchored:[null],
economicSector:[null],
previousInternalRateOfReturn:[null],
subFinancing:[null],
visibleInternalRateOfReturn:[null],
facilityNumber:[null],
authDate:[null],
codOperation:[null],
codBank:[null],
field89:[null],
plazo:[null],
success:[null],
ubication:[null],
aliquota1:[null],
plazoDescripcion:[null],
selectedParticipants:[null],
updatedInternalRateOfReturn:[null],
aliquota2:[null],
fullname:[null],
savingAccount:[null],
nameBank:[null],
validateAccount:[null],
groupCode:[null],
typeConsumption:[null],
internalRateOfReturn:[null],
parish:[null],
classOperation:[null],
typeConsumption2:[null],
finanMarket:[null],
amountParticipants:[null],
functionality:[null],
typeLoan:[null],
reference:[null],
debtType:[null],
descEconomicActivity:[null],
descEconomicSector:[null],
previousNumber:[null],
checkGroupOperation:[null],
migratedOperation:[null],
mainDebtor:[null],
typeParticipants:[null],
formReposition:[null],
company:[null],
processDate:[null],
percentageParticipants:[null],
segmentCredit:[null],
doubleAliquot:[null],
typeSyndicated:[null],
certifiedAccount:[null],
mail:[null],
}
),
SyndicatedList: this.formBuilder.group({
codParticipants:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_GM97_JJJ11.columns,'VA_TEXTINPUTBOXHVY_271518')],
nameParticipants:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_GM97_JJJ11.columns,'VA_TEXTINPUTBOXKXI_794518')],
percentageParticipants:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_GM97_JJJ11.columns,'VA_TEXTINPUTBOXCTZ_403518')],
roleP:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_GM97_JJJ11.columns,'VA_TEXTINPUTBOXNKA_174518')],
mail:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_GM97_JJJ11.columns,'VA_TEXTINPUTBOXPKT_357518')],
amountParticipants:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_GM97_JJJ11.columns,'VA_TEXTINPUTBOXKNN_414518')],
}
),
});
}
}