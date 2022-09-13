import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-simulateaa-568839.model';
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


/* variables locales de T_ASSTSAXELGOQQ_915*/

/* variables locales de T_LOANHEADERNFI_316*/

/* variables locales de T_ASSTSSZCLDZTQ_839*/


export class VcSimulateaa568839Custom extends CobisDesignerCustomEvent {

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


  //"TaskId": "T_ASSTSAXELGOQQ_915"


  /*"TaskId": "T_LOANHEADERNFI_316",*/
  //Your code here

  //"TaskId": "T_ASSTSSZCLDZTQ_839"


  //gridCommand (Button) QueryView: QV_AV40_EIS41
  //Evento GridCommand: Sirve para personalizar la acción que realizan los botones de Grilla.
  task_gridCommand_CEQV_201QV_AV40_EIS41_373 = (
    entities: Model,
    gridExecuteCommandEventArgs: CobisModelGridCommandExecuteEventArgs
  ) => {
    gridExecuteCommandEventArgs.commons.execServer = false;

    let nav: any = gridExecuteCommandEventArgs.commons.api.navigation;

    nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_TABLAAMIO_45588');
    nav.address = {
      moduleId: 'ASSTS',
      subModuleId: 'CMMNS',
      taskId: 'T_ASSTSRQJVFXXE_548',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_AMORTIZATT_397548'
    };
    nav.queryParameters = {
      mode: 1
    };
    nav.modalProperties = {
      size: 'lg',
      callFromGrid: false
    };
    nav.customDialogParameters = {
      Loan: entities.Loan,
      AmortizationSimulate: entities.AmortizationSimulate
    };


    nav.openModalWindow("CEQV_201QV_AV40_EIS41_373", gridExecuteCommandEventArgs.nameEntityGrid);
  };


