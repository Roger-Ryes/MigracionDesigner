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
public T_LNSPRTZAAOTEC_626!:FormGroup;
public VC_LOANSSIMOO_401626:CobisGroupBoxModel = new CobisGroupBoxModel();
public VC_HXNXIGVETR_494626 : CobisTabbedLayoutContainerModel = new CobisTabbedLayoutContainerModel();
public VC_MWEGHJFEQQ_170626_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public VC_MWEGHJFEQQ_170626 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VC_ALTRVLDXVF_918539 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OPERATINOS_396221 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OPERATINLN_412221 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OPERATINOO_657221 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_YWPR_NOE85: CobisGridModel = new CobisGridModel();
public G_OPERATIOOO_201221 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OPERATIALO_494221 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_VE29_XZB37: CobisGridModel = new CobisGridModel();
public G_OPERATINLA_175221 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OPERATIOOO_148221 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VC_FUAFKEKXSW_812626_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public VC_FUAFKEKXSW_812626 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VC_OHRULBIEYW_208330 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OPERATIMNT_255587 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_MC21_OVS27: CobisGridModel = new CobisGridModel();
public G_OPERATITIM_774587 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VC_TPJGHFAFBF_762626_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public VC_TPJGHFAFBF_762626 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VC_NMEKLYPCZL_469785 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OPERATIREA_304309 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OPERATILGA_375309 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OPERATISNM_844309 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OPERATINPL_449309 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VC_GIMALDPDEW_251626_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public VC_GIMALDPDEW_251626 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VC_BECTIFDMHE_188633 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OPERATIAAD_786198 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OPERATIUTN_807198 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OPERATIAEO_858198 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_OPERATIYTE_172198 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_ECPR_JAA30: CobisGridModel = new CobisGridModel();
public G_OPERATIMTO_363198 : CobisGroupBoxModel = new CobisGroupBoxModel();
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
public VA_SPACER1990PHNZF_966587: CobisSpacerModel = new CobisSpacerModel();
public VA_VAVABUTTONTR__P_260587: CobisButtonModel = new CobisButtonModel();
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
public VA_NUMOPERATIONRWY_828198: CobisTextLabelModel = new CobisTextLabelModel();
public VA_OPERATIONTYPEEE_239198: CobisTextLabelModel = new CobisTextLabelModel();
public VA_AMOUNTEWSEJLOSB_545198: CobisTextLabelModel = new CobisTextLabelModel();
public VA_TIRFEEYVRGJBTQS_146198: CobisTextLabelModel = new CobisTextLabelModel();
public VA_VALUEDATEKMJLVF_161198: CobisDateFieldModel = new CobisDateFieldModel();
public VA_INTERESTBRXDBGI_239198: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_FEEOFWVFIUKFNPP_635198: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_TERMTYPEOWIDGEH_595198: CobisDropDownListModel = new CobisDropDownListModel();
public VA_TERMMUMJBESVPSA_498198: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_TYPEFEEARBRJCKA_414198: CobisDropDownListModel = new CobisDropDownListModel();
public VA_FIRSTDUEDATEACN_138198: CobisDateFieldModel = new CobisDateFieldModel();
public VA_FIXEDPAYEMENYTY_637198: CobisCheckBoxModel = new CobisCheckBoxModel();
public VA_PAYMENTDAYEFRJN_549198: CobisDropDownListModel = new CobisDropDownListModel();
public VA_TERMINTERESTGWH_345198: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_TERMCAPITALLSSH_857198: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_EXTENDEDPAYMEDA_710198: CobisDateFieldModel = new CobisDateFieldModel();
public VA_DAYSGRACEDEFUUU_853198: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public Spacer2905: CobisSpacerModel = new CobisSpacerModel();
public VA_MONTHGRACEFIJFA_429198: CobisDropDownListModel = new CobisDropDownListModel();
public VA_TERMGRACECAPTAT_881198: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_TERMGRACEINTTET_849198: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_BASEINTERESTAAC_534198: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public VA_TYPEAMORTIZATTN_681198: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public VA_AVOIDHOLIDAYSSS_789198: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public VA_TYPEGRACEBHAAVJ_350198: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public VA_9468GILHMJRMZIF_745198: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_BALLONFEEWWRPRY_949198: CobisCheckBoxModel = new CobisCheckBoxModel();
public VA_RANDOMGRACEYJOS_359198: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_GENERATEINSUENC_694198: CobisCheckBoxModel = new CobisCheckBoxModel();
public VA_INITIALINTERTSE_643198: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_REDISCOUNTDAEET_581198: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_SOLIDARITYTOGWR_286198: CobisCheckBoxModel = new CobisCheckBoxModel();
public VA_IVASDFHAPWJFULF_560198: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public Spacer2387: CobisSpacerModel = new CobisSpacerModel();
public VA_VAVABUTTONRDGI5_636198: CobisButtonModel = new CobisButtonModel();
public VA_VAVABUTTONNXJJ__482198: CobisButtonModel = new CobisButtonModel();
public VA_VAVABUTTONZDFPF_173198: CobisButtonModel = new CobisButtonModel();
public VA_VAVABUTTONOH3FZ_246198: CobisButtonModel = new CobisButtonModel();
public VA_VAVABUTTONNPM_2_987198: CobisButtonModel = new CobisButtonModel();
public VA_VAVABUTTONVJFY0_286198: CobisButtonModel = new CobisButtonModel();
public VA_SPACER2979MSHFC_211198: CobisSpacerModel = new CobisSpacerModel();
public VA_SPACER1486BFHYH_817198: CobisSpacerModel = new CobisSpacerModel();
public VA_VAVABUTTONPJ080_778198: CobisButtonModel = new CobisButtonModel();
public VA_SPACER2660NECGA_809198: CobisSpacerModel = new CobisSpacerModel();
public CM_TLNSPRTZ_RRO: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LOANSSIMOO_401626.id="VC_LOANSSIMOO_401626";
this.VC_LOANSSIMOO_401626.name="ViewContainerBase";
this.VC_LOANSSIMOO_401626.colSpan=1;
this.VC_LOANSSIMOO_401626.columns=1;
this.VC_LOANSSIMOO_401626.enabled=ConstantsApi.mode.All;
this.VC_HXNXIGVETR_494626.id="VC_HXNXIGVETR_494626";
this.VC_HXNXIGVETR_494626.name="ViewContainerBase";
this.VC_HXNXIGVETR_494626.tabPosition=PositionTab.TOP;
this.VC_HXNXIGVETR_494626.enabled=ConstantsApi.mode.All;
this.VC_HXNXIGVETR_494626.childrenGroups = ["VC_MWEGHJFEQQ_170626_tab","VC_FUAFKEKXSW_812626_tab","VC_TPJGHFAFBF_762626_tab","VC_GIMALDPDEW_251626_tab"];
this.VC_MWEGHJFEQQ_170626.id="VC_MWEGHJFEQQ_170626";
this.VC_MWEGHJFEQQ_170626.name="ViewContainerBase";
this.VC_MWEGHJFEQQ_170626.enabled=ConstantsApi.mode.All;
this.VC_MWEGHJFEQQ_170626.colSpan=1;
this.VC_MWEGHJFEQQ_170626.columns=1;
this.VC_MWEGHJFEQQ_170626_tab.id="VC_MWEGHJFEQQ_170626_tab";
this.VC_MWEGHJFEQQ_170626_tab.name="ViewContainerBase";
this.VC_MWEGHJFEQQ_170626_tab.enabled=ConstantsApi.mode.All;
this.VC_MWEGHJFEQQ_170626_tab.colSpan=1;
this.VC_MWEGHJFEQQ_170626_tab.label = cobis.translate("LNSPR.LBL_LNSPR_INACINGNN_54588");
this.VC_ALTRVLDXVF_918539.id="VC_ALTRVLDXVF_918539";
this.VC_ALTRVLDXVF_918539.name="OperationLoansForm";
this.VC_ALTRVLDXVF_918539.enabled=ConstantsApi.mode.All;
this.VC_ALTRVLDXVF_918539.colSpan=1;
this.VC_ALTRVLDXVF_918539.columns=1;
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
this.VC_FUAFKEKXSW_812626.id="VC_FUAFKEKXSW_812626";
this.VC_FUAFKEKXSW_812626.name="ViewContainerBase";
this.VC_FUAFKEKXSW_812626.enabled=ConstantsApi.mode.All;
this.VC_FUAFKEKXSW_812626.colSpan=1;
this.VC_FUAFKEKXSW_812626.columns=1;
this.VC_FUAFKEKXSW_812626_tab.id="VC_FUAFKEKXSW_812626_tab";
this.VC_FUAFKEKXSW_812626_tab.name="ViewContainerBase";
this.VC_FUAFKEKXSW_812626_tab.enabled=ConstantsApi.mode.All;
this.VC_FUAFKEKXSW_812626_tab.colSpan=1;
this.VC_FUAFKEKXSW_812626_tab.label = cobis.translate("LNSPR.LBL_LNSPR_RUBROSIFS_16769");
this.VC_OHRULBIEYW_208330.id="VC_OHRULBIEYW_208330";
this.VC_OHRULBIEYW_208330.name="OperationItems";
this.VC_OHRULBIEYW_208330.enabled=ConstantsApi.mode.All;
this.VC_OHRULBIEYW_208330.colSpan=1;
this.VC_OHRULBIEYW_208330.columns=1;
this.G_OPERATIMNT_255587.id="G_OPERATIMNT_255587";
this.G_OPERATIMNT_255587.name="Group1657";
this.G_OPERATIMNT_255587.columns=1;
this.G_OPERATIMNT_255587.labelOrientation="Top";
this.G_OPERATIMNT_255587.colSpan=1;
this.G_OPERATIMNT_255587.enabled=ConstantsApi.mode.All;
this.G_OPERATIMNT_255587.visible=ConstantsApi.mode.All;
this.G_OPERATIMNT_255587.attList = ["item","description","typeItem","otherRates","paymentMethod","signo","priority","factor","reference","signReadjustment","referenceReadjustment","factorReadjustment","calculationBase","amount","percentage","payArrears","cause","points","typePoints","totalRate","negotiatedRate","annualRate","pointsReadjustment","grace","receivable","warrantyType","warrantyAccount","warrantyCoverage","warrantyValue","dividendType","interestPeriods","financed","minRate","maxRate","associate","associateValue","insurance","insuranceType","category","rank"];
this.G_OPERATITIM_774587.id="G_OPERATITIM_774587";
this.G_OPERATITIM_774587.name="Group1466";
this.G_OPERATITIM_774587.columns=3;
this.G_OPERATITIM_774587.labelOrientation="Top";
this.G_OPERATITIM_774587.colSpan=1;
this.G_OPERATITIM_774587.enabled=ConstantsApi.mode.All;
this.G_OPERATITIM_774587.visible=ConstantsApi.mode.All;
this.VC_TPJGHFAFBF_762626.id="VC_TPJGHFAFBF_762626";
this.VC_TPJGHFAFBF_762626.name="ViewContainerBase";
this.VC_TPJGHFAFBF_762626.enabled=ConstantsApi.mode.All;
this.VC_TPJGHFAFBF_762626.colSpan=1;
this.VC_TPJGHFAFBF_762626.columns=1;
this.VC_TPJGHFAFBF_762626_tab.id="VC_TPJGHFAFBF_762626_tab";
this.VC_TPJGHFAFBF_762626_tab.name="ViewContainerBase";
this.VC_TPJGHFAFBF_762626_tab.enabled=ConstantsApi.mode.All;
this.VC_TPJGHFAFBF_762626_tab.colSpan=1;
this.VC_TPJGHFAFBF_762626_tab.label = cobis.translate("LNSPR.LBL_LNSPR_PARMETROG_15063");
this.VC_NMEKLYPCZL_469785.id="VC_NMEKLYPCZL_469785";
this.VC_NMEKLYPCZL_469785.name="OperationLoansGeneralParametersForm";
this.VC_NMEKLYPCZL_469785.enabled=ConstantsApi.mode.All;
this.VC_NMEKLYPCZL_469785.colSpan=1;
this.VC_NMEKLYPCZL_469785.columns=1;
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
this.VC_GIMALDPDEW_251626.id="VC_GIMALDPDEW_251626";
this.VC_GIMALDPDEW_251626.name="ViewContainerBase";
this.VC_GIMALDPDEW_251626.enabled=ConstantsApi.mode.All;
this.VC_GIMALDPDEW_251626.colSpan=1;
this.VC_GIMALDPDEW_251626.columns=1;
this.VC_GIMALDPDEW_251626_tab.id="VC_GIMALDPDEW_251626_tab";
this.VC_GIMALDPDEW_251626_tab.name="ViewContainerBase";
this.VC_GIMALDPDEW_251626_tab.enabled=ConstantsApi.mode.All;
this.VC_GIMALDPDEW_251626_tab.colSpan=1;
this.VC_GIMALDPDEW_251626_tab.label = cobis.translate("LNSPR.LBL_LNSPR_AMORTIZII_74160");
this.VC_BECTIFDMHE_188633.id="VC_BECTIFDMHE_188633";
this.VC_BECTIFDMHE_188633.name="OperationPaymentDayUpdateForm";
this.VC_BECTIFDMHE_188633.enabled=ConstantsApi.mode.All;
this.VC_BECTIFDMHE_188633.colSpan=1;
this.VC_BECTIFDMHE_188633.columns=1;
this.G_OPERATIAAD_786198.id="G_OPERATIAAD_786198";
this.G_OPERATIAAD_786198.name="GroupLayout1904";
this.G_OPERATIAAD_786198.columns=1;
this.G_OPERATIAAD_786198.childrenGroups = ["G_OPERATIUTN_807198","G_OPERATIAEO_858198","G_OPERATIYTE_172198","G_OPERATIMTO_363198"];
this.G_OPERATIAAD_786198.colSpan=1;
this.G_OPERATIAAD_786198.enabled=ConstantsApi.mode.All;
this.G_OPERATIAAD_786198.visible=ConstantsApi.mode.All;
this.G_OPERATIUTN_807198.id="G_OPERATIUTN_807198";
this.G_OPERATIUTN_807198.name="Group1528";
this.G_OPERATIUTN_807198.columns=4;
this.G_OPERATIUTN_807198.labelOrientation="Top";
this.G_OPERATIUTN_807198.colSpan=1;
this.G_OPERATIUTN_807198.enabled=ConstantsApi.mode.All;
this.G_OPERATIUTN_807198.visible=ConstantsApi.mode.All;
this.G_OPERATIUTN_807198.attList = ["numOperation","operationType","amount","tirFee"];
this.G_OPERATIAEO_858198.id="G_OPERATIAEO_858198";
this.G_OPERATIAEO_858198.name="Group1844";
this.G_OPERATIAEO_858198.columns=12;
this.G_OPERATIAEO_858198.labelOrientation="Top";
this.G_OPERATIAEO_858198.colSpan=1;
this.G_OPERATIAEO_858198.enabled=ConstantsApi.mode.All;
this.G_OPERATIAEO_858198.visible=ConstantsApi.mode.All;
this.G_OPERATIAEO_858198.attList = ["valueDate","interest","fee","termType","term","typeFee","firstDueDate","fixedPayementDay","paymentDay","termInterest","termCapital","extendedPaymentDate","daysGraceDefault","monthGrace","termGraceCapital","termGraceInterest","baseInterestCalculation","typeAmortization","avoidHolidays","typeGrace","graceDividend","ballonFee","randomGrace","generateInsurance","initialInterestRest","rediscountDate","solidarity","iva"];
this.G_OPERATIYTE_172198.id="G_OPERATIYTE_172198";
this.G_OPERATIYTE_172198.name="Group1319";
this.G_OPERATIYTE_172198.columns=1;
this.G_OPERATIYTE_172198.labelOrientation="Top";
this.G_OPERATIYTE_172198.colSpan=1;
this.G_OPERATIYTE_172198.enabled=ConstantsApi.mode.All;
this.G_OPERATIYTE_172198.visible=ConstantsApi.mode.All;
this.G_OPERATIYTE_172198.attList = ["dividend","expirationDate","balanceCapital","dynamicField1","dynamicField2","dynamicField3","dynamicField4","dynamicField5","dynamicField6","dynamicField7","dynamicField8","dynamicField9","dynamicField10","dynamicField11","dynamicField12","dynamicField13","dynamicField14","dynamicField15","dynamicField16","dynamicField17","dynamicField18","dynamicField19","dynamicField20","fee"];
this.G_OPERATIMTO_363198.id="G_OPERATIMTO_363198";
this.G_OPERATIMTO_363198.name="Group2565";
this.G_OPERATIMTO_363198.columns=6;
this.G_OPERATIMTO_363198.labelOrientation="Top";
this.G_OPERATIMTO_363198.colSpan=1;
this.G_OPERATIMTO_363198.enabled=ConstantsApi.mode.All;
this.G_OPERATIMTO_363198.visible=ConstantsApi.mode.All;
this.CM_TLNSPRTZ_RRO.id = "CM_TLNSPRTZ_RRO";
this.CM_TLNSPRTZ_RRO.name = "Command1";
this.CM_TLNSPRTZ_RRO.causesValidation=false;
this.CM_TLNSPRTZ_RRO.submitOnEnter=false;
this.CM_TLNSPRTZ_RRO.setFocus=false;
this.CM_TLNSPRTZ_RRO.close=false;
this.CM_TLNSPRTZ_RRO.label = cobis.translate("LNSPR.LBL_LNSPR_FINALIZAA_98850");
this.CM_TLNSPRTZ_RRO.enabled = ConstantsApi.mode.All;
this.CM_TLNSPRTZ_RRO.visible= ConstantsApi.mode.All;
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
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('0','522337203685477')],[VisualValidationTypeEnum.CompareTo,CustomValidators.controlCompare('','',CustomValidatorOperator.GREATER_THAN_OR_EQUAL)],[VisualValidationTypeEnum.Required,Validators.required]
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
this.QV_MC21_OVS27.pageSize=10;
this.QV_MC21_OVS27.id='QV_MC21_OVS27';
this.QV_MC21_OVS27.name='QV_MC21_OVS27';
this.QV_MC21_OVS27.pageable=true;
this.QV_MC21_OVS27.sortable=false;
this.QV_MC21_OVS27.resizable=true;
this.QV_MC21_OVS27.scrollable=true
this.QV_MC21_OVS27.confirmRowDeletion=true;
this.QV_MC21_OVS27.exportToExcel=false;
this.QV_MC21_OVS27.exportToPdf=false;
this.QV_MC21_OVS27.height=0;
this.QV_MC21_OVS27.filterableColumns=false;
this.QV_MC21_OVS27.entityName='OperationItemsList';
this.QV_MC21_OVS27.appendRecords=false;
this.QV_MC21_OVS27.rowDetail=false;
this.QV_MC21_OVS27.columnMenu = true;
this.QV_MC21_OVS27.editMode=CommonsConstants.GRID_EDIT_MODE_MODAL;
this.QV_MC21_OVS27.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
this.QV_MC21_OVS27.actions=[ComplexConstants.GRID_ACTION_DELETE,ComplexConstants.GRID_ACTION_CREATE,ComplexConstants.GRID_ACTION_UPDATE];
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_MC21_OVS27.columns = Util.filterByMode(this.mode, [
{
id : "VA_ITEMWXVWWWSCMKV_983587",
label : cobis.translate('LNSPR.LBL_LNSPR_RUBROFBVM_52414'),
field : 'item',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_ITEMWXVWWWSCMKV_983587',
name :'item',
withoutLabel : true,
attribute : 'item',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DESCRIPTIONRKNO_269587",
label : cobis.translate('LNSPR.LBL_LNSPR_DESCRIPIN_18186'),
field : 'description',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_DESCRIPTIONRKNO_269587',
name :'description',
withoutLabel : true,
attribute : 'description',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TYPEITEMJIPMXHQ_437587",
label : cobis.translate('LNSPR.LBL_LNSPR_TIPOLDSKB_46090'),
field : 'typeItem',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TYPEITEMJIPMXHQ_437587',
name :'typeItem',
withoutLabel : true,
attribute : 'typeItem',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_PAYMENTMETHODDD_439587",
label : cobis.translate('LNSPR.LBL_LNSPR_APAGOWSUO_22122'),
field : 'paymentMethod',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_PAYMENTMETHODDD_439587',
name :'paymentMethod',
withoutLabel : true,
attribute : 'paymentMethod',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_SIGNOPVGZZIPUAD_330587",
label : cobis.translate('LNSPR.LBL_LNSPR_SIGNODWUU_39563'),
field : 'signo',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_SIGNOPVGZZIPUAD_330587',
name :'signo',
withoutLabel : true,
attribute : 'signo',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_PRIORITYKZVVIRF_388587",
label : cobis.translate('LNSPR.LBL_LOANS_PRIORIDAA_88318'),
field : 'priority',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_PRIORITYKZVVIRF_388587',
name :'priority',
withoutLabel : true,
attribute : 'priority',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_FACTORFVQAPPLTX_853587",
label : cobis.translate('LNSPR.LBL_LNSPR_FACTORHYG_27995'),
field : 'factor',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_FACTORFVQAPPLTX_853587',
name :'factor',
withoutLabel : true,
attribute : 'factor',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('0','1000')]
]),
messagesValidations : {
valueRange: cobis.translate('LNSPR.MSG_LNSPR_VALORINTO_98795')
},
}
},
{
id : "VA_REFERENCEGBROYB_738587",
label : cobis.translate('LNSPR.LBL_LNSPR_REFERENIC_88346'),
field : 'reference',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_REFERENCEGBROYB_738587',
name :'reference',
withoutLabel : true,
attribute : 'reference',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_SIGNREADJUSTNEN_335587",
label : cobis.translate('LNSPR.LBL_LNSPR_SIGNORETA_58140'),
field : 'signReadjustment',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 125,
properties :
{
id :'VA_SIGNREADJUSTNEN_335587',
name :'signReadjustment',
withoutLabel : true,
attribute : 'signReadjustment',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_REFERENCEREANET_690587",
label : cobis.translate('LNSPR.LBL_LNSPR_REFREAJSU_20053'),
field : 'referenceReadjustment',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_REFERENCEREANET_690587',
name :'referenceReadjustment',
withoutLabel : true,
attribute : 'referenceReadjustment',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_FACTORREADJUTET_483587",
label : cobis.translate('LNSPR.LBL_LNSPR_FACTORRAJ_67007'),
field : 'factorReadjustment',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 125,
properties :
{
id :'VA_FACTORREADJUTET_483587',
name :'factorReadjustment',
withoutLabel : true,
attribute : 'factorReadjustment',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_CALCULATIONBASA_240587",
label : cobis.translate('LNSPR.LBL_LNSPR_BASECALCL_35805'),
field : 'calculationBase',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_CALCULATIONBASA_240587',
name :'calculationBase',
withoutLabel : true,
attribute : 'calculationBase',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_AMOUNTJGMPZXMXY_754587",
label : cobis.translate('LNSPR.LBL_LNSPR_VALORAOIJ_74397'),
field : 'amount',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_AMOUNTJGMPZXMXY_754587',
name :'amount',
withoutLabel : true,
attribute : 'amount',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('0','1000000')]
]),
messagesValidations : {
valueRange: cobis.translate('LNSPR.MSG_LNSPR_VALORINTO_98795')
},
}
},
{
id : "VA_PERCENTAGEJLTCZ_260587",
label : cobis.translate('LNSPR.LBL_LOANS_TASAKBVNZ_56174'),
field : 'percentage',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_PERCENTAGEJLTCZ_260587',
name :'percentage',
withoutLabel : true,
attribute : 'percentage',
entity : 'OperationItemsList',
format : '#,######0.000000',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('0','1000')]
]),
messagesValidations : {
valueRange: cobis.translate('LNSPR.MSG_LNSPR_VALORINTO_98795')
},
}
},
{
id : "VA_FINANCEDWVNAAPN_415587",
label : cobis.translate('LNSPR.LBL_LOANS_FINANCIAD_42980'),
field : 'financed',
visible : ConstantsApi.mode.All,
type : 'dropdownlist',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 75,
data$: of([]),
properties :
{
id :'VA_FINANCEDWVNAAPN_415587',
name :'financed',
attribute : 'financed',
entity : 'OperationItemsList',
withoutLabel : false,
blankOption : true,
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
id : "VA_MINRATEJNRPYQJS_276587",
label : cobis.translate('LNSPR.LBL_LNSPR_TASAMINCJ_91660'),
field : 'minRate',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 125,
properties :
{
id :'VA_MINRATEJNRPYQJS_276587',
name :'minRate',
withoutLabel : true,
attribute : 'minRate',
entity : 'OperationItemsList',
format : '#,######0.000000',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_MAXRATENSHCMIGD_796587",
label : cobis.translate('LNSPR.LBL_LNSPR_TASAMAXGS_82810'),
field : 'maxRate',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 125,
properties :
{
id :'VA_MAXRATENSHCMIGD_796587',
name :'maxRate',
withoutLabel : true,
attribute : 'maxRate',
entity : 'OperationItemsList',
format : '#,######0.000000',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXNAY_879587",
label : cobis.translate('LNSPR.LBL_LNSPR_REFASOCAA_43339'),
field : 'associate',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXNAY_879587',
name :'associate',
withoutLabel : true,
attribute : 'associate',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXXQV_567587",
label : cobis.translate('LNSPR.LBL_LNSPR_VALORREFO_81387'),
field : 'associateValue',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXXQV_567587',
name :'associateValue',
withoutLabel : true,
attribute : 'associateValue',
entity : 'OperationItemsList',
format : '#,######0.000000',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXKKV_743587",
label : cobis.translate('LNSPR.LBL_LNSPR_ASEGURADA_82404'),
field : 'insurance',
visible : ConstantsApi.mode.All,
type : 'dropdownlist',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
data$: of([]),
properties :
{
id :'VA_TEXTINPUTBOXKKV_743587',
name :'insurance',
attribute : 'insurance',
entity : 'OperationItemsList',
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
id : "VA_TEXTINPUTBOXVLP_884587",
label : cobis.translate('LNSPR.LBL_LNSPR_TIPOSEGOO_23233'),
field : 'insuranceType',
visible : ConstantsApi.mode.All,
type : 'dropdownlist',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
data$: of([]),
properties :
{
id :'VA_TEXTINPUTBOXVLP_884587',
name :'insuranceType',
attribute : 'insuranceType',
entity : 'OperationItemsList',
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
id : "VA_TEXTINPUTBOXAEM_387587",
label : cobis.translate('LNSPR.LBL_LNSPR_RANGOFPVC_28025'),
field : 'rank',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXAEM_387587',
name :'rank',
withoutLabel : true,
attribute : 'rank',
entity : 'OperationItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.VA_SPACER1990PHNZF_966587.id = "VA_SPACER1990PHNZF_966587";
this.VA_SPACER1990PHNZF_966587.name = "Spacer1990";
this.VA_SPACER1990PHNZF_966587.colSpan = 1;
this.VA_SPACER1990PHNZF_966587.visible= ConstantsApi.mode.All;
this.VA_VAVABUTTONTR__P_260587.id = "VA_VAVABUTTONTR__P_260587";
this.VA_VAVABUTTONTR__P_260587.name = "VA_VAVABUTTONTR__P_260587";
this.VA_VAVABUTTONTR__P_260587.label = cobis.translate("LNSPR.LBL_LNSPR_GUARDARRI_81055");
this.VA_VAVABUTTONTR__P_260587.colSpan = 1;
this.VA_VAVABUTTONTR__P_260587.withoutLabel = false;
this.VA_VAVABUTTONTR__P_260587.causesValidation=false;
this.VA_VAVABUTTONTR__P_260587.submitOnEnter=false;
this.VA_VAVABUTTONTR__P_260587.setFocus=false;
this.VA_VAVABUTTONTR__P_260587.enabled = ConstantsApi.mode.All;
this.VA_VAVABUTTONTR__P_260587.visible= ConstantsApi.mode.All;
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
this.VA_NUMOPERATIONRWY_828198.id = "VA_NUMOPERATIONRWY_828198";
this.VA_NUMOPERATIONRWY_828198.name = "numOperation";
this.VA_NUMOPERATIONRWY_828198.label = cobis.translate("LNSPR.LBL_LOANS_NUMOPERCA_22664");
this.VA_NUMOPERATIONRWY_828198.attribute = "numOperation";
this.VA_NUMOPERATIONRWY_828198.colSpan = 1;
this.VA_NUMOPERATIONRWY_828198.withoutLabel = false;
this.VA_NUMOPERATIONRWY_828198.enabled = ConstantsApi.mode.None;
this.VA_NUMOPERATIONRWY_828198.visible= ConstantsApi.mode.All;
this.VA_OPERATIONTYPEEE_239198.id = "VA_OPERATIONTYPEEE_239198";
this.VA_OPERATIONTYPEEE_239198.name = "operationType";
this.VA_OPERATIONTYPEEE_239198.label = cobis.translate("LNSPR.LBL_LNSPR_TIPOOPERN_51275");
this.VA_OPERATIONTYPEEE_239198.attribute = "operationType";
this.VA_OPERATIONTYPEEE_239198.colSpan = 1;
this.VA_OPERATIONTYPEEE_239198.withoutLabel = false;
this.VA_OPERATIONTYPEEE_239198.enabled = ConstantsApi.mode.None;
this.VA_OPERATIONTYPEEE_239198.visible= ConstantsApi.mode.All;
this.VA_AMOUNTEWSEJLOSB_545198.id = "VA_AMOUNTEWSEJLOSB_545198";
this.VA_AMOUNTEWSEJLOSB_545198.name = "amount";
this.VA_AMOUNTEWSEJLOSB_545198.label = cobis.translate("LNSPR.LBL_LOANS_MONTOPEGS_72415");
this.VA_AMOUNTEWSEJLOSB_545198.attribute = "amount";
this.VA_AMOUNTEWSEJLOSB_545198.colSpan = 1;
this.VA_AMOUNTEWSEJLOSB_545198.withoutLabel = false;
this.VA_AMOUNTEWSEJLOSB_545198.enabled = ConstantsApi.mode.All;
this.VA_AMOUNTEWSEJLOSB_545198.visible= ConstantsApi.mode.All;
this.VA_TIRFEEYVRGJBTQS_146198.id = "VA_TIRFEEYVRGJBTQS_146198";
this.VA_TIRFEEYVRGJBTQS_146198.name = "tirFee";
this.VA_TIRFEEYVRGJBTQS_146198.label = cobis.translate("LNSPR.LBL_LNSPR_TIRJAFJMF_82035");
this.VA_TIRFEEYVRGJBTQS_146198.attribute = "tirFee";
this.VA_TIRFEEYVRGJBTQS_146198.colSpan = 1;
this.VA_TIRFEEYVRGJBTQS_146198.withoutLabel = false;
this.VA_TIRFEEYVRGJBTQS_146198.enabled = ConstantsApi.mode.All;
this.VA_TIRFEEYVRGJBTQS_146198.visible= ConstantsApi.mode.All;
this.VA_VALUEDATEKMJLVF_161198.label = cobis.translate("LNSPR.LBL_LNSPR_FECHAVALR_40841");
this.VA_VALUEDATEKMJLVF_161198.entity = "AmortizationFormEntity";
this.VA_VALUEDATEKMJLVF_161198.attribute = "valueDate";
this.VA_VALUEDATEKMJLVF_161198.name="valueDate";
this.VA_VALUEDATEKMJLVF_161198.id="VA_VALUEDATEKMJLVF_161198";
this.VA_VALUEDATEKMJLVF_161198.colSpan=2;
this.VA_VALUEDATEKMJLVF_161198.withoutLabel = false;
this.VA_VALUEDATEKMJLVF_161198.readOnly = ConstantsApi.mode.Query;
this.VA_VALUEDATEKMJLVF_161198.enabled = ConstantsApi.mode.All;
this.VA_VALUEDATEKMJLVF_161198.visible= ConstantsApi.mode.All;
this.VA_INTERESTBRXDBGI_239198.label = cobis.translate("LNSPR.LBL_LNSPR_TASATOTAA_19550");
this.VA_INTERESTBRXDBGI_239198.entity = "AmortizationFormEntity";
this.VA_INTERESTBRXDBGI_239198.attribute = "interest";
this.VA_INTERESTBRXDBGI_239198.textCase= TextCaseOptions.NONE;
this.VA_INTERESTBRXDBGI_239198.format= "#.00###";
this.VA_INTERESTBRXDBGI_239198.name="interest";
this.VA_INTERESTBRXDBGI_239198.id="VA_INTERESTBRXDBGI_239198";
this.VA_INTERESTBRXDBGI_239198.colSpan=2;
this.VA_INTERESTBRXDBGI_239198.withoutLabel = false;
this.VA_INTERESTBRXDBGI_239198.readOnly = ConstantsApi.mode.None;
this.VA_INTERESTBRXDBGI_239198.enabled = ConstantsApi.mode.None;
this.VA_INTERESTBRXDBGI_239198.visible= ConstantsApi.mode.All;
this.VA_FEEOFWVFIUKFNPP_635198.label = cobis.translate("LNSPR.LBL_LOANS_CUOTAQUGL_10106");
this.VA_FEEOFWVFIUKFNPP_635198.entity = "AmortizationFormEntity";
this.VA_FEEOFWVFIUKFNPP_635198.attribute = "fee";
this.VA_FEEOFWVFIUKFNPP_635198.textCase= TextCaseOptions.NONE;
this.VA_FEEOFWVFIUKFNPP_635198.isCustomValidated=true;
this.VA_FEEOFWVFIUKFNPP_635198.format= "c";
this.VA_FEEOFWVFIUKFNPP_635198.name="fee";
this.VA_FEEOFWVFIUKFNPP_635198.id="VA_FEEOFWVFIUKFNPP_635198";
this.VA_FEEOFWVFIUKFNPP_635198.colSpan=3;
this.VA_FEEOFWVFIUKFNPP_635198.withoutLabel = false;
this.VA_FEEOFWVFIUKFNPP_635198.readOnly = ConstantsApi.mode.Query;
this.VA_FEEOFWVFIUKFNPP_635198.enabled = ConstantsApi.mode.All;
this.VA_FEEOFWVFIUKFNPP_635198.visible= ConstantsApi.mode.All;
this.VA_TERMTYPEOWIDGEH_595198.label = cobis.translate("LNSPR.LBL_LNSPR_TIPOPLAOZ_41477");
this.VA_TERMTYPEOWIDGEH_595198.blankOption=true;
this.VA_TERMTYPEOWIDGEH_595198.placeHolderLabel = cobis.translate("LNSPR.LBL_LNSPR_SELECCIOI_13820");
this.VA_TERMTYPEOWIDGEH_595198.entity = "AmortizationFormEntity";
this.VA_TERMTYPEOWIDGEH_595198.attribute = "termType";
this.VA_TERMTYPEOWIDGEH_595198.textField = "value";
this.VA_TERMTYPEOWIDGEH_595198.valueField = "code";
this.VA_TERMTYPEOWIDGEH_595198.showId= true;
this.VA_TERMTYPEOWIDGEH_595198.name="termType";
this.VA_TERMTYPEOWIDGEH_595198.id="VA_TERMTYPEOWIDGEH_595198";
this.VA_TERMTYPEOWIDGEH_595198.colSpan=3;
this.VA_TERMTYPEOWIDGEH_595198.withoutLabel = false;
this.VA_TERMTYPEOWIDGEH_595198.readOnly = ConstantsApi.mode.Query;
this.VA_TERMTYPEOWIDGEH_595198.enabled = ConstantsApi.mode.All;
this.VA_TERMTYPEOWIDGEH_595198.visible= ConstantsApi.mode.All;
this.VA_TERMMUMJBESVPSA_498198.label = cobis.translate("LNSPR.LBL_LNSPR_PLAZOYJVK_49555");
this.VA_TERMMUMJBESVPSA_498198.entity = "AmortizationFormEntity";
this.VA_TERMMUMJBESVPSA_498198.attribute = "term";
this.VA_TERMMUMJBESVPSA_498198.maxlength= 5;
this.VA_TERMMUMJBESVPSA_498198.textCase= TextCaseOptions.NONE;
this.VA_TERMMUMJBESVPSA_498198.format= "n0";
this.VA_TERMMUMJBESVPSA_498198.name="term";
this.VA_TERMMUMJBESVPSA_498198.id="VA_TERMMUMJBESVPSA_498198";
this.VA_TERMMUMJBESVPSA_498198.colSpan=2;
this.VA_TERMMUMJBESVPSA_498198.withoutLabel = false;
this.VA_TERMMUMJBESVPSA_498198.readOnly = ConstantsApi.mode.Query;
this.VA_TERMMUMJBESVPSA_498198.enabled = ConstantsApi.mode.All;
this.VA_TERMMUMJBESVPSA_498198.visible= ConstantsApi.mode.All;
this.VA_TYPEFEEARBRJCKA_414198.label = cobis.translate("LNSPR.LBL_LOANS_TIPOCUOTT_42607");
this.VA_TYPEFEEARBRJCKA_414198.blankOption=true;
this.VA_TYPEFEEARBRJCKA_414198.placeHolderLabel = cobis.translate("LNSPR.LBL_LNSPR_SELECCIOI_13820");
this.VA_TYPEFEEARBRJCKA_414198.entity = "AmortizationFormEntity";
this.VA_TYPEFEEARBRJCKA_414198.attribute = "typeFee";
this.VA_TYPEFEEARBRJCKA_414198.textField = "value";
this.VA_TYPEFEEARBRJCKA_414198.valueField = "code";
this.VA_TYPEFEEARBRJCKA_414198.showId= true;
this.VA_TYPEFEEARBRJCKA_414198.name="typeFee";
this.VA_TYPEFEEARBRJCKA_414198.id="VA_TYPEFEEARBRJCKA_414198";
this.VA_TYPEFEEARBRJCKA_414198.colSpan=4;
this.VA_TYPEFEEARBRJCKA_414198.withoutLabel = false;
this.VA_TYPEFEEARBRJCKA_414198.readOnly = ConstantsApi.mode.Query;
this.VA_TYPEFEEARBRJCKA_414198.enabled = ConstantsApi.mode.All;
this.VA_TYPEFEEARBRJCKA_414198.visible= ConstantsApi.mode.All;
this.VA_FIRSTDUEDATEACN_138198.label = cobis.translate("LNSPR.LBL_LNSPR_FECHA1ENI_10027");
this.VA_FIRSTDUEDATEACN_138198.entity = "AmortizationFormEntity";
this.VA_FIRSTDUEDATEACN_138198.attribute = "firstDueDate";
this.VA_FIRSTDUEDATEACN_138198.name="firstDueDate";
this.VA_FIRSTDUEDATEACN_138198.id="VA_FIRSTDUEDATEACN_138198";
this.VA_FIRSTDUEDATEACN_138198.colSpan=3;
this.VA_FIRSTDUEDATEACN_138198.withoutLabel = false;
this.VA_FIRSTDUEDATEACN_138198.readOnly = ConstantsApi.mode.Query;
this.VA_FIRSTDUEDATEACN_138198.enabled = ConstantsApi.mode.All;
this.VA_FIRSTDUEDATEACN_138198.visible= ConstantsApi.mode.All;
this.VA_FIXEDPAYEMENYTY_637198.id = "VA_FIXEDPAYEMENYTY_637198";
this.VA_FIXEDPAYEMENYTY_637198.name = "fixedPayementDay";
this.VA_FIXEDPAYEMENYTY_637198.label = cobis.translate("LNSPR.LBL_LOANS_FECHAPAGJ_50615");
this.VA_FIXEDPAYEMENYTY_637198.entity = "AmortizationFormEntity";
this.VA_FIXEDPAYEMENYTY_637198.attribute = "fixedPayementDay";
this.VA_FIXEDPAYEMENYTY_637198.colSpan = 3;
this.VA_FIXEDPAYEMENYTY_637198.withoutLabel = false;
this.VA_FIXEDPAYEMENYTY_637198.readOnly =ConstantsApi.mode.Query;
this.VA_FIXEDPAYEMENYTY_637198.enabled = ConstantsApi.mode.All;
this.VA_FIXEDPAYEMENYTY_637198.visible= ConstantsApi.mode.All;
this.VA_PAYMENTDAYEFRJN_549198.label = cobis.translate("LNSPR.LBL_LOANS_DAPAGOUDL_21888");
this.VA_PAYMENTDAYEFRJN_549198.blankOption=true;
this.VA_PAYMENTDAYEFRJN_549198.placeHolderLabel = cobis.translate("LNSPR.LBL_LNSPR_SELECCIOI_13820");
this.VA_PAYMENTDAYEFRJN_549198.entity = "AmortizationFormEntity";
this.VA_PAYMENTDAYEFRJN_549198.attribute = "paymentDay";
this.VA_PAYMENTDAYEFRJN_549198.textField = "value";
this.VA_PAYMENTDAYEFRJN_549198.valueField = "code";
this.VA_PAYMENTDAYEFRJN_549198.name="paymentDay";
this.VA_PAYMENTDAYEFRJN_549198.id="VA_PAYMENTDAYEFRJN_549198";
this.VA_PAYMENTDAYEFRJN_549198.colSpan=2;
this.VA_PAYMENTDAYEFRJN_549198.withoutLabel = false;
this.VA_PAYMENTDAYEFRJN_549198.readOnly = ConstantsApi.mode.Query;
this.VA_PAYMENTDAYEFRJN_549198.enabled = ConstantsApi.mode.All;
this.VA_PAYMENTDAYEFRJN_549198.visible= ConstantsApi.mode.All;
this.VA_TERMINTERESTGWH_345198.label = cobis.translate("LNSPR.LBL_LOANS_PINTLRXZD_97383");
this.VA_TERMINTERESTGWH_345198.entity = "AmortizationFormEntity";
this.VA_TERMINTERESTGWH_345198.attribute = "termInterest";
this.VA_TERMINTERESTGWH_345198.textCase= TextCaseOptions.NONE;
this.VA_TERMINTERESTGWH_345198.format= "n0";
this.VA_TERMINTERESTGWH_345198.name="termInterest";
this.VA_TERMINTERESTGWH_345198.id="VA_TERMINTERESTGWH_345198";
this.VA_TERMINTERESTGWH_345198.colSpan=2;
this.VA_TERMINTERESTGWH_345198.withoutLabel = false;
this.VA_TERMINTERESTGWH_345198.readOnly = ConstantsApi.mode.Query;
this.VA_TERMINTERESTGWH_345198.enabled = ConstantsApi.mode.All;
this.VA_TERMINTERESTGWH_345198.visible= ConstantsApi.mode.All;
this.VA_TERMCAPITALLSSH_857198.label = cobis.translate("LNSPR.LBL_LOANS_PCAPMXIYV_12380");
this.VA_TERMCAPITALLSSH_857198.entity = "AmortizationFormEntity";
this.VA_TERMCAPITALLSSH_857198.attribute = "termCapital";
this.VA_TERMCAPITALLSSH_857198.textCase= TextCaseOptions.NONE;
this.VA_TERMCAPITALLSSH_857198.format= "n0";
this.VA_TERMCAPITALLSSH_857198.name="termCapital";
this.VA_TERMCAPITALLSSH_857198.id="VA_TERMCAPITALLSSH_857198";
this.VA_TERMCAPITALLSSH_857198.colSpan=2;
this.VA_TERMCAPITALLSSH_857198.withoutLabel = false;
this.VA_TERMCAPITALLSSH_857198.readOnly = ConstantsApi.mode.Query;
this.VA_TERMCAPITALLSSH_857198.enabled = ConstantsApi.mode.All;
this.VA_TERMCAPITALLSSH_857198.visible= ConstantsApi.mode.All;
this.VA_EXTENDEDPAYMEDA_710198.label = cobis.translate("LNSPR.LBL_LOANS_FECHAPADE_78424");
this.VA_EXTENDEDPAYMEDA_710198.entity = "AmortizationFormEntity";
this.VA_EXTENDEDPAYMEDA_710198.attribute = "extendedPaymentDate";
this.VA_EXTENDEDPAYMEDA_710198.name="extendedPaymentDate";
this.VA_EXTENDEDPAYMEDA_710198.id="VA_EXTENDEDPAYMEDA_710198";
this.VA_EXTENDEDPAYMEDA_710198.colSpan=3;
this.VA_EXTENDEDPAYMEDA_710198.withoutLabel = false;
this.VA_EXTENDEDPAYMEDA_710198.readOnly = ConstantsApi.mode.Query;
this.VA_EXTENDEDPAYMEDA_710198.enabled = ConstantsApi.mode.All;
this.VA_EXTENDEDPAYMEDA_710198.visible= ConstantsApi.mode.All;
this.VA_DAYSGRACEDEFUUU_853198.label = cobis.translate("LNSPR.LBL_LOANS_DASGRACAM_55117");
this.VA_DAYSGRACEDEFUUU_853198.entity = "AmortizationFormEntity";
this.VA_DAYSGRACEDEFUUU_853198.attribute = "daysGraceDefault";
this.VA_DAYSGRACEDEFUUU_853198.maxlength= 4;
this.VA_DAYSGRACEDEFUUU_853198.textCase= TextCaseOptions.NONE;
this.VA_DAYSGRACEDEFUUU_853198.format= "####";
this.VA_DAYSGRACEDEFUUU_853198.name="daysGraceDefault";
this.VA_DAYSGRACEDEFUUU_853198.id="VA_DAYSGRACEDEFUUU_853198";
this.VA_DAYSGRACEDEFUUU_853198.colSpan=2;
this.VA_DAYSGRACEDEFUUU_853198.withoutLabel = false;
this.VA_DAYSGRACEDEFUUU_853198.readOnly = ConstantsApi.mode.Query;
this.VA_DAYSGRACEDEFUUU_853198.enabled = ConstantsApi.mode.All;
this.VA_DAYSGRACEDEFUUU_853198.visible= ConstantsApi.mode.All;
this.Spacer2905.id = "Spacer2905";
this.Spacer2905.name = "Spacer2905";
this.Spacer2905.colSpan = 1;
this.Spacer2905.visible= ConstantsApi.mode.All;
this.VA_MONTHGRACEFIJFA_429198.label = cobis.translate("LNSPR.LBL_LOANS_MESGRACII_45853");
this.VA_MONTHGRACEFIJFA_429198.entity = "AmortizationFormEntity";
this.VA_MONTHGRACEFIJFA_429198.attribute = "monthGrace";
this.VA_MONTHGRACEFIJFA_429198.textField = "value";
this.VA_MONTHGRACEFIJFA_429198.valueField = "code";
this.VA_MONTHGRACEFIJFA_429198.name="monthGrace";
this.VA_MONTHGRACEFIJFA_429198.id="VA_MONTHGRACEFIJFA_429198";
this.VA_MONTHGRACEFIJFA_429198.colSpan=2;
this.VA_MONTHGRACEFIJFA_429198.withoutLabel = false;
this.VA_MONTHGRACEFIJFA_429198.readOnly = ConstantsApi.mode.Query;
this.VA_MONTHGRACEFIJFA_429198.enabled = ConstantsApi.mode.All;
this.VA_MONTHGRACEFIJFA_429198.visible= ConstantsApi.mode.All;
this.VA_TERMGRACECAPTAT_881198.label = cobis.translate("LNSPR.LBL_LOANS_PERGRACIA_37297");
this.VA_TERMGRACECAPTAT_881198.entity = "AmortizationFormEntity";
this.VA_TERMGRACECAPTAT_881198.attribute = "termGraceCapital";
this.VA_TERMGRACECAPTAT_881198.maxlength= 3;
this.VA_TERMGRACECAPTAT_881198.textCase= TextCaseOptions.NONE;
this.VA_TERMGRACECAPTAT_881198.format= "###";
this.VA_TERMGRACECAPTAT_881198.name="termGraceCapital";
this.VA_TERMGRACECAPTAT_881198.id="VA_TERMGRACECAPTAT_881198";
this.VA_TERMGRACECAPTAT_881198.colSpan=2;
this.VA_TERMGRACECAPTAT_881198.withoutLabel = false;
this.VA_TERMGRACECAPTAT_881198.readOnly = ConstantsApi.mode.Query;
this.VA_TERMGRACECAPTAT_881198.enabled = ConstantsApi.mode.All;
this.VA_TERMGRACECAPTAT_881198.visible= ConstantsApi.mode.All;
this.VA_TERMGRACEINTTET_849198.label = cobis.translate("LNSPR.LBL_LOANS_PERGRACIS_30530");
this.VA_TERMGRACEINTTET_849198.entity = "AmortizationFormEntity";
this.VA_TERMGRACEINTTET_849198.attribute = "termGraceInterest";
this.VA_TERMGRACEINTTET_849198.maxlength= 3;
this.VA_TERMGRACEINTTET_849198.textCase= TextCaseOptions.NONE;
this.VA_TERMGRACEINTTET_849198.format= "###";
this.VA_TERMGRACEINTTET_849198.name="termGraceInterest";
this.VA_TERMGRACEINTTET_849198.id="VA_TERMGRACEINTTET_849198";
this.VA_TERMGRACEINTTET_849198.colSpan=2;
this.VA_TERMGRACEINTTET_849198.withoutLabel = false;
this.VA_TERMGRACEINTTET_849198.readOnly = ConstantsApi.mode.Query;
this.VA_TERMGRACEINTTET_849198.enabled = ConstantsApi.mode.All;
this.VA_TERMGRACEINTTET_849198.visible= ConstantsApi.mode.All;
this.VA_BASEINTERESTAAC_534198.id = "VA_BASEINTERESTAAC_534198";
this.VA_BASEINTERESTAAC_534198.name = "baseInterestCalculation";
this.VA_BASEINTERESTAAC_534198.attribute = "baseInterestCalculation";
this.VA_BASEINTERESTAAC_534198.label = cobis.translate("LNSPR.LBL_LOANS_BASECLCOO_88666");
this.VA_BASEINTERESTAAC_534198.colSpan = 4;
this.VA_BASEINTERESTAAC_534198.withoutLabel = false;
this.VA_BASEINTERESTAAC_534198.readOnly = ConstantsApi.mode.Query;
this.VA_BASEINTERESTAAC_534198.entity = "AmortizationFormEntity";
this.VA_BASEINTERESTAAC_534198.enabled = ConstantsApi.mode.All;
this.VA_BASEINTERESTAAC_534198.visible= ConstantsApi.mode.All;
this.VA_BASEINTERESTAAC_534198.textField = "value";
this.VA_BASEINTERESTAAC_534198.valueField = "code";
this.VA_TYPEAMORTIZATTN_681198.id = "VA_TYPEAMORTIZATTN_681198";
this.VA_TYPEAMORTIZATTN_681198.name = "typeAmortization";
this.VA_TYPEAMORTIZATTN_681198.attribute = "typeAmortization";
this.VA_TYPEAMORTIZATTN_681198.label = cobis.translate("LNSPR.LBL_LNSPR_TIPOAMOCN_60024");
this.VA_TYPEAMORTIZATTN_681198.colSpan = 4;
this.VA_TYPEAMORTIZATTN_681198.withoutLabel = false;
this.VA_TYPEAMORTIZATTN_681198.readOnly = ConstantsApi.mode.Query;
this.VA_TYPEAMORTIZATTN_681198.entity = "AmortizationFormEntity";
this.VA_TYPEAMORTIZATTN_681198.enabled = ConstantsApi.mode.All;
this.VA_TYPEAMORTIZATTN_681198.visible= ConstantsApi.mode.All;
this.VA_TYPEAMORTIZATTN_681198.textField = "value";
this.VA_TYPEAMORTIZATTN_681198.valueField = "code";
this.VA_AVOIDHOLIDAYSSS_789198.id = "VA_AVOIDHOLIDAYSSS_789198";
this.VA_AVOIDHOLIDAYSSS_789198.name = "avoidHolidays";
this.VA_AVOIDHOLIDAYSSS_789198.attribute = "avoidHolidays";
this.VA_AVOIDHOLIDAYSSS_789198.label = cobis.translate("LNSPR.LBL_LNSPR_EVITARDAR_30713");
this.VA_AVOIDHOLIDAYSSS_789198.colSpan = 3;
this.VA_AVOIDHOLIDAYSSS_789198.withoutLabel = false;
this.VA_AVOIDHOLIDAYSSS_789198.readOnly = ConstantsApi.mode.Query;
this.VA_AVOIDHOLIDAYSSS_789198.entity = "AmortizationFormEntity";
this.VA_AVOIDHOLIDAYSSS_789198.enabled = ConstantsApi.mode.All;
this.VA_AVOIDHOLIDAYSSS_789198.visible= ConstantsApi.mode.All;
this.VA_AVOIDHOLIDAYSSS_789198.textField = "value";
this.VA_AVOIDHOLIDAYSSS_789198.valueField = "code";
this.VA_TYPEGRACEBHAAVJ_350198.id = "VA_TYPEGRACEBHAAVJ_350198";
this.VA_TYPEGRACEBHAAVJ_350198.name = "typeGrace";
this.VA_TYPEGRACEBHAAVJ_350198.attribute = "typeGrace";
this.VA_TYPEGRACEBHAAVJ_350198.label = cobis.translate("LNSPR.LBL_LNSPR_ACOBROGRR_70469");
this.VA_TYPEGRACEBHAAVJ_350198.colSpan = 3;
this.VA_TYPEGRACEBHAAVJ_350198.withoutLabel = false;
this.VA_TYPEGRACEBHAAVJ_350198.readOnly = ConstantsApi.mode.Query;
this.VA_TYPEGRACEBHAAVJ_350198.entity = "AmortizationFormEntity";
this.VA_TYPEGRACEBHAAVJ_350198.enabled = ConstantsApi.mode.All;
this.VA_TYPEGRACEBHAAVJ_350198.visible= ConstantsApi.mode.All;
this.VA_TYPEGRACEBHAAVJ_350198.textField = "value";
this.VA_TYPEGRACEBHAAVJ_350198.valueField = "code";
this.VA_9468GILHMJRMZIF_745198.label = cobis.translate("LNSPR.LBL_LNSPR_NUMDIVARD_99309");
this.VA_9468GILHMJRMZIF_745198.entity = "AmortizationFormEntity";
this.VA_9468GILHMJRMZIF_745198.attribute = "graceDividend";
this.VA_9468GILHMJRMZIF_745198.maxlength= 5;
this.VA_9468GILHMJRMZIF_745198.textCase= TextCaseOptions.NONE;
this.VA_9468GILHMJRMZIF_745198.format= "n0";
this.VA_9468GILHMJRMZIF_745198.name="graceDividend";
this.VA_9468GILHMJRMZIF_745198.id="VA_9468GILHMJRMZIF_745198";
this.VA_9468GILHMJRMZIF_745198.colSpan=2;
this.VA_9468GILHMJRMZIF_745198.withoutLabel = false;
this.VA_9468GILHMJRMZIF_745198.readOnly = ConstantsApi.mode.Query;
this.VA_9468GILHMJRMZIF_745198.enabled = ConstantsApi.mode.All;
this.VA_9468GILHMJRMZIF_745198.visible= ConstantsApi.mode.All;
this.VA_BALLONFEEWWRPRY_949198.id = "VA_BALLONFEEWWRPRY_949198";
this.VA_BALLONFEEWWRPRY_949198.name = "ballonFee";
this.VA_BALLONFEEWWRPRY_949198.label = cobis.translate("LNSPR.LBL_LNSPR_CUOTABAON_17343");
this.VA_BALLONFEEWWRPRY_949198.entity = "AmortizationFormEntity";
this.VA_BALLONFEEWWRPRY_949198.attribute = "ballonFee";
this.VA_BALLONFEEWWRPRY_949198.colSpan = 3;
this.VA_BALLONFEEWWRPRY_949198.withoutLabel = false;
this.VA_BALLONFEEWWRPRY_949198.readOnly =ConstantsApi.mode.Query;
this.VA_BALLONFEEWWRPRY_949198.enabled = ConstantsApi.mode.All;
this.VA_BALLONFEEWWRPRY_949198.visible= ConstantsApi.mode.All;
this.VA_BALLONFEEWWRPRY_949198.trueValue ="S";
this.VA_BALLONFEEWWRPRY_949198.falseValue ="N";
this.VA_RANDOMGRACEYJOS_359198.entity = "AmortizationFormEntity";
this.VA_RANDOMGRACEYJOS_359198.attribute = "randomGrace";
this.VA_RANDOMGRACEYJOS_359198.textCase= TextCaseOptions.NONE;
this.VA_RANDOMGRACEYJOS_359198.name="randomGrace";
this.VA_RANDOMGRACEYJOS_359198.id="VA_RANDOMGRACEYJOS_359198";
this.VA_RANDOMGRACEYJOS_359198.colSpan=1;
this.VA_RANDOMGRACEYJOS_359198.withoutLabel = false;
this.VA_RANDOMGRACEYJOS_359198.readOnly = ConstantsApi.mode.Query;
this.VA_RANDOMGRACEYJOS_359198.enabled = ConstantsApi.mode.All;
this.VA_RANDOMGRACEYJOS_359198.visible= ConstantsApi.mode.None;
this.VA_GENERATEINSUENC_694198.id = "VA_GENERATEINSUENC_694198";
this.VA_GENERATEINSUENC_694198.name = "generateInsurance";
this.VA_GENERATEINSUENC_694198.label = cobis.translate("LNSPR.LBL_LOANS_GENERARSE_14617");
this.VA_GENERATEINSUENC_694198.entity = "AmortizationFormEntity";
this.VA_GENERATEINSUENC_694198.attribute = "generateInsurance";
this.VA_GENERATEINSUENC_694198.colSpan = 2;
this.VA_GENERATEINSUENC_694198.withoutLabel = true;
this.VA_GENERATEINSUENC_694198.readOnly =ConstantsApi.mode.Query;
this.VA_GENERATEINSUENC_694198.enabled = ConstantsApi.mode.None;
this.VA_GENERATEINSUENC_694198.visible= ConstantsApi.mode.None;
this.VA_INITIALINTERTSE_643198.label = cobis.translate("LNSPR.LBL_LOANS_CUOTAINTL_31668");
this.VA_INITIALINTERTSE_643198.entity = "AmortizationFormEntity";
this.VA_INITIALINTERTSE_643198.attribute = "initialInterestRest";
this.VA_INITIALINTERTSE_643198.textCase= TextCaseOptions.NONE;
this.VA_INITIALINTERTSE_643198.format= "#.00###";
this.VA_INITIALINTERTSE_643198.name="initialInterestRest";
this.VA_INITIALINTERTSE_643198.id="VA_INITIALINTERTSE_643198";
this.VA_INITIALINTERTSE_643198.colSpan=2;
this.VA_INITIALINTERTSE_643198.withoutLabel = false;
this.VA_INITIALINTERTSE_643198.readOnly = ConstantsApi.mode.Query;
this.VA_INITIALINTERTSE_643198.enabled = ConstantsApi.mode.None;
this.VA_INITIALINTERTSE_643198.visible= ConstantsApi.mode.None;
this.VA_REDISCOUNTDAEET_581198.label = cobis.translate("LNSPR.LBL_LOANS_FECHARENO_30734");
this.VA_REDISCOUNTDAEET_581198.entity = "AmortizationFormEntity";
this.VA_REDISCOUNTDAEET_581198.attribute = "rediscountDate";
this.VA_REDISCOUNTDAEET_581198.textCase= TextCaseOptions.NONE;
this.VA_REDISCOUNTDAEET_581198.name="rediscountDate";
this.VA_REDISCOUNTDAEET_581198.id="VA_REDISCOUNTDAEET_581198";
this.VA_REDISCOUNTDAEET_581198.colSpan=2;
this.VA_REDISCOUNTDAEET_581198.withoutLabel = false;
this.VA_REDISCOUNTDAEET_581198.readOnly = ConstantsApi.mode.Query;
this.VA_REDISCOUNTDAEET_581198.enabled = ConstantsApi.mode.None;
this.VA_REDISCOUNTDAEET_581198.visible= ConstantsApi.mode.None;
this.VA_SOLIDARITYTOGWR_286198.id = "VA_SOLIDARITYTOGWR_286198";
this.VA_SOLIDARITYTOGWR_286198.name = "solidarity";
this.VA_SOLIDARITYTOGWR_286198.label = cobis.translate("LNSPR.LBL_LOANS_PAGOLEYID_82535");
this.VA_SOLIDARITYTOGWR_286198.entity = "AmortizationFormEntity";
this.VA_SOLIDARITYTOGWR_286198.attribute = "solidarity";
this.VA_SOLIDARITYTOGWR_286198.colSpan = 2;
this.VA_SOLIDARITYTOGWR_286198.withoutLabel = false;
this.VA_SOLIDARITYTOGWR_286198.readOnly =ConstantsApi.mode.Query;
this.VA_SOLIDARITYTOGWR_286198.enabled = ConstantsApi.mode.None;
this.VA_SOLIDARITYTOGWR_286198.visible= ConstantsApi.mode.None;
this.VA_IVASDFHAPWJFULF_560198.label = cobis.translate("LNSPR.LBL_LNSPR_TASAIVAAE_29597");
this.VA_IVASDFHAPWJFULF_560198.entity = "AmortizationFormEntity";
this.VA_IVASDFHAPWJFULF_560198.attribute = "iva";
this.VA_IVASDFHAPWJFULF_560198.textCase= TextCaseOptions.NONE;
this.VA_IVASDFHAPWJFULF_560198.format= "n";
this.VA_IVASDFHAPWJFULF_560198.name="iva";
this.VA_IVASDFHAPWJFULF_560198.id="VA_IVASDFHAPWJFULF_560198";
this.VA_IVASDFHAPWJFULF_560198.colSpan=2;
this.VA_IVASDFHAPWJFULF_560198.withoutLabel = false;
this.VA_IVASDFHAPWJFULF_560198.readOnly = ConstantsApi.mode.Query;
this.VA_IVASDFHAPWJFULF_560198.enabled = ConstantsApi.mode.All;
this.VA_IVASDFHAPWJFULF_560198.visible= ConstantsApi.mode.None;
this.Spacer2387.id = "Spacer2387";
this.Spacer2387.name = "Spacer2387";
this.Spacer2387.colSpan = 1;
this.Spacer2387.visible= ConstantsApi.mode.All;
this.QV_ECPR_JAA30.pageSize=13;
this.QV_ECPR_JAA30.id='QV_ECPR_JAA30';
this.QV_ECPR_JAA30.name='QV_ECPR_JAA30';
this.QV_ECPR_JAA30.pageable=true;
this.QV_ECPR_JAA30.sortable=false;
this.QV_ECPR_JAA30.resizable=true;
this.QV_ECPR_JAA30.scrollable=true
this.QV_ECPR_JAA30.confirmRowDeletion=false;
this.QV_ECPR_JAA30.exportToExcel=true;
this.QV_ECPR_JAA30.exportToPdf=false;
this.QV_ECPR_JAA30.height=0;
this.QV_ECPR_JAA30.filterableColumns=false;
this.QV_ECPR_JAA30.entityName='AmortizationEntity';
this.QV_ECPR_JAA30.appendRecords=false;
this.QV_ECPR_JAA30.rowDetail=false;
this.QV_ECPR_JAA30.columnMenu = true;
this.QV_ECPR_JAA30.editMode=CommonsConstants.GRID_EDIT_MODE_INLINE;
this.QV_ECPR_JAA30.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
this.QV_ECPR_JAA30.actions=[ComplexConstants.GRID_ACTION_DELETE,ComplexConstants.GRID_ACTION_UPDATE];
//GridCommands:
this.QV_ECPR_JAA30.commandsButton=[
{
id : 'CEQV_201QV_ECPR_JAA30_396',
image:'',
label: cobis.translate('LNSPR.LBL_LOANS_NUEVOPCDH_48132'),
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
this.QV_ECPR_JAA30.columns = Util.filterByMode(this.mode, [
{
id : "VA_DIVIDENDJQEBXYL_179198",
label : cobis.translate('LNSPR.LBL_LOANS_DIVIDENOO_68814'),
field : 'dividend',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 125,
properties :
{
id :'VA_DIVIDENDJQEBXYL_179198',
name :'dividend',
withoutLabel : true,
attribute : 'dividend',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_EXPIRATIONDATTE_941198",
label : cobis.translate('LNSPR.LBL_LOANS_VENCIMINO_55304'),
field : 'expirationDate',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties : {
id :'VA_EXPIRATIONDATTE_941198',
name :'expirationDate',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'expirationDate',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'AmortizationEntity',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
required : true,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]),
messagesValidations : {
required: cobis.translate('LNSPR.MSG_LOANS_ESTECAMAE_46076')
},
}
},
{
id : "VA_BALANCECAPITLLL_258198",
label : cobis.translate('LNSPR.LBL_LOANS_SALDOCAPP_21556'),
field : 'balanceCapital',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_BALANCECAPITLLL_258198',
name :'balanceCapital',
withoutLabel : true,
attribute : 'balanceCapital',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD111_201198",
field : 'dynamicField1',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_DYNAMICFIELD111_201198',
name :'dynamicField1',
withoutLabel : true,
attribute : 'dynamicField1',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
required : true,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]),
messagesValidations : {
required: cobis.translate('LNSPR.MSG_LOANS_ESTECAMAE_46076')
},
}
},
{
id : "VA_DYNAMICFIELD222_976198",
field : 'dynamicField2',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_DYNAMICFIELD222_976198',
name :'dynamicField2',
withoutLabel : true,
attribute : 'dynamicField2',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD333_680198",
field : 'dynamicField3',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_DYNAMICFIELD333_680198',
name :'dynamicField3',
withoutLabel : true,
attribute : 'dynamicField3',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD444_619198",
field : 'dynamicField4',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_DYNAMICFIELD444_619198',
name :'dynamicField4',
withoutLabel : true,
attribute : 'dynamicField4',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD555_803198",
field : 'dynamicField5',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_DYNAMICFIELD555_803198',
name :'dynamicField5',
withoutLabel : true,
attribute : 'dynamicField5',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD666_861198",
field : 'dynamicField6',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_DYNAMICFIELD666_861198',
name :'dynamicField6',
withoutLabel : true,
attribute : 'dynamicField6',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD777_256198",
field : 'dynamicField7',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_DYNAMICFIELD777_256198',
name :'dynamicField7',
withoutLabel : true,
attribute : 'dynamicField7',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD888_910198",
field : 'dynamicField8',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_DYNAMICFIELD888_910198',
name :'dynamicField8',
withoutLabel : true,
attribute : 'dynamicField8',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD999_904198",
field : 'dynamicField9',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_DYNAMICFIELD999_904198',
name :'dynamicField9',
withoutLabel : true,
attribute : 'dynamicField9',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD011_387198",
field : 'dynamicField10',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_DYNAMICFIELD011_387198',
name :'dynamicField10',
withoutLabel : true,
attribute : 'dynamicField10',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD111_909198",
field : 'dynamicField11',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_DYNAMICFIELD111_909198',
name :'dynamicField11',
withoutLabel : true,
attribute : 'dynamicField11',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD121_508198",
field : 'dynamicField12',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_DYNAMICFIELD121_508198',
name :'dynamicField12',
withoutLabel : true,
attribute : 'dynamicField12',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD311_753198",
field : 'dynamicField13',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_DYNAMICFIELD311_753198',
name :'dynamicField13',
withoutLabel : true,
attribute : 'dynamicField13',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD411_866198",
field : 'dynamicField14',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_DYNAMICFIELD411_866198',
name :'dynamicField14',
withoutLabel : true,
attribute : 'dynamicField14',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD551_120198",
field : 'dynamicField15',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_DYNAMICFIELD551_120198',
name :'dynamicField15',
withoutLabel : true,
attribute : 'dynamicField15',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD111_346198",
field : 'dynamicField16',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_DYNAMICFIELD111_346198',
name :'dynamicField16',
withoutLabel : true,
attribute : 'dynamicField16',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD777_257198",
field : 'dynamicField17',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_DYNAMICFIELD777_257198',
name :'dynamicField17',
withoutLabel : true,
attribute : 'dynamicField17',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD181_740198",
field : 'dynamicField18',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_DYNAMICFIELD181_740198',
name :'dynamicField18',
withoutLabel : true,
attribute : 'dynamicField18',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD911_217198",
field : 'dynamicField19',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_DYNAMICFIELD911_217198',
name :'dynamicField19',
withoutLabel : true,
attribute : 'dynamicField19',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DYNAMICFIELD000_944198",
field : 'dynamicField20',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_DYNAMICFIELD000_944198',
name :'dynamicField20',
withoutLabel : true,
attribute : 'dynamicField20',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_FEEOLAUUHKGPDCB_657198",
label : cobis.translate('LNSPR.LBL_LOANS_CUOTAQUGL_10106'),
field : 'fee',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_FEEOLAUUHKGPDCB_657198',
name :'fee',
withoutLabel : true,
attribute : 'fee',
entity : 'AmortizationEntity',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
isOnChangeControl:true,
}
},
]);
this.VA_VAVABUTTONRDGI5_636198.id = "VA_VAVABUTTONRDGI5_636198";
this.VA_VAVABUTTONRDGI5_636198.name = "VA_VAVABUTTONRDGI5_636198";
this.VA_VAVABUTTONRDGI5_636198.label = cobis.translate("LNSPR.LBL_LOANS_CALCULARR_36878");
this.VA_VAVABUTTONRDGI5_636198.colSpan = 1;
this.VA_VAVABUTTONRDGI5_636198.withoutLabel = true;
this.VA_VAVABUTTONRDGI5_636198.causesValidation=false;
this.VA_VAVABUTTONRDGI5_636198.submitOnEnter=false;
this.VA_VAVABUTTONRDGI5_636198.setFocus=false;
this.VA_VAVABUTTONRDGI5_636198.enabled = ConstantsApi.mode.All;
this.VA_VAVABUTTONRDGI5_636198.visible= ConstantsApi.mode.All;
this.VA_VAVABUTTONRDGI5_636198.icon = "";
this.VA_VAVABUTTONNXJJ__482198.id = "VA_VAVABUTTONNXJJ__482198";
this.VA_VAVABUTTONNXJJ__482198.name = "VA_VAVABUTTONNXJJ__482198";
this.VA_VAVABUTTONNXJJ__482198.label = cobis.translate("LNSPR.LBL_LOANS_ADICIONAA_20544");
this.VA_VAVABUTTONNXJJ__482198.colSpan = 1;
this.VA_VAVABUTTONNXJJ__482198.withoutLabel = true;
this.VA_VAVABUTTONNXJJ__482198.causesValidation=false;
this.VA_VAVABUTTONNXJJ__482198.submitOnEnter=false;
this.VA_VAVABUTTONNXJJ__482198.setFocus=false;
this.VA_VAVABUTTONNXJJ__482198.enabled = ConstantsApi.mode.All;
this.VA_VAVABUTTONNXJJ__482198.visible= ConstantsApi.mode.All;
this.VA_VAVABUTTONNXJJ__482198.icon = "";
this.VA_VAVABUTTONZDFPF_173198.id = "VA_VAVABUTTONZDFPF_173198";
this.VA_VAVABUTTONZDFPF_173198.name = "VA_VAVABUTTONZDFPF_173198";
this.VA_VAVABUTTONZDFPF_173198.label = cobis.translate("LNSPR.LBL_LOANS_GRACIAYDM_14967");
this.VA_VAVABUTTONZDFPF_173198.colSpan = 1;
this.VA_VAVABUTTONZDFPF_173198.withoutLabel = true;
this.VA_VAVABUTTONZDFPF_173198.causesValidation=false;
this.VA_VAVABUTTONZDFPF_173198.submitOnEnter=false;
this.VA_VAVABUTTONZDFPF_173198.setFocus=false;
this.VA_VAVABUTTONZDFPF_173198.enabled = ConstantsApi.mode.All;
this.VA_VAVABUTTONZDFPF_173198.visible= ConstantsApi.mode.All;
this.VA_VAVABUTTONZDFPF_173198.icon = "";
this.VA_VAVABUTTONOH3FZ_246198.id = "VA_VAVABUTTONOH3FZ_246198";
this.VA_VAVABUTTONOH3FZ_246198.name = "VA_VAVABUTTONOH3FZ_246198";
this.VA_VAVABUTTONOH3FZ_246198.label = cobis.translate("LNSPR.LBL_LOANS_RECALCUAR_13089");
this.VA_VAVABUTTONOH3FZ_246198.colSpan = 1;
this.VA_VAVABUTTONOH3FZ_246198.withoutLabel = true;
this.VA_VAVABUTTONOH3FZ_246198.causesValidation=false;
this.VA_VAVABUTTONOH3FZ_246198.submitOnEnter=false;
this.VA_VAVABUTTONOH3FZ_246198.setFocus=false;
this.VA_VAVABUTTONOH3FZ_246198.enabled = ConstantsApi.mode.All;
this.VA_VAVABUTTONOH3FZ_246198.visible= ConstantsApi.mode.All;
this.VA_VAVABUTTONOH3FZ_246198.icon = "";
this.VA_VAVABUTTONNPM_2_987198.id = "VA_VAVABUTTONNPM_2_987198";
this.VA_VAVABUTTONNPM_2_987198.name = "VA_VAVABUTTONNPM_2_987198";
this.VA_VAVABUTTONNPM_2_987198.label = cobis.translate("LNSPR.LBL_LOANS_GUARDARRY_43346");
this.VA_VAVABUTTONNPM_2_987198.colSpan = 1;
this.VA_VAVABUTTONNPM_2_987198.withoutLabel = true;
this.VA_VAVABUTTONNPM_2_987198.causesValidation=false;
this.VA_VAVABUTTONNPM_2_987198.submitOnEnter=false;
this.VA_VAVABUTTONNPM_2_987198.setFocus=false;
this.VA_VAVABUTTONNPM_2_987198.enabled = ConstantsApi.mode.All;
this.VA_VAVABUTTONNPM_2_987198.visible= ConstantsApi.mode.All;
this.VA_VAVABUTTONNPM_2_987198.icon = "";
this.VA_VAVABUTTONVJFY0_286198.id = "VA_VAVABUTTONVJFY0_286198";
this.VA_VAVABUTTONVJFY0_286198.name = "VA_VAVABUTTONVJFY0_286198";
this.VA_VAVABUTTONVJFY0_286198.label = cobis.translate("LNSPR.LBL_LNSPR_IMPRIMIRR_54076");
this.VA_VAVABUTTONVJFY0_286198.colSpan = 1;
this.VA_VAVABUTTONVJFY0_286198.withoutLabel = true;
this.VA_VAVABUTTONVJFY0_286198.causesValidation=false;
this.VA_VAVABUTTONVJFY0_286198.submitOnEnter=false;
this.VA_VAVABUTTONVJFY0_286198.setFocus=false;
this.VA_VAVABUTTONVJFY0_286198.enabled = ConstantsApi.mode.All;
this.VA_VAVABUTTONVJFY0_286198.visible= ConstantsApi.mode.None;
this.VA_SPACER2979MSHFC_211198.id = "VA_SPACER2979MSHFC_211198";
this.VA_SPACER2979MSHFC_211198.name = "Spacer2979";
this.VA_SPACER2979MSHFC_211198.colSpan = 1;
this.VA_SPACER2979MSHFC_211198.visible= ConstantsApi.mode.All;
this.VA_SPACER1486BFHYH_817198.id = "VA_SPACER1486BFHYH_817198";
this.VA_SPACER1486BFHYH_817198.name = "Spacer1486";
this.VA_SPACER1486BFHYH_817198.colSpan = 1;
this.VA_SPACER1486BFHYH_817198.visible= ConstantsApi.mode.All;
this.VA_VAVABUTTONPJ080_778198.id = "VA_VAVABUTTONPJ080_778198";
this.VA_VAVABUTTONPJ080_778198.name = "VA_VAVABUTTONPJ080_778198";
this.VA_VAVABUTTONPJ080_778198.label = cobis.translate("LNSPR.LBL_LOANS_IMPRIMISS_89532");
this.VA_VAVABUTTONPJ080_778198.colSpan = 2;
this.VA_VAVABUTTONPJ080_778198.withoutLabel = true;
this.VA_VAVABUTTONPJ080_778198.causesValidation=false;
this.VA_VAVABUTTONPJ080_778198.submitOnEnter=false;
this.VA_VAVABUTTONPJ080_778198.setFocus=false;
this.VA_VAVABUTTONPJ080_778198.enabled = ConstantsApi.mode.None;
this.VA_VAVABUTTONPJ080_778198.visible= ConstantsApi.mode.None;
this.VA_SPACER2660NECGA_809198.id = "VA_SPACER2660NECGA_809198";
this.VA_SPACER2660NECGA_809198.name = "Spacer2660";
this.VA_SPACER2660NECGA_809198.colSpan = 1;
this.VA_SPACER2660NECGA_809198.visible= ConstantsApi.mode.All;
this.T_LNSPRTZAAOTEC_626 = this.formBuilder.group({
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
OperationItemsList: this.formBuilder.group({
item:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_ITEMWXVWWWSCMKV_983587')],
description:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_DESCRIPTIONRKNO_269587')],
typeItem:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_TYPEITEMJIPMXHQ_437587')],
otherRates:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_OTHERRATESSNGBH_206587')],
paymentMethod:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_PAYMENTMETHODDD_439587')],
signo:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_SIGNOPVGZZIPUAD_330587')],
priority:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_PRIORITYKZVVIRF_388587')],
factor:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_FACTORFVQAPPLTX_853587')],
reference:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_REFERENCEGBROYB_738587')],
signReadjustment:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_SIGNREADJUSTNEN_335587')],
referenceReadjustment:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_REFERENCEREANET_690587')],
factorReadjustment:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_FACTORREADJUTET_483587')],
calculationBase:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_CALCULATIONBASA_240587')],
amount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_AMOUNTJGMPZXMXY_754587')],
percentage:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_PERCENTAGEJLTCZ_260587')],
payArrears:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_PAYARREARSBOUUR_140587')],
cause:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_CAUSEUVCCDEPMIA_289587')],
points:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_POINTSTESVMWKGH_733587')],
typePoints:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_TYPEPOINTSDTBQI_258587')],
totalRate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_TOTALRATEOPJMMR_803587')],
negotiatedRate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_NEGOTIATEDRAETT_876587')],
annualRate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_ANNUALRATESVRXQ_786587')],
pointsReadjustment:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_POINTSREADJUTTS_146587')],
grace:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_GRACEGYKAMZUODA_972587')],
receivable:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_RECEIVABLEUNHZR_405587')],
warrantyType:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_WARRANTYTYPETIJ_651587')],
warrantyAccount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_WARRANTYACCOUUU_368587')],
warrantyCoverage:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_WARRANTYCOVEREG_147587')],
warrantyValue:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_WARRANTYVALUEEE_381587')],
dividendType:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_DIVIDENDTYPEOCS_467587')],
interestPeriods:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_INTERESTPERIDDD_253587')],
financed:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_FINANCEDWVNAAPN_415587')],
minRate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_MINRATEJNRPYQJS_276587')],
maxRate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_MAXRATENSHCMIGD_796587')],
associate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_TEXTINPUTBOXNAY_879587')],
associateValue:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_TEXTINPUTBOXXQV_567587')],
insurance:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_TEXTINPUTBOXKKV_743587')],
insuranceType:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_TEXTINPUTBOXVLP_884587')],
category:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_TEXTINPUTBOXCKX_678587')],
rank:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MC21_OVS27.columns,'VA_TEXTINPUTBOXAEM_387587')],
applyRate:[null],
banco:[null],
limit:[null],
}
),
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
AmortizationFormEntity: this.formBuilder.group({
numOperation:[{value: null, disabled: !this.VA_NUMOPERATIONRWY_828198.visible}],
operationType:[{value: null, disabled: !this.VA_OPERATIONTYPEEE_239198.visible}],
amount:[{value: null, disabled: !this.VA_AMOUNTEWSEJLOSB_545198.visible}],
tirFee:[{value: null, disabled: !this.VA_TIRFEEYVRGJBTQS_146198.visible}],
valueDate:[{value: null, disabled: !this.VA_VALUEDATEKMJLVF_161198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_VALUEDATEKMJLVF_161198.validationFunctions!)],
interest:[{value: null, disabled: !this.VA_INTERESTBRXDBGI_239198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_INTERESTBRXDBGI_239198.validationFunctions!)],
fee:[{value: null, disabled: !this.VA_FEEOFWVFIUKFNPP_635198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_FEEOFWVFIUKFNPP_635198.validationFunctions!)],
termType:[{value: null, disabled: !this.VA_TERMTYPEOWIDGEH_595198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TERMTYPEOWIDGEH_595198.validationFunctions!)],
term:[{value: null, disabled: !this.VA_TERMMUMJBESVPSA_498198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TERMMUMJBESVPSA_498198.validationFunctions!)],
typeFee:[{value: null, disabled: !this.VA_TYPEFEEARBRJCKA_414198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TYPEFEEARBRJCKA_414198.validationFunctions!)],
firstDueDate:[{value: null, disabled: !this.VA_FIRSTDUEDATEACN_138198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_FIRSTDUEDATEACN_138198.validationFunctions!)],
fixedPayementDay:[{value: false, disabled: !this.VA_FIXEDPAYEMENYTY_637198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_FIXEDPAYEMENYTY_637198.validationFunctions!)],
paymentDay:[{value: null, disabled: !this.VA_PAYMENTDAYEFRJN_549198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PAYMENTDAYEFRJN_549198.validationFunctions!)],
termInterest:[{value: null, disabled: !this.VA_TERMINTERESTGWH_345198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TERMINTERESTGWH_345198.validationFunctions!)],
termCapital:[{value: null, disabled: !this.VA_TERMCAPITALLSSH_857198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TERMCAPITALLSSH_857198.validationFunctions!)],
extendedPaymentDate:[{value: null, disabled: !this.VA_EXTENDEDPAYMEDA_710198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_EXTENDEDPAYMEDA_710198.validationFunctions!)],
daysGraceDefault:[{value: null, disabled: !this.VA_DAYSGRACEDEFUUU_853198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_DAYSGRACEDEFUUU_853198.validationFunctions!)],
monthGrace:[{value: null, disabled: !this.VA_MONTHGRACEFIJFA_429198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_MONTHGRACEFIJFA_429198.validationFunctions!)],
termGraceCapital:[{value: null, disabled: !this.VA_TERMGRACECAPTAT_881198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TERMGRACECAPTAT_881198.validationFunctions!)],
termGraceInterest:[{value: null, disabled: !this.VA_TERMGRACEINTTET_849198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TERMGRACEINTTET_849198.validationFunctions!)],
baseInterestCalculation:[{value: null, disabled: !this.VA_BASEINTERESTAAC_534198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_BASEINTERESTAAC_534198.validationFunctions!)],
typeAmortization:[{value: null, disabled: !this.VA_TYPEAMORTIZATTN_681198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TYPEAMORTIZATTN_681198.validationFunctions!)],
avoidHolidays:[{value: null, disabled: !this.VA_AVOIDHOLIDAYSSS_789198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_AVOIDHOLIDAYSSS_789198.validationFunctions!)],
typeGrace:[{value: null, disabled: !this.VA_TYPEGRACEBHAAVJ_350198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TYPEGRACEBHAAVJ_350198.validationFunctions!)],
graceDividend:[{value: null, disabled: !this.VA_9468GILHMJRMZIF_745198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_9468GILHMJRMZIF_745198.validationFunctions!)],
ballonFee:[{value: false, disabled: !this.VA_BALLONFEEWWRPRY_949198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_BALLONFEEWWRPRY_949198.validationFunctions!)],
randomGrace:[{value: null, disabled: !this.VA_RANDOMGRACEYJOS_359198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_RANDOMGRACEYJOS_359198.validationFunctions!)],
generateInsurance:[{value: false, disabled: !this.VA_GENERATEINSUENC_694198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_GENERATEINSUENC_694198.validationFunctions!)],
initialInterestRest:[{value: null, disabled: !this.VA_INITIALINTERTSE_643198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_INITIALINTERTSE_643198.validationFunctions!)],
rediscountDate:[{value: null, disabled: !this.VA_REDISCOUNTDAEET_581198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_REDISCOUNTDAEET_581198.validationFunctions!)],
solidarity:[{value: false, disabled: !this.VA_SOLIDARITYTOGWR_286198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_SOLIDARITYTOGWR_286198.validationFunctions!)],
iva:[{value: null, disabled: !this.VA_IVASDFHAPWJFULF_560198.visible},CobisDesignerUtil.getValidationFunctions(this.VA_IVASDFHAPWJFULF_560198.validationFunctions!)],
safeTerm:[null],
calculatesNetRate:[null],
operationCode:[null],
equalDues:[null],
capital:[null],
chargeIn:[null],
threeYear:[null],
}
),
AmortizationEntity: this.formBuilder.group({
dividend:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DIVIDENDJQEBXYL_179198')],
expirationDate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_EXPIRATIONDATTE_941198')],
balanceCapital:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_BALANCECAPITLLL_258198')],
dynamicField1:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD111_201198')],
dynamicField2:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD222_976198')],
dynamicField3:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD333_680198')],
dynamicField4:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD444_619198')],
dynamicField5:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD555_803198')],
dynamicField6:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD666_861198')],
dynamicField7:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD777_256198')],
dynamicField8:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD888_910198')],
dynamicField9:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD999_904198')],
dynamicField10:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD011_387198')],
dynamicField11:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD111_909198')],
dynamicField12:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD121_508198')],
dynamicField13:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD311_753198')],
dynamicField14:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD411_866198')],
dynamicField15:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD551_120198')],
dynamicField16:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD111_346198')],
dynamicField17:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD777_257198')],
dynamicField18:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD181_740198')],
dynamicField19:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD911_217198')],
dynamicField20:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_DYNAMICFIELD000_944198')],
fee:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ECPR_JAA30.columns,'VA_FEEOLAUUHKGPDCB_657198')],
}
),
});
}
}