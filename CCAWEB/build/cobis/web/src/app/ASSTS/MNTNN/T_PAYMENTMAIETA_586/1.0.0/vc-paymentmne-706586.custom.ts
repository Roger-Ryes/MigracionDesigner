import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-paymentmne-706586.model';
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

/* variables locales de T_PAYMENTMAIETA_586*/

export class VcPaymentmne706586Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_PAYMENTMAIETA_586"

  //MethodsRetentionQuery Entity: 
  task_executeQuery_Q_METHODIR_7546 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters. = true;
  };

  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: Payment maintenance
  task_initData_VC_PAYMENTMNE_706586 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = false;
    //initDataEventArgs.commons.serverParameters.entityName = true;
  };

  //Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
  //ViewContainer: Payment maintenance
  task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
    onCloseModalEventArgs.commons.execServer = false;
    let isAccept: any;


    if (typeof onCloseModalEventArgs.result === "boolean") {
      isAccept = onCloseModalEventArgs.result;
    }
    if (isAccept) {
      onCloseModalEventArgs.commons.api.grid.refresh("QV_7546_25470");
      //onCloseModalEventArgs.commons.api.grid.refresh("QV_7546_25470",{param:{}});
    }
  };

  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: Payment maintenance
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    renderEventArgs.commons.execServer = false;
  };

  //gridRowDeleting QueryView: QV_7546_25470
  //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
  task_gridRowDeleting_QV_7546_25470 = (
    entities: Model,
    gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
  ) => {
    gridRowDeletingEventArgs.commons.execServer = true;
    //gridRowDeletingEventArgs.commons.serverParameters.MethodsRetention = true;
  };

  //Start signature to callBack event to QV_7546_25470
  task_gridRowDeletingCallback_QV_7546_25470 = (
    entities: Model,
    gridRowDeletingEventArgs: CobisModelGridRowActionCallbackEventArgs
  ) => {
    if (gridRowDeletingEventArgs.success) {
      gridRowDeletingEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_ELIMINAET_70731", false, null, this.ASSTS.timer);
    }
  };


  //gridRowSelecting QueryView: QV_7546_25470
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_7546_25470 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.execServer = false;

  };







}