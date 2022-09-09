import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-valueratee-334932.model';
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

/* variables locales de T_VALUERATESFBO_932*/
let id: any;

let clase: any;

export class VcValueratee334932Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_VALUERATESFBO_932"

  //RatesQuery_5693 Entity: 
  task_executeQuery_Q_RATESEXU_5693 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    if (executeQueryEventArgs.commons.api.grid.getSelectedRows('QV_1722_99596')[0]) {
      executeQueryEventArgs.parameters.id = id;
      executeQueryEventArgs.parameters.clase = clase;
      executeQueryEventArgs.commons.execServer = true;
    } else {
      executeQueryEventArgs.commons.execServer = false;
    }

    //executeQueryEventArgs.commons.serverParameters. = true;
  };



  //Start signature to Callback event to Q_RATESEXU_5693
  task_executeQueryCallback_Q_RATESEXU_5693 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };



  //TypeRatesQuery Entity: 
  task_executeQuery_Q_TYPERASE_1722 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters. = true;
  };


  //Start signature to Callback event to Q_TYPERASE_1722
  task_executeQueryCallback_Q_TYPERASE_1722 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };


  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: ValueRates
  task_initData_VC_VALUERATEE_334932 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = false;
    //initDataEventArgs.commons.serverParameters.entityName = true;
  };

  //Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
  //ViewContainer: ValueRates
  task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
    onCloseModalEventArgs.commons.execServer = false;
    let isAccept: any;

    if (onCloseModalEventArgs.closedViewContainerId == 'VC_TYPERATEDA_850545') {
      if (typeof onCloseModalEventArgs.result === "boolean") {
        isAccept = onCloseModalEventArgs.result;
      }
      if (isAccept) {
        //Refrescar e grid de tipos de tasas
        /* if (entities.ServerParameter.refresGridFlag == false || entities.ServerParameter.refresGridFlag == null) {
                entities.ServerParameter.refresGridFlag = true;
            } else {
                entities.ServerParameter.refresGridFlag = false;
         }*/

        onCloseModalEventArgs.commons.api.grid.refresh('QV_1722_99596');
        onCloseModalEventArgs.commons.api.grid.hideToolBarButton('QV_5693_54772', 'create');
      }
    }

    if (onCloseModalEventArgs.closedViewContainerId == 'VC_RATESMODAL_789953') {
      if (typeof onCloseModalEventArgs.result === "boolean") {
        isAccept = onCloseModalEventArgs.result;
      }
      if (isAccept) {
        //Refrescar e grid de valores de tasa
        /*if (entities.ServerParameter.refresGrid2Flag == false || entities.ServerParameter.refresGrid2Flag == null) {
                entities.ServerParameter.refresGrid2Flag = true;
            } else {
                entities.ServerParameter.refresGrid2Flag = false;
        }*/
        onCloseModalEventArgs.commons.api.grid.refresh('QV_5693_54772');
      }
    }
  };

  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: ValueRates
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {

    renderEventArgs.commons.execServer = false;
    renderEventArgs.commons.api.grid.hideToolBarButton('QV_5693_54772', 'create');

  };


  //gridRowDeleting QueryView: QV_1722_99596
  //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
  task_gridRowDeleting_QV_1722_99596 = (
    entities: Model,
    gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
  ) => {
    gridRowDeletingEventArgs.commons.execServer = true;
    //gridRowDeletingEventArgs.commons.serverParameters.TypeRates = true;
  };

  //Start signature to callBack event to QV_1722_99596
  task_gridRowDeletingCallback_QV_1722_99596 = (
    entities: Model,
    gridRowDeletingEventArgs: CobisModelGridRowActionCallbackEventArgs
  ) => {
    //here your code
    if (gridRowDeletingEventArgs.success) {
      gridRowDeletingEventArgs.commons.api.grid.removeAllRows("Rates");
      gridRowDeletingEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_ELIMINAET_70731", false, null, this.ASSTS.timer);
    }


  };

  //gridRowDeleting QueryView: QV_5693_54772
  //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
  task_gridRowDeleting_QV_5693_54772 = (
    entities: Model,
    gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
  ) => {
    gridRowDeletingEventArgs.commons.execServer = true;
    //gridRowDeletingEventArgs.commons.serverParameters.Rates = true;
  };

  //Start signature to callBack event to QV_5693_54772
  task_gridRowDeletingCallback_QV_5693_54772 = (
    entities: Model,
    gridRowDeletingEventArgs: CobisModelGridRowActionCallbackEventArgs
  ) => {

    if (gridRowDeletingEventArgs.success) {
      gridRowDeletingEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_ELIMINAET_70731", false, null, this.ASSTS.timer);
    }
  };

  //gridRowSelecting QueryView: QV_1722_99596
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_1722_99596 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.api.grid.showToolBarButton('QV_5693_54772', 'create');
    id = gridRowSelectingEventArgs.rowData.identifier;
    clase = gridRowSelectingEventArgs.rowData.clase;
    gridRowSelectingEventArgs.commons.execServer = false;
    gridRowSelectingEventArgs.commons.api.grid.refresh('QV_5693_54772');
    /*var nav = gridRowSelectingEventArgs.commons.api.navigation;
        entities.ServerParameter.selectedRow = gridRowSelectingEventArgs.rowIndex;
        if (entities.ServerParameter.flag == false || entities.ServerParameter.flag == null) {
            entities.ServerParameter.flag = true;
        } else {
            entities.ServerParameter.flag = false;
        }
        //gridRowSelectingEventArgs.commons.serverParameters.TypeRates = true;
        
        nav.customDialogParameters = {
            ratesT: entities.TypeRates
    };*/


  };

  //gridRowSelecting QueryView: QV_5693_54772
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_5693_54772 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {
    gridRowSelectingEventArgs.commons.execServer = false;
    // gridRowSelectingEventArgs.commons.serverParameters.Rates = true;
  };


}