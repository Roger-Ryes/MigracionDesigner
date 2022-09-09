import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-loandebolr-210579.model';
import {
  LNSPRService
} from "src/app/LNSPR/service-modules/LNSPR.service";
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

/* variables locales de T_LNSPRWENJKGKJ_579*/

export class VcLoandebolr210579Custom extends CobisDesignerCustomEvent {

  task_changeWithError: any = {};

  constructor(public cobis: CobisCommonsService, private LNSPR: LNSPRService) {
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

  //"TaskId": "T_LNSPRWENJKGKJ_579"



  //DebtorListQuery Entity: DebtorList
  task_executeQuery_Q_DEBTSOLR_XT44 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let nav: any = executeQueryEventArgs.commons.api.navigation;
    if (nav.getCustomDialogParameters() && nav.getCustomDialogParameters().bankId) {
      executeQueryEventArgs.parameters.bankId = nav.getCustomDialogParameters().bankId;
    }
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.DebtorList = true;
  };


  //Start signature to Callback event to Q_DEBTSOLR_XT44
  task_executeQueryCallback_Q_DEBTSOLR_XT44 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };




  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: LoanDebtorList
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    renderEventArgs.commons.execServer = false;
    let api: any = renderEventArgs.commons.api;
    api.grid.refresh('QV_VI44_NQR57');
  };


  //gridRowSelecting QueryView: QV_VI44_NQR57
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_VI44_NQR57 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {
    gridRowSelectingEventArgs.commons.execServer = false;
    let api: any = gridRowSelectingEventArgs.commons.api;
    if (api.parentVc && (api.parentVc.id == 'VC_REPAYMENTT_461527')) {
      api.vc.closeModal({
        response: {
          customerID: gridRowSelectingEventArgs.rowData.client,
          customerName: gridRowSelectingEventArgs.rowData.clientName,
          role: gridRowSelectingEventArgs.rowData.clientRol
        }
      });
    }
  };







}