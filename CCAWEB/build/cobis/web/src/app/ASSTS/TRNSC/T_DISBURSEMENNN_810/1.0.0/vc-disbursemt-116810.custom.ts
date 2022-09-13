import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-disbursemt-116810.model';
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

/* variables locales de T_DISBURSEMENNN_810*/


export class VcDisbursemt116810Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_DISBURSEMENNN_810"

  //DetailPaymentFormQuery Entity: 
  //designer-hint: 2304: Cannot find name 'task_executeQuery_Q_DETAILAP_5973'.
  //designer-hint: 2304: Cannot find name 'CobisModelExecuteQueryEventArgs'.
  task_executeQuery_Q_DETAILAP_5973 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.serverParameters.DisbursementResult = true;
    executeQueryEventArgs.commons.serverParameters.Loan = true;
    executeQueryEventArgs.commons.serverParameters.LiquidateResult = true;
    executeQueryEventArgs.commons.execServer = true;

  };


  //Start signature to Callback event to Q_DETAILAP_5973
  //designer-hint: 2304: Cannot find name 'task_executeQueryCallback_Q_DETAILAP_5973'.
  task_executeQueryCallback_Q_DETAILAP_5973 = (
    //designer-hint: 2304: Cannot find name 'Model'.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelExecuteQueryCallbackEventArgs'.
    //designer-hint: 6133: 'executeQueryCallbackEventArgs' is declared but its value is never read.
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    let totalDesembolso: any = 0;
    if (entities.DetailPaymentForm && entities.DetailPaymentForm.length > 0) {
      for (let i: any = 0; i < entities.DetailPaymentForm.length; i++) {
        totalDesembolso = totalDesembolso + entities.DetailPaymentForm[i].amountOp;
      }
    }

    entities.DisbursementResult.sumTotal = totalDesembolso;
    entities.DisbursementResult.difference = entities.LiquidateResult.sumTotal!-entities.DisbursementResult.sumTotal!;
    //designer-hint: 2304: Cannot find name 'diferencia'.
    diferencia = entities.DisbursementResult.difference;
  };



  //DetailAmountsToCancelQuery Entity: 
  //designer-hint: 2304: Cannot find name 'task_executeQuery_Q_DETAILTM_1603'.
  //designer-hint: 2304: Cannot find name 'CobisModelExecuteQueryEventArgs'.
  task_executeQuery_Q_DETAILTM_1603 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.execServer = false;
    //executeQueryEventArgs.commons.serverParameters. = true;
  };

  //gridCommand (Button) QueryView: QV_5973_48889
  //Evento GridCommand: Sirve para personalizar la acción que realizan los botones de Grilla.
  //designer-hint: 2304: Cannot find name 'task_gridCommand_CEQV_201QV_5973_48889_606'.
  task_gridCommand_CEQV_201QV_5973_48889_606 = (
    //designer-hint: 2304: Cannot find name 'Model'.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelGridCommandExecuteEventArgs'.
    gridExecuteCommandEventArgs: CobisModelGridCommandExecuteEventArgs
  ) => {
    gridExecuteCommandEventArgs.commons.execServer = false;
    //gridExecuteCommandEventArgs.commons.serverParameters.DetailPaymentForm = true;
    //Open Modal


    if (entities.LoanAdditionalInformation.dateToDisburse === undefined) {
      //designer-hint: 2304: Cannot find name 'timer'.
      gridExecuteCommandEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_INGRESEHA_96071', false, null, this.ASSTS.timer);
      return;
    }

    entities.LoanAdditionalInformation.amountToCancel = entities.Loan.amount;


    let nav: any = gridExecuteCommandEventArgs.commons.api.navigation;
    if (entities.LiquidateResult.sumTotal! > entities.DisbursementResult.sumTotal!) {
      nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_APAGOKXFB_84081'); //Forma de Pago
      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'TRNSC',
        taskId: 'T_PAYMENTMODEEE_368',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_PAYMENTMDE_245368'
      };
      nav.queryParameters = {
        mode: 1
      };
      nav.modalProperties = {
        size: 'md',
        callFromGrid: false
      };

      nav.customDialogParameters = {
        operationTypeId: entities.Loan.operationTypeID,
        codCurrency: entities.Loan.codCurrency,
        dateToDisburse: entities.LoanAdditionalInformation.dateToDisburse,
        loanAddInf: entities.LoanAdditionalInformation,
        difference: entities.DisbursementResult.difference,
        loanBankID: entities.Loan.loanBankID,
        loan: entities.Loan
      };
      nav.openModalWindow("CEQV_201QV_5973_48889_606", gridExecuteCommandEventArgs);
    } else {
      //designer-hint: 2304: Cannot find name 'timer'.
      gridExecuteCommandEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ELDESEMST_32467', false, null, this.ASSTS.timer);
    }
  };

  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: DisbursementForm
  //designer-hint: 2304: Cannot find name 'task_initData_VC_DISBURSEMT_116810'.
  //designer-hint: 2304: Cannot find name 'Model'.
  //designer-hint: 2304: Cannot find name 'CobisModelInitDataEventArgs'.
  task_initData_VC_DISBURSEMT_116810 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    entities.Loan = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().loan;
    entities.LoanAdditionalInformation.currencyOp = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().loan.codCurrency;

    initDataEventArgs.commons.api.viewState.disable('G_DISBURSEET_626405');

    initDataEventArgs.commons.execServer = true;
    //initDataEventArgs.commons.serverParameters.entityName = true;
  };

  //Start signature to Callback event to VC_DISBURSEMT_116810
  //designer-hint: 2304: Cannot find name 'task_initDataCallback_VC_DISBURSEMT_116810'.
  task_initDataCallback_VC_DISBURSEMT_116810 = (
    //designer-hint: 2304: Cannot find name 'Model'.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelInitDataCallbackEventArgs'.
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
  ) => {
    let processDate = this.cobis.container.info.getProcessDate();
    //se asume fecha de proceso MM/dd/yyyy caso contrario falla
    let parts: any = processDate.split('/');
    // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
    // January - 0, February - 1, etc.
    entities.LoanAdditionalInformation.dateToDisburse = new Date(parts[2], parts[0] - 1, parts[1]);

    //designer-hint: 2304: Cannot find name 'kendo'.
    // TODO
    // entities.LoanAdditionalInformation.dateToDisburse = kendo.toString(entities.LoanAdditionalInformation.dateToDisburse, JSON.parse(sessionStorage.dateFormat));
    entities.LoanAdditionalInformation.dateToDisburse = entities.LoanAdditionalInformation.dateToDisburse;

    if (initDataCallbackEventArgs.success) {
      let totalDesembolso: any = 0;
      if (entities.DetailPaymentForm.length > 0) {
        for (let i: any = 0; i < entities.DetailPaymentForm.length; i++) {
          totalDesembolso = totalDesembolso + entities.DetailPaymentForm[i].amountOp;
        }
      }

      entities.DisbursementResult.sumTotal = totalDesembolso;
      entities.DisbursementResult.difference = entities.LiquidateResult.sumTotal!-entities.DisbursementResult.sumTotal!;
      //designer-hint: 2304: Cannot find name 'diferencia'.
      diferencia = entities.DisbursementResult.difference;
    }
  };




  //Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
  //ViewContainer: DisbursementForm
  //designer-hint: 2304: Cannot find name 'task_onCloseModalEvent'.
  //designer-hint: 2304: Cannot find name 'Model'.
  //designer-hint: 2304: Cannot find name 'CobisModelOnCloseModalEventArgs'.
  //designer-hint: 6133: 'entities' is declared but its value is never read.
  task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {

    onCloseModalEventArgs.commons.execServer = false;
    //onCloseModalEventArgs.commons.serverParameters.entityName = true;

    onCloseModalEventArgs.commons.api.grid.refresh('QV_5973_48889');

  };

  //gridRowDeleting QueryView: QV_5973_48889
  //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
  //designer-hint: 2304: Cannot find name 'task_gridRowDeleting_QV_5973_48889'.
  task_gridRowDeleting_QV_5973_48889 = (
    //designer-hint: 2304: Cannot find name 'Model'.
    //designer-hint: 6133: 'entities' is declared but its value is never read.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelGridRowActionEventArgs'.
    gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
  ) => {
    if (gridRowDeletingEventArgs.commons.api.parentVc && gridRowDeletingEventArgs.commons.api.parentVc?.id == 'VC_LOANPARTIR_265871') {
      if (gridRowDeletingEventArgs.commons.api.parentVc?.viewState.CM_TASSTSEF_N17.disabled == false) {
        gridRowDeletingEventArgs.commons.execServer = true;
      } else {
        gridRowDeletingEventArgs.commons.execServer = false;
        gridRowDeletingEventArgs.cancel = true;
      }
    } else {
      if (gridRowDeletingEventArgs.commons.api.vc.viewState.CM_TLOANDIS_S5N.disabled == false) {
        gridRowDeletingEventArgs.commons.execServer = true;
      } else {
        gridRowDeletingEventArgs.commons.execServer = false;
        gridRowDeletingEventArgs.cancel = true;
      }
    }

  };

  //Start signature to callBack event to QV_5973_48889
  //designer-hint: 2304: Cannot find name 'task_gridRowDeletingCallback_QV_5973_48889'.
  task_gridRowDeletingCallback_QV_5973_48889 = (
    //designer-hint: 2304: Cannot find name 'Model'.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelGridRowActionCallbackEventArgs'.
    gridRowDeletingEventArgs: CobisModelGridRowActionCallbackEventArgs
  ) => {

    if (gridRowDeletingEventArgs.success && gridRowDeletingEventArgs.commons.api.parentVc && gridRowDeletingEventArgs.commons.api.parentVc?.id == 'VC_LOANPARTIR_265871') {
      //designer-hint: 2304: Cannot find name 'diferencia'.
      // TODO - ALE 
      diferencia = entities.DisbursementResult.difference;
    }
  };

  //gridRowSelecting QueryView: QV_5973_48889
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  //designer-hint: 2304: Cannot find name 'task_gridRowSelecting_QV_5973_48889'.
  task_gridRowSelecting_QV_5973_48889 = (
    //designer-hint: 2304: Cannot find name 'Model'.
    //designer-hint: 6133: 'entities' is declared but its value is never read.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelGridRowSelectingEventArgs'.
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {
    gridRowSelectingEventArgs.commons.execServer = false;

    //gridRowSelectingEventArgs.commons.serverParameters.DetailPaymentForm = true;
  };


}