import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-condonaton-778532.model';
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

/* variables locales de T_CONDONATIOSNN_532*/

export class VcCondonaton778532Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_CONDONATIOSNN_532"

  //gridBeforeEnterInLineRow QueryView: QV_7324_98967
  //Evento GridBeforeEnterInLineRow: Se ejecuta antes de la edición o inserción en línea de la grilla.
  task_gridBeforeEnterInLineRow_QV_7324_98967 = (
    entities: Model,
    gridBeforeEnterInLineRowEventArgs: CobisModelGridBeforeEnterInLineRowEventArgs
  ) => {
    gridBeforeEnterInLineRowEventArgs.commons.execServer = false;

    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_7324_98967', 'concept');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_7324_98967', 'observation');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_7324_98967', 'pastDueAmount');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_7324_98967', 'currentAmount');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_7324_98967', 'dueAmount');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_7324_98967', 'totalValue');
  };

  //Entity: CondonationDetail
  //CondonationDetail.concept (ComboBox) View: CondonationDetailForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_TEXTINPUTBOXVSD_563764 = (entities: Model, changeEventArgs: any) => {
    changeEventArgs.commons.execServer = false;
    let concept: any = changeEventArgs.newValue;

    // VALIDA NO INGRESAR NUEVAMENTE EL MISMO RUBRO
    let itemList: any = entities.CondonationDetail;

    if (itemList.length > 0) {
      for (let i: any = 1; i < itemList.length; i++) {
        if (concept === itemList[i].concept) {
          changeEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ELRUBROAD_63160', false, null, this.ASSTS.timer);
          changeEventArgs.isValid = false;
          return;
        }
      }
    }

    // MAPEA LOS CAMPOS DE MONTOS
    let consList: any = changeEventArgs.commons.api.vc.catalogs.VA_TEXTINPUTBOXVSD_563764.data();

    let amountList: any = null;
    for (let i: any = 0; i < consList.length; i++) {
      if (concept === consList[i].code) {
        amountList = consList[i].attributes;
        break;
      }
    }
    if (amountList != null) {
      changeEventArgs.rowData.currentAmount = (amountList[0] != null) ? amountList[0] : 0;
      changeEventArgs.rowData.pastDueAmount = (amountList[1] != null) ? amountList[1] : 0;
      changeEventArgs.rowData.dueAmount = (amountList[2] != null) ? amountList[2] : 0;
      changeEventArgs.rowData.totalValue = (amountList[3] != null) ? amountList[3] : 0;
      changeEventArgs.commons.api.grid.updateRowData(changeEventArgs.rowData, 'currentAmount', changeEventArgs.rowData.currentAmount);
      changeEventArgs.commons.api.grid.updateRowData(changeEventArgs.rowData, 'pastDueAmount', changeEventArgs.rowData.pastDueAmount);
      changeEventArgs.commons.api.grid.updateRowData(changeEventArgs.rowData, 'dueAmount', changeEventArgs.rowData.dueAmount);
      changeEventArgs.commons.api.grid.updateRowData(changeEventArgs.rowData, 'totalValue', changeEventArgs.rowData.totalValue);
    // TODO
      // $("#VA_TEXTINPUTBOXABB_665764").data("kendoNumericTextBox").focus()
      // $("#VA_TEXTINPUTBOXTSF_920764").data("kendoNumericTextBox").focus()
      // $("#VA_TEXTINPUTBOXBSX_772764").data("kendoNumericTextBox").focus()
      // $("#VA_TEXTINPUTBOXBOS_972764").data("kendoNumericTextBox").focus()
      // $("#VA_TEXTINPUTBOXEPR_994764").focus()
    }
  };

  //Entity: CondonationDetail.valueToCondone (TextInputBox) View: CondonationDetailForm  - TEXTBOX GRID [VALOR A CONDONAR]
  task_customValidate_VA_TEXTINPUTBOXECH_722764 = (entities: Model, args: any) => {
    args.commons.execServer = false;
    args.rowData.totalValue;
    args.isValid = (args.currentValue >= 0 && args.currentValue <= args.rowData.totalValue);
    if (!args.isValid) {
      args.errorMessage = 'El valor debe ser mayor a 0 y Menor o Igual al TOTAL';
    }
  };

  // (Button) 
  task_executeCommand_CM_TCONDONA_NAN = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;
    executeCommandEventArgs.commons.api.navigation.closeModal(true);
  };

  // (Button) 
  task_executeCommand_CM_TCONDONA_SS3 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;
    let hasError: any = false;
    let msgResourceID: any = "";
    //valida que no ingrese mas de una vez el mismo rubro
    for (let i: any = 0; i < entities.CondonationDetail.length; i++) {
      let concept: any = entities.CondonationDetail[i].concept;
      for (let j: any = i + 1; j < entities.CondonationDetail.length; j++) {
        if (entities.CondonationDetail[j].concept == concept) {
          hasError = true;
          msgResourceID = "ASSTS.MSG_ASSTS_NOPUEDEOR_19224";
          break;
        }
      }
      if (hasError)
        break;
    }

    if (hasError) {
      executeCommandEventArgs.commons.messageHandler.showMessagesInformation(msgResourceID, false, null, this.ASSTS.timer);
    } else {
      let dataGrid: any = {
        data: entities.CondonationDetail
      };

      executeCommandEventArgs.commons.api.navigation.closeModal(dataGrid);
    }
  };

  //CondonationDetailQuery Entity: 
  task_executeQuery_Q_CONDONDE_7324 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    if (executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().condonationDetail2 && executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().condonationDetail2._data.length > 0) {
      executeQueryEventArgs.commons.execServer = false;
    } else {
      executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().bankNum;
      executeQueryEventArgs.commons.execServer = true;
    }


    //executeQueryEventArgs.commons.serverParameters. = true;
  };


  //Start signature to Callback event to Q_CONDONDE_7324
  task_executeQueryCallback_Q_CONDONDE_7324 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {

  };


  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: CondonationDetailForm
  task_initData_VC_CONDONATON_778532 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = false;
    let dialogParameters: any = initDataEventArgs.commons.api.navigation.getCustomDialogParameters();
    entities.ServerParameter.loanBankID = dialogParameters.bankNum;
    entities.ServerParameter.amount = dialogParameters.amount;
    if (dialogParameters.condonationDetail2 && dialogParameters.condonationDetail2._data.length > 0) {
      initDataEventArgs.commons.api.grid.addAllRows("CondonationDetail", dialogParameters.condonationDetail2._data, false);
    }
  };

  //Entity: CondonationDetail
  //CondonationDetail.concept (ComboBox) View: CondonationDetailForm
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_TEXTINPUTBOXVSD_563764 = (loadCatalogEventArgs: any) => {
    loadCatalogEventArgs.commons.execServer = true;
    loadCatalogEventArgs.commons.serverParameters.ServerParameter = true;
  };


  //gridRowUpdating QueryView: QV_7324_98967
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowUpdating_QV_7324_98967 = (
    entities: Model,
    gridRowUpdatingEventArgs: CobisModelGridRowActionEventArgs
  ) => {

    gridRowUpdatingEventArgs.commons.execServer = false;

  };







}