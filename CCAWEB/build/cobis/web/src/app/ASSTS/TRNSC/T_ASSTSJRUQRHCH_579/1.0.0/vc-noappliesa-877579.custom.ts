import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-noappliesa-877579.model';
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

/* variables locales de T_ASSTSJRUQRHCH_579*/

export class VcNoappliesa877579Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_ASSTSJRUQRHCH_579"



  //NoAppliedPaymentQuery Entity: NoAppliedPayment
  task_executeQuery_Q_NOAPYYTA_XK68 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.NoAppliedPayment = true;
  };


  //Start signature to Callback event to Q_NOAPYYTA_XK68
  task_executeQueryCallback_Q_NOAPYYTA_XK68 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };



  //Entity: NoAppliedPayment
  //NoAppliedPayment. (Button) View: NoAppliedPaymentsForm
  task_gridRowCommand_VA_GRIDROWCOMMMNDD_641728 = async (
    entities: Model,
    gridRowCommandEventArgs: CobisModelGridRowCommandExecuteEventArgs
  ) => {
    let response: any = await firstValueFrom(
      gridRowCommandEventArgs.commons.messageHandler.showMessagesConfirm("ASSTS.MSG_ASSTS_ESTSEGUNA_86756")
    );

    switch (response.buttonIndex) {
      case 0: //cancel

        gridRowCommandEventArgs.commons.execServer = false;
        break;
      case 1: //accept

        gridRowCommandEventArgs.commons.execServer = true;
        return true;
        break;
    }
  };


  //Start signature to Callback event to VA_GRIDROWCOMMMNDD_641728
  task_gridRowCommandCallback_VA_GRIDROWCOMMMNDD_641728 = (
    entities: Model,
    gridRowCommandCallbackEventArgs: CobisModelGridRowCommandCallbackEventArgs
  ) => {

    if (gridRowCommandCallbackEventArgs.success) {
      gridRowCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_TRANSACII_82976", false, null, timer);
      gridRowCommandCallbackEventArgs.commons.api.grid.refresh('QV_PJ68_WJJ41');
    }

  };




  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: NoAppliedPaymentsForm
  task_initData_VC_NOAPPLIESA_877579 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    let commons: any = initDataEventArgs.commons;
    let api: any = initDataEventArgs.commons.api;
    let parameters: any = api.navigation.getCustomDialogParameters();

    entities.Loan = parameters.parameters.loan;

    initDataEventArgs.commons.execServer = false;
  };


  //gridRowDeleting QueryView: QV_PJ68_WJJ41
  //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
  task_gridRowDeleting_QV_PJ68_WJJ41 = (
    entities: Model,
    gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
  ) => {

    gridRowDeletingEventArgs.commons.execServer = true;
    //gridRowDeletingEventArgs.commons.serverParameters.NoAppliedPayment = true; 
  };







  //Start signature to Callback event to QV_PJ68_WJJ41
  task_gridRowDeletingCallback_QV_PJ68_WJJ41 = (
    entities: Model,
    gridRowDeletingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
  ) => {
    if (gridRowDeletingCallbackEventArgs.success) {
      gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_ELIMINAET_70731", false, null, timer);
    }
  };



  //gridRowSelecting QueryView: QV_PJ68_WJJ41
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_PJ68_WJJ41 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {
    //Open Modal
    let nav: any = gridRowSelectingEventArgs.commons.api.navigation;

    nav.label = this.cobis.translate("ASSTS.LBL_ASSTS_DETALLEFN_34994");
    nav.address = {
      moduleId: 'ASSTS',
      subModuleId: 'TRNSC',
      taskId: 'T_ASSTSSJVXBFJD_286',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_DETAILNOIE_803286'
    };

    nav.queryParameters = {
      mode: 8
    };

    nav.modalProperties = {
      size: 'md',
      callFromGrid: false
    };

    nav.customDialogParameters = {
      secuencial: gridRowSelectingEventArgs.rowData.secuencial,
      bankId: gridRowSelectingEventArgs.commons.api.parentVc?.model.Loan.loanBankID

    };

    nav.openModalWindow('QV_RO76_OKE25', gridRowSelectingEventArgs.nameEntityGrid);

    gridRowSelectingEventArgs.commons.execServer = false;
  };







}