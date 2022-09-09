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
public T_LNSPRFYCKEVVP_737!:FormGroup;
public VC_LOANSLINSS_962737:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSLINNS_696383 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSLINSE_465383 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_OS86_OQI18: CobisGridModel = new CobisGridModel();
public VA_NATURALEZAEFWDR_861383: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public VA_SPACER2610LSKJG_310383: CobisSpacerModel = new CobisSpacerModel();
public VA_SPACER2726JQWRO_199383: CobisSpacerModel = new CobisSpacerModel();
public VA_CLIENTEDESCMPQT_151383: CobisTextInputButtonModel = new CobisTextInputButtonModel();
public VA_NUMLINEACKAOJVB_120383: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_NUMTRAMITEUFKMW_361383: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_OFICINANRBOTWYT_467383: CobisDropDownListModel = new CobisDropDownListModel();
public VA_MONEDAXWNJSQNUF_555383: CobisDropDownListModel = new CobisDropDownListModel();
public VA_DATEINIHDUJJRBN_500383: CobisDateFieldModel = new CobisDateFieldModel();
public VA_DATEVTOIOLFWTXY_452383: CobisDateFieldModel = new CobisDateFieldModel();
public VA_NUMPRESTAMORRMP_430383: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_ESTADOZXSPUMQFP_238383: CobisDropDownListModel = new CobisDropDownListModel();
public VA_CRITERIOSIKUYOI_982383: CobisCheckBoxModel = new CobisCheckBoxModel();
public VA_VAVABUTTONZS600_426383: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LOANSLINSS_962737.id="VC_LOANSLINSS_962737";
this.VC_LOANSLINSS_962737.name="LoansLines";
this.VC_LOANSLINSS_962737.colSpan=1;
this.VC_LOANSLINSS_962737.columns=1;
this.VC_LOANSLINSS_962737.enabled=ConstantsApi.mode.All;
this.G_LOANSLINNS_696383.id="G_LOANSLINNS_696383";
this.G_LOANSLINNS_696383.name="Group1245";
this.G_LOANSLINNS_696383.columns=4;
this.G_LOANSLINNS_696383.labelOrientation="Top";
this.G_LOANSLINNS_696383.colSpan=1;
this.G_LOANSLINNS_696383.enabled=ConstantsApi.mode.All;
this.G_LOANSLINNS_696383.visible=ConstantsApi.mode.All;
this.G_LOANSLINNS_696383.attList = ["naturaleza","clienteDesc","numLinea","numTramite","oficina","moneda","dateIni","dateVto","numPrestamo","estado","criterios"];
this.G_LOANSLINSE_465383.id="G_LOANSLINSE_465383";
this.G_LOANSLINSE_465383.name="Group1777";
this.G_LOANSLINSE_465383.columns=1;
this.G_LOANSLINSE_465383.labelOrientation="Top";
this.G_LOANSLINSE_465383.colSpan=1;
this.G_LOANSLINSE_465383.enabled=ConstantsApi.mode.All;
this.G_LOANSLINSE_465383.visible=ConstantsApi.mode.All;
this.G_LOANSLINSE_465383.attList = ["sequential","lineCod","nature","coinDesc","amount","officeCod","nameClient","nameGroup"];
this.VA_NATURALEZAEFWDR_861383.id = "VA_NATURALEZAEFWDR_861383";
this.VA_NATURALEZAEFWDR_861383.name = "naturaleza";
this.VA_NATURALEZAEFWDR_861383.attribute = "naturaleza";
this.VA_NATURALEZAEFWDR_861383.label = cobis.translate("LNSPR.LBL_LNSPR_NATURALZA_90237");
this.VA_NATURALEZAEFWDR_861383.colSpan = 2;
this.VA_NATURALEZAEFWDR_861383.withoutLabel = false;
this.VA_NATURALEZAEFWDR_861383.readOnly = ConstantsApi.mode.Query;
this.VA_NATURALEZAEFWDR_861383.entity = "LoansLines";
this.VA_NATURALEZAEFWDR_861383.enabled = ConstantsApi.mode.All;
this.VA_NATURALEZAEFWDR_861383.visible= ConstantsApi.mode.All;
this.VA_NATURALEZAEFWDR_861383.textField = "value";
this.VA_NATURALEZAEFWDR_861383.valueField = "code";
this.VA_SPACER2610LSKJG_310383.id = "VA_SPACER2610LSKJG_310383";
this.VA_SPACER2610LSKJG_310383.name = "Spacer2610";
this.VA_SPACER2610LSKJG_310383.colSpan = 1;
this.VA_SPACER2610LSKJG_310383.visible= ConstantsApi.mode.All;
this.VA_SPACER2726JQWRO_199383.id = "VA_SPACER2726JQWRO_199383";
this.VA_SPACER2726JQWRO_199383.name = "Spacer2726";
this.VA_SPACER2726JQWRO_199383.colSpan = 1;
this.VA_SPACER2726JQWRO_199383.visible= ConstantsApi.mode.All;
this.VA_CLIENTEDESCMPQT_151383.id = "VA_CLIENTEDESCMPQT_151383";
this.VA_CLIENTEDESCMPQT_151383.name = "clienteDesc";
this.VA_CLIENTEDESCMPQT_151383.label = cobis.translate("LNSPR.LBL_LNSPR_CLIENTEPO_59022");
this.VA_CLIENTEDESCMPQT_151383.entity = "LoansLines";
this.VA_CLIENTEDESCMPQT_151383.attribute = "clienteDesc";
this.VA_CLIENTEDESCMPQT_151383.colSpan = 2;
this.VA_CLIENTEDESCMPQT_151383.format = "";
this.VA_CLIENTEDESCMPQT_151383.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_CLIENTEDESCMPQT_151383.enabled = ConstantsApi.mode.All;
this.VA_CLIENTEDESCMPQT_151383.visible= ConstantsApi.mode.All;
this.VA_CLIENTEDESCMPQT_151383.required = true;
this.VA_CLIENTEDESCMPQT_151383.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_CLIENTEDESCMPQT_151383.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_NUMLINEACKAOJVB_120383.label = cobis.translate("LNSPR.LBL_LNSPR_NUMLNEABW_84697");
this.VA_NUMLINEACKAOJVB_120383.entity = "LoansLines";
this.VA_NUMLINEACKAOJVB_120383.attribute = "numLinea";
this.VA_NUMLINEACKAOJVB_120383.textCase= TextCaseOptions.NONE;
this.VA_NUMLINEACKAOJVB_120383.name="numLinea";
this.VA_NUMLINEACKAOJVB_120383.id="VA_NUMLINEACKAOJVB_120383";
this.VA_NUMLINEACKAOJVB_120383.colSpan=1;
this.VA_NUMLINEACKAOJVB_120383.withoutLabel = false;
this.VA_NUMLINEACKAOJVB_120383.readOnly = ConstantsApi.mode.Query;
this.VA_NUMLINEACKAOJVB_120383.enabled = ConstantsApi.mode.All;
this.VA_NUMLINEACKAOJVB_120383.visible= ConstantsApi.mode.All;
this.VA_NUMTRAMITEUFKMW_361383.label = cobis.translate("LNSPR.LBL_LNSPR_NUMTRMITE_20261");
this.VA_NUMTRAMITEUFKMW_361383.entity = "LoansLines";
this.VA_NUMTRAMITEUFKMW_361383.attribute = "numTramite";
this.VA_NUMTRAMITEUFKMW_361383.textCase= TextCaseOptions.NONE;
this.VA_NUMTRAMITEUFKMW_361383.format= "n0";
this.VA_NUMTRAMITEUFKMW_361383.name="numTramite";
this.VA_NUMTRAMITEUFKMW_361383.id="VA_NUMTRAMITEUFKMW_361383";
this.VA_NUMTRAMITEUFKMW_361383.colSpan=1;
this.VA_NUMTRAMITEUFKMW_361383.withoutLabel = false;
this.VA_NUMTRAMITEUFKMW_361383.readOnly = ConstantsApi.mode.Query;
this.VA_NUMTRAMITEUFKMW_361383.enabled = ConstantsApi.mode.All;
this.VA_NUMTRAMITEUFKMW_361383.visible= ConstantsApi.mode.All;
this.VA_OFICINANRBOTWYT_467383.label = cobis.translate("LNSPR.LBL_LNSPR_OFICINAGV_33565");
this.VA_OFICINANRBOTWYT_467383.blankOption=true;
this.VA_OFICINANRBOTWYT_467383.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_OFICINANRBOTWYT_467383.entity = "LoansLines";
this.VA_OFICINANRBOTWYT_467383.attribute = "oficina";
this.VA_OFICINANRBOTWYT_467383.textField = "value";
this.VA_OFICINANRBOTWYT_467383.valueField = "code";
this.VA_OFICINANRBOTWYT_467383.name="oficina";
this.VA_OFICINANRBOTWYT_467383.id="VA_OFICINANRBOTWYT_467383";
this.VA_OFICINANRBOTWYT_467383.colSpan=1;
this.VA_OFICINANRBOTWYT_467383.withoutLabel = false;
this.VA_OFICINANRBOTWYT_467383.readOnly = ConstantsApi.mode.Query;
this.VA_OFICINANRBOTWYT_467383.enabled = ConstantsApi.mode.All;
this.VA_OFICINANRBOTWYT_467383.visible= ConstantsApi.mode.All;
this.VA_MONEDAXWNJSQNUF_555383.label = cobis.translate("LNSPR.LBL_LNSPR_MONEDAFCA_83005");
this.VA_MONEDAXWNJSQNUF_555383.blankOption=true;
this.VA_MONEDAXWNJSQNUF_555383.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_MONEDAXWNJSQNUF_555383.entity = "LoansLines";
this.VA_MONEDAXWNJSQNUF_555383.attribute = "moneda";
this.VA_MONEDAXWNJSQNUF_555383.textField = "value";
this.VA_MONEDAXWNJSQNUF_555383.valueField = "code";
this.VA_MONEDAXWNJSQNUF_555383.name="moneda";
this.VA_MONEDAXWNJSQNUF_555383.id="VA_MONEDAXWNJSQNUF_555383";
this.VA_MONEDAXWNJSQNUF_555383.colSpan=1;
this.VA_MONEDAXWNJSQNUF_555383.withoutLabel = false;
this.VA_MONEDAXWNJSQNUF_555383.readOnly = ConstantsApi.mode.Query;
this.VA_MONEDAXWNJSQNUF_555383.enabled = ConstantsApi.mode.All;
this.VA_MONEDAXWNJSQNUF_555383.visible= ConstantsApi.mode.All;
this.VA_DATEINIHDUJJRBN_500383.label = cobis.translate("LNSPR.LBL_LNSPR_FECHAINII_43454");
this.VA_DATEINIHDUJJRBN_500383.entity = "LoansLines";
this.VA_DATEINIHDUJJRBN_500383.attribute = "dateIni";
this.VA_DATEINIHDUJJRBN_500383.name="dateIni";
this.VA_DATEINIHDUJJRBN_500383.id="VA_DATEINIHDUJJRBN_500383";
this.VA_DATEINIHDUJJRBN_500383.colSpan=1;
this.VA_DATEINIHDUJJRBN_500383.withoutLabel = false;
this.VA_DATEINIHDUJJRBN_500383.readOnly = ConstantsApi.mode.Query;
this.VA_DATEINIHDUJJRBN_500383.enabled = ConstantsApi.mode.All;
this.VA_DATEINIHDUJJRBN_500383.visible= ConstantsApi.mode.All;
this.VA_DATEVTOIOLFWTXY_452383.label = cobis.translate("LNSPR.LBL_LOANS_FECHAVENI_35637");
this.VA_DATEVTOIOLFWTXY_452383.entity = "LoansLines";
this.VA_DATEVTOIOLFWTXY_452383.attribute = "dateVto";
this.VA_DATEVTOIOLFWTXY_452383.name="dateVto";
this.VA_DATEVTOIOLFWTXY_452383.id="VA_DATEVTOIOLFWTXY_452383";
this.VA_DATEVTOIOLFWTXY_452383.colSpan=1;
this.VA_DATEVTOIOLFWTXY_452383.withoutLabel = false;
this.VA_DATEVTOIOLFWTXY_452383.readOnly = ConstantsApi.mode.Query;
this.VA_DATEVTOIOLFWTXY_452383.enabled = ConstantsApi.mode.All;
this.VA_DATEVTOIOLFWTXY_452383.visible= ConstantsApi.mode.All;
this.VA_NUMPRESTAMORRMP_430383.label = cobis.translate("LNSPR.LBL_LNSPR_NUMPRSTOO_30963");
this.VA_NUMPRESTAMORRMP_430383.entity = "LoansLines";
this.VA_NUMPRESTAMORRMP_430383.attribute = "numPrestamo";
this.VA_NUMPRESTAMORRMP_430383.textCase= TextCaseOptions.NONE;
this.VA_NUMPRESTAMORRMP_430383.name="numPrestamo";
this.VA_NUMPRESTAMORRMP_430383.id="VA_NUMPRESTAMORRMP_430383";
this.VA_NUMPRESTAMORRMP_430383.colSpan=1;
this.VA_NUMPRESTAMORRMP_430383.withoutLabel = false;
this.VA_NUMPRESTAMORRMP_430383.readOnly = ConstantsApi.mode.Query;
this.VA_NUMPRESTAMORRMP_430383.enabled = ConstantsApi.mode.All;
this.VA_NUMPRESTAMORRMP_430383.visible= ConstantsApi.mode.All;
this.VA_ESTADOZXSPUMQFP_238383.label = cobis.translate("LNSPR.LBL_LNSPR_ESTADOEAI_33340");
this.VA_ESTADOZXSPUMQFP_238383.blankOption=true;
this.VA_ESTADOZXSPUMQFP_238383.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_ESTADOZXSPUMQFP_238383.entity = "LoansLines";
this.VA_ESTADOZXSPUMQFP_238383.attribute = "estado";
this.VA_ESTADOZXSPUMQFP_238383.textField = "value";
this.VA_ESTADOZXSPUMQFP_238383.valueField = "code";
this.VA_ESTADOZXSPUMQFP_238383.showId= true;
this.VA_ESTADOZXSPUMQFP_238383.name="estado";
this.VA_ESTADOZXSPUMQFP_238383.id="VA_ESTADOZXSPUMQFP_238383";
this.VA_ESTADOZXSPUMQFP_238383.colSpan=1;
this.VA_ESTADOZXSPUMQFP_238383.withoutLabel = false;
this.VA_ESTADOZXSPUMQFP_238383.readOnly = ConstantsApi.mode.Query;
this.VA_ESTADOZXSPUMQFP_238383.enabled = ConstantsApi.mode.All;
this.VA_ESTADOZXSPUMQFP_238383.visible= ConstantsApi.mode.All;
this.VA_CRITERIOSIKUYOI_982383.id = "VA_CRITERIOSIKUYOI_982383";
this.VA_CRITERIOSIKUYOI_982383.name = "criterios";
this.VA_CRITERIOSIKUYOI_982383.label = cobis.translate("LNSPR.LBL_LNSPR_CRITERIOO_80936");
this.VA_CRITERIOSIKUYOI_982383.entity = "LoansLines";
this.VA_CRITERIOSIKUYOI_982383.attribute = "criterios";
this.VA_CRITERIOSIKUYOI_982383.colSpan = 1;
this.VA_CRITERIOSIKUYOI_982383.withoutLabel = false;
this.VA_CRITERIOSIKUYOI_982383.readOnly =ConstantsApi.mode.Query;
this.VA_CRITERIOSIKUYOI_982383.enabled = ConstantsApi.mode.All;
this.VA_CRITERIOSIKUYOI_982383.visible= ConstantsApi.mode.All;
this.VA_VAVABUTTONZS600_426383.id = "VA_VAVABUTTONZS600_426383";
this.VA_VAVABUTTONZS600_426383.name = "VA_VAVABUTTONZS600_426383";
this.VA_VAVABUTTONZS600_426383.label = cobis.translate("LNSPR.LBL_LNSPR_BUSCARKBJ_59373");
this.VA_VAVABUTTONZS600_426383.colSpan = 1;
this.VA_VAVABUTTONZS600_426383.withoutLabel = false;
this.VA_VAVABUTTONZS600_426383.causesValidation=true;
this.VA_VAVABUTTONZS600_426383.submitOnEnter=false;
this.VA_VAVABUTTONZS600_426383.setFocus=false;
this.VA_VAVABUTTONZS600_426383.enabled = ConstantsApi.mode.All;
this.VA_VAVABUTTONZS600_426383.visible= ConstantsApi.mode.All;
this.VA_VAVABUTTONZS600_426383.icon = "glyphicon glyphicon-search";
this.QV_OS86_OQI18.pageSize=10;
this.QV_OS86_OQI18.id='QV_OS86_OQI18';
this.QV_OS86_OQI18.name='QV_OS86_OQI18';
this.QV_OS86_OQI18.pageable=true;
this.QV_OS86_OQI18.sortable=false;
this.QV_OS86_OQI18.resizable=true;
this.QV_OS86_OQI18.scrollable=true
this.QV_OS86_OQI18.confirmRowDeletion=false;
this.QV_OS86_OQI18.exportToExcel=false;
this.QV_OS86_OQI18.exportToPdf=false;
this.QV_OS86_OQI18.height=0;
this.QV_OS86_OQI18.filterableColumns=false;
this.QV_OS86_OQI18.entityName='LoansLinesList';
this.QV_OS86_OQI18.appendRecords=true;
this.QV_OS86_OQI18.rowDetail=false;
this.QV_OS86_OQI18.columnMenu = true;
this.QV_OS86_OQI18.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_OS86_OQI18.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_OS86_OQI18.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXIES_988383",
label : cobis.translate('LNSPR.LBL_LNSPR_SECUENCAI_74208'),
field : 'sequential',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXIES_988383',
name :'sequential',
withoutLabel : true,
attribute : 'sequential',
entity : 'LoansLinesList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXCKC_418383",
label : cobis.translate('LNSPR.LBL_LNSPR_NUMLINEAA_10714'),
field : 'lineCod',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXCKC_418383',
name :'lineCod',
withoutLabel : true,
attribute : 'lineCod',
entity : 'LoansLinesList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXUZJ_528383",
label : cobis.translate('LNSPR.LBL_LNSPR_NATURALZA_90237'),
field : 'nature',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXUZJ_528383',
name :'nature',
withoutLabel : true,
attribute : 'nature',
entity : 'LoansLinesList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXGXX_701383",
label : cobis.translate('LNSPR.LBL_LNSPR_MONEDAFCA_83005'),
field : 'coinDesc',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXGXX_701383',
name :'coinDesc',
withoutLabel : true,
attribute : 'coinDesc',
entity : 'LoansLinesList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXQJF_429383",
label : cobis.translate('LNSPR.LBL_LNSPR_MONTOEMFX_52083'),
field : 'amount',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXQJF_429383',
name :'amount',
withoutLabel : true,
attribute : 'amount',
entity : 'LoansLinesList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXDDQ_431383",
label : cobis.translate('LNSPR.LBL_LNSPR_OFICINAGV_33565'),
field : 'officeCod',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXDDQ_431383',
name :'officeCod',
withoutLabel : true,
attribute : 'officeCod',
entity : 'LoansLinesList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXXUZ_208383",
label : cobis.translate('LNSPR.LBL_LOANS_CLIENTEQM_27248'),
field : 'nameClient',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXXUZ_208383',
name :'nameClient',
withoutLabel : true,
attribute : 'nameClient',
entity : 'LoansLinesList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXSQY_266383",
label : cobis.translate('LNSPR.LBL_LNSPR_GRUPOOBAY_84995'),
field : 'nameGroup',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXSQY_266383',
name :'nameGroup',
withoutLabel : true,
attribute : 'nameGroup',
entity : 'LoansLinesList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_LNSPRFYCKEVVP_737 = this.formBuilder.group({
LoansLines: this.formBuilder.group({
naturaleza:[{value: null, disabled: !this.VA_NATURALEZAEFWDR_861383.visible},CobisDesignerUtil.getValidationFunctions(this.VA_NATURALEZAEFWDR_861383.validationFunctions!)],
clienteDesc:[{value: null, disabled: !this.VA_CLIENTEDESCMPQT_151383.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CLIENTEDESCMPQT_151383.validationFunctions!)],
numLinea:[{value: null, disabled: !this.VA_NUMLINEACKAOJVB_120383.visible},CobisDesignerUtil.getValidationFunctions(this.VA_NUMLINEACKAOJVB_120383.validationFunctions!)],
numTramite:[{value: null, disabled: !this.VA_NUMTRAMITEUFKMW_361383.visible},CobisDesignerUtil.getValidationFunctions(this.VA_NUMTRAMITEUFKMW_361383.validationFunctions!)],
oficina:[{value: null, disabled: !this.VA_OFICINANRBOTWYT_467383.visible},CobisDesignerUtil.getValidationFunctions(this.VA_OFICINANRBOTWYT_467383.validationFunctions!)],
moneda:[{value: null, disabled: !this.VA_MONEDAXWNJSQNUF_555383.visible},CobisDesignerUtil.getValidationFunctions(this.VA_MONEDAXWNJSQNUF_555383.validationFunctions!)],
dateIni:[{value: null, disabled: !this.VA_DATEINIHDUJJRBN_500383.visible},CobisDesignerUtil.getValidationFunctions(this.VA_DATEINIHDUJJRBN_500383.validationFunctions!)],
dateVto:[{value: null, disabled: !this.VA_DATEVTOIOLFWTXY_452383.visible},CobisDesignerUtil.getValidationFunctions(this.VA_DATEVTOIOLFWTXY_452383.validationFunctions!)],
numPrestamo:[{value: null, disabled: !this.VA_NUMPRESTAMORRMP_430383.visible},CobisDesignerUtil.getValidationFunctions(this.VA_NUMPRESTAMORRMP_430383.validationFunctions!)],
estado:[{value: null, disabled: !this.VA_ESTADOZXSPUMQFP_238383.visible},CobisDesignerUtil.getValidationFunctions(this.VA_ESTADOZXSPUMQFP_238383.validationFunctions!)],
criterios:[{value: false, disabled: !this.VA_CRITERIOSIKUYOI_982383.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CRITERIOSIKUYOI_982383.validationFunctions!)],
term:[null],
client:[null],
secuencial:[null],
amount:[null],
clientCode:[null],
}
),
LoansLinesList: this.formBuilder.group({
sequential:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_OS86_OQI18.columns,'VA_TEXTINPUTBOXIES_988383')],
lineCod:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_OS86_OQI18.columns,'VA_TEXTINPUTBOXCKC_418383')],
nature:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_OS86_OQI18.columns,'VA_TEXTINPUTBOXUZJ_528383')],
coinDesc:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_OS86_OQI18.columns,'VA_TEXTINPUTBOXGXX_701383')],
amount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_OS86_OQI18.columns,'VA_TEXTINPUTBOXQJF_429383')],
officeCod:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_OS86_OQI18.columns,'VA_TEXTINPUTBOXDDQ_431383')],
nameClient:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_OS86_OQI18.columns,'VA_TEXTINPUTBOXXUZ_208383')],
nameGroup:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_OS86_OQI18.columns,'VA_TEXTINPUTBOXSQY_266383')],
}
),
});
}
}