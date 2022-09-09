import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-generaliao-289119.model';
import {
  ASSTSService
} from "src/app/ASSTS/service-modules/ASSTS.service";
import {
  CobisCommonsService,
  ReportParameter
} from 'cobis-commons';
import {
  CobisModelChangeCallbackEventArgs,
  CobisModelChangeEventArgs,
  CobisModelChangeGroupEventsArgs,
  CobisModelChangedGroupCallbackEventsArgs,
  CobisModelCustomValidateEventArgs,
  CobisModelCustomValidationEventArgs,
  CobisModelExecuteCommandEventArgs,
  CobisModelExecuteCommandCallbackEventArgs,
  CobisModelExecuteQueryCallbackEventArgs,
  CobisModelExecuteQueryEventArgs,
  CobisModelExportColumnsExecuteEventArgs,
  CobisModelInitDataCallbackEventArgs,
  CobisModelInitDataEventArgs,
  CobisModelItemGroupInformation,
  CobisModelLoadCatalogCallbackEventArgs,
  CobisModelLoadCatalogEventArgs,
  CobisModelLoadHeaderEventArgs,
  CobisModelOnCloseModalEventArgs,
  CobisModelOnCloseModalCallbackEventArgs,
  CobisModelOnInputButtonEventArgs,
  CobisModelOnTabClosingEventArgs,
  CobisModelRenderEventArgs,
  CobisModelGridAfterLeaveInLineRowEventArgs,
  CobisModelGridAfterCloseDialogEventArgs,
  CobisModelGridBeforeEnterInLineRowEventArgs,
  CobisModelGridBeforeOpenDialogEventArgs,
  CobisModelGridCommandCallbackEventArgs,
  CobisModelGridCommandExecuteEventArgs,
  CobisModelGridInitColumnTemplateEventArgs,
  CobisModelGridInitDetailTemplateEventArgs,
  CobisModelGridInitEditColumnTemplateEventArgs,
  CobisModelGridRowActionEventArgs,
  CobisModelGridRowActionCallbackEventArgs,
  CobisModelGridRowCommandCallbackEventArgs,
  CobisModelGridRowCommandExecuteEventArgs,
  CobisModelGridRowRenderingEventArgs,
  CobisModelGridRowSelectingEventArgs,
  CobisModelGridRowSelectingCallbackEventArgs,
  CobisModelGridShowRowDetailIconEventArgs,
  VisualValidationTypeEnum,
  ICobisCustomValidationsEventArgs,
  CobisDesignerCustomEvent
} from 'cobis-designer';

/* variables locales de T_ASSTSBIBQRXFV_119*/
let tab: any = this.cobis.container.tabs.getCurrentTab();

export class VcGeneraliao289119Custom extends CobisDesignerCustomEvent {

  task_changeWithError: any = {};

  constructor(public cobis: CobisCommonsService, private ASSTS: ASSTSService) {
    super();
  }




  //*********** COMENTARIOS DE AYUDA **************
  //  Para imprimir mensajes en consola
  //  console.log("executeCommand");

  //  Para enviar mensaje use
  //  eventArgs.commons.messageHandler.showMessagesInformation('Ejecutando comando personalizado');

  //  Para evitar que se continue con la validación a nivel de servidor
  //  eventArgs.commons.execServer = false;

  //**********************************************************
  //  Eventos de VISUAL ATTRIBUTES
  //**********************************************************   

  //"TaskId": "T_ASSTSBIBQRXFV_119"


