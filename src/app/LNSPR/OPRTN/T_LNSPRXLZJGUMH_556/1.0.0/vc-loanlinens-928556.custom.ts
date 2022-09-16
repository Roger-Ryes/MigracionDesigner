import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-loanlinens-928556.model';
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

/* variables locales de LoanLineCreation*/
let calcular: any;

export class VcLoanlinens928556Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_LNSPRXLZJGUMH_556"




  //Entity: LoansLinesHeader
  //LoansLinesHeader.fechaAprobacion (DateField) View: LoanLineCreation
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_FECHAAPROBACIOO_814412 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    if ((changedEventArgs.newValue && entities.LoanLinesCreation.dueDate)) {
      entities.LoanLinesCreation.daysNumber = null;
      changedEventArgs.commons.execServer = true;
    } else if (changedEventArgs.newValue && entities.LoanLinesCreation.daysNumber) {
      entities.LoanLinesCreation.dueDate = null;
      changedEventArgs.commons.execServer = true;
    } else {
      changedEventArgs.commons.execServer = false;
      calcular = true;
    }

    //changedEventArgs.commons.serverParameters.LoansLinesHeader = true;

  };


  //Start signature to Callback event to VA_FECHAAPROBACIOO_814412
  task_changeCallback_VA_FECHAAPROBACIOO_814412 = (
    entities: Model,
    changeCallbackEventArgs: CobisModelChangeCallbackEventArgs
  ) => {
    if (changeCallbackEventArgs.success) {
      calcular = false;
    }
  };




  //Entity: LoansLinesHeader
  //LoansLinesHeader.fechaVencimiento (DateField) View: LoanLineCreation
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_FECHAVENCIMINOT_231412 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    if (changedEventArgs.newValue && calcular && entities.LoanLinesCreation.startDate) {
      entities.LoanLinesCreation.daysNumber = null;
      changedEventArgs.commons.execServer = true;
    } else {
      if (!entities.LoanLinesCreation.startDate) {
        changedEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_FECHAINEQ_39778', false, null, this.LNSPR.timer);
      }
      changedEventArgs.commons.execServer = false;
      calcular = true;
    }
    //changedEventArgs.commons.serverParameters.LoansLinesHeader = true;

  };


  //Start signature to Callback event to VA_FECHAVENCIMINOT_231412
  task_changeCallback_VA_FECHAVENCIMINOT_231412 = (
    entities: Model,
    changeCallbackEventArgs: CobisModelChangeCallbackEventArgs
  ) => {
    if (changeCallbackEventArgs.success) {
      calcular = false;
    }
  };


  //Entity: LoansLinesHeader
  //LoansLinesHeader.naturalezaOp (RadioButtonList) View: LoanLinesCreation
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_NATURALEZAOPFBV_807412 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.viewState.enable('VA_CLIENTENOMBREEE_802412');
    if (changedEventArgs.newValue == 'P') {
      changedEventArgs.commons.api.viewState.label("VA_CLIENTENOMBREEE_802412", "LNSPR.LBL_LNSPR_FONDEADOR_63367");
    } else {
      changedEventArgs.commons.api.viewState.label("VA_CLIENTENOMBREEE_802412", "LNSPR.LBL_LNSPR_CLIENTEPO_59022");
    }

    changedEventArgs.commons.execServer = false;

  };



  //Entity: LoansLinesHeader
  //LoansLinesHeader.numDias (TextInputBox) View: LoanLinesCreation
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_NUMDIASKUFOWPOC_532412 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    if (changedEventArgs.newValue && calcular && entities.LoanLinesCreation.startDate) {
      entities.LoanLinesCreation.dueDate = null;
      changedEventArgs.commons.execServer = true;
    } else {
      if (!entities.LoanLinesCreation.startDate) {
        changedEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_FECHAINEQ_39778', false, null, this.LNSPR.timer);
      }
      changedEventArgs.commons.execServer = false;
      calcular = true;
    }
    //changedEventArgs.commons.serverParameters.LoansLinesHeader = true;

  };


  //Start signature to Callback event to VA_NUMDIASKUFOWPOC_532412
  task_changeCallback_VA_NUMDIASKUFOWPOC_532412 = (
    entities: Model,
    changeCallbackEventArgs: CobisModelChangeCallbackEventArgs
  ) => {
    if (changeCallbackEventArgs.success) {
      calcular = false;
    }
  };


  // (Button) 
  task_executeCommand_VA_VABUTTONBWOPFCN_144412 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = true;


  };

  //Start signature to Callback event to VA_VABUTTONBWOPFCN_144412
  task_executeCommandCallback_VA_VABUTTONBWOPFCN_144412 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    if (executeCommandCallbackEventArgs.success) {
      executeCommandCallbackEventArgs.commons.api.parentVc!.viewState.G_LOANLINACR_870461.visible = true;
      executeCommandCallbackEventArgs.commons.api.parentVc!.viewState.G_LOANLINTRE_952461.visible = true;
      executeCommandCallbackEventArgs.commons.api.parentVc!.model.LoanLinesCreation = entities.LoanLinesCreation;
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_OPERACIOA_60671', false, null, this.LNSPR.timer);

      if (entities.ValidationGroup.result == 'S') {
        executeCommandCallbackEventArgs.commons.api.parentVc!.viewState.G_LOANLINACR_870461.visible = true;
      } else {
        executeCommandCallbackEventArgs.commons.api.parentVc!.viewState.G_LOANLINRER_722461.visible = true;
        executeCommandCallbackEventArgs.commons.api.parentVc!.viewState.G_LOANLINACR_870461.visible = false;
      }

      executeCommandCallbackEventArgs.commons.api.viewState.disable('VA_VABUTTONBWOPFCN_144412');
    }
  };


  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: LoanLineCreation
  task_initData_VC_LOANLINENS_928556 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    if (entities.LoanLinesCreation.nature) {
      initDataEventArgs.commons.api.viewState.enable('VA_CLIENTENOMBREEE_802412');
    } else {
      initDataEventArgs.commons.api.viewState.disable('VA_CLIENTENOMBREEE_802412');
    }
    if (initDataEventArgs.commons.api.vc.mode == initDataEventArgs.commons.constants.mode.Insert) {
      calcular = true;
      entities.LoanLinesCreation.used = 0;
      entities.LoanLinesCreation.available = 0;
      entities.LoanLinesCreation.estado = 'PEN';
      entities.LoanLinesCreation.startDate = new Date(this.cobis.containerScope.preferences.processDate);
      entities.LoanLinesCreation.office = JSON.parse(sessionStorage.userOffice).code;
      initDataEventArgs.commons.execServer = false;

    } else if (initDataEventArgs.commons.api.vc.mode == initDataEventArgs.commons.constants.mode.Query) {

      entities.LoanLinesCreation.sequential = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().secuencial;

      initDataEventArgs.commons.execServer = true;
    } else if (initDataEventArgs.commons.api.vc.mode == initDataEventArgs.commons.constants.mode.Update) {

      entities.LoanLinesCreation.sequential = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().secuencial;

      initDataEventArgs.commons.execServer = true;
    }



  };

  //Start signature to Callback event to VC_LOANLINENS_928556
  task_initDataCallback_VC_LOANLINENS_928556 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
  ) => {
    if (initDataCallbackEventArgs.success) {
      calcular = true;
      initDataCallbackEventArgs.commons.api.parentVc!.model.LoanLinesCreation = entities.LoanLinesCreation;

      if (entities.LoanLinesCreation.nature == 'P') {
        initDataCallbackEventArgs.commons.api.viewState.label("VA_CLIENTENOMBREEE_802412", "LNSPR.LBL_LNSPR_FONDEADOR_63367");
      } else {
        initDataCallbackEventArgs.commons.api.viewState.label("VA_CLIENTENOMBREEE_802412", "LNSPR.LBL_LNSPR_CLIENTEPO_59022");
      }

    }
  };




  //Entity: LoansLinesHeader
  //LoansLinesHeader.official (DropDownList) View: LoanLineCreation
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_OFFICIALWHTPNAJ_913412 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.LoansLinesHeader = true;

  };

  //Start signature to Callback event to VA_OFFICIALWHTPNAJ_913412
  task_loadCatalogCallback_VA_OFFICIALWHTPNAJ_913412 = (
    entities: Model,
    loadCatalogCallbackEventArgs: CobisModelLoadCatalogCallbackEventArgs
  ) => {
    let combobox: any = loadCatalogCallbackEventArgs.commons.api.viewState.getData("VA_OFFICIALWHTPNAJ_913412");

    for (let i: any = 0; combobox.length > i; i++) {
      if (JSON.parse(sessionStorage.UserName) == combobox[i].value.split('-')[1].trim()) {
        entities.LoanLinesCreation.official = combobox[i].code;
        break;
      }

    }
  };




  //Entity: LoansLinesHeader
  //LoansLinesHeader.ubication (DropDownList) View: LoanLineCreation
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_UBICATIONVMLBHG_987412 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.LoansLinesHeader = true;

  };



  //Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
  //ViewContainer: LoanLineCreation
  task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {

    onCloseModalEventArgs.commons.execServer = false;
    if (onCloseModalEventArgs.closedViewContainerId == "findCustomer" &&
      onCloseModalEventArgs.dialogCloseType == onCloseModalEventArgs.commons.constants.dialogCloseType.Interactive) {
      if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.selectedData) {
        let data: any = onCloseModalEventArgs.result.selectedData;
        if (data.isGroup) {
          entities.LoanLinesCreation.customerGroup = data.code;
          entities.LoanLinesCreation.customer = null;
        } else {
          entities.LoanLinesCreation.customer = data.code;
          entities.LoanLinesCreation.customerGroup = null;
        }
        entities.LoanLinesCreation.customerName = data.code + " - " + data.name;
      }
    }

  };

  //Entity: LoansLinesHeader
  //LoansLinesHeader.clienteNombre (TextInputButton) View: LoanLinesCreation
  task_textInputButtonEvent_VA_CLIENTENOMBREEE_802412 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
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

    if (textInputButtonEventArgs.commons.api.vc.model.LoanLinesCreation.nature == 'P') {
      nav.customDialogParameters = {
        mode: "findJuridicPerson"
      }
    }
  };



  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: LoanLineCreation
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {

    renderEventArgs.commons.execServer = false;

  };


}