  //gridRowSelecting QueryView: QV_AV40_EIS41
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_AV40_EIS41 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.execServer = false;

  };






  // (Button) 
  //designer-hint: 2304: Cannot find name 'task_executeCommand_CM_TASSTSSZ_C3T'.
  task_executeCommand_CM_TASSTSSZ_C3T = (
    //designer-hint: 2304: Cannot find name 'Model'.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelExecuteCommandEventArgs'.
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;


    let nav: any = executeCommandEventArgs.commons.api.navigation;

    nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_NEGOCIANI_54038');
    nav.address = {
      moduleId: 'ASSTS',
      subModuleId: 'TRNSC',
      taskId: 'T_NEGOTIATIOTML_700',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_NEGOTIATOO_775700'
    };
    nav.queryParameters = {
      mode: 1
    };
    nav.modalProperties = {
      size: 'md',
      callFromGrid: false
    };
    nav.customDialogParameters = {
      negotiation: entities.Negotiation
    };

    nav.openModalWindow(executeCommandEventArgs.commons.controlId, null);
  };

  // (Button) 
  //designer-hint: 2304: Cannot find name 'task_executeCommand_CM_TASSTSSZ___7'.
  task_executeCommand_CM_TASSTSSZ___7 = (
    //designer-hint: 2304: Cannot find name 'Model'.
    //designer-hint: 6133: 'entities' is declared but its value is never read.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelExecuteCommandEventArgs'.
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = true;
  };

  //Start signature to Callback event to CM_TASSTSSZ___7
  //designer-hint: 2304: Cannot find name 'task_executeCommandCallback_CM_TASSTSSZ___7'.
  task_executeCommandCallback_CM_TASSTSSZ___7 = (
    //designer-hint: 2304: Cannot find name 'Model'.
    //designer-hint: 6133: 'entities' is declared but its value is never read.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelExecuteCommandCallbackEventArgs'.
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    if (executeCommandCallbackEventArgs.success) {
      //designer-hint: 2304: Cannot find name 'timer'.
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.LBL_ASSTS_CLCULOCOO_91053', false, null, this.ASSTS.timer);
    }
  };

  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: SimulateMain
  //designer-hint: 2304: Cannot find name 'task_initData_VC_SIMULATEAA_568839'.
  //designer-hint: 2304: Cannot find name 'Model'.
  //designer-hint: 2304: Cannot find name 'CobisModelInitDataEventArgs'.
  task_initData_VC_SIMULATEAA_568839 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = true;

    //designer-hint: 6133: 'commons' is declared but its value is never read.
    let commons: any = initDataEventArgs.commons;
    let api: any = initDataEventArgs.commons.api;
    let parameters: any = api.navigation.getCustomDialogParameters();
    entities.Loan = parameters.parameters.loan;
    entities.AmortizationSimulate = [];

    let apiHeader: any = initDataEventArgs.commons.api.cobisPatterns.header;

    initDataEventArgs.commons.api.viewState.hide('VC_HSQKWBMJAF_924316');
    if (initDataEventArgs.commons.api.parentVc?.id == "VC_GENERALIAO_289119") {
      //initDataEventArgs.commons.api.viewState.hide('VC_HSQKWBMJAF_924316');
      apiHeader.loadHeader(false);
    } else {
      //initDataEventArgs.commons.api.viewState.show('VC_HSQKWBMJAF_924316');
      apiHeader.loadHeader(true);
    }
  };

  //Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
  //ViewContainer: SimulateMain
  //designer-hint: 2304: Cannot find name 'task_onCloseModalEvent'.
  //designer-hint: 2304: Cannot find name 'Model'.
  //designer-hint: 2304: Cannot find name 'CobisModelOnCloseModalEventArgs'.
  task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
    onCloseModalEventArgs.commons.execServer = false;

    let cancelModal: any = false;

    if (onCloseModalEventArgs.closedViewContainerId == "VC_NEGOTIATOO_775700") {
      if (typeof onCloseModalEventArgs.result === "boolean") {
        cancelModal = onCloseModalEventArgs.result;
      }
      if (!cancelModal && typeof onCloseModalEventArgs.result.paymentType !== "undefined") {
        entities.Negotiation.paymentType = onCloseModalEventArgs.result.paymentType;
        entities.Negotiation.interestType = onCloseModalEventArgs.result.interestType;
        entities.Negotiation.fullFee = onCloseModalEventArgs.result.fullFee;
        entities.Negotiation.additionalPayments = onCloseModalEventArgs.result.additionalPayments;
        entities.Negotiation.reductionType = onCloseModalEventArgs.result.reductionType;
        entities.Payment.entireFee = onCloseModalEventArgs.result.fullFee ? 'S' : 'N';
        entities.Payment.advance = onCloseModalEventArgs.result.additionalPayments ? 'S' : 'N';
        onCloseModalEventArgs.commons.execServer = true;
      }
    }
  };

  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: SimulateMain
  //designer-hint: 2304: Cannot find name 'task_render'.
  //designer-hint: 2304: Cannot find name 'Model'.
  //designer-hint: 2304: Cannot find name 'CobisModelRenderEventArgs'.
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {

    renderEventArgs.commons.execServer = false;
    //FORMAT DATE
    // TODO
    //designer-hint: 2304: Cannot find name 'kendo'.
    // entities.Loan.startDate = kendo.toString(entities.Loan.startDate, JSON.parse(sessionStorage.dateFormat));
    //designer-hint: 2304: Cannot find name 'kendo'.
    // entities.Loan.endDate = kendo.toString(entities.Loan.endDate, JSON.parse(sessionStorage.dateFormat));
    //designer-hint: 2304: Cannot find name 'kendo'.
    // entities.Loan.feeEndDate = kendo.toString(entities.Loan.feeEndDate, JSON.parse(sessionStorage.dateFormat));
    //designer-hint: 2304: Cannot find name 'kendo'.
    // entities.Loan.lastProcessDate = kendo.toString(entities.Loan.lastProcessDate, JSON.parse(sessionStorage.dateFormat));
    //designer-hint: 2304: Cannot find name 'kendo'.
    // entities.Loan.balanceDue = kendo.toString(entities.Loan.balanceDue, "n");
    //designer-hint: 2304: Cannot find name 'kendo'.
    // entities.Loan.amount = kendo.toString(entities.Loan.amount, "n");
    //designer-hint: 2304: Cannot find name 'kendo'.
    // entities.Loan.nextPayment = kendo.toString(entities.Loan.nextPayment, "n");
    // entities.Payment.processDate = entities.Loan.lastProcessDate;
    //designer-hint: 2304: Cannot find name 'kendo'.
    // entities.Loan.amountApproved = kendo.toString(entities.Loan.amountApproved, "n");
    entities.Loan.startDate = entities.Loan.startDate;
    entities.Loan.endDate = entities.Loan.endDate;
    entities.Loan.feeEndDate = entities.Loan.feeEndDate;
    entities.Loan.lastProcessDate = entities.Loan.lastProcessDate;
    entities.Loan.balanceDue = entities.Loan.balanceDue;
    entities.Loan.amount = entities.Loan.amount;
    entities.Loan.nextPayment = entities.Loan.nextPayment;
    // TODO - Conversion
    entities.Payment.processDate = entities.Loan.lastProcessDate;
    entities.Loan.amountApproved = entities.Loan.amountApproved;
  };


}