  // () View: View of GeneralInformationMain
  //Evento changeGroup : Evento change para pestañas, collapsible y accordion.
  task_changeGroup_G_GENERALNTN_956193 = (entities: Model, changedGroupEventArgs: any) => {
    changedGroupEventArgs.commons.execServer = false;

    //changedGroupEventArgs.commons.serverParameters.entityName = true;

    let nav: any = changedGroupEventArgs.commons.api.navigation;

    //Pantalla: Resumen general del estado del préstamo
    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALIIO_430193') && (changedGroupEventArgs.commons.item.isOpen === true)) {
      console.log("Open by " + changedGroupEventArgs.commons.item.id);

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_GENERALINFFHA_866',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_GENERALIAT_927866'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.customDialogParameters = {
        loan: entities.Loan
      };
      nav.registerView('G_GENERALAIN_757193');
    }

    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALIIO_430193') && (changedGroupEventArgs.commons.item.isOpen === true)) {
      console.log("Open by " + changedGroupEventArgs.commons.item.id);

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'CMMNS',
        taskId: 'T_AMORTIZATIOON_261',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_AMORTIZAII_339261'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.customDialogParameters = {
        loan: entities.Loan,
        operation: entities.Loan.loanBankID
      };
      nav.registerView('G_GENERALMMI_992193');
    }

    /*
     * Pantalla: Información general
     */
    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALINN_164193') && (changedGroupEventArgs.commons.item.isOpen === true)) {

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_GENERALINAOIT_347',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_GENERALINO_421347'
      };
      nav.queryParameters = {
        mode: 2
      };
      nav.customDialogParameters = {
        loan: entities.Loan,
        operation: entities.Loan.loanBankID
      };
      nav.registerView('G_GENERALINN_164193');
    }
    /*
     * Pantalla: Préstamos Sindicados
     */
    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALANN_232193') && (changedGroupEventArgs.commons.item.isOpen === true)) {

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_ASSTSUHBKGFUE_991',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_LOANSYNDIE_790991'
      };
      nav.queryParameters = {
        mode: 2
      };
      nav.customDialogParameters = {
        parameters: {
          loan: entities.Loan
        }

      };
      nav.registerView('G_GENERALANN_232193');
    }

    /**
     * Pantalla: Garant&iacute;as y deudores - Garant&iacute;as
     */
    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALOII_638193') && (changedGroupEventArgs.commons.item.isOpen === true)) {

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_LOANWARRANTYT_123',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_LOANWARRTT_422123'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.customDialogParameters = {
        loan: entities.Loan,
        operation: entities.Loan.loanBankID
      };
      nav.registerView('G_GENERALNIN_596193');
    }

    /*
     * Pantalla: Loan Warranty - Debtor List
     */
    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALOII_638193') && (changedGroupEventArgs.commons.item.isOpen === true)) {

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_LOANDEBTORUIG_168',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_LOANDEBTRR_256168'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.customDialogParameters = {
        loan: entities.Loan,
        operation: entities.Loan.loanBankID
      };
      nav.registerView('G_GENERALNOA_127193');
    }


    /*
     * Pantalla: Polizas
     */
    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALOII_638193') && (changedGroupEventArgs.commons.item.isOpen === true)) {

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_ASSTSMABINVRB_160',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_LOANPOLIYY_967160'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.customDialogParameters = {
        loan: entities.Loan,
        operation: entities.Loan.loanBankID
      };
      nav.registerView('G_GENERALTTN_154193');
    }

    /*
     * Pantalla: Garantes y Fiadores
     */
    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALOII_638193') && (changedGroupEventArgs.commons.item.isOpen === true)) {

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_ASSTSABVOMTUL_791',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_LOANGUARNE_277791'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.customDialogParameters = {
        loan: entities.Loan,
        operation: entities.Loan.loanBankID
      };
      nav.registerView('G_GENERALNMM_828193');


    }



    /*
     * Pantalla: Rubros y Tasas - QueryItemsLoanForm
     */
    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALIOT_600193') && (changedGroupEventArgs.commons.item.isOpen === true)) {

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_ITEMSLOANSUXI_712',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_ITEMSLOANN_757712'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.customDialogParameters = {
        loan: entities.Loan,
        operation: entities.Loan.loanBankID
      };
      nav.registerView('G_GENERALAAM_308193');
    }

    /*
     * Pantalla: Rubros y Tasas
     */
    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALIOT_600193') && (changedGroupEventArgs.commons.item.isOpen === true)) {

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_RATESPTSITVKK_186',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_RATESVLYWT_596186'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.customDialogParameters = {
        loan: entities.Loan,
        operation: entities.Loan.loanBankID
      };
      nav.registerView('G_GENERALMTO_993193');

    }

    /*
     * Pantalla: Abonos
     */
    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALOTN_662193') && (changedGroupEventArgs.commons.item.isOpen === true)) {

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_PAYMENTUTOUGP_714',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_PAYMENTZMN_922714'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.customDialogParameters = {
        loan: entities.Loan,
        operation: entities.Loan.loanBankID
      };
      nav.registerView('G_GENERALOTN_662193');

    }

    /*
     * Tab: Structured/Renewed Operation
     */
    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALNNM_609193') && (changedGroupEventArgs.commons.item.isOpen === true)) {

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_REFINANCEDALA_857',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_REFINANCLE_514857'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.customDialogParameters = {
        loan: entities.Loan
      };
      nav.registerView('G_GENERALNNM_609193');

    }

    /*
     * Tab: Child operations
     */
    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALMIN_860193') && (changedGroupEventArgs.commons.item.isOpen === true)) {

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_ASSTSVDYQFQAP_288',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_LOANSCHILE_317288'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.customDialogParameters = {
        loan: entities.Loan
      };
      nav.registerView('G_GENERALMIN_860193');

    }

    /*
     * Tab: Internal periods operations
     */
    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALOAT_762193') && (changedGroupEventArgs.commons.item.isOpen === true)) {

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_ASSTSEYKPQBME_621',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_LOANSINTRE_184621'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.customDialogParameters = {
        loan: entities.Loan
      };
      nav.registerView('G_GENERALOAT_762193');

    }

    /*
     * Pantalla: Seguros
     */
    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALTAM_466193') && (changedGroupEventArgs.commons.item.isOpen === true)) {

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_ASSTSQMEVBPIH_868',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_LOANSSEGRR_486868'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.customDialogParameters = {
        loan: entities.Loan,
        operation: entities.Loan.loanBankID
      };
      nav.registerView('G_GENERALTAM_466193');
    }

    /*
     * Pantalla: Cartera Pasiva
     */
    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALNNA_591193') && (changedGroupEventArgs.commons.item.isOpen === true)) {

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_ASSTSNXKZRVUH_117',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_PASSIVEPOF_610117'
      };
      nav.queryParameters = {
        mode: 2
      };
      nav.customDialogParameters = {
        operation: entities.Loan.loanBankID
      };
      nav.registerView('G_GENERALNNA_591193');
    }

    /*
     * Pantalla: Reajustes del Prestamos
     */
    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALAIA_225193') && (changedGroupEventArgs.commons.item.isOpen === true)) {

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'MNTNN',
        taskId: 'T_REAJUSTECAMMB_801',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_REAJUSTEMF_738801'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.customDialogParameters = {
        parameters: {
          loan: entities.Loan
        }

      };
      nav.registerView('G_GENERALAIA_225193');
    }

    /*
     * Pantalla: Transacciones
     */

    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALNNN_702193') && (changedGroupEventArgs.commons.item.isOpen === true)) {
      console.log("Open by " + changedGroupEventArgs.commons.item.id);

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_ASSTSQUQPUYMT_694',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_LOANTRANTC_731694'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.customDialogParameters = {
        loan: entities.Loan
      };
      nav.registerView('G_GENERALNNN_702193');
    }

    /*
     * Pantalla: Comision / Gastos Diferidos
     */

    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALTAI_721193') && (changedGroupEventArgs.commons.item.isOpen === true)) {

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_ASSTSKMGDPSCM_203',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_DEFERREDIT_242203'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.customDialogParameters = {
        loan: entities.Loan
      };
      nav.registerView('G_GENERALTAI_721193');
    }
  };

  // (Button) 
  task_executeCommand_CM_TASSTSBI_BA1 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    let apiHeader: any = executeCommandEventArgs.commons.api.cobisPatterns.header;
    apiHeader.refreshActions();

    executeCommandEventArgs.commons.execServer = true;
  };


  //Start signature to Callback event to CM_TASSTSBI_BA1
  task_executeCommandCallback_CM_TASSTSBI_BA1 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    executeCommandCallbackEventArgs.commons.api.viewState.selectLayout("G_GENERALNTN_956193", "G_GENERALIIO_430193");


    if (!executeCommandCallbackEventArgs.commons.api.vc.dialogParameters.controlId || executeCommandCallbackEventArgs.commons.api.vc.dialogParameters.controlId == 'G_GENERALMMI_992193') {
      let nav: any = executeCommandCallbackEventArgs.commons.api.navigation;
      //Pantalla: Resumen general del estado del préstamo

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_GENERALINFFHA_866', //FormSimple (AmortizationForm)
        taskVersion: '1.0.0',
        viewContainerId: 'VC_GENERALIAT_927866' //Contenedor FormSimple
      };
      nav.queryParameters = {
        mode: 2
      };
      nav.customDialogParameters = {
        loan: entities.Loan
      };
      nav.registerView('G_GENERALAIN_757193'); //Grupo en el cual cargara

      //Pantalla: Tabla de amortización

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'CMMNS',
        taskId: 'T_AMORTIZATIOON_261', //FormSimple (AmortizationForm)
        taskVersion: '1.0.0',
        viewContainerId: 'VC_AMORTIZAII_339261' //Contenedor FormSimple
      };
      nav.queryParameters = {
        mode: 2
      };
      nav.customDialogParameters = {
        loan: entities.Loan,
        operation: entities.Loan.loanBankID
      };
      nav.registerView('G_GENERALMMI_992193'); //Grupo en el cual cargara
    }


    //FORMAT DATE
    entities.Loan.startDate = kendo.toString(kendo.parseDate(entities.Loan.startDate), JSON.parse(sessionStorage.dateFormat));
    entities.Loan.endDate = kendo.toString(kendo.parseDate(entities.Loan.endDate), JSON.parse(sessionStorage.dateFormat));
    entities.Loan.feeEndDate = kendo.toString(kendo.parseDate(entities.Loan.feeEndDate), JSON.parse(sessionStorage.dateFormat));
    entities.Loan.lastProcessDate = kendo.toString(kendo.parseDate(entities.Loan.lastProcessDate), JSON.parse(sessionStorage.dateFormat));
    entities.Loan.balanceDue = kendo.toString(entities.Loan.balanceDue, "n");
    entities.Loan.amountApproved = kendo.toString(entities.Loan.amountApproved, "n");
    entities.Loan.nextPayment = kendo.toString(entities.Loan.nextPayment, "n");
  };


  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: GeneralInformationMain
  task_initData_VC_GENERALIAO_289119 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    let nav: any = initDataEventArgs.commons.api.navigation;
    let api: any = initDataEventArgs.commons.api;
    let apiHeader: any = initDataEventArgs.commons.api.cobisPatterns.header;
    let parameters: any = null;
    let xsell: any = 'N';

    if (tab.parameters) {
      apiHeader.visibleSearchOption(false);
      parameters = tab.parameters;

      entities.Loan.adjustment = parameters.adjustment;
      entities.Loan.amount = parameters.amount;
      entities.Loan.categoryGroup = parameters.categoryGroup;
      entities.Loan.clientID = parameters.clientID;
      entities.Loan.clientName = parameters.clientName;
      entities.Loan.codCurrency = parameters.codCurrency;
      entities.Loan.currencyName = parameters.currencyName;
      entities.Loan.desOperationType = parameters.desOperationType;
      entities.Loan.disbursementDate = parameters.disbursementDate;
      entities.Loan.expirationDate = parameters.expirationDate;
      entities.Loan.group = parameters.group;
      entities.Loan.loanBankID = parameters.loanBankID;
      entities.Loan.loanID = parameters.loanID;
      entities.Loan.migratedOper = parameters.migratedOper;
      entities.Loan.numProcedure = parameters.numProcedure;
      entities.Loan.officeID = parameters.officeID;
      entities.Loan.officerID = parameters.officerID;
      entities.Loan.previousOper = parameters.previousOper;
      entities.Loan.redesCont = parameters.redesCont;
      entities.Loan.status = parameters.status;
      entities.Loan.tipo = parameters.tipo;
    } else {
      parameters = api.navigation.getCustomDialogParameters();
      //entities.LoanInstancia = parameters.parameters.loanInstancia;
      entities.Loan = parameters.parameters.loan;

      if (parameters.parameters.menu == "0" || parameters.parameters.menu == "89170") {
        apiHeader.visibleSearchOption(false);
      }
    }

    initDataEventArgs.commons.api.viewState.hide('G_GENERALTAM_466193');

    if (entities.Loan.categoryGroup == "INDIVIDUAL") {
      entities.Loan.tipo = "I";
    } else {
      entities.Loan.tipo = "G";
    }

    //if (parameters.parameters.menu == "4") {
    if (entities.Loan.tipo == "I") {
      initDataEventArgs.commons.api.viewState.hide('G_GENERALMIN_860193');
      initDataEventArgs.commons.api.viewState.hide('G_GENERALOAT_762193');
    } else {
      initDataEventArgs.commons.api.viewState.show('G_GENERALMIN_860193');
      initDataEventArgs.commons.api.viewState.show('G_GENERALOAT_762193');
    }
    // }


    apiHeader.refreshActions();




    initDataEventArgs.commons.execServer = true;
    //initDataEventArgs.commons.serverParameters.entityName = true;
  };


  //Start signature to Callback event to VC_GENERALIAO_289119
  task_initDataCallback_VC_GENERALIAO_289119 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
  ) => {
    let nav: any = initDataCallbackEventArgs.commons.api.navigation;

    if (tab.parameters) {
      entities.Loan.desOperationType = tab.parameters.desOperationType;
    } else {
      entities.Loan.desOperationType = nav.getCustomDialogParameters().parameters.loan.desOperationType;
    }

    if (entities.Loan.natureOp != 'P') {
      initDataCallbackEventArgs.commons.api.viewState.hide('G_GENERALNNA_591193');
    }
    //Pantalla: Resumen general del estado del préstamo

    nav.address = {
      moduleId: 'ASSTS',
      subModuleId: 'QERYS',
      taskId: 'T_GENERALINFFHA_866', //FormSimple (AmortizationForm)
      taskVersion: '1.0.0',
      viewContainerId: 'VC_GENERALIAT_927866' //Contenedor FormSimple
    };
    nav.queryParameters = {
      mode: 2
    };
    nav.customDialogParameters = {
      loan: entities.Loan
    };
    nav.registerView('G_GENERALAIN_757193'); //Grupo en el cual cargara

    //Pantalla: Tabla de amortización

    nav.address = {
      moduleId: 'ASSTS',
      subModuleId: 'CMMNS',
      taskId: 'T_AMORTIZATIOON_261', //FormSimple (AmortizationForm)
      taskVersion: '1.0.0',
      viewContainerId: 'VC_AMORTIZAII_339261' //Contenedor FormSimple
    };
    nav.queryParameters = {
      mode: 2
    };
    nav.customDialogParameters = {
      loan: entities.Loan,
      operation: entities.Loan.loanBankID
    };
    nav.registerView('G_GENERALMMI_992193'); //Grupo en el cual cargara
  };




  //Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
  //ViewContainer: GeneralInformationMain
  task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
    let apiHeader: any = onCloseModalEventArgs.commons.api.cobisPatterns.header;
    apiHeader.refreshActions();

    onCloseModalEventArgs.commons.execServer = true;
  };

  //Start signature to Callback event to VC_GENERALIAO_289119
  task_onCloseModalEventCallback = (
    entities: Model,
    onCloseModalCallbackEventArgs: CobisModelOnCloseModalCallbackEventArgs
  ) => {
    onCloseModalCallbackEventArgs.commons.api.viewState.selectLayout("G_GENERALNTN_956193", "G_GENERALIIO_430193");


    if (!onCloseModalCallbackEventArgs.commons.api.vc.dialogParameters.controlId || onCloseModalCallbackEventArgs.commons.api.vc.dialogParameters.controlId == 'G_GENERALMMI_992193') {
      let nav: any = onCloseModalCallbackEventArgs.commons.api.navigation;
      //Pantalla: Resumen general del estado del préstamo

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_GENERALINFFHA_866', //FormSimple (AmortizationForm)
        taskVersion: '1.0.0',
        viewContainerId: 'VC_GENERALIAT_927866' //Contenedor FormSimple
      };
      nav.queryParameters = {
        mode: 2
      };
      nav.customDialogParameters = {
        loan: entities.Loan
      };
      nav.registerView('G_GENERALAIN_757193'); //Grupo en el cual cargara

      //Pantalla: Tabla de amortización

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'CMMNS',
        taskId: 'T_AMORTIZATIOON_261', //FormSimple (AmortizationForm)
        taskVersion: '1.0.0',
        viewContainerId: 'VC_AMORTIZAII_339261' //Contenedor FormSimple
      };
      nav.queryParameters = {
        mode: 2
      };
      nav.customDialogParameters = {
        loan: entities.Loan,
        operation: entities.Loan.loanBankID
      };
      nav.registerView('G_GENERALMMI_992193'); //Grupo en el cual cargara
    }


    //FORMAT DATE
    entities.Loan.startDate = kendo.toString(kendo.parseDate(entities.Loan.startDate), JSON.parse(sessionStorage.dateFormat));
    entities.Loan.endDate = kendo.toString(kendo.parseDate(entities.Loan.endDate), JSON.parse(sessionStorage.dateFormat));
    entities.Loan.feeEndDate = kendo.toString(kendo.parseDate(entities.Loan.feeEndDate), JSON.parse(sessionStorage.dateFormat));
    entities.Loan.lastProcessDate = kendo.toString(kendo.parseDate(entities.Loan.lastProcessDate), JSON.parse(sessionStorage.dateFormat));
    entities.Loan.balanceDue = kendo.toString(entities.Loan.balanceDue, "n");
    entities.Loan.amountApproved = kendo.toString(entities.Loan.amountApproved, "n");
    entities.Loan.nextPayment = kendo.toString(entities.Loan.nextPayment, "n");
  };




  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: GeneralInformationMain
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    //FORMAT DATE
    entities.Loan.startDate = kendo.toString(kendo.parseDate(entities.Loan.startDate), JSON.parse(sessionStorage.dateFormat));
    entities.Loan.endDate = kendo.toString(kendo.parseDate(entities.Loan.endDate), JSON.parse(sessionStorage.dateFormat));
    entities.Loan.feeEndDate = kendo.toString(kendo.parseDate(entities.Loan.feeEndDate), JSON.parse(sessionStorage.dateFormat));
    entities.Loan.lastProcessDate = kendo.toString(kendo.parseDate(entities.Loan.lastProcessDate), JSON.parse(sessionStorage.dateFormat));
    entities.Loan.balanceDue = kendo.toString(entities.Loan.balanceDue, "n");
    entities.Loan.amountApproved = kendo.toString(entities.Loan.amountApproved, "n");
    entities.Loan.nextPayment = kendo.toString(entities.Loan.nextPayment, "n");

    renderEventArgs.commons.execServer = false;

  };


}