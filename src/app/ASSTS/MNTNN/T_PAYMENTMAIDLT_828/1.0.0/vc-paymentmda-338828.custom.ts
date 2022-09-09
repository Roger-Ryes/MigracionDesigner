import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-paymentmda-338828.model';
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

/* variables locales de T_PAYMENTMAIDLT_828*/

export class VcPaymentmda338828Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_PAYMENTMAIDLT_828"
  validarCampos = (api: any, desembolso: any, pagos: any, pagoAutomatico: any, pagoCaja: any) => {
    if (desembolso == 'S' && pagos == 'S' && pagoAutomatico == 'S' && pagoCaja == 'S') {
      //api.vc.viewState.VA_BANKSERVICESDQR_160701.visible = true;
      //api.vc.viewState.VA_PCOBISNSCZVLGJB_151701.visible = true;
      api.vc.viewState.VA_TRANSACCTIONKAF_634701.visible = true;
    } else {
      if (desembolso == 'S' && pagos == 'S' && pagoAutomatico == 'S' && pagoCaja == 'N') {
        //api.vc.viewState.VA_BANKSERVICESDQR_160701.visible = true;
        // api.vc.viewState.VA_PCOBISNSCZVLGJB_151701.visible = true;
        api.vc.viewState.VA_TRANSACCTIONKAF_634701.visible = true;
      } else {
        if (desembolso == 'S' && pagos == 'S' && pagoAutomatico == 'N' && pagoCaja == 'N') {
          //api.vc.viewState.VA_BANKSERVICESDQR_160701.visible = true;
          //api.vc.viewState.VA_PCOBISNSCZVLGJB_151701.visible = true;
          api.vc.viewState.VA_TRANSACCTIONKAF_634701.visible = false;
        } else {
          if (desembolso == 'S' && pagos == 'N' && pagoAutomatico == 'N' && pagoCaja == 'N') {
            // api.vc.viewState.VA_BANKSERVICESDQR_160701.visible = true;
            // api.vc.viewState.VA_PCOBISNSCZVLGJB_151701.visible = true;
            api.vc.viewState.VA_TRANSACCTIONKAF_634701.visible = false;
          } else {
            if (desembolso == 'N' && pagos == 'N' && pagoAutomatico == 'N' && pagoCaja == 'N') {
              //api.vc.viewState.VA_BANKSERVICESDQR_160701.visible = false;
              // api.vc.viewState.VA_PCOBISNSCZVLGJB_151701.visible = false;
              api.vc.viewState.VA_TRANSACCTIONKAF_634701.visible = false;
            } else {
              if (desembolso == 'N' && pagos == 'N' && pagoAutomatico == 'N' && pagoCaja == 'S') {
                //api.vc.viewState.VA_BANKSERVICESDQR_160701.visible = false;
                // api.vc.viewState.VA_PCOBISNSCZVLGJB_151701.visible = false;
                api.vc.viewState.VA_TRANSACCTIONKAF_634701.visible = false;
              } else {
                if (desembolso == 'N' && pagos == 'N' && pagoAutomatico == 'S' && pagoCaja == 'S') {
                  //api.vc.viewState.VA_BANKSERVICESDQR_160701.visible = false;
                  api.vc.viewState.VA_PCOBISNSCZVLGJB_151701.visible = true;
                  api.vc.viewState.VA_TRANSACCTIONKAF_634701.visible = true;
                } else {
                  if (desembolso == 'N' && pagos == 'S' && pagoAutomatico == 'S' && pagoCaja == 'S') {
                    //api.vc.viewState.VA_BANKSERVICESDQR_160701.visible = false;
                    //  api.vc.viewState.VA_PCOBISNSCZVLGJB_151701.visible = true;
                    api.vc.viewState.VA_TRANSACCTIONKAF_634701.visible = true;
                  }
                }
              }
            }
          }
        }
      }
    }
  }


  //Entity: MethodsRetention
  //MethodsRetention.disbursement (DropDownList) View: PaymentMaintenanceModal
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_DISBURSEMENTDSI_289701 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    let api: any = changedEventArgs.commons.api;
    let desembolso: any = entities.MethodsRetention.disbursement;
    let pagos: any = entities.MethodsRetention.payment;
    let pagoAutomatico: any = entities.MethodsRetention.paymentAut;
    let pagoCaja: any = entities.MethodsRetention.paymentATX;
    this.validarCampos(api, desembolso, pagos, pagoAutomatico, pagoCaja);
  };

  //Entity: MethodsRetention
  //MethodsRetention.paymentATX (DropDownList) View: PaymentMaintenanceModal
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_PAYMENTATXPGDKX_602701 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    let api: any = changedEventArgs.commons.api;
    let desembolso: any = entities.MethodsRetention.disbursement;
    let pagos: any = entities.MethodsRetention.payment;
    let pagoAutomatico: any = entities.MethodsRetention.paymentAut;
    let pagoCaja: any = entities.MethodsRetention.paymentATX;
    this.validarCampos(api, desembolso, pagos, pagoAutomatico, pagoCaja);
  };

  //Entity: MethodsRetention
  //MethodsRetention.paymentAut (DropDownList) View: PaymentMaintenanceModal
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_PAYMENTAUTLPCHV_485701 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    let api: any = changedEventArgs.commons.api;
    let desembolso: any = entities.MethodsRetention.disbursement;
    let pagos: any = entities.MethodsRetention.payment;
    let pagoAutomatico: any = entities.MethodsRetention.paymentAut;
    let pagoCaja: any = entities.MethodsRetention.paymentATX;
    this.validarCampos(api, desembolso, pagos, pagoAutomatico, pagoCaja);
  };

  //Entity: MethodsRetention
  //MethodsRetention.payment (DropDownList) View: PaymentMaintenanceModal
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_PAYMENTKWAZXHOL_773701 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    let api: any = changedEventArgs.commons.api;
    let desembolso: any = entities.MethodsRetention.disbursement;
    let pagos: any = entities.MethodsRetention.payment;
    let pagoAutomatico: any = entities.MethodsRetention.paymentAut;
    let pagoCaja: any = entities.MethodsRetention.paymentATX;
    this.validarCampos(api, desembolso, pagos, pagoAutomatico, pagoCaja);
  };

  // (Button) 
  task_executeCommand_CM_TPAYMENT_08P = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;
    let cancelButton: any = false;
    executeCommandEventArgs.commons.api.navigation.closeModal(cancelButton);
  };

  // (Button) 
  task_executeCommand_CM_TPAYMENT_TM7 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.entityName = true;
  };

  //Start signature to callBack event to CM_TPAYMENT_TM7
  task_executeCommandCallback_CM_TPAYMENT_TM7 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    //here your code
    //executeCommandEventArgs.commons.execServer = false;
    if (executeCommandEventArgs.success) {
      let aceptButton: any = true;
      executeCommandEventArgs.commons.api.navigation.closeModal(aceptButton);
      if (executeCommandEventArgs.commons.api.vc.mode == 2) {
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_REGISTRAO_10733", false, null, this.ASSTS.timer);
      } else {
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_REGISTRAS_48950", false, null, this.ASSTS.timer);
      }
    }


  };

  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: PaymentMaintenanceModal
  task_initData_VC_PAYMENTMDA_338828 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = false;

    let mode: any = initDataEventArgs.commons.api.vc.mode;

    initDataEventArgs.commons.api.viewState.enable('VA_PAYMENTMETHODSD_816701');
    if (mode === 2) {
      initDataEventArgs.commons.execServer = false;
      let params: any = initDataEventArgs.commons.api.navigation.getCustomDialogParameters();

      let currentRow: any = params.currentRow;
    }

    let api: any = initDataEventArgs.commons.api;
    api.viewState.hide('VA_CANALAHHGQQRYXT_909701');
    api.viewState.hide('VA_BANKSERVICESDQR_160701');
    if (entities.MethodsRetention.paymentAut === 'N') {
      api.vc.viewState.VA_TRANSACCTIONKAF_634701.visible = false;
    }

    entities.MethodsRetention.transacction = 'D';
  };



  //Entity: MethodsRetention
  //MethodsRetention.paymentMethods (DropDownList) View: PaymentMaintenanceModal
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_PAYMENTMETHODSD_816701 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.MethodsRetention = true;

  };


  //Start signature to Callback event to VA_PAYMENTMETHODSD_816701
  task_loadCatalogCallback_VA_PAYMENTMETHODSD_816701 = (
    entities: Model,
    loadCatalogCallbackEventArgs: CobisModelLoadCatalogCallbackEventArgs
  ) => {
    entities.MethodsRetention.paymentMethods = entities.MethodsRetention.product;
  };




  //Entity: MethodsRetention
  //MethodsRetention.pcobis (DropDownList) View: PaymentMaintenanceModal
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_PCOBISNSCZVLGJB_151701 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.MethodsRetention = true;

  };

  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: PaymentMaintenanceModal
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    renderEventArgs.commons.execServer = false;

  };



}