import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-amortizaii-339261.model';
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

/* variables locales de T_AMORTIZATIOON_261*/

export class VcAmortizaii339261Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_AMORTIZATIOON_261"

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


  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: AmortizationForm
  task_initData_VC_AMORTIZAII_339261 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    entities.Loan = initDataEventArgs.commons.api.parentVc?.model.Loan;
    initDataEventArgs.commons.execServer = true;
    //initDataEventArgs.commons.serverParameters.entityName = true;

  };

  //Start signature to Callback event to VC_AMORTIZAII_339261
  task_initDataCallback_VC_AMORTIZAII_339261 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
  ) => {
    if (initDataCallbackEventArgs.success) {
      Amortization.showTableAmortization("QV_LM37_VTI26", entities, initDataCallbackEventArgs);
    }
  };


  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: AmortizationForm
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {

    renderEventArgs.commons.execServer = false;
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


}