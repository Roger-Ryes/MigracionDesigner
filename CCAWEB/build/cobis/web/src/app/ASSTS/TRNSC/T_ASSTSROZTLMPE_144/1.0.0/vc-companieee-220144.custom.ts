import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-companieee-220144.model';
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

/* variables locales de T_ASSTSROZTLMPE_144*/

export class VcCompanieee220144Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_ASSTSROZTLMPE_144"



  //CompaniesListQuery Entity: CompaniesList
  task_executeQuery_Q_COMPIISI_NI17 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let model: any = executeQueryEventArgs.commons.api.vc.model;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.CompaniesList = true;
    executeQueryEventArgs.parameters.institution = model.CompaniesSearchFilter.institution;
    executeQueryEventArgs.parameters.ruc = model.CompaniesSearchFilter.ruc;
    executeQueryEventArgs.parameters.companyName = model.CompaniesSearchFilter.companyName;
  };


  //Start signature to Callback event to Q_COMPIISI_NI17
  task_executeQueryCallback_Q_COMPIISI_NI17 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code

  };




  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: CompaniesSearchForm
  task_initData_VC_COMPANIEEE_220144 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = false;
    //initDataEventArgs.commons.serverParameters.entityName = true;
  };



  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: CompaniesSearchForm
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    renderEventArgs.commons.execServer = false;
    let api: any = renderEventArgs.commons.api;
    api.grid.refresh('QV_ON17_ABV99');

    if (api.parentVc && (
        api.parentVc.id == 'VC_REPAYMENTT_461527' ||
        api.parentVc.id == 'VC_COMPANIECR_302580'
      )) {
      api.viewState.hide('G_COMPANIHER_604223');
    }
  };


  //gridRowDeleting QueryView: QV_ON17_ABV99
  //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
  task_gridRowDeleting_QV_ON17_ABV99 = (
    entities: Model,
    gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
  ) => {

    gridRowDeletingEventArgs.commons.execServer = true;
    //gridRowDeletingEventArgs.commons.serverParameters.CompaniesList = true;

  };







  //Start signature to Callback event to QV_ON17_ABV99
  task_gridRowDeletingCallback_QV_ON17_ABV99 = (
    entities: Model,
    gridRowDeletingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
  ) => {
    //here your code
    if (gridRowDeletingCallbackEventArgs.success) {
      gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ELIMINAET_70731', false, null, timer);
    }
  };



  //gridRowSelecting QueryView: QV_ON17_ABV99
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_ON17_ABV99 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {
    gridRowSelectingEventArgs.commons.execServer = false;
    let api: any = gridRowSelectingEventArgs.commons.api;

    if (api.parentVc && (
        api.parentVc.id == 'VC_REPAYMENTT_461527' ||
        api.parentVc.id == 'VC_COMPANIECR_302580'
      )) {
      api.vc.closeModal({
        response: {
          institution: gridRowSelectingEventArgs.rowData.institution,
          companyName: gridRowSelectingEventArgs.rowData.companyName
        }
      });
    }
  };







  //gridRowUpdating QueryView: QV_ON17_ABV99
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowUpdating_QV_ON17_ABV99 = (
    entities: Model,
    gridRowUpdatingEventArgs: CobisModelGridRowActionEventArgs
  ) => {

    gridRowUpdatingEventArgs.commons.execServer = false;

  };







}