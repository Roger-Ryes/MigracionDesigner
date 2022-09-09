import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-projectirj-862619.model';
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

/* variables locales de T_ASSTSPENVMXNQ_619*/

export class VcProjectirj862619Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_ASSTSPENVMXNQ_619"

  //Entity: SearchProjectionReadjustement
  //SearchProjectionReadjustement.dateReadjustment (DateField) View: ProjectionReadjustmentForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_DATEREADJUSTNEM_341798 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows("ListProjectionReadjustement");
    changedEventArgs.commons.api.viewState.hide('CM_TASSTSPE_87R');
  };

  //Entity: SearchProjectionReadjustement
  //SearchProjectionReadjustement.percentage (TextInputBox) View: ProjectionReadjustmentForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_PERCENTAGEKQGYS_540798 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows("ListProjectionReadjustement");
    changedEventArgs.commons.api.viewState.hide('CM_TASSTSPE_87R');
  };

  // () View: View of ProjectionReadjustmentForm
  //Evento changeGroup : Evento change para pestañas, collapsible y accordion.
  task_changeGroup_G_PROJECTENT_572798 = (entities: Model, changedGroupEventArgs: any) => {
    changedGroupEventArgs.commons.execServer = false;

    let nav: any = changedGroupEventArgs.commons.api.navigation;
    let params: any = nav.getCustomDialogParameters();

    if ((changedGroupEventArgs.commons.item.id === 'G_PROJECTNTR_773798') && (changedGroupEventArgs.commons.item.isOpen === true)) {
      //AMORTIZACION
      console.log("Open by " + changedGroupEventArgs.commons.item.id);

      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'CMMNS',
        taskId: 'T_AMORTIZATIOON_261',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_AMORTIZAII_339261'
      };
      nav.queryParameters = {
        mode: 2
      };
      nav.customDialogParameters = {
        operation: entities.Loan.loanBankID,
        templateGrid: 2
      };
      nav.registerView('G_PROJECTNTR_773798');

    } else if ((changedGroupEventArgs.commons.item.id === 'G_PROJECTNDI_257798') && (changedGroupEventArgs.commons.item.isOpen === true)) {
      console.log("Open by " + changedGroupEventArgs.commons.item.id);
      //RUBROS
      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_ITEMSLOANSUXI_712',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_ITEMSLOANN_757712'
      };
      nav.queryParameters = {
        mode: 2
      };
      nav.customDialogParameters = {
        operation: entities.Loan.loanBankID
      };
      nav.registerView('G_PROJECTROE_758798');

      //TASAS
      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_RATESPTSITVKK_186',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_RATESVLYWT_596186'
      };
      nav.queryParameters = {
        mode: 2
      };
      nav.customDialogParameters = {
        operation: entities.Loan.loanBankID
      };
      nav.registerView('G_PROJECTOAS_769798');

    }
  };

  // (Button) 
  task_executeCommand_CM_TASSTSPE_16S = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {

    executeCommandEventArgs.commons.execServer = true;
  }

  //Start signature to Callback event to CM_TASSTSPE_16S
  task_executeCommandCallback_CM_TASSTSPE_16S = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    if (executeCommandCallbackEventArgs.success) {
      this.ASSTS.Amortization.showTableAmortization("QV_EB77_IIB88", entities, executeCommandCallbackEventArgs);
      executeCommandCallbackEventArgs.commons.api.viewState.show('CM_TASSTSPE_87R');
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.LBL_ASSTS_TRANSACEC_23845', false, null, this.ASSTS.timer);
    }
  };


  // (Button) 
  task_executeCommand_CM_TASSTSPE_87R = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    let reportTitle: any = this.cobis.translate('ASSTS.LBL_ASSTS_IMPRESINN_23469');
    let reportItem: any = "";
    let reportName: any = "SimulationReadjustement";
    let infoDate: any = kendo.toString(kendo.parseDate(entities.SearchProjectionReadjustement.dateReadjustment), JSON.parse(sessionStorage.dateFormat)); //Nombre del archivo

    let args: any = [
      ['report.module', 'cartera'],
      ['report.name', reportName],
      ['bank', entities.Loan.loanBankID],
      ['percentage', entities.SearchProjectionReadjustement.percentage],
      ['dateReadjustment', infoDate],
      ['cliente', entities.Loan.clientName],
      ['tipoOperacion', (entities.Loan.operationTypeID + ' - ' + entities.Loan.loanBankID)],
      ['moneda', entities.Loan.currencyName],
      ['monto', entities.Loan.balanceDue]
    ];

    this.ASSTS.Utils.generarReporte(reportItem, args, reportTitle);

    executeCommandEventArgs.commons.execServer = false;
  };

  //ListProjectionReadjustementQuery Entity: ListProjectionReadjustement
  task_executeQuery_Q_LISTCEEE_FJ77 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.execServer = false;
  };

  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: ProjectionReadjustmentForm
  task_initData_VC_PROJECTIRJ_862619 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    let nav: any = initDataEventArgs.commons.api.navigation;
    let params: any = nav.getCustomDialogParameters();

    entities.SearchProjectionReadjustement.percentage = 0;
    initDataEventArgs.commons.api.viewState.hide('CM_TASSTSPE_87R');

    entities.Loan = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().parameters.loan;

    //AMORTIZACION 
    nav.address = {
      moduleId: 'ASSTS',
      subModuleId: 'CMMNS',
      taskId: 'T_AMORTIZATIOON_261', //FormSimple (AmortizationForm)
      taskVersion: '1.0.0',
      viewContainerId: 'VC_AMORTIZAII_339261' //Contenedor FormSimple
    };
    nav.queryParameters = {
      mode: 2
    };
    nav.customDialogParameters = {
      operation: initDataEventArgs.commons.api.navigation.getCustomDialogParameters().parameters.loan.loanBankID,
      templateGrid: 2
    };
    nav.registerView('G_PROJECTNTR_773798'); //Grupo en el cual cargara
    initDataEventArgs.commons.execServer = true;
  };

  //Start signature to Callback event to VC_PROJECTIRJ_862619
  task_initDataCallback_VC_PROJECTIRJ_862619 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
  ) => {
    //here your code
  };


  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: ProjectionReadjustmentForm
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    renderEventArgs.commons.execServer = false;
    //FORMAT HEADER
    entities.Loan.startDate = kendo.toString(kendo.parseDate(entities.Loan.startDate), JSON.parse(sessionStorage.dateFormat));
    entities.Loan.endDate = kendo.toString(kendo.parseDate(entities.Loan.endDate), JSON.parse(sessionStorage.dateFormat));
    entities.Loan.feeEndDate = kendo.toString(kendo.parseDate(entities.Loan.feeEndDate), JSON.parse(sessionStorage.dateFormat));
    entities.Loan.lastProcessDate = kendo.toString(kendo.parseDate(entities.Loan.lastProcessDate), JSON.parse(sessionStorage.dateFormat));
    entities.Loan.balanceDue = kendo.toString(entities.Loan.balanceDue, "n");
    entities.Loan.amount = kendo.toString(entities.Loan.amount, "n");
    entities.Loan.amountApproved = kendo.toString(entities.Loan.amountApproved, "n");
    entities.Loan.nextPayment = kendo.toString(entities.Loan.nextPayment, "n");

    for (let i: any = 1; i < 16; i++) {
      renderEventArgs.commons.api.grid.hideColumn("QV_EB77_IIB88", "items" + i);
    }

    if (!entities.Loan.group)
      entities.Loan.group = 0;
  };


  //gridRowSelecting QueryView: QV_EB77_IIB88
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_EB77_IIB88 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.execServer = false;

  };







}