import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-deferredit-242203.model';
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

/* variables locales de T_ASSTSKMGDPSCM_203*/

export class VcDeferredit242203Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_ASSTSKMGDPSCM_203"





  // (Button) 
  task_executeCommand_VA_VABUTTONJVWDERX_391268 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    let deferred: any = entities.DeferredItemsList;
    let spid: any = 0;
    let reportTitle: any = this.cobis.translate('ASSTS.LBL_ASSTS_IMPRESINN_23469');
    let reportItem: any = "";
    let reportName: any = "DeferredItems";

    if (deferred) {
      spid = deferred.data()[0].sesion;
    }

    let args: any = [
      ['report.module', 'cartera'],
      ['report.name', reportName],
      ['operation', entities.Loan.loanBankID],
      ['operationType', entities.Loan.operationType],
      ['startDate', entities.Loan.startDate],
      ['clientName', entities.Loan.clientName],
      ['currency', entities.Loan.currencyName],
      ['balance', entities.Loan.amount],
      ['office', entities.Loan.office],
      ['officer', entities.Loan.officer],
      ['sesion', spid]
    ];


    this.ASSTS.Utils.generarReporte(reportItem, args, reportTitle);

    executeCommandEventArgs.commons.execServer = false;
  };


  //DeferredItemsListQuery Entity: DeferredItemsList
  task_executeQuery_Q_DEFEMTIT_WQ23 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let deferred: any = executeQueryEventArgs.commons.api.vc.model.DeferredItemsList;
    let exec: any = true;
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().loan.loanBankID;

    executeQueryEventArgs.parameters.opcion = "T";

    //Paginación
    executeQueryEventArgs.parameters.dividend = 0;

    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_JT23_FZW47', ['dividend'], executeQueryEventArgs);
    if (executeQueryEventArgs.config?.appendRecords && executeQueryEventArgs.parameters.dividend != null && deferred) {
      executeQueryEventArgs.parameters.opcion = "S";
      executeQueryEventArgs.parameters.spid = deferred.data()[0].sesion;
      executeQueryEventArgs.parameters.dividend = executeQueryEventArgs.parameters.dividend;
    } else {
      exec = false;
    }

    executeQueryEventArgs.commons.execServer = exec;
  };



  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: DeferredItemsForm
  task_initData_VC_DEFERREDIT_242203 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {

    entities.Loan = initDataEventArgs.commons.api.parentVc?.model.Loan;

    initDataEventArgs.commons.execServer = true;

  };


  //Start signature to Callback event to VC_DEFERREDIT_242203
  task_initDataCallback_VC_DEFERREDIT_242203 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
  ) => {
    if (initDataCallbackEventArgs.success) {

      this.ASSTS.Amortization.showTableAmortization("QV_JT23_FZW47", entities, initDataCallbackEventArgs);

    }
  };




  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: DeferredItemsForm
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    let viewState: any = renderEventArgs.commons.api.viewState;
    let DeferredList: any = entities.DeferredItemsList;

    //botón imprimir
    if (DeferredList && DeferredList.data().length > 0) {
      viewState.show('VA_VABUTTONJVWDERX_391268');
    } else {
      viewState.hide('VA_VABUTTONJVWDERX_391268');
    }

    renderEventArgs.commons.execServer = false;
  };


  //gridRowSelecting QueryView: QV_JT23_FZW47
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_JT23_FZW47 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {
    gridRowSelectingEventArgs.commons.execServer = false;

    //Open Modal
    let nav: any = gridRowSelectingEventArgs.commons.api.navigation;

    nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_DETALLEDI_67713');
    nav.address = {
      moduleId: 'ASSTS',
      subModuleId: 'QERYS',
      taskId: 'T_ASSTSFLSVSFLG_975',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_DEFERREDEA_345975'
    };
    nav.queryParameters = {
      mode: 2
    };
    nav.modalProperties = {
      size: 'md',
      callFromGrid: false
    };
    nav.customDialogParameters = {
      dividend: gridRowSelectingEventArgs.rowData.dividend,
      loanBankID: entities.Loan.loanBankID
    };
    nav.openModalWindow('QV_JT23_FZW47', gridRowSelectingEventArgs.rowData);
  };







}