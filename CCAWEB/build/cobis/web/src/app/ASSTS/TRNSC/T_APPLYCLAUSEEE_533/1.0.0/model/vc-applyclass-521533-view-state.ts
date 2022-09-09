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
public T_APPLYCLAUSEEE_533!:FormGroup;
public VC_APPLYCLASS_521533:CobisGroupBoxModel = new CobisGroupBoxModel();
public VC_ZFLEAUPGRQ_436533 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VC_ZSSKHOVMQJ_164316 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANHEADOD_564612 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANHEADRO_349612 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANHEAINF_340612 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VC_TQAJSELMWD_823533 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VC_UWGIRFEPIR_820261 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_AMORTIZTOA_830871 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_LM37_VTI26: CobisGridModel = new CobisGridModel();
public G_AMORTIZOOI_302871 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_VASIMPLELABELLL_143612: CobisTextLabelModel = new CobisTextLabelModel();
public VA_VASIMPLELABELLL_867612: CobisTextLabelModel = new CobisTextLabelModel();
public VA_VABUTTONWVITZRQ_108612: CobisButtonModel = new CobisButtonModel();
public VA_VABUTTONORYJAMS_468612: CobisButtonModel = new CobisButtonModel();
public VA_5034UOFCASVGKTK_993612: CobisTextLabelModel = new CobisTextLabelModel();
public VA_2463BHBNLZPKLMU_865612: CobisTextLabelModel = new CobisTextLabelModel();
public VA_3853RRTWBIRUGHQ_533612: CobisTextLabelModel = new CobisTextLabelModel();
public VA_7292SEAHPRAXOKC_868612: CobisTextLabelModel = new CobisTextLabelModel();
public Spacer1906: CobisSpacerModel = new CobisSpacerModel();
public CM_APPLYCLA_C1S: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_APPLYCLASS_521533.id="VC_APPLYCLASS_521533";
this.VC_APPLYCLASS_521533.name="ViewContainerBase";
this.VC_APPLYCLASS_521533.colSpan=1;
this.VC_APPLYCLASS_521533.columns=1;
this.VC_APPLYCLASS_521533.enabled=ConstantsApi.mode.All;
this.VC_ZFLEAUPGRQ_436533.id="VC_ZFLEAUPGRQ_436533";
this.VC_ZFLEAUPGRQ_436533.name="ViewContainerBase";
this.VC_ZFLEAUPGRQ_436533.enabled=ConstantsApi.mode.All;
this.VC_ZFLEAUPGRQ_436533.colSpan=1;
this.VC_ZFLEAUPGRQ_436533.columns=1;
this.VC_ZSSKHOVMQJ_164316.id="VC_ZSSKHOVMQJ_164316";
this.VC_ZSSKHOVMQJ_164316.name="LoanHeaderInfoForm";
this.VC_ZSSKHOVMQJ_164316.enabled=ConstantsApi.mode.All;
this.VC_ZSSKHOVMQJ_164316.colSpan=1;
this.VC_ZSSKHOVMQJ_164316.columns=1;
this.G_LOANHEADOD_564612.id="G_LOANHEADOD_564612";
this.G_LOANHEADOD_564612.name="Group2443";
this.G_LOANHEADOD_564612.columns=12;
this.G_LOANHEADOD_564612.labelOrientation="Top";
this.G_LOANHEADOD_564612.colSpan=1;
this.G_LOANHEADOD_564612.enabled=ConstantsApi.mode.All;
this.G_LOANHEADOD_564612.visible=ConstantsApi.mode.All;
this.G_LOANHEADRO_349612.id="G_LOANHEADRO_349612";
this.G_LOANHEADRO_349612.name="Group1657";
this.G_LOANHEADRO_349612.columns=12;
this.G_LOANHEADRO_349612.labelOrientation="Top";
this.G_LOANHEADRO_349612.colSpan=1;
this.G_LOANHEADRO_349612.enabled=ConstantsApi.mode.All;
this.G_LOANHEADRO_349612.visible=ConstantsApi.mode.All;
this.G_LOANHEADRO_349612.attList = ["loanBankID"];
this.G_LOANHEAINF_340612.id="G_LOANHEAINF_340612";
this.G_LOANHEAINF_340612.name="Group1848";
this.G_LOANHEAINF_340612.columns=12;
this.G_LOANHEAINF_340612.labelOrientation="Top";
this.G_LOANHEAINF_340612.colSpan=1;
this.G_LOANHEAINF_340612.enabled=ConstantsApi.mode.All;
this.G_LOANHEAINF_340612.visible=ConstantsApi.mode.All;
this.G_LOANHEAINF_340612.attList = ["amount","balanceDue","status","office"];
this.VC_TQAJSELMWD_823533.id="VC_TQAJSELMWD_823533";
this.VC_TQAJSELMWD_823533.name="ViewContainerBase";
this.VC_TQAJSELMWD_823533.enabled=ConstantsApi.mode.All;
this.VC_TQAJSELMWD_823533.colSpan=1;
this.VC_TQAJSELMWD_823533.columns=1;
this.VC_UWGIRFEPIR_820261.id="VC_UWGIRFEPIR_820261";
this.VC_UWGIRFEPIR_820261.name="AmortizationForm";
this.VC_UWGIRFEPIR_820261.enabled=ConstantsApi.mode.All;
this.VC_UWGIRFEPIR_820261.colSpan=1;
this.VC_UWGIRFEPIR_820261.columns=1;
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
this.CM_APPLYCLA_C1S.id = "CM_APPLYCLA_C1S";
this.CM_APPLYCLA_C1S.name = "Command1";
this.CM_APPLYCLA_C1S.causesValidation=false;
this.CM_APPLYCLA_C1S.submitOnEnter=false;
this.CM_APPLYCLA_C1S.setFocus=false;
this.CM_APPLYCLA_C1S.close=false;
this.CM_APPLYCLA_C1S.label = cobis.translate("ASSTS.LBL_ASSTS_APLICARIP_57468");
this.CM_APPLYCLA_C1S.enabled = ConstantsApi.mode.All;
this.CM_APPLYCLA_C1S.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_143612.id = "VA_VASIMPLELABELLL_143612";
this.VA_VASIMPLELABELLL_143612.name = "clientName";
this.VA_VASIMPLELABELLL_143612.label = cobis.translate("ASSTS.LBL_ASSTS_CLIENTEWV_22561");
this.VA_VASIMPLELABELLL_143612.colSpan = 12;
this.VA_VASIMPLELABELLL_143612.withoutLabel = false;
this.VA_VASIMPLELABELLL_143612.enabled = ConstantsApi.mode.None;
this.VA_VASIMPLELABELLL_143612.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_867612.id = "VA_VASIMPLELABELLL_867612";
this.VA_VASIMPLELABELLL_867612.name = "loanBankID";
this.VA_VASIMPLELABELLL_867612.label = cobis.translate("ASSTS.LBL_ASSTS_PRSTAMOFK_44930");
this.VA_VASIMPLELABELLL_867612.attribute = "loanBankID";
this.VA_VASIMPLELABELLL_867612.colSpan = 7;
this.VA_VASIMPLELABELLL_867612.withoutLabel = false;
this.VA_VASIMPLELABELLL_867612.enabled = ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_867612.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_867612.image = "";
this.VA_VABUTTONWVITZRQ_108612.id = "VA_VABUTTONWVITZRQ_108612";
this.VA_VABUTTONWVITZRQ_108612.name = "VA_VABUTTONWVITZRQ_108612";
this.VA_VABUTTONWVITZRQ_108612.label = cobis.translate("ASSTS.LBL_ASSTS_MASINACIN_18792");
this.VA_VABUTTONWVITZRQ_108612.colSpan = 3;
this.VA_VABUTTONWVITZRQ_108612.withoutLabel = false;
this.VA_VABUTTONWVITZRQ_108612.causesValidation=false;
this.VA_VABUTTONWVITZRQ_108612.submitOnEnter=false;
this.VA_VABUTTONWVITZRQ_108612.setFocus=false;
this.VA_VABUTTONWVITZRQ_108612.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONWVITZRQ_108612.visible= ConstantsApi.mode.All;
this.VA_VABUTTONWVITZRQ_108612.icon = "glyphicon glyphicon-info-sign";
this.VA_VABUTTONORYJAMS_468612.id = "VA_VABUTTONORYJAMS_468612";
this.VA_VABUTTONORYJAMS_468612.name = "VA_VABUTTONORYJAMS_468612";
this.VA_VABUTTONORYJAMS_468612.label = cobis.translate("ASSTS.LBL_ASSTS_BUSCARYEV_82731");
this.VA_VABUTTONORYJAMS_468612.colSpan = 2;
this.VA_VABUTTONORYJAMS_468612.withoutLabel = false;
this.VA_VABUTTONORYJAMS_468612.causesValidation=false;
this.VA_VABUTTONORYJAMS_468612.submitOnEnter=false;
this.VA_VABUTTONORYJAMS_468612.setFocus=false;
this.VA_VABUTTONORYJAMS_468612.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONORYJAMS_468612.visible= ConstantsApi.mode.All;
this.VA_VABUTTONORYJAMS_468612.icon = "glyphicon glyphicon-search";
this.VA_5034UOFCASVGKTK_993612.id = "VA_5034UOFCASVGKTK_993612";
this.VA_5034UOFCASVGKTK_993612.name = "amount";
this.VA_5034UOFCASVGKTK_993612.label = cobis.translate("ASSTS.LBL_ASSTS_TIPOCRDOO_69382");
this.VA_5034UOFCASVGKTK_993612.attribute = "amount";
this.VA_5034UOFCASVGKTK_993612.colSpan = 1;
this.VA_5034UOFCASVGKTK_993612.withoutLabel = false;
this.VA_5034UOFCASVGKTK_993612.enabled = ConstantsApi.mode.All;
this.VA_5034UOFCASVGKTK_993612.visible= ConstantsApi.mode.All;
this.VA_2463BHBNLZPKLMU_865612.id = "VA_2463BHBNLZPKLMU_865612";
this.VA_2463BHBNLZPKLMU_865612.name = "balanceDue";
this.VA_2463BHBNLZPKLMU_865612.label = cobis.translate("ASSTS.LBL_ASSTS_SALDOEXBB_70535");
this.VA_2463BHBNLZPKLMU_865612.attribute = "balanceDue";
this.VA_2463BHBNLZPKLMU_865612.colSpan = 1;
this.VA_2463BHBNLZPKLMU_865612.withoutLabel = false;
this.VA_2463BHBNLZPKLMU_865612.enabled = ConstantsApi.mode.All;
this.VA_2463BHBNLZPKLMU_865612.visible= ConstantsApi.mode.All;
this.VA_3853RRTWBIRUGHQ_533612.id = "VA_3853RRTWBIRUGHQ_533612";
this.VA_3853RRTWBIRUGHQ_533612.name = "status";
this.VA_3853RRTWBIRUGHQ_533612.label = cobis.translate("ASSTS.LBL_ASSTS_ESTADOEAI_33340");
this.VA_3853RRTWBIRUGHQ_533612.attribute = "status";
this.VA_3853RRTWBIRUGHQ_533612.colSpan = 1;
this.VA_3853RRTWBIRUGHQ_533612.withoutLabel = false;
this.VA_3853RRTWBIRUGHQ_533612.enabled = ConstantsApi.mode.All;
this.VA_3853RRTWBIRUGHQ_533612.visible= ConstantsApi.mode.All;
this.VA_7292SEAHPRAXOKC_868612.id = "VA_7292SEAHPRAXOKC_868612";
this.VA_7292SEAHPRAXOKC_868612.name = "office";
this.VA_7292SEAHPRAXOKC_868612.label = cobis.translate("ASSTS.LBL_ASSTS_OFICINAHX_44623");
this.VA_7292SEAHPRAXOKC_868612.attribute = "office";
this.VA_7292SEAHPRAXOKC_868612.colSpan = 1;
this.VA_7292SEAHPRAXOKC_868612.withoutLabel = false;
this.VA_7292SEAHPRAXOKC_868612.enabled = ConstantsApi.mode.All;
this.VA_7292SEAHPRAXOKC_868612.visible= ConstantsApi.mode.All;
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
this.T_APPLYCLAUSEEE_533 = this.formBuilder.group({
Loan: this.formBuilder.group({
loanBankID:[{value: null, disabled: !this.VA_VASIMPLELABELLL_867612.visible}],
amount:[{value: null, disabled: !this.VA_5034UOFCASVGKTK_993612.visible}],
balanceDue:[{value: null, disabled: !this.VA_2463BHBNLZPKLMU_865612.visible}],
status:[{value: null, disabled: !this.VA_3853RRTWBIRUGHQ_533612.visible}],
office:[{value: null, disabled: !this.VA_7292SEAHPRAXOKC_868612.visible}],
numProcedure:[null],
quotaCredit:[null],
statusID:[null],
maxDateProrogation:[null],
lastProcessDate:[null],
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
statusCopy:[null],
idType:[null],
endDate:[null],
fondeadorLS:[null],
identityCardNumber:[null],
desOperationType:[null],
redesCont:[null],
newStatus:[null],
group:[null],
tipo:[null],
previousOper:[null],
categoryGroup:[null],
clientID:[null],
operationType:[null],
clientName:[null],
disbursementDate:[null],
expirationDate:[null],
officer:[null],
sector:[null],
nextPayment:[null],
effectiveAnualRate:[null],
adjustment:[null],
officerID:[null],
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