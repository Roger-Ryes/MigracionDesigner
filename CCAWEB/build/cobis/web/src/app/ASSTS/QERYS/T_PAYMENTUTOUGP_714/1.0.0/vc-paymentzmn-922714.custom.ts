import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-paymentzmn-922714.model';
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

/* variables locales de T_PAYMENTUTOUGP_714*/

export class VcPaymentzmn922714Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_PAYMENTUTOUGP_714"

  //PaymentQuery Entity: 
  task_executeQuery_Q_PAYMENTT_5030 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    if (executeQueryEventArgs.commons.api.parentVc && executeQueryEventArgs.commons.api.parentVc?.id == 'VC_LOANSHISOO_808949') {
      executeQueryEventArgs.parameters.historico = 'S';
    }
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().loan.loanBankID;
    executeQueryEventArgs.parameters.secuencial = 0;
    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_5030_22532', ['sequential'], executeQueryEventArgs);

    if (executeQueryEventArgs.config?.appendRecords) {
      executeQueryEventArgs.parameters.secuencial = executeQueryEventArgs.parameters.sequential;
    }

    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters. = true;
  };


  //Start signature to Callback event to Q_PAYMENTT_5030
  task_executeQueryCallback_Q_PAYMENTT_5030 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };


  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: PaymentQueryForm
  task_initData_VC_PAYMENTZMN_922714 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = false;

  };

  //gridRowSelecting QueryView: QV_5030_22532
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_5030_22532 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {
    gridRowSelectingEventArgs.commons.execServer = false;
    let nav: any = gridRowSelectingEventArgs.commons.api.navigation;

    nav.label = gridRowSelectingEventArgs.commons.api.viewState.translate('ASSTS.LBL_ASSTS_DETALLEAG_48048');
    nav.address = {
      moduleId: 'ASSTS',
      subModuleId: 'QERYS',
      taskId: 'T_PAYMENTDETMFP_722',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_PAYMENTDEE_475722'
    };
    nav.queryParameters = {
      mode: gridRowSelectingEventArgs.commons.constants.mode.Update
    };
    nav.modalProperties = {
      size: 'lg'
    };
    nav.customDialogParameters = {
      sequentialIns: gridRowSelectingEventArgs.rowData.sequential,
      loanBankID: gridRowSelectingEventArgs.commons.api.navigation.getCustomDialogParameters().operation
    };
    nav.openModalWindow("QV_5030_22532", gridRowSelectingEventArgs.rowData);
  };


}