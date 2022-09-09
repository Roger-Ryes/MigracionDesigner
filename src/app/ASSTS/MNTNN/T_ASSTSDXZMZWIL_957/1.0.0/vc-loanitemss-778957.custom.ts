import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-loanitemss-778957.model';
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

/* variables locales de T_ASSTSDXZMZWIL_957*/

export class VcLoanitemss778957Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_ASSTSDXZMZWIL_957"


  //LoanItemsListQuery Entity: LoanItemsList
  task_executeQuery_Q_LOANMSEM_ZL15 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {

    executeQueryEventArgs.parameters.operacion = 'S';
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().loan.loanBankID;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.LoanItemsList = true;
  };


  //gridCommand (Button) QueryView: QV_FL15_OEC17
  //Evento GridCommand: Sirve para personalizar la acción que realizan los botones de Grilla.
  task_gridCommand_CEQV_201QV_FL15_OEC17_507 = (
    entities: Model,
    gridExecuteCommandEventArgs: CobisModelGridCommandExecuteEventArgs
  ) => {
    gridExecuteCommandEventArgs.commons.execServer = false;

    //Open Modal
    let nav: any = gridExecuteCommandEventArgs.commons.api.navigation;

    nav.label = 'ASSTS.LBL_ASSTS_ASOCIARAE_28270';
    nav.address = {
      moduleId: 'ASSTS',
      subModuleId: 'MNTNN',
      taskId: 'T_ASSTSFPNDGGEH_445',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_MODALLOAIS_799445'
    };

    nav.queryParameters = {
      mode: 1
    };
    nav.modalProperties = {
      size: 'md',
      callFromGrid: false
    };

    nav.customDialogParameters = {
      loan: gridExecuteCommandEventArgs.commons.api.navigation.getCustomDialogParameters().loan
    };

    //Si la llamada es desde un evento de un control perteneciente a la cabecera de la página
    //nav.openModalWindow(args.commons.controlId, null);
    //Si la llamada es desde un evento de un control perteneciente a una grilla de la página
    nav.openModalWindow('CEQV_201QV_FL15_OEC17_507', gridExecuteCommandEventArgs.nameEntityGrid);
  };


  //Entity: LoanItemsList
  //LoanItemsList. (Button) View: LoanItemsForm
  task_gridRowCommand_VA_GRIDROWCOMMMAND_816116 = async (
    entities: Model,
    gridRowCommandEventArgs: CobisModelGridRowCommandExecuteEventArgs
  ) => {
    let response: any = await firstValueFrom(
      gridRowCommandEventArgs.commons.messageHandler.showMessagesConfirm("ASSTS.MSG_ASSTS_ESTASEGSE_19372")
    );

    switch (response.buttonIndex) {
      case 0: //cancel
        gridRowCommandEventArgs.commons.execServer = false;
        return false;
      case 1: //accept
        gridRowCommandEventArgs.commons.execServer = true;
        return true;

    }
  };


  //Start signature to Callback event to VA_GRIDROWCOMMMAND_816116
  task_gridRowCommandCallback_VA_GRIDROWCOMMMAND_816116 = (
    entities: Model,
    gridRowCommandCallbackEventArgs: CobisModelGridRowCommandCallbackEventArgs
  ) => {
    if (gridRowCommandCallbackEventArgs.success) {
      gridRowCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.LBL_ASSTS_TRANSACEC_23845', false, null, this.ASSTS.timer);

      gridRowCommandCallbackEventArgs.commons.api.grid.refresh('QV_FL15_OEC17');
    }
  };



  //gridRowSelecting QueryView: QV_FL15_OEC17
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_FL15_OEC17 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.execServer = false;

  };







}