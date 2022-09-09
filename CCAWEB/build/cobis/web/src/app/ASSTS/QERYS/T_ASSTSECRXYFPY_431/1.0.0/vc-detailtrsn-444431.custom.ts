import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-detailtrsn-444431.model';
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

/* variables locales de T_ASSTSECRXYFPY_431*/

export class VcDetailtrsn444431Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_ASSTSECRXYFPY_431"



  //DetailTransactionQueryQuery Entity: DetailTransactionQuery
  task_executeQuery_Q_DETARTNC_LQ51 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {

    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().detailTrans.numberLoan;

    executeQueryEventArgs.parameters.secuencial = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().detailTrans.secOpe;

    executeQueryEventArgs.parameters.transaction =
      executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().transaction;

    executeQueryEventArgs.parameters.dateRef =
      executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().detailTrans.transactionRef;

    executeQueryEventArgs.parameters.operation =
      executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().detailTrans.sequential;

    executeQueryEventArgs.parameters.pagDivi = null;

    executeQueryEventArgs.parameters.pagEstado = null;

    if (executeQueryEventArgs.parameters.transaction != 'PRV') {
      executeQueryEventArgs.parameters.pagCon = null;
    } else {
      executeQueryEventArgs.parameters.pagCon =
        executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().detailTrans.transaction;
    }

    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_GS51_LPN26', ['dividend', 'entry', 'state'], executeQueryEventArgs);
    if (executeQueryEventArgs.config?.appendRecords) {
      executeQueryEventArgs.parameters.pagDivi = executeQueryEventArgs.parameters.dividend;
      executeQueryEventArgs.parameters.pagCon = executeQueryEventArgs.parameters.entry;
      executeQueryEventArgs.parameters.pagEstado = executeQueryEventArgs.parameters.state;
      executeQueryEventArgs.parameters.operation = null;
    }



    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.DetailTransactionQuery = true;


  };


  //Start signature to Callback event to Q_DETARTNC_LQ51
  task_executeQueryCallback_Q_DETARTNC_LQ51 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };



}