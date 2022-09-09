import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-loanslinss-962737.model';
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

/* variables locales de T_LNSPRFYCKEVVP_737*/
let isGroup: any;

let menu: any;

export class VcLoanslinss962737Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_LNSPRFYCKEVVP_737"

  formatDateJs = (date: any) => {
    let d: any = new Date(date),
      month: any = '' + (d.getMonth() + 1),
      day: any = '' + d.getDate(),
      year: any = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [month, day, year].join('/');
  }




  //Entity: LoansLines
  //LoansLines.clienteDesc (TextInputButton) View: LoansLines
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_CLIENTEDESCMPQT_151383 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows('LoansLinesList');

  };

  //Entity: LoansLines
  //LoansLines.criterios (CheckBox) View: LoansLines
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_CRITERIOSIKUYOI_982383 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    if (changedEventArgs.newValue) {
      changedEventArgs.commons.api.viewState.show('VA_NUMLINEACKAOJVB_120383');
      changedEventArgs.commons.api.viewState.show('VA_NUMTRAMITEUFKMW_361383');
      changedEventArgs.commons.api.viewState.show('VA_OFICINANRBOTWYT_467383');
      changedEventArgs.commons.api.viewState.show('VA_MONEDAXWNJSQNUF_555383');
      changedEventArgs.commons.api.viewState.show('VA_DATEINIHDUJJRBN_500383');
      changedEventArgs.commons.api.viewState.show('VA_DATEVTOIOLFWTXY_452383');
      changedEventArgs.commons.api.viewState.show('VA_NUMPRESTAMORRMP_430383');
      changedEventArgs.commons.api.viewState.show('VA_ESTADOZXSPUMQFP_238383');
    } else {
      changedEventArgs.commons.api.viewState.hide('VA_NUMLINEACKAOJVB_120383');
      changedEventArgs.commons.api.viewState.hide('VA_NUMTRAMITEUFKMW_361383');
      changedEventArgs.commons.api.viewState.hide('VA_OFICINANRBOTWYT_467383');
      changedEventArgs.commons.api.viewState.hide('VA_MONEDAXWNJSQNUF_555383');
      changedEventArgs.commons.api.viewState.hide('VA_DATEINIHDUJJRBN_500383');
      changedEventArgs.commons.api.viewState.hide('VA_DATEVTOIOLFWTXY_452383');
      changedEventArgs.commons.api.viewState.hide('VA_NUMPRESTAMORRMP_430383');
      changedEventArgs.commons.api.viewState.hide('VA_ESTADOZXSPUMQFP_238383');
    }

  };




  //Entity: LoansLines
  //LoansLines.dateIni (DateField) View: LoansLines
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_DATEINIHDUJJRBN_500383 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows('LoansLinesList');

  };



  //Entity: LoansLines
  //LoansLines.dateVto (DateField) View: LoansLines
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_DATEVTOIOLFWTXY_452383 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows('LoansLinesList');
  };



  //Entity: LoansLines
  //LoansLines.estado (DropDownList) View: LoansLines
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_ESTADOZXSPUMQFP_238383 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows('LoansLinesList');
  };



  //Entity: LoansLines
  //LoansLines.moneda (DropDownList) View: LoansLines
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_MONEDAXWNJSQNUF_555383 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows('LoansLinesList');

  };

  //Entity: LoansLines
  //LoansLines.naturaleza (RadioButtonList) View: LoansLines
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_NATURALEZAEFWDR_861383 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    entities.LoansLines.clienteDesc = null;
    entities.LoansLines.clientCode = null;
    changedEventArgs.commons.api.grid.removeAllRows('LoansLinesList');
    if (changedEventArgs.newValue == 'P') {
      changedEventArgs.commons.api.viewState.label("VA_CLIENTEDESCMPQT_151383", "LNSPR.LBL_LNSPR_FONDEADOR_63367");
    } else {
      changedEventArgs.commons.api.viewState.label("VA_CLIENTEDESCMPQT_151383", "LNSPR.LBL_LNSPR_CLIENTEPO_59022");
    }


  };




  //Entity: LoansLines
  //LoansLines.numLinea (TextInputBox) View: LoansLines
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_NUMLINEACKAOJVB_120383 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows('LoansLinesList');
  };



  //Entity: LoansLines
  //LoansLines.numPrestamo (TextInputBox) View: LoansLines
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_NUMPRESTAMORRMP_430383 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows('LoansLinesList');

  };



  //Entity: LoansLines
  //LoansLines.numTramite (TextInputBox) View: LoansLines
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_NUMTRAMITEUFKMW_361383 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows('LoansLinesList');

  };



  //Entity: LoansLines
  //LoansLines.oficina (DropDownList) View: LoansLines
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_OFICINANRBOTWYT_467383 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.grid.removeAllRows('LoansLinesList');

  };

  //Entity: LoansLines
  //LoansLines. (Button) View: LoansLines
  //Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
  task_executeCommand_VA_VAVABUTTONZS600_426383 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    if (entities.LoansLines.clientCode) {
      executeCommandEventArgs.commons.api.grid.refresh('QV_ZTPR_WQQ92');
    } else {
      executeCommandEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_CLIENTEQI_78561', false, null, timer);
    }
    executeCommandEventArgs.commons.execServer = false;
  };

  //LoansLinesListQuery Entity: LoansLinesList
  task_executeQuery_Q_LOANSISS_EV86 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let api: any = executeQueryEventArgs.commons.api;

    if (!api.parentVc) {
      let loansLines: any = executeQueryEventArgs.commons.api.vc.model.LoansLines;
      executeQueryEventArgs.parameters.lineCod = loansLines.numLinea ? loansLines.numLinea : null;
      executeQueryEventArgs.parameters.loanCod = loansLines.numPrestamo ? loansLines.numPrestamo : null;
      executeQueryEventArgs.parameters.office = loansLines.oficina ? loansLines.oficina : null;
      executeQueryEventArgs.parameters.procedure = loansLines.numTramite ? loansLines.numTramite : null;
      if (isGroup) {
        executeQueryEventArgs.parameters.groupCod = loansLines.clientCode ? loansLines.clientCode : null;
      } else {
        executeQueryEventArgs.parameters.clientCod = loansLines.clientCode ? loansLines.clientCode : null;
      }
      executeQueryEventArgs.parameters.creationDate = loansLines.dateIni ? loansLines.dateIni : null;
      executeQueryEventArgs.parameters.expirationDate = loansLines.dateVto ? loansLines.dateVto : null;
      executeQueryEventArgs.parameters.coinCod = loansLines.moneda ? loansLines.moneda : null;
      executeQueryEventArgs.parameters.status = loansLines.estado ? loansLines.estado : null;
    } else {
      isGroup = api.navigation.getCustomDialogParameters().esGrupo;
      if (isGroup) {
        executeQueryEventArgs.parameters.groupCod = api.navigation.getCustomDialogParameters().cliente;
      } else {
        executeQueryEventArgs.parameters.clientCod = api.navigation.getCustomDialogParameters().cliente;
      }

    }

    executeQueryEventArgs.parameters.sequencial = 0;
    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_OS86_OQI18', ['sequential'], executeQueryEventArgs);
    if (executeQueryEventArgs.config?.appendRecords) {
      executeQueryEventArgs.parameters.sequencial = executeQueryEventArgs.parameters.sequential;

    }

    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.LoansLinesList = true;
  };



  //Start signature to Callback event to Q_LOANSISS_EV86
  task_executeQueryCallback_Q_LOANSISS_EV86 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };


  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: LoansLines
  task_initData_VC_LOANSLINSS_962737 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = false;
    entities.LoansLines.naturaleza = "A";
    entities.LoansLines.criterios = false;
    menu = LNSPR.getQueryStrings().menu;

  };

  //Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
  //ViewContainer: LoansLines
  task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
    onCloseModalEventArgs.commons.execServer = false;

    let clienteModal: any = onCloseModalEventArgs.result.selectedData;

    if (clienteModal) {
      entities.LoansLines.clientCode = clienteModal.code;
      entities.LoansLines.clienteDesc = clienteModal.code + " - " + clienteModal.name;
      isGroup = clienteModal.isGroup;
    }

    if (onCloseModalEventArgs.closedViewContainerId === 'VC_LOANLINECR_703328' && onCloseModalEventArgs.result.respuesta) {
      onCloseModalEventArgs.commons.api.grid.refresh('QV_AXPR_HBZ60', {
        secuencial: entities.LoansLines.secuencial
      });
    }

    if (onCloseModalEventArgs.closedViewContainerId === 'VC_LOANLINESS_983793' && onCloseModalEventArgs.result.respuesta) {
      entities.LoansLines.clientCode = onCloseModalEventArgs.result.clienteCodigo;
      entities.LoansLines.clienteDesc = onCloseModalEventArgs.result.clienteNombre;

      onCloseModalEventArgs.commons.api.grid.refresh('QV_ZTPR_WQQ92', {
        secuencial: entities.LoansLines.clientCode
      });
    }
  };

  //Entity: LoansLines
  //LoansLines.clienteDesc (TextInputButton) View: LoansLines
  task_textInputButtonEvent_VA_CLIENTEDESCMPQT_151383 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
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

    if (textInputButtonEventArgs.commons.api.vc.model.LoansLines.naturaleza == 'P') {
      nav.customDialogParameters = {
        mode: "findJuridicPerson"
      }
    }
  };


  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: LoansLines
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    /*OCULTA CRITERIOS SECUNDARIOS*/
    renderEventArgs.commons.api.viewState.hide('VA_NUMLINEACKAOJVB_120383');
    renderEventArgs.commons.api.viewState.hide('VA_TERMARNTGODSCVL_846615');
    renderEventArgs.commons.api.viewState.hide('VA_SECUENCIALSNTIQ_132615');
    renderEventArgs.commons.api.viewState.hide('VA_NUMLINEAGTDCSGM_878383');
    renderEventArgs.commons.api.viewState.hide('VA_NUMTRAMITEUFKMW_361383');
    renderEventArgs.commons.api.viewState.hide('VA_OFICINANRBOTWYT_467383');
    renderEventArgs.commons.api.viewState.hide('VA_MONEDAXWNJSQNUF_555383');
    renderEventArgs.commons.api.viewState.hide('VA_DATEINIHDUJJRBN_500383');
    renderEventArgs.commons.api.viewState.hide('VA_DATEVTOIOLFWTXY_452383');
    renderEventArgs.commons.api.viewState.hide('VA_ESTADOZXSPUMQFP_238383');
    renderEventArgs.commons.api.viewState.hide('VA_NUMPRESTAMORRMP_430383');

    renderEventArgs.commons.execServer = false;
    let api: any = renderEventArgs.commons.api;

    if (api.parentVc && (api.parentVc.id == 'VC_PASSIVEPTE_108832' || api.parentVc.id == 'VC_LOANSCREAA_299193' || api.parentVc.id == 'VC_LOANSSIMOO_401626' || api.parentVc.id == 'VC_OPERATIONL_208539')) {
      api.viewState.hide('G_LOANSLINNS_696383');

      api.grid.refresh('QV_OS86_OQI18');
    } else {
      api.viewState.show('G_LOANSLINNS_696383');
    }
  };


  //gridRowSelecting QueryView: QV_OS86_OQI18
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_OS86_OQI18 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {
    gridRowSelectingEventArgs.commons.execServer = false;
    let api: any = gridRowSelectingEventArgs.commons.api;

    if (!api.parentVc) {
      let nav: any = gridRowSelectingEventArgs.commons.api.navigation;

      if (menu == '1') {
        nav.label = this.cobis.translate("LNSPR.LBL_LNSPR_LNEACRDOI_38962");
        nav.address = {
          moduleId: 'LNSPR',
          subModuleId: 'OPRTN',
          taskId: 'T_LNSPRNRRVDNTA_721',
          taskVersion: '1.0.0',
          viewContainerId: 'VC_GENERALIAN_158721'
        };

        nav.queryParameters = {
          mode: 8
        };
        nav.modalProperties = {
          size: 'md',
          callFromGrid: false
        };

        nav.customDialogParameters = {
          cupo: gridRowSelectingEventArgs.rowData.lineCod,
          secuencial: gridRowSelectingEventArgs.rowData.sequential
        };

        nav.navigate(gridRowSelectingEventArgs.commons.controlId);

      } else {
        nav.label = this.cobis.translate("LNSPR.LBL_LNSPR_LNEACRDOI_38962");
        nav.address = {
          moduleId: 'LNSPR',
          subModuleId: 'OPRTN',
          taskId: 'T_LNSPRRLRKZDAH_793',
          taskVersion: '1.0.0',
          viewContainerId: 'VC_LOANLINESS_983793'
        };

        nav.queryParameters = {
          mode: 2
        };
        nav.modalProperties = {
          size: 'md',
          callFromGrid: false
        };

        nav.customDialogParameters = {
          secuencial: gridRowSelectingEventArgs.rowData.sequential,
          codLinea: gridRowSelectingEventArgs.rowData.lineCod
        };

        nav.navigate(gridRowSelectingEventArgs.commons.controlId);

      }
    } else {
      api.vc.closeModal({
        result: {
          lineaCredito: gridRowSelectingEventArgs.rowData.lineCod
        }
      });
    }
  };



}