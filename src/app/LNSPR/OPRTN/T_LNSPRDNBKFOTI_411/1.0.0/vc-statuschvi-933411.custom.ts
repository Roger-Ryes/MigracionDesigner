import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-statuschvi-933411.model';
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

/* variables locales de T_LNSPRDNBKFOTI_411*/

export class VcStatuschvi933411Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_LNSPRDNBKFOTI_411"
  task_gridRowCommand_VA_CHECKBOXDANDSPV_892293 = (
    entities: Model,
    gridRowCommandEventArgs: CobisModelGridRowCommandExecuteEventArgs
  ) => {

    gridRowCommandEventArgs.commons.execServer = false;

    gridRowCommandEventArgs.commons.api.grid.updateRow('LoanList', gridRowCommandEventArgs.rowIndex, {
      seleccion: (gridRowCommandEventArgs.rowData.seleccion !== true)
    });

  };



  //Entity: LoanSearchFilter
  //LoanSearchFilter.avanceSearch (CheckBox) View: StatusChangeMassive
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_AVANCESEARCHXGS_321293 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.api.vc.viewState.VA_CODCURRENCYNEWR_137293.visible = changedEventArgs.newValue;
    changedEventArgs.commons.api.vc.viewState.VA_DISBURSEMENTETD_259293.visible = changedEventArgs.newValue;
    changedEventArgs.commons.api.vc.viewState.VA_STATESICWPQOPFM_485293.visible = changedEventArgs.newValue;
    changedEventArgs.commons.api.vc.viewState.VA_MIGRATEDOPERIAA_938293.visible = changedEventArgs.newValue;
    changedEventArgs.commons.api.vc.viewState.VA_TYPEFPEZUZQRCCT_308293.visible = changedEventArgs.newValue;

    if (changedEventArgs.newValue) {
      changedEventArgs.commons.api.vc.viewState.Spacer1973.visible = false;
    } else {
      changedEventArgs.commons.api.vc.viewState.Spacer1973.visible = true;
    }

    entities.LoanSearchFilter.codCurrency = null;
    entities.LoanSearchFilter.disbursementDate = null;
    entities.LoanSearchFilter.state = null;
    entities.LoanSearchFilter.migratedOperation = null;
    entities.LoanSearchFilter.type = null;



    changedEventArgs.commons.execServer = false;

  };



  //Entity: LoanSearchFilter
  //LoanSearchFilter.codCurrency (DropDownList) View: StatusChangeMassive
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_CODCURRENCYNEWR_137293 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    entities.LoanSearchFilter.seleccionarTodo = false;
    changedEventArgs.commons.api.grid.removeAllRows('LoanList');
    changedEventArgs.commons.execServer = false;

  };



  //Entity: LoanSearchFilter
  //LoanSearchFilter.disbursementDate (DateField) View: StatusChangeMassive
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_DISBURSEMENTETD_259293 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;

  };



  //Entity: LoanSearchFilter
  //LoanSearchFilter.migratedOperation (TextInputBox) View: StatusChangeMassive
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_MIGRATEDOPERIAA_938293 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    entities.LoanSearchFilter.seleccionarTodo = false;
    changedEventArgs.commons.api.grid.removeAllRows('LoanList');
    changedEventArgs.commons.execServer = false;

  };



  //Entity: LoanSearchFilter
  //LoanSearchFilter.numProcedures (TextInputBox) View: StatusChangeMassive
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_NUMPROCEDURESSS_610293 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    entities.LoanSearchFilter.seleccionarTodo = false;
    changedEventArgs.commons.api.grid.removeAllRows('LoanList');
    changedEventArgs.commons.execServer = false;

  };



  //Entity: LoanSearchFilter
  //LoanSearchFilter.office (DropDownList) View: StatusChangeMassive
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_OFFICEOKJCKNOJM_266293 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    entities.LoanSearchFilter.seleccionarTodo = false;
    changedEventArgs.commons.api.grid.removeAllRows('LoanList');
    changedEventArgs.commons.execServer = false;

  };



  //Entity: LoanSearchFilter
  //LoanSearchFilter.operation (TextInputBox) View: StatusChangeMassive
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_OPERATIONPFEVYE_478293 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    entities.LoanSearchFilter.seleccionarTodo = false;
    changedEventArgs.commons.api.grid.removeAllRows('LoanList');
    changedEventArgs.commons.execServer = false;


  };



  //Entity: LoanSearchFilter
  //LoanSearchFilter.seleccionarTodo (CheckBox) View: StatusChangeMassiveForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_SELECCIONARTOOD_122293 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    for (let i: any = 0; i < entities.LoanList.length; i++) {
      changedEventArgs.commons.api.grid.updateRow('LoanList', i, {
        seleccion: changedEventArgs.newValue
      });
    }

  };



  //Entity: LoanSearchFilter
  //LoanSearchFilter.state (DropDownList) View: StatusChangeMassive
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_STATESICWPQOPFM_485293 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    entities.LoanSearchFilter.seleccionarTodo = false;
    changedEventArgs.commons.api.grid.removeAllRows('LoanList');
    changedEventArgs.commons.execServer = false;

  };



  //Entity: LoanSearchFilter
  //LoanSearchFilter.type (DropDownList) View: StatusChangeMassive
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_TYPEFPEZUZQRCCT_308293 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    entities.LoanSearchFilter.seleccionarTodo = false;
    changedEventArgs.commons.api.grid.removeAllRows('LoanList');
    changedEventArgs.commons.execServer = false;

  };




  // (Button) 
  task_executeCommand_CM_TLNSPRDN_B0D = async (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    let datos: any = entities.LoanList;
    let contDatos: any = 0;

    for (let i: any = 0; i < datos.length; i++) {
      let dato: any = datos[i];

      if (dato.seleccion) {
        contDatos++;
      } else {
        dato.seleccion = false;
      }
    }

    if (contDatos > 0) {
      let response: any = await firstValueFrom(
        executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("LNSPR.MSG_LNSPR_ESTSEGUPD_56301")
      );

      switch (response.buttonIndex) {

        case 0: //cancel

          executeCommandEventArgs.commons.execServer = false;
          break;
        case 1: //accept
          executeCommandEventArgs.commons.execServer = true;
          return true;
          break;
      }
    } else {
      executeCommandEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_SELECCISS_53496', false, null, this.LNSPR.timer);
      executeCommandEventArgs.commons.execServer = false;
    }


    //executeCommandEventArgs.commons.serverParameters.entityName = true;
  };


  //Start signature to Callback event to CM_TLNSPRDN_B0D
  task_executeCommandCallback_CM_TLNSPRDN_B0D = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {

    if (executeCommandCallbackEventArgs.success) {
      let loans: any = entities.LoanList;
      let contError: any = 0;

      for (let i: any = 0; i < loans.length; i++) {
        if (loans[i].descriptionMistake) {
          contError++;
        }
      }

      if (contError == 0) {
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_OPERACIOA_60671', false, null, this.LNSPR.timer);
      }
    } else {
      executeCommandCallbackEventArgs.commons.api.viewState.enable('VA_VABUTTONUSCBRTC_509293');
      executeCommandCallbackEventArgs.commons.api.viewState.enable('VA_ARCHIVOEWNXRMQG_617293');
    }

  };





  // (Button) 
  task_executeCommand_CM_TLNSPRDN_TRO = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {

    if (entities.LoanSearchFilter.numIdentification) {
      entities.LoanSearchFilter.numIdentification = null;
    }

    if (entities.LoanSearchFilter.operation) {
      entities.LoanSearchFilter.operation = null;
    }

    if (entities.LoanSearchFilter.numProcedures) {
      entities.LoanSearchFilter.numProcedures = null;
    }

    if (entities.LoanSearchFilter.office) {
      entities.LoanSearchFilter.office = null;
    }

    if (entities.LoanSearchFilter.numProcedures) {
      entities.LoanSearchFilter.numProcedures = null;
    }

    if (entities.LoanSearchFilter.codCurrency) {
      entities.LoanSearchFilter.codCurrency = null;
    }

    if (entities.LoanSearchFilter.disbursementDate) {
      entities.LoanSearchFilter.disbursementDate = null;
    }

    if (entities.LoanSearchFilter.state) {
      entities.LoanSearchFilter.state = null;
    }

    if (entities.LoanSearchFilter.migratedOperation) {
      entities.LoanSearchFilter.migratedOperation = null;
    }

    if (entities.LoanSearchFilter.type) {
      entities.LoanSearchFilter.type = null;
    }

    executeCommandEventArgs.commons.api.viewState.enable('VA_VABUTTONUSCBRTC_509293');
    executeCommandEventArgs.commons.api.viewState.enable('VA_ARCHIVOEWNXRMQG_617293');
    executeCommandEventArgs.commons.api.viewState.disable('VA_DESCSTATUSKOPMT_184293');
    entities.LoanSearchFilter.seleccionarTodo = false;
    executeCommandEventArgs.commons.api.grid.removeAllRows('LoanList');
    // TODO - ALE
    executeCommandEventArgs.commons.api.vc.removeFile('VA_ARCHIVOEWNXRMQG_617293');
    entities.LoanSearchFilter.avanceSearch = false;
    entities.StatesAssetsLoan.descStatus = null;

    executeCommandEventArgs.commons.execServer = false;

  };



  //Entity: LoanSearchFilter
  //LoanSearchFilter.archivo (FileUpload) View: StatusChangeMassiveForm
  //Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
  task_executeCommand_VA_ARCHIVOEWNXRMQG_617293 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    let fileUpload: any = executeCommandEventArgs.commons.api.viewState.fileUpload('VA_ARCHIVOEWNXRMQG_617293');

    fileUpload.setConfirmUpload(false);
    fileUpload.setRelativePath('loans-files');

    if (entities.LoanSearchFilter.numIdentification) {
      entities.LoanSearchFilter.numIdentification = null;
    }

    if (entities.LoanSearchFilter.operation) {
      entities.LoanSearchFilter.operation = null;
    }

    if (entities.LoanSearchFilter.numProcedures) {
      entities.LoanSearchFilter.numProcedures = null;
    }

    if (entities.LoanSearchFilter.office) {
      entities.LoanSearchFilter.office = null;
    }

    if (entities.LoanSearchFilter.numProcedures) {
      entities.LoanSearchFilter.numProcedures = null;
    }

    if (entities.LoanSearchFilter.codCurrency) {
      entities.LoanSearchFilter.codCurrency = null;
    }

    if (entities.LoanSearchFilter.disbursementDate) {
      entities.LoanSearchFilter.disbursementDate = null;
    }

    if (entities.LoanSearchFilter.state) {
      entities.LoanSearchFilter.state = null;
    }

    if (entities.LoanSearchFilter.migratedOperation) {
      entities.LoanSearchFilter.migratedOperation = null;
    }

    if (entities.LoanSearchFilter.type) {
      entities.LoanSearchFilter.type = null;
    }

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.LoanSearchFilter = true;
  };


  //Start signature to Callback event to VA_ARCHIVOEWNXRMQG_617293
  task_executeCommandCallback_VA_ARCHIVOEWNXRMQG_617293 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    if (executeCommandCallbackEventArgs.success) {
      executeCommandCallbackEventArgs.commons.api.viewState.enable('VA_DESCSTATUSKOPMT_184293');
    } else {
      executeCommandCallbackEventArgs.commons.api.viewState.enable('VA_VABUTTONUSCBRTC_509293');
    }
  };



  //LoanListQuery Entity: LoanList
  task_executeQuery_Q_LOANSILT_NX50 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let model: any = executeQueryEventArgs.commons.api.vc.model;
    executeQueryEventArgs.parameters.numIdentification = model.LoanSearchFilter.numIdentification ? model.LoanSearchFilter.numIdentification : null;

    executeQueryEventArgs.parameters.loanBankID = model.LoanSearchFilter.operation ? model.LoanSearchFilter.operation : null;

    executeQueryEventArgs.parameters.numProcedure = model.LoanSearchFilter.numProcedures ? model.LoanSearchFilter.numProcedures : null;

    executeQueryEventArgs.parameters.office = model.LoanSearchFilter.office ? model.LoanSearchFilter.office : null;

    executeQueryEventArgs.parameters.currency = model.LoanSearchFilter.codCurrency ? model.LoanSearchFilter.codCurrency : null;

    executeQueryEventArgs.parameters.disbursementDate = model.LoanSearchFilter.disbursementDate ? model.LoanSearchFilter.disbursementDate : null;

    executeQueryEventArgs.parameters.state = model.LoanSearchFilter.state;

    executeQueryEventArgs.parameters.migratedOperation = model.LoanSearchFilter.migratedOperation ? model.LoanSearchFilter.migratedOperation : null;

    executeQueryEventArgs.parameters.type = model.LoanSearchFilter.type ? model.LoanSearchFilter.type : null;

    if ((model.LoanSearchFilter.numIdentification) ||
      (model.LoanSearchFilter.operation) ||
      (model.LoanSearchFilter.numProcedures) ||
      (model.LoanSearchFilter.office)) {

      executeQueryEventArgs.commons.api.vc.model.LoanList.archivo = null;
      executeQueryEventArgs.commons.execServer = true;

    } else {
      executeQueryEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_DEBEINGTA_48173', false, null, this.LNSPR.timer);
      executeQueryEventArgs.commons.execServer = false;
    }
  };


  //Start signature to Callback event to Q_LOANSILT_NX50
  task_executeQueryCallback_Q_LOANSILT_NX50 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {

    if (entities.LoanList.length > 0) {
      executeQueryCallbackEventArgs.commons.api.viewState.disable('VA_ARCHIVOEWNXRMQG_617293');
      executeQueryCallbackEventArgs.commons.api.viewState.enable('VA_DESCSTATUSKOPMT_184293');
    } else {
      executeQueryCallbackEventArgs.commons.api.viewState.enable('VA_ARCHIVOEWNXRMQG_617293');
    }

  };



  //StatusListQuery Entity: StatusList
  task_executeQuery_Q_STATSTSS_LA52 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {

    executeQueryEventArgs.parameters.operacion = 'W';
    executeQueryEventArgs.commons.execServer = true;

    //executeQueryEventArgs.commons.serverParameters.StatusList = true;
  };


  //Start signature to Callback event to Q_STATSTSS_LA52
  task_executeQueryCallback_Q_STATSTSS_LA52 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };



  //StatusListQueryMassive Entity: StatusList
  task_executeQuery_Q_STATSTTL_MS41 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.operacion = 'E';
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.StatusList = true;
  };


  //Start signature to Callback event to Q_STATSTTL_MS41
  task_executeQueryCallback_Q_STATSTTL_MS41 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };



  task_gridInitColumnTemplate_QV_TP50_URT26 = (
    idColumn: any,
    gridInitColumnTemplateEventArgs: CobisModelGridInitColumnTemplateEventArgs
  ) => {
    if (idColumn === 'seleccion') {
      return "<input name='seleccion' type='checkbox' value='#=seleccion#' #=seleccion?checked='checked':''# data-bind='value:seleccion' ng-click='vc.grids.QV_TP50_URT26.events.customRowClick($event,\"VA_CHECKBOXDANDSPV_892293\",\"LoanList\",\"QV_TP50_URT26\")'/>";
    }
  };







  task_gridInitEditColumnTemplate_QV_TP50_URT26 = (
    idColumn: any,
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
  //ViewContainer: StatusChangeMassive
  task_initData_VC_STATUSCHVI_933411 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {

    initDataEventArgs.commons.api.vc.viewState.VA_CODCURRENCYNEWR_137293.visible = false;
    initDataEventArgs.commons.api.vc.viewState.VA_DISBURSEMENTETD_259293.visible = false;
    initDataEventArgs.commons.api.vc.viewState.VA_STATESICWPQOPFM_485293.visible = false;
    initDataEventArgs.commons.api.vc.viewState.VA_MIGRATEDOPERIAA_938293.visible = false;
    initDataEventArgs.commons.api.vc.viewState.VA_TYPEFPEZUZQRCCT_308293.visible = false;
    initDataEventArgs.commons.api.viewState.disable('VA_DESCSTATUSKOPMT_184293');

    initDataEventArgs.commons.execServer = false;

  };



  //Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
  //ViewContainer: StatusChangeMassive
  task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {

    onCloseModalEventArgs.commons.execServer = false;

    if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.selectedData) {
      let data: any = onCloseModalEventArgs.result.selectedData;
      entities.LoanSearchFilter.numIdentification = data.code;
    }

  };



  //Entity: LoanSearchFilter
  //LoanSearchFilter.codClient (TextInputButton) View: StatusChangeMassive
  task_textInputButtonEvent_VA_CODCLIENTZHOTEY_615293 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;

    let nav: any = textInputButtonEventArgs.commons.api.navigation;
    nav.label = this.cobis.translate('LNSPR.LBL_LNSPR_INGRESOGA_95398');
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
  };


  //gridRowSelecting QueryView: QV_TP50_URT26
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_TP50_URT26 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.execServer = false;

  };







}