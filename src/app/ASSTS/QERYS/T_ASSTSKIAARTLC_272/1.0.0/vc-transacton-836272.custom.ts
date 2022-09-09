import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-transacton-836272.model';
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

/* variables locales de T_ASSTSKIAARTLC_272*/

export class VcTransacton836272Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_ASSTSKIAARTLC_272"



  //ListTransactionQueryQuery Entity: ListTransactionQuery
  task_executeQuery_Q_LISTCACN_AT28 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let executeServer: any = true;
    let transacQueryFilter: any = executeQueryEventArgs.commons.api.vc.model.FilterTransactionQuery;
    let listTransactionQuery: any = executeQueryEventArgs.commons.api.vc.model.ListTransactionQuery;

    executeQueryEventArgs.parameters.banco = transacQueryFilter.numberLoan ? transacQueryFilter.numberLoan : null;

    executeQueryEventArgs.parameters.fechaD = transacQueryFilter.startDate;
    executeQueryEventArgs.parameters.fechaH = transacQueryFilter.endDate;
    executeQueryEventArgs.parameters.estado = transacQueryFilter.state ? transacQueryFilter.state : null;
    executeQueryEventArgs.parameters.tipoTrans = transacQueryFilter.typeTransaction ? transacQueryFilter.typeTransaction : null;

    //Paginación
    executeQueryEventArgs.parameters.pagSec = 0;
    executeQueryEventArgs.parameters.pagOpe = 0;

    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_LM28_ZKS23', ['sequential', 'secOpe'], executeQueryEventArgs);
    if (executeQueryEventArgs.config?.appendRecords) {

      if (transacQueryFilter.typeTransaction == 'PRV' && listTransactionQuery) {
        executeQueryEventArgs.parameters.pagSec = listTransactionQuery.data().length;
      } else {
        executeQueryEventArgs.parameters.pagSec = executeQueryEventArgs.parameters.secOpe;
        executeQueryEventArgs.parameters.pagOpe = executeQueryEventArgs.parameters.sequential;
      }
    }

    executeQueryEventArgs.commons.execServer = true;





    //executeQueryEventArgs.commons.serverParameters.ListTransactionQuery = true;
  };


  //TypeTransactionQueryQuery Entity: TypeTransactionQuery
  task_executeQuery_Q_TYPESIAO_HG77 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.TypeTransactionQuery = true;
  };


  //Start signature to Callback event to Q_TYPESIAO_HG77
  task_executeQueryCallback_Q_TYPESIAO_HG77 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };




  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: TransactionQueryForm
  task_initData_VC_TRANSACTON_836272 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {

    initDataEventArgs.commons.execServer = false;


  };


  //gridRowSelecting QueryView: 
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_LM28_ZKS23 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {
    //Open Modal
    let nav: any = gridRowSelectingEventArgs.commons.api.navigation;

    nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_DETALLENI_97876');
    nav.address = {
      moduleId: 'ASSTS',
      subModuleId: 'QERYS',
      taskId: 'T_ASSTSECRXYFPY_431',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_DETAILTRSN_444431'
    };

    nav.queryParameters = {
      mode: 2
    };
    nav.modalProperties = {
      size: 'lg',
      callFromGrid: false
    };

    nav.customDialogParameters = {
      detailTrans: gridRowSelectingEventArgs.rowData,
      transaction: entities.FilterTransactionQuery.typeTransaction
    };

    //Si la llamada es desde un evento de un control perteneciente a la cabecera de la página
    //nav.openModalWindow(args.commons.controlId, null);
    //Si la llamada es desde un evento de un control perteneciente a una grilla de la página
    nav.openModalWindow('QV_LM28_ZKS23', gridRowSelectingEventArgs.nameEntityGrid);


    gridRowSelectingEventArgs.commons.execServer = false;
  };









}