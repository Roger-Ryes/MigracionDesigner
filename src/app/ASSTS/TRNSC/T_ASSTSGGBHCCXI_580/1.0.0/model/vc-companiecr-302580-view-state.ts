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
public T_ASSTSGGBHCCXI_580!:FormGroup;
public VC_COMPANIECR_302580:CobisGroupBoxModel = new CobisGroupBoxModel();
public uploaders: any;
public G_COMPANICUE_402960 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_COMPANIRTI_936960 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_COMPANIASS_406960 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_COMPANIAEC_900960 : CobisTabbedLayoutContainerModel = new CobisTabbedLayoutContainerModel();
public G_COMPANIERI_977960_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public G_COMPANIERI_977960 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_COMPANISOU_899960 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_CK98_MLY42: CobisGridModel = new CobisGridModel();
public G_COMPANIOIE_551960_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public G_COMPANIOIE_551960 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_COMPANISOI_783960 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_COMPANISII_134960 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_NO93_ONZ78: CobisGridModel = new CobisGridModel();
public VA_COMPANYQZIUFHFL_215960: CobisNumericInputButtonModel = new CobisNumericInputButtonModel();
public VA_COMPANYNAMEXGBS_726960: CobisTextLabelModel = new CobisTextLabelModel();
public VA_SEQUENTIALBATHC_999960: CobisNumericInputButtonModel = new CobisNumericInputButtonModel();
public VA_STATUSBATCHAHAO_691960: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_DATECREATEBACTC_522960: CobisDateFieldModel = new CobisDateFieldModel();
public VA_DATEMOVEBATCHHH_485960: CobisDateFieldModel = new CobisDateFieldModel();
public VA_DESCRIPTIONBVPR_751960: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_EXECUTEONLINEEE_346960: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public Spacer1445: CobisSpacerModel = new CobisSpacerModel();
public VA_VABUTTONNDPYCNC_590960: CobisButtonModel = new CobisButtonModel();
public VA_VABUTTONFPXLAAR_334960: CobisButtonModel = new CobisButtonModel();
public Spacer1924: CobisSpacerModel = new CobisSpacerModel();
public Spacer2985: CobisSpacerModel = new CobisSpacerModel();
public Spacer2278: CobisSpacerModel = new CobisSpacerModel();
public VA_FILENAMEZIQSOOZ_192960: CobisFileUploadModel = new CobisFileUploadModel();
public CM_TASSTSGG_SSC: CobisButtonModel = new CobisButtonModel();
public CM_TASSTSGG_TSR: CobisButtonModel = new CobisButtonModel();
public CM_TASSTSGG_SS5: CobisButtonModel = new CobisButtonModel();
public CM_TASSTSGG_ATT: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_COMPANIECR_302580.id="VC_COMPANIECR_302580";
this.VC_COMPANIECR_302580.name="CompaniesDiscountsCreateForm";
this.VC_COMPANIECR_302580.colSpan=1;
this.VC_COMPANIECR_302580.columns=1;
this.VC_COMPANIECR_302580.enabled=ConstantsApi.mode.All;
this.G_COMPANICUE_402960.id="G_COMPANICUE_402960";
this.G_COMPANICUE_402960.name="GroupLayout1852";
this.G_COMPANICUE_402960.columns=1;
this.G_COMPANICUE_402960.childrenGroups = ["G_COMPANIRTI_936960","G_COMPANIASS_406960","G_COMPANIAEC_900960"];
this.G_COMPANICUE_402960.colSpan=1;
this.G_COMPANICUE_402960.enabled=ConstantsApi.mode.All;
this.G_COMPANICUE_402960.visible=ConstantsApi.mode.All;
this.G_COMPANIRTI_936960.id="G_COMPANIRTI_936960";
this.G_COMPANIRTI_936960.name="Group1653";
this.G_COMPANIRTI_936960.columns=4;
this.G_COMPANIRTI_936960.labelOrientation="Top";
this.G_COMPANIRTI_936960.colSpan=1;
this.G_COMPANIRTI_936960.enabled=ConstantsApi.mode.All;
this.G_COMPANIRTI_936960.visible=ConstantsApi.mode.All;
this.G_COMPANIRTI_936960.attList = ["company","companyName","sequential","statusName","dateCreate","dateMove","description","executeOnline"];
this.G_COMPANIASS_406960.id="G_COMPANIASS_406960";
this.G_COMPANIASS_406960.name="Group1977";
this.G_COMPANIASS_406960.columns=4;
this.G_COMPANIASS_406960.labelOrientation="Top";
this.G_COMPANIASS_406960.colSpan=1;
this.G_COMPANIASS_406960.enabled=ConstantsApi.mode.All;
this.G_COMPANIASS_406960.visible=ConstantsApi.mode.All;
this.G_COMPANIAEC_900960.id="G_COMPANIAEC_900960";
this.G_COMPANIAEC_900960.name="CompaniesDiscountsCreateForm";
this.G_COMPANIAEC_900960.tabPosition=PositionTab.TOP;
this.G_COMPANIAEC_900960.enabled=ConstantsApi.mode.All;
this.G_COMPANIAEC_900960.childrenGroups = ["G_COMPANIERI_977960_tab","G_COMPANIOIE_551960_tab"];
this.G_COMPANIERI_977960_tab.id="G_COMPANIERI_977960_tab";
this.G_COMPANIERI_977960_tab.label=cobis.translate("ASSTS.LBL_ASSTS_GENERAROC_31965");
this.G_COMPANIERI_977960_tab.childrenGroups = ['G_COMPANIERI_977960'];
this.G_COMPANIERI_977960_tab.colSpan=1;
this.G_COMPANIERI_977960_tab.enabled=ConstantsApi.mode.All;
this.G_COMPANIERI_977960_tab.visible=ConstantsApi.mode.All;
this.G_COMPANIERI_977960.id="G_COMPANIERI_977960";
this.G_COMPANIERI_977960.name="GroupLayout1939";
this.G_COMPANIERI_977960.columns=1;
this.G_COMPANIERI_977960.childrenGroups = ["G_COMPANISOU_899960"];
this.G_COMPANIERI_977960.colSpan=1;
this.G_COMPANIERI_977960.enabled=ConstantsApi.mode.All;
this.G_COMPANIERI_977960.visible=ConstantsApi.mode.All;
this.G_COMPANISOU_899960.id="G_COMPANISOU_899960";
this.G_COMPANISOU_899960.name="Group2210";
this.G_COMPANISOU_899960.columns=1;
this.G_COMPANISOU_899960.labelOrientation="Top";
this.G_COMPANISOU_899960.colSpan=1;
this.G_COMPANISOU_899960.enabled=ConstantsApi.mode.All;
this.G_COMPANISOU_899960.visible=ConstantsApi.mode.All;
this.G_COMPANISOU_899960.attList = ["operation","bankId","dateExpirationDiscounts","client","documentType","documentValue","clientName","debit","debitAll","fee","statusDiscountsName","commentCompany","commentClient","company","dateCreateBatch","sequentialDiscounts","statusBatch","percentage","dateMoveDiscounts","dateMoveBatch","description","sequentialBatch","statusDiscounts","companyName"];
this.G_COMPANIOIE_551960_tab.id="G_COMPANIOIE_551960_tab";
this.G_COMPANIOIE_551960_tab.label=cobis.translate("ASSTS.LBL_ASSTS_CARGARAVI_75931");
this.G_COMPANIOIE_551960_tab.childrenGroups = ['G_COMPANIOIE_551960'];
this.G_COMPANIOIE_551960_tab.colSpan=1;
this.G_COMPANIOIE_551960_tab.enabled=ConstantsApi.mode.All;
this.G_COMPANIOIE_551960_tab.visible=ConstantsApi.mode.All;
this.G_COMPANIOIE_551960.id="G_COMPANIOIE_551960";
this.G_COMPANIOIE_551960.name="GroupLayout2189";
this.G_COMPANIOIE_551960.columns=1;
this.G_COMPANIOIE_551960.childrenGroups = ["G_COMPANISOI_783960","G_COMPANISII_134960"];
this.G_COMPANIOIE_551960.colSpan=1;
this.G_COMPANIOIE_551960.enabled=ConstantsApi.mode.All;
this.G_COMPANIOIE_551960.visible=ConstantsApi.mode.All;
this.G_COMPANISOI_783960.id="G_COMPANISOI_783960";
this.G_COMPANISOI_783960.name="Group1649";
this.G_COMPANISOI_783960.columns=4;
this.G_COMPANISOI_783960.labelOrientation="Top";
this.G_COMPANISOI_783960.colSpan=1;
this.G_COMPANISOI_783960.enabled=ConstantsApi.mode.All;
this.G_COMPANISOI_783960.visible=ConstantsApi.mode.All;
this.G_COMPANISOI_783960.attList = ["fileName"];
this.G_COMPANISII_134960.id="G_COMPANISII_134960";
this.G_COMPANISII_134960.name="Group2902";
this.G_COMPANISII_134960.columns=1;
this.G_COMPANISII_134960.labelOrientation="Top";
this.G_COMPANISII_134960.colSpan=1;
this.G_COMPANISII_134960.enabled=ConstantsApi.mode.All;
this.G_COMPANISII_134960.visible=ConstantsApi.mode.All;
this.G_COMPANISII_134960.attList = ["approved","sequential","operation","dateExpirationDiscounts","client","documentType","documentValue","clientName","debit","debitAll","fee","companyStatusOk","companyComments","errorDesc","companyStatusId","errorId","batchId","companyId","approvedId"];
this.CM_TASSTSGG_SSC.id = "CM_TASSTSGG_SSC";
this.CM_TASSTSGG_SSC.name = "Command1";
this.CM_TASSTSGG_SSC.causesValidation=true;
this.CM_TASSTSGG_SSC.submitOnEnter=false;
this.CM_TASSTSGG_SSC.setFocus=false;
this.CM_TASSTSGG_SSC.close=false;
this.CM_TASSTSGG_SSC.label = cobis.translate("ASSTS.LBL_ASSTS_GRABARCOG_74932");
this.CM_TASSTSGG_SSC.enabled = ConstantsApi.mode.All;
this.CM_TASSTSGG_SSC.visible= ConstantsApi.mode.All;
this.CM_TASSTSGG_TSR.id = "CM_TASSTSGG_TSR";
this.CM_TASSTSGG_TSR.name = "Command2";
this.CM_TASSTSGG_TSR.causesValidation=true;
this.CM_TASSTSGG_TSR.submitOnEnter=false;
this.CM_TASSTSGG_TSR.setFocus=false;
this.CM_TASSTSGG_TSR.close=false;
this.CM_TASSTSGG_TSR.label = cobis.translate("ASSTS.LBL_ASSTS_APROBARLC_14087");
this.CM_TASSTSGG_TSR.enabled = ConstantsApi.mode.All;
this.CM_TASSTSGG_TSR.visible= ConstantsApi.mode.All;
this.CM_TASSTSGG_SS5.id = "CM_TASSTSGG_SS5";
this.CM_TASSTSGG_SS5.name = "Command3";
this.CM_TASSTSGG_SS5.causesValidation=true;
this.CM_TASSTSGG_SS5.submitOnEnter=false;
this.CM_TASSTSGG_SS5.setFocus=false;
this.CM_TASSTSGG_SS5.close=false;
this.CM_TASSTSGG_SS5.label = cobis.translate("ASSTS.LBL_ASSTS_PROCESARR_55017");
this.CM_TASSTSGG_SS5.enabled = ConstantsApi.mode.All;
this.CM_TASSTSGG_SS5.visible= ConstantsApi.mode.All;
this.CM_TASSTSGG_ATT.id = "CM_TASSTSGG_ATT";
this.CM_TASSTSGG_ATT.name = "Command4";
this.CM_TASSTSGG_ATT.causesValidation=false;
this.CM_TASSTSGG_ATT.submitOnEnter=false;
this.CM_TASSTSGG_ATT.setFocus=false;
this.CM_TASSTSGG_ATT.close=false;
this.CM_TASSTSGG_ATT.label = cobis.translate("ASSTS.LBL_ASSTS_ELIMINARR_32029");
this.CM_TASSTSGG_ATT.enabled = ConstantsApi.mode.All;
this.CM_TASSTSGG_ATT.visible= ConstantsApi.mode.All;
this.VA_COMPANYQZIUFHFL_215960.id = "VA_COMPANYQZIUFHFL_215960";
this.VA_COMPANYQZIUFHFL_215960.name = "company";
this.VA_COMPANYQZIUFHFL_215960.label = cobis.translate("ASSTS.LBL_ASSTS_CODCOMPAA_40823");
this.VA_COMPANYQZIUFHFL_215960.entity = "CompaniesBatch";
this.VA_COMPANYQZIUFHFL_215960.attribute = "company";
this.VA_COMPANYQZIUFHFL_215960.colSpan = 1;
this.VA_COMPANYQZIUFHFL_215960.format = "";
this.VA_COMPANYQZIUFHFL_215960.readOnly = ConstantsApi.mode.Query;
this.VA_COMPANYQZIUFHFL_215960.enabled = ConstantsApi.mode.All;
this.VA_COMPANYQZIUFHFL_215960.visible= ConstantsApi.mode.All;
this.VA_COMPANYQZIUFHFL_215960.required = true;
this.VA_COMPANYQZIUFHFL_215960.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_COMPANYQZIUFHFL_215960.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.VA_COMPANYNAMEXGBS_726960.id = "VA_COMPANYNAMEXGBS_726960";
this.VA_COMPANYNAMEXGBS_726960.name = "companyName";
this.VA_COMPANYNAMEXGBS_726960.label = cobis.translate("ASSTS.LBL_ASSTS_NOMBRECMM_80342");
this.VA_COMPANYNAMEXGBS_726960.attribute = "companyName";
this.VA_COMPANYNAMEXGBS_726960.colSpan = 3;
this.VA_COMPANYNAMEXGBS_726960.withoutLabel = false;
this.VA_COMPANYNAMEXGBS_726960.enabled = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_COMPANYNAMEXGBS_726960.visible= ConstantsApi.mode.All;
this.VA_SEQUENTIALBATHC_999960.id = "VA_SEQUENTIALBATHC_999960";
this.VA_SEQUENTIALBATHC_999960.name = "sequential";
this.VA_SEQUENTIALBATHC_999960.label = cobis.translate("ASSTS.LBL_ASSTS_NOLOTEWVB_20010");
this.VA_SEQUENTIALBATHC_999960.entity = "CompaniesBatch";
this.VA_SEQUENTIALBATHC_999960.attribute = "sequential";
this.VA_SEQUENTIALBATHC_999960.colSpan = 1;
this.VA_SEQUENTIALBATHC_999960.format = "";
this.VA_SEQUENTIALBATHC_999960.readOnly = ConstantsApi.mode.Query;
this.VA_SEQUENTIALBATHC_999960.enabled = ConstantsApi.mode.All;
this.VA_SEQUENTIALBATHC_999960.visible= ConstantsApi.mode.All;
this.VA_SEQUENTIALBATHC_999960.textLocked = true;
this.VA_STATUSBATCHAHAO_691960.label = cobis.translate("ASSTS.LBL_ASSTS_ESTADOLOT_42162");
this.VA_STATUSBATCHAHAO_691960.entity = "CompaniesBatch";
this.VA_STATUSBATCHAHAO_691960.attribute = "statusName";
this.VA_STATUSBATCHAHAO_691960.textCase= TextCaseOptions.UPPER_CASE;
this.VA_STATUSBATCHAHAO_691960.textLocked = true;
this.VA_STATUSBATCHAHAO_691960.name="statusName";
this.VA_STATUSBATCHAHAO_691960.id="VA_STATUSBATCHAHAO_691960";
this.VA_STATUSBATCHAHAO_691960.colSpan=1;
this.VA_STATUSBATCHAHAO_691960.withoutLabel = false;
this.VA_STATUSBATCHAHAO_691960.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_STATUSBATCHAHAO_691960.enabled = ConstantsApi.mode.All;
this.VA_STATUSBATCHAHAO_691960.visible= ConstantsApi.mode.All;
this.VA_DATECREATEBACTC_522960.label = cobis.translate("ASSTS.LBL_ASSTS_FECHACRCN_57827");
this.VA_DATECREATEBACTC_522960.entity = "CompaniesBatch";
this.VA_DATECREATEBACTC_522960.attribute = "dateCreate";
this.VA_DATECREATEBACTC_522960.textLocked = true;
this.VA_DATECREATEBACTC_522960.name="dateCreate";
this.VA_DATECREATEBACTC_522960.id="VA_DATECREATEBACTC_522960";
this.VA_DATECREATEBACTC_522960.colSpan=1;
this.VA_DATECREATEBACTC_522960.withoutLabel = false;
this.VA_DATECREATEBACTC_522960.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_DATECREATEBACTC_522960.enabled = ConstantsApi.mode.All;
this.VA_DATECREATEBACTC_522960.visible= ConstantsApi.mode.All;
this.VA_DATEMOVEBATCHHH_485960.label = cobis.translate("ASSTS.LBL_ASSTS_FECHAULOV_17258");
this.VA_DATEMOVEBATCHHH_485960.entity = "CompaniesBatch";
this.VA_DATEMOVEBATCHHH_485960.attribute = "dateMove";
this.VA_DATEMOVEBATCHHH_485960.textLocked = true;
this.VA_DATEMOVEBATCHHH_485960.name="dateMove";
this.VA_DATEMOVEBATCHHH_485960.id="VA_DATEMOVEBATCHHH_485960";
this.VA_DATEMOVEBATCHHH_485960.colSpan=1;
this.VA_DATEMOVEBATCHHH_485960.withoutLabel = false;
this.VA_DATEMOVEBATCHHH_485960.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_DATEMOVEBATCHHH_485960.enabled = ConstantsApi.mode.All;
this.VA_DATEMOVEBATCHHH_485960.visible= ConstantsApi.mode.All;
this.VA_DESCRIPTIONBVPR_751960.label = cobis.translate("ASSTS.LBL_ASSTS_OBSERVAIO_80053");
this.VA_DESCRIPTIONBVPR_751960.entity = "CompaniesBatch";
this.VA_DESCRIPTIONBVPR_751960.attribute = "description";
this.VA_DESCRIPTIONBVPR_751960.textCase= TextCaseOptions.UPPER_CASE;
this.VA_DESCRIPTIONBVPR_751960.name="description";
this.VA_DESCRIPTIONBVPR_751960.id="VA_DESCRIPTIONBVPR_751960";
this.VA_DESCRIPTIONBVPR_751960.colSpan=3;
this.VA_DESCRIPTIONBVPR_751960.withoutLabel = false;
this.VA_DESCRIPTIONBVPR_751960.readOnly = ConstantsApi.mode.Query;
this.VA_DESCRIPTIONBVPR_751960.enabled = ConstantsApi.mode.All;
this.VA_DESCRIPTIONBVPR_751960.visible= ConstantsApi.mode.All;
this.VA_EXECUTEONLINEEE_346960.id = "VA_EXECUTEONLINEEE_346960";
this.VA_EXECUTEONLINEEE_346960.name = "executeOnline";
this.VA_EXECUTEONLINEEE_346960.attribute = "executeOnline";
this.VA_EXECUTEONLINEEE_346960.label = cobis.translate("ASSTS.LBL_ASSTS_PROCESANE_78354");
this.VA_EXECUTEONLINEEE_346960.colSpan = 1;
this.VA_EXECUTEONLINEEE_346960.withoutLabel = false;
this.VA_EXECUTEONLINEEE_346960.readOnly = ConstantsApi.mode.Query;
this.VA_EXECUTEONLINEEE_346960.entity = "CompaniesBatch";
this.VA_EXECUTEONLINEEE_346960.enabled = ConstantsApi.mode.All;
this.VA_EXECUTEONLINEEE_346960.visible= ConstantsApi.mode.All;
this.VA_EXECUTEONLINEEE_346960.textField = "value";
this.VA_EXECUTEONLINEEE_346960.valueField = "code";
this.VA_EXECUTEONLINEEE_346960.required = true;
this.VA_EXECUTEONLINEEE_346960.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_EXECUTEONLINEEE_346960.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.Spacer1445.id = "Spacer1445";
this.Spacer1445.name = "Spacer1445";
this.Spacer1445.colSpan = 1;
this.Spacer1445.visible= ConstantsApi.mode.All;
this.VA_VABUTTONNDPYCNC_590960.id = "VA_VABUTTONNDPYCNC_590960";
this.VA_VABUTTONNDPYCNC_590960.name = "VA_VABUTTONNDPYCNC_590960";
this.VA_VABUTTONNDPYCNC_590960.label = cobis.translate("ASSTS.LBL_ASSTS_GENERARQW_88331");
this.VA_VABUTTONNDPYCNC_590960.colSpan = 1;
this.VA_VABUTTONNDPYCNC_590960.withoutLabel = false;
this.VA_VABUTTONNDPYCNC_590960.causesValidation=true;
this.VA_VABUTTONNDPYCNC_590960.submitOnEnter=false;
this.VA_VABUTTONNDPYCNC_590960.setFocus=false;
this.VA_VABUTTONNDPYCNC_590960.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONNDPYCNC_590960.visible= ConstantsApi.mode.All;
this.VA_VABUTTONFPXLAAR_334960.id = "VA_VABUTTONFPXLAAR_334960";
this.VA_VABUTTONFPXLAAR_334960.name = "VA_VABUTTONFPXLAAR_334960";
this.VA_VABUTTONFPXLAAR_334960.label = cobis.translate("ASSTS.LBL_ASSTS_LIMPIARAM_44649");
this.VA_VABUTTONFPXLAAR_334960.colSpan = 1;
this.VA_VABUTTONFPXLAAR_334960.withoutLabel = false;
this.VA_VABUTTONFPXLAAR_334960.causesValidation=false;
this.VA_VABUTTONFPXLAAR_334960.submitOnEnter=false;
this.VA_VABUTTONFPXLAAR_334960.setFocus=false;
this.VA_VABUTTONFPXLAAR_334960.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONFPXLAAR_334960.visible= ConstantsApi.mode.All;
this.Spacer1924.id = "Spacer1924";
this.Spacer1924.name = "Spacer1924";
this.Spacer1924.colSpan = 1;
this.Spacer1924.visible= ConstantsApi.mode.All;
this.QV_CK98_MLY42.pageSize=10;
this.QV_CK98_MLY42.id='QV_CK98_MLY42';
this.QV_CK98_MLY42.name='QV_CK98_MLY42';
this.QV_CK98_MLY42.pageable=true;
this.QV_CK98_MLY42.sortable=false;
this.QV_CK98_MLY42.resizable=false;
this.QV_CK98_MLY42.scrollable=true
this.QV_CK98_MLY42.confirmRowDeletion=false;
this.QV_CK98_MLY42.exportToExcel=true;
this.QV_CK98_MLY42.exportToPdf=true;
this.QV_CK98_MLY42.height=0;
this.QV_CK98_MLY42.filterableColumns=false;
this.QV_CK98_MLY42.entityName='CompaniesDiscountsList';
this.QV_CK98_MLY42.appendRecords=false;
this.QV_CK98_MLY42.rowDetail=false;
this.QV_CK98_MLY42.columnMenu = true;
this.QV_CK98_MLY42.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_CK98_MLY42.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_CK98_MLY42.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXESA_697960",
label : cobis.translate('ASSTS.LBL_ASSTS_OPERACION_46998'),
field : 'bankId',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXESA_697960',
name :'bankId',
withoutLabel : true,
attribute : 'bankId',
entity : 'CompaniesDiscountsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DATEFIELDGGUJQA_467960",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAVENO_73738'),
field : 'dateExpirationDiscounts',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 125,
properties : {
id :'VA_DATEFIELDGGUJQA_467960',
name :'dateExpirationDiscounts',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'dateExpirationDiscounts',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'CompaniesDiscountsList',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_TEXTINPUTBOXVLY_407960",
label : cobis.translate('ASSTS.LBL_ASSTS_CODCLIENN_10354'),
field : 'client',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXVLY_407960',
name :'client',
withoutLabel : true,
attribute : 'client',
entity : 'CompaniesDiscountsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXJNT_728960",
label : cobis.translate('ASSTS.LBL_ASSTS_TIPOIDENI_24975'),
field : 'documentType',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXJNT_728960',
name :'documentType',
withoutLabel : true,
attribute : 'documentType',
entity : 'CompaniesDiscountsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXKLK_957960",
label : cobis.translate('ASSTS.LBL_ASSTS_IDENTIFCC_26989'),
field : 'documentValue',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXKLK_957960',
name :'documentValue',
withoutLabel : true,
attribute : 'documentValue',
entity : 'CompaniesDiscountsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXADK_755960",
label : cobis.translate('ASSTS.LBL_ASSTS_NOMBRESTM_14925'),
field : 'clientName',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 250,
properties :
{
id :'VA_TEXTINPUTBOXADK_755960',
name :'clientName',
withoutLabel : true,
attribute : 'clientName',
entity : 'CompaniesDiscountsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXXNW_188960",
label : cobis.translate('ASSTS.LBL_ASSTS_VALORCUTO_78445'),
field : 'debit',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXXNW_188960',
name :'debit',
withoutLabel : true,
attribute : 'debit',
entity : 'CompaniesDiscountsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXNFU_822960",
label : cobis.translate('ASSTS.LBL_ASSTS_VALORADEO_59689'),
field : 'debitAll',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXNFU_822960',
name :'debitAll',
withoutLabel : true,
attribute : 'debitAll',
entity : 'CompaniesDiscountsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXMYC_602960",
label : cobis.translate('ASSTS.LBL_ASSTS_TOTALADDA_46303'),
field : 'fee',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXMYC_602960',
name :'fee',
withoutLabel : true,
attribute : 'fee',
entity : 'CompaniesDiscountsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXQIB_675960",
label : cobis.translate('ASSTS.LBL_ASSTS_ESTADOEAI_33340'),
field : 'statusDiscountsName',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 50,
properties :
{
id :'VA_TEXTINPUTBOXQIB_675960',
name :'statusDiscountsName',
withoutLabel : true,
attribute : 'statusDiscountsName',
entity : 'CompaniesDiscountsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXEUC_260960",
label : cobis.translate('ASSTS.LBL_ASSTS_COMENTARI_46421'),
field : 'commentClient',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXEUC_260960',
name :'commentClient',
withoutLabel : true,
attribute : 'commentClient',
entity : 'CompaniesDiscountsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.Spacer2985.id = "Spacer2985";
this.Spacer2985.name = "Spacer2985";
this.Spacer2985.colSpan = 1;
this.Spacer2985.visible= ConstantsApi.mode.All;
this.Spacer2278.id = "Spacer2278";
this.Spacer2278.name = "Spacer2278";
this.Spacer2278.colSpan = 1;
this.Spacer2278.visible= ConstantsApi.mode.All;
this.VA_FILENAMEZIQSOOZ_192960.id = "VA_FILENAMEZIQSOOZ_192960";
this.VA_FILENAMEZIQSOOZ_192960.name = "fileName";
this.VA_FILENAMEZIQSOOZ_192960.tooltip=cobis.translate("ASSTS.LBL_ASSTS_TIPOARCOH_71497");
this.VA_FILENAMEZIQSOOZ_192960.label = cobis.translate("ASSTS.LBL_ASSTS_CARGARAVI_75931");
this.VA_FILENAMEZIQSOOZ_192960.entity = "CompaniesBatch";
this.VA_FILENAMEZIQSOOZ_192960.attribute = "fileName";
this.VA_FILENAMEZIQSOOZ_192960.colSpan = 2;
this.VA_FILENAMEZIQSOOZ_192960.withoutLabel = false;
this.VA_FILENAMEZIQSOOZ_192960.readOnly =ConstantsApi.mode.Query;
this.VA_FILENAMEZIQSOOZ_192960.enabled = ConstantsApi.mode.All;
this.VA_FILENAMEZIQSOOZ_192960.visible= ConstantsApi.mode.All;
this.VA_FILENAMEZIQSOOZ_192960.required = true;
this.VA_FILENAMEZIQSOOZ_192960.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_FILENAMEZIQSOOZ_192960.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.QV_NO93_ONZ78.pageSize=10;
this.QV_NO93_ONZ78.id='QV_NO93_ONZ78';
this.QV_NO93_ONZ78.name='QV_NO93_ONZ78';
this.QV_NO93_ONZ78.pageable=true;
this.QV_NO93_ONZ78.sortable=false;
this.QV_NO93_ONZ78.resizable=true;
this.QV_NO93_ONZ78.scrollable=true
this.QV_NO93_ONZ78.confirmRowDeletion=false;
this.QV_NO93_ONZ78.exportToExcel=true;
this.QV_NO93_ONZ78.exportToPdf=true;
this.QV_NO93_ONZ78.height=0;
this.QV_NO93_ONZ78.filterableColumns=false;
this.QV_NO93_ONZ78.entityName='CompaniesDiscountsFileList';
this.QV_NO93_ONZ78.appendRecords=false;
this.QV_NO93_ONZ78.rowDetail=false;
this.QV_NO93_ONZ78.columnMenu = true;
this.QV_NO93_ONZ78.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_NO93_ONZ78.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
this.QV_NO93_ONZ78.commandsButton=[
{
id : 'CEQV_201QV_NO93_ONZ78_630',
image:'',
label: cobis.translate('ASSTS.LBL_ASSTS_FILTRARSO_98570'),
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
this.QV_NO93_ONZ78.columns = Util.filterByMode(this.mode, [
{
id : "VA_COMBOBOXDBBXSFA_201960",
label : cobis.translate('ASSTS.LBL_ASSTS_APROBARLC_14087'),
field : 'approved',
visible : ConstantsApi.mode.All,
type : 'template',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_COMBOBOXDBBXSFA_201960',
name :'approved',
withoutLabel : true,
attribute : 'approved',
entity : 'CompaniesDiscountsFileList',
readonly : ConstantsApi.mode.Query,
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
disabled : false,
isOnChangeControl:true,
trueValue: true,
falseValue: false,
}
},
{
id : "VA_TEXTINPUTBOXNIO_870960",
label : cobis.translate('ASSTS.LBL_ASSTS_NONSYXWRW_43467'),
field : 'sequential',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXNIO_870960',
name :'sequential',
withoutLabel : true,
attribute : 'sequential',
entity : 'CompaniesDiscountsFileList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXZNW_726960",
label : cobis.translate('ASSTS.LBL_ASSTS_OPERACION_46998'),
field : 'operation',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXZNW_726960',
name :'operation',
withoutLabel : true,
attribute : 'operation',
entity : 'CompaniesDiscountsFileList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DATEFIELDOLVMYK_389960",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAVENO_73738'),
field : 'dateExpirationDiscounts',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 125,
properties : {
id :'VA_DATEFIELDOLVMYK_389960',
name :'dateExpirationDiscounts',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'dateExpirationDiscounts',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'CompaniesDiscountsFileList',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_TEXTINPUTBOXNGZ_627960",
label : cobis.translate('ASSTS.LBL_ASSTS_CODCLIENN_10354'),
field : 'client',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXNGZ_627960',
name :'client',
withoutLabel : true,
attribute : 'client',
entity : 'CompaniesDiscountsFileList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXZOK_896960",
label : cobis.translate('ASSTS.LBL_ASSTS_TIPOIDENI_24975'),
field : 'documentType',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXZOK_896960',
name :'documentType',
withoutLabel : true,
attribute : 'documentType',
entity : 'CompaniesDiscountsFileList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXVXM_474960",
label : cobis.translate('ASSTS.LBL_ASSTS_IDENTIFCC_26989'),
field : 'documentValue',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXVXM_474960',
name :'documentValue',
withoutLabel : true,
attribute : 'documentValue',
entity : 'CompaniesDiscountsFileList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXFGM_722960",
label : cobis.translate('ASSTS.LBL_ASSTS_NOMBRESTM_14925'),
field : 'clientName',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 200,
properties :
{
id :'VA_TEXTINPUTBOXFGM_722960',
name :'clientName',
withoutLabel : true,
attribute : 'clientName',
entity : 'CompaniesDiscountsFileList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXYXC_958960",
label : cobis.translate('ASSTS.LBL_ASSTS_VALORCUTO_78445'),
field : 'debit',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXYXC_958960',
name :'debit',
withoutLabel : true,
attribute : 'debit',
entity : 'CompaniesDiscountsFileList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXDTM_911960",
label : cobis.translate('ASSTS.LBL_ASSTS_VALORADEO_59689'),
field : 'debitAll',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXDTM_911960',
name :'debitAll',
withoutLabel : true,
attribute : 'debitAll',
entity : 'CompaniesDiscountsFileList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXPTU_880960",
label : cobis.translate('ASSTS.LBL_ASSTS_TOTALADDA_46303'),
field : 'fee',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXPTU_880960',
name :'fee',
withoutLabel : true,
attribute : 'fee',
entity : 'CompaniesDiscountsFileList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXDFC_313960",
label : cobis.translate('ASSTS.LBL_ASSTS_ESTADOEAI_33340'),
field : 'companyStatusOk',
visible : ConstantsApi.mode.All,
type : 'dropdownlist',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
data$: of([]),
properties :
{
id :'VA_TEXTINPUTBOXDFC_313960',
name :'companyStatusOk',
attribute : 'companyStatusOk',
entity : 'CompaniesDiscountsFileList',
withoutLabel : false,
blankOption : false,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
filterType : FilterType.NONE,
showId : false,
textField : "value",
valueField : "code",
}
},
{
id : "VA_TEXTINPUTBOXBTQ_476960",
label : cobis.translate('ASSTS.LBL_ASSTS_COMENTARI_46421'),
field : 'companyComments',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 200,
properties :
{
id :'VA_TEXTINPUTBOXBTQ_476960',
name :'companyComments',
withoutLabel : true,
attribute : 'companyComments',
entity : 'CompaniesDiscountsFileList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXLDP_886960",
label : cobis.translate('ASSTS.LBL_ASSTS_ERRORENHV_15304'),
field : 'errorDesc',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 200,
properties :
{
id :'VA_TEXTINPUTBOXLDP_886960',
name :'errorDesc',
withoutLabel : true,
attribute : 'errorDesc',
entity : 'CompaniesDiscountsFileList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_ASSTSGGBHCCXI_580 = this.formBuilder.group({
CompaniesBatch: this.formBuilder.group({
company:[{value: null, disabled: !this.VA_COMPANYQZIUFHFL_215960.visible},CobisDesignerUtil.getValidationFunctions(this.VA_COMPANYQZIUFHFL_215960.validationFunctions!)],
companyName:[{value: null, disabled: !this.VA_COMPANYNAMEXGBS_726960.visible}],
sequential:[{value: null, disabled: !this.VA_SEQUENTIALBATHC_999960.visible},CobisDesignerUtil.getValidationFunctions(this.VA_SEQUENTIALBATHC_999960.validationFunctions!)],
statusName:[{value: null, disabled: !this.VA_STATUSBATCHAHAO_691960.visible},CobisDesignerUtil.getValidationFunctions(this.VA_STATUSBATCHAHAO_691960.validationFunctions!)],
dateCreate:[{value: null, disabled: !this.VA_DATECREATEBACTC_522960.visible},CobisDesignerUtil.getValidationFunctions(this.VA_DATECREATEBACTC_522960.validationFunctions!)],
dateMove:[{value: null, disabled: !this.VA_DATEMOVEBATCHHH_485960.visible},CobisDesignerUtil.getValidationFunctions(this.VA_DATEMOVEBATCHHH_485960.validationFunctions!)],
description:[{value: null, disabled: !this.VA_DESCRIPTIONBVPR_751960.visible},CobisDesignerUtil.getValidationFunctions(this.VA_DESCRIPTIONBVPR_751960.validationFunctions!)],
executeOnline:[{value: null, disabled: !this.VA_EXECUTEONLINEEE_346960.visible},CobisDesignerUtil.getValidationFunctions(this.VA_EXECUTEONLINEEE_346960.validationFunctions!)],
filePath:[null],
fileUp:[null],
statusId:[null],
fileMsg:[null],
fileError:[null],
fileName:[null],
}
),
CompaniesDiscountsList: this.formBuilder.group({
operation:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CK98_MLY42.columns,'VA_TEXTINPUTBOXCCP_790960')],
bankId:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CK98_MLY42.columns,'VA_TEXTINPUTBOXESA_697960')],
dateExpirationDiscounts:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CK98_MLY42.columns,'VA_DATEFIELDGGUJQA_467960')],
client:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CK98_MLY42.columns,'VA_TEXTINPUTBOXVLY_407960')],
documentType:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CK98_MLY42.columns,'VA_TEXTINPUTBOXJNT_728960')],
documentValue:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CK98_MLY42.columns,'VA_TEXTINPUTBOXKLK_957960')],
clientName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CK98_MLY42.columns,'VA_TEXTINPUTBOXADK_755960')],
debit:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CK98_MLY42.columns,'VA_TEXTINPUTBOXXNW_188960')],
debitAll:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CK98_MLY42.columns,'VA_TEXTINPUTBOXNFU_822960')],
fee:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CK98_MLY42.columns,'VA_TEXTINPUTBOXMYC_602960')],
statusDiscountsName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CK98_MLY42.columns,'VA_TEXTINPUTBOXQIB_675960')],
commentCompany:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CK98_MLY42.columns,'VA_TEXTINPUTBOXGNZ_515960')],
commentClient:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CK98_MLY42.columns,'VA_TEXTINPUTBOXEUC_260960')],
company:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CK98_MLY42.columns,'VA_TEXTINPUTBOXCRZ_717960')],
dateCreateBatch:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CK98_MLY42.columns,'VA_DATEFIELDIEZNJP_227960')],
sequentialDiscounts:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CK98_MLY42.columns,'VA_TEXTINPUTBOXIWI_101960')],
statusBatch:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CK98_MLY42.columns,'VA_TEXTINPUTBOXKGR_502960')],
percentage:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CK98_MLY42.columns,'VA_TEXTINPUTBOXDMU_627960')],
dateMoveDiscounts:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CK98_MLY42.columns,'VA_DATEFIELDZLLVGT_725960')],
dateMoveBatch:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CK98_MLY42.columns,'VA_DATEFIELDPPSVIO_569960')],
description:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CK98_MLY42.columns,'VA_TEXTINPUTBOXYYA_383960')],
sequentialBatch:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CK98_MLY42.columns,'VA_TEXTINPUTBOXGMA_256960')],
statusDiscounts:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CK98_MLY42.columns,'VA_TEXTINPUTBOXKDS_807960')],
companyName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CK98_MLY42.columns,'VA_TEXTINPUTBOXPAR_995960')],
payAll:[null],
dateInitDiscounts:[null],
clientRole:[null],
}
),
CompaniesDiscountsFileList: this.formBuilder.group({
approved:[{value: false, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_NO93_ONZ78.columns,'VA_COMBOBOXDBBXSFA_201960')],
sequential:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_NO93_ONZ78.columns,'VA_TEXTINPUTBOXNIO_870960')],
operation:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_NO93_ONZ78.columns,'VA_TEXTINPUTBOXZNW_726960')],
dateExpirationDiscounts:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_NO93_ONZ78.columns,'VA_DATEFIELDOLVMYK_389960')],
client:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_NO93_ONZ78.columns,'VA_TEXTINPUTBOXNGZ_627960')],
documentType:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_NO93_ONZ78.columns,'VA_TEXTINPUTBOXZOK_896960')],
documentValue:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_NO93_ONZ78.columns,'VA_TEXTINPUTBOXVXM_474960')],
clientName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_NO93_ONZ78.columns,'VA_TEXTINPUTBOXFGM_722960')],
debit:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_NO93_ONZ78.columns,'VA_TEXTINPUTBOXYXC_958960')],
debitAll:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_NO93_ONZ78.columns,'VA_TEXTINPUTBOXDTM_911960')],
fee:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_NO93_ONZ78.columns,'VA_TEXTINPUTBOXPTU_880960')],
companyStatusOk:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_NO93_ONZ78.columns,'VA_TEXTINPUTBOXDFC_313960')],
companyComments:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_NO93_ONZ78.columns,'VA_TEXTINPUTBOXBTQ_476960')],
errorDesc:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_NO93_ONZ78.columns,'VA_TEXTINPUTBOXLDP_886960')],
companyStatusId:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_NO93_ONZ78.columns,'VA_TEXTINPUTBOXVVY_608960')],
errorId:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_NO93_ONZ78.columns,'VA_TEXTINPUTBOXKNG_738960')],
batchId:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_NO93_ONZ78.columns,'VA_TEXTINPUTBOXYMF_484960')],
companyId:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_NO93_ONZ78.columns,'VA_TEXTINPUTBOXWFB_211960')],
approvedId:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_NO93_ONZ78.columns,'VA_TEXTINPUTBOXOEO_931960')],
}
),
});
this.uploaders = {
VA_FILENAMEZIQSOOZ_192960: this.VA_FILENAMEZIQSOOZ_192960
}
}
}