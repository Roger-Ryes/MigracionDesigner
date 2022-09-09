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
public T_LNSPRSBSNRATX_181!:FormGroup;
public VC_PRODUCTLIN_542181:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PRODUCTIIS_729676 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PRODUCTSOT_849676 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PRODUCTBLR_922676 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_QF17_TGN52: CobisGridModel = new CobisGridModel();
public VA_SEQUENTIALRWTZC_418676: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_CODLINEGMBTNMUY_339676: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_PRODUCTWKWZPDFA_211676: CobisDropDownListModel = new CobisDropDownListModel();
public VA_CLIENTCODHNEWWJ_288676: CobisDropDownListModel = new CobisDropDownListModel();
public VA_OPTYPEACPEUXTGS_100676: CobisDropDownListModel = new CobisDropDownListModel();
public VA_OPTYPEPASINULZZ_450676: CobisDropDownListModel = new CobisDropDownListModel();
public VA_AMOUNTCLGEIWQXX_908676: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_CURRENCYIMFFWXD_243676: CobisDropDownListModel = new CobisDropDownListModel();
public VA_CONTROLSAMOUNTN_330676: CobisCheckBoxModel = new CobisCheckBoxModel();
public VA_OBSERVATIONSKUR_930676: CobisTextAreaModel = new CobisTextAreaModel();
public VA_USEDMINHMVRYCUI_522676: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public Spacer2771: CobisSpacerModel = new CobisSpacerModel();
public Spacer2264: CobisSpacerModel = new CobisSpacerModel();
public VA_AVAILABLECGSSBD_703676: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public Spacer2148: CobisSpacerModel = new CobisSpacerModel();
public VA_VABUTTONUYPWWXE_933676: CobisButtonModel = new CobisButtonModel();
public VA_VABUTTONDMJEJKM_762676: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_PRODUCTLIN_542181.id="VC_PRODUCTLIN_542181";
this.VC_PRODUCTLIN_542181.name="ProductLineDistributionForm";
this.VC_PRODUCTLIN_542181.colSpan=1;
this.VC_PRODUCTLIN_542181.columns=1;
this.VC_PRODUCTLIN_542181.enabled=ConstantsApi.mode.All;
this.G_PRODUCTIIS_729676.id="G_PRODUCTIIS_729676";
this.G_PRODUCTIIS_729676.name="Group1644";
this.G_PRODUCTIIS_729676.columns=3;
this.G_PRODUCTIIS_729676.labelOrientation="Top";
this.G_PRODUCTIIS_729676.colSpan=1;
this.G_PRODUCTIIS_729676.enabled=ConstantsApi.mode.All;
this.G_PRODUCTIIS_729676.visible=ConstantsApi.mode.Insert + ConstantsApi.mode.Update;
this.G_PRODUCTIIS_729676.attList = ["sequential","codLine"];
this.G_PRODUCTSOT_849676.id="G_PRODUCTSOT_849676";
this.G_PRODUCTSOT_849676.name="Group2578";
this.G_PRODUCTSOT_849676.columns=4;
this.G_PRODUCTSOT_849676.labelOrientation="Top";
this.G_PRODUCTSOT_849676.colSpan=1;
this.G_PRODUCTSOT_849676.enabled=ConstantsApi.mode.All;
this.G_PRODUCTSOT_849676.visible=ConstantsApi.mode.Insert + ConstantsApi.mode.Update;
this.G_PRODUCTSOT_849676.attList = ["product","clientCod","opTypeAc","opTypePas","amount","currency","controlsAmount","observations","used","available"];
this.G_PRODUCTBLR_922676.id="G_PRODUCTBLR_922676";
this.G_PRODUCTBLR_922676.name="Group1100";
this.G_PRODUCTBLR_922676.columns=1;
this.G_PRODUCTBLR_922676.labelOrientation="Top";
this.G_PRODUCTBLR_922676.colSpan=1;
this.G_PRODUCTBLR_922676.enabled=ConstantsApi.mode.All;
this.G_PRODUCTBLR_922676.visible=ConstantsApi.mode.All;
this.G_PRODUCTBLR_922676.attList = ["product","clientName","clientCod","opType","codCurrency","descCurrency","amount","used","available","controlsAmount","observations","sequential"];
this.VA_SEQUENTIALRWTZC_418676.label = cobis.translate("LNSPR.LBL_LNSPR_SECUENCAI_74208");
this.VA_SEQUENTIALRWTZC_418676.entity = "ProductLineDistribution";
this.VA_SEQUENTIALRWTZC_418676.attribute = "sequential";
this.VA_SEQUENTIALRWTZC_418676.textCase= TextCaseOptions.NONE;
this.VA_SEQUENTIALRWTZC_418676.format= "#";
this.VA_SEQUENTIALRWTZC_418676.name="sequential";
this.VA_SEQUENTIALRWTZC_418676.id="VA_SEQUENTIALRWTZC_418676";
this.VA_SEQUENTIALRWTZC_418676.colSpan=1;
this.VA_SEQUENTIALRWTZC_418676.withoutLabel = false;
this.VA_SEQUENTIALRWTZC_418676.readOnly = ConstantsApi.mode.Query;
this.VA_SEQUENTIALRWTZC_418676.enabled = ConstantsApi.mode.None;
this.VA_SEQUENTIALRWTZC_418676.visible= ConstantsApi.mode.All;
this.VA_CODLINEGMBTNMUY_339676.label = cobis.translate("LNSPR.LBL_LNSPR_CODLNEAKU_40615");
this.VA_CODLINEGMBTNMUY_339676.entity = "ProductLineDistribution";
this.VA_CODLINEGMBTNMUY_339676.attribute = "codLine";
this.VA_CODLINEGMBTNMUY_339676.textCase= TextCaseOptions.NONE;
this.VA_CODLINEGMBTNMUY_339676.name="codLine";
this.VA_CODLINEGMBTNMUY_339676.id="VA_CODLINEGMBTNMUY_339676";
this.VA_CODLINEGMBTNMUY_339676.colSpan=1;
this.VA_CODLINEGMBTNMUY_339676.withoutLabel = false;
this.VA_CODLINEGMBTNMUY_339676.readOnly = ConstantsApi.mode.Query;
this.VA_CODLINEGMBTNMUY_339676.enabled = ConstantsApi.mode.None;
this.VA_CODLINEGMBTNMUY_339676.visible= ConstantsApi.mode.All;
this.VA_PRODUCTWKWZPDFA_211676.label = cobis.translate("LNSPR.LBL_LOANS_PRODUCTOO_67575");
this.VA_PRODUCTWKWZPDFA_211676.blankOption=true;
this.VA_PRODUCTWKWZPDFA_211676.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_PRODUCTWKWZPDFA_211676.entity = "ProductLineDistribution";
this.VA_PRODUCTWKWZPDFA_211676.attribute = "product";
this.VA_PRODUCTWKWZPDFA_211676.textField = "description";
this.VA_PRODUCTWKWZPDFA_211676.valueField = "code";
this.VA_PRODUCTWKWZPDFA_211676.showId= true;
this.VA_PRODUCTWKWZPDFA_211676.name="product";
this.VA_PRODUCTWKWZPDFA_211676.id="VA_PRODUCTWKWZPDFA_211676";
this.VA_PRODUCTWKWZPDFA_211676.colSpan=1;
this.VA_PRODUCTWKWZPDFA_211676.withoutLabel = false;
this.VA_PRODUCTWKWZPDFA_211676.readOnly = ConstantsApi.mode.Query;
this.VA_PRODUCTWKWZPDFA_211676.enabled = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_PRODUCTWKWZPDFA_211676.visible= ConstantsApi.mode.All;
this.VA_CLIENTCODHNEWWJ_288676.label = cobis.translate("LNSPR.LBL_LNSPR_MIEMBRONE_59331");
this.VA_CLIENTCODHNEWWJ_288676.blankOption=true;
this.VA_CLIENTCODHNEWWJ_288676.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_CLIENTCODHNEWWJ_288676.entity = "ProductLineDistribution";
this.VA_CLIENTCODHNEWWJ_288676.attribute = "clientCod";
this.VA_CLIENTCODHNEWWJ_288676.textField = "nameMember";
this.VA_CLIENTCODHNEWWJ_288676.valueField = "codMember";
this.VA_CLIENTCODHNEWWJ_288676.showId= true;
this.VA_CLIENTCODHNEWWJ_288676.name="clientCod";
this.VA_CLIENTCODHNEWWJ_288676.id="VA_CLIENTCODHNEWWJ_288676";
this.VA_CLIENTCODHNEWWJ_288676.colSpan=2;
this.VA_CLIENTCODHNEWWJ_288676.withoutLabel = false;
this.VA_CLIENTCODHNEWWJ_288676.readOnly = ConstantsApi.mode.Query;
this.VA_CLIENTCODHNEWWJ_288676.enabled = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_CLIENTCODHNEWWJ_288676.visible= ConstantsApi.mode.All;
this.VA_CLIENTCODHNEWWJ_288676.required = true;
this.VA_CLIENTCODHNEWWJ_288676.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_CLIENTCODHNEWWJ_288676.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_OPTYPEACPEUXTGS_100676.label = cobis.translate("LNSPR.LBL_LNSPR_TIPOOPERN_51275");
this.VA_OPTYPEACPEUXTGS_100676.blankOption=true;
this.VA_OPTYPEACPEUXTGS_100676.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_OPTYPEACPEUXTGS_100676.entity = "ProductLineDistribution";
this.VA_OPTYPEACPEUXTGS_100676.attribute = "opTypeAc";
this.VA_OPTYPEACPEUXTGS_100676.textField = "description";
this.VA_OPTYPEACPEUXTGS_100676.valueField = "code";
this.VA_OPTYPEACPEUXTGS_100676.showId= true;
this.VA_OPTYPEACPEUXTGS_100676.name="opTypeAc";
this.VA_OPTYPEACPEUXTGS_100676.id="VA_OPTYPEACPEUXTGS_100676";
this.VA_OPTYPEACPEUXTGS_100676.colSpan=1;
this.VA_OPTYPEACPEUXTGS_100676.withoutLabel = false;
this.VA_OPTYPEACPEUXTGS_100676.readOnly = ConstantsApi.mode.Query;
this.VA_OPTYPEACPEUXTGS_100676.enabled = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_OPTYPEACPEUXTGS_100676.visible= ConstantsApi.mode.None;
this.VA_OPTYPEPASINULZZ_450676.label = cobis.translate("LNSPR.LBL_LNSPR_TIPOOPERN_51275");
this.VA_OPTYPEPASINULZZ_450676.blankOption=true;
this.VA_OPTYPEPASINULZZ_450676.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_OPTYPEPASINULZZ_450676.entity = "ProductLineDistribution";
this.VA_OPTYPEPASINULZZ_450676.attribute = "opTypePas";
this.VA_OPTYPEPASINULZZ_450676.textField = "description";
this.VA_OPTYPEPASINULZZ_450676.valueField = "code";
this.VA_OPTYPEPASINULZZ_450676.showId= true;
this.VA_OPTYPEPASINULZZ_450676.name="opTypePas";
this.VA_OPTYPEPASINULZZ_450676.id="VA_OPTYPEPASINULZZ_450676";
this.VA_OPTYPEPASINULZZ_450676.colSpan=1;
this.VA_OPTYPEPASINULZZ_450676.withoutLabel = false;
this.VA_OPTYPEPASINULZZ_450676.readOnly = ConstantsApi.mode.Query;
this.VA_OPTYPEPASINULZZ_450676.enabled = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_OPTYPEPASINULZZ_450676.visible= ConstantsApi.mode.None;
this.VA_AMOUNTCLGEIWQXX_908676.label = cobis.translate("LNSPR.LBL_LNSPR_MONTOEMFX_52083");
this.VA_AMOUNTCLGEIWQXX_908676.entity = "ProductLineDistribution";
this.VA_AMOUNTCLGEIWQXX_908676.attribute = "amount";
this.VA_AMOUNTCLGEIWQXX_908676.textCase= TextCaseOptions.NONE;
this.VA_AMOUNTCLGEIWQXX_908676.format= "c";
this.VA_AMOUNTCLGEIWQXX_908676.name="amount";
this.VA_AMOUNTCLGEIWQXX_908676.id="VA_AMOUNTCLGEIWQXX_908676";
this.VA_AMOUNTCLGEIWQXX_908676.colSpan=1;
this.VA_AMOUNTCLGEIWQXX_908676.withoutLabel = false;
this.VA_AMOUNTCLGEIWQXX_908676.readOnly = ConstantsApi.mode.Query;
this.VA_AMOUNTCLGEIWQXX_908676.enabled = ConstantsApi.mode.All;
this.VA_AMOUNTCLGEIWQXX_908676.visible= ConstantsApi.mode.All;
this.VA_AMOUNTCLGEIWQXX_908676.required = true;
this.VA_AMOUNTCLGEIWQXX_908676.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_AMOUNTCLGEIWQXX_908676.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_CURRENCYIMFFWXD_243676.label = cobis.translate("LNSPR.LBL_LNSPR_MONEDAFCA_83005");
this.VA_CURRENCYIMFFWXD_243676.blankOption=true;
this.VA_CURRENCYIMFFWXD_243676.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_CURRENCYIMFFWXD_243676.entity = "ProductLineDistribution";
this.VA_CURRENCYIMFFWXD_243676.attribute = "currency";
this.VA_CURRENCYIMFFWXD_243676.textField = "value";
this.VA_CURRENCYIMFFWXD_243676.valueField = "code";
this.VA_CURRENCYIMFFWXD_243676.showId= true;
this.VA_CURRENCYIMFFWXD_243676.name="currency";
this.VA_CURRENCYIMFFWXD_243676.id="VA_CURRENCYIMFFWXD_243676";
this.VA_CURRENCYIMFFWXD_243676.colSpan=1;
this.VA_CURRENCYIMFFWXD_243676.withoutLabel = false;
this.VA_CURRENCYIMFFWXD_243676.readOnly = ConstantsApi.mode.Query;
this.VA_CURRENCYIMFFWXD_243676.enabled = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_CURRENCYIMFFWXD_243676.visible= ConstantsApi.mode.All;
this.VA_CURRENCYIMFFWXD_243676.required = true;
this.VA_CURRENCYIMFFWXD_243676.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_CURRENCYIMFFWXD_243676.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_CONTROLSAMOUNTN_330676.id = "VA_CONTROLSAMOUNTN_330676";
this.VA_CONTROLSAMOUNTN_330676.name = "controlsAmount";
this.VA_CONTROLSAMOUNTN_330676.label = cobis.translate("LNSPR.LBL_LNSPR_CONTROLOA_79038");
this.VA_CONTROLSAMOUNTN_330676.entity = "ProductLineDistribution";
this.VA_CONTROLSAMOUNTN_330676.attribute = "controlsAmount";
this.VA_CONTROLSAMOUNTN_330676.colSpan = 1;
this.VA_CONTROLSAMOUNTN_330676.withoutLabel = false;
this.VA_CONTROLSAMOUNTN_330676.readOnly =ConstantsApi.mode.Query;
this.VA_CONTROLSAMOUNTN_330676.enabled = ConstantsApi.mode.All;
this.VA_CONTROLSAMOUNTN_330676.visible= ConstantsApi.mode.All;
this.VA_OBSERVATIONSKUR_930676.label = cobis.translate("LNSPR.LBL_LNSPR_OBSERVACE_16379");
this.VA_OBSERVATIONSKUR_930676.entity = "ProductLineDistribution";
this.VA_OBSERVATIONSKUR_930676.attribute = "observations";
this.VA_OBSERVATIONSKUR_930676.numberLines=5;
this.VA_OBSERVATIONSKUR_930676.maxlength= 2,500;
this.VA_OBSERVATIONSKUR_930676.textCase= TextCaseOptions.UPPER_CASE;
this.VA_OBSERVATIONSKUR_930676.name="observations";
this.VA_OBSERVATIONSKUR_930676.id="VA_OBSERVATIONSKUR_930676";
this.VA_OBSERVATIONSKUR_930676.colSpan=4;
this.VA_OBSERVATIONSKUR_930676.withoutLabel = false;
this.VA_OBSERVATIONSKUR_930676.readOnly = ConstantsApi.mode.Query;
this.VA_OBSERVATIONSKUR_930676.enabled = ConstantsApi.mode.All;
this.VA_OBSERVATIONSKUR_930676.visible= ConstantsApi.mode.All;
this.VA_USEDMINHMVRYCUI_522676.label = cobis.translate("LNSPR.LBL_LOANS_UTILIZAOO_53309");
this.VA_USEDMINHMVRYCUI_522676.entity = "ProductLineDistribution";
this.VA_USEDMINHMVRYCUI_522676.attribute = "used";
this.VA_USEDMINHMVRYCUI_522676.textCase= TextCaseOptions.NONE;
this.VA_USEDMINHMVRYCUI_522676.format= "c";
this.VA_USEDMINHMVRYCUI_522676.name="used";
this.VA_USEDMINHMVRYCUI_522676.id="VA_USEDMINHMVRYCUI_522676";
this.VA_USEDMINHMVRYCUI_522676.colSpan=1;
this.VA_USEDMINHMVRYCUI_522676.withoutLabel = false;
this.VA_USEDMINHMVRYCUI_522676.readOnly = ConstantsApi.mode.Query;
this.VA_USEDMINHMVRYCUI_522676.enabled = ConstantsApi.mode.None;
this.VA_USEDMINHMVRYCUI_522676.visible= ConstantsApi.mode.All;
this.Spacer2771.id = "Spacer2771";
this.Spacer2771.name = "Spacer2771";
this.Spacer2771.colSpan = 1;
this.Spacer2771.visible= ConstantsApi.mode.All;
this.Spacer2264.id = "Spacer2264";
this.Spacer2264.name = "Spacer2264";
this.Spacer2264.colSpan = 1;
this.Spacer2264.visible= ConstantsApi.mode.All;
this.VA_AVAILABLECGSSBD_703676.label = cobis.translate("LNSPR.LBL_LNSPR_DISPONILE_55740");
this.VA_AVAILABLECGSSBD_703676.entity = "ProductLineDistribution";
this.VA_AVAILABLECGSSBD_703676.attribute = "available";
this.VA_AVAILABLECGSSBD_703676.textCase= TextCaseOptions.NONE;
this.VA_AVAILABLECGSSBD_703676.format= "c";
this.VA_AVAILABLECGSSBD_703676.name="available";
this.VA_AVAILABLECGSSBD_703676.id="VA_AVAILABLECGSSBD_703676";
this.VA_AVAILABLECGSSBD_703676.colSpan=1;
this.VA_AVAILABLECGSSBD_703676.withoutLabel = false;
this.VA_AVAILABLECGSSBD_703676.readOnly = ConstantsApi.mode.Query;
this.VA_AVAILABLECGSSBD_703676.enabled = ConstantsApi.mode.None;
this.VA_AVAILABLECGSSBD_703676.visible= ConstantsApi.mode.All;
this.Spacer2148.id = "Spacer2148";
this.Spacer2148.name = "Spacer2148";
this.Spacer2148.colSpan = 1;
this.Spacer2148.visible= ConstantsApi.mode.All;
this.VA_VABUTTONUYPWWXE_933676.id = "VA_VABUTTONUYPWWXE_933676";
this.VA_VABUTTONUYPWWXE_933676.name = "VA_VABUTTONUYPWWXE_933676";
this.VA_VABUTTONUYPWWXE_933676.label = cobis.translate("LNSPR.LBL_LNSPR_GUARDARRI_81055");
this.VA_VABUTTONUYPWWXE_933676.colSpan = 1;
this.VA_VABUTTONUYPWWXE_933676.withoutLabel = false;
this.VA_VABUTTONUYPWWXE_933676.causesValidation=true;
this.VA_VABUTTONUYPWWXE_933676.submitOnEnter=false;
this.VA_VABUTTONUYPWWXE_933676.setFocus=false;
this.VA_VABUTTONUYPWWXE_933676.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONUYPWWXE_933676.visible= ConstantsApi.mode.All;
this.VA_VABUTTONUYPWWXE_933676.attributesGroup = this.G_PRODUCTSOT_849676.attList;
this.VA_VABUTTONDMJEJKM_762676.id = "VA_VABUTTONDMJEJKM_762676";
this.VA_VABUTTONDMJEJKM_762676.name = "VA_VABUTTONDMJEJKM_762676";
this.VA_VABUTTONDMJEJKM_762676.label = cobis.translate("LNSPR.LBL_LNSPR_CANCELARR_70217");
this.VA_VABUTTONDMJEJKM_762676.colSpan = 1;
this.VA_VABUTTONDMJEJKM_762676.withoutLabel = false;
this.VA_VABUTTONDMJEJKM_762676.causesValidation=false;
this.VA_VABUTTONDMJEJKM_762676.submitOnEnter=false;
this.VA_VABUTTONDMJEJKM_762676.setFocus=false;
this.VA_VABUTTONDMJEJKM_762676.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONDMJEJKM_762676.visible= ConstantsApi.mode.All;
this.VA_VABUTTONDMJEJKM_762676.attributesGroup = this.G_PRODUCTSOT_849676.attList;
this.QV_QF17_TGN52.pageSize=5;
this.QV_QF17_TGN52.id='QV_QF17_TGN52';
this.QV_QF17_TGN52.name='QV_QF17_TGN52';
this.QV_QF17_TGN52.pageable=true;
this.QV_QF17_TGN52.sortable=false;
this.QV_QF17_TGN52.resizable=true;
this.QV_QF17_TGN52.scrollable=true
this.QV_QF17_TGN52.confirmRowDeletion=true;
this.QV_QF17_TGN52.exportToExcel=false;
this.QV_QF17_TGN52.exportToPdf=false;
this.QV_QF17_TGN52.height=0;
this.QV_QF17_TGN52.filterableColumns=false;
this.QV_QF17_TGN52.entityName='ProductLineDistributionList';
this.QV_QF17_TGN52.appendRecords=false;
this.QV_QF17_TGN52.rowDetail=false;
this.QV_QF17_TGN52.columnMenu = true;
this.QV_QF17_TGN52.editMode=CommonsConstants.GRID_EDIT_MODE_INLINE;
this.QV_QF17_TGN52.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
this.QV_QF17_TGN52.actions=[ComplexConstants.GRID_ACTION_DELETE];
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_QF17_TGN52.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXGPM_735676",
label : cobis.translate('LNSPR.LBL_LOANS_PRODUCTOO_67575'),
field : 'product',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXGPM_735676',
name :'product',
withoutLabel : true,
attribute : 'product',
entity : 'ProductLineDistributionList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXXWZ_991676",
label : cobis.translate('LNSPR.LBL_LNSPR_MIEMBRONE_59331'),
field : 'clientCod',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXXWZ_991676',
name :'clientCod',
withoutLabel : true,
attribute : 'clientCod',
entity : 'ProductLineDistributionList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXTMQ_302676",
label : cobis.translate('LNSPR.LBL_LNSPR_TIPOOPENA_59322'),
field : 'opType',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXTMQ_302676',
name :'opType',
withoutLabel : true,
attribute : 'opType',
entity : 'ProductLineDistributionList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXWUH_488676",
label : cobis.translate('LNSPR.LBL_LNSPR_MONEDAFCA_83005'),
field : 'descCurrency',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXWUH_488676',
name :'descCurrency',
withoutLabel : true,
attribute : 'descCurrency',
entity : 'ProductLineDistributionList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXFSY_298676",
label : cobis.translate('LNSPR.LBL_LNSPR_MONTOEMFX_52083'),
field : 'amount',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXFSY_298676',
name :'amount',
withoutLabel : true,
attribute : 'amount',
entity : 'ProductLineDistributionList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXGAX_318676",
label : cobis.translate('LNSPR.LBL_LOANS_UTILIZAOO_53309'),
field : 'used',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXGAX_318676',
name :'used',
withoutLabel : true,
attribute : 'used',
entity : 'ProductLineDistributionList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXMJV_319676",
label : cobis.translate('LNSPR.LBL_LNSPR_DISPONILE_55740'),
field : 'available',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXMJV_319676',
name :'available',
withoutLabel : true,
attribute : 'available',
entity : 'ProductLineDistributionList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXJDM_289676",
label : cobis.translate('LNSPR.LBL_LNSPR_CONTROLOA_79038'),
field : 'controlsAmount',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXJDM_289676',
name :'controlsAmount',
withoutLabel : true,
attribute : 'controlsAmount',
entity : 'ProductLineDistributionList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXNPR_928676",
label : cobis.translate('LNSPR.LBL_LNSPR_OBSERVACE_16379'),
field : 'observations',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXNPR_928676',
name :'observations',
withoutLabel : true,
attribute : 'observations',
entity : 'ProductLineDistributionList',
maxlength: 500,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_LNSPRSBSNRATX_181 = this.formBuilder.group({
ProductLineDistribution: this.formBuilder.group({
sequential:[{value: null, disabled: !this.VA_SEQUENTIALRWTZC_418676.visible},CobisDesignerUtil.getValidationFunctions(this.VA_SEQUENTIALRWTZC_418676.validationFunctions!)],
codLine:[{value: null, disabled: !this.VA_CODLINEGMBTNMUY_339676.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CODLINEGMBTNMUY_339676.validationFunctions!)],
product:[{value: null, disabled: !this.VA_PRODUCTWKWZPDFA_211676.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PRODUCTWKWZPDFA_211676.validationFunctions!)],
clientCod:[{value: null, disabled: !this.VA_CLIENTCODHNEWWJ_288676.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CLIENTCODHNEWWJ_288676.validationFunctions!)],
opTypeAc:[{value: null, disabled: !this.VA_OPTYPEACPEUXTGS_100676.visible},CobisDesignerUtil.getValidationFunctions(this.VA_OPTYPEACPEUXTGS_100676.validationFunctions!)],
opTypePas:[{value: null, disabled: !this.VA_OPTYPEPASINULZZ_450676.visible},CobisDesignerUtil.getValidationFunctions(this.VA_OPTYPEPASINULZZ_450676.validationFunctions!)],
amount:[{value: null, disabled: !this.VA_AMOUNTCLGEIWQXX_908676.visible},CobisDesignerUtil.getValidationFunctions(this.VA_AMOUNTCLGEIWQXX_908676.validationFunctions!)],
currency:[{value: null, disabled: !this.VA_CURRENCYIMFFWXD_243676.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CURRENCYIMFFWXD_243676.validationFunctions!)],
controlsAmount:[{value: false, disabled: !this.VA_CONTROLSAMOUNTN_330676.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CONTROLSAMOUNTN_330676.validationFunctions!)],
observations:[{value: null, disabled: !this.VA_OBSERVATIONSKUR_930676.visible},CobisDesignerUtil.getValidationFunctions(this.VA_OBSERVATIONSKUR_930676.validationFunctions!)],
used:[{value: null, disabled: !this.VA_USEDMINHMVRYCUI_522676.visible},CobisDesignerUtil.getValidationFunctions(this.VA_USEDMINHMVRYCUI_522676.validationFunctions!)],
available:[{value: null, disabled: !this.VA_AVAILABLECGSSBD_703676.visible},CobisDesignerUtil.getValidationFunctions(this.VA_AVAILABLECGSSBD_703676.validationFunctions!)],
editionMode:[null],
clientName:[null],
nature:[null],
}
),
ProductLineDistributionList: this.formBuilder.group({
product:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QF17_TGN52.columns,'VA_TEXTINPUTBOXGPM_735676')],
clientName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QF17_TGN52.columns,'VA_TEXTINPUTBOXQDQ_710676')],
clientCod:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QF17_TGN52.columns,'VA_TEXTINPUTBOXXWZ_991676')],
opType:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QF17_TGN52.columns,'VA_TEXTINPUTBOXTMQ_302676')],
codCurrency:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QF17_TGN52.columns,'VA_TEXTINPUTBOXYAX_314676')],
descCurrency:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QF17_TGN52.columns,'VA_TEXTINPUTBOXWUH_488676')],
amount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QF17_TGN52.columns,'VA_TEXTINPUTBOXFSY_298676')],
used:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QF17_TGN52.columns,'VA_TEXTINPUTBOXGAX_318676')],
available:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QF17_TGN52.columns,'VA_TEXTINPUTBOXMJV_319676')],
controlsAmount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QF17_TGN52.columns,'VA_TEXTINPUTBOXJDM_289676')],
observations:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QF17_TGN52.columns,'VA_TEXTINPUTBOXNPR_928676')],
sequential:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_QF17_TGN52.columns,'VA_TEXTINPUTBOXZYV_184676')],
}
),
});
}
}