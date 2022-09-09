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
public T_LOANSTATUSGNI_120!:FormGroup;
public VC_LOANSTATCE_588120:CobisGroupBoxModel = new CobisGroupBoxModel();
public VC_QNJFHNUJZE_736840 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSTAGHS_220722 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VC_TADQZNVATR_853120 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VC_LZUDWNAKBK_355261 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_AMORTIZTOA_830871 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_LM37_VTI26: CobisGridModel = new CobisGridModel();
public G_AMORTIZOOI_302871 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_STATUSCYEFKGCDY_909722: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_NEWSTATUSLZHCOE_110722: CobisDropDownListModel = new CobisDropDownListModel();
public Spacer1906: CobisSpacerModel = new CobisSpacerModel();
public CM_TLOANSTA_STA: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LOANSTATCE_588120.id="VC_LOANSTATCE_588120";
this.VC_LOANSTATCE_588120.name="ViewContainerBase";
this.VC_LOANSTATCE_588120.colSpan=1;
this.VC_LOANSTATCE_588120.columns=1;
this.VC_LOANSTATCE_588120.enabled=ConstantsApi.mode.All;
this.VC_QNJFHNUJZE_736840.id="VC_QNJFHNUJZE_736840";
this.VC_QNJFHNUJZE_736840.name="LoanStatusChangeForm";
this.VC_QNJFHNUJZE_736840.enabled=ConstantsApi.mode.All;
this.VC_QNJFHNUJZE_736840.colSpan=1;
this.VC_QNJFHNUJZE_736840.columns=1;
this.G_LOANSTAGHS_220722.id="G_LOANSTAGHS_220722";
this.G_LOANSTAGHS_220722.name="Group1371";
this.G_LOANSTAGHS_220722.columns=3;
this.G_LOANSTAGHS_220722.labelOrientation="Top";
this.G_LOANSTAGHS_220722.colSpan=1;
this.G_LOANSTAGHS_220722.enabled=ConstantsApi.mode.All;
this.G_LOANSTAGHS_220722.visible=ConstantsApi.mode.All;
this.G_LOANSTAGHS_220722.attList = ["statusCopy","newStatus"];
this.VC_TADQZNVATR_853120.id="VC_TADQZNVATR_853120";
this.VC_TADQZNVATR_853120.name="ViewContainerBase";
this.VC_TADQZNVATR_853120.enabled=ConstantsApi.mode.All;
this.VC_TADQZNVATR_853120.colSpan=1;
this.VC_TADQZNVATR_853120.columns=1;
this.VC_LZUDWNAKBK_355261.id="VC_LZUDWNAKBK_355261";
this.VC_LZUDWNAKBK_355261.name="AmortizationForm";
this.VC_LZUDWNAKBK_355261.enabled=ConstantsApi.mode.All;
this.VC_LZUDWNAKBK_355261.colSpan=1;
this.VC_LZUDWNAKBK_355261.columns=1;
this.G_AMORTIZTOA_830871.id="G_AMORTIZTOA_830871";
this.G_AMORTIZTOA_830871.name="Group1640";
this.G_AMORTIZTOA_830871.columns=1;
this.G_AMORTIZTOA_830871.labelOrientation="Top";
this.G_AMORTIZTOA_830871.colSpan=1;
this.G_AMORTIZTOA_830871.enabled=ConstantsApi.mode.All;
this.G_AMORTIZTOA_830871.visible=ConstantsApi.mode.All;
this.G_AMORTIZTOA_830871.attList = ["share","expiration","days","balanceCap","items1","items2","items3","items4","items5","items7","items8","items9","items10","items11","items12","items14","items15","items6","items13","shareValue","state","porroga"];
this.G_AMORTIZOOI_302871.id="G_AMORTIZOOI_302871";
this.G_AMORTIZOOI_302871.name="Group2805";
this.G_AMORTIZOOI_302871.columns=3;
this.G_AMORTIZOOI_302871.labelOrientation="Top";
this.G_AMORTIZOOI_302871.colSpan=1;
this.G_AMORTIZOOI_302871.enabled=ConstantsApi.mode.All;
this.G_AMORTIZOOI_302871.visible=ConstantsApi.mode.All;
this.CM_TLOANSTA_STA.id = "CM_TLOANSTA_STA";
this.CM_TLOANSTA_STA.name = "Command1";
this.CM_TLOANSTA_STA.causesValidation=true;
this.CM_TLOANSTA_STA.submitOnEnter=false;
this.CM_TLOANSTA_STA.setFocus=false;
this.CM_TLOANSTA_STA.close=false;
this.CM_TLOANSTA_STA.label = cobis.translate("ASSTS.LBL_ASSTS_GUARDARRI_81055");
this.CM_TLOANSTA_STA.enabled = ConstantsApi.mode.All;
this.CM_TLOANSTA_STA.visible= ConstantsApi.mode.All;
this.VA_STATUSCYEFKGCDY_909722.label = cobis.translate("ASSTS.LBL_ASSTS_ESTADOACU_72691");
this.VA_STATUSCYEFKGCDY_909722.entity = "Loan";
this.VA_STATUSCYEFKGCDY_909722.attribute = "statusCopy";
this.VA_STATUSCYEFKGCDY_909722.textCase= TextCaseOptions.NONE;
this.VA_STATUSCYEFKGCDY_909722.name="statusCopy";
this.VA_STATUSCYEFKGCDY_909722.id="VA_STATUSCYEFKGCDY_909722";
this.VA_STATUSCYEFKGCDY_909722.colSpan=1;
this.VA_STATUSCYEFKGCDY_909722.withoutLabel = false;
this.VA_STATUSCYEFKGCDY_909722.readOnly = ConstantsApi.mode.Query;
this.VA_STATUSCYEFKGCDY_909722.enabled = ConstantsApi.mode.Query;
this.VA_STATUSCYEFKGCDY_909722.visible= ConstantsApi.mode.All;
this.VA_NEWSTATUSLZHCOE_110722.label = cobis.translate("ASSTS.LBL_ASSTS_NUEVOESTA_11189");
this.VA_NEWSTATUSLZHCOE_110722.entity = "Loan";
this.VA_NEWSTATUSLZHCOE_110722.attribute = "newStatus";
this.VA_NEWSTATUSLZHCOE_110722.textField = "value";
this.VA_NEWSTATUSLZHCOE_110722.valueField = "code";
this.VA_NEWSTATUSLZHCOE_110722.name="newStatus";
this.VA_NEWSTATUSLZHCOE_110722.id="VA_NEWSTATUSLZHCOE_110722";
this.VA_NEWSTATUSLZHCOE_110722.colSpan=1;
this.VA_NEWSTATUSLZHCOE_110722.withoutLabel = false;
this.VA_NEWSTATUSLZHCOE_110722.readOnly = ConstantsApi.mode.Query;
this.VA_NEWSTATUSLZHCOE_110722.enabled = ConstantsApi.mode.All;
this.VA_NEWSTATUSLZHCOE_110722.visible= ConstantsApi.mode.All;
this.VA_NEWSTATUSLZHCOE_110722.required = true;
this.VA_NEWSTATUSLZHCOE_110722.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_NEWSTATUSLZHCOE_110722.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.QV_LM37_VTI26.pageSize=12;
this.QV_LM37_VTI26.id='QV_LM37_VTI26';
this.QV_LM37_VTI26.name='QV_LM37_VTI26';
this.QV_LM37_VTI26.pageable=true;
this.QV_LM37_VTI26.sortable=false;
this.QV_LM37_VTI26.resizable=true;
this.QV_LM37_VTI26.scrollable=true
this.QV_LM37_VTI26.confirmRowDeletion=false;
this.QV_LM37_VTI26.exportToExcel=false;
this.QV_LM37_VTI26.exportToPdf=false;
this.QV_LM37_VTI26.height=0;
this.QV_LM37_VTI26.filterableColumns=false;
this.QV_LM37_VTI26.entityName='Amortization';
this.QV_LM37_VTI26.appendRecords=false;
this.QV_LM37_VTI26.rowDetail=false;
this.QV_LM37_VTI26.summarizedBy =[
{field: 'items1', aggregate: 'sum'},
{field: 'items2', aggregate: 'sum'},
{field: 'items3', aggregate: 'sum'},
{field: 'items4', aggregate: 'sum'},
{field: 'items5', aggregate: 'sum'},
{field: 'items7', aggregate: 'sum'},
{field: 'items8', aggregate: 'sum'},
{field: 'items9', aggregate: 'sum'},
{field: 'items10', aggregate: 'sum'},
{field: 'items11', aggregate: 'sum'},
{field: 'items12', aggregate: 'sum'},
{field: 'items14', aggregate: 'sum'},
{field: 'items15', aggregate: 'sum'},
{field: 'items6', aggregate: 'sum'},
{field: 'shareValue', aggregate: 'sum'}
];
this.QV_LM37_VTI26.columnMenu = true;
this.QV_LM37_VTI26.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_LM37_VTI26.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_LM37_VTI26.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXZUA_304871",
label : cobis.translate('ASSTS.LBL_ASSTS_CUOTASNJN_88896'),
field : 'share',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXZUA_304871',
name :'share',
withoutLabel : true,
attribute : 'share',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DATEFIELDBPQSTR_142871",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAVENE_58948'),
field : 'expiration',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_DATEFIELDBPQSTR_142871',
name :'expiration',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'expiration',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'Amortization',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_TEXTINPUTBOXMMN_363871",
label : cobis.translate('ASSTS.LBL_ASSTS_DIASIVQBJ_73578'),
field : 'days',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 50,
properties :
{
id :'VA_TEXTINPUTBOXMMN_363871',
name :'days',
withoutLabel : true,
attribute : 'days',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXTWI_476871",
label : cobis.translate('ASSTS.LBL_ASSTS_SALDOCAPI_87055'),
field : 'balanceCap',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXTWI_476871',
name :'balanceCap',
withoutLabel : true,
attribute : 'balanceCap',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXZNS_485871",
field : 'items1',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXZNS_485871',
name :'items1',
withoutLabel : true,
attribute : 'items1',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXRER_848871",
field : 'items2',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXRER_848871',
name :'items2',
withoutLabel : true,
attribute : 'items2',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXBVN_129871",
field : 'items3',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXBVN_129871',
name :'items3',
withoutLabel : true,
attribute : 'items3',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXYCQ_383871",
field : 'items4',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXYCQ_383871',
name :'items4',
withoutLabel : true,
attribute : 'items4',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXOFJ_503871",
field : 'items5',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXOFJ_503871',
name :'items5',
withoutLabel : true,
attribute : 'items5',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXCGS_176871",
field : 'items7',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXCGS_176871',
name :'items7',
withoutLabel : true,
attribute : 'items7',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXLPC_409871",
field : 'items8',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXLPC_409871',
name :'items8',
withoutLabel : true,
attribute : 'items8',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXQLU_499871",
field : 'items9',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXQLU_499871',
name :'items9',
withoutLabel : true,
attribute : 'items9',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXYBZ_761871",
field : 'items10',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXYBZ_761871',
name :'items10',
withoutLabel : true,
attribute : 'items10',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXOUD_939871",
field : 'items11',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXOUD_939871',
name :'items11',
withoutLabel : true,
attribute : 'items11',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXZPT_760871",
field : 'items12',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXZPT_760871',
name :'items12',
withoutLabel : true,
attribute : 'items12',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXADC_261871",
field : 'items14',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXADC_261871',
name :'items14',
withoutLabel : true,
attribute : 'items14',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXHQL_468871",
field : 'items15',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXHQL_468871',
name :'items15',
withoutLabel : true,
attribute : 'items15',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXPNI_341871",
field : 'items6',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXPNI_341871',
name :'items6',
withoutLabel : true,
attribute : 'items6',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXUWA_570871",
field : 'items13',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXUWA_570871',
name :'items13',
withoutLabel : true,
attribute : 'items13',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXSXJ_950871",
label : cobis.translate('ASSTS.LBL_ASSTS_VALORCUTO_78445'),
field : 'shareValue',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXSXJ_950871',
name :'shareValue',
withoutLabel : true,
attribute : 'shareValue',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
}
},
{
id : "VA_TEXTINPUTBOXEED_382871",
label : cobis.translate('ASSTS.LBL_ASSTS_ESTADOEAI_33340'),
field : 'state',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXEED_382871',
name :'state',
withoutLabel : true,
attribute : 'state',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXGOC_946871",
label : cobis.translate('ASSTS.LBL_ASSTS_DIASATRSA_81828'),
field : 'porroga',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXGOC_946871',
name :'porroga',
withoutLabel : true,
attribute : 'porroga',
entity : 'Amortization',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.Spacer1906.id = "Spacer1906";
this.Spacer1906.name = "Spacer1906";
this.Spacer1906.colSpan = 1;
this.Spacer1906.visible= ConstantsApi.mode.All;
this.T_LOANSTATUSGNI_120 = this.formBuilder.group({
Loan: this.formBuilder.group({
statusCopy:[{value: null, disabled: !this.VA_STATUSCYEFKGCDY_909722.visible},CobisDesignerUtil.getValidationFunctions(this.VA_STATUSCYEFKGCDY_909722.validationFunctions!)],
newStatus:[{value: null, disabled: !this.VA_NEWSTATUSLZHCOE_110722.visible},CobisDesignerUtil.getValidationFunctions(this.VA_NEWSTATUSLZHCOE_110722.validationFunctions!)],
numProcedure:[null],
quotaCredit:[null],
statusID:[null],
maxDateProrogation:[null],
lastProcessDate:[null],
balanceDue:[null],
category:[null],
operationTypeID:[null],
codCurrency:[null],
newStatusID:[null],
isDisbursment:[null],
mnemonic:[null],
natureOp:[null],
migratedOper:[null],
amortizationType:[null],
loanID:[null],
officeID:[null],
amountApproved:[null],
currencyName:[null],
startDate:[null],
loanBankID:[null],
idType:[null],
endDate:[null],
fondeadorLS:[null],
identityCardNumber:[null],
desOperationType:[null],
redesCont:[null],
group:[null],
tipo:[null],
previousOper:[null],
categoryGroup:[null],
status:[null],
clientID:[null],
operationType:[null],
clientName:[null],
disbursementDate:[null],
expirationDate:[null],
officer:[null],
sector:[null],
nextPayment:[null],
effectiveAnualRate:[null],
amount:[null],
adjustment:[null],
officerID:[null],
office:[null],
feeEndDate:[null],
}
),
Amortization: this.formBuilder.group({
share:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM37_VTI26.columns,'VA_TEXTINPUTBOXZUA_304871')],
expiration:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM37_VTI26.columns,'VA_DATEFIELDBPQSTR_142871')],
days:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM37_VTI26.columns,'VA_TEXTINPUTBOXMMN_363871')],
balanceCap:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM37_VTI26.columns,'VA_TEXTINPUTBOXTWI_476871')],
items1:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM37_VTI26.columns,'VA_TEXTINPUTBOXZNS_485871')],
items2:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM37_VTI26.columns,'VA_TEXTINPUTBOXRER_848871')],
items3:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM37_VTI26.columns,'VA_TEXTINPUTBOXBVN_129871')],
items4:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM37_VTI26.columns,'VA_TEXTINPUTBOXYCQ_383871')],
items5:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM37_VTI26.columns,'VA_TEXTINPUTBOXOFJ_503871')],
items7:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM37_VTI26.columns,'VA_TEXTINPUTBOXCGS_176871')],
items8:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM37_VTI26.columns,'VA_TEXTINPUTBOXLPC_409871')],
items9:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM37_VTI26.columns,'VA_TEXTINPUTBOXQLU_499871')],
items10:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM37_VTI26.columns,'VA_TEXTINPUTBOXYBZ_761871')],
items11:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM37_VTI26.columns,'VA_TEXTINPUTBOXOUD_939871')],
items12:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM37_VTI26.columns,'VA_TEXTINPUTBOXZPT_760871')],
items14:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM37_VTI26.columns,'VA_TEXTINPUTBOXADC_261871')],
items15:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM37_VTI26.columns,'VA_TEXTINPUTBOXHQL_468871')],
items6:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM37_VTI26.columns,'VA_TEXTINPUTBOXPNI_341871')],
items13:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM37_VTI26.columns,'VA_TEXTINPUTBOXUWA_570871')],
shareValue:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM37_VTI26.columns,'VA_TEXTINPUTBOXSXJ_950871')],
state:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM37_VTI26.columns,'VA_TEXTINPUTBOXEED_382871')],
porroga:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_LM37_VTI26.columns,'VA_TEXTINPUTBOXGOC_946871')],
}
),
ItemsLoan: this.formBuilder.group({
concept:[null],
description:[null],
itemType:[null],
paymentMethod:[null],
value:[null],
priority:[null],
latePayment:[null],
cause:[null],
reference:[null],
sign:[null],
pointsValue:[null],
pointsType:[null],
valueTotalRate:[null],
negotiatedRate:[null],
annualEfecRate:[null],
reajustmenSign:[null],
reajustmentValuePoints:[null],
reajustmentReference:[null],
gain:[null],
baseCalculation:[null],
chargeForRinging:[null],
warrantyType:[null],
warrantyNumber:[null],
coveragePercentage:[null],
warrantyValue:[null],
dividendType:[null],
interestPeriod:[null],
tableOtherRate:[null],
}
),
});
}
}