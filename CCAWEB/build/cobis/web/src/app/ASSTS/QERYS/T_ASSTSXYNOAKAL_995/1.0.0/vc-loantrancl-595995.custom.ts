import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-loantrancl-595995.model';
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

/* variables locales de T_ASSTSXYNOAKAL_995*/

export class VcLoantrancl595995Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_ASSTSXYNOAKAL_995"


  //DetailTransactionQuery Entity: DetailTransaction
  task_executeQuery_Q_DETASSOL_MC22 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {

    if (executeQueryEventArgs.commons.api.parentApi()?.parentVc && executeQueryEventArgs.commons.api.parentApi()?.parentVc?.id == 'VC_LOANSHISOO_808949') {
      executeQueryEventArgs.parameters.historico = 'S';
    }
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().bankId;
    executeQueryEventArgs.parameters.secuencial = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().secuential;
    executeQueryEventArgs.parameters.dividendo = null;
    executeQueryEventArgs.parameters.concepto = null;
    executeQueryEventArgs.parameters.estado = null;

    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_RT22_BLD64', ['dividend', 'heading', 'state'], executeQueryEventArgs);
    if (executeQueryEventArgs.config?.appendRecords) {
      executeQueryEventArgs.parameters.dividendo = executeQueryEventArgs.parameters.dividend;
      executeQueryEventArgs.parameters.concepto = executeQueryEventArgs.parameters.heading;
      executeQueryEventArgs.parameters.estado = executeQueryEventArgs.parameters.state;
    }
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.DetailTransaction = true;
  };


  //Start signature to Callback event to Q_DETASSOL_MC22
  task_executeQueryCallback_Q_DETASSOL_MC22 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };




  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: LoanTransactionDetailForm
  task_initData_VC_LOANTRANCL_595995 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {

    initDataEventArgs.commons.execServer = false;

  };


  //gridRowSelecting QueryView: QV_RT22_BLD64
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_RT22_BLD64 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.execServer = false;

  };







}