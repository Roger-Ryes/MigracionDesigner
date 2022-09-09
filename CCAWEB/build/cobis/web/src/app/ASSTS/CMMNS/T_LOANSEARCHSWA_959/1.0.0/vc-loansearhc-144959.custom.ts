import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-loansearhc-144959.model';
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

/* variables locales de T_LOANSEARCHSWA_959*/

export class VcLoansearhc144959Custom extends CobisDesignerCustomEvent {

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

  queryString: any = {};


  isGroup: any = 'N';


  task_closeModalEvent_findCustomer = (args: any) => {
    let resp: any = args.commons.api.vc.dialogParameters;
    let customerCode: any = args.commons.api.vc.dialogParameters.CodeReceive;
    let CustomerName: any = args.commons.api.vc.dialogParameters.name;
    let identification: any = args.commons.api.vc.dialogParameters.documentId;
    let customerType: any = args.commons.api.vc.dialogParameters.customerType;
    let title: any = '';
    /*
    if (args.model.LoanInstancia.idOptionMenu == 14) {
        args.model.LoanSearchFilter.group = 'S';
    }
    */

    switch (customerType) {
      case 'P':
        title = 'ASSTS.LBL_ASSTS_CDIGOCLEN_93241';
        //isGroup = 'N';
        break;
      case 'C':
        title = 'ASSTS.LBL_ASSTS_CDIGOCLEN_93241';
        //isGroup = 'N';
        break;
      case 'S':
        title = 'ASSTS.LBL_ASSTS_CDIGOGRPU_89879';
        //isGroup = 'S';
        break;
      case 'G':
        title = 'ASSTS.LBL_ASSTS_CDIGOGRPU_89879';
        //isGroup = 'S';
        break;
    }

    args.model.LoanSearchFilter.numIdentification = customerCode;
    args.commons.api.viewState.label("VA_CODCLIENTCIXLEY_866508", title);
  };

