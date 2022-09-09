import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-loansliner-641705.model';
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

/* variables locales de T_LNSPRQGEMJIOM_705*/

export class VcLoansliner641705Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_LNSPRQGEMJIOM_705"


  //Entity: LoansLineGuarantee
  //LoansLineGuarantee.client (TextInputButton) View: LoansLineGuaranteesForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_1SNQSNEUKHHSXYG_701308 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    if (!changedEventArgs.newValue)
      entities.LoansLineGuarantee.clientCode = null;

  };


  //Entity: LoansLineGuarantee
  //LoansLineGuarantee.guaranteeType (TextInputButton) View: LoansLineGuaranteesForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_3IGDRVHQOABVMRS_328308 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    if (!changedEventArgs.newValue)
      entities.LoansLineGuarantee.guaranteeTypeCode = null;

  };


  // (Button) 
  task_executeCommand_VA_VABUTTONUIUNGEV_823308 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {

    entities.LoansLineGuarantee.guarantee = null;
    entities.LoansLineGuarantee.guaranteeValue = null;
    entities.LoansLineGuarantee.type = null;
    entities.LoansLineGuarantee.client = null;
    entities.LoansLineGuarantee.clientCode = null;
    entities.LoansLineGuarantee.guaranteeType = null;
    entities.LoansLineGuarantee.guaranteeTypeCode = null;
    executeCommandEventArgs.commons.api.viewState.disable('VA_VABUTTONZLYUQVN_789308');

    executeCommandEventArgs.commons.execServer = false;

  };




  // (Button) 
  task_executeCommand_VA_VABUTTONZLYUQVN_789308 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {

    executeCommandEventArgs.commons.execServer = true;

    //executeCommandEventArgs.commons.serverParameters. = true;

  };


  //Start signature to Callback event to VA_VABUTTONZLYUQVN_789308
  task_executeCommandCallback_VA_VABUTTONZLYUQVN_789308 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    if (executeCommandCallbackEventArgs.success) {
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_OPERACIOA_60671', false, null, timer);
      executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_ZZ84_YVC22');

    }
  };



  //LineGuaranteesAssociatedListQuery Entity: LineGuaranteesAssociatedList
  task_executeQuery_Q_LINELAAN_WU84 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.modo = 0;
    if (executeQueryEventArgs.config?.appendRecords) {
      executeQueryEventArgs.parameters.modo = 1;
    }
    executeQueryEventArgs.parameters.tramite = executeQueryEventArgs.commons.api.vc.model.ValidationProcedure.procedure;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.LineGuaranteesAssociatedList = true;
  };


  //Start signature to Callback event to Q_LINELAAN_WU84
  task_executeQueryCallback_Q_LINELAAN_WU84 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };


  //LineGuaranteesListQuery Entity: LineGuaranteesList
  task_executeQuery_Q_LINERLAR_KA20 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.modo = 0;
    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_KB20_UZG21', ['guarantee'], executeQueryEventArgs);
    if (executeQueryEventArgs.config?.appendRecords) {
      executeQueryEventArgs.parameters.modo = 1;
      executeQueryEventArgs.parameters.custodia = executeQueryEventArgs.parameters.guarantee;
    }
    executeQueryEventArgs.parameters.tipo = executeQueryEventArgs.commons.api.vc.model.LoansLineGuarantee.guaranteeTypeCode;
    executeQueryEventArgs.parameters.cliente = executeQueryEventArgs.commons.api.vc.model.LoansLineGuarantee.clientCode;
    executeQueryEventArgs.parameters.estado = executeQueryEventArgs.commons.api.vc.model.LoansLineGuarantee.guaranteeStatus;

    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.LineGuaranteesList = true;
  };



  //Start signature to Callback event to Q_LINERLAR_KA20
  task_executeQueryCallback_Q_LINERLAR_KA20 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };


  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: LoansLineGuaranteesForm
  task_initData_VC_LOANSLINER_641705 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {

    initDataEventArgs.commons.api.viewState.disable('VA_VABUTTONZLYUQVN_789308');


    if (initDataEventArgs.commons.api.vc.mode == initDataEventArgs.commons.constants.mode.Insert) {
      entities.LoansLineGuarantee.guaranteeStatus = 'V';
      entities.LoansLineGuarantee.sequential = initDataEventArgs.commons.api.parentVc?.model.LoanLinesCreation.sequential;
      entities.LoansLineGuarantee.codLine = initDataEventArgs.commons.api.parentVc?.model.LoanLinesCreation.lineCode;

      initDataEventArgs.commons.execServer = false;

    } else if (initDataEventArgs.commons.api.vc.mode == initDataEventArgs.commons.constants.mode.Query) {

      entities.LoansLineGuarantee.codLine = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().codLinea;

      initDataEventArgs.commons.execServer = true;
    } else if (initDataEventArgs.commons.api.vc.mode == initDataEventArgs.commons.constants.mode.Update) {
      entities.LoansLineGuarantee.guaranteeStatus = 'V';
      entities.LoansLineGuarantee.sequential = initDataEventArgs.commons.api.parentVc?.model.LoanLinesCreation.sequential;
      entities.LoansLineGuarantee.codLine = initDataEventArgs.commons.api.parentVc?.model.LoanLinesCreation.lineCode;


      initDataEventArgs.commons.execServer = true;
    }




  };



  //Start signature to Callback event to VC_LOANSLINER_641705
  task_initDataCallback_VC_LOANSLINER_641705 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
  ) => {


  };


  //Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
  //ViewContainer: LoansLineGuaranteesForm
  task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
    onCloseModalEventArgs.commons.execServer = false;
    let search: any = entities.LoansLineGuarantee;
    let tg: any = onCloseModalEventArgs.result.tipoGarantia;
    let nav: any = onCloseModalEventArgs.commons.api.navigation;

    if (tg) {
      let tip: any = tg.tipo;
      let des: any = tg.descripcion;
      search.guaranteeType = tip + ' - ' + des;
      search.guaranteeTypeCode = tip;
    }

    if (onCloseModalEventArgs.closedViewContainerId == "findCustomer" &&
      onCloseModalEventArgs.dialogCloseType == onCloseModalEventArgs.commons.constants.dialogCloseType.Interactive) {
      let data: any = onCloseModalEventArgs.result.selectedData;
      if (data) {
        entities.LoansLineGuarantee.clientCode = data.code;
        entities.LoansLineGuarantee.client = data.code + " - " + data.name;

      }
    }
  };




  //Entity: Entity5
  //Entity5.attribute1 (TextInputButton) View: LoansLineGuaranteesForm
  task_textInputButtonEvent_VA_1SNQSNEUKHHSXYG_701308 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;
    let nav: any = textInputButtonEventArgs.commons.api.navigation;
    nav.customAddress = {
      id: "findCustomer",
      url: "customer/templates/find-customers-tpl.html"
    };
    nav.modalProperties = {
      size: 'lg'
    };
    nav.scripts = [{
      module: this.cobis.modules.CUSTOMER,
      files: [
        "/customer/services/find-customers-srv.js",
        "/customer/controllers/find-customers-ctrl.js"
      ]
    }];


    textInputButtonEventArgs.commons.execServer = false;
  };



  //Entity: Entity5
  //Entity5.attribute3 (TextInputButton) View: LoansLineGuaranteesForm
  task_textInputButtonEvent_VA_3IGDRVHQOABVMRS_328308 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;
    let nav: any = textInputButtonEventArgs.commons.api.navigation;
    nav.label = this.cobis.translate('CLLTL.LBL_CLLTL_TIPOGARAT_73165');
    nav.address = {
      moduleId: 'CLLTL',
      subModuleId: 'TRNSC',
      taskId: 'T_CLLTLCYJZJZQF_906',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_GUARANTETY_611906'
    };
    nav.queryParameters = {
      mode: 8
    };
  };


  //gridRowDeleting QueryView: QV_ZZ84_YVC22
  //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
  task_gridRowDeleting_QV_ZZ84_YVC22 = (
    entities: Model,
    gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
  ) => {

    gridRowDeletingEventArgs.commons.execServer = true;
    //gridRowDeletingEventArgs.commons.serverParameters.LineGuaranteesAssociatedList = true;

  };







  //Start signature to Callback event to QV_ZZ84_YVC22
  task_gridRowDeletingCallback_QV_ZZ84_YVC22 = (
    entities: Model,
    gridRowDeletingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
  ) => {
    if (gridRowDeletingCallbackEventArgs.success) {
      gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.LBL_LNSPR_ELIMINATR_48672', false, null, timer);
    }
  };


  //gridRowSelecting QueryView: QV_KB20_UZG21
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_KB20_UZG21 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    entities.LoansLineGuarantee.guarantee = gridRowSelectingEventArgs.rowData.code;
    entities.LoansLineGuarantee.guaranteeValue = gridRowSelectingEventArgs.rowData.initialValue;
    entities.LoansLineGuarantee.type = gridRowSelectingEventArgs.rowData.type;
    entities.LoansLineGuarantee.classe = gridRowSelectingEventArgs.rowData.clase;
    entities.LoansLineGuarantee.clientGar = gridRowSelectingEventArgs.rowData.clientGar;

    gridRowSelectingEventArgs.commons.api.viewState.enable('VA_VABUTTONZLYUQVN_789308');
    gridRowSelectingEventArgs.commons.execServer = false;

  };



  //gridRowSelecting QueryView: QV_ZZ84_YVC22
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_ZZ84_YVC22 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.execServer = false;

  };







}