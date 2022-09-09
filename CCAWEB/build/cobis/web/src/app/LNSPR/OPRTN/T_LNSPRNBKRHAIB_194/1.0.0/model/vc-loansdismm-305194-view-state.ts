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
public T_LNSPRNBKRHAIB_194!:FormGroup;
public VC_LOANSDISMM_305194:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSDIUTS_240520 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSDIOOS_694520 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSDISMR_961520 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSDIMME_201520 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSDIMMM_711520 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_NW92_QCN40: CobisGridModel = new CobisGridModel();
public VA_3652TDZPJASKRXR_211520: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_9075VUUFEHIMVFN_360520: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_MEMBERXNGXBGLEO_835520: CobisDropDownListModel = new CobisDropDownListModel();
public VA_9266VJWWMPOMJFN_898520: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_3878VMYWQJKGBUI_207520: CobisDropDownListModel = new CobisDropDownListModel();
public VA_3194SGDCRJRKSEZ_549520: CobisTextAreaModel = new CobisTextAreaModel();
public VA_9291FBOEQJGPPQK_733520: CobisCheckBoxModel = new CobisCheckBoxModel();
public VA_2MABOJDXJMANZRD_284520: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public Spacer1316: CobisSpacerModel = new CobisSpacerModel();
public VA_3EZYKBGVYATGWHR_161520: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public Spacer2209: CobisSpacerModel = new CobisSpacerModel();
public VA_VABUTTONQQAURTL_245520: CobisButtonModel = new CobisButtonModel();
public VA_VABUTTONBPDWGMJ_893520: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LOANSDISMM_305194.id="VC_LOANSDISMM_305194";
this.VC_LOANSDISMM_305194.name="LoansDistributionMembers";
this.VC_LOANSDISMM_305194.colSpan=1;
this.VC_LOANSDISMM_305194.columns=1;
this.VC_LOANSDISMM_305194.enabled=ConstantsApi.mode.All;
this.G_LOANSDIUTS_240520.id="G_LOANSDIUTS_240520";
this.G_LOANSDIUTS_240520.name="Sec";
this.G_LOANSDIUTS_240520.columns=3;
this.G_LOANSDIUTS_240520.labelOrientation="Top";
this.G_LOANSDIUTS_240520.colSpan=1;
this.G_LOANSDIUTS_240520.enabled=ConstantsApi.mode.All;
this.G_LOANSDIUTS_240520.visible=ConstantsApi.mode.Insert + ConstantsApi.mode.Update;
this.G_LOANSDIUTS_240520.attList = ["sequential","codLine"];
this.G_LOANSDIOOS_694520.id="G_LOANSDIOOS_694520";
this.G_LOANSDIOOS_694520.name="Group2598";
this.G_LOANSDIOOS_694520.columns=3;
this.G_LOANSDIOOS_694520.labelOrientation="Top";
this.G_LOANSDIOOS_694520.colSpan=1;
this.G_LOANSDIOOS_694520.enabled=ConstantsApi.mode.All;
this.G_LOANSDIOOS_694520.visible=ConstantsApi.mode.Insert + ConstantsApi.mode.Update;
this.G_LOANSDIOOS_694520.attList = ["member","amount","currency","observations","control"];
this.G_LOANSDISMR_961520.id="G_LOANSDISMR_961520";
this.G_LOANSDISMR_961520.name="Group2772";
this.G_LOANSDISMR_961520.columns=3;
this.G_LOANSDISMR_961520.labelOrientation="Top";
this.G_LOANSDISMR_961520.colSpan=1;
this.G_LOANSDISMR_961520.enabled=ConstantsApi.mode.All;
this.G_LOANSDISMR_961520.visible=ConstantsApi.mode.Insert + ConstantsApi.mode.Update;
this.G_LOANSDISMR_961520.attList = ["used","available"];
this.G_LOANSDIMME_201520.id="G_LOANSDIMME_201520";
this.G_LOANSDIMME_201520.name="Group2240";
this.G_LOANSDIMME_201520.columns=4;
this.G_LOANSDIMME_201520.labelOrientation="Top";
this.G_LOANSDIMME_201520.colSpan=1;
this.G_LOANSDIMME_201520.enabled=ConstantsApi.mode.All;
this.G_LOANSDIMME_201520.visible=ConstantsApi.mode.Insert + ConstantsApi.mode.Update;
this.G_LOANSDIMMM_711520.id="G_LOANSDIMMM_711520";
this.G_LOANSDIMMM_711520.name="Group2331";
this.G_LOANSDIMMM_711520.columns=1;
this.G_LOANSDIMMM_711520.labelOrientation="Top";
this.G_LOANSDIMMM_711520.colSpan=1;
this.G_LOANSDIMMM_711520.enabled=ConstantsApi.mode.All;
this.G_LOANSDIMMM_711520.visible=ConstantsApi.mode.All;
this.G_LOANSDIMMM_711520.attList = ["member","currency","amount","used","available","controlAmount","observations","codeMember"];
this.VA_3652TDZPJASKRXR_211520.label = cobis.translate("LNSPR.LBL_LNSPR_SECUENCAI_74208");
this.VA_3652TDZPJASKRXR_211520.entity = "Members";
this.VA_3652TDZPJASKRXR_211520.attribute = "sequential";
this.VA_3652TDZPJASKRXR_211520.textCase= TextCaseOptions.NONE;
this.VA_3652TDZPJASKRXR_211520.format= "#";
this.VA_3652TDZPJASKRXR_211520.name="sequential";
this.VA_3652TDZPJASKRXR_211520.id="VA_3652TDZPJASKRXR_211520";
this.VA_3652TDZPJASKRXR_211520.colSpan=1;
this.VA_3652TDZPJASKRXR_211520.withoutLabel = false;
this.VA_3652TDZPJASKRXR_211520.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_3652TDZPJASKRXR_211520.enabled = ConstantsApi.mode.All;
this.VA_3652TDZPJASKRXR_211520.visible= ConstantsApi.mode.All;
this.VA_9075VUUFEHIMVFN_360520.label = cobis.translate("LNSPR.LBL_LNSPR_CDIGOLNEA_16925");
this.VA_9075VUUFEHIMVFN_360520.entity = "Members";
this.VA_9075VUUFEHIMVFN_360520.attribute = "codLine";
this.VA_9075VUUFEHIMVFN_360520.textCase= TextCaseOptions.NONE;
this.VA_9075VUUFEHIMVFN_360520.name="codLine";
this.VA_9075VUUFEHIMVFN_360520.id="VA_9075VUUFEHIMVFN_360520";
this.VA_9075VUUFEHIMVFN_360520.colSpan=1;
this.VA_9075VUUFEHIMVFN_360520.withoutLabel = false;
this.VA_9075VUUFEHIMVFN_360520.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_9075VUUFEHIMVFN_360520.enabled = ConstantsApi.mode.All;
this.VA_9075VUUFEHIMVFN_360520.visible= ConstantsApi.mode.All;
this.VA_MEMBERXNGXBGLEO_835520.label = cobis.translate("LNSPR.LBL_LNSPR_MIEMBROMR_17587");
this.VA_MEMBERXNGXBGLEO_835520.blankOption=true;
this.VA_MEMBERXNGXBGLEO_835520.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_MEMBERXNGXBGLEO_835520.entity = "Members";
this.VA_MEMBERXNGXBGLEO_835520.attribute = "member";
this.VA_MEMBERXNGXBGLEO_835520.textField = "nameClient";
this.VA_MEMBERXNGXBGLEO_835520.valueField = "code";
this.VA_MEMBERXNGXBGLEO_835520.showId= true;
this.VA_MEMBERXNGXBGLEO_835520.name="member";
this.VA_MEMBERXNGXBGLEO_835520.id="VA_MEMBERXNGXBGLEO_835520";
this.VA_MEMBERXNGXBGLEO_835520.colSpan=1;
this.VA_MEMBERXNGXBGLEO_835520.withoutLabel = false;
this.VA_MEMBERXNGXBGLEO_835520.readOnly = ConstantsApi.mode.Query;
this.VA_MEMBERXNGXBGLEO_835520.enabled = ConstantsApi.mode.All;
this.VA_MEMBERXNGXBGLEO_835520.visible= ConstantsApi.mode.All;
this.VA_MEMBERXNGXBGLEO_835520.required = true;
this.VA_MEMBERXNGXBGLEO_835520.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_MEMBERXNGXBGLEO_835520.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LNSPR_CAMPOREIQ_59717')
};
this.VA_9266VJWWMPOMJFN_898520.label = cobis.translate("LNSPR.LBL_LNSPR_MONTOEMFX_52083");
this.VA_9266VJWWMPOMJFN_898520.entity = "Members";
this.VA_9266VJWWMPOMJFN_898520.attribute = "amount";
this.VA_9266VJWWMPOMJFN_898520.textCase= TextCaseOptions.NONE;
this.VA_9266VJWWMPOMJFN_898520.format= "c";
this.VA_9266VJWWMPOMJFN_898520.name="amount";
this.VA_9266VJWWMPOMJFN_898520.id="VA_9266VJWWMPOMJFN_898520";
this.VA_9266VJWWMPOMJFN_898520.colSpan=1;
this.VA_9266VJWWMPOMJFN_898520.withoutLabel = false;
this.VA_9266VJWWMPOMJFN_898520.readOnly = ConstantsApi.mode.Query;
this.VA_9266VJWWMPOMJFN_898520.enabled = ConstantsApi.mode.All;
this.VA_9266VJWWMPOMJFN_898520.visible= ConstantsApi.mode.All;
this.VA_3878VMYWQJKGBUI_207520.label = cobis.translate("LNSPR.LBL_LNSPR_MONEDAFCA_83005");
this.VA_3878VMYWQJKGBUI_207520.blankOption=true;
this.VA_3878VMYWQJKGBUI_207520.entity = "Members";
this.VA_3878VMYWQJKGBUI_207520.attribute = "currency";
this.VA_3878VMYWQJKGBUI_207520.textField = "value";
this.VA_3878VMYWQJKGBUI_207520.valueField = "code";
this.VA_3878VMYWQJKGBUI_207520.showId= true;
this.VA_3878VMYWQJKGBUI_207520.name="currency";
this.VA_3878VMYWQJKGBUI_207520.id="VA_3878VMYWQJKGBUI_207520";
this.VA_3878VMYWQJKGBUI_207520.colSpan=1;
this.VA_3878VMYWQJKGBUI_207520.withoutLabel = false;
this.VA_3878VMYWQJKGBUI_207520.readOnly = ConstantsApi.mode.Query;
this.VA_3878VMYWQJKGBUI_207520.enabled = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_3878VMYWQJKGBUI_207520.visible= ConstantsApi.mode.All;
this.VA_3878VMYWQJKGBUI_207520.required = true;
this.VA_3878VMYWQJKGBUI_207520.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_3878VMYWQJKGBUI_207520.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_3194SGDCRJRKSEZ_549520.label = cobis.translate("LNSPR.LBL_LNSPR_OBSERVAEC_93216");
this.VA_3194SGDCRJRKSEZ_549520.entity = "Members";
this.VA_3194SGDCRJRKSEZ_549520.attribute = "observations";
this.VA_3194SGDCRJRKSEZ_549520.numberLines=5;
this.VA_3194SGDCRJRKSEZ_549520.textCase= TextCaseOptions.UPPER_CASE;
this.VA_3194SGDCRJRKSEZ_549520.name="observations";
this.VA_3194SGDCRJRKSEZ_549520.id="VA_3194SGDCRJRKSEZ_549520";
this.VA_3194SGDCRJRKSEZ_549520.colSpan=3;
this.VA_3194SGDCRJRKSEZ_549520.withoutLabel = false;
this.VA_3194SGDCRJRKSEZ_549520.readOnly = ConstantsApi.mode.Query;
this.VA_3194SGDCRJRKSEZ_549520.enabled = ConstantsApi.mode.All;
this.VA_3194SGDCRJRKSEZ_549520.visible= ConstantsApi.mode.All;
this.VA_9291FBOEQJGPPQK_733520.id = "VA_9291FBOEQJGPPQK_733520";
this.VA_9291FBOEQJGPPQK_733520.name = "control";
this.VA_9291FBOEQJGPPQK_733520.label = cobis.translate("LNSPR.LBL_LNSPR_CONTROLOA_79038");
this.VA_9291FBOEQJGPPQK_733520.entity = "Members";
this.VA_9291FBOEQJGPPQK_733520.attribute = "control";
this.VA_9291FBOEQJGPPQK_733520.colSpan = 1;
this.VA_9291FBOEQJGPPQK_733520.withoutLabel = false;
this.VA_9291FBOEQJGPPQK_733520.readOnly =ConstantsApi.mode.Query;
this.VA_9291FBOEQJGPPQK_733520.enabled = ConstantsApi.mode.All;
this.VA_9291FBOEQJGPPQK_733520.visible= ConstantsApi.mode.All;
this.VA_9291FBOEQJGPPQK_733520.trueValue ="S";
this.VA_9291FBOEQJGPPQK_733520.falseValue ="N";
this.VA_2MABOJDXJMANZRD_284520.label = cobis.translate("LNSPR.LBL_LOANS_UTILIZAOO_53309");
this.VA_2MABOJDXJMANZRD_284520.entity = "Members";
this.VA_2MABOJDXJMANZRD_284520.attribute = "used";
this.VA_2MABOJDXJMANZRD_284520.textCase= TextCaseOptions.NONE;
this.VA_2MABOJDXJMANZRD_284520.format= "c";
this.VA_2MABOJDXJMANZRD_284520.name="used";
this.VA_2MABOJDXJMANZRD_284520.id="VA_2MABOJDXJMANZRD_284520";
this.VA_2MABOJDXJMANZRD_284520.colSpan=1;
this.VA_2MABOJDXJMANZRD_284520.withoutLabel = false;
this.VA_2MABOJDXJMANZRD_284520.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_2MABOJDXJMANZRD_284520.enabled = ConstantsApi.mode.All;
this.VA_2MABOJDXJMANZRD_284520.visible= ConstantsApi.mode.All;
this.Spacer1316.id = "Spacer1316";
this.Spacer1316.name = "Spacer1316";
this.Spacer1316.colSpan = 1;
this.Spacer1316.visible= ConstantsApi.mode.All;
this.VA_3EZYKBGVYATGWHR_161520.label = cobis.translate("LNSPR.LBL_LNSPR_DISPONILE_55740");
this.VA_3EZYKBGVYATGWHR_161520.entity = "Members";
this.VA_3EZYKBGVYATGWHR_161520.attribute = "available";
this.VA_3EZYKBGVYATGWHR_161520.textCase= TextCaseOptions.NONE;
this.VA_3EZYKBGVYATGWHR_161520.format= "c";
this.VA_3EZYKBGVYATGWHR_161520.name="available";
this.VA_3EZYKBGVYATGWHR_161520.id="VA_3EZYKBGVYATGWHR_161520";
this.VA_3EZYKBGVYATGWHR_161520.colSpan=1;
this.VA_3EZYKBGVYATGWHR_161520.withoutLabel = false;
this.VA_3EZYKBGVYATGWHR_161520.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_3EZYKBGVYATGWHR_161520.enabled = ConstantsApi.mode.All;
this.VA_3EZYKBGVYATGWHR_161520.visible= ConstantsApi.mode.All;
this.Spacer2209.id = "Spacer2209";
this.Spacer2209.name = "Spacer2209";
this.Spacer2209.colSpan = 1;
this.Spacer2209.visible= ConstantsApi.mode.All;
this.VA_VABUTTONQQAURTL_245520.id = "VA_VABUTTONQQAURTL_245520";
this.VA_VABUTTONQQAURTL_245520.name = "mGuardar";
this.VA_VABUTTONQQAURTL_245520.label = cobis.translate("LNSPR.LBL_LNSPR_GUARDARRI_81055");
this.VA_VABUTTONQQAURTL_245520.colSpan = 1;
this.VA_VABUTTONQQAURTL_245520.withoutLabel = false;
this.VA_VABUTTONQQAURTL_245520.causesValidation=false;
this.VA_VABUTTONQQAURTL_245520.submitOnEnter=false;
this.VA_VABUTTONQQAURTL_245520.setFocus=false;
this.VA_VABUTTONQQAURTL_245520.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONQQAURTL_245520.visible= ConstantsApi.mode.All;
this.VA_VABUTTONQQAURTL_245520.attributesGroup = this.G_LOANSDIMME_201520.attList;
this.VA_VABUTTONBPDWGMJ_893520.id = "VA_VABUTTONBPDWGMJ_893520";
this.VA_VABUTTONBPDWGMJ_893520.name = "mCancelar";
this.VA_VABUTTONBPDWGMJ_893520.label = cobis.translate("LNSPR.LBL_LNSPR_CANCELARR_70217");
this.VA_VABUTTONBPDWGMJ_893520.colSpan = 1;
this.VA_VABUTTONBPDWGMJ_893520.withoutLabel = false;
this.VA_VABUTTONBPDWGMJ_893520.causesValidation=false;
this.VA_VABUTTONBPDWGMJ_893520.submitOnEnter=false;
this.VA_VABUTTONBPDWGMJ_893520.setFocus=false;
this.VA_VABUTTONBPDWGMJ_893520.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONBPDWGMJ_893520.visible= ConstantsApi.mode.All;
this.VA_VABUTTONBPDWGMJ_893520.attributesGroup = this.G_LOANSDIMME_201520.attList;
this.QV_NW92_QCN40.pageSize=5;
this.QV_NW92_QCN40.id='QV_NW92_QCN40';
this.QV_NW92_QCN40.name='QV_NW92_QCN40';
this.QV_NW92_QCN40.pageable=true;
this.QV_NW92_QCN40.sortable=false;
this.QV_NW92_QCN40.resizable=true;
this.QV_NW92_QCN40.scrollable=true
this.QV_NW92_QCN40.confirmRowDeletion=true;
this.QV_NW92_QCN40.exportToExcel=false;
this.QV_NW92_QCN40.exportToPdf=false;
this.QV_NW92_QCN40.height=0;
this.QV_NW92_QCN40.filterableColumns=false;
this.QV_NW92_QCN40.entityName='MemberDetail';
this.QV_NW92_QCN40.appendRecords=false;
this.QV_NW92_QCN40.rowDetail=false;
this.QV_NW92_QCN40.columnMenu = true;
this.QV_NW92_QCN40.editMode=CommonsConstants.GRID_EDIT_MODE_INLINE;
this.QV_NW92_QCN40.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
this.QV_NW92_QCN40.actions=[ComplexConstants.GRID_ACTION_DELETE];
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_NW92_QCN40.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXLAB_524520",
label : cobis.translate('LNSPR.LBL_LNSPR_MIEMBROMR_17587'),
field : 'member',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXLAB_524520',
name :'member',
withoutLabel : true,
attribute : 'member',
entity : 'MemberDetail',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXDRG_443520",
label : cobis.translate('LNSPR.LBL_LNSPR_MONEDAFCA_83005'),
field : 'currency',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXDRG_443520',
name :'currency',
withoutLabel : true,
attribute : 'currency',
entity : 'MemberDetail',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXOYO_569520",
label : cobis.translate('LNSPR.LBL_LNSPR_MONTOEMFX_52083'),
field : 'amount',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXOYO_569520',
name :'amount',
withoutLabel : true,
attribute : 'amount',
entity : 'MemberDetail',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXSNW_442520",
label : cobis.translate('LNSPR.LBL_LOANS_UTILIZAOO_53309'),
field : 'used',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXSNW_442520',
name :'used',
withoutLabel : true,
attribute : 'used',
entity : 'MemberDetail',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXNMX_649520",
label : cobis.translate('LNSPR.LBL_LNSPR_DISPONILE_55740'),
field : 'available',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXNMX_649520',
name :'available',
withoutLabel : true,
attribute : 'available',
entity : 'MemberDetail',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXOXC_144520",
label : cobis.translate('LNSPR.LBL_LNSPR_CONTROLOA_79038'),
field : 'controlAmount',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXOXC_144520',
name :'controlAmount',
withoutLabel : true,
attribute : 'controlAmount',
entity : 'MemberDetail',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXQNR_943520",
label : cobis.translate('LNSPR.LBL_LNSPR_OBSERVAEC_93216'),
field : 'observations',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXQNR_943520',
name :'observations',
withoutLabel : true,
attribute : 'observations',
entity : 'MemberDetail',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.UPPER_CASE,
}
},
]);
this.T_LNSPRNBKRHAIB_194 = this.formBuilder.group({
Members: this.formBuilder.group({
sequential:[{value: null, disabled: !this.VA_3652TDZPJASKRXR_211520.visible},CobisDesignerUtil.getValidationFunctions(this.VA_3652TDZPJASKRXR_211520.validationFunctions!)],
codLine:[{value: null, disabled: !this.VA_9075VUUFEHIMVFN_360520.visible},CobisDesignerUtil.getValidationFunctions(this.VA_9075VUUFEHIMVFN_360520.validationFunctions!)],
member:[{value: null, disabled: !this.VA_MEMBERXNGXBGLEO_835520.visible},CobisDesignerUtil.getValidationFunctions(this.VA_MEMBERXNGXBGLEO_835520.validationFunctions!)],
amount:[{value: null, disabled: !this.VA_9266VJWWMPOMJFN_898520.visible},CobisDesignerUtil.getValidationFunctions(this.VA_9266VJWWMPOMJFN_898520.validationFunctions!)],
currency:[{value: null, disabled: !this.VA_3878VMYWQJKGBUI_207520.visible},CobisDesignerUtil.getValidationFunctions(this.VA_3878VMYWQJKGBUI_207520.validationFunctions!)],
observations:[{value: null, disabled: !this.VA_3194SGDCRJRKSEZ_549520.visible},CobisDesignerUtil.getValidationFunctions(this.VA_3194SGDCRJRKSEZ_549520.validationFunctions!)],
control:[{value: false, disabled: !this.VA_9291FBOEQJGPPQK_733520.visible},CobisDesignerUtil.getValidationFunctions(this.VA_9291FBOEQJGPPQK_733520.validationFunctions!)],
used:[{value: null, disabled: !this.VA_2MABOJDXJMANZRD_284520.visible},CobisDesignerUtil.getValidationFunctions(this.VA_2MABOJDXJMANZRD_284520.validationFunctions!)],
available:[{value: null, disabled: !this.VA_3EZYKBGVYATGWHR_161520.visible},CobisDesignerUtil.getValidationFunctions(this.VA_3EZYKBGVYATGWHR_161520.validationFunctions!)],
memberName:[null],
editionMode:[null],
}
),
MemberDetail: this.formBuilder.group({
member:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_NW92_QCN40.columns,'VA_TEXTINPUTBOXLAB_524520')],
currency:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_NW92_QCN40.columns,'VA_TEXTINPUTBOXDRG_443520')],
amount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_NW92_QCN40.columns,'VA_TEXTINPUTBOXOYO_569520')],
used:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_NW92_QCN40.columns,'VA_TEXTINPUTBOXSNW_442520')],
available:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_NW92_QCN40.columns,'VA_TEXTINPUTBOXNMX_649520')],
controlAmount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_NW92_QCN40.columns,'VA_TEXTINPUTBOXOXC_144520')],
observations:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_NW92_QCN40.columns,'VA_TEXTINPUTBOXQNR_943520')],
codeMember:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_NW92_QCN40.columns,'VA_TEXTINPUTBOXXXZ_656520')],
}
),
});
}
}