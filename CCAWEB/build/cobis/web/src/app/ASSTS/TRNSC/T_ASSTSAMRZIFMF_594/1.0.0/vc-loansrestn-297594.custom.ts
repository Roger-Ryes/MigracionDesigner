import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-loansrestn-297594.model';
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

/* variables locales de T_ASSTSAMRZIFMF_594*/
let tmpGridAmortization: any = null;

let flagCreate: any = false;
let operacion: any = null;
let money: any = null;
let typeOperation: any = null;
let saldo: any = null;
let onlyOne: any = 0;


export class VcLoansrestn297594Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_ASSTSAMRZIFMF_594"

  //designer-hint: 2304: Cannot find name 'task_gridRowCommand_VA_CHECKBOXWFQPYPQ_909701'.
  task_gridRowCommand_VA_CHECKBOXWFQPYPQ_909701 = (
    //designer-hint: 2304: Cannot find name 'Model'.
    //designer-hint: 6133: 'entities' is declared but its value is never read.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelGridRowCommandExecuteEventArgs'.
    gridRowCommandEventArgs: CobisModelGridRowCommandExecuteEventArgs
  ) => {

    gridRowCommandEventArgs.commons.execServer = false;
    gridRowCommandEventArgs.commons.api.grid.updateRow('RestructuringList', gridRowCommandEventArgs.rowIndex, {
      finalOp: (gridRowCommandEventArgs.rowData.finalOp !== true)
    });

    if (gridRowCommandEventArgs.rowData.finalOp) {
      onlyOne++;
    } else {
      onlyOne--
    }

  };

  //designer-hint: 2304: Cannot find name 'task_gridRowCommand_VA_CHECKBOXVYTZVCZ_150701'.
  task_gridRowCommand_VA_CHECKBOXVYTZVCZ_150701 = (
    //designer-hint: 2304: Cannot find name 'Model'.
    //designer-hint: 6133: 'entities' is declared but its value is never read.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelGridRowCommandExecuteEventArgs'.
    gridRowCommandEventArgs: CobisModelGridRowCommandExecuteEventArgs
  ) => {

    gridRowCommandEventArgs.commons.execServer = false;
    gridRowCommandEventArgs.commons.api.grid.updateRow('RestructuringList', gridRowCommandEventArgs.rowIndex, {
      reest: (gridRowCommandEventArgs.rowData.reest !== true)
    });

  };


  //gridBeforeEnterInLineRow QueryView: QV_UY75_AYT30
  //Evento GridBeforeEnterInLineRow: Se ejecuta antes de la edición o inserción en línea de la grilla.
  //designer-hint: 2304: Cannot find name 'task_gridBeforeEnterInLineRow_QV_UY75_AYT30'.
  task_gridBeforeEnterInLineRow_QV_UY75_AYT30 = (
    //designer-hint: 2304: Cannot find name 'Model'.
    //designer-hint: 6133: 'entities' is declared but its value is never read.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelGridBeforeEnterInLineRowEventArgs'.
    gridBeforeEnterInLineRowEventArgs: CobisModelGridBeforeEnterInLineRowEventArgs
  ) => {

    gridBeforeEnterInLineRowEventArgs.commons.execServer = false;
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_UY75_AYT30', 'bank');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_UY75_AYT30', 'typeLoan');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_UY75_AYT30', 'currency');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_UY75_AYT30', 'capitalBalance');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_UY75_AYT30', 'interestBalance');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_UY75_AYT30', 'otherItems');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_UY75_AYT30', 'totalCap');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_UY75_AYT30', 'residualTerm');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_UY75_AYT30', 'state');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_UY75_AYT30', 'overduesFees');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_UY75_AYT30', 'toPay');

  };


  //Entity: RestructuringList
  //RestructuringList.capitalize (DropDownList) View: LoansRestructuring
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  //designer-hint: 2304: Cannot find name 'task_change_VA_TEXTINPUTBOXLJF_575701'.
  //designer-hint: 2304: Cannot find name 'Model'.
  //designer-hint: 2304: Cannot find name 'CobisModelChangeEventArgs'.
  //designer-hint: 6133: 'entities' is declared but its value is never read.
  task_change_VA_TEXTINPUTBOXLJF_575701 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    //Recuperación de fila en edición
    //designer-hint: 2304: Cannot find name 'currentRowData'.
    currentRowData = changedEventArgs.rowData;

    if (changedEventArgs.newValue == 'N') { // Saldo Capital
      changedEventArgs.rowData.totalCap = changedEventArgs.rowData.capitalBalance;
      //designer-hint: 2304: Cannot find name 'currentRowData'.
      changedEventArgs.commons.api.grid.updateRowData(currentRowData, 'totalCap', changedEventArgs.rowData.totalCap);
      //        changedEventArgs.commons.api.vc.grids.QV_UY75_AYT30.selectedRow.set('totalCap', changedEventArgs.rowData.totalCap);
      changedEventArgs.rowData.toPay = changedEventArgs.rowData.interestBalance + changedEventArgs.rowData.otherItems;
      //designer-hint: 2304: Cannot find name 'currentRowData'.
      changedEventArgs.commons.api.grid.updateRowData(currentRowData, 'toPay', changedEventArgs.rowData.toPay);
      //        changedEventArgs.commons.api.vc.grids.QV_UY75_AYT30.selectedRow.set('toPay', changedEventArgs.rowData.toPay);

    } else if (changedEventArgs.newValue == 'S') { //Saldo Cap + interes
      changedEventArgs.rowData.totalCap = changedEventArgs.rowData.capitalBalance + changedEventArgs.rowData.interestBalance;
      //designer-hint: 2304: Cannot find name 'currentRowData'.
      changedEventArgs.commons.api.grid.updateRowData(currentRowData, 'totalCap', changedEventArgs.rowData.totalCap);
      //        changedEventArgs.commons.api.vc.grids.QV_UY75_AYT30.selectedRow.set('totalCap', changedEventArgs.rowData.totalCap);

      changedEventArgs.rowData.toPay = changedEventArgs.rowData.otherItems;
      //designer-hint: 2304: Cannot find name 'currentRowData'.
      changedEventArgs.commons.api.grid.updateRowData(currentRowData, 'toPay', changedEventArgs.rowData.toPay);
      //        changedEventArgs.commons.api.vc.grids.QV_UY75_AYT30.selectedRow.set('toPay', changedEventArgs.rowData.toPay);

    } else if (changedEventArgs.newValue == 'T') { //saldo cap+interes+otros
      changedEventArgs.rowData.totalCap = changedEventArgs.rowData.capitalBalance + changedEventArgs.rowData.interestBalance + changedEventArgs.rowData.otherItems;
      //designer-hint: 2304: Cannot find name 'currentRowData'.
      changedEventArgs.commons.api.grid.updateRowData(currentRowData, 'totalCap', changedEventArgs.rowData.totalCap);
      //        changedEventArgs.commons.api.vc.grids.QV_UY75_AYT30.selectedRow.set('totalCap', changedEventArgs.rowData.totalCap);
      //designer-hint: 2304: Cannot find name 'currentRowData'.
      changedEventArgs.commons.api.grid.updateRowData(currentRowData, 'toPay', 0.00);
      //        changedEventArgs.commons.api.vc.grids.QV_UY75_AYT30.selectedRow.set('toPay', 0.00);
    } else {
      //designer-hint: 2304: Cannot find name 'currentRowData'.
      changedEventArgs.commons.api.grid.updateRowData(currentRowData, 'totalCap', 0.00);
      //        changedEventArgs.commons.api.vc.grids.QV_UY75_AYT30.selectedRow.set('totalCap', 0.00);
      //designer-hint: 2304: Cannot find name 'currentRowData'.
      changedEventArgs.commons.api.grid.updateRowData(currentRowData, 'toPay', 0.00);
      //        changedEventArgs.commons.api.vc.grids.QV_UY75_AYT30.selectedRow.set('toPay', 0.00);
    }

  };


  // (Button) 
  //designer-hint: 2304: Cannot find name 'task_executeCommand_CM_TASSTSAM_7AT'.
  task_executeCommand_CM_TASSTSAM_7AT = (
    //designer-hint: 2304: Cannot find name 'Model'.
    //designer-hint: 6133: 'entities' is declared but its value is never read.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelExecuteCommandEventArgs'.
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;
    let idAux: any = this.cobis.container.tabs.getCurrentTab().id;
    let urlAux: any = this.cobis.container.tabs.getCurrentTab().url;
    let nameAux: any = undefined;

    if (this.cobis.container.tabs.getCurrentTab().name != undefined) {
      nameAux = this.cobis.container.tabs.getCurrentTab().name;
    } else {
      nameAux = this.cobis.translate("ASSTS.LBL_ASSTS_REESTRURC_23393");
    }

    this.cobis.container.tabs.changeCurrentTab(idAux, urlAux, nameAux, true);
  };





  // (Button) 
  //designer-hint: 2304: Cannot find name 'task_executeCommand_CM_TASSTSAM_SAA'.
  task_executeCommand_CM_TASSTSAM_SAA = (
    //designer-hint: 2304: Cannot find name 'Model'.
    //designer-hint: 6133: 'entities' is declared but its value is never read.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelExecuteCommandEventArgs'.
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.entityName = true;

  };

  //Start signature to Callback event to CM_TASSTSAM_SAA
  //designer-hint: 2304: Cannot find name 'task_executeCommandCallback_CM_TASSTSAM_SAA'.
  task_executeCommandCallback_CM_TASSTSAM_SAA = (
    //designer-hint: 2304: Cannot find name 'Model'.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelExecuteCommandCallbackEventArgs'.
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {

    if (executeCommandCallbackEventArgs.success) {
      for (let i: any = 0; i < entities.RestructuringList.length; i++) {
        if (entities.RestructuringList[i].finalOp) {
          operacion = entities.RestructuringList[i].bank;
          money = entities.RestructuringList[i].currency;
          typeOperation = entities.RestructuringList[i].typeLoan;
          break;
        }
      }
      entities.OperationEntity.operation = operacion;

      //Open Modal
      let nav: any = executeCommandCallbackEventArgs.commons.api.navigation;

      nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_REESTRUCA_18926');
      nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'TRNSC',
        taskId: 'T_ASSTSCNYHAQPM_525',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_RESTRUCTEG_166525'
      };

      nav.queryParameters = {
        mode: 2
      };
      nav.modalProperties = {
        size: 'lg',
        callFromGrid: false
      };

      nav.customDialogParameters = {
        operation: operacion,
        currency: money,
        type: typeOperation,
        amount: entities.RestructuringSummary.opCurrency
      };

      //Si la llamada es desde un evento de un control perteneciente a la cabecera de la página
      nav.openModalWindow(executeCommandCallbackEventArgs.commons.controlId, null);
      //Si la llamada es desde un evento de un control perteneciente a una grilla de la página
      //nav.openModalWindow(id, args.modelRow);
    }
  };



  //ListaEstadosQuery Entity: ListaEstados
  //designer-hint: 2304: Cannot find name 'task_executeQuery_Q_LISTSEAD_QV44'.
  //designer-hint: 2304: Cannot find name 'CobisModelExecuteQueryEventArgs'.
  task_executeQuery_Q_LISTSEAD_QV44 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.operacion = 'W';
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.ListaEstados = true;
  };

  //RestructuringListQuery Entity: RestructuringList
  //designer-hint: 2304: Cannot find name 'task_executeQuery_Q_RESTTITU_BM75'.
  //designer-hint: 2304: Cannot find name 'CobisModelExecuteQueryEventArgs'.
  task_executeQuery_Q_RESTTITU_BM75 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.api.viewState.disable('CM_TASSTSAM_SAA');
    onlyOne = 0;
    executeQueryEventArgs.parameters.ente = executeQueryEventArgs.commons.api.vc.model.RestructuringFilter.codClient;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.RestructuringList = true;
  };


  //Start signature to Callback event to Q_RESTTITU_BM75
  //designer-hint: 2304: Cannot find name 'task_executeQueryCallback_Q_RESTTITU_BM75'.
  task_executeQueryCallback_Q_RESTTITU_BM75 = (
    //designer-hint: 2304: Cannot find name 'Model'.
    //designer-hint: 6133: 'entities' is declared but its value is never read.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelExecuteQueryCallbackEventArgs'.
    //designer-hint: 6133: 'executeQueryCallbackEventArgs' is declared but its value is never read.
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {

  };


  //designer-hint: 2304: Cannot find name 'task_gridInitColumnTemplate_QV_UY75_AYT30'.
  task_gridInitColumnTemplate_QV_UY75_AYT30 = (
    idColumn: any,
    //designer-hint: 2304: Cannot find name 'CobisModelGridInitColumnTemplateEventArgs'.
    //designer-hint: 6133: 'gridInitColumnTemplateEventArgs' is declared but its value is never read.
    gridInitColumnTemplateEventArgs: CobisModelGridInitColumnTemplateEventArgs
  ) => {
    //if(idColumn === 'NombreColumna'){
    //  return "<span></span>";
    //}
    //if(idColumn === 'NombreColumna'){
    //  return  "#=nombreColumna#" ;
    //}


    if (idColumn === 'finalOp') {
      return "<input name='finalOp' type='checkbox' value='#=finalOp#' #=finalOp?checked='checked':''# data-bind='value:finalOp' ng-click='vc.grids.QV_UY75_AYT30.events.customRowClick($event,\"VA_CHECKBOXWFQPYPQ_909701\",\"EntidadPadre\",\"QV_UY75_AYT30\")'/>";

    }

    if (idColumn === 'reest') {
      return "<input name='reest' type='checkbox' value='#=reest#' #=reest?checked='checked':''# data-bind='value:reest' ng-click='vc.grids.QV_UY75_AYT30.events.customRowClick($event,\"VA_CHECKBOXVYTZVCZ_150701\",\"EntidadPadre\",\"QV_UY75_AYT30\")'/>";

    }
  };



  //designer-hint: 2304: Cannot find name 'task_gridInitEditColumnTemplate_QV_UY75_AYT30'.
  task_gridInitEditColumnTemplate_QV_UY75_AYT30 = (
    //designer-hint: 6133: 'idColumn' is declared but its value is never read.
    idColumn: any,
    //designer-hint: 2304: Cannot find name 'CobisModelGridInitColumnTemplateEventArgs'.
    //designer-hint: 6133: 'gridInitColumnTemplateEventArgs' is declared but its value is never read.
    gridInitColumnTemplateEventArgs: CobisModelGridInitColumnTemplateEventArgs
  ) => {
    //if(idColumn === 'NombreColumna'){
    //  return "<span></span>";
    //}
    //if(idColumn === 'NombreColumna'){
    //  return  "<span data-bind='text:nombreColumna'><span>" ;
    //}
  };








  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: LoansRestructuring
  //designer-hint: 2304: Cannot find name 'task_initData_VC_LOANSRESTN_297594'.
  //designer-hint: 2304: Cannot find name 'Model'.
  //designer-hint: 2304: Cannot find name 'CobisModelInitDataEventArgs'.
  task_initData_VC_LOANSRESTN_297594 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {

    initDataEventArgs.commons.execServer = false;
    initDataEventArgs.commons.api.viewState.disable('CM_TASSTSAM_SAA');
    entities.RestructuringSummary.restructuringType = 'E';

  };

  //Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
  //ViewContainer: LoansRestructuring
  //designer-hint: 2304: Cannot find name 'task_onCloseModalEvent'.
  //designer-hint: 2304: Cannot find name 'Model'.
  //designer-hint: 2304: Cannot find name 'CobisModelOnCloseModalEventArgs'.
  task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
    onCloseModalEventArgs.commons.execServer = false;

    if (onCloseModalEventArgs.closedViewContainerId == 'findCustomer') {

      if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.dialogCloseType == 0 && onCloseModalEventArgs.result.selectedData) {
        entities.RestructuringFilter.codClient = onCloseModalEventArgs.result.selectedData.code;
        entities.RestructuringFilter.nameClient = onCloseModalEventArgs.result.selectedData.code + " - " + onCloseModalEventArgs.result.selectedData.name
      }
    }

    //SI DA TRANSMITIR
    if (onCloseModalEventArgs.closedViewContainerId == 'VC_RESTRUCTEG_166525') {
      if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.dialogCloseType == 0 && onCloseModalEventArgs.result.response) {

        onCloseModalEventArgs.commons.api.viewState.disable('CM_TASSTSAM_SAA');
        //onCloseModalEventArgs.commons.api.viewState.disable('VA_VABUTTONKFPIHHU_274701');
        for (let i: any = 0; i < entities.RestructuringList.length; i++) {
          onCloseModalEventArgs.commons.api.grid.hideGridRowCommand('QV_UY75_AYT30', entities.RestructuringList[i], 'edit');
        }
      }
    }


  };


  //Entity: RestructuringFilter
  //RestructuringFilter.nameClient (TextInputButton) View: LoansRestructuring
  //designer-hint: 2304: Cannot find name 'task_textInputButtonEvent_VA_NAMECLIENTSGTLG_620701'.
  //designer-hint: 2304: Cannot find name 'CobisModelOnInputButtonEventArgs'.
  task_textInputButtonEvent_VA_NAMECLIENTSGTLG_620701 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
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
  };



  //gridRowSelecting QueryView: QV_UY75_AYT30
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  //designer-hint: 2304: Cannot find name 'task_gridRowSelecting_QV_UY75_AYT30'.
  task_gridRowSelecting_QV_UY75_AYT30 = (
    //designer-hint: 2304: Cannot find name 'Model'.
    //designer-hint: 6133: 'entities' is declared but its value is never read.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelGridRowSelectingEventArgs'.
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.execServer = false;

  };






  //gridRowUpdating QueryView: QV_UY75_AYT30
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  //designer-hint: 2304: Cannot find name 'task_gridRowUpdating_QV_UY75_AYT30'.
  task_gridRowUpdating_QV_UY75_AYT30 = (
    //designer-hint: 2304: Cannot find name 'Model'.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelGridRowActionEventArgs'.
    gridRowUpdatingEventArgs: CobisModelGridRowActionEventArgs
  ) => {
    let server: any = false;

    //Debe elegir reest si es opFinal

    for (let i: any = 0; i < entities.RestructuringList.length; i++) {
      if (entities.RestructuringList.data()[i].finalOp && entities.RestructuringList[i].reest) {
        server = true;
        break;
      } else if (entities.RestructuringList.data()[i].finalOp && !entities.RestructuringList[i].reest) {
        //designer-hint: 2304: Cannot find name 'timer'.
        gridRowUpdatingEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_SELECCIEP_11167', false, null, timer);
        server = true;
        break;
      }
    }

    //Debe eliegir obligatoriamente Capitaliza para una operacion a reest si no es opFinal
    for (let i: any = 0; i < entities.RestructuringList.length; i++) {
      if (!entities.RestructuringList.data()[i].finalOp && entities.RestructuringList.data()[i].reest && !entities.RestructuringList[i].capitalize) {
        //server = true;
        //designer-hint: 2304: Cannot find name 'timer'.
        gridRowUpdatingEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ELIJATIID_57994', false, null, timer);
        break;
      }

    }

    //SI NO REEST LIMPIAR CAPITALIZE
    if (!gridRowUpdatingEventArgs.rowData.reest && gridRowUpdatingEventArgs.rowData.capitalize) {
      gridRowUpdatingEventArgs.rowData.capitalize = null;
      gridRowUpdatingEventArgs.rowData.totalCap = 0.00;
      gridRowUpdatingEventArgs.rowData.toPay = 0.00;

    }

    //Solo puede existir una opFinal
    if (onlyOne > 1) {
      server = false;
      //designer-hint: 2304: Cannot find name 'timer'.
      gridRowUpdatingEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ELIJASOPL_42627', false, null, timer);
    }

    //SI NO HAY OP.FINAL NO SE CALCULA EL TOTAL
    if (onlyOne <= 0) {
      entities.RestructuringSummary.opCurrency = 0.00;
      entities.RestructuringSummary.localCurrency = 0.00;
      entities.RestructuringSummary.amountPay = 0.00;
    }

    if (server) {
      gridRowUpdatingEventArgs.commons.api.viewState.enable('CM_TASSTSAM_SAA');
    } else {
      gridRowUpdatingEventArgs.commons.api.viewState.disable('CM_TASSTSAM_SAA');
    }


    gridRowUpdatingEventArgs.commons.serverParameters.GeneralParameters = true;
    gridRowUpdatingEventArgs.commons.serverParameters.RestructuringList = true;
    gridRowUpdatingEventArgs.commons.serverParameters.RestructuringSummary = true;

    gridRowUpdatingEventArgs.commons.execServer = server;
  };



}