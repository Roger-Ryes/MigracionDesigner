import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-quotadetaa-445745.model';
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

/* variables locales de T_QUOTADETAISOY_745*/

export class VcQuotadetaa445745Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_QUOTADETAISOY_745"


  /**
   * Event:           executeQuery
   * ID:              Q_QUOTEDPM_4705
   * Description:     Event that's executed an execute query event on the server side.
   */
  task_executeQuery_Q_QUOTEDPM_4705 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_4705_99765', ['numQuote'], executeQueryEventArgs);
    executeQueryEventArgs.parameters.tipoCobro = executeQueryEventArgs.commons.api.parentVc?.model.Negotiation.interestType;
    executeQueryEventArgs.commons.execServer = true;
  };


  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: QuotaDetailPaymentsModal
  task_initData_VC_QUOTADETAA_445745 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = false;
  };



  //gridRowSelecting QueryView: QV_4705_99765
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_4705_99765 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.execServer = false;

  };







}