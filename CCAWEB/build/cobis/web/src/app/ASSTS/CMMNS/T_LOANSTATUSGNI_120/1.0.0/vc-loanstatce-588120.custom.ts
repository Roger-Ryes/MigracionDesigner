import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-loanstatce-588120.model';
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


/* variables locales de T_LOANSTATUSNGH_840*/

/* variables locales de T_AMORTIZATIOON_261*/

/* variables locales de T_LOANSTATUSGNI_120*/


export class VcLoanstatce588120Custom extends CobisDesignerCustomEvent {

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


  /*"TaskId": "T_LOANSTATUSNGH_840",*/
  //Your code here

  //"TaskId": "T_AMORTIZATIOON_261"

  //"TaskId": "T_LOANSTATUSGNI_120"

  //Entity: Loan
  //Loan.newStatus (ComboBox) View: LoanStatusChangeForm
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_NEWSTATUSLZHCOE_110722 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.api.navigation.getCustomDialogParameters().otherParam = {
      OPERATIONTYPEID: loadCatalogDataEventArgs.commons.api.vc.model.Loan.operationTypeID,
      STATUS: loadCatalogDataEventArgs.commons.api.vc.model.Loan.statusCopy
    }


    loadCatalogDataEventArgs.commons.execServer = true;

    //loadCatalogDataEventArgs.commons.api.vc.model Object {Entity4: Object}
  };

  //AmortizationQuery Entity: 
  task_executeQuery_Q_AMORTIAN_8237 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let executeServer: any = true;
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().operation;

    if (executeQueryEventArgs.commons.api.parentVc && executeQueryEventArgs.commons.api.parentVc?.id == 'VC_LOANSHISOO_808949') {
      executeQueryEventArgs.parameters.historico = 'S';
    }
    executeQueryEventArgs.commons.execServer = executeServer;
  };

  //Start signature to Callback event to Q_AMORTIAN_8237
  task_executeQueryCallback_Q_AMORTIAN_8237 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {

  };


  //gridRowSelecting QueryView: QV_LM37_VTI26
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_LM37_VTI26 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {
    gridRowSelectingEventArgs.commons.execServer = false;
    let loanBankCode: any;
    if (gridRowSelectingEventArgs.commons.api.parentVc?.id == "VC_PROJECTIRJ_862619") {
      //Open Modal[Simulación Reajuste]
      loanBankCode = gridRowSelectingEventArgs.commons.api.navigation.getCustomDialogParameters().operation;
    } else {
      loanBankCode = entities.Loan.loanBankID
    }

    //Open Modal
    let nav: any = gridRowSelectingEventArgs.commons.api.navigation;

    nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_DESGLOSCO_45546');
    nav.address = {
      moduleId: 'ASSTS',
      subModuleId: 'MNTNN',
      taskId: 'T_AMORTIZATIDTE_881',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_AMORTIZATE_895881'
    };
    nav.queryParameters = {
      mode: 2
    };
    nav.modalProperties = {
      size: 'lg',
      callFromGrid: false
    };
    nav.customDialogParameters = {
      dividend: gridRowSelectingEventArgs.rowData.share,
      loanBankID: loanBankCode
    };
    nav.openModalWindow('QV_LM37_VTI26', gridRowSelectingEventArgs.rowData);
  };

  // (Button) 
  task_executeCommand_CM_TLOANSTA_STA = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.entityName = true;
  };

  //Start signature to Callback event to CM_TLOANSTA_STA
  task_executeCommandCallback_CM_TLOANSTA_STA = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {

    if (executeCommandCallbackEventArgs.success) {
      entities.Loan.statusCopy = executeCommandCallbackEventArgs.commons.api.viewState.getDataItem("VA_NEWSTATUSLZHCOE_110722").value;
      executeCommandCallbackEventArgs.commons.api.viewState.hide('VA_NEWSTATUSLZHCOE_110722');
      executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_TLOANSTA_STA');
    }
  };


  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: LoanStatusChangeMain
  task_initData_VC_LOANSTATCE_588120 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    //initDataEventArgs.commons.execServer = true;
    let commons: any = initDataEventArgs.commons;

    let api: any = initDataEventArgs.commons.api;
    let parameters: any = api.navigation.getCustomDialogParameters();
    entities.Loan = parameters.parameters.loan;

    entities.Loan.statusCopy = entities.Loan.status
    commons.execServer = true
  };

  //Start signature to Callback event to VC_LOANSTATCE_588120
  task_initDataCallback_VC_LOANSTATCE_588120 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
  ) => {
    this.ASSTS.Amortization.showTableAmortization("QV_LM37_VTI26", entities, initDataCallbackEventArgs);
  };


  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: LoanStatusChangeMain
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    renderEventArgs.commons.execServer = false;
    this.ASSTS.Amortization.CapitalBalance(entities.Amortization);


  };


}