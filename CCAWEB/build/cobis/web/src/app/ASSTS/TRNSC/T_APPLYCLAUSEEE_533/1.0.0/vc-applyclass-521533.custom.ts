import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-applyclass-521533.model';
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


/* variables locales de T_LOANHEADERNFI_316*/

/* variables locales de T_AMORTIZATIOON_261*/

/* variables locales de T_APPLYCLAUSEEE_533*/


export class VcApplyclass521533Custom extends CobisDesignerCustomEvent {

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


  /*"TaskId": "T_LOANHEADERNFI_316",*/
  //Your code here

  //"TaskId": "T_AMORTIZATIOON_261"

  //"TaskId": "T_APPLYCLAUSEEE_533"

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
  task_executeCommand_CM_APPLYCLA_C1S = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.entityName = true;
  };

  //Start signature to callBack event to CM_APPLYCLA_C1S
  task_executeCommandCallback_CM_APPLYCLA_C1S = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    //here your code
    if (executeCommandEventArgs.success) {
      this.ASSTS.Amortization.CapitalBalance(entities.Amortization);
      this.ASSTS.Amortization.resizeGrid("QV_LM37_VTI26");
      // executeCommandEventArgs.commons.messageHandler.showMessagesSuccess("ASSTS.MSG_ASSTS_REGISTRAO_10733", false, null, 3000);
    }


  };

  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: ApplyClause
  task_initData_VC_APPLYCLASS_521533 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    //initDataEventArgs.commons.execServer = true;
    let commons: any = initDataEventArgs.commons;

    let api: any = initDataEventArgs.commons.api;
    let parameters: any = api.navigation.getCustomDialogParameters();
    entities.Loan = parameters.parameters.loan;

    initDataEventArgs.commons.api.viewState.hide('VC_ZFLEAUPGRQ_436533');


    commons.execServer = true;
  };

  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: ApplyClause
  task_initDataCallback_VC_APPLYCLASS_521533 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    this.ASSTS.Amortization.showTableAmortization("QV_LM37_VTI26", entities, initDataEventArgs);

  };

  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: ApplyClause
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    renderEventArgs.commons.execServer = false;
    this.ASSTS.Amortization.CapitalBalance(entities.Amortization);

  };


}