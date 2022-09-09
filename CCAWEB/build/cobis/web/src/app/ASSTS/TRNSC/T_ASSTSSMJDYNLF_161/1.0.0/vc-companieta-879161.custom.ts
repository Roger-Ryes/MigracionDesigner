import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-companieta-879161.model';
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

/* variables locales de T_ASSTSSMJDYNLF_161*/

export class VcCompanieta879161Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_ASSTSSMJDYNLF_161"



  //CompaniesBatchListQuery Entity: CompaniesBatchList
  task_executeQuery_Q_COMPATAT_EY63 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let execServer: any = false;
    let api: any = executeQueryEventArgs.commons.api;
    let mode: any = executeQueryEventArgs.commons.constants.mode;
    if (api.vc.mode == mode.Query) {
      if (api.parentVc && (api.parentVc.id == 'VC_COMPANIECR_302580')) {
        let nav: any = api.navigation;
        if (nav.getCustomDialogParameters()) {
          executeQueryEventArgs.parameters.institution = nav.getCustomDialogParameters().company;
          execServer = true;
        }
      }
    }
    executeQueryEventArgs.commons.execServer = execServer;
    //executeQueryEventArgs.commons.serverParameters.CompaniesBatchList = true;
  };


  //Start signature to Callback event to Q_COMPATAT_EY63
  task_executeQueryCallback_Q_COMPATAT_EY63 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };




  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: CompaniesBatchForm
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    renderEventArgs.commons.execServer = false;
    renderEventArgs.commons.api.grid.refresh("QV_OM63_SRI96");
  };


  //gridRowSelecting QueryView: QV_OM63_SRI96
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_OM63_SRI96 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {
    gridRowSelectingEventArgs.commons.execServer = false;
    let api: any = gridRowSelectingEventArgs.commons.api;
    if (api.parentVc && (api.parentVc.id == 'VC_COMPANIECR_302580')) {
      api.vc.closeModal({
        response: {
          data: gridRowSelectingEventArgs.rowData
        }
      });
    }
  };


}