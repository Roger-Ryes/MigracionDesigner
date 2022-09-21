import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-operatioee-354330.model';
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

/* variables locales de T_LNSPRHWGYLNWJ_330*/

let prioridad: any = 0;

let valor: any = 0;
let stateOp: any = 0;
let state: any;

/* variables locales de T_LNSPRSHDBNXGH_268*/

let codOperacion: any = 0;

export class VcOperatioee354330Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_LNSPRHWGYLNWJ_330"


  // (Button) 
  task_executeCommand_VA_VAVABUTTONTR__P_260587 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {

    executeCommandEventArgs.commons.serverParameters.AmortizationTitleEntity = true;
    executeCommandEventArgs.commons.serverParameters.AmortizationFormEntity = true;
    executeCommandEventArgs.commons.serverParameters.AmortizationEntity = true;

    executeCommandEventArgs.commons.serverParameters.GeneralParametersQuery = true;
    executeCommandEventArgs.commons.serverParameters.GenericEntity = true;
    executeCommandEventArgs.commons.serverParameters.OperationEntity = true;

    executeCommandEventArgs.commons.serverParameters.OperationItemList = true;
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters. = true;

  };


  //Start signature to Callback event to VA_VAVABUTTONTR__P_260587
  task_executeCommandCallback_VA_VAVABUTTONTR__P_260587 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    if (executeCommandCallbackEventArgs.success) {
      executeCommandCallbackEventArgs.commons.api.viewState.enable('CM_TLNSPRVJ_776');
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_OPERACICA_42329', false, null, this.LNSPR.timer);
      let parentVc: any = executeCommandCallbackEventArgs.commons.api.parentVc;

      if (!parentVc || (parentVc && parentVc.id == 'VC_LOANSEARCH_100921')) {
        let grid: any = executeCommandCallbackEventArgs.commons.api.grid;

        if (entities.AmortizationTitleEntity.dynamicField1 == null) {
          grid.hideColumn('QV_ECPR_JAA30', 'dynamicField1');
          grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField1');
        } else {
          grid.title('QV_ECPR_JAA30', 'dynamicField1', entities.AmortizationTitleEntity.dynamicField1);
          grid.showColumn('QV_ECPR_JAA30', 'dynamicField1');
        }
        if (entities.AmortizationTitleEntity.dynamicField2 == null) {
          grid.hideColumn('QV_ECPR_JAA30', 'dynamicField2');
          grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField2');
        } else {
          grid.title('QV_ECPR_JAA30', 'dynamicField2', entities.AmortizationTitleEntity.dynamicField2);
          grid.showColumn('QV_ECPR_JAA30', 'dynamicField2');
        }
        if (entities.AmortizationTitleEntity.dynamicField3 == null) {
          grid.hideColumn('QV_ECPR_JAA30', 'dynamicField3');
          grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField3');
        } else {
          grid.title('QV_ECPR_JAA30', 'dynamicField3', entities.AmortizationTitleEntity.dynamicField3);
          grid.showColumn('QV_ECPR_JAA30', 'dynamicField3');
        }
        if (entities.AmortizationTitleEntity.dynamicField4 == null) {
          grid.hideColumn('QV_ECPR_JAA30', 'dynamicField4');
          grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField4');
        } else {
          grid.title('QV_ECPR_JAA30', 'dynamicField4', entities.AmortizationTitleEntity.dynamicField4);
          grid.showColumn('QV_ECPR_JAA30', 'dynamicField4');
        }
        if (entities.AmortizationTitleEntity.dynamicField5 == null) {
          grid.hideColumn('QV_ECPR_JAA30', 'dynamicField5');
          grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField5');
        } else {
          grid.title('QV_ECPR_JAA30', 'dynamicField5', entities.AmortizationTitleEntity.dynamicField5);
          grid.showColumn('QV_ECPR_JAA30', 'dynamicField5');
        }
        if (entities.AmortizationTitleEntity.dynamicField6 == null) {
          grid.hideColumn('QV_ECPR_JAA30', 'dynamicField6');
          grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField6');
        } else {
          grid.title('QV_ECPR_JAA30', 'dynamicField6', entities.AmortizationTitleEntity.dynamicField6);
          grid.showColumn('QV_ECPR_JAA30', 'dynamicField6');
        }
        if (entities.AmortizationTitleEntity.dynamicField7 == null) {
          grid.hideColumn('QV_ECPR_JAA30', 'dynamicField7');
          grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField7');
        } else {
          grid.title('QV_ECPR_JAA30', 'dynamicField7', entities.AmortizationTitleEntity.dynamicField7);
          grid.showColumn('QV_ECPR_JAA30', 'dynamicField7');
        }
        if (entities.AmortizationTitleEntity.dynamicField8 == null) {
          grid.hideColumn('QV_ECPR_JAA30', 'dynamicField8');
          grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField8');
        } else {
          grid.title('QV_ECPR_JAA30', 'dynamicField8', entities.AmortizationTitleEntity.dynamicField8);
          grid.showColumn('QV_ECPR_JAA30', 'dynamicField8');
        }
        if (entities.AmortizationTitleEntity.dynamicField9 == null) {
          grid.hideColumn('QV_ECPR_JAA30', 'dynamicField9');
          grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField9');
        } else {
          grid.title('QV_ECPR_JAA30', 'dynamicField9', entities.AmortizationTitleEntity.dynamicField9);
          grid.showColumn('QV_ECPR_JAA30', 'dynamicField9');
        }
        if (entities.AmortizationTitleEntity.dynamicField10 == null) {
          grid.hideColumn('QV_ECPR_JAA30', 'dynamicField10');
          grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField10');
        } else {
          grid.title('QV_ECPR_JAA30', 'dynamicField10', entities.AmortizationTitleEntity.dynamicField10);
          grid.showColumn('QV_ECPR_JAA30', 'dynamicField10');
        }
        if (entities.AmortizationTitleEntity.dynamicField11 == null) {
          grid.hideColumn('QV_ECPR_JAA30', 'dynamicField11');
          grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField11');
        } else {
          grid.title('QV_ECPR_JAA30', 'dynamicField11', entities.AmortizationTitleEntity.dynamicField11);
          grid.showColumn('QV_ECPR_JAA30', 'dynamicField11');
        }
        if (entities.AmortizationTitleEntity.dynamicField12 == null) {
          grid.hideColumn('QV_ECPR_JAA30', 'dynamicField12');
          grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField12');
        } else {
          grid.title('QV_ECPR_JAA30', 'dynamicField12', entities.AmortizationTitleEntity.dynamicField12);
          grid.showColumn('QV_ECPR_JAA30', 'dynamicField12');
        }
        if (entities.AmortizationTitleEntity.dynamicField13 == null) {
          grid.hideColumn('QV_ECPR_JAA30', 'dynamicField13');
          grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField13');
        } else {
          grid.title('QV_ECPR_JAA30', 'dynamicField13', entities.AmortizationTitleEntity.dynamicField13);
          grid.showColumn('QV_ECPR_JAA30', 'dynamicField13');
        }
        if (entities.AmortizationTitleEntity.dynamicField14 == null) {
          grid.hideColumn('QV_ECPR_JAA30', 'dynamicField14');
          grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField14');
        } else {
          grid.title('QV_ECPR_JAA30', 'dynamicField14', entities.AmortizationTitleEntity.dynamicField14);
          grid.showColumn('QV_ECPR_JAA30', 'dynamicField14');
        }
        if (entities.AmortizationTitleEntity.dynamicField15 == null) {
          grid.hideColumn('QV_ECPR_JAA30', 'dynamicField15');
          grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField15');
        } else {
          grid.title('QV_ECPR_JAA30', 'dynamicField15', entities.AmortizationTitleEntity.dynamicField15);
          grid.showColumn('QV_ECPR_JAA30', 'dynamicField15');
        }
        if (entities.AmortizationTitleEntity.dynamicField16 == null) {
          grid.hideColumn('QV_ECPR_JAA30', 'dynamicField16');
          grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField16');
        } else {
          grid.title('QV_ECPR_JAA30', 'dynamicField16', entities.AmortizationTitleEntity.dynamicField16);
          grid.showColumn('QV_ECPR_JAA30', 'dynamicField16');
        }
        if (entities.AmortizationTitleEntity.dynamicField17 == null) {
          grid.hideColumn('QV_ECPR_JAA30', 'dynamicField17');
          grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField17');
        } else {
          grid.title('QV_ECPR_JAA30', 'dynamicField17', entities.AmortizationTitleEntity.dynamicField17);
          grid.showColumn('QV_ECPR_JAA30', 'dynamicField17');
        }
        if (entities.AmortizationTitleEntity.dynamicField18 == null) {
          grid.hideColumn('QV_ECPR_JAA30', 'dynamicField18');
          grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField18');
        } else {
          grid.title('QV_ECPR_JAA30', 'dynamicField18', entities.AmortizationTitleEntity.dynamicField18);
          grid.showColumn('QV_ECPR_JAA30', 'dynamicField18');
        }
        if (entities.AmortizationTitleEntity.dynamicField19 == null) {
          grid.hideColumn('QV_ECPR_JAA30', 'dynamicField19');
          grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField19');
        } else {
          grid.title('QV_ECPR_JAA30', 'dynamicField19', entities.AmortizationTitleEntity.dynamicField19);
          grid.showColumn('QV_ECPR_JAA30', 'dynamicField19');
        }
        if (entities.AmortizationTitleEntity.dynamicField20 == null) {
          grid.hideColumn('QV_ECPR_JAA30', 'dynamicField20');
          grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField20');
        } else {
          grid.title('QV_ECPR_JAA30', 'dynamicField20', entities.AmortizationTitleEntity.dynamicField20);
          grid.showColumn('QV_ECPR_JAA30', 'dynamicField20');
        }
      }
    }

  };


  //OperationItemsListQuery Entity: OperationItemsList
  task_executeQuery_Q_OPERLSST_KU21 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.vc.model.OperationEntity.operation;
    let parentVc: any = executeQueryEventArgs.commons.api.parentVc;

    //validacion pantalla actualizacion
    if (parentVc && parentVc.id == 'VC_FSEARCHRUU_598110') {
      state = executeQueryEventArgs.commons.api.vc.model.GeneralInformation.codState
      //asignacion variable actualizacion prestamos != no vigente
      if (state != stateOp) {
        executeQueryEventArgs.parameters.opActiva = 'S';
      }
    }

    if (parentVc && parentVc.id == 'VC_RESTRUCTEG_166525') {
      executeQueryEventArgs.parameters.reest = 'S';
    }

    if (parentVc && parentVc.id == 'VC_LOANPARTIR_265871') {
      executeQueryEventArgs.parameters.operacion = 'P';
    } else {
      executeQueryEventArgs.parameters.operacion = 'S';
    }
    executeQueryEventArgs.commons.execServer = executeQueryEventArgs.parameters.banco ? true : false;
    //executeQueryEventArgs.commons.serverParameters.OperationItemsList = true;
  };

  //Start signature to Callback event to Q_OPERLSST_KU21
  task_executeQueryCallback_Q_OPERLSST_KU21 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //if (executeQueryCallbackEventArgs.success) {
    let grid: any = executeQueryCallbackEventArgs.commons.api.grid;

    let parentVc: any = executeQueryCallbackEventArgs.commons.api.parentVc;
    let typeAggregate: any = entities.GeneralParametersQuery.aggregate;
    executeQueryCallbackEventArgs.commons.api.viewState.show('VC_RCGXEYTMZG_697147');

    if (entities.OperationItemsList.length > 0) {
      for (let i: any = 0; i < entities.OperationItemsList.length; i++) {
        if (entities.OperationItemsList.data()[i].typeItem == 'C' || entities.OperationItemsList.data()[i].typeItem == 'I' || entities.OperationItemsList.data()[i].typeItem == 'M' || entities.OperationItemsList.data()[i].item == 'IVA_INT' || entities.OperationItemsList[i].item == 'IVA_IMO') {
          executeQueryCallbackEventArgs.commons.api.grid.hideGridRowCommand('QV_MC21_OVS27', entities.OperationItemsList[i], 'delete');
        }

        if (typeAggregate == 'S' && parentVc && parentVc.id == 'VC_RESTRUCTEG_166525') {
          grid.hideGridRowCommand('QV_MC21_OVS27', entities.OperationItemsList[i], 'delete');
          grid.hideGridRowCommand('QV_MC21_OVS27', entities.OperationItemsList[i], 'edit');
        }
      }
    }
    // }
  };


  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: OperationItems
  task_initData_VC_OPERATIOEE_354330 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    let nav: any = initDataEventArgs.commons.api.navigation;
    if (nav.getCustomDialogParameters() && (nav.getCustomDialogParameters().money || nav.getCustomDialogParameters().money == 0) && nav.getCustomDialogParameters().typeOperation &&
      nav.getCustomDialogParameters().operation) {

      entities.OperationEntity.money = nav.getCustomDialogParameters().money;
      entities.OperationEntity.typeOperation = nav.getCustomDialogParameters().typeOperation;
      entities.OperationEntity.operation = nav.getCustomDialogParameters().operation;

      if (initDataEventArgs.commons.api.parentVc && initDataEventArgs.commons.api.parentVc?.id == 'VC_LOANPARTIR_265871') {
        entities.AmortizationFormEntity.operationCode = codOperacion;
        initDataEventArgs.commons.api.viewState.hide('VA_VAVABUTTONTR__P_260587');

      }
      initDataEventArgs.commons.execServer = true;
    }
  };



  //Start signature to Callback event to VC_OPERATIOEE_354330
  task_initDataCallback_VC_OPERATIOEE_354330 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
  ) => {
    let viewState: any = initDataCallbackEventArgs.commons.api.viewState;
    let parentVc: any = initDataCallbackEventArgs.commons.api.parentVc;
    let grid: any = initDataCallbackEventArgs.commons.api.grid;
    let typeAggregate: any = entities.GeneralParametersQuery.aggregate;

    //ocultar si es AGREGADA y en reestructura
    if (typeAggregate == 'S' && parentVc && parentVc.id == 'VC_RESTRUCTEG_166525') {
      viewState.hide('VA_VAVABUTTONTR__P_260587'); // Boton guardar
      grid.hideToolBarButton('QV_MC21_OVS27', 'create');
    }
  };


  //Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
  //ViewContainer: OperationItems
  task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
    onCloseModalEventArgs.commons.execServer = false;
    let constants: any = onCloseModalEventArgs.commons.constants;
    let resultArgs: any = onCloseModalEventArgs.result.resultArgs;

    if (onCloseModalEventArgs.closedViewContainerId == 'VC_MODALOPERI_484830' && resultArgs) {
      if (onCloseModalEventArgs.dialogCloseType !== constants.dialogCloseType.NonInteractive) {
        if (resultArgs.mode === constants.mode.Insert) {
          onCloseModalEventArgs.commons.api.grid.addRow('OperationItemsList', resultArgs.data.OperationItemsList, true);
        } else if (resultArgs.mode === constants.mode.Update) {
          onCloseModalEventArgs.commons.api.grid.updateRow('OperationItemsList', resultArgs.index, resultArgs.data.OperationItemsList, true);
        }
      }
    }
  };



  //gridRowDeleting QueryView: QV_MC21_OVS27
  //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
  task_gridRowDeleting_QV_MC21_OVS27 = (
    entities: Model,
    gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
  ) => {

    gridRowDeletingEventArgs.commons.execServer = true;
    //gridRowDeletingEventArgs.commons.serverParameters.OperationItemsList = true;

  };






  //Start signature to Callback event to QV_MC21_OVS27
  task_gridRowDeletingCallback_QV_MC21_OVS27 = (
    entities: Model,
    gridRowDeletingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
  ) => {
    let parentVc: any = gridRowDeletingCallbackEventArgs.commons.api.parentVc;
    let viewState: any = gridRowDeletingCallbackEventArgs.commons.api.viewState;


    if (gridRowDeletingCallbackEventArgs.success) {
      gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.LBL_LNSPR_ELIMINATR_48672', false, null, this.LNSPR.timer);
    }

    if (parentVc && parentVc.id == 'VC_FSEARCHRUU_598110') {
      state = entities.GeneralInformation.codState;
      //asignacion variable actualizacion prestamos != no vigente
      if (state != stateOp) {
        viewState.enable('CM_TLNSPRVJ_776'); //habilitar transmitir
      }
    }


    gridRowDeletingCallbackEventArgs.commons.api.grid.refresh('QV_MC21_OVS27');
  };



  //gridRowInserting QueryView: QV_MC21_OVS27
  //Se ejecuta antes de que los datos insertados en una grilla sean comprometidos.
  task_gridRowInserting_QV_MC21_OVS27 = (
    entities: Model,
    gridRowInsertingEventArgs: CobisModelGridRowActionEventArgs
  ) => {

    gridRowInsertingEventArgs.commons.execServer = true;
    //gridRowInsertingEventArgs.commons.serverParameters.OperationItemsList = true;

  };






  //Start signature to Callback event to QV_MC21_OVS27
  task_gridRowInsertingCallback_QV_MC21_OVS27 = (
    entities: Model,
    gridRowInsertingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
  ) => {
    let viewState: any = gridRowInsertingCallbackEventArgs.commons.api.viewState;
    let parentVc: any = gridRowInsertingCallbackEventArgs.commons.api.parentVc;


    if (gridRowInsertingCallbackEventArgs.success) {
      gridRowInsertingCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.LBL_LNSPR_INGRESARE_39730', false, null, this.LNSPR.timer);
    }
    if (parentVc && parentVc.id == 'VC_FSEARCHRUU_598110') {
      state = entities.GeneralInformation.codState;
      //asignacion variable actualizacion prestamos != no vigente
      if (state != stateOp) {
        viewState.enable('CM_TLNSPRVJ_776'); //habilitar transmitir
      }
    }

    gridRowInsertingCallbackEventArgs.commons.api.grid.refresh('QV_MC21_OVS27');
  };



  //gridRowSelecting QueryView: QV_MC21_OVS27
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_MC21_OVS27 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.execServer = false;

  };







  //gridRowUpdating QueryView: QV_MC21_OVS27
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowUpdating_QV_MC21_OVS27 = (
    entities: Model,
    gridRowUpdatingEventArgs: CobisModelGridRowActionEventArgs
  ) => {

    gridRowUpdatingEventArgs.commons.execServer = true;
    //gridRowUpdatingEventArgs.commons.serverParameters.OperationItemsList = true;

  };






  //Start signature to Callback event to QV_MC21_OVS27
  task_gridRowUpdatingCallback_QV_MC21_OVS27 = (
    entities: Model,
    gridRowUpdatingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
  ) => {
    let viewState: any = gridRowUpdatingCallbackEventArgs.commons.api.viewState;
    let parentVc: any = gridRowUpdatingCallbackEventArgs.commons.api.parentVc;


    if (gridRowUpdatingCallbackEventArgs.success) {
      gridRowUpdatingCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.LBL_LNSPR_MODIFICEO_25691', false, null, this.LNSPR.timer);
    }

    if (parentVc && parentVc.id == 'VC_FSEARCHRUU_598110') {
      state = entities.GeneralInformation.codState;
      //asignacion variable actualizacion prestamos != no vigente
      if (state != stateOp) {
        viewState.enable('CM_TLNSPRVJ_776'); //habilitar transmitir
      }
    }


    gridRowUpdatingCallbackEventArgs.commons.api.grid.refresh('QV_MC21_OVS27');
  };



}