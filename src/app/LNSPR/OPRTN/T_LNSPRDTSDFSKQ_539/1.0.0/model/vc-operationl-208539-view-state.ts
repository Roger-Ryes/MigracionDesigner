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
public T_LNSPRDTSDFSKQ_539!:FormGroup;
public VC_OPERATIONL_208539:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OPERATINOS_396221 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OPERATINLN_412221 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OPERATINOO_657221 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_YWPR_NOE85: CobisGridModel = new CobisGridModel();
public G_OPERATIOOO_201221 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OPERATIALO_494221 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_VE29_XZB37: CobisGridModel = new CobisGridModel();
public G_OPERATINLA_175221 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OPERATIOOO_148221 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_CODEWKXBYDDSGNQ_399221: CobisTextInputButtonModel = new CobisTextInputButtonModel();
public VA_FULLNAMENVMNPEV_901221: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_ROLEGMHNCTPDKZE_265221: CobisCheckBoxModel = new CobisCheckBoxModel();
public VA_VABUTTONVLCBANL_971221: CobisButtonModel = new CobisButtonModel();
public VA_OPERATIONABVDTC_278221: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_TYPEOPERATIONNN_788221: CobisDropDownListModel = new CobisDropDownListModel();
public VA_MONEYWCCBPJYWVL_470221: CobisDropDownListModel = new CobisDropDownListModel();
public VA_AMOUNTPCRKOKHWA_216221: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_AMOUNTAPPROVEDE_512221: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_FINANCIALDESINN_226221: CobisDropDownListModel = new CobisDropDownListModel();
public VA_ECONOMICACTITIV_812221: CobisDropDownListModel = new CobisDropDownListModel();
public VA_OFFICIALHKVNOOZ_385221: CobisDropDownListModel = new CobisDropDownListModel();
public VA_OFFICELAHOKRIFT_376221: CobisDropDownListModel = new CobisDropDownListModel();
public VA_UBICATIONZGLTDO_878221: CobisDropDownListModel = new CobisDropDownListModel();
public VA_SECTORNYVKRJHJU_797221: CobisDropDownListModel = new CobisDropDownListModel();
public VA_CREATIONDATENDE_311221: CobisDateFieldModel = new CobisDateFieldModel();
public VA_PLAZODESCRIPCNN_983221: CobisDropDownListModel = new CobisDropDownListModel();
public VA_PLAZOZIDUKVMULY_474221: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_FIRSTDUEDATEQLK_849221: CobisDateFieldModel = new CobisDateFieldModel();
public VA_CREDITLINEUOUCM_252221: CobisTextInputButtonModel = new CobisTextInputButtonModel();
public VA_STATEPNKYZHKSQM_913221: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_EXPIRATIONDATET_448221: CobisDateFieldModel = new CobisDateFieldModel();
public Spacer2462: CobisSpacerModel = new CobisSpacerModel();
public Spacer2389: CobisSpacerModel = new CobisSpacerModel();
public VA_SYNDICATEDMLJZC_821221: CobisCheckBoxModel = new CobisCheckBoxModel();
public VA_TYPESYNDICATEEE_795221: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public Spacer2800: CobisSpacerModel = new CobisSpacerModel();
public VA_VABUTTONXCGGMOI_839221: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_OPERATIONL_208539.id="VC_OPERATIONL_208539";
this.VC_OPERATIONL_208539.name="OperationLoansForm";
this.VC_OPERATIONL_208539.colSpan=1;
this.VC_OPERATIONL_208539.columns=1;
this.VC_OPERATIONL_208539.enabled=ConstantsApi.mode.All;
this.G_OPERATINOS_396221.id="G_OPERATINOS_396221";
this.G_OPERATINOS_396221.name="GroupLayout1479";
this.G_OPERATINOS_396221.columns=1;
this.G_OPERATINOS_396221.childrenGroups = ["G_OPERATINLN_412221"];
this.G_OPERATINOS_396221.colSpan=1;
this.G_OPERATINOS_396221.enabled=ConstantsApi.mode.All;
this.G_OPERATINOS_396221.visible=ConstantsApi.mode.All;
this.G_OPERATINLN_412221.id="G_OPERATINLN_412221";
this.G_OPERATINLN_412221.name="Group1504";
this.G_OPERATINLN_412221.columns=12;
this.G_OPERATINLN_412221.labelOrientation="Top";
this.G_OPERATINLN_412221.colSpan=1;
this.G_OPERATINLN_412221.enabled=ConstantsApi.mode.All;
this.G_OPERATINLN_412221.visible=ConstantsApi.mode.All;
this.G_OPERATINLN_412221.attList = ["code","fullName","role"];
this.G_OPERATINOO_657221.id="G_OPERATINOO_657221";
this.G_OPERATINOO_657221.name="Group2254";
this.G_OPERATINOO_657221.columns=1;
this.G_OPERATINOO_657221.labelOrientation="Top";
this.G_OPERATINOO_657221.colSpan=1;
this.G_OPERATINOO_657221.enabled=ConstantsApi.mode.All;
this.G_OPERATINOO_657221.visible=ConstantsApi.mode.All;
this.G_OPERATINOO_657221.attList = ["role","fullName","idNumber","code","score","type","description"];
this.G_OPERATIOOO_201221.id="G_OPERATIOOO_201221";
this.G_OPERATIOOO_201221.name="Group1697";
this.G_OPERATIOOO_201221.columns=12;
this.G_OPERATIOOO_201221.labelOrientation="Top";
this.G_OPERATIOOO_201221.colSpan=1;
this.G_OPERATIOOO_201221.enabled=ConstantsApi.mode.All;
this.G_OPERATIOOO_201221.visible=ConstantsApi.mode.All;
this.G_OPERATIOOO_201221.attList = ["operation","typeOperation","money","amount","amountApproved","financialDestination","economicActivity","official","office","ubication","sector","creationDate","plazoDescripcion","plazo","firstDueDate","creditLine","state","expirationDate","syndicated","typeSyndicated"];
this.G_OPERATIALO_494221.id="G_OPERATIALO_494221";
this.G_OPERATIALO_494221.name="Group2259";
this.G_OPERATIALO_494221.columns=1;
this.G_OPERATIALO_494221.labelOrientation="Top";
this.G_OPERATIALO_494221.colSpan=1;
this.G_OPERATIALO_494221.enabled=ConstantsApi.mode.All;
this.G_OPERATIALO_494221.visible=ConstantsApi.mode.All;
this.G_OPERATIALO_494221.attList = ["codParticipants","nameParticipants","percentageParticipants","roleP","mail","amountParticipants"];
this.G_OPERATINLA_175221.id="G_OPERATINLA_175221";
this.G_OPERATINLA_175221.name="GroupLayout2574";
this.G_OPERATINLA_175221.columns=1;
this.G_OPERATINLA_175221.childrenGroups = ["G_OPERATIOOO_148221"];
this.G_OPERATINLA_175221.colSpan=1;
this.G_OPERATINLA_175221.enabled=ConstantsApi.mode.All;
this.G_OPERATINLA_175221.visible=ConstantsApi.mode.All;
this.G_OPERATIOOO_148221.id="G_OPERATIOOO_148221";
this.G_OPERATIOOO_148221.name="Group2995";
this.G_OPERATIOOO_148221.columns=3;
this.G_OPERATIOOO_148221.labelOrientation="Top";
this.G_OPERATIOOO_148221.colSpan=1;
this.G_OPERATIOOO_148221.enabled=ConstantsApi.mode.All;
this.G_OPERATIOOO_148221.visible=ConstantsApi.mode.All;
this.VA_CODEWKXBYDDSGNQ_399221.id = "VA_CODEWKXBYDDSGNQ_399221";
this.VA_CODEWKXBYDDSGNQ_399221.name = "code";
this.VA_CODEWKXBYDDSGNQ_399221.label = cobis.translate("LNSPR.LBL_LNSPR_CODCLIETT_20856");
this.VA_CODEWKXBYDDSGNQ_399221.entity = "OperationCRUDFormEntity";
this.VA_CODEWKXBYDDSGNQ_399221.attribute = "code";
this.VA_CODEWKXBYDDSGNQ_399221.colSpan = 2;
this.VA_CODEWKXBYDDSGNQ_399221.format = "";
this.VA_CODEWKXBYDDSGNQ_399221.readOnly = ConstantsApi.mode.Query;
this.VA_CODEWKXBYDDSGNQ_399221.enabled = ConstantsApi.mode.All;
this.VA_CODEWKXBYDDSGNQ_399221.visible= ConstantsApi.mode.All;
this.VA_CODEWKXBYDDSGNQ_399221.inputRestrictionValidators = { onlyNumbers: true};
this.VA_FULLNAMENVMNPEV_901221.label = cobis.translate("LNSPR.LBL_LNSPR_NOMBRECNI_63306");
this.VA_FULLNAMENVMNPEV_901221.entity = "OperationCRUDFormEntity";
this.VA_FULLNAMENVMNPEV_901221.attribute = "fullName";
this.VA_FULLNAMENVMNPEV_901221.maxlength= 255;
this.VA_FULLNAMENVMNPEV_901221.textCase= TextCaseOptions.UPPER_CASE;
this.VA_FULLNAMENVMNPEV_901221.name="fullName";
this.VA_FULLNAMENVMNPEV_901221.id="VA_FULLNAMENVMNPEV_901221";
this.VA_FULLNAMENVMNPEV_901221.colSpan=6;
this.VA_FULLNAMENVMNPEV_901221.withoutLabel = false;
this.VA_FULLNAMENVMNPEV_901221.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_FULLNAMENVMNPEV_901221.enabled = ConstantsApi.mode.None;
this.VA_FULLNAMENVMNPEV_901221.visible= ConstantsApi.mode.All;
this.VA_ROLEGMHNCTPDKZE_265221.id = "VA_ROLEGMHNCTPDKZE_265221";
this.VA_ROLEGMHNCTPDKZE_265221.name = "role";
this.VA_ROLEGMHNCTPDKZE_265221.label = cobis.translate("LNSPR.LBL_LNSPR_DEUDORPRP_47896");
this.VA_ROLEGMHNCTPDKZE_265221.entity = "OperationCRUDFormEntity";
this.VA_ROLEGMHNCTPDKZE_265221.attribute = "role";
this.VA_ROLEGMHNCTPDKZE_265221.colSpan = 2;
this.VA_ROLEGMHNCTPDKZE_265221.withoutLabel = false;
this.VA_ROLEGMHNCTPDKZE_265221.readOnly =ConstantsApi.mode.Query;
this.VA_ROLEGMHNCTPDKZE_265221.enabled = ConstantsApi.mode.All;
this.VA_ROLEGMHNCTPDKZE_265221.visible= ConstantsApi.mode.All;
this.VA_VABUTTONVLCBANL_971221.id = "VA_VABUTTONVLCBANL_971221";
this.VA_VABUTTONVLCBANL_971221.name = "VA_VABUTTONVLCBANL_971221";
this.VA_VABUTTONVLCBANL_971221.label = cobis.translate("LNSPR.LBL_LOANS_AADIRWOQO_72396");
this.VA_VABUTTONVLCBANL_971221.colSpan = 2;
this.VA_VABUTTONVLCBANL_971221.withoutLabel = false;
this.VA_VABUTTONVLCBANL_971221.causesValidation=false;
this.VA_VABUTTONVLCBANL_971221.submitOnEnter=false;
this.VA_VABUTTONVLCBANL_971221.setFocus=false;
this.VA_VABUTTONVLCBANL_971221.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONVLCBANL_971221.visible= ConstantsApi.mode.All;
this.QV_YWPR_NOE85.id='QV_YWPR_NOE85';
this.QV_YWPR_NOE85.name='QV_YWPR_NOE85';
this.QV_YWPR_NOE85.pageable=false;
this.QV_YWPR_NOE85.sortable=false;
this.QV_YWPR_NOE85.resizable=true;
this.QV_YWPR_NOE85.scrollable=true
this.QV_YWPR_NOE85.confirmRowDeletion=false;
this.QV_YWPR_NOE85.exportToExcel=false;
this.QV_YWPR_NOE85.exportToPdf=false;
this.QV_YWPR_NOE85.height=0;
this.QV_YWPR_NOE85.filterableColumns=false;
this.QV_YWPR_NOE85.entityName='DebtorEntity';
this.QV_YWPR_NOE85.appendRecords=false;
this.QV_YWPR_NOE85.rowDetail=false;
this.QV_YWPR_NOE85.columnMenu = true;
this.QV_YWPR_NOE85.editMode=CommonsConstants.GRID_EDIT_MODE_INLINE;
this.QV_YWPR_NOE85.modeSelection=ComplexConstants.GRID_MODE_SELECTION_NONE;
this.QV_YWPR_NOE85.actions=[ComplexConstants.GRID_ACTION_DELETE];
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_YWPR_NOE85.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXZUG_289221",
label : cobis.translate('LNSPR.LBL_LOANS_ROLNDGMQN_51274'),
field : 'role',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXZUG_289221',
name :'role',
withoutLabel : true,
attribute : 'role',
entity : 'DebtorEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXQZW_792221",
label : cobis.translate('LNSPR.LBL_LOANS_NOMBRETPH_86356'),
field : 'fullName',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXQZW_792221',
name :'fullName',
withoutLabel : true,
attribute : 'fullName',
entity : 'DebtorEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXKNN_822221",
label : cobis.translate('LNSPR.LBL_LNSPR_CEDULARUU_47659'),
field : 'idNumber',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXKNN_822221',
name :'idNumber',
withoutLabel : true,
attribute : 'idNumber',
entity : 'DebtorEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXMWJ_600221",
label : cobis.translate('LNSPR.LBL_LNSPR_CODIGOPYS_88202'),
field : 'code',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXMWJ_600221',
name :'code',
withoutLabel : true,
attribute : 'code',
entity : 'DebtorEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXPQA_963221",
label : cobis.translate('LNSPR.LBL_LNSPR_CALIFICIO_82060'),
field : 'score',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXPQA_963221',
name :'score',
withoutLabel : true,
attribute : 'score',
entity : 'DebtorEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXQYS_536221",
label : cobis.translate('LNSPR.LBL_LNSPR_TIPOLDSKB_46090'),
field : 'type',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXQYS_536221',
name :'type',
withoutLabel : true,
attribute : 'type',
entity : 'DebtorEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXARW_788221",
label : cobis.translate('LNSPR.LBL_LNSPR_DESCRIPIN_18186'),
field : 'description',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXARW_788221',
name :'description',
withoutLabel : true,
attribute : 'description',
entity : 'DebtorEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.VA_OPERATIONABVDTC_278221.label = cobis.translate("LNSPR.LBL_LNSPR_OPERACINN_33130");
this.VA_OPERATIONABVDTC_278221.entity = "OperationEntity";
this.VA_OPERATIONABVDTC_278221.attribute = "operation";
this.VA_OPERATIONABVDTC_278221.textCase= TextCaseOptions.NONE;
this.VA_OPERATIONABVDTC_278221.name="operation";
this.VA_OPERATIONABVDTC_278221.id="VA_OPERATIONABVDTC_278221";
this.VA_OPERATIONABVDTC_278221.colSpan=4;
this.VA_OPERATIONABVDTC_278221.withoutLabel = false;
this.VA_OPERATIONABVDTC_278221.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_OPERATIONABVDTC_278221.enabled = ConstantsApi.mode.All;
this.VA_OPERATIONABVDTC_278221.visible= ConstantsApi.mode.All;
this.VA_TYPEOPERATIONNN_788221.label = cobis.translate("LNSPR.LBL_LNSPR_TIPOOPERN_51275");
this.VA_TYPEOPERATIONNN_788221.blankOption=true;
this.VA_TYPEOPERATIONNN_788221.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_TYPEOPERATIONNN_788221.entity = "OperationEntity";
this.VA_TYPEOPERATIONNN_788221.attribute = "typeOperation";
this.VA_TYPEOPERATIONNN_788221.textField = "value";
this.VA_TYPEOPERATIONNN_788221.valueField = "code";
this.VA_TYPEOPERATIONNN_788221.showId= true;
this.VA_TYPEOPERATIONNN_788221.name="typeOperation";
this.VA_TYPEOPERATIONNN_788221.id="VA_TYPEOPERATIONNN_788221";
this.VA_TYPEOPERATIONNN_788221.colSpan=4;
this.VA_TYPEOPERATIONNN_788221.withoutLabel = false;
this.VA_TYPEOPERATIONNN_788221.readOnly = ConstantsApi.mode.Query;
this.VA_TYPEOPERATIONNN_788221.enabled = ConstantsApi.mode.All;
this.VA_TYPEOPERATIONNN_788221.visible= ConstantsApi.mode.All;
this.VA_TYPEOPERATIONNN_788221.required = true;
this.VA_TYPEOPERATIONNN_788221.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_TYPEOPERATIONNN_788221.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_MONEYWCCBPJYWVL_470221.label = cobis.translate("LNSPR.LBL_LNSPR_MONEDAFCA_83005");
this.VA_MONEYWCCBPJYWVL_470221.blankOption=true;
this.VA_MONEYWCCBPJYWVL_470221.entity = "OperationEntity";
this.VA_MONEYWCCBPJYWVL_470221.attribute = "money";
this.VA_MONEYWCCBPJYWVL_470221.textField = "value";
this.VA_MONEYWCCBPJYWVL_470221.valueField = "code";
this.VA_MONEYWCCBPJYWVL_470221.showId= true;
this.VA_MONEYWCCBPJYWVL_470221.name="money";
this.VA_MONEYWCCBPJYWVL_470221.id="VA_MONEYWCCBPJYWVL_470221";
this.VA_MONEYWCCBPJYWVL_470221.colSpan=4;
this.VA_MONEYWCCBPJYWVL_470221.withoutLabel = false;
this.VA_MONEYWCCBPJYWVL_470221.readOnly = ConstantsApi.mode.Query;
this.VA_MONEYWCCBPJYWVL_470221.enabled = ConstantsApi.mode.All;
this.VA_MONEYWCCBPJYWVL_470221.visible= ConstantsApi.mode.All;
this.VA_MONEYWCCBPJYWVL_470221.required = true;
this.VA_MONEYWCCBPJYWVL_470221.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_MONEYWCCBPJYWVL_470221.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_AMOUNTPCRKOKHWA_216221.label = cobis.translate("LNSPR.LBL_LNSPR_MONTOEMFX_52083");
this.VA_AMOUNTPCRKOKHWA_216221.entity = "OperationEntity";
this.VA_AMOUNTPCRKOKHWA_216221.attribute = "amount";
this.VA_AMOUNTPCRKOKHWA_216221.maxlength= 15;
this.VA_AMOUNTPCRKOKHWA_216221.textCase= TextCaseOptions.NONE;
this.VA_AMOUNTPCRKOKHWA_216221.isCustomValidated=true;
this.VA_AMOUNTPCRKOKHWA_216221.format= "c";
this.VA_AMOUNTPCRKOKHWA_216221.name="amount";
this.VA_AMOUNTPCRKOKHWA_216221.id="VA_AMOUNTPCRKOKHWA_216221";
this.VA_AMOUNTPCRKOKHWA_216221.colSpan=4;
this.VA_AMOUNTPCRKOKHWA_216221.withoutLabel = false;
this.VA_AMOUNTPCRKOKHWA_216221.readOnly = ConstantsApi.mode.Query;
this.VA_AMOUNTPCRKOKHWA_216221.enabled = ConstantsApi.mode.All;
this.VA_AMOUNTPCRKOKHWA_216221.visible= ConstantsApi.mode.All;
this.VA_AMOUNTPCRKOKHWA_216221.required = true;
this.VA_AMOUNTPCRKOKHWA_216221.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('0','522337203685477')],[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_AMOUNTPCRKOKHWA_216221.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696'),valueRange: cobis.translate('LNSPR.MSG_LNSPR_CANTIDARO_19894')
};
this.VA_AMOUNTAPPROVEDE_512221.label = cobis.translate("LNSPR.LBL_LNSPR_MONTOAPOB_87983");
this.VA_AMOUNTAPPROVEDE_512221.entity = "OperationEntity";
this.VA_AMOUNTAPPROVEDE_512221.attribute = "amountApproved";
this.VA_AMOUNTAPPROVEDE_512221.maxlength= 15;
this.VA_AMOUNTAPPROVEDE_512221.textCase= TextCaseOptions.NONE;
this.VA_AMOUNTAPPROVEDE_512221.format= "c";
this.VA_AMOUNTAPPROVEDE_512221.name="amountApproved";
this.VA_AMOUNTAPPROVEDE_512221.id="VA_AMOUNTAPPROVEDE_512221";
this.VA_AMOUNTAPPROVEDE_512221.colSpan=4;
this.VA_AMOUNTAPPROVEDE_512221.withoutLabel = false;
this.VA_AMOUNTAPPROVEDE_512221.readOnly = ConstantsApi.mode.Query;
this.VA_AMOUNTAPPROVEDE_512221.enabled = ConstantsApi.mode.All;
this.VA_AMOUNTAPPROVEDE_512221.visible= ConstantsApi.mode.All;
this.VA_AMOUNTAPPROVEDE_512221.required = true;
this.VA_AMOUNTAPPROVEDE_512221.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('0','522337203685477')],[VisualValidationTypeEnum.CompareTo,CustomValidators.controlCompare('amountApproved','amount',CustomValidatorOperator.GREATER_THAN_OR_EQUAL)],[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_AMOUNTAPPROVEDE_512221.messagesValidations = {
valueRange: cobis.translate('LNSPR.MSG_LNSPR_CANTIDARO_19894'),required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696'),controlCompare: cobis.translate('LNSPR.MSG_LNSPR_MONTOAPUB_34754')
};
this.VA_FINANCIALDESINN_226221.label = cobis.translate("LNSPR.LBL_LNSPR_DESTINOFC_88919");
this.VA_FINANCIALDESINN_226221.blankOption=true;
this.VA_FINANCIALDESINN_226221.entity = "OperationEntity";
this.VA_FINANCIALDESINN_226221.attribute = "financialDestination";
this.VA_FINANCIALDESINN_226221.textField = "value";
this.VA_FINANCIALDESINN_226221.valueField = "code";
this.VA_FINANCIALDESINN_226221.showId= true;
this.VA_FINANCIALDESINN_226221.name="financialDestination";
this.VA_FINANCIALDESINN_226221.id="VA_FINANCIALDESINN_226221";
this.VA_FINANCIALDESINN_226221.colSpan=4;
this.VA_FINANCIALDESINN_226221.withoutLabel = false;
this.VA_FINANCIALDESINN_226221.readOnly = ConstantsApi.mode.Query;
this.VA_FINANCIALDESINN_226221.enabled = ConstantsApi.mode.All;
this.VA_FINANCIALDESINN_226221.visible= ConstantsApi.mode.All;
this.VA_FINANCIALDESINN_226221.required = true;
this.VA_FINANCIALDESINN_226221.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_FINANCIALDESINN_226221.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_ECONOMICACTITIV_812221.label = cobis.translate("LNSPR.LBL_LNSPR_DESTINONN_50314");
this.VA_ECONOMICACTITIV_812221.blankOption=true;
this.VA_ECONOMICACTITIV_812221.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_ECONOMICACTITIV_812221.entity = "OperationEntity";
this.VA_ECONOMICACTITIV_812221.attribute = "economicActivity";
this.VA_ECONOMICACTITIV_812221.textField = "value";
this.VA_ECONOMICACTITIV_812221.valueField = "code";
this.VA_ECONOMICACTITIV_812221.showId= true;
this.VA_ECONOMICACTITIV_812221.name="economicActivity";
this.VA_ECONOMICACTITIV_812221.id="VA_ECONOMICACTITIV_812221";
this.VA_ECONOMICACTITIV_812221.colSpan=4;
this.VA_ECONOMICACTITIV_812221.withoutLabel = false;
this.VA_ECONOMICACTITIV_812221.readOnly = ConstantsApi.mode.Query;
this.VA_ECONOMICACTITIV_812221.enabled = ConstantsApi.mode.All;
this.VA_ECONOMICACTITIV_812221.visible= ConstantsApi.mode.All;
this.VA_ECONOMICACTITIV_812221.required = true;
this.VA_ECONOMICACTITIV_812221.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_ECONOMICACTITIV_812221.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LNSPR_CAMPOREIQ_59717')
};
this.VA_OFFICIALHKVNOOZ_385221.label = cobis.translate("LNSPR.LBL_LNSPR_OFICIALCI_17854");
this.VA_OFFICIALHKVNOOZ_385221.blankOption=true;
this.VA_OFFICIALHKVNOOZ_385221.entity = "OperationEntity";
this.VA_OFFICIALHKVNOOZ_385221.attribute = "official";
this.VA_OFFICIALHKVNOOZ_385221.textField = "value";
this.VA_OFFICIALHKVNOOZ_385221.valueField = "code";
this.VA_OFFICIALHKVNOOZ_385221.showId= true;
this.VA_OFFICIALHKVNOOZ_385221.name="official";
this.VA_OFFICIALHKVNOOZ_385221.id="VA_OFFICIALHKVNOOZ_385221";
this.VA_OFFICIALHKVNOOZ_385221.colSpan=4;
this.VA_OFFICIALHKVNOOZ_385221.withoutLabel = false;
this.VA_OFFICIALHKVNOOZ_385221.readOnly = ConstantsApi.mode.Query;
this.VA_OFFICIALHKVNOOZ_385221.enabled = ConstantsApi.mode.All;
this.VA_OFFICIALHKVNOOZ_385221.visible= ConstantsApi.mode.All;
this.VA_OFFICIALHKVNOOZ_385221.required = true;
this.VA_OFFICIALHKVNOOZ_385221.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_OFFICIALHKVNOOZ_385221.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_OFFICELAHOKRIFT_376221.label = cobis.translate("LNSPR.LBL_LNSPR_OFICINAGV_33565");
this.VA_OFFICELAHOKRIFT_376221.blankOption=true;
this.VA_OFFICELAHOKRIFT_376221.entity = "OperationEntity";
this.VA_OFFICELAHOKRIFT_376221.attribute = "office";
this.VA_OFFICELAHOKRIFT_376221.textField = "value";
this.VA_OFFICELAHOKRIFT_376221.valueField = "code";
this.VA_OFFICELAHOKRIFT_376221.showId= true;
this.VA_OFFICELAHOKRIFT_376221.name="office";
this.VA_OFFICELAHOKRIFT_376221.id="VA_OFFICELAHOKRIFT_376221";
this.VA_OFFICELAHOKRIFT_376221.colSpan=4;
this.VA_OFFICELAHOKRIFT_376221.withoutLabel = false;
this.VA_OFFICELAHOKRIFT_376221.readOnly = ConstantsApi.mode.Query;
this.VA_OFFICELAHOKRIFT_376221.enabled = ConstantsApi.mode.All;
this.VA_OFFICELAHOKRIFT_376221.visible= ConstantsApi.mode.All;
this.VA_OFFICELAHOKRIFT_376221.required = true;
this.VA_OFFICELAHOKRIFT_376221.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_OFFICELAHOKRIFT_376221.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_UBICATIONZGLTDO_878221.label = cobis.translate("LNSPR.LBL_LNSPR_UBICACINN_15086");
this.VA_UBICATIONZGLTDO_878221.blankOption=true;
this.VA_UBICATIONZGLTDO_878221.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_UBICATIONZGLTDO_878221.entity = "OperationEntity";
this.VA_UBICATIONZGLTDO_878221.attribute = "ubication";
this.VA_UBICATIONZGLTDO_878221.textField = "value";
this.VA_UBICATIONZGLTDO_878221.valueField = "code";
this.VA_UBICATIONZGLTDO_878221.showId= true;
this.VA_UBICATIONZGLTDO_878221.name="ubication";
this.VA_UBICATIONZGLTDO_878221.id="VA_UBICATIONZGLTDO_878221";
this.VA_UBICATIONZGLTDO_878221.colSpan=4;
this.VA_UBICATIONZGLTDO_878221.withoutLabel = false;
this.VA_UBICATIONZGLTDO_878221.readOnly = ConstantsApi.mode.Query;
this.VA_UBICATIONZGLTDO_878221.enabled = ConstantsApi.mode.All;
this.VA_UBICATIONZGLTDO_878221.visible= ConstantsApi.mode.All;
this.VA_UBICATIONZGLTDO_878221.required = true;
this.VA_UBICATIONZGLTDO_878221.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_UBICATIONZGLTDO_878221.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_SECTORNYVKRJHJU_797221.label = cobis.translate("LNSPR.LBL_LOANS_SECTORQEZ_42002");
this.VA_SECTORNYVKRJHJU_797221.blankOption=true;
this.VA_SECTORNYVKRJHJU_797221.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_SECTORNYVKRJHJU_797221.entity = "OperationEntity";
this.VA_SECTORNYVKRJHJU_797221.attribute = "sector";
this.VA_SECTORNYVKRJHJU_797221.textField = "value";
this.VA_SECTORNYVKRJHJU_797221.valueField = "code";
this.VA_SECTORNYVKRJHJU_797221.showId= true;
this.VA_SECTORNYVKRJHJU_797221.name="sector";
this.VA_SECTORNYVKRJHJU_797221.id="VA_SECTORNYVKRJHJU_797221";
this.VA_SECTORNYVKRJHJU_797221.colSpan=4;
this.VA_SECTORNYVKRJHJU_797221.withoutLabel = false;
this.VA_SECTORNYVKRJHJU_797221.readOnly = ConstantsApi.mode.Query;
this.VA_SECTORNYVKRJHJU_797221.enabled = ConstantsApi.mode.All;
this.VA_SECTORNYVKRJHJU_797221.visible= ConstantsApi.mode.All;
this.VA_CREATIONDATENDE_311221.label = cobis.translate("LNSPR.LBL_LOANS_FECHACREN_63456");
this.VA_CREATIONDATENDE_311221.entity = "OperationEntity";
this.VA_CREATIONDATENDE_311221.attribute = "creationDate";
this.VA_CREATIONDATENDE_311221.name="creationDate";
this.VA_CREATIONDATENDE_311221.id="VA_CREATIONDATENDE_311221";
this.VA_CREATIONDATENDE_311221.colSpan=4;
this.VA_CREATIONDATENDE_311221.withoutLabel = false;
this.VA_CREATIONDATENDE_311221.readOnly = ConstantsApi.mode.Query;
this.VA_CREATIONDATENDE_311221.enabled = ConstantsApi.mode.All;
this.VA_CREATIONDATENDE_311221.visible= ConstantsApi.mode.All;
this.VA_CREATIONDATENDE_311221.required = true;
this.VA_CREATIONDATENDE_311221.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_CREATIONDATENDE_311221.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_PLAZODESCRIPCNN_983221.label = cobis.translate("LNSPR.LBL_LNSPR_TIPOPLAOZ_41477");
this.VA_PLAZODESCRIPCNN_983221.blankOption=true;
this.VA_PLAZODESCRIPCNN_983221.entity = "OperationEntity";
this.VA_PLAZODESCRIPCNN_983221.attribute = "plazoDescripcion";
this.VA_PLAZODESCRIPCNN_983221.textField = "value";
this.VA_PLAZODESCRIPCNN_983221.valueField = "code";
this.VA_PLAZODESCRIPCNN_983221.showId= true;
this.VA_PLAZODESCRIPCNN_983221.name="plazoDescripcion";
this.VA_PLAZODESCRIPCNN_983221.id="VA_PLAZODESCRIPCNN_983221";
this.VA_PLAZODESCRIPCNN_983221.colSpan=4;
this.VA_PLAZODESCRIPCNN_983221.withoutLabel = false;
this.VA_PLAZODESCRIPCNN_983221.readOnly = ConstantsApi.mode.Query;
this.VA_PLAZODESCRIPCNN_983221.enabled = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_PLAZODESCRIPCNN_983221.visible= ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_PLAZODESCRIPCNN_983221.required = true;
this.VA_PLAZODESCRIPCNN_983221.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_PLAZODESCRIPCNN_983221.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_PLAZOZIDUKVMULY_474221.label = cobis.translate("LNSPR.LBL_LNSPR_PLAZOYJVK_49555");
this.VA_PLAZOZIDUKVMULY_474221.entity = "OperationEntity";
this.VA_PLAZOZIDUKVMULY_474221.attribute = "plazo";
this.VA_PLAZOZIDUKVMULY_474221.textCase= TextCaseOptions.NONE;
this.VA_PLAZOZIDUKVMULY_474221.format= "n0";
this.VA_PLAZOZIDUKVMULY_474221.name="plazo";
this.VA_PLAZOZIDUKVMULY_474221.id="VA_PLAZOZIDUKVMULY_474221";
this.VA_PLAZOZIDUKVMULY_474221.colSpan=4;
this.VA_PLAZOZIDUKVMULY_474221.withoutLabel = false;
this.VA_PLAZOZIDUKVMULY_474221.readOnly = ConstantsApi.mode.Query;
this.VA_PLAZOZIDUKVMULY_474221.enabled = ConstantsApi.mode.All;
this.VA_PLAZOZIDUKVMULY_474221.visible= ConstantsApi.mode.All;
this.VA_PLAZOZIDUKVMULY_474221.inputRestrictionValidators = { onlyNumbers: true};
this.VA_PLAZOZIDUKVMULY_474221.required = true;
this.VA_PLAZOZIDUKVMULY_474221.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_PLAZOZIDUKVMULY_474221.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_FIRSTDUEDATEQLK_849221.label = cobis.translate("LNSPR.LBL_LNSPR_FECHA1ETV_13102");
this.VA_FIRSTDUEDATEQLK_849221.entity = "OperationEntity";
this.VA_FIRSTDUEDATEQLK_849221.attribute = "firstDueDate";
this.VA_FIRSTDUEDATEQLK_849221.name="firstDueDate";
this.VA_FIRSTDUEDATEQLK_849221.id="VA_FIRSTDUEDATEQLK_849221";
this.VA_FIRSTDUEDATEQLK_849221.colSpan=4;
this.VA_FIRSTDUEDATEQLK_849221.withoutLabel = false;
this.VA_FIRSTDUEDATEQLK_849221.readOnly = ConstantsApi.mode.Query;
this.VA_FIRSTDUEDATEQLK_849221.enabled = ConstantsApi.mode.All;
this.VA_FIRSTDUEDATEQLK_849221.visible= ConstantsApi.mode.All;
this.VA_CREDITLINEUOUCM_252221.id = "VA_CREDITLINEUOUCM_252221";
this.VA_CREDITLINEUOUCM_252221.name = "creditLine";
this.VA_CREDITLINEUOUCM_252221.label = cobis.translate("LNSPR.LBL_LNSPR_LNEACRDOI_38962");
this.VA_CREDITLINEUOUCM_252221.entity = "OperationEntity";
this.VA_CREDITLINEUOUCM_252221.attribute = "creditLine";
this.VA_CREDITLINEUOUCM_252221.colSpan = 4;
this.VA_CREDITLINEUOUCM_252221.format = "";
this.VA_CREDITLINEUOUCM_252221.maxlength= 24;
this.VA_CREDITLINEUOUCM_252221.readOnly = ConstantsApi.mode.Query;
this.VA_CREDITLINEUOUCM_252221.enabled = ConstantsApi.mode.All;
this.VA_CREDITLINEUOUCM_252221.visible= ConstantsApi.mode.All;
this.VA_STATEPNKYZHKSQM_913221.label = cobis.translate("LNSPR.LBL_LNSPR_ESTADOEAI_33340");
this.VA_STATEPNKYZHKSQM_913221.entity = "OperationEntity";
this.VA_STATEPNKYZHKSQM_913221.attribute = "state";
this.VA_STATEPNKYZHKSQM_913221.textCase= TextCaseOptions.NONE;
this.VA_STATEPNKYZHKSQM_913221.name="state";
this.VA_STATEPNKYZHKSQM_913221.id="VA_STATEPNKYZHKSQM_913221";
this.VA_STATEPNKYZHKSQM_913221.colSpan=4;
this.VA_STATEPNKYZHKSQM_913221.withoutLabel = false;
this.VA_STATEPNKYZHKSQM_913221.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_STATEPNKYZHKSQM_913221.enabled = ConstantsApi.mode.All;
this.VA_STATEPNKYZHKSQM_913221.visible= ConstantsApi.mode.All;
this.VA_EXPIRATIONDATET_448221.label = cobis.translate("LNSPR.LBL_LOANS_FECHAVENI_35637");
this.VA_EXPIRATIONDATET_448221.entity = "OperationEntity";
this.VA_EXPIRATIONDATET_448221.attribute = "expirationDate";
this.VA_EXPIRATIONDATET_448221.name="expirationDate";
this.VA_EXPIRATIONDATET_448221.id="VA_EXPIRATIONDATET_448221";
this.VA_EXPIRATIONDATET_448221.colSpan=4;
this.VA_EXPIRATIONDATET_448221.withoutLabel = false;
this.VA_EXPIRATIONDATET_448221.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_EXPIRATIONDATET_448221.enabled = ConstantsApi.mode.All;
this.VA_EXPIRATIONDATET_448221.visible= ConstantsApi.mode.All;
this.Spacer2462.id = "Spacer2462";
this.Spacer2462.name = "Spacer2462";
this.Spacer2462.colSpan = 4;
this.Spacer2462.visible= ConstantsApi.mode.All;
this.Spacer2389.id = "Spacer2389";
this.Spacer2389.name = "Spacer2389";
this.Spacer2389.colSpan = 4;
this.Spacer2389.visible= ConstantsApi.mode.All;
this.VA_SYNDICATEDMLJZC_821221.id = "VA_SYNDICATEDMLJZC_821221";
this.VA_SYNDICATEDMLJZC_821221.name = "syndicated";
this.VA_SYNDICATEDMLJZC_821221.label = cobis.translate("LNSPR.LBL_LNSPR_SINDICADO_26170");
this.VA_SYNDICATEDMLJZC_821221.entity = "OperationEntity";
this.VA_SYNDICATEDMLJZC_821221.attribute = "syndicated";
this.VA_SYNDICATEDMLJZC_821221.colSpan = 2;
this.VA_SYNDICATEDMLJZC_821221.withoutLabel = false;
this.VA_SYNDICATEDMLJZC_821221.readOnly =ConstantsApi.mode.Query;
this.VA_SYNDICATEDMLJZC_821221.enabled = ConstantsApi.mode.All;
this.VA_SYNDICATEDMLJZC_821221.visible= ConstantsApi.mode.All;
this.VA_TYPESYNDICATEEE_795221.id = "VA_TYPESYNDICATEEE_795221";
this.VA_TYPESYNDICATEEE_795221.name = "typeSyndicated";
this.VA_TYPESYNDICATEEE_795221.attribute = "typeSyndicated";
this.VA_TYPESYNDICATEEE_795221.label = cobis.translate("LNSPR.LBL_LNSPR_TIPOSINCI_73214");
this.VA_TYPESYNDICATEEE_795221.colSpan = 2;
this.VA_TYPESYNDICATEEE_795221.withoutLabel = false;
this.VA_TYPESYNDICATEEE_795221.readOnly = ConstantsApi.mode.Query;
this.VA_TYPESYNDICATEEE_795221.entity = "OperationEntity";
this.VA_TYPESYNDICATEEE_795221.enabled = ConstantsApi.mode.All;
this.VA_TYPESYNDICATEEE_795221.visible= ConstantsApi.mode.All;
this.VA_TYPESYNDICATEEE_795221.textField = "value";
this.VA_TYPESYNDICATEEE_795221.valueField = "code";
this.QV_VE29_XZB37.id='QV_VE29_XZB37';
this.QV_VE29_XZB37.name='QV_VE29_XZB37';
this.QV_VE29_XZB37.pageable=false;
this.QV_VE29_XZB37.sortable=false;
this.QV_VE29_XZB37.resizable=true;
this.QV_VE29_XZB37.scrollable=true
this.QV_VE29_XZB37.confirmRowDeletion=false;
this.QV_VE29_XZB37.exportToExcel=false;
this.QV_VE29_XZB37.exportToPdf=false;
this.QV_VE29_XZB37.height=0;
this.QV_VE29_XZB37.filterableColumns=false;
this.QV_VE29_XZB37.entityName='SyndicatedList';
this.QV_VE29_XZB37.appendRecords=false;
this.QV_VE29_XZB37.rowDetail=false;
this.QV_VE29_XZB37.columnMenu = true;
this.QV_VE29_XZB37.editMode=CommonsConstants.GRID_EDIT_MODE_INLINE;
this.QV_VE29_XZB37.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
this.QV_VE29_XZB37.actions=[ComplexConstants.GRID_ACTION_DELETE];
//GridCommands:
this.QV_VE29_XZB37.commandsButton=[
{
id : 'CEQV_201QV_VE29_XZB37_960',
image:'glyphicon glyphicon-list',
label: cobis.translate('LNSPR.LBL_LNSPR_INGRESORR_96766'),
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
this.QV_VE29_XZB37.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXGMY_944221",
label : cobis.translate('LNSPR.LBL_LNSPR_CODPARTPN_76216'),
field : 'codParticipants',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXGMY_944221',
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
id : "VA_TEXTINPUTBOXLLS_457221",
label : cobis.translate('LNSPR.LBL_LOANS_NOMBRETPH_86356'),
field : 'nameParticipants',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXLLS_457221',
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
id : "VA_CHECKBOXOAJDOYG_553221",
label : cobis.translate('LNSPR.LBL_LNSPR_PARTGBUSR_65411'),
field : 'percentageParticipants',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_CHECKBOXOAJDOYG_553221',
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
id : "VA_TEXTINPUTBOXEVS_762221",
label : cobis.translate('LNSPR.LBL_LOANS_ROLNDGMQN_51274'),
field : 'roleP',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXEVS_762221',
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
id : "VA_TEXTINPUTBOXBBV_472221",
label : cobis.translate('LNSPR.LBL_LNSPR_CORREOHMW_60459'),
field : 'mail',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXBBV_472221',
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
id : "VA_TEXTINPUTBOXXUQ_742221",
label : cobis.translate('LNSPR.LBL_LNSPR_MONTOPATT_30192'),
field : 'amountParticipants',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXXUQ_742221',
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
this.Spacer2800.id = "Spacer2800";
this.Spacer2800.name = "Spacer2800";
this.Spacer2800.colSpan = 1;
this.Spacer2800.visible= ConstantsApi.mode.All;
this.VA_VABUTTONXCGGMOI_839221.id = "VA_VABUTTONXCGGMOI_839221";
this.VA_VABUTTONXCGGMOI_839221.name = "VA_VABUTTONXCGGMOI_839221";
this.VA_VABUTTONXCGGMOI_839221.label = cobis.translate("LNSPR.LBL_LOANS_CREARGIPQ_98198");
this.VA_VABUTTONXCGGMOI_839221.colSpan = 1;
this.VA_VABUTTONXCGGMOI_839221.withoutLabel = false;
this.VA_VABUTTONXCGGMOI_839221.causesValidation=true;
this.VA_VABUTTONXCGGMOI_839221.submitOnEnter=false;
this.VA_VABUTTONXCGGMOI_839221.setFocus=false;
this.VA_VABUTTONXCGGMOI_839221.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONXCGGMOI_839221.visible= ConstantsApi.mode.All;
this.T_LNSPRDTSDFSKQ_539 = this.formBuilder.group({
OperationCRUDFormEntity: this.formBuilder.group({
code:[{value: null, disabled: !this.VA_CODEWKXBYDDSGNQ_399221.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CODEWKXBYDDSGNQ_399221.validationFunctions!)],
fullName:[{value: null, disabled: !this.VA_FULLNAMENVMNPEV_901221.visible},CobisDesignerUtil.getValidationFunctions(this.VA_FULLNAMENVMNPEV_901221.validationFunctions!)],
role:[{value: false, disabled: !this.VA_ROLEGMHNCTPDKZE_265221.visible},CobisDesignerUtil.getValidationFunctions(this.VA_ROLEGMHNCTPDKZE_265221.validationFunctions!)],
idNumber:[null],
officer:[null],
company:[null],
subType:[null],
}
),
DebtorEntity: this.formBuilder.group({
role:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_YWPR_NOE85.columns,'VA_TEXTINPUTBOXZUG_289221')],
fullName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_YWPR_NOE85.columns,'VA_TEXTINPUTBOXQZW_792221')],
idNumber:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_YWPR_NOE85.columns,'VA_TEXTINPUTBOXKNN_822221')],
code:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_YWPR_NOE85.columns,'VA_TEXTINPUTBOXMWJ_600221')],
score:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_YWPR_NOE85.columns,'VA_TEXTINPUTBOXPQA_963221')],
type:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_YWPR_NOE85.columns,'VA_TEXTINPUTBOXQYS_536221')],
description:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_YWPR_NOE85.columns,'VA_TEXTINPUTBOXARW_788221')],
}
),
OperationEntity: this.formBuilder.group({
operation:[{value: null, disabled: !this.VA_OPERATIONABVDTC_278221.visible},CobisDesignerUtil.getValidationFunctions(this.VA_OPERATIONABVDTC_278221.validationFunctions!)],
typeOperation:[{value: null, disabled: !this.VA_TYPEOPERATIONNN_788221.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TYPEOPERATIONNN_788221.validationFunctions!)],
money:[{value: null, disabled: !this.VA_MONEYWCCBPJYWVL_470221.visible},CobisDesignerUtil.getValidationFunctions(this.VA_MONEYWCCBPJYWVL_470221.validationFunctions!)],
amount:[{value: null, disabled: !this.VA_AMOUNTPCRKOKHWA_216221.visible},CobisDesignerUtil.getValidationFunctions(this.VA_AMOUNTPCRKOKHWA_216221.validationFunctions!)],
amountApproved:[{value: null, disabled: !this.VA_AMOUNTAPPROVEDE_512221.visible},CobisDesignerUtil.getValidationFunctions(this.VA_AMOUNTAPPROVEDE_512221.validationFunctions!)],
financialDestination:[{value: null, disabled: !this.VA_FINANCIALDESINN_226221.visible},CobisDesignerUtil.getValidationFunctions(this.VA_FINANCIALDESINN_226221.validationFunctions!)],
economicActivity:[{value: null, disabled: !this.VA_ECONOMICACTITIV_812221.visible},CobisDesignerUtil.getValidationFunctions(this.VA_ECONOMICACTITIV_812221.validationFunctions!)],
official:[{value: null, disabled: !this.VA_OFFICIALHKVNOOZ_385221.visible},CobisDesignerUtil.getValidationFunctions(this.VA_OFFICIALHKVNOOZ_385221.validationFunctions!)],
office:[{value: null, disabled: !this.VA_OFFICELAHOKRIFT_376221.visible},CobisDesignerUtil.getValidationFunctions(this.VA_OFFICELAHOKRIFT_376221.validationFunctions!)],
ubication:[{value: null, disabled: !this.VA_UBICATIONZGLTDO_878221.visible},CobisDesignerUtil.getValidationFunctions(this.VA_UBICATIONZGLTDO_878221.validationFunctions!)],
sector:[{value: null, disabled: !this.VA_SECTORNYVKRJHJU_797221.visible},CobisDesignerUtil.getValidationFunctions(this.VA_SECTORNYVKRJHJU_797221.validationFunctions!)],
creationDate:[{value: null, disabled: !this.VA_CREATIONDATENDE_311221.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CREATIONDATENDE_311221.validationFunctions!)],
plazoDescripcion:[{value: null, disabled: !this.VA_PLAZODESCRIPCNN_983221.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PLAZODESCRIPCNN_983221.validationFunctions!)],
plazo:[{value: null, disabled: !this.VA_PLAZOZIDUKVMULY_474221.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PLAZOZIDUKVMULY_474221.validationFunctions!)],
firstDueDate:[{value: null, disabled: !this.VA_FIRSTDUEDATEQLK_849221.visible},CobisDesignerUtil.getValidationFunctions(this.VA_FIRSTDUEDATEQLK_849221.validationFunctions!)],
creditLine:[{value: null, disabled: !this.VA_CREDITLINEUOUCM_252221.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CREDITLINEUOUCM_252221.validationFunctions!)],
state:[{value: null, disabled: !this.VA_STATEPNKYZHKSQM_913221.visible},CobisDesignerUtil.getValidationFunctions(this.VA_STATEPNKYZHKSQM_913221.validationFunctions!)],
expirationDate:[{value: null, disabled: !this.VA_EXPIRATIONDATET_448221.visible},CobisDesignerUtil.getValidationFunctions(this.VA_EXPIRATIONDATET_448221.validationFunctions!)],
syndicated:[{value: false, disabled: !this.VA_SYNDICATEDMLJZC_821221.visible},CobisDesignerUtil.getValidationFunctions(this.VA_SYNDICATEDMLJZC_821221.validationFunctions!)],
typeSyndicated:[{value: null, disabled: !this.VA_TYPESYNDICATEEE_795221.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TYPESYNDICATEEE_795221.validationFunctions!)],
field40:[null],
participantS:[null],
subsegment:[null],
checkIRRtypeOperationValue:[null],
authNumber:[null],
contractNumber:[null],
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
success:[null],
aliquota1:[null],
registrationNumber:[null],
selectedParticipants:[null],
updatedInternalRateOfReturn:[null],
aliquota2:[null],
fullname:[null],
savingAccount:[null],
nameBank:[null],
creditorType:[null],
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
certifiedAccount:[null],
mail:[null],
}
),
SyndicatedList: this.formBuilder.group({
codParticipants:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VE29_XZB37.columns,'VA_TEXTINPUTBOXGMY_944221')],
nameParticipants:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VE29_XZB37.columns,'VA_TEXTINPUTBOXLLS_457221')],
percentageParticipants:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VE29_XZB37.columns,'VA_CHECKBOXOAJDOYG_553221')],
roleP:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VE29_XZB37.columns,'VA_TEXTINPUTBOXEVS_762221')],
mail:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VE29_XZB37.columns,'VA_TEXTINPUTBOXBBV_472221')],
amountParticipants:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VE29_XZB37.columns,'VA_TEXTINPUTBOXXUQ_742221')],
}
),
});
}
}