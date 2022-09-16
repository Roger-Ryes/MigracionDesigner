import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-batchmasss-336618.model';
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

/* variables locales de T_LNSPRWQVPGSSG_618*/
let numRep: any;

let count: any = 0;
let limit: any = 250;

export class VcBatchmasss336618Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_LNSPRWQVPGSSG_618"


  // (Button) 
  task_executeCommand_CM_TLNSPRWQ_853 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = true;
    let auxList: any = entities.MassivePayments.slice(count * limit, (count * limit) + limit);
    entities.Payment = auxList;
    entities.LoanSearchFilter.sequential = numRep;
    if (count == 0) {
      executeCommandEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_SEPROCEED_91441', false, [numRep], this.LNSPR.timer);
    }
  };

  //Start signature to Callback event to CM_TLNSPRWQ_853
  task_executeCommandCallback_CM_TLNSPRWQ_853 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_TLNSPRWQ_853');
    if (executeCommandCallbackEventArgs.success) {
      numRep = numRep - 1;
      for (let i: any = 0; i < entities.Payment.length; i++) {
        entities.MassivePayments[i + (count * limit)].sequentialPM = entities.Payment[i].sequentialPM;
        entities.MassivePayments[i + (count * limit)].lotePM = entities.Payment[i].lotePM;
      }

      if (numRep > 0) {
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_BLOQUEPOR_62315', false, [count + 1], this.LNSPR.timer);
        count++;
        // TODO - ALE - REFACTORIZAR
        executeCommandCallbackEventArgs.commons.api.vc.executeCommand('CM_TLNSPRWQ_853', 'MassivePayments', undefined, true, false, 'VC_BATCHMASSS_336618', false);
        return;
      }

      if (entities.ErrorMassivePayments.length >= 2) {
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_ALGUNASER_66108", false, null, this.LNSPR.timer);

      } else {
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_TRANSMION_38404", false, null, this.LNSPR.timer);
      }

    }
  };


  // (Button) 
  task_executeCommand_CM_TLNSPRWQ_N5S = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;

    let idAux: any = this.cobis.container.tabs.getCurrentTab().id;
    let urlAux: any = this.cobis.container.tabs.getCurrentTab().url;
    let nameAux: any = undefined;

    if (this.cobis.container.tabs.getCurrentTab().name != undefined) {
      nameAux = this.cobis.container.tabs.getCurrentTab().name;
    } else {
      nameAux = this.cobis.translate("LNSPR.LBL_LNSPR_PAGOSMAIV_19760");
    }

    this.LNSPR.container.changeCurrentTab(idAux, urlAux, nameAux, true);
  };


  //Entity: LoanSearchFilter
  //LoanSearchFilter.archivo (FileUpload) View: BatchMassivePaymentsForm
  //Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
  task_executeCommand_VA_ARCHIVORFAULKWH_987436 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    let fileUpload: any = executeCommandEventArgs.commons.api.viewState.fileUpload('VA_ARCHIVORFAULKWH_987436');
    fileUpload.setConfirmUpload(false);
    fileUpload.setRelativePath('loans-files');
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.LoanSearchFilter = true;
  };


  //Start signature to Callback event to VA_ARCHIVORFAULKWH_987436
  task_executeCommandCallback_VA_ARCHIVORFAULKWH_987436 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    entities.LoanSearchFilter.category = null;
    if (!executeCommandCallbackEventArgs.success) {
      executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_TLNSPRWQ_853');
    } else {
      executeCommandCallbackEventArgs.commons.api.viewState.enable('CM_TLNSPRWQ_853');
      numRep = Math.ceil(entities.MassivePayments.length / limit);
    }
  };



  //MassivePaymentsQuery Entity: MassivePayments
  task_executeQuery_Q_MASSTENM_SJ71 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.MassivePayments = true;
  };

  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: BatchMassivePaymentsForm
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {

    renderEventArgs.commons.execServer = false;
    renderEventArgs.commons.api.viewState.disable('CM_TLNSPRWQ_853');

  };



  //gridRowSelecting QueryView: QV_WR71_MYK57
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_WR71_MYK57 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.execServer = false;

  };







}