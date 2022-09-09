import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-companycee-242845.model';
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

/* variables locales de T_ASSTSVIKJRAKP_845*/

export class VcCompanycee242845Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_ASSTSVIKJRAKP_845"




  //Entity: Company
  //Company.paymentForm (DropDownList) View: CompanyCreateForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_PAYMENTUVUDGASL_450399 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    let viewState: any = changedEventArgs.commons.api.viewState;

    if (viewState.getDataItem("VA_PAYMENTUVUDGASL_450399") &&
      viewState.getDataItem("VA_PAYMENTUVUDGASL_450399").pCobis == 4) {
      viewState.enable('VA_ACCOUNTNAAOFHSO_558399');
    } else {
      viewState.disable('VA_ACCOUNTNAAOFHSO_558399');
      entities.Company.account = null;
    }
  };




  // (Button) 
  task_executeCommand_CM_TASSTSVI_9TC = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;

  };




  // (Button) 
  task_executeCommand_CM_TASSTSVI_S4A = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {

    executeCommandEventArgs.commons.execServer = true;
    executeCommandEventArgs.commons.serverParameters.Company = true;
  };


  //Start signature to Callback event to CM_TASSTSVI_S4A
  task_executeCommandCallback_CM_TASSTSVI_S4A = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    let api: any = executeCommandCallbackEventArgs.commons.api;
    let mode: any = executeCommandCallbackEventArgs.commons.constants.mode;

    if (executeCommandCallbackEventArgs.success) {
      api.viewState.disable('CM_TASSTSVI_S4A')
      api.viewState.disable('G_COMPANYCTE_467399')
      api.viewState.disable('G_COMPANYTCT_526399')
      api.viewState.disable('G_COMPANYECE_756399')
      api.viewState.disable('G_COMPANYAEE_130399')
      api.viewState.disable('G_COMPANYECE_272399')
      api.viewState.disable('G_COMPANYRTT_593399')
      api.grid.refresh('QV_ON17_ABV99');
      if (api.vc.mode == mode.Insert) {
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_REGISTRAO_10733', false, null, this.ASSTS.timer);
      } else if (api.vc.mode == mode.Update) {
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_REGISTRAO_10733', false, null, this.ASSTS.timer);
      }
    }
  };



  //ListaFormaPagoQuery Entity: ListaFormaPago
  task_executeQuery_Q_LISTOOGA_DP31 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.tipoOperacion = "NEGOCIOS";
    executeQueryEventArgs.parameters.moneda = 0;
    executeQueryEventArgs.parameters.tipo = 2;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.ListaFormaPago = true;
  };


  //Start signature to Callback event to Q_LISTOOGA_DP31
  task_executeQueryCallback_Q_LISTOOGA_DP31 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };




  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: CompanyCreateForm
  task_initData_VC_COMPANYCEE_242845 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    let api: any = initDataEventArgs.commons.api;
    let mode: any = initDataEventArgs.commons.constants.mode;
    let execServer: any = true;
    if (api.vc.mode == mode.Insert) {
      execServer = false;
      //initialize
      // TODO
      entities.Company.paymentFormService = (entities.Company.paymentFormService) ? entities.Company.Company : 'T';
      entities.Company.paymentFrequency = (entities.Company.paymentFrequency) ? entities.Company.paymentFrequency : 'Q';
      entities.Company.agreement = (entities.Company.agreement) ? entities.Company.agreement : 'N';
      entities.Company.paymentPercentage = 0.0
      entities.Company.rateApply = 0.0
    } else if (api.vc.mode == mode.Update) {
      execServer = true;
    } else if (api.vc.mode == mode.Query) {
      if (api.parentVc && (api.parentVc.id == 'VC_COMPANIECR_302580')) {
        let nav: any = initDataEventArgs.commons.api.navigation;
        if (nav.getCustomDialogParameters()) {
          entities.CompaniesList.institution = nav.getCustomDialogParameters().institution;
          execServer = true;
        }
      }
    }
    initDataEventArgs.commons.execServer = execServer;
    initDataEventArgs.commons.serverParameters.Company = true;
    initDataEventArgs.commons.serverParameters.CompaniesList = true;
  };


  //Start signature to Callback event to VC_COMPANYCEE_242845
  task_initDataCallback_VC_COMPANYCEE_242845 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
  ) => {
    //here your code
  };




  //Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
  //ViewContainer: CompanyCreateForm
  task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {

    onCloseModalEventArgs.commons.execServer = false;

    if (onCloseModalEventArgs.closedViewContainerId == "findCustomer" &&
      onCloseModalEventArgs.dialogCloseType == onCloseModalEventArgs.commons.constants.dialogCloseType.Interactive) {
      if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.selectedData) {
        let data: any = onCloseModalEventArgs.result.selectedData;
        entities.Company.client = data.code;
        entities.Company.clientName = data.name;
        //onCloseModalEventArgs.commons.api.viewState.disable('VA_FULLNAMENVMNPEV_901221');
      }
    }

    if (onCloseModalEventArgs.closedViewContainerId == 'VC_ACCONTSOPT_347664' &&
      onCloseModalEventArgs.dialogCloseType == 0) {
      if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.response) {
        entities.Company.account = onCloseModalEventArgs.result.response.code;
      }
    }

  };



  //Entity: Company
  //Company.account (TextInputButton) View: CompanyCreateForm
  task_textInputButtonEvent_VA_ACCOUNTNAAOFHSO_558399 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;
    let api: any = textInputButtonEventArgs.commons.api;
    let mode: any = textInputButtonEventArgs.commons.constants.mode;
    if (api.vc.mode != mode.Query) {
      //Open modal
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
        codCliente: textInputButtonEventArgs.model.Company.client,
        formaPago: textInputButtonEventArgs.model.Company.paymentForm
      };
    }
  };



  //Entity: Company
  //Company.client (TextInputButton) View: CompanyCreateForm
  task_textInputButtonEvent_VA_CLIENTRGTMTTEWO_906399 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;
    let api: any = textInputButtonEventArgs.commons.api;
    let mode: any = textInputButtonEventArgs.commons.constants.mode;
    if (api.vc.mode != mode.Query) {
      let nav: any = textInputButtonEventArgs.commons.api.navigation;
      nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_BSQUEDAEC_38534');
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
    }
  };



  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: CompanyCreateForm
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    renderEventArgs.commons.execServer = false;
    let api: any = renderEventArgs.commons.api;
    let mode: any = renderEventArgs.commons.constants.mode;
    if (api.vc.mode == mode.Insert) {
      api.viewState.label('CM_TASSTSVI_S4A', 'ASSTS.LBL_ASSTS_CREAROWFP_92542'); //Crear
      api.viewState.label('CM_TASSTSVI_9TC', 'ASSTS.LBL_ASSTS_CANCELARR_70217'); //Cancelar
    } else if (api.vc.mode == mode.Update) {
      api.viewState.label('CM_TASSTSVI_S4A', 'ASSTS.LBL_ASSTS_GUARDARRI_81055'); //Guardar
      api.viewState.label('CM_TASSTSVI_9TC', 'ASSTS.LBL_ASSTS_CERRARGRF_18229'); //Cerrar
    } else if (api.vc.mode == mode.Query) {
      api.viewState.hide('CM_TASSTSVI_S4A'); //Cmd Crear
      api.viewState.label('CM_TASSTSVI_9TC', 'ASSTS.LBL_ASSTS_CERRARGRF_18229'); //Cerrar
      api.viewState.disable('VA_PAYMENTSERVICCC_447399') //Forma Pago Servicio
      api.viewState.disable('VA_PAYMENTFREQUNCN_755399') //Frecuencia Descuento
      api.viewState.disable('VA_PAYMENTUVUDGASL_450399') //Forma de Pago
      api.viewState.disable('VA_STATEENISMIMLSA_521399') //Estado
      api.viewState.disable('VA_AGREEMENTZHTVHP_162399') //Convenio 
      api.viewState.disable('VA_CLIENTRGTMTTEWO_906399') //Botton Cliente
      api.viewState.disable('VA_ACCOUNTNAAOFHSO_558399') //Botton Nueva Cuenta
    }
  };


}