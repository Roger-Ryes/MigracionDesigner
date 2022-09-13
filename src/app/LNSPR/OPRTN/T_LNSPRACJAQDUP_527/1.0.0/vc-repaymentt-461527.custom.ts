import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-repaymentt-461527.model';
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

/* variables locales de T_LNSPRACJAQDUP_527*/

export class VcRepaymentt461527Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_LNSPRACJAQDUP_527"




  //Entity: PaymentAutomatic
  //PaymentAutomatic.client (TextInputButton) View: PaymentAutomaticCreateForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_CLIENTNIXWOQDSD_193232 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    if (entities.PaymentAutomatic.client != entities.PaymentAutomatic.clientOld) {
      entities.PaymentAutomatic.account = null
      changedEventArgs.commons.api.viewState.refreshData('VA_ACCOUNTEPABOHPV_776232');
    }
  };

  // (Button) 
  task_executeCommand_CM_TLNSPRAC_4P9 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;
    let total: any = 0;
    let commons: any = executeCommandEventArgs.commons;
    if (entities.PaymentAutomaticList.length > 0) {
      entities.PaymentAutomaticList.forEach(({
        // TODO - ALE
        percentage
      }) => {
        total = total + percentage;
      })
    }

    if (total < 100 && total > 0) {
      commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_PORCENTED_35766", false, null, this.LNSPR.timer);
    } else {

      executeCommandEventArgs.commons.api.navigation.closeModal({});
    }
  };




  //Entity: PaymentAutomatic
  //PaymentAutomatic. (Button) View: RepaymentCreateForm
  //Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
  task_executeCommand_VA_VABUTTONNVDIOQB_352232 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {

    executeCommandEventArgs.commons.execServer = false;

    entities.PaymentAutomatic.institution = null
    entities.PaymentAutomatic.institutionName = null
    entities.PaymentAutomatic.institutionOld = null
    entities.PaymentAutomatic.client = null
    entities.PaymentAutomatic.clientName = null
    entities.PaymentAutomatic.clientOld = null
    entities.PaymentAutomatic.comments = null
    entities.PaymentAutomatic.percentage = 0.0
    entities.PaymentAutomatic.account = null

    executeCommandEventArgs.commons.args.mode = executeCommandEventArgs.commons.constants.mode.Insert
    //  executeCommandEventArgs.commons.api.viewState.label("VA_VABUTTONNVDIOQB_352232", "LNSPR.LBL_LOANS_LIMPIARVF_75606");//Cmd Limpiar
    //  executeCommandEventArgs.commons.api.viewState.label("VA_VABUTTONXOCQZHP_695232", "LNSPR.LBL_LOANS_AADIRWOQO_72396");//Cmd Añadir
  };

  //Entity: PaymentAutomatic
  //PaymentAutomatic. (Button) View: RepaymentCreateForm
  //Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
  task_executeCommand_VA_VABUTTONXOCQZHP_695232 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    let total: any = 0;
    let commons: any = executeCommandEventArgs.commons;

    //executeCommandEventArgs.commons.serverParameters.PaymentAutomatic = true;
    if (entities.PaymentAutomaticList.length > 0) {
      entities.PaymentAutomaticList.forEach(({
        percentage
      }) => {
        total = total + percentage;
      })
    }

    if ((entities.PaymentAutomatic.percentage + total) > 100) {
      executeCommandEventArgs.commons.execServer = false;
      commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_NOEXCEDER_58370", false, null, this.LNSPR.timer);
    } else {
      executeCommandEventArgs.commons.execServer = true;
    }
  };

  //Start signature to Callback event to VA_VABUTTONXOCQZHP_695232
  task_executeCommandCallback_VA_VABUTTONXOCQZHP_695232 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    if (executeCommandCallbackEventArgs.success) {
      let commons: any = executeCommandCallbackEventArgs.commons;
      commons.args.mode = commons.constants.mode.Insert
      // commons.api.viewState.label("VA_VABUTTONNVDIOQB_352232", "LNSPR.LBL_LOANS_LIMPIARVF_75606"); //Cmd Limpiar
      //commons.api.viewState.label("VA_VABUTTONXOCQZHP_695232", "LNSPR.LBL_LOANS_AADIRWOQO_72396"); //Cmd Añadir
      commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_OPERACIOA_60671", false, null, this.LNSPR.timer);

      //Limpiar entity
      entities.PaymentAutomatic.institution = null
      entities.PaymentAutomatic.institutionName = null
      entities.PaymentAutomatic.institutionOld = null
      entities.PaymentAutomatic.client = null
      entities.PaymentAutomatic.clientName = null
      entities.PaymentAutomatic.clientOld = null
      entities.PaymentAutomatic.comments = null
      entities.PaymentAutomatic.percentage = 0.0
      entities.PaymentAutomatic.account = null

      commons.api.grid.refresh('QV_WX74_OJZ40', {
        bankId: entities.PaymentAutomatic.bankId,
        paymentMethod: entities.PaymentAutomatic.paymentMethod
      });
    }
  };



  //PaymentAutomaticListQuery Entity: PaymentAutomaticList
  task_executeQuery_Q_PAYMANAM_TY74 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let execServer: any = false;
    let nav: any = executeQueryEventArgs.commons.api.navigation;
    if (nav.getCustomDialogParameters()) {
      executeQueryEventArgs.parameters.bankId = nav.getCustomDialogParameters().banco;
      executeQueryEventArgs.parameters.paymentMethod = nav.getCustomDialogParameters().paymentMethod;
      execServer = true;
    }
    executeQueryEventArgs.commons.execServer = execServer;
  };


  //Start signature to Callback event to Q_PAYMANAM_TY74
  task_executeQueryCallback_Q_PAYMANAM_TY74 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    let nav: any = executeQueryCallbackEventArgs.commons.api.navigation;
    let grid: any = executeQueryCallbackEventArgs.commons.api.grid;
    if (nav.getCustomDialogParameters()) {
      if (nav.getCustomDialogParameters().paymentCategory == 'NDAH') {
        grid.hideColumn('QV_WX74_OJZ40', 'account');
        grid.showColumn('QV_WX74_OJZ40', 'institutionName');
      } else if (nav.getCustomDialogParameters().paymentCategory == 'PLANO') {
        grid.showColumn('QV_WX74_OJZ40', 'account');
        grid.hideColumn('QV_WX74_OJZ40', 'institutionName');
      } else {
        grid.hideColumn('QV_WX74_OJZ40', 'account');
        grid.hideColumn('QV_WX74_OJZ40', 'institutionName');
      }
    } else {
      grid.hideColumn('QV_WX74_OJZ40', 'account'); //Cuenta
      grid.hideColumn('QV_WX74_OJZ40', 'institutionName'); //Institucion
    }
  };




  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: RePaymentCreateForm
  task_initData_VC_REPAYMENTT_461527 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {

    initDataEventArgs.commons.execServer = false;
    /*   
        //initializacion
        entities.PaymentAutomatic.institution = null
        entities.PaymentAutomatic.institutionName = null
        entities.PaymentAutomatic.institutionOld = null
        entities.PaymentAutomatic.client = null
        entities.PaymentAutomatic.clientName = null
        entities.PaymentAutomatic.clientOld = null
        entities.PaymentAutomatic.comments = null
        entities.PaymentAutomatic.percentage = 0.0
        entities.PaymentAutomatic.account = null
        entities.PaymentAutomatic.bankId = null //not save is null
        entities.PaymentAutomatic.paymentMethod = null //not save is null*/

  };



  //Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
  //ViewContainer: RePaymentCreateForm
  task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {

    onCloseModalEventArgs.commons.execServer = false;

    /* if (onCloseModalEventArgs.closedViewContainerId == "findCustomer" && 
         onCloseModalEventArgs.dialogCloseType == onCloseModalEventArgs.commons.constants.dialogCloseType.Interactive) {
         if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.selectedData) {
             var data = onCloseModalEventArgs.result.selectedData;
             entities.PaymentAutomatic.client= data.code;
             entities.PaymentAutomatic.clientName = data.name;
         }
     }*/

    if (onCloseModalEventArgs.closedViewContainerId == 'VC_COMPANIEEE_220144' &&
      onCloseModalEventArgs.dialogCloseType == 0) {
      if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.response) {
        entities.PaymentAutomatic.institution = onCloseModalEventArgs.result.response.institution;
        entities.PaymentAutomatic.institutionName = onCloseModalEventArgs.result.response.companyName;
      }
    }

    if (onCloseModalEventArgs.closedViewContainerId == 'VC_LOANDEBOLR_210579' &&
      onCloseModalEventArgs.dialogCloseType == 0) {
      if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.response) {
        entities.PaymentAutomatic.client = onCloseModalEventArgs.result.response.customerID;
        entities.PaymentAutomatic.clientName = onCloseModalEventArgs.result.response.customerName;
        entities.PaymentAutomatic.clientRole = onCloseModalEventArgs.result.response.role
      }
    }

    if (onCloseModalEventArgs.closedViewContainerId == 'VC_ACCONTSOPT_347664' &&
      onCloseModalEventArgs.dialogCloseType == 0) {
      if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.response) {
        entities.PaymentAutomatic.account = onCloseModalEventArgs.result.response.code;
      }
    }
  };



  //Entity: PaymentAutomatic
  //PaymentAutomatic.account (TextInputButton) View: RePaymentCreateForm
  task_textInputButtonEvent_VA_ACCOUNTEPABOHPV_776232 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;

    //Open Modal
    let nav: any = textInputButtonEventArgs.commons.api.navigation;

    nav.address = {
      moduleId: 'LNSPR',
      subModuleId: 'OPRTN',
      taskId: 'T_LNSPRHZIKGUNT_664',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_ACCONTSOPT_347664'
    };

    nav.queryParameters = {
      mode: 8
    };
    nav.modalProperties = {
      size: 'md',
      callFromGrid: false
    };

    nav.customDialogParameters = {
      codCliente: textInputButtonEventArgs.model.PaymentAutomatic.client,
      formaPago: textInputButtonEventArgs.model.PaymentAutomatic.paymentMethod
    };
  };



  //Entity: PaymentAutomatic
  //PaymentAutomatic.client (TextInputButton) View: RepaymentCreateForm
  task_textInputButtonEvent_VA_CLIENTNIXWOQDSD_193232 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;
    let nav: any = textInputButtonEventArgs.commons.api.navigation;

    if (nav.getCustomDialogParameters()) {
      nav.label = this.cobis.translate("LNSPR.LBL_LNSPR_BSQUEDAIE_72552");
      nav.address = {
        moduleId: 'LNSPR',
        subModuleId: 'OPRTN',
        taskId: 'T_LNSPRWENJKGKJ_579',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_LOANDEBOLR_210579'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.modalProperties = {
        size: 'lg',
        callFromGrid: false
      };
      nav.customDialogParameters = {
        bankId: textInputButtonEventArgs.model.PaymentAutomatic.bankId,
      };
    }
  };



  //Entity: PaymentAutomatic
  //PaymentAutomatic.institution (TextInputButton) View: RepaymentCreateForm
  task_textInputButtonEvent_VA_INSTITUTIONNKHZ_389232 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;

    //open modal
    let nav: any = textInputButtonEventArgs.commons.api.navigation;

    nav.address = {
      moduleId: 'ASSTS',
      subModuleId: 'TRNSC',
      taskId: 'T_ASSTSROZTLMPE_144',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_COMPANIEEE_220144'
    };

    nav.queryParameters = {
      mode: 4095
    };
    nav.modalProperties = {
      size: 'md',
      callFromGrid: false
    };
  };



  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: PaymentAutomaticCreateForm
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    renderEventArgs.commons.execServer = false;
    // TODO - REFACTOR
    // $("button.close").hide();
    let nav: any = renderEventArgs.commons.api.navigation;
    let viewState: any = renderEventArgs.commons.api.viewState;

    if (nav.getCustomDialogParameters()) {
      entities.PaymentAutomatic.bankId = nav.getCustomDialogParameters().banco
      entities.PaymentAutomatic.paymentMethod = nav.getCustomDialogParameters().paymentMethod

      if (nav.getCustomDialogParameters().paymentCategory == 'PLANO') {
        viewState.hide('VA_ACCOUNTEPABOHPV_776232')
        viewState.show('VA_INSTITUTIONNKHZ_389232')
        viewState.show('VA_INSTITUTIONNEAE_518232')
      } else if (nav.getCustomDialogParameters().paymentCategory == 'NDAH') {
        viewState.show('VA_ACCOUNTEPABOHPV_776232')
        viewState.hide('VA_INSTITUTIONNKHZ_389232')
        viewState.hide('VA_INSTITUTIONNEAE_518232')
      } else {
        viewState.disable('G_REPAYMEEAE_620232')
        viewState.disable('G_REPAYMEERE_452232')
      }
    }
    renderEventArgs.commons.api.grid.refresh('QV_WX74_OJZ40', {
      bankId: entities.PaymentAutomatic.bankId,
      paymentMethod: entities.PaymentAutomatic.paymentMethod
    });
  };


  //gridRowDeleting QueryView: QV_WX74_OJZ40
  //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
  task_gridRowDeleting_QV_WX74_OJZ40 = (
    entities: Model,
    gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
  ) => {

    gridRowDeletingEventArgs.commons.execServer = true;
    //gridRowDeletingEventArgs.commons.serverParameters.PaymentAutomaticList = true;

  };







  //Start signature to Callback event to QV_WX74_OJZ40
  task_gridRowDeletingCallback_QV_WX74_OJZ40 = (
    entities: Model,
    gridRowDeletingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
  ) => {
    if (gridRowDeletingCallbackEventArgs.success) {
      gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.LBL_LNSPR_ELIMINATR_48672', false, null, this.LNSPR.timer);

      entities.PaymentAutomatic.institution = null
      entities.PaymentAutomatic.institutionName = null
      entities.PaymentAutomatic.institutionOld = null
      entities.PaymentAutomatic.client = null
      entities.PaymentAutomatic.clientName = null
      entities.PaymentAutomatic.clientOld = null
      entities.PaymentAutomatic.comments = null
      entities.PaymentAutomatic.percentage = 0.0
      entities.PaymentAutomatic.account = null
      // TODO - ALE
      gridRowDeletingCallbackEventArgs.commons.args.mode = executeCommandEventArgs.commons.constants.mode.Insert
      gridRowDeletingCallbackEventArgs.commons.api.viewState.label("VA_VABUTTONNVDIOQB_352232", "LNSPR.LBL_LOANS_LIMPIARVF_75606"); //Cmd Limpiar
      gridRowDeletingCallbackEventArgs.commons.api.viewState.label("VA_VABUTTONXOCQZHP_695232", "LNSPR.LBL_LOANS_AADIRWOQO_72396"); //Cmd Añadir
    }
    gridRowDeletingCallbackEventArgs.commons.api.grid.refresh('QV_WX74_OJZ40');
  };



  //gridRowSelecting QueryView: QV_WX74_OJZ40
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_WX74_OJZ40 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {
    gridRowSelectingEventArgs.commons.args.mode = gridRowSelectingEventArgs.commons.constants.mode.Update
    gridRowSelectingEventArgs.commons.execServer = true;
  };







  //Start signature to Callback event to QV_WX74_OJZ40
  task_gridRowSelectingCallback_QV_WX74_OJZ40 = (
    entities: Model,
    gridRowSelectingCallbackEventArgs: CobisModelGridRowSelectingCallbackEventArgs
  ) => {
    if (gridRowSelectingCallbackEventArgs.success == true) {
      gridRowSelectingCallbackEventArgs.commons.api.viewState.label("VA_VABUTTONNVDIOQB_352232", "LNSPR.LBL_LNSPR_CANCELARR_70217"); //Cmd Cancelar
    }
  };



}