import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-operatiopa-648633.model';
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

/* variables locales de T_LNSPRSHDBNXGH_268*/
let fechaCreacion: any = null;

/* variables locales de T_LNSPRGNPCEXYE_633*/
let changeAmortization: any = false; //Vaildar solo se utilizn el initDate CallBack

let stateCalculate: any = 'V';
let diferenciaCapitalCuota: any = 0;
let updateFila: any = true; // V - Validate, A - Allows, C - Cancel
let flagUpdateFee: any = false;
let flagUpdateTerm: any = false;
let tmpGridAmortization: any = null;

export class VcOperatiopa648633Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_LNSPRGNPCEXYE_633"
  /**
   * Suprimir las columnas adicionales en la tabla Amortización
   *
   * @param entities Contiene todas las entidades del formulario.
   * @param eventArgs Propiedades y métodos del evento que se está manipulando.
   * @param gridId id del Grid de amortización a Editar.
   */
  suprColAmortization = (entities: Model, eventArgs: any, gridId: any) => {
    let grid: any = eventArgs.commons.api.grid;

    if (entities.AmortizationTitleEntity.dynamicField1 == null) {
      grid.hideColumn(gridId, 'dynamicField1');
      grid.disabledColumn(gridId, 'dynamicField1');
    } else {
      grid.title(gridId, 'dynamicField1', entities.AmortizationTitleEntity.dynamicField1);
      grid.showColumn(gridId, 'dynamicField1');
    }
    if (entities.AmortizationTitleEntity.dynamicField2 == null) {
      grid.hideColumn(gridId, 'dynamicField2');
      grid.disabledColumn(gridId, 'dynamicField2');
    } else {
      grid.title(gridId, 'dynamicField2', entities.AmortizationTitleEntity.dynamicField2);
      grid.showColumn(gridId, 'dynamicField2');
    }
    if (entities.AmortizationTitleEntity.dynamicField3 == null) {
      grid.hideColumn(gridId, 'dynamicField3');
      grid.disabledColumn(gridId, 'dynamicField3');
    } else {
      grid.title(gridId, 'dynamicField3', entities.AmortizationTitleEntity.dynamicField3);
      grid.showColumn(gridId, 'dynamicField3');
    }
    if (entities.AmortizationTitleEntity.dynamicField4 == null) {
      grid.hideColumn(gridId, 'dynamicField4');
      grid.disabledColumn(gridId, 'dynamicField4');
    } else {
      grid.title(gridId, 'dynamicField4', entities.AmortizationTitleEntity.dynamicField4);
      grid.showColumn(gridId, 'dynamicField4');
    }
    if (entities.AmortizationTitleEntity.dynamicField5 == null) {
      grid.hideColumn(gridId, 'dynamicField5');
      grid.disabledColumn(gridId, 'dynamicField5');
    } else {
      grid.title(gridId, 'dynamicField5', entities.AmortizationTitleEntity.dynamicField5);
      grid.showColumn(gridId, 'dynamicField5');
    }
    if (entities.AmortizationTitleEntity.dynamicField6 == null) {
      grid.hideColumn(gridId, 'dynamicField6');
      grid.disabledColumn(gridId, 'dynamicField6');
    } else {
      grid.title(gridId, 'dynamicField6', entities.AmortizationTitleEntity.dynamicField6);
      grid.showColumn(gridId, 'dynamicField6');
    }
    if (entities.AmortizationTitleEntity.dynamicField7 == null) {
      grid.hideColumn(gridId, 'dynamicField7');
      grid.disabledColumn(gridId, 'dynamicField7');
    } else {
      grid.title(gridId, 'dynamicField7', entities.AmortizationTitleEntity.dynamicField7);
      grid.showColumn(gridId, 'dynamicField7');
    }
    if (entities.AmortizationTitleEntity.dynamicField8 == null) {
      grid.hideColumn(gridId, 'dynamicField8');
      grid.disabledColumn(gridId, 'dynamicField8');
    } else {
      grid.title(gridId, 'dynamicField8', entities.AmortizationTitleEntity.dynamicField8);
      grid.showColumn(gridId, 'dynamicField8');
    }
    if (entities.AmortizationTitleEntity.dynamicField9 == null) {
      grid.hideColumn(gridId, 'dynamicField9');
      grid.disabledColumn(gridId, 'dynamicField9');
    } else {
      grid.title(gridId, 'dynamicField9', entities.AmortizationTitleEntity.dynamicField9);
      grid.showColumn(gridId, 'dynamicField9');
    }
    if (entities.AmortizationTitleEntity.dynamicField10 == null) {
      grid.hideColumn(gridId, 'dynamicField10');
      grid.disabledColumn(gridId, 'dynamicField10');
    } else {
      grid.title(gridId, 'dynamicField10', entities.AmortizationTitleEntity.dynamicField10);
      grid.showColumn(gridId, 'dynamicField10');
    }
    if (entities.AmortizationTitleEntity.dynamicField11 == null) {
      grid.hideColumn(gridId, 'dynamicField11');
      grid.disabledColumn(gridId, 'dynamicField11');
    } else {
      grid.title(gridId, 'dynamicField11', entities.AmortizationTitleEntity.dynamicField11);
      grid.showColumn(gridId, 'dynamicField11');
    }
    if (entities.AmortizationTitleEntity.dynamicField12 == null) {
      grid.hideColumn(gridId, 'dynamicField12');
      grid.disabledColumn(gridId, 'dynamicField12');
    } else {
      grid.title(gridId, 'dynamicField12', entities.AmortizationTitleEntity.dynamicField12);
      grid.showColumn(gridId, 'dynamicField12');
    }
    if (entities.AmortizationTitleEntity.dynamicField13 == null) {
      grid.hideColumn(gridId, 'dynamicField13');
      grid.disabledColumn(gridId, 'dynamicField13');
    } else {
      grid.title(gridId, 'dynamicField13', entities.AmortizationTitleEntity.dynamicField13);
      grid.showColumn(gridId, 'dynamicField13');
    }
    if (entities.AmortizationTitleEntity.dynamicField14 == null) {
      grid.hideColumn(gridId, 'dynamicField14');
      grid.disabledColumn(gridId, 'dynamicField14');
    } else {
      grid.title(gridId, 'dynamicField14', entities.AmortizationTitleEntity.dynamicField14);
      grid.showColumn(gridId, 'dynamicField14');
    }
    if (entities.AmortizationTitleEntity.dynamicField15 == null) {
      grid.hideColumn(gridId, 'dynamicField15');
      grid.disabledColumn(gridId, 'dynamicField15');
    } else {
      grid.title(gridId, 'dynamicField15', entities.AmortizationTitleEntity.dynamicField15);
      grid.showColumn(gridId, 'dynamicField15');
    }
    if (entities.AmortizationTitleEntity.dynamicField16 == null) {
      grid.hideColumn(gridId, 'dynamicField16');
      grid.disabledColumn(gridId, 'dynamicField16');
    } else {
      grid.title(gridId, 'dynamicField16', entities.AmortizationTitleEntity.dynamicField16);
      grid.showColumn(gridId, 'dynamicField16');
    }
    if (entities.AmortizationTitleEntity.dynamicField17 == null) {
      grid.hideColumn(gridId, 'dynamicField17');
      grid.disabledColumn(gridId, 'dynamicField17');
    } else {
      grid.title(gridId, 'dynamicField17', entities.AmortizationTitleEntity.dynamicField17);
      grid.showColumn(gridId, 'dynamicField17');
    }
    if (entities.AmortizationTitleEntity.dynamicField18 == null) {
      grid.hideColumn(gridId, 'dynamicField18');
      grid.disabledColumn(gridId, 'dynamicField18');
    } else {
      grid.title(gridId, 'dynamicField18', entities.AmortizationTitleEntity.dynamicField18);
      grid.showColumn(gridId, 'dynamicField18');
    }
    if (entities.AmortizationTitleEntity.dynamicField19 == null) {
      grid.hideColumn(gridId, 'dynamicField19');
      grid.disabledColumn(gridId, 'dynamicField19');
    } else {
      grid.title(gridId, 'dynamicField19', entities.AmortizationTitleEntity.dynamicField19);
      grid.showColumn(gridId, 'dynamicField19');
    }
    if (entities.AmortizationTitleEntity.dynamicField20 == null) {
      grid.hideColumn(gridId, 'dynamicField20');
      grid.disabledColumn(gridId, 'dynamicField20');
    } else {
      grid.title(gridId, 'dynamicField20', entities.AmortizationTitleEntity.dynamicField20);
      grid.showColumn(gridId, 'dynamicField20');
    }
  }

  //gridAfterLeaveInLineRow QueryView: QV_ECPR_JAA30
  //Evento GridAfterLeavenlineRow: Se ejecuta después de aceptar la edición o inserción en línea de la grilla.
  task_gridAfterLeaveInLineRow_QV_ECPR_JAA30 = (
    entities: Model,
    gridAfterLeaveInLineRowEventArgs: CobisModelGridAfterLeaveInLineRowEventArgs
  ) => {
    gridAfterLeaveInLineRowEventArgs.commons.execServer = false;
    if (gridAfterLeaveInLineRowEventArgs.cancelEdition) {
      for (let a: any = 0; a < entities.AmortizationEntity.length - 1; a++) {
        entities.AmortizationEntity[a].dividend = (+a + 1);
      }
    } else {
      if (updateFila) {
        let fechaMenor: any;
        let fechaMayor: any;
        let aux: any;
        //var datosGrid = entities.AmortizationEntity;
        for (let i: any = 0; i < entities.AmortizationEntity.length - 1; i++) {
          fechaMenor = entities.AmortizationEntity[i].expirationDate.getTime();
          for (let j: any = i + 1; j < entities.AmortizationEntity.length - 1; j++) {
            fechaMayor = entities.AmortizationEntity[j].expirationDate.getTime();
            if (fechaMenor > fechaMayor) {
              fechaMenor = fechaMayor
              aux = entities.AmortizationEntity[i];
              entities.AmortizationEntity.data()[i] = entities.AmortizationEntity[j];
              entities.AmortizationEntity[j] = aux;
            }
          }
        }
        for (let k: any = 0; k < entities.AmortizationEntity.length - 1; k++) {
          entities.AmortizationEntity[k].dividend = (+k + 1);
        }
        updateFila = false;
        // TODO - REFACTORIZAR - MUY PENDIENTE - CREAR FUNCION
        // gridAfterLeaveInLineRowEventArgs.commons.api.vc.executeCommand("VA_VAVABUTTONOH3FZ_246198", "VA_VAVABUTTONOH3FZ_246198", validator, false, false, '', false);
      }
    }
  };

  //gridBeforeEnterInLineRow QueryView: undefined
  //Evento GridBeforeEnterInLineRow: Se ejecuta antes de la edición o inserción en línea de la grilla.
  task_gridBeforeEnterInLineRow_QV_ECPR_JAA30 = (
    entities: Model,
    gridBeforeEnterInLineRowEventArgs: CobisModelGridBeforeEnterInLineRowEventArgs
  ) => {
    gridBeforeEnterInLineRowEventArgs.commons.execServer = false;
    updateFila = true;
    let grid: any = gridBeforeEnterInLineRowEventArgs.commons.api.grid;
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField2');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField3');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField4');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField5');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField6');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField7');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField8');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField9');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField10');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField11');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField12');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField13');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField14');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField15');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField16');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField17');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField18');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField19');
    grid.disabledColumn('QV_ECPR_JAA30', 'dynamicField20');

    grid.disabledColumn('QV_ECPR_JAA30', 'dividend');
    grid.disabledColumn('QV_ECPR_JAA30', 'balanceCapital');
    grid.disabledColumn('QV_ECPR_JAA30', 'fee');

    let columnas: any = gridBeforeEnterInLineRowEventArgs.commons.api.vc.viewState.QV_ECPR_JAA30.column;
    if (entities.AmortizationTitleEntity.dynamicType1 && entities.AmortizationTitleEntity.dynamicType1 == "I") {
      //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD111_201198');
      columnas.dynamicField1.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType2 && entities.AmortizationTitleEntity.dynamicType2 == "I") {
      //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD222_976198');
      columnas.dynamicField2.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType3 && entities.AmortizationTitleEntity.dynamicType3 == "I") {
      //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD333_680198');
      columnas.dynamicField3.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType4 && entities.AmortizationTitleEntity.dynamicType4 == "I") {
      //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD444_619198');
      columnas.dynamicField4.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType5 && entities.AmortizationTitleEntity.dynamicType5 == "I") {
      //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD555_803198');
      columnas.dynamicField5.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType6 && entities.AmortizationTitleEntity.dynamicType6 == "I") {
      //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD666_861198');
      columnas.dynamicField6.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType7 && entities.AmortizationTitleEntity.dynamicType7 == "I") {
      //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD777_256198');
      columnas.dynamicField7.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType8 && entities.AmortizationTitleEntity.dynamicType8 == "I") {
      //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD888_910198');
      columnas.dynamicField8.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType9 && entities.AmortizationTitleEntity.dynamicType9 == "I") {
      //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD999_904198');
      columnas.dynamicField9.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType10 && entities.AmortizationTitleEntity.dynamicType10 == "I") {
      //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD011_387198');
      columnas.dynamicField10.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType11 && entities.AmortizationTitleEntity.dynamicType11 == "I") {
      //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD111_909198');
      columnas.dynamicField11.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType12 && entities.AmortizationTitleEntity.dynamicType12 == "I") {
      //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD121_508198');
      columnas.dynamicField12.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType13 && entities.AmortizationTitleEntity.dynamicType13 == "I") {
      //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD311_753198');
      columnas.dynamicField13.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType14 && entities.AmortizationTitleEntity.dynamicType14 == "I") {
      //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD411_866198');
      columnas.dynamicField14.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType15 && entities.AmortizationTitleEntity.dynamicType15 == "I") {
      //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD551_120198');
      columnas.dynamicField15.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType16 && entities.AmortizationTitleEntity.dynamicType16 == "I") {
      //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD111_346198');
      columnas.dynamicField16.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType17 && entities.AmortizationTitleEntity.dynamicType17 == "I") {
      //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD777_257198');
      columnas.dynamicField17.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType18 && entities.AmortizationTitleEntity.dynamicType18 == "I") {
      //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD181_740198');
      columnas.dynamicField18.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType19 && entities.AmortizationTitleEntity.dynamicType19 == "I") {
      //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD911_217198');
      columnas.dynamicField19.enabled = false
    }
    if (entities.AmortizationTitleEntity.dynamicType20 && entities.AmortizationTitleEntity.dynamicType20 == "I") {
      //gridBeforeEnterInLineRowEventArgs.commons.api.viewState.disable('VA_DYNAMICFIELD000_944198');
      columnas.dynamicField20.enabled = false
    }
  };



  //Entity: AmortizationFormEntity
  //AmortizationFormEntity.graceDividend (TextInputBox) View: OperationPaymentDayUpdateForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_9468GILHMJRMZIF_745198 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;

    let grace: any = (entities.AmortizationFormEntity.termGraceInterest) ? entities.AmortizationFormEntity.termGraceInterest : 0;
    let numDividend: any = (entities.AmortizationFormEntity.graceDividend) ? entities.AmortizationFormEntity.graceDividend : 0;
    let totalTerm: any = grace + numDividend;

    if (entities.AmortizationFormEntity.typeGrace == 'S' && totalTerm > entities.AmortizationFormEntity.term!) {

      changedEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_ELNUMDEOS_71652', false, null, this.LNSPR.timer);

      entities.AmortizationFormEntity.graceDividend = 0;

    } else if (entities.AmortizationFormEntity.typeGrace == 'S' && entities.AmortizationFormEntity.graceDividend! < 0) {
      changedEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_ELNUMDEOD_39674', false, null, this.LNSPR.timer);

      entities.AmortizationFormEntity.graceDividend = 0;
    }
  };

  //Entity: AmortizationFormEntity
  //AmortizationFormEntity.fee (TextInputBox) View: OperationPaymentDayUpdateForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_FEEOFWVFIUKFNPP_635198 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    if (!flagUpdateTerm) {
      flagUpdateFee = true;
    }


    if (changedEventArgs.newValue) {
      flagUpdateTerm = false;
    } else {
      flagUpdateTerm = true;
    }

  };




  //Entity: AmortizationEntity
  //AmortizationEntity.fee (TextInputBox) View: OperationPaymentDayUpdateForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_FEEOLAUUHKGPDCB_657198 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    diferenciaCapitalCuota = +changedEventArgs.newValue - +changedEventArgs.oldValue;
  };

  //Entity: AmortizationFormEntity
  //AmortizationFormEntity.firstDueDate (DateField) View: OperationPaymentDayUpdateForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_FIRSTDUEDATEACN_138198 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    if (changedEventArgs.newValue.getDate() && (entities.AmortizationFormEntity.paymentDay != changedEventArgs.newValue.getDate() && entities.AmortizationFormEntity.fixedPayementDay))
      entities.AmortizationFormEntity.paymentDay = changedEventArgs.newValue.getDate();

  };


  //Entity: AmortizationFormEntity
  //AmortizationFormEntity.fixedPayementDay (RadioButtonList) View: OperationPaymentDayUpdateForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_FIXEDPAYEMENYTY_637198 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    let viewState: any = changedEventArgs.commons.api.viewState;

    if (!entities.AmortizationFormEntity.fixedPayementDay) {
      entities.AmortizationFormEntity.paymentDay = null;
      viewState.disable('VA_PAYMENTDAYEFRJN_549198');
      //viewState.disable('VA_EXTENDEDPAYMEDA_710198');
      viewState.hide('VA_EXTENDEDPAYMEDA_710198');
    } else {
      viewState.enable('VA_PAYMENTDAYEFRJN_549198');
      //viewState.enable('VA_EXTENDEDPAYMEDA_710198');
      viewState.hide('VA_EXTENDEDPAYMEDA_710198');
      if (entities.AmortizationFormEntity.firstDueDate)
        entities.AmortizationFormEntity.paymentDay = entities.AmortizationFormEntity.firstDueDate?.getDate();
    }
  };

  //Entity: AmortizationFormEntity
  //AmortizationFormEntity.termGraceCapital (TextInputBox) View: OperationPaymentDayUpdateForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_TERMGRACECAPTAT_881198 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    let viewState: any = changedEventArgs.commons.api.viewState;

    if (entities.AmortizationFormEntity.termGraceInterest != null && entities.AmortizationFormEntity.termGraceInterest > 0 || (entities.AmortizationFormEntity.termGraceCapital != null && entities.AmortizationFormEntity.termGraceCapital > 0)) {
      if (changedEventArgs.oldValue == null || changedEventArgs.oldValue == 0) {
        viewState.enable('VA_TYPEGRACEBHAAVJ_350198');
        entities.AmortizationFormEntity.typeGrace = 'N';
        entities.AmortizationFormEntity.randomGrace = null;
      }
    } else {
      viewState.disable('VA_TYPEGRACEBHAAVJ_350198');
      //entities.AmortizationFormEntity.typeGrace = null;
    }
  };

  //Entity: AmortizationFormEntity
  //AmortizationFormEntity.termGraceInterest (TextInputBox) View: OperationPaymentDayUpdateForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_TERMGRACEINTTET_849198 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    let viewState: any = changedEventArgs.commons.api.viewState;

    if (entities.AmortizationFormEntity.termGraceInterest != null && entities.AmortizationFormEntity.termGraceInterest > 0 || (entities.AmortizationFormEntity.termGraceCapital != null && entities.AmortizationFormEntity.termGraceCapital > 0)) {
      if (changedEventArgs.oldValue == null || changedEventArgs.oldValue == 0) {
        viewState.enable('VA_TYPEGRACEBHAAVJ_350198');
        entities.AmortizationFormEntity.typeGrace = 'N';
        entities.AmortizationFormEntity.randomGrace = null;
      }
    } else {
      if (entities.AmortizationFormEntity.termGraceInterest == 0 && entities.AmortizationFormEntity.typeGrace == 'S') {
        entities.AmortizationFormEntity.graceDividend = 0;
      }
      viewState.disable('VA_TYPEGRACEBHAAVJ_350198');
      //entities.AmortizationFormEntity.typeGrace = null;        
    }
  };

  //Entity: AmortizationFormEntity
  //AmortizationFormEntity.term (TextInputBox) View: OperationPaymentDayUpdateForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_TERMMUMJBESVPSA_498198 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;

    if (!flagUpdateFee && entities.AmortizationFormEntity.ballonFee == 'N') {
      entities.AmortizationFormEntity.fee = 0;
      flagUpdateTerm = true;
    }
    flagUpdateFee = false;
  };

  //Entity: AmortizationFormEntity
  //AmortizationFormEntity.typeAmortization (RadioButtonList) View: OperationPaymentDayUpdateForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_TYPEAMORTIZATTN_681198 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    // TODO - REFACTORIZAR
    // $('.k-link.k-pager-nav.k-pager-first').click();
    let viewState: any = changedEventArgs.commons.api.viewState;
    let grid: any = changedEventArgs.commons.api.grid;

    if (tmpGridAmortization == null) {
      tmpGridAmortization = entities.AmortizationEntity;
    }

    switch (entities.AmortizationFormEntity.typeAmortization) {
      case 'ALEMANA':
        grid.hideToolBarButton('QV_ECPR_JAA30', 'CEQV_201QV_ECPR_JAA30_396');
        grid.hideColumn('QV_ECPR_JAA30', 'cmdEdition');

        viewState.show('VA_FEEOFWVFIUKFNPP_635198'); // cuota
        viewState.show('VA_TERMTYPEOWIDGEH_595198'); // tipo plazo
        viewState.show('VA_TERMMUMJBESVPSA_498198'); // plazo
        viewState.show('VA_TERMGRACECAPTAT_881198'); // periodo gracia capital 
        viewState.show('VA_TERMGRACEINTTET_849198'); // periodo gracia capital
        viewState.show('VA_TYPEFEEARBRJCKA_414198'); // tipo cuota
        viewState.show('VA_TERMINTERESTGWH_345198'); // periodo interes
        viewState.show('VA_TERMCAPITALLSSH_857198'); // periodo capital
        viewState.show('VA_FIXEDPAYEMENYTY_637198'); // fecha de pago fija
        viewState.show('VA_PAYMENTDAYEFRJN_549198'); // dia pago
        viewState.show('VA_TYPEGRACEBHAAVJ_350198'); // tipo de gracia
        viewState.show('VA_AVOIDHOLIDAYSSS_789198'); // generar evitando feriados
        viewState.show('VA_DAYSGRACEDEFUUU_853198'); // dias gracia mora
        viewState.show('VA_MONTHGRACEFIJFA_429198'); // mes de gracia
        viewState.show('VA_BASEINTERESTAAC_534198'); // base de calculo de intereses

        viewState.show('VA_INTERESTBRXDBGI_239198'); // tasa total
        viewState.show('VA_BALLONFEEWWRPRY_949198'); // cuota balloon

        viewState.enable('VA_VAVABUTTONRDGI5_636198'); // btn calcular
        viewState.hide('VA_VAVABUTTONNXJJ__482198'); // btn adicional
        viewState.hide('VA_VAVABUTTONZDFPF_173198'); // btn gracia
        viewState.disable('VA_VAVABUTTONOH3FZ_246198'); // btn recalcular
        viewState.disable('VA_VAVABUTTONNPM_2_987198'); // btn guardar

        /*if(entities.AmortizationFormEntity.threeYear && entities.AmortizationFormEntity.threeYear.trim() == 'S'){
            viewState.show('G_OPERATIANT_136198');
        }else{
            viewState.hide('G_OPERATIANT_136198');
        }    */
        //viewState.show('VA_EXTENDEDPAYMEDA_710198');
        viewState.hide('VA_EXTENDEDPAYMEDA_710198');
        viewState.hide('G_OPERATIUYT_632198');
        break;
      case 'AGREGADA':
        grid.hideToolBarButton('QV_ECPR_JAA30', 'CEQV_201QV_ECPR_JAA30_396');
        grid.hideColumn('QV_ECPR_JAA30', 'cmdEdition');

        viewState.show('VA_FEEOFWVFIUKFNPP_635198'); // cuota
        viewState.show('VA_TERMTYPEOWIDGEH_595198'); // tipo plazo
        viewState.show('VA_TERMMUMJBESVPSA_498198'); // plazo
        viewState.show('VA_TERMGRACECAPTAT_881198'); // periodo gracia capital 
        viewState.show('VA_TERMGRACEINTTET_849198'); // periodo gracia capital
        viewState.show('VA_TYPEFEEARBRJCKA_414198'); // tipo cuota
        viewState.show('VA_TERMINTERESTGWH_345198'); // periodo interes
        viewState.show('VA_TERMCAPITALLSSH_857198'); // periodo capital
        viewState.show('VA_FIXEDPAYEMENYTY_637198'); // fecha de pago fija
        viewState.show('VA_PAYMENTDAYEFRJN_549198'); // dia pago
        viewState.show('VA_TYPEGRACEBHAAVJ_350198'); // tipo de gracia
        viewState.show('VA_AVOIDHOLIDAYSSS_789198'); // generar evitando feriados
        viewState.show('VA_DAYSGRACEDEFUUU_853198'); // dias gracia mora
        viewState.show('VA_MONTHGRACEFIJFA_429198'); // mes de gracia
        viewState.show('VA_BASEINTERESTAAC_534198'); // base de calculo de intereses
        viewState.show('VA_INTERESTBRXDBGI_239198'); // tasa total
        viewState.show('VA_BALLONFEEWWRPRY_949198'); // cuota balloon

        viewState.enable('VA_VAVABUTTONRDGI5_636198'); // btn calcular
        viewState.hide('VA_VAVABUTTONNXJJ__482198'); // btn adicional
        viewState.hide('VA_VAVABUTTONZDFPF_173198'); // btn gracia
        viewState.disable('VA_VAVABUTTONOH3FZ_246198'); // btn recalcular
        viewState.disable('VA_VAVABUTTONNPM_2_987198'); // btn guardar
        grid.addAllRows('AmortizationEntity', tmpGridAmortization, true);
        /*if(entities.AmortizationFormEntity.threeYear && entities.AmortizationFormEntity.threeYear.trim() == 'S'){
            viewState.show('G_OPERATIANT_136198');
        }else{
            viewState.hide('G_OPERATIANT_136198');
        }*/
        //viewState.show('VA_EXTENDEDPAYMEDA_710198');
        viewState.hide('VA_EXTENDEDPAYMEDA_710198');
        viewState.hide('G_OPERATIUYT_632198');

        break;
      case 'FRANCESA':
        grid.hideToolBarButton('QV_ECPR_JAA30', 'CEQV_201QV_ECPR_JAA30_396');
        grid.hideColumn('QV_ECPR_JAA30', 'cmdEdition');

        viewState.show('VA_FEEOFWVFIUKFNPP_635198'); // cuota
        viewState.show('VA_TERMTYPEOWIDGEH_595198'); // tipo plazo
        viewState.show('VA_TERMMUMJBESVPSA_498198'); // plazo
        viewState.show('VA_TERMGRACECAPTAT_881198'); // periodo gracia capital 
        viewState.show('VA_TERMGRACEINTTET_849198'); // periodo gracia capital
        viewState.show('VA_TYPEFEEARBRJCKA_414198'); // tipo cuota
        viewState.show('VA_TERMINTERESTGWH_345198'); // periodo interes
        viewState.show('VA_TERMCAPITALLSSH_857198'); // periodo capital
        viewState.show('VA_FIXEDPAYEMENYTY_637198'); // fecha de pago fija
        viewState.show('VA_PAYMENTDAYEFRJN_549198'); // dia pago
        viewState.show('VA_TYPEGRACEBHAAVJ_350198'); // tipo de gracia
        viewState.show('VA_AVOIDHOLIDAYSSS_789198'); // generar evitando feriados
        viewState.show('VA_DAYSGRACEDEFUUU_853198'); // dias gracia mora
        viewState.show('VA_MONTHGRACEFIJFA_429198'); // mes de gracia
        viewState.show('VA_BASEINTERESTAAC_534198'); // base de calculo de intereses
        viewState.show('VA_INTERESTBRXDBGI_239198'); // tasa total
        viewState.show('VA_BALLONFEEWWRPRY_949198'); // cuota balloon

        viewState.enable('VA_VAVABUTTONRDGI5_636198'); // btn calcular
        viewState.hide('VA_VAVABUTTONNXJJ__482198'); // btn adicional
        viewState.hide('VA_VAVABUTTONZDFPF_173198'); // btn gracia
        viewState.disable('VA_VAVABUTTONOH3FZ_246198'); // btn recalcular
        viewState.disable('VA_VAVABUTTONNPM_2_987198'); // btn guardar
        grid.addAllRows('AmortizationEntity', tmpGridAmortization, true);
        /*if(entities.AmortizationFormEntity.threeYear && entities.AmortizationFormEntity.threeYear.trim() == 'S'){
            viewState.show('G_OPERATIANT_136198');
        }else{
            viewState.hide('G_OPERATIANT_136198');
        }*/
        //viewState.show('VA_EXTENDEDPAYMEDA_710198');
        viewState.hide('VA_EXTENDEDPAYMEDA_710198');
        viewState.hide('G_OPERATIUYT_632198');
        break;
      case 'MANUAL':
        grid.showToolBarButton('QV_ECPR_JAA30', 'CEQV_201QV_ECPR_JAA30_396');
        grid.showColumn('QV_ECPR_JAA30', 'cmdEdition');

        viewState.hide('VA_FEEOFWVFIUKFNPP_635198'); // cuota
        viewState.hide('VA_TERMTYPEOWIDGEH_595198'); // tipo plazo
        viewState.hide('VA_TERMMUMJBESVPSA_498198'); // plazo
        viewState.hide('VA_TERMGRACECAPTAT_881198'); // periodo gracia capital 
        viewState.hide('VA_TERMGRACEINTTET_849198'); // periodo gracia capital
        viewState.hide('VA_TYPEFEEARBRJCKA_414198'); // tipo cuota
        viewState.hide('VA_TERMINTERESTGWH_345198'); // periodo interes
        viewState.hide('VA_TERMCAPITALLSSH_857198'); // periodo capital
        viewState.hide('VA_FIXEDPAYEMENYTY_637198'); // fecha de pago fija
        viewState.hide('VA_PAYMENTDAYEFRJN_549198'); // dia pago
        viewState.hide('VA_TYPEGRACEBHAAVJ_350198'); // tipo de gracia
        viewState.hide('VA_AVOIDHOLIDAYSSS_789198'); // generar evitando feriados

        viewState.hide('VA_DAYSGRACEDEFUUU_853198'); // dias gracia mora
        viewState.hide('VA_MONTHGRACEFIJFA_429198'); // mes de gracia
        viewState.hide('VA_BASEINTERESTAAC_534198'); // base de calculo de intereses

        viewState.show('VA_INTERESTBRXDBGI_239198'); // tasa total // en CPN no se muestra este campo
        viewState.hide('VA_BALLONFEEWWRPRY_949198'); // cuota balloon

        viewState.enable('VA_VAVABUTTONRDGI5_636198'); // btn calcular
        viewState.hide('VA_VAVABUTTONNXJJ__482198'); // btn adicional
        viewState.hide('VA_VAVABUTTONZDFPF_173198'); // btn gracia
        viewState.disable('VA_VAVABUTTONOH3FZ_246198'); // btn recalcular
        viewState.enable('VA_VAVABUTTONNPM_2_987198'); // btn guardar

        grid.addAllRows('AmortizationEntity', tmpGridAmortization, true);
        // viewState.hide('G_OPERATIANT_136198');
        viewState.show('G_OPERATIUYT_632198');
        viewState.hide('VA_EXTENDEDPAYMEDA_710198');
        changedEventArgs.commons.api.grid.hideGridRowCommand('QV_ECPR_JAA30', entities.AmortizationEntity.data()[entities.AmortizationEntity.length - 1], 'edit');
        changedEventArgs.commons.api.grid.hideGridRowCommand('QV_ECPR_JAA30', entities.AmortizationEntity.data()[entities.AmortizationEntity.length - 1], 'delete');

        break;
    }
  };

  //Entity: AmortizationFormEntity
  //AmortizationFormEntity.typeGrace (RadioButtonList) View: OperationPaymentDayUpdateForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_TYPEGRACEBHAAVJ_350198 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    let viewState: any = changedEventArgs.commons.api.viewState;

    if (changedEventArgs.newValue == 'S') {
      viewState.show('VA_9468GILHMJRMZIF_745198');
    } else {
      viewState.hide('VA_9468GILHMJRMZIF_745198');
      entities.AmortizationFormEntity.graceDividend = 0;
    }
  };

  //Evento changeGroup : Si desea cerrar una pestaña realizar: args.deferred.resolve(); para cancelar :args.deferred.reject().
  //ViewContainer: OperationPaymentDayUpdateForm
  task_changeGroup_VC_OPERATIOPA_648633 = (entities: Model, changeGroupEventArgs: any) => {
    changeGroupEventArgs.commons.execServer = false;

  };

  //Entity: AmortizationFormEntity
  //AmortizationFormEntity.fee (TextInputBox) View: OperationPaymentDayUpdateForm

  task_customValidate_VA_FEEOFWVFIUKFNPP_635198 = (
    entities: Model,
    customValidateEventArgs: CobisModelCustomValidateEventArgs
  ) => {
    if (entities.AmortizationFormEntity.amount! < entities.AmortizationFormEntity.fee!) {
      entities.AmortizationFormEntity.fee = 0;
      customValidateEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_CUOTANOCP_46972", false, null, this.LNSPR.timer);
    }
    customValidateEventArgs.commons.execServer = false;
  };

  // (Button) Guardar
  task_executeCommand_VA_VAVABUTTONNPM_2_987198 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {

    if (entities.AmortizationEntity.data()[entities.AmortizationEntity.length - 1].balanceCapital == 0) {
      //T_INTBNVUTFJHZS_657// transicion de Pasivas
      executeCommandEventArgs.commons.api.viewState.disable('CM_TLNSPRYT_R8O');
    } else {
      executeCommandEventArgs.commons.api.viewState.enable('CM_TLNSPRYT_R8O');
    }

    executeCommandEventArgs.commons.serverParameters.AmortizationEntity = true;
    executeCommandEventArgs.commons.serverParameters.AmortizationFormEntity = true;
    executeCommandEventArgs.commons.serverParameters.AmortizationTitleEntity = true;
    executeCommandEventArgs.commons.serverParameters.AmortizationManualRequest = true;
    executeCommandEventArgs.commons.serverParameters.OperationEntity = true;
    executeCommandEventArgs.commons.serverParameters.CreateOperationOne = true;

    //executeCommandEventArgs.commons.serverParameters.GenericEntity=true;
    //executeCommandEventArgs.commons.serverParameters.ItemEntity=true;

    executeCommandEventArgs.commons.execServer = true;

  };

  //Start signature to Callback event to VA_VAVABUTTONNPM_2_987198 - guardar
  task_executeCommandCallback_VA_VAVABUTTONNPM_2_987198 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    if (executeCommandCallbackEventArgs.success) {
      if (entities.AmortizationEntity.data()[entities.AmortizationEntity.length - 1].balanceCapital != 0) {
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_ELSALDORE_75001", false, null, this.LNSPR.timer);
      } else {
        executeCommandCallbackEventArgs.commons.api.viewState.enable('CM_TLNSPRYT_R8O');
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_OPERACICA_42329", false, null, this.LNSPR.timer);
      }
    }

  };

  // (Button) - Adicional
  task_executeCommand_VA_VAVABUTTONNXJJ__482198 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;
    let navigation: any = executeCommandEventArgs.commons.api.navigation;
    navigation.address = {
      moduleId: "LOANS",
      subModuleId: "TRNSC",
      taskId: "T_LOANSZXSLOKQN_747",
      taskVersion: "1.0.0",
      viewContainerId: "VC_ADDITIONES_341747",
      useMinification: false
    };
    navigation.label = this.cobis.translate('LNSPR.LBL_LNSPR_CUOTASALL_23751');
    navigation.modalProperties = {
      size: 'md'
    };
    navigation.queryParameters = {
      mode: 2
    };
    navigation.customDialogParameters = {
      operation: entities.OperationEntity.operation
    };
    navigation.openModalWindow(executeCommandEventArgs.commons.controlId, null);
  };

  // (Button) - Recalcular
  task_executeCommand_VA_VAVABUTTONOH3FZ_246198 = async (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;
    if (stateCalculate == 'V') {
      let resp: any = await firstValueFrom(
        executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("LNSPR.MSG_LNSPR_ESTSEGUEA_62246")
      );

      switch (resp.buttonIndex) {
        case 0:
          stateCalculate = 'C';
          // TODO - REFACTORIZAR
          // $('#VA_VAVABUTTONOH3FZ_246198').click();
          return false;
        case 1:
          stateCalculate = 'A';
          // TODO - REFACTORIZAR
          // $('#VA_VAVABUTTONOH3FZ_246198').click();
          return true;
      }
    } else if (stateCalculate == 'C') {
      stateCalculate = 'V';
    } else if (stateCalculate == 'A') {
      stateCalculate = 'V';
      let succes: any = true;
      // TODO - REFACTORIZAR
      // if ($('.k-grid-cancel').length) {
      //     succes = false;
      //     executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_TIENECADI_92589", false, null, this.LNSPR.timer);
      // }
      if (succes && entities.AmortizationEntity.length == 1) {
        succes = false;
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_DEBEEXIDS_88978", false, null, this.LNSPR.timer);
      }
      let numDaysYear: any = 360;
      let startDate: any = entities.OperationEntity.creationDate;
      let interest: any = 0;
      let amount: any = entities.AmortizationFormEntity.amount;
      let capital: any = 0;

      if (entities.AmortizationEntity.length == 2) {
        numDaysYear = 365;
      }
      if (succes && !changeAmortization) {
        succes = false;
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_NOHAYCAMC_91338", false, null, this.LNSPR.timer);
      }

      if (succes && changeAmortization) {
        changeAmortization = false;
        let infoItems: any = [];
        let totales: any = [];
        totales['balanceCapital'] = 0;
        totales['dynamicField1'] = 0;

        for (let a: any = 0; a < entities.AmortizationEntity.length - 1; a++) {
          totales['dynamicField1'] += parseFloat(entities.AmortizationEntity[a]['dynamicField1']);

          let discount: any = 0;

          discount += parseFloat(entities.AmortizationEntity[a]['dynamicField1']);
          if (a == 0) {
            entities.AmortizationEntity[a].balanceCapital = amount;
          }

          entities.AmortizationEntity._data[a + 1].balanceCapital = entities.AmortizationEntity[a].balanceCapital - discount;
          amount = amount - discount;
        }

        if ((entities.AmortizationEntity._data[entities.AmortizationEntity.length - 1].balanceCapital).toFixed(2) == 0.00) {
          entities.AmortizationEntity._data[entities.AmortizationEntity.length - 1].balanceCapital = 0.00;
        }
        // TODO - REFACTORIZAR - MUY PENDIENTE - CREAR FUNCION
        // executeCommandEventArgs.commons.api.vc.executeCommand("VA_VAVABUTTONNPM_2_987198", "VA_VAVABUTTONOH3FZ_246198", validator, false, false, '', false);
      }
    }
  }

  // (Button) - Imprimir reembolso
  task_executeCommand_VA_VAVABUTTONPJ080_778198 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;
    let name: any = null;
    for (let i: any = 0; i < entities.DebtorEntity.length; i++) {
      if (entities.DebtorEntity[i].role.trim() == 'D') {
        name = entities.DebtorEntity[i].fullName;
        break;
      }
    }
    let index: any = 0;
    let parameters: any = [];
    parameters[index] = [];
    parameters[index][0] = 'operation';
    parameters[index][1] = entities.OperationEntity.operation;
    index++;
    parameters[index] = [];
    parameters[index][0] = 'name';
    parameters[index][1] = name;
    index++;

    let argsTitle: any = {
      reportTitle: 'Simulaci\u00f3n'
    };

    this.LNSPR.Utils.generarReporteModal('settlementTmp', parameters, argsTitle)
  };

  // (Button) - Calcular
  task_executeCommand_VA_VAVABUTTONRDGI5_636198 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    // TODO - REFACTORIZAR
    // $('.k-link.k-pager-nav.k-pager-first').click();

    if (entities.AmortizationFormEntity.ballonFee == 'S' && entities.AmortizationFormEntity.fee! <= 0) {
      executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_CUOTANO0S_13536", false, null, this.LNSPR.timer);
      flagUpdateTerm = false;
      executeCommandEventArgs.commons.execServer = false;

    } else if (entities.AmortizationFormEntity.term! < 0) {
      executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_LAPERIOON_28622", false, null, this.LNSPR.timer);
      executeCommandEventArgs.commons.execServer = false;

    } else {
      entities.OperationEntity.creationDate = entities.AmortizationFormEntity.valueDate;

      executeCommandEventArgs.commons.serverParameters.Loan = true;
      executeCommandEventArgs.commons.serverParameters.GenericEntity = true;
      executeCommandEventArgs.commons.serverParameters.OperationEntity = true;
      executeCommandEventArgs.commons.serverParameters.GeneralParametersQuery = true;
      executeCommandEventArgs.commons.serverParameters.AmortizationTitleEntity = true;
      executeCommandEventArgs.commons.serverParameters.AmortizationEntity = true;
      executeCommandEventArgs.commons.serverParameters.AmortizationFormEntity = true;

      executeCommandEventArgs.commons.execServer = true;
    }



  };

  //Start signature to Callback event to VA_VAVABUTTONRDGI5_636198
  task_executeCommandCallback_VA_VAVABUTTONRDGI5_636198 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    tmpGridAmortization = null;
    let grid: any = executeCommandCallbackEventArgs.commons.api.grid;
    executeCommandCallbackEventArgs.commons.api.viewState.enable('CM_TLNSPRYT_R8O');
    if (executeCommandCallbackEventArgs.success) {

      executeCommandCallbackEventArgs.commons.api.viewState.enable('CM_TLNSPRVJ_776');
      this.suprColAmortization(entities, executeCommandCallbackEventArgs, 'QV_ECPR_JAA30');
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_OPERACICA_42329", false, null, this.LNSPR.timer);
    }
  };

  // (Button) - Imprimir
  task_executeCommand_VA_VAVABUTTONVJFY0_286198 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    let name: any = null;
    for (let i: any = 0; i < entities.DebtorEntity.length; i++) {
      if (entities.DebtorEntity[i].role.trim() == 'D') {
        name = entities.DebtorEntity[i].fullName;
        break;
      }
    }
    executeCommandEventArgs.commons.execServer = false;

    let reportTitle: any = "SIMULACION";
    let itemReporte: any = "";
    let reportName: any = "SimulationAmortization";

    let args: any = [
      ['report.module', 'cartera'],
      ['report.name', reportName],
      ['bank', entities.AmortizationFormEntity.numOperation],
      ['tipoOperacion', entities.AmortizationFormEntity.operationType],
      ['monto', entities.AmortizationFormEntity.amount],
      ['cliente', name],
      ['moneda', executeCommandEventArgs.commons.api.viewState.getDataItem("VA_MONEYWCCBPJYWVL_470221").value],
      // TODO
      // ['fechaInicio',  kendo.toString(kendo.parseDate(entities.OperationEntity.creationDate), JSON.parse(sessionStorage.dateFormat))], 
      ['fechaInicio', entities.OperationEntity.creationDate],
      ['tasa', entities.AmortizationFormEntity.interest]
    ];

    this.LNSPR.Utils.generarReporteModal(itemReporte, args, reportTitle)
  };

  // (Button) - Gracias
  task_executeCommand_VA_VAVABUTTONZDFPF_173198 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;

    let selectedRow: any = executeCommandEventArgs.commons.api.grid.getSelectedRows('QV_ECPR_JAA30');
    let navigation: any = executeCommandEventArgs.commons.api.navigation;
    let dividend: any = 1;

    navigation.address = {
      moduleId: "LOANS",
      subModuleId: "TRNSC",
      taskId: "T_LOANSZQQDQSAY_947",
      taskVersion: "1.0.0",
      viewContainerId: "VC_GRACEUOHZY_605947",
      useMinification: false
    };
    navigation.label = this.cobis.translate('LNSPR.LBL_LNSPR_DASDEGROA_98393');
    navigation.modalProperties = {
      size: 'md'
    };
    if (selectedRow.length > 0) {
      dividend = selectedRow[0].dividend;
    }
    //navigation.queryParameters = {
    //    mode: 0
    //};    
    navigation.customDialogParameters = {
      dividend: dividend,
      operation: entities.OperationEntity.operation
    };
    navigation.openModalWindow(executeCommandEventArgs.commons.controlId, null);
  };


  //AmortizationEntityQuery Entity: 
  task_executeQuery_Q_AMORTITI_LNSPR = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.execServer = false;
    //executeQueryEventArgs.commons.serverParameters. = true;
  };


  //gridCommand (Button) QueryView: QV_ECPR_JAA30
  //Evento GridCommand: Sirve para personalizar la acción que realizan los botones de Grilla.
  task_gridCommand_CEQV_201QV_ECPR_JAA30_396 = (
    entities: Model,
    gridExecuteCommandEventArgs: CobisModelGridCommandExecuteEventArgs
  ) => {
    gridExecuteCommandEventArgs.commons.execServer = false;
    updateFila = true;
    let filasSeleccionadas: any = gridExecuteCommandEventArgs.commons.api.grid.getSelectedRows('QV_ECPR_JAA30');
    if (filasSeleccionadas.length == 0) {
      // Si no hay ninguna seleccionada se selecciona la primera
      // TODO - REFACTORIZAR
      let grid: any /* = $("#QV_ECPR_JAA30").data("kendoGrid");*/

      let row: any = grid.tbody.find(">tr:not(.k-grouping-row)").eq(0);
      grid.select(row);
    }
    // TODO - REFACTORIZAR
    let grid: any /*= $("#QV_ECPR_JAA30").data("kendoGrid");*/
    let sel: any = grid.select();
    let item: any = grid.dataItem(sel);
    let dataSource: any = grid.dataSource;
    let idx: any = dataSource.indexOf(item);
    let newItem: any = dataSource.insert(idx, {});
    newItem.dividend = item.dividend;
    newItem.balanceCapital = item.balanceCapital;
    if (item.dividend && item.dividend > 1) {
      let strDate: any = (dataSource.data()[dataSource.indexOf(item) - 2]).expirationDate;
      let dateDef: any = strDate;
      newItem.expirationDate = dateDef;
    } else {
      if (!item.dividend) {
        newItem.dividend = dataSource.data().length + 1;
        newItem.balanceCapital = item.balanceCapital;
        let strDate: any = (dataSource.data()[dataSource.indexOf(item) - 2]).expirationDate;
        let date: any = strDate;
        newItem.expirationDate = date;
      } else {
        newItem.expirationDate = entities.AmortizationFormEntity.valueDate;
      }
    }
    let newRow: any = grid.items().filter("[data-uid='" + newItem.uid + "']");
    grid.editRow(newRow);

    for (let i: any = item.dividend; i < dataSource.data().length - 1; i++) {
      (dataSource.data()[i]).dividend = (dataSource.data()[i]).dividend + 1;
    }
  };

  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: OperationPaymentDayUpdateForm
  task_initData_VC_OPERATIOPA_648633 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    let viewState: any = initDataEventArgs.commons.api.viewState;

    if (initDataEventArgs.commons.api.parentVc?.id == 'VC_LOANPARTIR_265871' ||
      initDataEventArgs.commons.api.parentVc?.id == 'VC_RESTRUCTEG_166525') {
      entities.OperationEntity.operation = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().operation
      entities.OperationEntity.amount = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().amount;
      //viewState.hide('G_OPERATIAPT_630198');//Amortización - Group 3
      viewState.hide('VA_VAVABUTTONZDFPF_173198'); //btn gracia
      viewState.hide('VA_VAVABUTTONNXJJ__482198'); //btn adicional
      if (initDataEventArgs.commons.api.parentVc?.id == 'VC_LOANPARTIR_265871') {
        viewState.hide('G_OPERATIMTO_363198'); //Ocultar Botones
      }
      initDataEventArgs.commons.execServer = true;
    } else {
      initDataEventArgs.commons.execServer = false;
    }
    //initDataEventArgs.commons.serverParameters.entityName = true;
    viewState.hide('VA_EXTENDEDPAYMEDA_710198');
  };


  //Start signature to Callback event to VC_OPERATIOPA_648633
  task_initDataCallback_VC_OPERATIOPA_648633 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
  ) => {
    if (initDataCallbackEventArgs.success) {
      let grid: any = initDataCallbackEventArgs.commons.api.grid;
      let viewState: any = initDataCallbackEventArgs.commons.api.viewState;

      entities.AmortizationFormEntity.numOperation = entities.OperationEntity.operation;
      entities.AmortizationFormEntity.operationType = initDataCallbackEventArgs.commons.api.navigation.getCustomDialogParameters().typeOperation;

      if (initDataCallbackEventArgs.commons.api.parentVc?.id == 'VC_LOANPARTIR_265871') {

        entities.AmortizationFormEntity.valueDate = fechaCreacion;
      }

      entities.OperationEntity.creationDate = entities.AmortizationFormEntity.valueDate;
      entities.AmortizationFormEntity.typeAmortization = entities.AmortizationFormEntity.typeAmortization ? entities.AmortizationFormEntity.typeAmortization?.trim() : "";
      entities.AmortizationFormEntity.typeFee = entities.AmortizationFormEntity.typeFee ? entities.AmortizationFormEntity.typeFee?.trim() : "";
      viewState.hide('VA_EXTENDEDPAYMEDA_710198');

      if (entities.AmortizationFormEntity.typeAmortization != null) {
        switch (entities.AmortizationFormEntity.typeAmortization?.trim()) {
          case 'ALEMANA':
            grid.hideToolBarButton('QV_ECPR_JAA30', 'CEQV_201QV_ECPR_JAA30_396');
            grid.hideColumn('QV_ECPR_JAA30', 'cmdEdition');

            viewState.show('VA_FEEOFWVFIUKFNPP_635198'); // cuota
            viewState.show('VA_TERMTYPEOWIDGEH_595198'); // tipo plazo
            viewState.show('VA_TERMMUMJBESVPSA_498198'); // plazo
            viewState.show('VA_TERMGRACECAPTAT_881198'); // periodo gracia capital
            viewState.show('VA_TERMGRACEINTTET_849198'); // periodo gracia capital
            viewState.show('VA_TYPEFEEARBRJCKA_414198'); // tipo cuota
            viewState.show('VA_TERMINTERESTGWH_345198'); // periodo interes
            viewState.show('VA_TERMCAPITALLSSH_857198'); // periodo capital
            viewState.show('VA_FIXEDPAYEMENYTY_637198'); // fecha de pago fija
            viewState.show('VA_PAYMENTDAYEFRJN_549198'); // dia pago
            viewState.show('VA_TYPEGRACEBHAAVJ_350198'); // tipo de gracia
            viewState.show('VA_AVOIDHOLIDAYSSS_789198'); // generar evitando feriados
            //viewState.show('VA_GENERATEINSUENC_694198'); // generar seguros
            viewState.show('VA_DAYSGRACEDEFUUU_853198'); // dias gracia mora
            viewState.show('VA_MONTHGRACEFIJFA_429198'); // mes de gracia
            viewState.show('VA_BASEINTERESTAAC_534198'); // base de calculo de intereses
            //viewState.show('VA_INITIALINTERTSE_643198'); // cuota inicial int
            //viewState.show('VA_REDISCOUNTDAEET_581198'); // fecha redescuento
            //viewState.show('VA_SOLIDARITYTOGWR_286198'); // ley de solidaridad
            viewState.show('VA_INTERESTBRXDBGI_239198'); // tasa total
            viewState.show('VA_BALLONFEEWWRPRY_949198'); // cuota balloon
            viewState.enable('VA_VAVABUTTONRDGI5_636198'); // btn calcular
            viewState.hide('VA_VAVABUTTONNXJJ__482198'); // btn adicional
            viewState.hide('VA_VAVABUTTONZDFPF_173198'); // btn gracia
            viewState.disable('VA_VAVABUTTONOH3FZ_246198'); // btn recalcular
            viewState.disable('VA_VAVABUTTONNPM_2_987198'); // btn guardar

            /* if(entities.AmortizationFormEntity.threeYear && entities.AmortizationFormEntity.threeYear.trim() == 'S'){
                 viewState.show('G_OPERATIANT_136198');
             }else{
                 viewState.hide('G_OPERATIANT_136198');
             }   */
            //viewState.show('VA_EXTENDEDPAYMEDA_710198');
            viewState.hide('G_OPERATIUYT_632198');

            break;
          case 'FRANCESA':
            grid.hideToolBarButton('QV_ECPR_JAA30', 'CEQV_201QV_ECPR_JAA30_396');
            grid.hideColumn('QV_ECPR_JAA30', 'cmdEdition');

            viewState.show('VA_FEEOFWVFIUKFNPP_635198'); // cuota
            viewState.show('VA_TERMTYPEOWIDGEH_595198'); // tipo plazo
            viewState.show('VA_TERMMUMJBESVPSA_498198'); // plazo
            viewState.show('VA_TERMGRACECAPTAT_881198'); // periodo gracia capital
            viewState.show('VA_TERMGRACEINTTET_849198'); // periodo gracia capital
            viewState.show('VA_TYPEFEEARBRJCKA_414198'); // tipo cuota
            viewState.show('VA_TERMINTERESTGWH_345198'); // periodo interes
            viewState.show('VA_TERMCAPITALLSSH_857198'); // periodo capital
            viewState.show('VA_FIXEDPAYEMENYTY_637198'); // fecha de pago fija
            viewState.show('VA_PAYMENTDAYEFRJN_549198'); // dia pago
            viewState.show('VA_TYPEGRACEBHAAVJ_350198'); // tipo de gracia
            viewState.show('VA_AVOIDHOLIDAYSSS_789198'); // generar evitando feriados
            //viewState.show('VA_GENERATEINSUENC_694198'); // generar seguros
            viewState.show('VA_DAYSGRACEDEFUUU_853198'); // dias gracia mora
            viewState.show('VA_MONTHGRACEFIJFA_429198'); // mes de gracia
            viewState.show('VA_BASEINTERESTAAC_534198'); // base de calculo de intereses
            //viewState.show('VA_INITIALINTERTSE_643198'); // cuota inicial int
            //viewState.show('VA_REDISCOUNTDAEET_581198'); // fecha redescuento
            //viewState.show('VA_SOLIDARITYTOGWR_286198'); // ley de solidaridad
            viewState.show('VA_INTERESTBRXDBGI_239198'); // tasa total
            viewState.show('VA_BALLONFEEWWRPRY_949198'); // cuota balloon
            viewState.enable('VA_VAVABUTTONRDGI5_636198'); // btn calcular
            viewState.hide('VA_VAVABUTTONNXJJ__482198'); // btn adicional
            viewState.hide('VA_VAVABUTTONZDFPF_173198'); // btn gracia
            viewState.disable('VA_VAVABUTTONOH3FZ_246198'); // btn recalcular
            viewState.disable('VA_VAVABUTTONNPM_2_987198'); // btn guardar
            grid.addAllRows('AmortizationEntity', tmpGridAmortization, true);
            /*  if(entities.AmortizationFormEntity.threeYear && entities.AmortizationFormEntity.threeYear.trim() == 'S'){
                  viewState.show('G_OPERATIANT_136198');
              }else{
                  viewState.hide('G_OPERATIANT_136198');
              }*/
            //viewState.show('VA_EXTENDEDPAYMEDA_710198');
            viewState.hide('G_OPERATIUYT_632198');
            break;
          case 'AGREGADA':
            grid.hideToolBarButton('QV_ECPR_JAA30', 'CEQV_201QV_ECPR_JAA30_396');
            grid.hideColumn('QV_ECPR_JAA30', 'cmdEdition');

            viewState.show('VA_FEEOFWVFIUKFNPP_635198'); // cuota
            viewState.show('VA_TERMTYPEOWIDGEH_595198'); // tipo plazo
            viewState.show('VA_TERMMUMJBESVPSA_498198'); // plazo
            viewState.show('VA_TERMGRACECAPTAT_881198'); // periodo gracia capital
            viewState.show('VA_TERMGRACEINTTET_849198'); // periodo gracia capital
            viewState.show('VA_TYPEFEEARBRJCKA_414198'); // tipo cuota
            viewState.show('VA_TERMINTERESTGWH_345198'); // periodo interes
            viewState.show('VA_TERMCAPITALLSSH_857198'); // periodo capital
            viewState.show('VA_FIXEDPAYEMENYTY_637198'); // fecha de pago fija
            viewState.show('VA_PAYMENTDAYEFRJN_549198'); // dia pago
            viewState.show('VA_TYPEGRACEBHAAVJ_350198'); // tipo de gracia
            viewState.show('VA_AVOIDHOLIDAYSSS_789198'); // generar evitando feriados
            //viewState.show('VA_GENERATEINSUENC_694198'); // generar seguros
            viewState.show('VA_DAYSGRACEDEFUUU_853198'); // dias gracia mora
            viewState.show('VA_MONTHGRACEFIJFA_429198'); // mes de gracia
            viewState.show('VA_BASEINTERESTAAC_534198'); // base de calculo de intereses
            //viewState.show('VA_INITIALINTERTSE_643198'); // cuota inicial int
            //viewState.show('VA_REDISCOUNTDAEET_581198'); // fecha redescuento
            //viewState.show('VA_SOLIDARITYTOGWR_286198'); // ley de solidaridad
            viewState.show('VA_INTERESTBRXDBGI_239198'); // tasa total
            viewState.show('VA_BALLONFEEWWRPRY_949198'); // cuota balloon
            viewState.enable('VA_VAVABUTTONRDGI5_636198'); // btn calcular
            viewState.hide('VA_VAVABUTTONNXJJ__482198'); // btn adicional
            viewState.hide('VA_VAVABUTTONZDFPF_173198'); // btn gracia
            viewState.disable('VA_VAVABUTTONOH3FZ_246198'); // btn recalcular
            viewState.disable('VA_VAVABUTTONNPM_2_987198'); // btn guardar
            grid.addAllRows('AmortizationEntity', tmpGridAmortization, true);
            /*  if(entities.AmortizationFormEntity.threeYear && entities.AmortizationFormEntity.threeYear.trim() == 'S'){
                  viewState.show('G_OPERATIANT_136198');
              }else{
                  viewState.hide('G_OPERATIANT_136198');
              }*/
            //viewState.show('VA_EXTENDEDPAYMEDA_710198');
            viewState.hide('G_OPERATIUYT_632198');
            break;
          case 'MANUAL':
            grid.showToolBarButton('QV_ECPR_JAA30', 'CEQV_201QV_ECPR_JAA30_396');
            grid.showColumn('QV_ECPR_JAA30', 'cmdEdition');

            viewState.hide('VA_FEEOFWVFIUKFNPP_635198'); // cuota
            viewState.hide('VA_TERMTYPEOWIDGEH_595198'); // tipo plazo
            viewState.hide('VA_TERMMUMJBESVPSA_498198'); // plazo
            viewState.hide('VA_TERMGRACECAPTAT_881198'); // periodo gracia capital
            viewState.hide('VA_TERMGRACEINTTET_849198'); // periodo gracia capital
            viewState.hide('VA_TYPEFEEARBRJCKA_414198'); // tipo cuota
            viewState.hide('VA_TERMINTERESTGWH_345198'); // periodo interes
            viewState.hide('VA_TERMCAPITALLSSH_857198'); // periodo capital
            viewState.hide('VA_FIXEDPAYEMENYTY_637198'); // fecha de pago fija
            viewState.hide('VA_PAYMENTDAYEFRJN_549198'); // dia pago
            viewState.hide('VA_TYPEGRACEBHAAVJ_350198'); // tipo de gracia
            viewState.hide('VA_AVOIDHOLIDAYSSS_789198'); // generar evitando feriados
            //viewState.hide('VA_GENERATEINSUENC_694198'); // generar seguros
            viewState.hide('VA_DAYSGRACEDEFUUU_853198'); // dias gracia mora
            viewState.hide('VA_MONTHGRACEFIJFA_429198'); // mes de gracia
            viewState.hide('VA_BASEINTERESTAAC_534198'); // base de calculo de intereses
            //viewState.hide('VA_INITIALINTERTSE_643198'); // cuota inicial int
            //viewState.hide('VA_REDISCOUNTDAEET_581198'); // fecha redescuento
            //viewState.hide('VA_SOLIDARITYTOGWR_286198'); // ley de solidaridad
            viewState.show('VA_INTERESTBRXDBGI_239198'); // tasa total // en CPN no se muestra este campo
            viewState.hide('VA_BALLONFEEWWRPRY_949198'); // cuota balloon
            viewState.disable('VA_VAVABUTTONRDGI5_636198'); // btn calcular
            viewState.hide('VA_VAVABUTTONNXJJ__482198'); // btn adicional
            viewState.hide('VA_VAVABUTTONZDFPF_173198'); // btn gracia
            viewState.enable('VA_VAVABUTTONOH3FZ_246198'); // btn recalcular
            viewState.enable('VA_VAVABUTTONNPM_2_987198'); // btn guardar

            //grid.addAllRows('AmortizationEntity', tmpGridAmortization, true);
            //viewState.hide('G_OPERATIANT_136198');
            viewState.show('G_OPERATIUYT_632198');
            viewState.hide('VA_EXTENDEDPAYMEDA_710198');
            grid.hideGridRowCommand('QV_ECPR_JAA30', entities.AmortizationEntity.data()[entities.AmortizationEntity.length - 1], 'edit');
            grid.hideGridRowCommand('QV_ECPR_JAA30', entities.AmortizationEntity.data()[entities.AmortizationEntity.length - 1], 'delete');
            //grid.selectRow('QV_ECPR_JAA30', {dividend:1}, 1);
            break;
        }
      }

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

  };


  //Entity: AmortizationFormEntity
  //AmortizationFormEntity.fixedPayementDay (RadioButtonList) View: OperationPaymentDayUpdateForm
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_FIXEDPAYEMENYTY_637198 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {
    loadCatalogDataEventArgs.commons.execServer = false;
    return [{
        code: 'S',
        value: 'Si'
      },
      {
        code: 'N',
        value: 'No'
      }
    ];
  };



  //Entity: AmortizationFormEntity
  //AmortizationFormEntity.typeAmortization (RadioButtonList) View: OperationPaymentDayUpdateForm
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_TYPEAMORTIZATTN_681198 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {
    let typeAmortization: any = loadCatalogDataEventArgs.commons.api.vc.model.AmortizationFormEntity.typeAmortization;
    loadCatalogDataEventArgs.commons.execServer = false;
    if (typeAmortization && typeAmortization != 'AGREGADA') {
      return [{
          code: 'ALEMANA',
          value: 'Alemana'
        },
        {
          code: 'FRANCESA',
          value: 'Francesa'
        },
        {
          code: 'MANUAL',
          value: 'Manual'
        }
      ];
    } else {
      return [{
          code: 'ALEMANA',
          value: 'Alemana'
        },
        {
          code: 'FRANCESA',
          value: 'Francesa'
        },
        {
          code: 'MANUAL',
          value: 'Manual'
        },
        {
          code: 'AGREGADA',
          value: 'Agregada'
        }
      ];
    }
  };



  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: OperationPaymentDayUpdateForm
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    let viewState: any = renderEventArgs.commons.api.viewState;
    let parentVc: any = renderEventArgs.commons.api.parentVc;
    let typeAggregate: any = entities.GeneralParametersQuery.aggregate;
    renderEventArgs.commons.execServer = false;

    if (renderEventArgs.commons.api.parentVc?.id == 'VC_LOANPARTIR_265871') {
      renderEventArgs.commons.api.viewState.disable('G_OPERATIAEO_858198');
    }
    renderEventArgs.commons.api.viewState.hide('VA_EXTENDEDPAYMEDA_710198');

    //Amortizacion Agregada
    if (entities.AmortizationFormEntity && entities.AmortizationFormEntity.typeAmortization == 'AGREGADA') {
      viewState.disable('VA_TYPEAMORTIZATTN_681198');
    }

    //ocultar si es AGREGADA y en reestructura
    if (typeAggregate == 'S' && parentVc && parentVc.id == 'VC_RESTRUCTEG_166525') {
      viewState.disable('VA_TERMGRACECAPTAT_881198'); //Periodo gracia capital 
      viewState.disable('VA_TERMGRACEINTTET_849198'); //Periodo gracia interes
      viewState.disable('VA_TYPEGRACEBHAAVJ_350198'); //Forma cobro gracia
      viewState.disable('VA_9468GILHMJRMZIF_745198'); //Num div a distribuir
    }
  };

  //gridRowDeleting QueryView: QV_ECPR_JAA30
  //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
  task_gridRowDeleting_QV_ECPR_JAA30 = (
    entities: Model,
    gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
  ) => {
    gridRowDeletingEventArgs.commons.execServer = false;
    changeAmortization = true;
    for (let a: any = 0; a < entities.AmortizationEntity.length - 1; a++) {
      entities.AmortizationEntity[a].dividend = (+a + 1);
    }
    // TODO - REFACTORIZAR - MUY PENDIENTE - CREAR FUNCION
    // gridRowDeletingEventArgs.commons.api.vc.executeCommand("VA_VAVABUTTONOH3FZ_246198", "VA_VAVABUTTONOH3FZ_246198", validator, false, false, '', false);
  };

  //gridRowInserting QueryView: QV_ECPR_JAA30
  //Se ejecuta antes de que los datos insertados en una grilla sean comprometidos.
  task_gridRowInserting_QV_ECPR_JAA30 = (
    entities: Model,
    gridRowInsertingEventArgs: CobisModelGridRowActionEventArgs
  ) => {
    gridRowInsertingEventArgs.commons.execServer = false;
    changeAmortization = true;
  };

  //gridRowSelecting QueryView: QV_ECPR_JAA30
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_ECPR_JAA30 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {
    gridRowSelectingEventArgs.commons.execServer = false;
  };

  //gridRowUpdating QueryView: QV_ECPR_JAA30
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowUpdating_QV_ECPR_JAA30 = (
    entities: Model,
    gridRowUpdatingEventArgs: CobisModelGridRowActionEventArgs
  ) => {
    gridRowUpdatingEventArgs.commons.execServer = false;
    changeAmortization = true;
    gridRowUpdatingEventArgs.rowData.dynamicField1 = +gridRowUpdatingEventArgs.rowData.dynamicField1 + +diferenciaCapitalCuota;
    diferenciaCapitalCuota = 0;
  };


}