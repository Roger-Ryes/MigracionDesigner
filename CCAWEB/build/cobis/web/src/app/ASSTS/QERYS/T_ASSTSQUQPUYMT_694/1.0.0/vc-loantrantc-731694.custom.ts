import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-loantrantc-731694.model';
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

/* variables locales de T_ASSTSQUQPUYMT_694*/

export class VcLoantrantc731694Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_ASSTSQUQPUYMT_694"


  //ActiveTransactionQuery Entity: ActiveTransaction
  task_executeQuery_Q_ACTIERNI_WO73 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    if (executeQueryEventArgs.commons.api.parentVc && executeQueryEventArgs.commons.api.parentVc?.id == 'VC_LOANSHISOO_808949') {
      executeQueryEventArgs.parameters.historico = 'S';
    }
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.parentVc?.model.Loan.loanBankID;
    executeQueryEventArgs.parameters.secuencial = 0;
    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_HK73_UEC23', ['secuential'], executeQueryEventArgs);
    if (executeQueryEventArgs.config?.appendRecords) {
      executeQueryEventArgs.parameters.secuencial = executeQueryEventArgs.parameters.secuential;
    }
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.ActiveTransaction = true;
  };


  //Start signature to Callback event to Q_ACTIERNI_WO73
  task_executeQueryCallback_Q_ACTIERNI_WO73 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {

    //here your code
  };


  //CausationQuery Entity: Causation
  task_executeQuery_Q_CAUSAONT_HU91 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let listCausation: any = executeQueryEventArgs.commons.api.vc.model.Causation;

    if (executeQueryEventArgs.commons.api.parentVc && executeQueryEventArgs.commons.api.parentVc?.id == 'VC_LOANSHISOO_808949') {
      executeQueryEventArgs.parameters.historico = 'S';
    }
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.parentVc?.model.Loan.loanBankID;
    executeQueryEventArgs.parameters.secuencial = 0;

    if (executeQueryEventArgs.config?.appendRecords && listCausation) {
      executeQueryEventArgs.parameters.secuencial = listCausation.data().length;;
    }
    executeQueryEventArgs.commons.execServer = true;
  };


  //Start signature to Callback event to Q_CAUSAONT_HU91
  task_executeQueryCallback_Q_CAUSAONT_HU91 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };


  //ReversedTransactionQuery Entity: ReversedTransaction
  task_executeQuery_Q_REVESETA_RO55 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    if (executeQueryEventArgs.commons.api.parentVc && executeQueryEventArgs.commons.api.parentVc?.id == 'VC_LOANSHISOO_808949') {
      executeQueryEventArgs.parameters.historico = 'S';
    }
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.parentVc?.model.Loan.loanBankID;
    executeQueryEventArgs.parameters.secuencial = 0;
    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_OB55_ZQG31', ['secuential'], executeQueryEventArgs);
    if (executeQueryEventArgs.config?.appendRecords) {
      executeQueryEventArgs.parameters.secuencial = executeQueryEventArgs.parameters.secuential;
    }
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.ReversedTransaction = true;
  };


  //Start signature to Callback event to Q_REVESETA_RO55
  task_executeQueryCallback_Q_REVESETA_RO55 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };


  //gridRowSelecting QueryView: QV_HK73_UEC23
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_HK73_UEC23 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {
    //Open Modal
    let nav: any = gridRowSelectingEventArgs.commons.api.navigation;

    nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_DETALLEFN_34994');
    nav.address = {
      moduleId: 'ASSTS',
      subModuleId: 'QERYS',
      taskId: 'T_ASSTSXYNOAKAL_995',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_LOANTRANCL_595995'
    };

    nav.queryParameters = {
      mode: 8
    };
    nav.modalProperties = {
      size: 'lg',
      callFromGrid: false
    };

    nav.customDialogParameters = {
      secuential: gridRowSelectingEventArgs.rowData.secuential,
      bankId: gridRowSelectingEventArgs.commons.api.parentVc?.model.Loan.loanBankID

    };

    //Si la llamada es desde un evento de un control perteneciente a la cabecera de la página
    //nav.openModalWindow(gridRowSelectingEventArgs.commons.controlId, null);
    //Si la llamada es desde un evento de un control perteneciente a una grilla de la página
    nav.openModalWindow('QV_HK73_UEC23', gridRowSelectingEventArgs.modelRow);


    gridRowSelectingEventArgs.commons.execServer = false;
  };



  //gridRowSelecting QueryView: QV_IY91_WMD36
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_IY91_WMD36 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.execServer = false;

  };






  //gridRowSelecting QueryView: QV_OB55_ZQG31
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_OB55_ZQG31 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {
    //Open Modal
    let nav: any = gridRowSelectingEventArgs.commons.api.navigation;

    nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_DETALLEFN_34994');
    nav.address = {
      moduleId: 'ASSTS',
      subModuleId: 'QERYS',
      taskId: 'T_ASSTSXYNOAKAL_995',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_LOANTRANCL_595995'
    };

    nav.queryParameters = {
      mode: 8
    };
    nav.modalProperties = {
      size: 'lg',
      callFromGrid: false
    };

    nav.customDialogParameters = {
      secuential: gridRowSelectingEventArgs.rowData.secuential,
      bankId: gridRowSelectingEventArgs.commons.api.parentVc?.model.Loan.loanBankID

    };

    //Si la llamada es desde un evento de un control perteneciente a la cabecera de la página
    //nav.openModalWindow(gridRowSelectingEventArgs.commons.controlId, null);
    //Si la llamada es desde un evento de un control perteneciente a una grilla de la página
    nav.openModalWindow('QV_OB55_ZQG31', gridRowSelectingEventArgs.modelRow);
    gridRowSelectingEventArgs.commons.execServer = false;
  };



}