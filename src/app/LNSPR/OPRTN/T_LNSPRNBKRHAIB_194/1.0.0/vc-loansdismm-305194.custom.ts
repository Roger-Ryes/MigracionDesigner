import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-loansdismm-305194.model';
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

/* variables locales de T_LNSPRNBKRHAIB_194*/

export class VcLoansdismm305194Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_LNSPRNBKRHAIB_194"


  // (Button) 
  task_executeCommand_VA_VABUTTONBPDWGMJ_893520 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {


    entities.Members.member = null;
    entities.Members.currency = null;
    entities.Members.amount = null;
    entities.Members.used = 0;
    entities.Members.available = 0;
    entities.Members.observations = null;
    entities.Members.control = 'N';
    entities.Members.editionMode = executeCommandEventArgs.commons.constants.mode.Insert;

    executeCommandEventArgs.commons.api.viewState.enable('VA_1400AYLTCGPSEMN_795520');
    executeCommandEventArgs.commons.api.viewState.enable('VA_3878VMYWQJKGBUI_207520');

    executeCommandEventArgs.commons.execServer = false;

  };




  // (Button) 
  task_executeCommand_VA_VABUTTONQQAURTL_245520 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters. = true;

  };

  //Start signature to Callback event to VA_VABUTTONQQAURTL_245520
  task_executeCommandCallback_VA_VABUTTONQQAURTL_245520 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    if (executeCommandCallbackEventArgs.success) {

      entities.Members.editionMode = executeCommandCallbackEventArgs.commons.constants.mode.Insert;
      entities.Members.member = null;
      entities.Members.currency = null;
      entities.Members.amount = null;
      entities.Members.used = 0;
      entities.Members.available = 0;
      entities.Members.observations = null;
      entities.Members.control = 'N';

      executeCommandCallbackEventArgs.commons.api.parentVc!.viewState.G_LOANLINRER_722461.visible = true;
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_OPERACIOA_60671', false, null, this.LNSPR.timer);
      executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_NW92_QCN40');

    }



  };



  //GroupMembersLineListQuery Entity: GroupMembersLineList
  task_executeQuery_Q_GROUEIRS_WN63 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.linea = executeQueryEventArgs.commons.api.vc.model.Members.sequential;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.GroupMembersLineList = true;
  };


  //Start signature to Callback event to Q_GROUEIRS_WN63
  task_executeQueryCallback_Q_GROUEIRS_WN63 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };


  //MemberDetailQuery Entity: MemberDetail
  task_executeQuery_Q_MEMBIAAA_BE92 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.vc.model.Members.codLine;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.MemberDetail = true;
  };


  //Start signature to Callback event to Q_MEMBIAAA_BE92
  task_executeQueryCallback_Q_MEMBIAAA_BE92 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };


  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: LoansDistributionMembers
  task_initData_VC_LOANSDISMM_305194 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {

    entities.Members.editionMode = initDataEventArgs.commons.constants.mode.Insert;
    if (initDataEventArgs.commons.api.vc.mode == initDataEventArgs.commons.constants.mode.Insert) {

      entities.Members.sequential = initDataEventArgs.commons.api.parentVc?.model.LoanLinesCreation.sequential;
      entities.Members.codLine = initDataEventArgs.commons.api.parentVc?.model.LoanLinesCreation.lineCode;
      entities.Members.used = 0;
      entities.Members.available = 0;
      entities.Members.control = 'N';

      initDataEventArgs.commons.execServer = false;

    } else if (initDataEventArgs.commons.api.vc.mode == initDataEventArgs.commons.constants.mode.Query) {

      entities.Members.codLine = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().codLinea;

      initDataEventArgs.commons.execServer = false;
    } else if (initDataEventArgs.commons.api.vc.mode == initDataEventArgs.commons.constants.mode.Update) {
      entities.Members.sequential = initDataEventArgs.commons.api.parentVc?.model.LoanLinesCreation.sequential;
      entities.Members.codLine = initDataEventArgs.commons.api.parentVc?.model.LoanLinesCreation.lineCode;
      entities.Members.used = 0;
      entities.Members.available = 0;
      entities.Members.control = 'N';
      initDataEventArgs.commons.execServer = false;
    }




  };



  //gridRowDeleting QueryView: QV_NW92_QCN40
  //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
  task_gridRowDeleting_QV_NW92_QCN40 = (
    entities: Model,
    gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
  ) => {

    gridRowDeletingEventArgs.commons.execServer = true;
    //gridRowDeletingEventArgs.commons.serverParameters.MemberDetail = true;

  };






  //Start signature to Callback event to QV_NW92_QCN40
  task_gridRowDeletingCallback_QV_NW92_QCN40 = (
    entities: Model,
    gridRowDeletingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
  ) => {
    if (gridRowDeletingCallbackEventArgs.success) {
      gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.LBL_LNSPR_ELIMINATR_48672', false, null, this.LNSPR.timer);
      gridRowDeletingCallbackEventArgs.commons.api.grid.refresh('QV_NW92_QCN40');
    }

  };


  //gridRowSelecting QueryView: QV_NW92_QCN40
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_NW92_QCN40 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.execServer = false;
    if (gridRowSelectingEventArgs.commons.api.vc.mode == gridRowSelectingEventArgs.commons.constants.mode.Update) {
      entities.Members.editionMode = gridRowSelectingEventArgs.commons.constants.mode.Update;
      gridRowSelectingEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.LBL_LNSPR_EDICINHAI_74003', false, null, this.LNSPR.timer);
      entities.Members.member = gridRowSelectingEventArgs.rowData.codeMember;
      entities.Members.amount = gridRowSelectingEventArgs.rowData.amount;
      entities.Members.control = gridRowSelectingEventArgs.rowData.controlAmount;
      entities.Members.observations = gridRowSelectingEventArgs.rowData.observations;
      entities.Members.currency = gridRowSelectingEventArgs.rowData.currency;
      entities.Members.used = gridRowSelectingEventArgs.rowData.used;
      entities.Members.available = gridRowSelectingEventArgs.rowData.available;

      gridRowSelectingEventArgs.commons.api.viewState.disable('VA_1400AYLTCGPSEMN_795520');
      gridRowSelectingEventArgs.commons.api.viewState.disable('VA_3878VMYWQJKGBUI_207520');
    }


  };



}