  //Entity: LoanSearchFilter
  //LoanSearchFilter.group (CheckBox) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_8665NTBOQUTYEHZ_620508 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    if (changedEventArgs.newValue == 'S') {
      changedEventArgs.commons.api.viewState.label("VA_CODCLIENTCIXLEY_866508", "ASSTS.LBL_ASSTS_CDIGOGRPU_89879");
      //isGroup = 'S'
    } else {
      changedEventArgs.commons.api.viewState.label("VA_CODCLIENTCIXLEY_866508", "ASSTS.LBL_ASSTS_CDIGOCLEN_93241");
      //isGroup = 'N'
    }
  };

  //Entity: LoanSearchFilter
  //LoanSearchFilter.avanceSearch (CheckBox) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_AVANCESEARCHMXA_533508 = (entities: Model, changeEventArgs: any) => {
    changeEventArgs.commons.execServer = false;
    let api: any = changeEventArgs.commons.api;

    api.vc.viewState.VA_CODCURRENCYKYKA_122508.visible = changeEventArgs.newValue;
    api.vc.viewState.VA_DISBURSEMENTDTD_602508.visible = changeEventArgs.newValue;
    api.vc.viewState.VA_STATUSRUGGOTSMF_965508.visible = changeEventArgs.newValue;
    api.vc.viewState.VA_MIGRATEDOPERFRB_417508.visible = changeEventArgs.newValue;
    api.vc.viewState.VA_TYPEDCJJSHZRQGI_148508.visible = changeEventArgs.newValue;

    if (!changeEventArgs.newValue) {
      entities.LoanSearchFilter.codCurrency = null;
      entities.LoanSearchFilter.disbursementDate = null;
      entities.LoanSearchFilter.status = null;
      entities.LoanSearchFilter.migratedOper = null;
      entities.LoanSearchFilter.type = null;
    }
  };



  //Entity: LoanSearchFilter
  //LoanSearchFilter.numIdentification (TextInputButton) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_CODCLIENTCIXLEY_866508 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;

    changedEventArgs.commons.api.grid.removeAllRows("Loan");
  };

  //Entity: LoanSearchFilter
  //LoanSearchFilter.codCurrency (ComboBox) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_CODCURRENCYKYKA_122508 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows("Loan");

  };



  //Entity: LoanSearchFilter
  //LoanSearchFilter.disbursementDate (DateField) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_DISBURSEMENTDTD_602508 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows("Loan");

  };



  //Entity: LoanSearchFilter
  //LoanSearchFilter.migratedOper (TextInputBox) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_MIGRATEDOPERFRB_417508 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows("Loan");

  };



  //Entity: LoanSearchFilter
  //LoanSearchFilter.numProcedures (TextInputBox) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_NUMPROCEDURESSS_195508 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows("Loan");

  };



  //Entity: LoanSearchFilter
  //LoanSearchFilter.office (DropDownList) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_OFFICEVEGBCEQOG_104508 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows("Loan");

  };



  //Entity: LoanSearchFilter
  //LoanSearchFilter.operation (TextInputBox) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_OPERATIONZDFLWM_772508 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows("Loan");

  };



  //Entity: LoanSearchFilter
  //LoanSearchFilter.status (DropDownList) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_STATUSRUGGOTSMF_965508 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    //changedEventArgs.commons.serverParameters.LoanSearchFilter = true;
    changedEventArgs.commons.api.grid.removeAllRows("Loan");

  };



  //Entity: LoanSearchFilter
  //LoanSearchFilter.type (DropDownList) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_TYPEDCJJSHZRQGI_148508 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows("Loan");

  };

  //Entity: LoanSearchFilter
  //LoanSearchFilter. (Button) View: LoanSearchForm
  //Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
  task_executeCommand_VA_VABUTTONBCZSHFM_208508 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;
    //executeCommandEventArgs.commons.serverParameters.LoanSearchFilter = true;
  };


  //ListaEstadosQuery Entity: ListaEstados
  task_executeQuery_Q_LISTSEAD_QV44 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.operacion = 'W';
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.ListaEstados = true;
  };

  //LoanQuery_3009 Entity: 
  task_executeQuery_Q_LOANDPQM_3009 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.serverParameters.LoanSearchFilter = true;
    let executeServer: any = true;
    let transactNumber: any = executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.numProcedures;
    let clientCode: any = parseInt(executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.numIdentification);
    if (transactNumber > 2147483647) {
      executeServer = false;
    } else {
      if (!isNaN(clientCode)) {
        if (clientCode > 2147483647) {
          executeServer = false;
        }
      }
    }

    if (this.queryString.menu == Constants.MENU_DISBUSMNT_PART) {
      executeQueryEventArgs.parameters.isDisbursment = 'S';
    } else {
      executeQueryEventArgs.parameters.isDisbursment = 'N';
    }

    executeQueryEventArgs.parameters.category = this.queryString.category ? this.queryString.category : 0;
    executeQueryEventArgs.parameters.desempar = this.queryString.category == 10 && this.queryString.menu == 17 ? 'S' : "N";

    let LoanSearchFilter: any = executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter;
    executeQueryEventArgs.parameters.operation = LoanSearchFilter.operation ? LoanSearchFilter.operation : null;
    executeQueryEventArgs.parameters.numProcedure = LoanSearchFilter.numProcedures ? LoanSearchFilter.numProcedures : null;
    executeQueryEventArgs.parameters.numIdentification = LoanSearchFilter.numIdentification ? LoanSearchFilter.numIdentification : null;
    executeQueryEventArgs.parameters.office = LoanSearchFilter.office;
    executeQueryEventArgs.parameters.codCurrency = LoanSearchFilter.codCurrency;
    executeQueryEventArgs.parameters.disbursementDate = LoanSearchFilter.disbursementDate ? LoanSearchFilter.disbursementDate : null;
    executeQueryEventArgs.parameters.status = LoanSearchFilter.status;
    executeQueryEventArgs.parameters.migratedOper = LoanSearchFilter.migratedOper ? LoanSearchFilter.migratedOper : null;
    executeQueryEventArgs.parameters.group = LoanSearchFilter.group;
    executeQueryEventArgs.parameters.type = LoanSearchFilter.type;


    executeQueryEventArgs.commons.execServer = executeServer;
  };

  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: LoanSearchForm
  task_initData_VC_LOANSEARHC_144959 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    this.queryString = Utils.getQueryStrings();
    initDataEventArgs.commons.execServer = false;

  };

  //Entity: LoanSearchFilter
  //LoanSearchFilter.numIdentification (TextInputButton) View: LoanSearchForm

  task_textInputButtonEvent_VA_CODCLIENTCIXLEY_866508 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;
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
      files: ["/customer/services/find-customers-srv.js", "/customer/controllers/find-customers-ctrl.js"]
    }];
    //Validacion para busqueda de operaciones grupales
    /* if (textInputButtonEventArgs.model.LoanInstancia.idOptionMenu == 14 && textInputButtonEventArgs.model.LoanSearchFilter.isGroup == true) {
        nav.label = cobis.translate('ASSTS.LBL_ASSTS_BSQUEDARR_52528');
        nav.customDialogParameters = {
             client: 0,
             type: 3,
             mode: "findGroup"
        };
     } else {
        nav.customDialogParameters = {};
     }*/
  };

  //Entity: LoanSearchFilter
  //LoanSearchFilter.numIdentification (TextInputButton) View: LoanSearchForm

  task_textInputButtonEventGrid_VA_CODCLIENTCIXLEY_866508 = (textInputButtonEventGridEventArgs: CobisModelOnInputButtonEventArgs) => {

    textInputButtonEventGridEventArgs.commons.execServer = false;


  };

  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: LoanSearchForm
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    renderEventArgs.commons.execServer = false;

    entities.LoanSearchFilter.group = entities.LoanSearchFilter.group ? entities.LoanSearchFilter.group : 'N';

  };

  //gridRowSelecting QueryView: QV_3009_96085
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_3009_96085 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {
    gridRowSelectingEventArgs.commons.execServer = false;

    let subModuleId: any = "",
      taskId: any = "",
      vcId: any = "",
      label: any = "",
      parameters: any = {
        menu: this.queryString.menu,
        loan: gridRowSelectingEventArgs.rowData
      };

    switch (this.queryString.menu) {

      case Constants.MENU_PROYECTINST:
        subModuleId = "MNTNN";
        taskId = "T_PROJECTIONNQI_244";
        vcId = "VC_PROJECTIIU_405244";
        label = this.cobis.translate('ASSTS.LBL_ASSTS_PROYECCNT_32454'); //Proyeccion Cuota
        break;
      case Constants.MENU_ASSTSSZCLDZTQ:
        subModuleId = "TRNSC";
        taskId = "T_ASSTSSZCLDZTQ_839";
        vcId = "VC_SIMULATEAA_568839";
        label = this.cobis.translate('ASSTS.LBL_ASSTS_SIMULACNI_30933'); //Simulacion Pag
        break;
      case Constants.MENU_DISBUSMNT_PART:
        subModuleId = "TRNSC";
        taskId = "T_ASSTSEFYTNIXU_871";
        vcId = "VC_LOANPARTIR_265871";
        label = this.cobis.translate("ASSTS.LBL_ASSTS_DESEMBOII_16677"); //"Desembolso Parcial";
        break;
      case Constants.MENU_SIM_REAJ:
        subModuleId = "TRNSC"; //Transactions
        taskId = "T_ASSTSPENVMXNQ_619"; //id FormSimple a cargar
        vcId = "VC_PROJECTIRJ_862619"; //Container
        label = this.cobis.translate("ASSTS.LBL_ASSTS_SIMULACJS_15300"); //"Simulación Reajuste";
        break;
    }
    Navigation.taskRedirect(subModuleId, taskId, vcId, label, gridRowSelectingEventArgs, parameters);
  };


}