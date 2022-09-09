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
public T_GENERALINAOIT_347!:FormGroup;
public VC_GENERALINO_421347:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALIAI_310203 : CobisCollapsibleContainerModel = new CobisCollapsibleContainerModel();
public G_GENERALNII_893203_item : CobisCollapsibleItemModel = new CobisCollapsibleItemModel();
public G_GENERALNII_893203 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALNTI_350203 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALTOT_320203 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALONN_841203 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALINO_434203 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALONI_753203 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALANO_847203 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALIII_644203 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALNNT_676203_item : CobisCollapsibleItemModel = new CobisCollapsibleItemModel();
public G_GENERALNNT_676203 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALOAO_673203 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALITA_364203 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALNNA_696203 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALIOI_483203 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALNOA_213203 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALOAN_318203_item : CobisCollapsibleItemModel = new CobisCollapsibleItemModel();
public G_GENERALOAN_318203 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALTIO_414203 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALNTO_230203 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALNIN_993203 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALINO_773203 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_TEXTINPUTBOXYLL_293203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXFHY_331203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXXCX_878203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL11DMRXFYBTRJ_832203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXOZJ_807203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXCLV_313203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXCEU_727203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXZST_196203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXKKT_290203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXQVD_784203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXFUR_725203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXNLU_276203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXXAE_419203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXNUC_515203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXMIJ_255203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL148YHTMQIFBH_165203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL98VYAYLZCUKZ_984203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL149ECRVIIDXJ_360203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXTXW_844203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL150TJUVFKMWM_571203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXVHS_357203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL151XEUXPLAEA_433203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXVBB_693203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXWVS_331203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXLAA_716203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXEUN_350203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXPCU_828203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL169OXNPIMJZK_188203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL170OEOBJNBNE_695203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_4624BUKADQWYBLU_749203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL147RUDCEIBHO_731203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXVBP_896203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL102IZHQPGLGQ_823203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXSFC_390203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXZSP_614203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL153PEYBRIIBA_813203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL154WEXTAMOTB_871203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL155VLXVEOBDY_344203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL156OKGIGKFEX_212203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL157AGGZBEULZ_816203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL158WGHVVWVEK_572203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL159WPDNFJVTU_966203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL160HJQNBSHMS_764203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL161CZCIPBKLM_114203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXXQS_367203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXDFL_233203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXLDN_789203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXPRC_818203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXAYN_905203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL146AYXFKCRYI_168203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXHNK_820203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXMWQ_662203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXYAE_738203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXPRR_754203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXFJI_119203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXSJD_345203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXLZX_625203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXZYM_339203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXTAU_538203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXWQL_188203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXQNT_219203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXXYN_505203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXGBW_313203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TEXTINPUTBOXKJW_728203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL32CDFPUYWBGD_758203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL46RBGZXOSXUD_578203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL33GXLNAEOZIW_513203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL54TKWEEBKVXN_134203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL44RQKRIFDDCK_361203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL18MPQAUPJEQF_886203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL24NFMYARIPPW_188203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL22GPNCCEADAN_455203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL25RWYMCMPQKL_227203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL23ZUQVNTSTGF_643203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL77JLESNGFECP_839203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL49ZEUCHXHDSZ_263203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL81JBFTYRSPYI_282203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL111PZXDZUYUC_787203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL113YQSWHDUHL_890203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL48UDRRPRVRAD_844203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL53CZDOJNOMFT_346203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL112OCPGNLXFG_495203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_BALLOOMFEEERNAZ_793203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL80ASFOWXJRDC_132203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL35HREVITBWJO_552203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_COL34HWLCGTUDDY_405203: CobisTextLabelModel = new CobisTextLabelModel();
public VA_1FGSVHUUVWIKFUH_287203: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public VA_2SRBPZVHVQZKGLJ_978203: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public VA_7HLMTHMOBEPUKDK_450203: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public VA_3NNEJBUKBEXSHGE_308203: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public VA_4FLCMFUIKOOYYCR_921203: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public VA_5KYGLTQZCBSQIFR_819203: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public VA_6ECRCCEMLGMWTWN_816203: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public Spacer2685: CobisSpacerModel = new CobisSpacerModel();
public VA_VABUTTONDDDDEEH_709203: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_GENERALINO_421347.id="VC_GENERALINO_421347";
this.VC_GENERALINO_421347.name="GeneralInformationForm";
this.VC_GENERALINO_421347.colSpan=1;
this.VC_GENERALINO_421347.columns=1;
this.VC_GENERALINO_421347.enabled=ConstantsApi.mode.All;
this.G_GENERALIAI_310203.id="G_GENERALIAI_310203";
this.G_GENERALIAI_310203.name="GeneralInformationForm";
this.G_GENERALIAI_310203.enabled=ConstantsApi.mode.All;
this.G_GENERALIAI_310203.controlType = ControlType.COLLAPSIBLE;
this.G_GENERALIAI_310203.colSpan=1;
this.G_GENERALIAI_310203.childrenGroups = ["G_GENERALNII_893203_item","G_GENERALNNT_676203_item","G_GENERALOAN_318203_item"];
this.G_GENERALNII_893203_item.id="G_GENERALNII_893203_item";
this.G_GENERALNII_893203_item.label=cobis.translate("ASSTS.LBL_ASSTS_INACINGAA_67127");
this.G_GENERALNII_893203_item.childrenGroups = ['G_GENERALNII_893203'];
this.G_GENERALNII_893203_item.colSpan=1;
this.G_GENERALNII_893203_item.enabled=ConstantsApi.mode.All;
this.G_GENERALNII_893203_item.visible=ConstantsApi.mode.All;
this.G_GENERALNII_893203.id="G_GENERALNII_893203";
this.G_GENERALNII_893203.name="GroupLayout1472";
this.G_GENERALNII_893203.columns=1;
this.G_GENERALNII_893203.childrenGroups = ["G_GENERALNTI_350203"];
this.G_GENERALNII_893203.colSpan=1;
this.G_GENERALNII_893203.enabled=ConstantsApi.mode.All;
this.G_GENERALNII_893203.visible=ConstantsApi.mode.All;
this.G_GENERALNTI_350203.id="G_GENERALNTI_350203";
this.G_GENERALNTI_350203.name="GroupLayout2751";
this.G_GENERALNTI_350203.columns=1;
this.G_GENERALNTI_350203.childrenGroups = ["G_GENERALTOT_320203","G_GENERALONN_841203","G_GENERALINO_434203","G_GENERALONI_753203","G_GENERALANO_847203","G_GENERALIII_644203"];
this.G_GENERALNTI_350203.colSpan=1;
this.G_GENERALNTI_350203.enabled=ConstantsApi.mode.All;
this.G_GENERALNTI_350203.visible=ConstantsApi.mode.All;
this.G_GENERALTOT_320203.id="G_GENERALTOT_320203";
this.G_GENERALTOT_320203.name="Group2346";
this.G_GENERALTOT_320203.columns=2;
this.G_GENERALTOT_320203.labelOrientation="Left";
this.G_GENERALTOT_320203.colSpan=1;
this.G_GENERALTOT_320203.enabled=ConstantsApi.mode.All;
this.G_GENERALTOT_320203.visible=ConstantsApi.mode.All;
this.G_GENERALTOT_320203.attList = ["col30","col82","col91","col11","col89","col70","col3","col74","col4","col63","col28","col83","col127","col96","col116","col148","col98","col149","col94","col150","col16","col151","col17","col138","col13","col139","col71","col169","col170","companySold","sectorDesc"];
this.G_GENERALONN_841203.id="G_GENERALONN_841203";
this.G_GENERALONN_841203.label=cobis.translate("ASSTS.LBL_ASSTS_INACINDOU_54590");
this.G_GENERALONN_841203.name="Group1470";
this.G_GENERALONN_841203.columns=2;
this.G_GENERALONN_841203.labelOrientation="Left";
this.G_GENERALONN_841203.colSpan=1;
this.G_GENERALONN_841203.enabled=ConstantsApi.mode.All;
this.G_GENERALONN_841203.visible=ConstantsApi.mode.All;
this.G_GENERALONN_841203.attList = ["col100","col102","col103","col88"];
this.G_GENERALINO_434203.id="G_GENERALINO_434203";
this.G_GENERALINO_434203.label=cobis.translate("ASSTS.LBL_ASSTS_GRUPOECCI_16695");
this.G_GENERALINO_434203.name="Group1724";
this.G_GENERALINO_434203.columns=2;
this.G_GENERALINO_434203.labelOrientation="Left";
this.G_GENERALINO_434203.colSpan=1;
this.G_GENERALINO_434203.enabled=ConstantsApi.mode.All;
this.G_GENERALINO_434203.visible=ConstantsApi.mode.All;
this.G_GENERALINO_434203.attList = ["col153","col154","col155","col156","col157","col158","col159","col160","col161"];
this.G_GENERALONI_753203.id="G_GENERALONI_753203";
this.G_GENERALONI_753203.label=cobis.translate("ASSTS.LBL_ASSTS_FINANCITT_72718");
this.G_GENERALONI_753203.name="Group1127";
this.G_GENERALONI_753203.columns=2;
this.G_GENERALONI_753203.labelOrientation="Left";
this.G_GENERALONI_753203.colSpan=1;
this.G_GENERALONI_753203.enabled=ConstantsApi.mode.All;
this.G_GENERALONI_753203.visible=ConstantsApi.mode.All;
this.G_GENERALONI_753203.attList = ["col93","col106","col10","col144","col92","col146"];
this.G_GENERALANO_847203.id="G_GENERALANO_847203";
this.G_GENERALANO_847203.label=cobis.translate("ASSTS.LBL_ASSTS_COBRANZAA_71245");
this.G_GENERALANO_847203.name="Group2395";
this.G_GENERALANO_847203.columns=2;
this.G_GENERALANO_847203.labelOrientation="Left";
this.G_GENERALANO_847203.colSpan=1;
this.G_GENERALANO_847203.enabled=ConstantsApi.mode.All;
this.G_GENERALANO_847203.visible=ConstantsApi.mode.All;
this.G_GENERALANO_847203.attList = ["col128","col136","col132","col137","col14"];
this.G_GENERALIII_644203.id="G_GENERALIII_644203";
this.G_GENERALIII_644203.label=cobis.translate("ASSTS.LBL_ASSTS_RENOVACSE_44398");
this.G_GENERALIII_644203.name="Group2849";
this.G_GENERALIII_644203.columns=2;
this.G_GENERALIII_644203.labelOrientation="Left";
this.G_GENERALIII_644203.colSpan=1;
this.G_GENERALIII_644203.enabled=ConstantsApi.mode.All;
this.G_GENERALIII_644203.visible=ConstantsApi.mode.All;
this.G_GENERALIII_644203.attList = ["col37","col38","col140","col141","col119","col133","col95","col97","col134"];
this.G_GENERALNNT_676203_item.id="G_GENERALNNT_676203_item";
this.G_GENERALNNT_676203_item.label=cobis.translate("ASSTS.LBL_ASSTS_CONDICIEE_44365");
this.G_GENERALNNT_676203_item.childrenGroups = ['G_GENERALNNT_676203'];
this.G_GENERALNNT_676203_item.colSpan=1;
this.G_GENERALNNT_676203_item.enabled=ConstantsApi.mode.All;
this.G_GENERALNNT_676203_item.visible=ConstantsApi.mode.All;
this.G_GENERALNNT_676203.id="G_GENERALNNT_676203";
this.G_GENERALNNT_676203.name="GroupLayout1277";
this.G_GENERALNNT_676203.columns=1;
this.G_GENERALNNT_676203.childrenGroups = ["G_GENERALOAO_673203"];
this.G_GENERALNNT_676203.colSpan=1;
this.G_GENERALNNT_676203.enabled=ConstantsApi.mode.All;
this.G_GENERALNNT_676203.visible=ConstantsApi.mode.All;
this.G_GENERALOAO_673203.id="G_GENERALOAO_673203";
this.G_GENERALOAO_673203.name="GroupLayout2205";
this.G_GENERALOAO_673203.columns=1;
this.G_GENERALOAO_673203.childrenGroups = ["G_GENERALITA_364203","G_GENERALNNA_696203","G_GENERALIOI_483203","G_GENERALNOA_213203"];
this.G_GENERALOAO_673203.colSpan=1;
this.G_GENERALOAO_673203.enabled=ConstantsApi.mode.All;
this.G_GENERALOAO_673203.visible=ConstantsApi.mode.All;
this.G_GENERALITA_364203.id="G_GENERALITA_364203";
this.G_GENERALITA_364203.label=cobis.translate("ASSTS.LBL_ASSTS_PAGOSDEOA_39140");
this.G_GENERALITA_364203.name="Group1998";
this.G_GENERALITA_364203.columns=2;
this.G_GENERALITA_364203.labelOrientation="Left";
this.G_GENERALITA_364203.colSpan=1;
this.G_GENERALITA_364203.enabled=ConstantsApi.mode.All;
this.G_GENERALITA_364203.visible=ConstantsApi.mode.All;
this.G_GENERALITA_364203.attList = ["col32","col46","col33","col54","col44"];
this.G_GENERALNNA_696203.id="G_GENERALNNA_696203";
this.G_GENERALNNA_696203.label=cobis.translate("ASSTS.LBL_ASSTS_PRSTAMOCV_96028");
this.G_GENERALNNA_696203.name="Group1893";
this.G_GENERALNNA_696203.columns=2;
this.G_GENERALNNA_696203.labelOrientation="Left";
this.G_GENERALNNA_696203.colSpan=1;
this.G_GENERALNNA_696203.enabled=ConstantsApi.mode.All;
this.G_GENERALNNA_696203.visible=ConstantsApi.mode.All;
this.G_GENERALNNA_696203.attList = ["col18","col24","col22","col25","col23","col77"];
this.G_GENERALIOI_483203.id="G_GENERALIOI_483203";
this.G_GENERALIOI_483203.label=cobis.translate("ASSTS.LBL_ASSTS_TABLAAMIO_45588");
this.G_GENERALIOI_483203.name="Group2800";
this.G_GENERALIOI_483203.columns=2;
this.G_GENERALIOI_483203.labelOrientation="Left";
this.G_GENERALIOI_483203.colSpan=1;
this.G_GENERALIOI_483203.enabled=ConstantsApi.mode.All;
this.G_GENERALIOI_483203.visible=ConstantsApi.mode.All;
this.G_GENERALIOI_483203.attList = ["col49","col81","col111","col113","col48","col53","col112","balloomFee"];
this.G_GENERALNOA_213203.id="G_GENERALNOA_213203";
this.G_GENERALNOA_213203.label=cobis.translate("ASSTS.LBL_ASSTS_REAJUSTEE_13520");
this.G_GENERALNOA_213203.name="Group1763";
this.G_GENERALNOA_213203.columns=2;
this.G_GENERALNOA_213203.labelOrientation="Left";
this.G_GENERALNOA_213203.colSpan=1;
this.G_GENERALNOA_213203.enabled=ConstantsApi.mode.All;
this.G_GENERALNOA_213203.visible=ConstantsApi.mode.All;
this.G_GENERALNOA_213203.attList = ["col80","col35","col34"];
this.G_GENERALOAN_318203_item.id="G_GENERALOAN_318203_item";
this.G_GENERALOAN_318203_item.label=cobis.translate("ASSTS.LBL_ASSTS_CONDICINE_19717");
this.G_GENERALOAN_318203_item.childrenGroups = ['G_GENERALOAN_318203'];
this.G_GENERALOAN_318203_item.colSpan=1;
this.G_GENERALOAN_318203_item.enabled=ConstantsApi.mode.All;
this.G_GENERALOAN_318203_item.visible=ConstantsApi.mode.All;
this.G_GENERALOAN_318203.id="G_GENERALOAN_318203";
this.G_GENERALOAN_318203.name="GroupLayout1145";
this.G_GENERALOAN_318203.columns=2;
this.G_GENERALOAN_318203.childrenGroups = ["G_GENERALTIO_414203","G_GENERALNTO_230203","G_GENERALNIN_993203"];
this.G_GENERALOAN_318203.colSpan=1;
this.G_GENERALOAN_318203.enabled=ConstantsApi.mode.All;
this.G_GENERALOAN_318203.visible=ConstantsApi.mode.All;
this.G_GENERALTIO_414203.id="G_GENERALTIO_414203";
this.G_GENERALTIO_414203.name="Group1450";
this.G_GENERALTIO_414203.columns=2;
this.G_GENERALTIO_414203.labelOrientation="Top";
this.G_GENERALTIO_414203.colSpan=1;
this.G_GENERALTIO_414203.enabled=ConstantsApi.mode.All;
this.G_GENERALTIO_414203.visible=ConstantsApi.mode.All;
this.G_GENERALTIO_414203.attList = ["attribute1","attribute2","attribute7"];
this.G_GENERALNTO_230203.id="G_GENERALNTO_230203";
this.G_GENERALNTO_230203.name="Group1518";
this.G_GENERALNTO_230203.columns=1;
this.G_GENERALNTO_230203.labelOrientation="Top";
this.G_GENERALNTO_230203.colSpan=1;
this.G_GENERALNTO_230203.enabled=ConstantsApi.mode.All;
this.G_GENERALNTO_230203.visible=ConstantsApi.mode.All;
this.G_GENERALNTO_230203.attList = ["attribute3","attribute4","attribute5","attribute6"];
this.G_GENERALNIN_993203.id="G_GENERALNIN_993203";
this.G_GENERALNIN_993203.name="Group2556";
this.G_GENERALNIN_993203.columns=3;
this.G_GENERALNIN_993203.labelOrientation="Top";
this.G_GENERALNIN_993203.colSpan=1;
this.G_GENERALNIN_993203.enabled=ConstantsApi.mode.All;
this.G_GENERALNIN_993203.visible=ConstantsApi.mode.All;
this.G_GENERALINO_773203.id="G_GENERALINO_773203";
this.G_GENERALINO_773203.name="Group1158";
this.G_GENERALINO_773203.columns=3;
this.G_GENERALINO_773203.labelOrientation="Top";
this.G_GENERALINO_773203.colSpan=1;
this.G_GENERALINO_773203.enabled=ConstantsApi.mode.All;
this.G_GENERALINO_773203.visible=ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXYLL_293203.id = "VA_TEXTINPUTBOXYLL_293203";
this.VA_TEXTINPUTBOXYLL_293203.name = "col30";
this.VA_TEXTINPUTBOXYLL_293203.label = cobis.translate("ASSTS.LBL_ASSTS_CIUDADOWX_60477");
this.VA_TEXTINPUTBOXYLL_293203.attribute = "col30";
this.VA_TEXTINPUTBOXYLL_293203.colSpan = 1;
this.VA_TEXTINPUTBOXYLL_293203.withoutLabel = false;
this.VA_TEXTINPUTBOXYLL_293203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXYLL_293203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXFHY_331203.id = "VA_TEXTINPUTBOXFHY_331203";
this.VA_TEXTINPUTBOXFHY_331203.name = "col82";
this.VA_TEXTINPUTBOXFHY_331203.label = cobis.translate("ASSTS.LBL_ASSTS_FECHALTOO_39934");
this.VA_TEXTINPUTBOXFHY_331203.attribute = "col82";
this.VA_TEXTINPUTBOXFHY_331203.colSpan = 1;
this.VA_TEXTINPUTBOXFHY_331203.withoutLabel = false;
this.VA_TEXTINPUTBOXFHY_331203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXFHY_331203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXXCX_878203.id = "VA_TEXTINPUTBOXXCX_878203";
this.VA_TEXTINPUTBOXXCX_878203.name = "col91";
this.VA_TEXTINPUTBOXXCX_878203.label = cobis.translate("ASSTS.LBL_ASSTS_CLASECAAR_47647");
this.VA_TEXTINPUTBOXXCX_878203.attribute = "col91";
this.VA_TEXTINPUTBOXXCX_878203.colSpan = 1;
this.VA_TEXTINPUTBOXXCX_878203.withoutLabel = false;
this.VA_TEXTINPUTBOXXCX_878203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXXCX_878203.visible= ConstantsApi.mode.All;
this.VA_COL11DMRXFYBTRJ_832203.id = "VA_COL11DMRXFYBTRJ_832203";
this.VA_COL11DMRXFYBTRJ_832203.name = "col11";
this.VA_COL11DMRXFYBTRJ_832203.label = cobis.translate("ASSTS.LBL_ASSTS_FECHAVECC_96232");
this.VA_COL11DMRXFYBTRJ_832203.attribute = "col11";
this.VA_COL11DMRXFYBTRJ_832203.colSpan = 1;
this.VA_COL11DMRXFYBTRJ_832203.withoutLabel = false;
this.VA_COL11DMRXFYBTRJ_832203.enabled = ConstantsApi.mode.All;
this.VA_COL11DMRXFYBTRJ_832203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXOZJ_807203.id = "VA_TEXTINPUTBOXOZJ_807203";
this.VA_TEXTINPUTBOXOZJ_807203.name = "col89";
this.VA_TEXTINPUTBOXOZJ_807203.label = cobis.translate("ASSTS.LBL_ASSTS_LNEACRDTO_48406");
this.VA_TEXTINPUTBOXOZJ_807203.attribute = "col89";
this.VA_TEXTINPUTBOXOZJ_807203.colSpan = 1;
this.VA_TEXTINPUTBOXOZJ_807203.withoutLabel = false;
this.VA_TEXTINPUTBOXOZJ_807203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXOZJ_807203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXCLV_313203.id = "VA_TEXTINPUTBOXCLV_313203";
this.VA_TEXTINPUTBOXCLV_313203.name = "col70";
this.VA_TEXTINPUTBOXCLV_313203.label = cobis.translate("ASSTS.LBL_ASSTS_NODESEMOO_55920");
this.VA_TEXTINPUTBOXCLV_313203.attribute = "col70";
this.VA_TEXTINPUTBOXCLV_313203.colSpan = 1;
this.VA_TEXTINPUTBOXCLV_313203.withoutLabel = false;
this.VA_TEXTINPUTBOXCLV_313203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXCLV_313203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXCEU_727203.id = "VA_TEXTINPUTBOXCEU_727203";
this.VA_TEXTINPUTBOXCEU_727203.name = "col3";
this.VA_TEXTINPUTBOXCEU_727203.label = cobis.translate("ASSTS.LBL_ASSTS_NOTRMITEE_74697");
this.VA_TEXTINPUTBOXCEU_727203.attribute = "col3";
this.VA_TEXTINPUTBOXCEU_727203.colSpan = 1;
this.VA_TEXTINPUTBOXCEU_727203.withoutLabel = false;
this.VA_TEXTINPUTBOXCEU_727203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXCEU_727203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXZST_196203.id = "VA_TEXTINPUTBOXZST_196203";
this.VA_TEXTINPUTBOXZST_196203.name = "col74";
this.VA_TEXTINPUTBOXZST_196203.label = cobis.translate("ASSTS.LBL_ASSTS_MONTOAPBD_71203");
this.VA_TEXTINPUTBOXZST_196203.attribute = "col74";
this.VA_TEXTINPUTBOXZST_196203.colSpan = 1;
this.VA_TEXTINPUTBOXZST_196203.withoutLabel = false;
this.VA_TEXTINPUTBOXZST_196203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXZST_196203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXKKT_290203.id = "VA_TEXTINPUTBOXKKT_290203";
this.VA_TEXTINPUTBOXKKT_290203.name = "col4";
this.VA_TEXTINPUTBOXKKT_290203.label = cobis.translate("ASSTS.LBL_ASSTS_CUPOCRDTI_19665");
this.VA_TEXTINPUTBOXKKT_290203.attribute = "col4";
this.VA_TEXTINPUTBOXKKT_290203.colSpan = 1;
this.VA_TEXTINPUTBOXKKT_290203.withoutLabel = false;
this.VA_TEXTINPUTBOXKKT_290203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXKKT_290203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXQVD_784203.id = "VA_TEXTINPUTBOXQVD_784203";
this.VA_TEXTINPUTBOXQVD_784203.name = "col63";
this.VA_TEXTINPUTBOXQVD_784203.label = cobis.translate("ASSTS.LBL_ASSTS_MONTODEOD_23440");
this.VA_TEXTINPUTBOXQVD_784203.attribute = "col63";
this.VA_TEXTINPUTBOXQVD_784203.colSpan = 1;
this.VA_TEXTINPUTBOXQVD_784203.withoutLabel = false;
this.VA_TEXTINPUTBOXQVD_784203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXQVD_784203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXFUR_725203.id = "VA_TEXTINPUTBOXFUR_725203";
this.VA_TEXTINPUTBOXFUR_725203.name = "col28";
this.VA_TEXTINPUTBOXFUR_725203.label = cobis.translate("ASSTS.LBL_ASSTS_DESTINOOI_53871");
this.VA_TEXTINPUTBOXFUR_725203.attribute = "col28";
this.VA_TEXTINPUTBOXFUR_725203.colSpan = 1;
this.VA_TEXTINPUTBOXFUR_725203.withoutLabel = false;
this.VA_TEXTINPUTBOXFUR_725203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXFUR_725203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXNLU_276203.id = "VA_TEXTINPUTBOXNLU_276203";
this.VA_TEXTINPUTBOXNLU_276203.name = "col83";
this.VA_TEXTINPUTBOXNLU_276203.label = cobis.translate("ASSTS.LBL_ASSTS_SALDOCAAI_86331");
this.VA_TEXTINPUTBOXNLU_276203.attribute = "col83";
this.VA_TEXTINPUTBOXNLU_276203.colSpan = 1;
this.VA_TEXTINPUTBOXNLU_276203.withoutLabel = false;
this.VA_TEXTINPUTBOXNLU_276203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXNLU_276203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXXAE_419203.id = "VA_TEXTINPUTBOXXAE_419203";
this.VA_TEXTINPUTBOXXAE_419203.name = "col127";
this.VA_TEXTINPUTBOXXAE_419203.label = cobis.translate("ASSTS.LBL_ASSTS_EDADLACET_95722");
this.VA_TEXTINPUTBOXXAE_419203.attribute = "col127";
this.VA_TEXTINPUTBOXXAE_419203.colSpan = 1;
this.VA_TEXTINPUTBOXXAE_419203.withoutLabel = false;
this.VA_TEXTINPUTBOXXAE_419203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXXAE_419203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXNUC_515203.id = "VA_TEXTINPUTBOXNUC_515203";
this.VA_TEXTINPUTBOXNUC_515203.name = "col96";
this.VA_TEXTINPUTBOXNUC_515203.label = cobis.translate("ASSTS.LBL_ASSTS_SALDOTOAL_26299");
this.VA_TEXTINPUTBOXNUC_515203.attribute = "col96";
this.VA_TEXTINPUTBOXNUC_515203.colSpan = 1;
this.VA_TEXTINPUTBOXNUC_515203.withoutLabel = false;
this.VA_TEXTINPUTBOXNUC_515203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXNUC_515203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXMIJ_255203.id = "VA_TEXTINPUTBOXMIJ_255203";
this.VA_TEXTINPUTBOXMIJ_255203.name = "col116";
this.VA_TEXTINPUTBOXMIJ_255203.label = cobis.translate("ASSTS.LBL_ASSTS_DASMORATI_28104");
this.VA_TEXTINPUTBOXMIJ_255203.attribute = "col116";
this.VA_TEXTINPUTBOXMIJ_255203.colSpan = 1;
this.VA_TEXTINPUTBOXMIJ_255203.withoutLabel = false;
this.VA_TEXTINPUTBOXMIJ_255203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXMIJ_255203.visible= ConstantsApi.mode.All;
this.VA_COL148YHTMQIFBH_165203.id = "VA_COL148YHTMQIFBH_165203";
this.VA_COL148YHTMQIFBH_165203.name = "col148";
this.VA_COL148YHTMQIFBH_165203.label = cobis.translate("ASSTS.LBL_ASSTS_VALORVEOC_61297");
this.VA_COL148YHTMQIFBH_165203.attribute = "col148";
this.VA_COL148YHTMQIFBH_165203.colSpan = 1;
this.VA_COL148YHTMQIFBH_165203.withoutLabel = false;
this.VA_COL148YHTMQIFBH_165203.enabled = ConstantsApi.mode.All;
this.VA_COL148YHTMQIFBH_165203.visible= ConstantsApi.mode.All;
this.VA_COL98VYAYLZCUKZ_984203.id = "VA_COL98VYAYLZCUKZ_984203";
this.VA_COL98VYAYLZCUKZ_984203.name = "col98";
this.VA_COL98VYAYLZCUKZ_984203.label = cobis.translate("ASSTS.LBL_ASSTS_DASMORAAT_28115");
this.VA_COL98VYAYLZCUKZ_984203.attribute = "col98";
this.VA_COL98VYAYLZCUKZ_984203.colSpan = 1;
this.VA_COL98VYAYLZCUKZ_984203.withoutLabel = false;
this.VA_COL98VYAYLZCUKZ_984203.enabled = ConstantsApi.mode.All;
this.VA_COL98VYAYLZCUKZ_984203.visible= ConstantsApi.mode.All;
this.VA_COL149ECRVIIDXJ_360203.id = "VA_COL149ECRVIIDXJ_360203";
this.VA_COL149ECRVIIDXJ_360203.name = "col149";
this.VA_COL149ECRVIIDXJ_360203.label = cobis.translate("ASSTS.LBL_ASSTS_VALORVEON_28016");
this.VA_COL149ECRVIIDXJ_360203.attribute = "col149";
this.VA_COL149ECRVIIDXJ_360203.colSpan = 1;
this.VA_COL149ECRVIIDXJ_360203.withoutLabel = false;
this.VA_COL149ECRVIIDXJ_360203.enabled = ConstantsApi.mode.All;
this.VA_COL149ECRVIIDXJ_360203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXTXW_844203.id = "VA_TEXTINPUTBOXTXW_844203";
this.VA_TEXTINPUTBOXTXW_844203.name = "col94";
this.VA_TEXTINPUTBOXTXW_844203.label = cobis.translate("ASSTS.LBL_ASSTS_CALIFICNO_68506");
this.VA_TEXTINPUTBOXTXW_844203.attribute = "col94";
this.VA_TEXTINPUTBOXTXW_844203.colSpan = 1;
this.VA_TEXTINPUTBOXTXW_844203.withoutLabel = false;
this.VA_TEXTINPUTBOXTXW_844203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXTXW_844203.visible= ConstantsApi.mode.All;
this.VA_COL150TJUVFKMWM_571203.id = "VA_COL150TJUVFKMWM_571203";
this.VA_COL150TJUVFKMWM_571203.name = "col150";
this.VA_COL150TJUVFKMWM_571203.label = cobis.translate("ASSTS.LBL_ASSTS_SALDOALEC_65454");
this.VA_COL150TJUVFKMWM_571203.attribute = "col150";
this.VA_COL150TJUVFKMWM_571203.colSpan = 1;
this.VA_COL150TJUVFKMWM_571203.withoutLabel = false;
this.VA_COL150TJUVFKMWM_571203.enabled = ConstantsApi.mode.All;
this.VA_COL150TJUVFKMWM_571203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXVHS_357203.id = "VA_TEXTINPUTBOXVHS_357203";
this.VA_TEXTINPUTBOXVHS_357203.name = "col16";
this.VA_TEXTINPUTBOXVHS_357203.label = cobis.translate("ASSTS.LBL_ASSTS_CALIFICNO_68506");
this.VA_TEXTINPUTBOXVHS_357203.attribute = "col16";
this.VA_TEXTINPUTBOXVHS_357203.colSpan = 1;
this.VA_TEXTINPUTBOXVHS_357203.withoutLabel = false;
this.VA_TEXTINPUTBOXVHS_357203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXVHS_357203.visible= ConstantsApi.mode.None;
this.VA_COL151XEUXPLAEA_433203.id = "VA_COL151XEUXPLAEA_433203";
this.VA_COL151XEUXPLAEA_433203.name = "col151";
this.VA_COL151XEUXPLAEA_433203.label = cobis.translate("ASSTS.LBL_ASSTS_SALDOALCO_75666");
this.VA_COL151XEUXPLAEA_433203.attribute = "col151";
this.VA_COL151XEUXPLAEA_433203.colSpan = 1;
this.VA_COL151XEUXPLAEA_433203.withoutLabel = false;
this.VA_COL151XEUXPLAEA_433203.enabled = ConstantsApi.mode.All;
this.VA_COL151XEUXPLAEA_433203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXVBB_693203.id = "VA_TEXTINPUTBOXVBB_693203";
this.VA_TEXTINPUTBOXVBB_693203.name = "col17";
this.VA_TEXTINPUTBOXVBB_693203.label = cobis.translate("ASSTS.LBL_ASSTS_CALIFICET_92262");
this.VA_TEXTINPUTBOXVBB_693203.attribute = "col17";
this.VA_TEXTINPUTBOXVBB_693203.colSpan = 1;
this.VA_TEXTINPUTBOXVBB_693203.withoutLabel = false;
this.VA_TEXTINPUTBOXVBB_693203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXVBB_693203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXWVS_331203.id = "VA_TEXTINPUTBOXWVS_331203";
this.VA_TEXTINPUTBOXWVS_331203.name = "col138";
this.VA_TEXTINPUTBOXWVS_331203.label = cobis.translate("ASSTS.LBL_ASSTS_RECONOCAR_36694");
this.VA_TEXTINPUTBOXWVS_331203.attribute = "col138";
this.VA_TEXTINPUTBOXWVS_331203.colSpan = 1;
this.VA_TEXTINPUTBOXWVS_331203.withoutLabel = false;
this.VA_TEXTINPUTBOXWVS_331203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXWVS_331203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXLAA_716203.id = "VA_TEXTINPUTBOXLAA_716203";
this.VA_TEXTINPUTBOXLAA_716203.name = "col13";
this.VA_TEXTINPUTBOXLAA_716203.label = cobis.translate("ASSTS.LBL_ASSTS_FECHAAPCN_19760");
this.VA_TEXTINPUTBOXLAA_716203.attribute = "col13";
this.VA_TEXTINPUTBOXLAA_716203.colSpan = 1;
this.VA_TEXTINPUTBOXLAA_716203.withoutLabel = false;
this.VA_TEXTINPUTBOXLAA_716203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXLAA_716203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXEUN_350203.id = "VA_TEXTINPUTBOXEUN_350203";
this.VA_TEXTINPUTBOXEUN_350203.name = "col139";
this.VA_TEXTINPUTBOXEUN_350203.label = cobis.translate("ASSTS.LBL_ASSTS_SALDOREMO_75006");
this.VA_TEXTINPUTBOXEUN_350203.attribute = "col139";
this.VA_TEXTINPUTBOXEUN_350203.colSpan = 1;
this.VA_TEXTINPUTBOXEUN_350203.withoutLabel = false;
this.VA_TEXTINPUTBOXEUN_350203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXEUN_350203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXPCU_828203.id = "VA_TEXTINPUTBOXPCU_828203";
this.VA_TEXTINPUTBOXPCU_828203.name = "col71";
this.VA_TEXTINPUTBOXPCU_828203.label = cobis.translate("ASSTS.LBL_ASSTS_FECHADEOS_48240");
this.VA_TEXTINPUTBOXPCU_828203.attribute = "col71";
this.VA_TEXTINPUTBOXPCU_828203.colSpan = 1;
this.VA_TEXTINPUTBOXPCU_828203.withoutLabel = false;
this.VA_TEXTINPUTBOXPCU_828203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXPCU_828203.visible= ConstantsApi.mode.All;
this.VA_COL169OXNPIMJZK_188203.id = "VA_COL169OXNPIMJZK_188203";
this.VA_COL169OXNPIMJZK_188203.name = "col169";
this.VA_COL169OXNPIMJZK_188203.label = cobis.translate("ASSTS.LBL_ASSTS_VALORTAVS_66035");
this.VA_COL169OXNPIMJZK_188203.attribute = "col169";
this.VA_COL169OXNPIMJZK_188203.colSpan = 1;
this.VA_COL169OXNPIMJZK_188203.withoutLabel = false;
this.VA_COL169OXNPIMJZK_188203.enabled = ConstantsApi.mode.All;
this.VA_COL169OXNPIMJZK_188203.visible= ConstantsApi.mode.All;
this.VA_COL170OEOBJNBNE_695203.id = "VA_COL170OEOBJNBNE_695203";
this.VA_COL170OEOBJNBNE_695203.name = "col170";
this.VA_COL170OEOBJNBNE_695203.label = cobis.translate("ASSTS.LBL_ASSTS_TASACOSEN_92538");
this.VA_COL170OEOBJNBNE_695203.attribute = "col170";
this.VA_COL170OEOBJNBNE_695203.colSpan = 1;
this.VA_COL170OEOBJNBNE_695203.withoutLabel = false;
this.VA_COL170OEOBJNBNE_695203.enabled = ConstantsApi.mode.All;
this.VA_COL170OEOBJNBNE_695203.visible= ConstantsApi.mode.All;
this.VA_4624BUKADQWYBLU_749203.id = "VA_4624BUKADQWYBLU_749203";
this.VA_4624BUKADQWYBLU_749203.name = "companySold";
this.VA_4624BUKADQWYBLU_749203.label = cobis.translate("ASSTS.LBL_ASSTS_EMPRESAND_22329");
this.VA_4624BUKADQWYBLU_749203.attribute = "companySold";
this.VA_4624BUKADQWYBLU_749203.colSpan = 1;
this.VA_4624BUKADQWYBLU_749203.withoutLabel = false;
this.VA_4624BUKADQWYBLU_749203.enabled = ConstantsApi.mode.All;
this.VA_4624BUKADQWYBLU_749203.visible= ConstantsApi.mode.All;
this.VA_COL147RUDCEIBHO_731203.id = "VA_COL147RUDCEIBHO_731203";
this.VA_COL147RUDCEIBHO_731203.name = "sectorDesc";
this.VA_COL147RUDCEIBHO_731203.label = cobis.translate("ASSTS.LBL_ASSTS_SECTORYDN_72932");
this.VA_COL147RUDCEIBHO_731203.attribute = "sectorDesc";
this.VA_COL147RUDCEIBHO_731203.colSpan = 1;
this.VA_COL147RUDCEIBHO_731203.withoutLabel = false;
this.VA_COL147RUDCEIBHO_731203.enabled = ConstantsApi.mode.All;
this.VA_COL147RUDCEIBHO_731203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXVBP_896203.id = "VA_TEXTINPUTBOXVBP_896203";
this.VA_TEXTINPUTBOXVBP_896203.name = "col100";
this.VA_TEXTINPUTBOXVBP_896203.label = cobis.translate("ASSTS.LBL_ASSTS_SITUACINE_16890");
this.VA_TEXTINPUTBOXVBP_896203.attribute = "col100";
this.VA_TEXTINPUTBOXVBP_896203.colSpan = 1;
this.VA_TEXTINPUTBOXVBP_896203.withoutLabel = false;
this.VA_TEXTINPUTBOXVBP_896203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXVBP_896203.visible= ConstantsApi.mode.All;
this.VA_COL102IZHQPGLGQ_823203.id = "VA_COL102IZHQPGLGQ_823203";
this.VA_COL102IZHQPGLGQ_823203.name = "col102";
this.VA_COL102IZHQPGLGQ_823203.label = cobis.translate("ASSTS.LBL_ASSTS_CAUSALDLE_65221");
this.VA_COL102IZHQPGLGQ_823203.attribute = "col102";
this.VA_COL102IZHQPGLGQ_823203.colSpan = 1;
this.VA_COL102IZHQPGLGQ_823203.withoutLabel = false;
this.VA_COL102IZHQPGLGQ_823203.enabled = ConstantsApi.mode.All;
this.VA_COL102IZHQPGLGQ_823203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXSFC_390203.id = "VA_TEXTINPUTBOXSFC_390203";
this.VA_TEXTINPUTBOXSFC_390203.name = "col103";
this.VA_TEXTINPUTBOXSFC_390203.label = cobis.translate("ASSTS.LBL_ASSTS_ACTIVIDDO_51539");
this.VA_TEXTINPUTBOXSFC_390203.attribute = "col103";
this.VA_TEXTINPUTBOXSFC_390203.colSpan = 1;
this.VA_TEXTINPUTBOXSFC_390203.withoutLabel = false;
this.VA_TEXTINPUTBOXSFC_390203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXSFC_390203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXZSP_614203.id = "VA_TEXTINPUTBOXZSP_614203";
this.VA_TEXTINPUTBOXZSP_614203.name = "col88";
this.VA_TEXTINPUTBOXZSP_614203.label = cobis.translate("ASSTS.LBL_ASSTS_DIRECCIEL_96339");
this.VA_TEXTINPUTBOXZSP_614203.attribute = "col88";
this.VA_TEXTINPUTBOXZSP_614203.colSpan = 1;
this.VA_TEXTINPUTBOXZSP_614203.withoutLabel = false;
this.VA_TEXTINPUTBOXZSP_614203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXZSP_614203.visible= ConstantsApi.mode.All;
this.VA_COL153PEYBRIIBA_813203.id = "VA_COL153PEYBRIIBA_813203";
this.VA_COL153PEYBRIIBA_813203.name = "col153";
this.VA_COL153PEYBRIIBA_813203.label = cobis.translate("ASSTS.LBL_ASSTS_PRESIDEGR_31216");
this.VA_COL153PEYBRIIBA_813203.attribute = "col153";
this.VA_COL153PEYBRIIBA_813203.colSpan = 1;
this.VA_COL153PEYBRIIBA_813203.withoutLabel = false;
this.VA_COL153PEYBRIIBA_813203.enabled = ConstantsApi.mode.All;
this.VA_COL153PEYBRIIBA_813203.visible= ConstantsApi.mode.All;
this.VA_COL154WEXTAMOTB_871203.id = "VA_COL154WEXTAMOTB_871203";
this.VA_COL154WEXTAMOTB_871203.name = "col154";
this.VA_COL154WEXTAMOTB_871203.label = cobis.translate("ASSTS.LBL_ASSTS_CATEGORTA_48611");
this.VA_COL154WEXTAMOTB_871203.attribute = "col154";
this.VA_COL154WEXTAMOTB_871203.colSpan = 1;
this.VA_COL154WEXTAMOTB_871203.withoutLabel = false;
this.VA_COL154WEXTAMOTB_871203.enabled = ConstantsApi.mode.All;
this.VA_COL154WEXTAMOTB_871203.visible= ConstantsApi.mode.All;
this.VA_COL155VLXVEOBDY_344203.id = "VA_COL155VLXVEOBDY_344203";
this.VA_COL155VLXVEOBDY_344203.name = "col155";
this.VA_COL155VLXVEOBDY_344203.label = cobis.translate("ASSTS.LBL_ASSTS_REFERENAC_11270");
this.VA_COL155VLXVEOBDY_344203.attribute = "col155";
this.VA_COL155VLXVEOBDY_344203.colSpan = 1;
this.VA_COL155VLXVEOBDY_344203.withoutLabel = false;
this.VA_COL155VLXVEOBDY_344203.enabled = ConstantsApi.mode.All;
this.VA_COL155VLXVEOBDY_344203.visible= ConstantsApi.mode.All;
this.VA_COL156OKGIGKFEX_212203.id = "VA_COL156OKGIGKFEX_212203";
this.VA_COL156OKGIGKFEX_212203.name = "col156";
this.VA_COL156OKGIGKFEX_212203.label = cobis.translate("ASSTS.LBL_ASSTS_CICLOSDOU_83486");
this.VA_COL156OKGIGKFEX_212203.attribute = "col156";
this.VA_COL156OKGIGKFEX_212203.colSpan = 1;
this.VA_COL156OKGIGKFEX_212203.withoutLabel = false;
this.VA_COL156OKGIGKFEX_212203.enabled = ConstantsApi.mode.All;
this.VA_COL156OKGIGKFEX_212203.visible= ConstantsApi.mode.All;
this.VA_COL157AGGZBEULZ_816203.id = "VA_COL157AGGZBEULZ_816203";
this.VA_COL157AGGZBEULZ_816203.name = "col157";
this.VA_COL157AGGZBEULZ_816203.label = cobis.translate("ASSTS.LBL_ASSTS_CICLOSDEE_70012");
this.VA_COL157AGGZBEULZ_816203.attribute = "col157";
this.VA_COL157AGGZBEULZ_816203.colSpan = 1;
this.VA_COL157AGGZBEULZ_816203.withoutLabel = false;
this.VA_COL157AGGZBEULZ_816203.enabled = ConstantsApi.mode.All;
this.VA_COL157AGGZBEULZ_816203.visible= ConstantsApi.mode.All;
this.VA_COL158WGHVVWVEK_572203.id = "VA_COL158WGHVVWVEK_572203";
this.VA_COL158WGHVVWVEK_572203.name = "col158";
this.VA_COL158WGHVVWVEK_572203.label = cobis.translate("ASSTS.LBL_ASSTS_FECHAPROG_10804");
this.VA_COL158WGHVVWVEK_572203.attribute = "col158";
this.VA_COL158WGHVVWVEK_572203.colSpan = 1;
this.VA_COL158WGHVVWVEK_572203.withoutLabel = false;
this.VA_COL158WGHVVWVEK_572203.enabled = ConstantsApi.mode.All;
this.VA_COL158WGHVVWVEK_572203.visible= ConstantsApi.mode.All;
this.VA_COL159WPDNFJVTU_966203.id = "VA_COL159WPDNFJVTU_966203";
this.VA_COL159WPDNFJVTU_966203.name = "col159";
this.VA_COL159WPDNFJVTU_966203.label = cobis.translate("ASSTS.LBL_ASSTS_TIPOOPERA_18465");
this.VA_COL159WPDNFJVTU_966203.attribute = "col159";
this.VA_COL159WPDNFJVTU_966203.colSpan = 1;
this.VA_COL159WPDNFJVTU_966203.withoutLabel = false;
this.VA_COL159WPDNFJVTU_966203.enabled = ConstantsApi.mode.All;
this.VA_COL159WPDNFJVTU_966203.visible= ConstantsApi.mode.All;
this.VA_COL160HJQNBSHMS_764203.id = "VA_COL160HJQNBSHMS_764203";
this.VA_COL160HJQNBSHMS_764203.name = "col160";
this.VA_COL160HJQNBSHMS_764203.label = cobis.translate("ASSTS.LBL_ASSTS_AHORROMDD_31177");
this.VA_COL160HJQNBSHMS_764203.attribute = "col160";
this.VA_COL160HJQNBSHMS_764203.colSpan = 1;
this.VA_COL160HJQNBSHMS_764203.withoutLabel = false;
this.VA_COL160HJQNBSHMS_764203.enabled = ConstantsApi.mode.All;
this.VA_COL160HJQNBSHMS_764203.visible= ConstantsApi.mode.All;
this.VA_COL161CZCIPBKLM_114203.id = "VA_COL161CZCIPBKLM_114203";
this.VA_COL161CZCIPBKLM_114203.name = "col161";
this.VA_COL161CZCIPBKLM_114203.label = cobis.translate("ASSTS.LBL_ASSTS_ADMINISNT_11301");
this.VA_COL161CZCIPBKLM_114203.attribute = "col161";
this.VA_COL161CZCIPBKLM_114203.colSpan = 1;
this.VA_COL161CZCIPBKLM_114203.withoutLabel = false;
this.VA_COL161CZCIPBKLM_114203.enabled = ConstantsApi.mode.All;
this.VA_COL161CZCIPBKLM_114203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXXQS_367203.id = "VA_TEXTINPUTBOXXQS_367203";
this.VA_TEXTINPUTBOXXQS_367203.name = "col93";
this.VA_TEXTINPUTBOXXQS_367203.label = cobis.translate("ASSTS.LBL_ASSTS_ORIGENLOR_50930");
this.VA_TEXTINPUTBOXXQS_367203.attribute = "col93";
this.VA_TEXTINPUTBOXXQS_367203.colSpan = 1;
this.VA_TEXTINPUTBOXXQS_367203.withoutLabel = false;
this.VA_TEXTINPUTBOXXQS_367203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXXQS_367203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXDFL_233203.id = "VA_TEXTINPUTBOXDFL_233203";
this.VA_TEXTINPUTBOXDFL_233203.name = "col106";
this.VA_TEXTINPUTBOXDFL_233203.label = cobis.translate("ASSTS.LBL_ASSTS_DESTINOCE_73285");
this.VA_TEXTINPUTBOXDFL_233203.attribute = "col106";
this.VA_TEXTINPUTBOXDFL_233203.colSpan = 1;
this.VA_TEXTINPUTBOXDFL_233203.withoutLabel = false;
this.VA_TEXTINPUTBOXDFL_233203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXDFL_233203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXLDN_789203.id = "VA_TEXTINPUTBOXLDN_789203";
this.VA_TEXTINPUTBOXLDN_789203.name = "col10";
this.VA_TEXTINPUTBOXLDN_789203.label = cobis.translate("ASSTS.LBL_ASSTS_PRESTAMIA_77621");
this.VA_TEXTINPUTBOXLDN_789203.attribute = "col10";
this.VA_TEXTINPUTBOXLDN_789203.colSpan = 1;
this.VA_TEXTINPUTBOXLDN_789203.withoutLabel = false;
this.VA_TEXTINPUTBOXLDN_789203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXLDN_789203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXPRC_818203.id = "VA_TEXTINPUTBOXPRC_818203";
this.VA_TEXTINPUTBOXPRC_818203.name = "col144";
this.VA_TEXTINPUTBOXPRC_818203.label = cobis.translate("ASSTS.LBL_ASSTS_LLAVEFIRN_58448");
this.VA_TEXTINPUTBOXPRC_818203.attribute = "col144";
this.VA_TEXTINPUTBOXPRC_818203.colSpan = 1;
this.VA_TEXTINPUTBOXPRC_818203.withoutLabel = false;
this.VA_TEXTINPUTBOXPRC_818203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXPRC_818203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXAYN_905203.id = "VA_TEXTINPUTBOXAYN_905203";
this.VA_TEXTINPUTBOXAYN_905203.name = "col92";
this.VA_TEXTINPUTBOXAYN_905203.label = cobis.translate("ASSTS.LBL_ASSTS_PROGRAMIA_80361");
this.VA_TEXTINPUTBOXAYN_905203.attribute = "col92";
this.VA_TEXTINPUTBOXAYN_905203.colSpan = 1;
this.VA_TEXTINPUTBOXAYN_905203.withoutLabel = false;
this.VA_TEXTINPUTBOXAYN_905203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXAYN_905203.visible= ConstantsApi.mode.All;
this.VA_COL146AYXFKCRYI_168203.id = "VA_COL146AYXFKCRYI_168203";
this.VA_COL146AYXFKCRYI_168203.name = "col146";
this.VA_COL146AYXFKCRYI_168203.label = cobis.translate("ASSTS.LBL_ASSTS_GARANTIAA_86084");
this.VA_COL146AYXFKCRYI_168203.attribute = "col146";
this.VA_COL146AYXFKCRYI_168203.colSpan = 1;
this.VA_COL146AYXFKCRYI_168203.withoutLabel = false;
this.VA_COL146AYXFKCRYI_168203.enabled = ConstantsApi.mode.All;
this.VA_COL146AYXFKCRYI_168203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXHNK_820203.id = "VA_TEXTINPUTBOXHNK_820203";
this.VA_TEXTINPUTBOXHNK_820203.name = "col128";
this.VA_TEXTINPUTBOXHNK_820203.label = cobis.translate("ASSTS.LBL_ASSTS_ESTADOCRN_89020");
this.VA_TEXTINPUTBOXHNK_820203.attribute = "col128";
this.VA_TEXTINPUTBOXHNK_820203.colSpan = 1;
this.VA_TEXTINPUTBOXHNK_820203.withoutLabel = false;
this.VA_TEXTINPUTBOXHNK_820203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXHNK_820203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXMWQ_662203.id = "VA_TEXTINPUTBOXMWQ_662203";
this.VA_TEXTINPUTBOXMWQ_662203.name = "col136";
this.VA_TEXTINPUTBOXMWQ_662203.label = cobis.translate("ASSTS.LBL_ASSTS_TELFONOOA_88199");
this.VA_TEXTINPUTBOXMWQ_662203.attribute = "col136";
this.VA_TEXTINPUTBOXMWQ_662203.colSpan = 1;
this.VA_TEXTINPUTBOXMWQ_662203.withoutLabel = false;
this.VA_TEXTINPUTBOXMWQ_662203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXMWQ_662203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXYAE_738203.id = "VA_TEXTINPUTBOXYAE_738203";
this.VA_TEXTINPUTBOXYAE_738203.name = "col132";
this.VA_TEXTINPUTBOXYAE_738203.label = cobis.translate("ASSTS.LBL_ASSTS_ABOGADOOO_21860");
this.VA_TEXTINPUTBOXYAE_738203.attribute = "col132";
this.VA_TEXTINPUTBOXYAE_738203.colSpan = 1;
this.VA_TEXTINPUTBOXYAE_738203.withoutLabel = false;
this.VA_TEXTINPUTBOXYAE_738203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXYAE_738203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXPRR_754203.id = "VA_TEXTINPUTBOXPRR_754203";
this.VA_TEXTINPUTBOXPRR_754203.name = "col137";
this.VA_TEXTINPUTBOXPRR_754203.label = cobis.translate("ASSTS.LBL_ASSTS_DIRECCICG_85645");
this.VA_TEXTINPUTBOXPRR_754203.attribute = "col137";
this.VA_TEXTINPUTBOXPRR_754203.colSpan = 1;
this.VA_TEXTINPUTBOXPRR_754203.withoutLabel = false;
this.VA_TEXTINPUTBOXPRR_754203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXPRR_754203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXFJI_119203.id = "VA_TEXTINPUTBOXFJI_119203";
this.VA_TEXTINPUTBOXFJI_119203.name = "col14";
this.VA_TEXTINPUTBOXFJI_119203.label = cobis.translate("ASSTS.LBL_ASSTS_FECHACAIT_74724");
this.VA_TEXTINPUTBOXFJI_119203.attribute = "col14";
this.VA_TEXTINPUTBOXFJI_119203.colSpan = 1;
this.VA_TEXTINPUTBOXFJI_119203.withoutLabel = false;
this.VA_TEXTINPUTBOXFJI_119203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXFJI_119203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXSJD_345203.id = "VA_TEXTINPUTBOXSJD_345203";
this.VA_TEXTINPUTBOXSJD_345203.name = "col37";
this.VA_TEXTINPUTBOXSJD_345203.label = cobis.translate("ASSTS.LBL_ASSTS_PERMITEEE_35071");
this.VA_TEXTINPUTBOXSJD_345203.attribute = "col37";
this.VA_TEXTINPUTBOXSJD_345203.colSpan = 1;
this.VA_TEXTINPUTBOXSJD_345203.withoutLabel = false;
this.VA_TEXTINPUTBOXSJD_345203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXSJD_345203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXLZX_625203.id = "VA_TEXTINPUTBOXLZX_625203";
this.VA_TEXTINPUTBOXLZX_625203.name = "col38";
this.VA_TEXTINPUTBOXLZX_625203.label = cobis.translate("ASSTS.LBL_ASSTS_NMERORENN_52628");
this.VA_TEXTINPUTBOXLZX_625203.attribute = "col38";
this.VA_TEXTINPUTBOXLZX_625203.colSpan = 1;
this.VA_TEXTINPUTBOXLZX_625203.withoutLabel = false;
this.VA_TEXTINPUTBOXLZX_625203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXLZX_625203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXZYM_339203.id = "VA_TEXTINPUTBOXZYM_339203";
this.VA_TEXTINPUTBOXZYM_339203.name = "col140";
this.VA_TEXTINPUTBOXZYM_339203.label = cobis.translate("ASSTS.LBL_ASSTS_OPERACIED_32635");
this.VA_TEXTINPUTBOXZYM_339203.attribute = "col140";
this.VA_TEXTINPUTBOXZYM_339203.colSpan = 1;
this.VA_TEXTINPUTBOXZYM_339203.withoutLabel = false;
this.VA_TEXTINPUTBOXZYM_339203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXZYM_339203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXTAU_538203.id = "VA_TEXTINPUTBOXTAU_538203";
this.VA_TEXTINPUTBOXTAU_538203.name = "col141";
this.VA_TEXTINPUTBOXTAU_538203.label = cobis.translate("ASSTS.LBL_ASSTS_OPERACINI_16531");
this.VA_TEXTINPUTBOXTAU_538203.attribute = "col141";
this.VA_TEXTINPUTBOXTAU_538203.colSpan = 1;
this.VA_TEXTINPUTBOXTAU_538203.withoutLabel = false;
this.VA_TEXTINPUTBOXTAU_538203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXTAU_538203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXWQL_188203.id = "VA_TEXTINPUTBOXWQL_188203";
this.VA_TEXTINPUTBOXWQL_188203.name = "col119";
this.VA_TEXTINPUTBOXWQL_188203.label = cobis.translate("ASSTS.LBL_ASSTS_PERMITETT_45382");
this.VA_TEXTINPUTBOXWQL_188203.attribute = "col119";
this.VA_TEXTINPUTBOXWQL_188203.colSpan = 1;
this.VA_TEXTINPUTBOXWQL_188203.withoutLabel = false;
this.VA_TEXTINPUTBOXWQL_188203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXWQL_188203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXQNT_219203.id = "VA_TEXTINPUTBOXQNT_219203";
this.VA_TEXTINPUTBOXQNT_219203.name = "col133";
this.VA_TEXTINPUTBOXQNT_219203.label = cobis.translate("ASSTS.LBL_ASSTS_DIFERIDNI_94027");
this.VA_TEXTINPUTBOXQNT_219203.attribute = "col133";
this.VA_TEXTINPUTBOXQNT_219203.colSpan = 1;
this.VA_TEXTINPUTBOXQNT_219203.withoutLabel = false;
this.VA_TEXTINPUTBOXQNT_219203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXQNT_219203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXXYN_505203.id = "VA_TEXTINPUTBOXXYN_505203";
this.VA_TEXTINPUTBOXXYN_505203.name = "col95";
this.VA_TEXTINPUTBOXXYN_505203.label = cobis.translate("ASSTS.LBL_ASSTS_NMERORERU_53366");
this.VA_TEXTINPUTBOXXYN_505203.attribute = "col95";
this.VA_TEXTINPUTBOXXYN_505203.colSpan = 1;
this.VA_TEXTINPUTBOXXYN_505203.withoutLabel = false;
this.VA_TEXTINPUTBOXXYN_505203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXXYN_505203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXGBW_313203.id = "VA_TEXTINPUTBOXGBW_313203";
this.VA_TEXTINPUTBOXGBW_313203.name = "col97";
this.VA_TEXTINPUTBOXGBW_313203.label = cobis.translate("ASSTS.LBL_ASSTS_FECHALTTT_31717");
this.VA_TEXTINPUTBOXGBW_313203.attribute = "col97";
this.VA_TEXTINPUTBOXGBW_313203.colSpan = 1;
this.VA_TEXTINPUTBOXGBW_313203.withoutLabel = false;
this.VA_TEXTINPUTBOXGBW_313203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXGBW_313203.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXKJW_728203.id = "VA_TEXTINPUTBOXKJW_728203";
this.VA_TEXTINPUTBOXKJW_728203.name = "col134";
this.VA_TEXTINPUTBOXKJW_728203.label = cobis.translate("ASSTS.LBL_ASSTS_SALDODIOR_28205");
this.VA_TEXTINPUTBOXKJW_728203.attribute = "col134";
this.VA_TEXTINPUTBOXKJW_728203.colSpan = 1;
this.VA_TEXTINPUTBOXKJW_728203.withoutLabel = false;
this.VA_TEXTINPUTBOXKJW_728203.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXKJW_728203.visible= ConstantsApi.mode.All;
this.VA_COL32CDFPUYWBGD_758203.id = "VA_COL32CDFPUYWBGD_758203";
this.VA_COL32CDFPUYWBGD_758203.name = "col32";
this.VA_COL32CDFPUYWBGD_758203.label = cobis.translate("ASSTS.LBL_ASSTS_APAGOPQXA_89595");
this.VA_COL32CDFPUYWBGD_758203.attribute = "col32";
this.VA_COL32CDFPUYWBGD_758203.colSpan = 1;
this.VA_COL32CDFPUYWBGD_758203.withoutLabel = false;
this.VA_COL32CDFPUYWBGD_758203.enabled = ConstantsApi.mode.All;
this.VA_COL32CDFPUYWBGD_758203.visible= ConstantsApi.mode.All;
this.VA_COL46RBGZXOSXUD_578203.id = "VA_COL46RBGZXOSXUD_578203";
this.VA_COL46RBGZXOSXUD_578203.name = "col46";
this.VA_COL46RBGZXOSXUD_578203.label = cobis.translate("ASSTS.LBL_ASSTS_PAGOADIAL_89040");
this.VA_COL46RBGZXOSXUD_578203.attribute = "col46";
this.VA_COL46RBGZXOSXUD_578203.colSpan = 1;
this.VA_COL46RBGZXOSXUD_578203.withoutLabel = false;
this.VA_COL46RBGZXOSXUD_578203.enabled = ConstantsApi.mode.All;
this.VA_COL46RBGZXOSXUD_578203.visible= ConstantsApi.mode.All;
this.VA_COL33GXLNAEOZIW_513203.id = "VA_COL33GXLNAEOZIW_513203";
this.VA_COL33GXLNAEOZIW_513203.name = "col33";
this.VA_COL33GXLNAEOZIW_513203.label = cobis.translate("ASSTS.LBL_ASSTS_REFERENCC_20812");
this.VA_COL33GXLNAEOZIW_513203.attribute = "col33";
this.VA_COL33GXLNAEOZIW_513203.colSpan = 1;
this.VA_COL33GXLNAEOZIW_513203.withoutLabel = false;
this.VA_COL33GXLNAEOZIW_513203.enabled = ConstantsApi.mode.All;
this.VA_COL33GXLNAEOZIW_513203.visible= ConstantsApi.mode.All;
this.VA_COL54TKWEEBKVXN_134203.id = "VA_COL54TKWEEBKVXN_134203";
this.VA_COL54TKWEEBKVXN_134203.name = "col54";
this.VA_COL54TKWEEBKVXN_134203.label = cobis.translate("ASSTS.LBL_ASSTS_DAPAGOCVP_50161");
this.VA_COL54TKWEEBKVXN_134203.attribute = "col54";
this.VA_COL54TKWEEBKVXN_134203.colSpan = 1;
this.VA_COL54TKWEEBKVXN_134203.withoutLabel = false;
this.VA_COL54TKWEEBKVXN_134203.enabled = ConstantsApi.mode.All;
this.VA_COL54TKWEEBKVXN_134203.visible= ConstantsApi.mode.All;
this.VA_COL44RQKRIFDDCK_361203.id = "VA_COL44RQKRIFDDCK_361203";
this.VA_COL44RQKRIFDDCK_361203.name = "col44";
this.VA_COL44RQKRIFDDCK_361203.label = cobis.translate("ASSTS.LBL_ASSTS_TIPOCOBRO_94502");
this.VA_COL44RQKRIFDDCK_361203.attribute = "col44";
this.VA_COL44RQKRIFDDCK_361203.colSpan = 1;
this.VA_COL44RQKRIFDDCK_361203.withoutLabel = false;
this.VA_COL44RQKRIFDDCK_361203.enabled = ConstantsApi.mode.All;
this.VA_COL44RQKRIFDDCK_361203.visible= ConstantsApi.mode.All;
this.VA_COL18MPQAUPJEQF_886203.id = "VA_COL18MPQAUPJEQF_886203";
this.VA_COL18MPQAUPJEQF_886203.name = "col18";
this.VA_COL18MPQAUPJEQF_886203.label = cobis.translate("ASSTS.LBL_ASSTS_PLAZOEZCX_65608");
this.VA_COL18MPQAUPJEQF_886203.attribute = "col18";
this.VA_COL18MPQAUPJEQF_886203.colSpan = 1;
this.VA_COL18MPQAUPJEQF_886203.withoutLabel = false;
this.VA_COL18MPQAUPJEQF_886203.enabled = ConstantsApi.mode.All;
this.VA_COL18MPQAUPJEQF_886203.visible= ConstantsApi.mode.All;
this.VA_COL24NFMYARIPPW_188203.id = "VA_COL24NFMYARIPPW_188203";
this.VA_COL24NFMYARIPPW_188203.name = "col24";
this.VA_COL24NFMYARIPPW_188203.label = cobis.translate("ASSTS.LBL_ASSTS_PERODOSIL_10161");
this.VA_COL24NFMYARIPPW_188203.attribute = "col24";
this.VA_COL24NFMYARIPPW_188203.colSpan = 1;
this.VA_COL24NFMYARIPPW_188203.withoutLabel = false;
this.VA_COL24NFMYARIPPW_188203.enabled = ConstantsApi.mode.All;
this.VA_COL24NFMYARIPPW_188203.visible= ConstantsApi.mode.All;
this.VA_COL22GPNCCEADAN_455203.id = "VA_COL22GPNCCEADAN_455203";
this.VA_COL22GPNCCEADAN_455203.name = "col22";
this.VA_COL22GPNCCEADAN_455203.label = cobis.translate("ASSTS.LBL_ASSTS_PERODOSAO_51516");
this.VA_COL22GPNCCEADAN_455203.attribute = "col22";
this.VA_COL22GPNCCEADAN_455203.colSpan = 1;
this.VA_COL22GPNCCEADAN_455203.withoutLabel = false;
this.VA_COL22GPNCCEADAN_455203.enabled = ConstantsApi.mode.All;
this.VA_COL22GPNCCEADAN_455203.visible= ConstantsApi.mode.All;
this.VA_COL25RWYMCMPQKL_227203.id = "VA_COL25RWYMCMPQKL_227203";
this.VA_COL25RWYMCMPQKL_227203.name = "col25";
this.VA_COL25RWYMCMPQKL_227203.label = cobis.translate("ASSTS.LBL_ASSTS_PERODOSIE_78309");
this.VA_COL25RWYMCMPQKL_227203.attribute = "col25";
this.VA_COL25RWYMCMPQKL_227203.colSpan = 1;
this.VA_COL25RWYMCMPQKL_227203.withoutLabel = false;
this.VA_COL25RWYMCMPQKL_227203.enabled = ConstantsApi.mode.All;
this.VA_COL25RWYMCMPQKL_227203.visible= ConstantsApi.mode.All;
this.VA_COL23ZUQVNTSTGF_643203.id = "VA_COL23ZUQVNTSTGF_643203";
this.VA_COL23ZUQVNTSTGF_643203.name = "col23";
this.VA_COL23ZUQVNTSTGF_643203.label = cobis.translate("ASSTS.LBL_ASSTS_PERODOSIO_78507");
this.VA_COL23ZUQVNTSTGF_643203.attribute = "col23";
this.VA_COL23ZUQVNTSTGF_643203.colSpan = 1;
this.VA_COL23ZUQVNTSTGF_643203.withoutLabel = false;
this.VA_COL23ZUQVNTSTGF_643203.enabled = ConstantsApi.mode.All;
this.VA_COL23ZUQVNTSTGF_643203.visible= ConstantsApi.mode.All;
this.VA_COL77JLESNGFECP_839203.id = "VA_COL77JLESNGFECP_839203";
this.VA_COL77JLESNGFECP_839203.name = "col77";
this.VA_COL77JLESNGFECP_839203.label = cobis.translate("ASSTS.LBL_ASSTS_MESGRACAI_83900");
this.VA_COL77JLESNGFECP_839203.attribute = "col77";
this.VA_COL77JLESNGFECP_839203.colSpan = 1;
this.VA_COL77JLESNGFECP_839203.withoutLabel = false;
this.VA_COL77JLESNGFECP_839203.enabled = ConstantsApi.mode.All;
this.VA_COL77JLESNGFECP_839203.visible= ConstantsApi.mode.All;
this.VA_COL49ZEUCHXHDSZ_263203.id = "VA_COL49ZEUCHXHDSZ_263203";
this.VA_COL49ZEUCHXHDSZ_263203.name = "col49";
this.VA_COL49ZEUCHXHDSZ_263203.label = cobis.translate("ASSTS.LBL_ASSTS_TIPOTABCZ_61680");
this.VA_COL49ZEUCHXHDSZ_263203.attribute = "col49";
this.VA_COL49ZEUCHXHDSZ_263203.colSpan = 1;
this.VA_COL49ZEUCHXHDSZ_263203.withoutLabel = false;
this.VA_COL49ZEUCHXHDSZ_263203.enabled = ConstantsApi.mode.All;
this.VA_COL49ZEUCHXHDSZ_263203.visible= ConstantsApi.mode.All;
this.VA_COL81JBFTYRSPYI_282203.id = "VA_COL81JBFTYRSPYI_282203";
this.VA_COL81JBFTYRSPYI_282203.name = "col81";
this.VA_COL81JBFTYRSPYI_282203.label = cobis.translate("ASSTS.LBL_ASSTS_EVITARDDA_31627");
this.VA_COL81JBFTYRSPYI_282203.attribute = "col81";
this.VA_COL81JBFTYRSPYI_282203.colSpan = 1;
this.VA_COL81JBFTYRSPYI_282203.withoutLabel = false;
this.VA_COL81JBFTYRSPYI_282203.enabled = ConstantsApi.mode.All;
this.VA_COL81JBFTYRSPYI_282203.visible= ConstantsApi.mode.All;
this.VA_COL111PZXDZUYUC_787203.id = "VA_COL111PZXDZUYUC_787203";
this.VA_COL111PZXDZUYUC_787203.name = "col111";
this.VA_COL111PZXDZUYUC_787203.label = cobis.translate("ASSTS.LBL_ASSTS_BASECLCLU_56377");
this.VA_COL111PZXDZUYUC_787203.attribute = "col111";
this.VA_COL111PZXDZUYUC_787203.colSpan = 1;
this.VA_COL111PZXDZUYUC_787203.withoutLabel = false;
this.VA_COL111PZXDZUYUC_787203.enabled = ConstantsApi.mode.All;
this.VA_COL111PZXDZUYUC_787203.visible= ConstantsApi.mode.All;
this.VA_COL113YQSWHDUHL_890203.id = "VA_COL113YQSWHDUHL_890203";
this.VA_COL113YQSWHDUHL_890203.name = "col113";
this.VA_COL113YQSWHDUHL_890203.label = cobis.translate("ASSTS.LBL_ASSTS_ULTIMODII_19737");
this.VA_COL113YQSWHDUHL_890203.attribute = "col113";
this.VA_COL113YQSWHDUHL_890203.colSpan = 1;
this.VA_COL113YQSWHDUHL_890203.withoutLabel = false;
this.VA_COL113YQSWHDUHL_890203.enabled = ConstantsApi.mode.All;
this.VA_COL113YQSWHDUHL_890203.visible= ConstantsApi.mode.All;
this.VA_COL48UDRRPRVRAD_844203.id = "VA_COL48UDRRPRVRAD_844203";
this.VA_COL48UDRRPRVRAD_844203.name = "col48";
this.VA_COL48UDRRPRVRAD_844203.label = cobis.translate("ASSTS.LBL_ASSTS_DASDELAOO_32774");
this.VA_COL48UDRRPRVRAD_844203.attribute = "col48";
this.VA_COL48UDRRPRVRAD_844203.colSpan = 1;
this.VA_COL48UDRRPRVRAD_844203.withoutLabel = false;
this.VA_COL48UDRRPRVRAD_844203.enabled = ConstantsApi.mode.All;
this.VA_COL48UDRRPRVRAD_844203.visible= ConstantsApi.mode.All;
this.VA_COL53CZDOJNOMFT_346203.id = "VA_COL53CZDOJNOMFT_346203";
this.VA_COL53CZDOJNOMFT_346203.name = "col53";
this.VA_COL53CZDOJNOMFT_346203.label = cobis.translate("ASSTS.LBL_ASSTS_DASGRACAA_67492");
this.VA_COL53CZDOJNOMFT_346203.attribute = "col53";
this.VA_COL53CZDOJNOMFT_346203.colSpan = 1;
this.VA_COL53CZDOJNOMFT_346203.withoutLabel = false;
this.VA_COL53CZDOJNOMFT_346203.enabled = ConstantsApi.mode.All;
this.VA_COL53CZDOJNOMFT_346203.visible= ConstantsApi.mode.All;
this.VA_COL112OCPGNLXFG_495203.id = "VA_COL112OCPGNLXFG_495203";
this.VA_COL112OCPGNLXFG_495203.name = "col112";
this.VA_COL112OCPGNLXFG_495203.label = cobis.translate("ASSTS.LBL_ASSTS_RECALCUAA_80422");
this.VA_COL112OCPGNLXFG_495203.attribute = "col112";
this.VA_COL112OCPGNLXFG_495203.colSpan = 1;
this.VA_COL112OCPGNLXFG_495203.withoutLabel = false;
this.VA_COL112OCPGNLXFG_495203.enabled = ConstantsApi.mode.All;
this.VA_COL112OCPGNLXFG_495203.visible= ConstantsApi.mode.All;
this.VA_BALLOOMFEEERNAZ_793203.id = "VA_BALLOOMFEEERNAZ_793203";
this.VA_BALLOOMFEEERNAZ_793203.name = "balloomFee";
this.VA_BALLOOMFEEERNAZ_793203.label = cobis.translate("ASSTS.LBL_ASSTS_CUOTABALM_92280");
this.VA_BALLOOMFEEERNAZ_793203.attribute = "balloomFee";
this.VA_BALLOOMFEEERNAZ_793203.colSpan = 1;
this.VA_BALLOOMFEEERNAZ_793203.withoutLabel = false;
this.VA_BALLOOMFEEERNAZ_793203.enabled = ConstantsApi.mode.All;
this.VA_BALLOOMFEEERNAZ_793203.visible= ConstantsApi.mode.All;
this.VA_COL80ASFOWXJRDC_132203.id = "VA_COL80ASFOWXJRDC_132203";
this.VA_COL80ASFOWXJRDC_132203.name = "col80";
this.VA_COL80ASFOWXJRDC_132203.label = cobis.translate("ASSTS.LBL_ASSTS_REAJUSTAE_35292");
this.VA_COL80ASFOWXJRDC_132203.attribute = "col80";
this.VA_COL80ASFOWXJRDC_132203.colSpan = 1;
this.VA_COL80ASFOWXJRDC_132203.withoutLabel = false;
this.VA_COL80ASFOWXJRDC_132203.enabled = ConstantsApi.mode.All;
this.VA_COL80ASFOWXJRDC_132203.visible= ConstantsApi.mode.All;
this.VA_COL35HREVITBWJO_552203.id = "VA_COL35HREVITBWJO_552203";
this.VA_COL35HREVITBWJO_552203.name = "col35";
this.VA_COL35HREVITBWJO_552203.label = cobis.translate("ASSTS.LBL_ASSTS_FECHAPRIM_57148");
this.VA_COL35HREVITBWJO_552203.attribute = "col35";
this.VA_COL35HREVITBWJO_552203.colSpan = 1;
this.VA_COL35HREVITBWJO_552203.withoutLabel = false;
this.VA_COL35HREVITBWJO_552203.enabled = ConstantsApi.mode.All;
this.VA_COL35HREVITBWJO_552203.visible= ConstantsApi.mode.All;
this.VA_COL34HWLCGTUDDY_405203.id = "VA_COL34HWLCGTUDDY_405203";
this.VA_COL34HWLCGTUDDY_405203.name = "col34";
this.VA_COL34HWLCGTUDDY_405203.label = cobis.translate("ASSTS.LBL_ASSTS_PERODOSUE_60819");
this.VA_COL34HWLCGTUDDY_405203.attribute = "col34";
this.VA_COL34HWLCGTUDDY_405203.colSpan = 1;
this.VA_COL34HWLCGTUDDY_405203.withoutLabel = false;
this.VA_COL34HWLCGTUDDY_405203.enabled = ConstantsApi.mode.All;
this.VA_COL34HWLCGTUDDY_405203.visible= ConstantsApi.mode.All;
this.VA_1FGSVHUUVWIKFUH_287203.id = "VA_1FGSVHUUVWIKFUH_287203";
this.VA_1FGSVHUUVWIKFUH_287203.name = "attribute1";
this.VA_1FGSVHUUVWIKFUH_287203.attribute = "attribute1";
this.VA_1FGSVHUUVWIKFUH_287203.colSpan = 2;
this.VA_1FGSVHUUVWIKFUH_287203.withoutLabel = false;
this.VA_1FGSVHUUVWIKFUH_287203.readOnly = ConstantsApi.mode.Query;
this.VA_1FGSVHUUVWIKFUH_287203.entity = "OperationPaymentColumn";
this.VA_1FGSVHUUVWIKFUH_287203.enabled = ConstantsApi.mode.Query;
this.VA_1FGSVHUUVWIKFUH_287203.visible= ConstantsApi.mode.All;
this.VA_1FGSVHUUVWIKFUH_287203.textField = "value";
this.VA_1FGSVHUUVWIKFUH_287203.valueField = "code";
this.VA_2SRBPZVHVQZKGLJ_978203.id = "VA_2SRBPZVHVQZKGLJ_978203";
this.VA_2SRBPZVHVQZKGLJ_978203.name = "attribute2";
this.VA_2SRBPZVHVQZKGLJ_978203.attribute = "attribute2";
this.VA_2SRBPZVHVQZKGLJ_978203.colSpan = 2;
this.VA_2SRBPZVHVQZKGLJ_978203.withoutLabel = false;
this.VA_2SRBPZVHVQZKGLJ_978203.readOnly = ConstantsApi.mode.Query;
this.VA_2SRBPZVHVQZKGLJ_978203.entity = "OperationPaymentColumn";
this.VA_2SRBPZVHVQZKGLJ_978203.enabled = ConstantsApi.mode.Query;
this.VA_2SRBPZVHVQZKGLJ_978203.visible= ConstantsApi.mode.All;
this.VA_2SRBPZVHVQZKGLJ_978203.textField = "value";
this.VA_2SRBPZVHVQZKGLJ_978203.valueField = "code";
this.VA_7HLMTHMOBEPUKDK_450203.id = "VA_7HLMTHMOBEPUKDK_450203";
this.VA_7HLMTHMOBEPUKDK_450203.name = "attribute7";
this.VA_7HLMTHMOBEPUKDK_450203.attribute = "attribute7";
this.VA_7HLMTHMOBEPUKDK_450203.colSpan = 2;
this.VA_7HLMTHMOBEPUKDK_450203.withoutLabel = false;
this.VA_7HLMTHMOBEPUKDK_450203.readOnly = ConstantsApi.mode.Query;
this.VA_7HLMTHMOBEPUKDK_450203.entity = "OperationPaymentColumn";
this.VA_7HLMTHMOBEPUKDK_450203.enabled = ConstantsApi.mode.Query;
this.VA_7HLMTHMOBEPUKDK_450203.visible= ConstantsApi.mode.All;
this.VA_7HLMTHMOBEPUKDK_450203.textField = "value";
this.VA_7HLMTHMOBEPUKDK_450203.valueField = "code";
this.VA_3NNEJBUKBEXSHGE_308203.id = "VA_3NNEJBUKBEXSHGE_308203";
this.VA_3NNEJBUKBEXSHGE_308203.name = "attribute3";
this.VA_3NNEJBUKBEXSHGE_308203.attribute = "attribute3";
this.VA_3NNEJBUKBEXSHGE_308203.label = cobis.translate("ASSTS.LBL_ASSTS_CALCULACT_91300");
this.VA_3NNEJBUKBEXSHGE_308203.colSpan = 1;
this.VA_3NNEJBUKBEXSHGE_308203.withoutLabel = false;
this.VA_3NNEJBUKBEXSHGE_308203.readOnly = ConstantsApi.mode.Query;
this.VA_3NNEJBUKBEXSHGE_308203.entity = "OperationPaymentColumn";
this.VA_3NNEJBUKBEXSHGE_308203.enabled = ConstantsApi.mode.Query;
this.VA_3NNEJBUKBEXSHGE_308203.visible= ConstantsApi.mode.All;
this.VA_3NNEJBUKBEXSHGE_308203.textField = "value";
this.VA_3NNEJBUKBEXSHGE_308203.valueField = "code";
this.VA_4FLCMFUIKOOYYCR_921203.id = "VA_4FLCMFUIKOOYYCR_921203";
this.VA_4FLCMFUIKOOYYCR_921203.name = "attribute4";
this.VA_4FLCMFUIKOOYYCR_921203.attribute = "attribute4";
this.VA_4FLCMFUIKOOYYCR_921203.label = cobis.translate("ASSTS.LBL_ASSTS_SEACEPTAO_97874");
this.VA_4FLCMFUIKOOYYCR_921203.colSpan = 1;
this.VA_4FLCMFUIKOOYYCR_921203.withoutLabel = false;
this.VA_4FLCMFUIKOOYYCR_921203.readOnly = ConstantsApi.mode.Query;
this.VA_4FLCMFUIKOOYYCR_921203.entity = "OperationPaymentColumn";
this.VA_4FLCMFUIKOOYYCR_921203.enabled = ConstantsApi.mode.Query;
this.VA_4FLCMFUIKOOYYCR_921203.visible= ConstantsApi.mode.All;
this.VA_4FLCMFUIKOOYYCR_921203.textField = "value";
this.VA_4FLCMFUIKOOYYCR_921203.valueField = "code";
this.VA_5KYGLTQZCBSQIFR_819203.id = "VA_5KYGLTQZCBSQIFR_819203";
this.VA_5KYGLTQZCBSQIFR_819203.name = "attribute5";
this.VA_5KYGLTQZCBSQIFR_819203.attribute = "attribute5";
this.VA_5KYGLTQZCBSQIFR_819203.label = cobis.translate("ASSTS.LBL_ASSTS_SOLOPAGCT_38138");
this.VA_5KYGLTQZCBSQIFR_819203.colSpan = 1;
this.VA_5KYGLTQZCBSQIFR_819203.withoutLabel = false;
this.VA_5KYGLTQZCBSQIFR_819203.readOnly = ConstantsApi.mode.Query;
this.VA_5KYGLTQZCBSQIFR_819203.entity = "OperationPaymentColumn";
this.VA_5KYGLTQZCBSQIFR_819203.enabled = ConstantsApi.mode.Query;
this.VA_5KYGLTQZCBSQIFR_819203.visible= ConstantsApi.mode.All;
this.VA_5KYGLTQZCBSQIFR_819203.textField = "value";
this.VA_5KYGLTQZCBSQIFR_819203.valueField = "code";
this.VA_6ECRCCEMLGMWTWN_816203.id = "VA_6ECRCCEMLGMWTWN_816203";
this.VA_6ECRCCEMLGMWTWN_816203.name = "attribute6";
this.VA_6ECRCCEMLGMWTWN_816203.attribute = "attribute6";
this.VA_6ECRCCEMLGMWTWN_816203.label = cobis.translate("ASSTS.LBL_ASSTS_PERMITECA_18156");
this.VA_6ECRCCEMLGMWTWN_816203.colSpan = 1;
this.VA_6ECRCCEMLGMWTWN_816203.withoutLabel = false;
this.VA_6ECRCCEMLGMWTWN_816203.readOnly = ConstantsApi.mode.Query;
this.VA_6ECRCCEMLGMWTWN_816203.entity = "OperationPaymentColumn";
this.VA_6ECRCCEMLGMWTWN_816203.enabled = ConstantsApi.mode.Query;
this.VA_6ECRCCEMLGMWTWN_816203.visible= ConstantsApi.mode.All;
this.VA_6ECRCCEMLGMWTWN_816203.textField = "value";
this.VA_6ECRCCEMLGMWTWN_816203.valueField = "code";
this.Spacer2685.id = "Spacer2685";
this.Spacer2685.name = "Spacer2685";
this.Spacer2685.colSpan = 1;
this.Spacer2685.visible= ConstantsApi.mode.All;
this.VA_VABUTTONDDDDEEH_709203.id = "VA_VABUTTONDDDDEEH_709203";
this.VA_VABUTTONDDDDEEH_709203.name = "VA_VABUTTONDDDDEEH_709203";
this.VA_VABUTTONDDDDEEH_709203.label = cobis.translate("ASSTS.LBL_ASSTS_INACINFEN_59763");
this.VA_VABUTTONDDDDEEH_709203.colSpan = 1;
this.VA_VABUTTONDDDDEEH_709203.withoutLabel = false;
this.VA_VABUTTONDDDDEEH_709203.causesValidation=false;
this.VA_VABUTTONDDDDEEH_709203.submitOnEnter=false;
this.VA_VABUTTONDDDDEEH_709203.setFocus=false;
this.VA_VABUTTONDDDDEEH_709203.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONDDDDEEH_709203.visible= ConstantsApi.mode.None;
this.T_GENERALINAOIT_347 = this.formBuilder.group({
ColumnsDataValue: this.formBuilder.group({
col30:[{value: null, disabled: !this.VA_TEXTINPUTBOXYLL_293203.visible}],
col82:[{value: null, disabled: !this.VA_TEXTINPUTBOXFHY_331203.visible}],
col91:[{value: null, disabled: !this.VA_TEXTINPUTBOXXCX_878203.visible}],
col11:[{value: null, disabled: !this.VA_COL11DMRXFYBTRJ_832203.visible}],
col89:[{value: null, disabled: !this.VA_TEXTINPUTBOXOZJ_807203.visible}],
col70:[{value: null, disabled: !this.VA_TEXTINPUTBOXCLV_313203.visible}],
col3:[{value: null, disabled: !this.VA_TEXTINPUTBOXCEU_727203.visible}],
col74:[{value: null, disabled: !this.VA_TEXTINPUTBOXZST_196203.visible}],
col4:[{value: null, disabled: !this.VA_TEXTINPUTBOXKKT_290203.visible}],
col63:[{value: null, disabled: !this.VA_TEXTINPUTBOXQVD_784203.visible}],
col28:[{value: null, disabled: !this.VA_TEXTINPUTBOXFUR_725203.visible}],
col83:[{value: null, disabled: !this.VA_TEXTINPUTBOXNLU_276203.visible}],
col127:[{value: null, disabled: !this.VA_TEXTINPUTBOXXAE_419203.visible}],
col96:[{value: null, disabled: !this.VA_TEXTINPUTBOXNUC_515203.visible}],
col116:[{value: null, disabled: !this.VA_TEXTINPUTBOXMIJ_255203.visible}],
col148:[{value: null, disabled: !this.VA_COL148YHTMQIFBH_165203.visible}],
col98:[{value: null, disabled: !this.VA_COL98VYAYLZCUKZ_984203.visible}],
col149:[{value: null, disabled: !this.VA_COL149ECRVIIDXJ_360203.visible}],
col94:[{value: null, disabled: !this.VA_TEXTINPUTBOXTXW_844203.visible}],
col150:[{value: null, disabled: !this.VA_COL150TJUVFKMWM_571203.visible}],
col16:[{value: null, disabled: !this.VA_TEXTINPUTBOXVHS_357203.visible}],
col151:[{value: null, disabled: !this.VA_COL151XEUXPLAEA_433203.visible}],
col17:[{value: null, disabled: !this.VA_TEXTINPUTBOXVBB_693203.visible}],
col138:[{value: null, disabled: !this.VA_TEXTINPUTBOXWVS_331203.visible}],
col13:[{value: null, disabled: !this.VA_TEXTINPUTBOXLAA_716203.visible}],
col139:[{value: null, disabled: !this.VA_TEXTINPUTBOXEUN_350203.visible}],
col71:[{value: null, disabled: !this.VA_TEXTINPUTBOXPCU_828203.visible}],
col169:[{value: null, disabled: !this.VA_COL169OXNPIMJZK_188203.visible}],
col170:[{value: null, disabled: !this.VA_COL170OEOBJNBNE_695203.visible}],
companySold:[{value: null, disabled: !this.VA_4624BUKADQWYBLU_749203.visible}],
sectorDesc:[{value: null, disabled: !this.VA_COL147RUDCEIBHO_731203.visible}],
col100:[{value: null, disabled: !this.VA_TEXTINPUTBOXVBP_896203.visible}],
col102:[{value: null, disabled: !this.VA_COL102IZHQPGLGQ_823203.visible}],
col103:[{value: null, disabled: !this.VA_TEXTINPUTBOXSFC_390203.visible}],
col88:[{value: null, disabled: !this.VA_TEXTINPUTBOXZSP_614203.visible}],
col153:[{value: null, disabled: !this.VA_COL153PEYBRIIBA_813203.visible}],
col154:[{value: null, disabled: !this.VA_COL154WEXTAMOTB_871203.visible}],
col155:[{value: null, disabled: !this.VA_COL155VLXVEOBDY_344203.visible}],
col156:[{value: null, disabled: !this.VA_COL156OKGIGKFEX_212203.visible}],
col157:[{value: null, disabled: !this.VA_COL157AGGZBEULZ_816203.visible}],
col158:[{value: null, disabled: !this.VA_COL158WGHVVWVEK_572203.visible}],
col159:[{value: null, disabled: !this.VA_COL159WPDNFJVTU_966203.visible}],
col160:[{value: null, disabled: !this.VA_COL160HJQNBSHMS_764203.visible}],
col161:[{value: null, disabled: !this.VA_COL161CZCIPBKLM_114203.visible}],
col93:[{value: null, disabled: !this.VA_TEXTINPUTBOXXQS_367203.visible}],
col106:[{value: null, disabled: !this.VA_TEXTINPUTBOXDFL_233203.visible}],
col10:[{value: null, disabled: !this.VA_TEXTINPUTBOXLDN_789203.visible}],
col144:[{value: null, disabled: !this.VA_TEXTINPUTBOXPRC_818203.visible}],
col92:[{value: null, disabled: !this.VA_TEXTINPUTBOXAYN_905203.visible}],
col146:[{value: null, disabled: !this.VA_COL146AYXFKCRYI_168203.visible}],
col128:[{value: null, disabled: !this.VA_TEXTINPUTBOXHNK_820203.visible}],
col136:[{value: null, disabled: !this.VA_TEXTINPUTBOXMWQ_662203.visible}],
col132:[{value: null, disabled: !this.VA_TEXTINPUTBOXYAE_738203.visible}],
col137:[{value: null, disabled: !this.VA_TEXTINPUTBOXPRR_754203.visible}],
col14:[{value: null, disabled: !this.VA_TEXTINPUTBOXFJI_119203.visible}],
col37:[{value: null, disabled: !this.VA_TEXTINPUTBOXSJD_345203.visible}],
col38:[{value: null, disabled: !this.VA_TEXTINPUTBOXLZX_625203.visible}],
col140:[{value: null, disabled: !this.VA_TEXTINPUTBOXZYM_339203.visible}],
col141:[{value: null, disabled: !this.VA_TEXTINPUTBOXTAU_538203.visible}],
col119:[{value: null, disabled: !this.VA_TEXTINPUTBOXWQL_188203.visible}],
col133:[{value: null, disabled: !this.VA_TEXTINPUTBOXQNT_219203.visible}],
col95:[{value: null, disabled: !this.VA_TEXTINPUTBOXXYN_505203.visible}],
col97:[{value: null, disabled: !this.VA_TEXTINPUTBOXGBW_313203.visible}],
col134:[{value: null, disabled: !this.VA_TEXTINPUTBOXKJW_728203.visible}],
col12:[null],
col15:[null],
col2:[null],
col111:[null],
col35:[null],
col125:[null],
col1:[null],
col126:[null],
col21:[null],
col32:[null],
col76:[null],
col101:[null],
col130:[null],
col47:[null],
col75:[null],
col24:[null],
col121:[null],
col64:[null],
col22:[null],
col25:[null],
col109:[null],
col61:[null],
col31:[null],
col62:[null],
col84:[null],
col108:[null],
col87:[null],
col66:[null],
col135:[null],
col26:[null],
col72:[null],
col78:[null],
col118:[null],
col20:[null],
col52:[null],
col49:[null],
col166:[null],
col18:[null],
col67:[null],
col56:[null],
col68:[null],
col69:[null],
col129:[null],
col171:[null],
col167:[null],
col43:[null],
col46:[null],
col29:[null],
col86:[null],
col8:[null],
col113:[null],
col115:[null],
col152:[null],
col19:[null],
col42:[null],
col162:[null],
col33:[null],
col73:[null],
balloomFee:[null],
col55:[null],
col58:[null],
col120:[null],
col107:[null],
col117:[null],
col80:[null],
col112:[null],
col168:[null],
col40:[null],
col79:[null],
col122:[null],
col124:[null],
col41:[null],
col5:[null],
col27:[null],
col44:[null],
col77:[null],
col85:[null],
col48:[null],
col65:[null],
col6:[null],
col59:[null],
col105:[null],
col163:[null],
col147:[null],
col54:[null],
col110:[null],
col23:[null],
col81:[null],
col45:[null],
col34:[null],
col114:[null],
col51:[null],
col131:[null],
col7:[null],
col99:[null],
col53:[null],
col90:[null],
col9:[null],
col143:[null],
col50:[null],
col57:[null],
col104:[null],
col123:[null],
col164:[null],
col165:[null],
col142:[null],
col36:[null],
col60:[null],
col39:[null],
col145:[null],
}
),
OperationPaymentColumn: this.formBuilder.group({
attribute1:[{value: null, disabled: !this.VA_1FGSVHUUVWIKFUH_287203.visible},CobisDesignerUtil.getValidationFunctions(this.VA_1FGSVHUUVWIKFUH_287203.validationFunctions!)],
attribute2:[{value: null, disabled: !this.VA_2SRBPZVHVQZKGLJ_978203.visible},CobisDesignerUtil.getValidationFunctions(this.VA_2SRBPZVHVQZKGLJ_978203.validationFunctions!)],
attribute7:[{value: null, disabled: !this.VA_7HLMTHMOBEPUKDK_450203.visible},CobisDesignerUtil.getValidationFunctions(this.VA_7HLMTHMOBEPUKDK_450203.validationFunctions!)],
attribute3:[{value: null, disabled: !this.VA_3NNEJBUKBEXSHGE_308203.visible},CobisDesignerUtil.getValidationFunctions(this.VA_3NNEJBUKBEXSHGE_308203.validationFunctions!)],
attribute4:[{value: null, disabled: !this.VA_4FLCMFUIKOOYYCR_921203.visible},CobisDesignerUtil.getValidationFunctions(this.VA_4FLCMFUIKOOYYCR_921203.validationFunctions!)],
attribute5:[{value: null, disabled: !this.VA_5KYGLTQZCBSQIFR_819203.visible},CobisDesignerUtil.getValidationFunctions(this.VA_5KYGLTQZCBSQIFR_819203.validationFunctions!)],
attribute6:[{value: null, disabled: !this.VA_6ECRCCEMLGMWTWN_816203.visible},CobisDesignerUtil.getValidationFunctions(this.VA_6ECRCCEMLGMWTWN_816203.validationFunctions!)],
attribute8:[null],
attribute9:[null],
attribute10:[null],
attribute11:[null],
attribute12:[null],
attribute13:[null],
attribute14:[null],
attribute15:[null],
attribute16:[null],
attribute17:[null],
attribute18:[null],
attribute19:[null],
}
),
LoanInstancia: this.formBuilder.group({
idOptionMenu:[null],
errorValidation:[null],
idInstancia:[null],
tipo:[null],
}
),
});
}
}