import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-operationl-208539.model';
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

/* variables locales de T_LNSPRDTSDFSKQ_539*/
let stateCreateUpdate: any = 'P';

let fromAmount: any = false; //Para Crear el Primero
let firstAmount: any = true;

let isGroup: any = false;

export class VcOperationl208539Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_LNSPRDTSDFSKQ_539"

  /**
   * Comprueba si un elemento está vacío o no está en ['', null, undefined].
   *
   * @param item Elemento a comprobar si está vacío o no.
   * @param bool withZero Considera a cero (0) como valor vacío.
   * @returns {boolean}
   */
  // TODO - ALE
  isEmpty = (item: any, withZero: any) => {
    let MY_EMPTY: any = EMPTY.slice();

    if (withZero) {
      MY_EMPTY.push(0);
      MY_EMPTY.push(0.00);
    }
    return MY_EMPTY.indexOf(item) !== NOT_FOUND;
  }

  /**
   * Agrega un deudor a la grilla, pestaña Información general
   *
   * @param entities Contiene todas las entidades del formulario.
   * @param eventArgs Propiedades y métodos del evento que se está manipulando.
   */
  addDebtorToGrid = (entities: Model, eventArgs: any) => {
    let grid: any = eventArgs.commons.api.grid;
    let viewState: any = eventArgs.commons.api.viewState;
    let entity: any = 'DebtorEntity';
    let debtor: any;

    if (!this.isEmpty(entities.OperationCRUDFormEntity.fullName) &&
      this.isEmpty(entities.OperationCRUDFormEntity.idNumber) &&
      $.inArray(funcionality, ['SCO', 'TA']) !== NOT_FOUND) {
      grid.removeAllRows(entity);

      debtor = {
        role: 'D',
        fullName: entities.OperationCRUDFormEntity.fullName,
        idNumber: 0,
        code: 0,
        score: null,
        type: null,
        description: null
      };
      grid.addRow(entity, debtor, true);
      viewState.hide('G_OPERATINOS_396221');
    } else {
      let role: any = 'C';

      if (entities.OperationCRUDFormEntity.role) {
        role = 'D';
      }
      debtor = {
        role: role,
        fullName: entities.OperationCRUDFormEntity.fullName,
        idNumber: entities.OperationCRUDFormEntity.idNumber,
        code: entities.OperationCRUDFormEntity.code,
        score: null,
        type: null,
        description: null
      };
      let mainDebtor: any = false;
      let alreadyRegisterDebtor: any = false;
      let emptyDebtor: any;

      entities[entity].data().forEach((_debtor: any) => {
        if (_debtor.role === debtor.role && role === 'D') {
          mainDebtor = true;
          eventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_YAFUERENE_35185', false, null, this.LNSPR.timer);
        }
      });

      if (!mainDebtor) {
        entities[entity].data().forEach((_debtor: any) => {
          if (_debtor.code === debtor.code) {
            alreadyRegisterDebtor = true;
            eventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_ELCONSUDA_15519', false, null, this.LNSPR.timer);
          }
        });
      }

      emptyDebtor = [debtor.fullName, debtor.idNumber, debtor.code].some(this.isEmpty);

      if (!mainDebtor && !alreadyRegisterDebtor && !emptyDebtor) {
        grid.addRow(entity, debtor, true);
        if (debtor.role === 'D') {
          entities.OperationEntity.mainDebtor = entities.OperationCRUDFormEntity.code;


        }
        entities.OperationCRUDFormEntity.fullName = null;
        entities.OperationCRUDFormEntity.idNumber = null;
        entities.OperationCRUDFormEntity.code = null;
        entities.OperationCRUDFormEntity.role = null;
        entities.OperationCRUDFormEntity.officer = null;
        entities.OperationCRUDFormEntity.company = null;
      }
    }
  }

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

  //Entity: OperationEntity
  //OperationEntity.amountApproved (TextInputBox) View: OperationForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_AMOUNTAPPROVEDE_512221 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;

    if (entities.OperationEntity.amount) {
      if ((entities.OperationEntity.amount <= entities.OperationEntity.amountApproved!) && !fromAmount) {
        changedEventArgs.commons.api.errors.validateInput('VA_AMOUNTPCRKOKHWA_216221', false);

      } else {
        changedEventArgs.commons.api.viewState.focus('VA_AMOUNTPCRKOKHWA_216221');
      }
    }

    fromAmount = false;



  };


  //Entity: OperationEntity
  //OperationEntity.amount (TextInputBox) View: OperationLoansForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_AMOUNTPCRKOKHWA_216221 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    // TODO - ALE
    if (monto) {
      if (firstAmount) {
        entities.OperationEntity.amountApproved = entities.OperationEntity.amount;
        firstAmount = false;
      }
    }

    fromAmount = true;


  };

  //Entity: OperationCRUDFormEntity
  //OperationCRUDFormEntity.code (TextInputButton) View: OperationLoansForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_CODEWKXBYDDSGNQ_399221 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {


    if (changedEventArgs.newValue) {
      changedEventArgs.commons.execServer = true;
    } else {
      entities.OperationCRUDFormEntity.fullName = null;
      entities.OperationCRUDFormEntity.idNumber = null;
      changedEventArgs.commons.execServer = false;
    }

  };

  //Start signature to Callback event to VA_CODEWKXBYDDSGNQ_399221
  task_changeCallback_VA_CODEWKXBYDDSGNQ_399221 = (
    entities: Model,
    changeCallbackEventArgs: CobisModelChangeCallbackEventArgs
  ) => {
    if (!changeCallbackEventArgs.success) {
      entities.OperationCRUDFormEntity.fullName = null;
      entities.OperationCRUDFormEntity.idNumber = null;
    }
  };


  //Entity: OperationEntity
  //OperationEntity.syndicated (CheckBox) View: OperationForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_SYNDICATEDMLJZC_821221 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    if (entities.OperationEntity.syndicated == false) {
      changedEventArgs.commons.api.viewState.hide('VA_TYPESYNDICATEEE_795221');
      changedEventArgs.commons.api.vc.viewState.G_OPERATIALO_494221.visible = false;
      entities.OperationEntity.typeSyndicated = null;
      changedEventArgs.commons.execServer = true;
      changedEventArgs.commons.api.grid.removeAllRows('SyndicatedList');

    } else {
      changedEventArgs.commons.api.viewState.show('VA_TYPESYNDICATEEE_795221');
      changedEventArgs.commons.api.vc.viewState.G_OPERATIALO_494221.visible = true;
      changedEventArgs.commons.execServer = false;
    }


  };








  //Entity: OperationEntity
  //OperationEntity.typeSyndicated (RadioButtonList) View: OperationForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_TYPESYNDICATEEE_795221 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.api.vc.viewState.G_OPERATIALO_494221.visible = true;

    changedEventArgs.commons.execServer = false;


  };

  //Entity: OperationEntity
  //OperationEntity.amount (TextInputBox) View: OperationForm
  task_customValidate_VA_AMOUNTPCRKOKHWA_216221 = (
    entities: Model,
    customValidateEventArgs: CobisModelCustomValidateEventArgs
  ) => {

    customValidateEventArgs.commons.execServer = false;
    if (entities.OperationEntity.amountApproved && (customValidateEventArgs.currentValue > entities.OperationEntity.amountApproved)) {
      customValidateEventArgs.errorMessage = customValidateEventArgs.commons.api.viewState.translate('LNSPR.MSG_LNSPR_MONTODEON_19476');
      customValidateEventArgs.isValid = false;
    } else {
      customValidateEventArgs.isValid = true;
      customValidateEventArgs.commons.api.viewState.focus('VA_AMOUNTAPPROVEDE_512221');

    }

  };


  //Entity: OperationCRUDFormEntity
  //OperationCRUDFormEntity. (Button) View: OperationLoansForm
  //Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
  task_executeCommand_VA_VABUTTONVLCBANL_971221 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    if (entities.OperationEntity.functionality && (entities.OperationEntity.functionality != 'SCO' && entities.OperationEntity.functionality != 'C')) {
      executeCommandEventArgs.commons.execServer = true;
    } else {
      executeCommandEventArgs.commons.execServer = false;
      this.addDebtorToGrid(entities, executeCommandEventArgs);
    }
  };


  //Start signature to Callback event to VA_VABUTTONVLCBANL_971221
  task_executeCommandCallback_VA_VABUTTONVLCBANL_971221 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    //here your code
    if (entities.DebtorReportedEntity.length > 1) {
      //Open Modal
      let nav: any = executeCommandCallbackEventArgs.commons.api.navigation;

      nav.label = this.cobis.translate('LNSPR.LBL_LNSPR_ATENCINRI_16964');
      nav.address = {
        moduleId: 'LOANS',
        subModuleId: 'TRNSC',
        taskId: 'T_LOANSYTHKWJPP_439',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_DEBTORREDE_491439'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.modalProperties = {
        size: 'md',
        callFromGrid: false
      };
      nav.customDialogParameters = {
        entities: entities
      };

      //Si la llamada es desde un evento de un control perteneciente a la cabecera de la página
      nav.openModalWindow(executeCommandCallbackEventArgs.commons.controlId, null);
      //Si la llamada es desde un evento de un control perteneciente a una grilla de la página
      //nav.openModalWindow(id, executeCommandCallbackEventArgs.modelRow);
      //addDebtorToGrid(entities, executeCommandCallbackEventArgs);
    }
    if (executeCommandCallbackEventArgs.success) {
      this.addDebtorToGrid(entities, executeCommandCallbackEventArgs);
    }
  };





  // (Button) 
  task_executeCommand_VA_VABUTTONXCGGMOI_839221 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    //se ejecuta la pantalla desde update
    let execServer: any = true;

    let porcentajeTotalGrid: any = 0;
    let countAdministrator: any = 0;

    if (stateCreateUpdate === 'P') {
      //Valida el campo monto debe ser mayor a cero
      if (!entities.OperationEntity.amount || entities.OperationEntity.amount <= 0) {
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_ELMONTOOE_93388", false, null, this.LNSPR.timer);
        execServer = false;
      }
      //Valida la lista el cliente ingresado.
      if (execServer && entities.OperationCRUDFormEntity.code) {
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_AADAALARD_86290", false, null, this.LNSPR.timer);
        execServer = false;
      }
      //Validaexistir por lo menos un cliente principal.
      if (execServer) {
        let mainDebtor: any = true;
        for (let idx: any = 0; idx < entities.DebtorEntity.length; idx++) {
          if (entities.DebtorEntity[idx].role === 'D') {
            mainDebtor = false;
          }
        }
        if (execServer && mainDebtor) {
          executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_DEBEEXIRI_69031", false, null, this.LNSPR.timer);
          execServer = false;
        }
      }
      //Valida El número de la obligación es obligatorio
      if (execServer && entities.OperationEntity.classOperation === 'R' && !entities.OperationEntity.previousNumber) {
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_ELNMEROCB_51300", false, null, this.LNSPR.timer);
        execServer = false;
      }
      //Valida la alicuota 1 (Certificados) y sino debe ingresar la alicuota 2 (Ahorros)
      if (execServer && (entities.OperationEntity.doubleAliquot && entities.OperationEntity.doubleAliquot === 'S')) {
        if (!entities.OperationEntity.aliquota1) {
          executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_DEBEINGAT_13902", false, null, this.LNSPR.timer);
          execServer = false;
        } else if (!entities.OperationEntity.aliquota2) {
          executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_DEBEINGSR_39231", false, null, this.LNSPR.timer);
          execServer = false;
        }
      }
      //Valida la alicuota 1 (Certificados)
      if (execServer && (entities.OperationEntity.doubleAliquot && entities.OperationEntity.doubleAliquot === 'N')) {
        if (!entities.OperationEntity.aliquota1) {
          executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_DEBEINGAT_13902", false, null, this.LNSPR.timer);
          execServer = false;
        }
      }
      //Validaciones Sindicados
      if (execServer && entities.OperationEntity.syndicated && !entities.OperationEntity.typeSyndicated) {

        executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_TIPODESRE_41966", false, null, this.LNSPR.timer);
        execServer = false;

      }

      if (execServer && (entities.SyndicatedList.length == 0 && entities.OperationEntity.syndicated && entities.OperationEntity.typeSyndicated)) {
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_PARTICIIA_96996", false, null, this.LNSPR.timer);
        execServer = false;
      } else if (execServer && entities.SyndicatedList.length > 0) {
        for (let i: any = 0; i < entities.SyndicatedList.length; i++) {
          porcentajeTotalGrid = porcentajeTotalGrid + entities.SyndicatedList[i].percentageParticipants
          if (entities.SyndicatedList[i].roleP === 'A') {
            countAdministrator = countAdministrator + 1;
          }
        }

        if (porcentajeTotalGrid > 100) {
          executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_NOEXCEDER_58370", false, null, this.LNSPR.timer);
          execServer = false;
        }
        if (countAdministrator === 0 && entities.OperationEntity.typeSyndicated == 'A') {
          executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_ROLADMIRR_22323", false, null, this.LNSPR.timer);
          execServer = false;
        }

      }

      //Valida La fecha de creación debe ser menor o igual a la fecha de proceso
      if (execServer) {
        //var dateProccess = new Date(2020,4,5);//desarrollo
        let dateProccess: any = new Date(this.cobis.containerScope.preferences.processDate);

        entities.OperationEntity.creationDate?.setMilliseconds(0);
        if (entities.OperationEntity.creationDate?.getTime() ! > dateProccess.getTime()) {
          executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_LAFECHALA_93688", false, null, this.LNSPR.timer);
          execServer = false;
        }
      }
      //Para al Realizarlo no volve a crear otro
      if (execServer) {
        stateCreateUpdate = 'V';
      }
    }


    executeCommandEventArgs.commons.serverParameters.Loan = true;

    executeCommandEventArgs.commons.serverParameters.GenericEntity = true;
    executeCommandEventArgs.commons.serverParameters.CreateOperationOne = true;
    executeCommandEventArgs.commons.serverParameters.CreateOperationTwo = true;
    executeCommandEventArgs.commons.serverParameters.AmortizationFormEntity = true; //Datos Amortización
    executeCommandEventArgs.commons.serverParameters.GeneralParametersQuery = true;

    executeCommandEventArgs.commons.serverParameters.AmortizationTitleEntity = true;
    executeCommandEventArgs.commons.serverParameters.AmortizationEntity = true;

    executeCommandEventArgs.commons.serverParameters.OperationCRUDFormEntity = true; //Diseño
    executeCommandEventArgs.commons.serverParameters.DebtorEntity = true; //Diseño
    executeCommandEventArgs.commons.serverParameters.OperationEntity = true; //Diseño

    executeCommandEventArgs.commons.execServer = execServer;
    //executeCommandEventArgs.commons.serverParameters. = true;
  };

  //Start signature to Callback event to VA_VABUTTONXCGGMOI_839221
  task_executeCommandCallback_VA_VABUTTONXCGGMOI_839221 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    //here your code
    let viewState: any = executeCommandCallbackEventArgs.commons.api.viewState;

    let grid: any = executeCommandCallbackEventArgs.commons.api.grid;

    if (executeCommandCallbackEventArgs.success) {

      monto = false;
      entities.AmortizationFormEntity.numOperation = entities.OperationEntity.operation;
      entities.AmortizationFormEntity.operationType = entities.OperationEntity.typeOperation;
      entities.AmortizationFormEntity.valueDate = entities.OperationEntity.creationDate;
      entities.AmortizationFormEntity.typeAmortization = entities.AmortizationFormEntity.typeAmortization ? entities.AmortizationFormEntity.typeAmortization?.trim() : "";
      entities.AmortizationFormEntity.typeFee = entities.AmortizationFormEntity.typeFee ? entities.AmortizationFormEntity.typeFee?.trim() : "";

      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_CREACIOTT_10843", false, null, this.LNSPR.timer);

      //Datos en otros TABS
      executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_MC21_OVS27', {
        operation: entities.OperationEntity.operation?.trim()
      }); //Rubros - Grid
      viewState.refreshData('Q_APAGOOOO_YV30'); //Parametros generales - ComboBox - paymentMethod
      viewState.hide('VA_VAVABUTTONNXJJ__482198'); //Amortización - Cmd Adicional 
      viewState.hide('VA_VABUTTONZDXFYJP_582480'); //Amortización - Cmd Gracias 
      viewState.hide('VA_VAVABUTTONVJFY0_286198'); //Amortización - Cmd Imprimir 
      viewState.hide('VA_VAVABUTTONPJ080_778198'); //Amortización - Cmd Imprimir Desembolso 

      this.suprColAmortization(entities, executeCommandCallbackEventArgs, 'QV_ECPR_JAA30'); //Amortizacion - Ocultar Tablas del Grid
      /*if (entities.AmortizationFormEntity.threeYear && entities.AmortizationFormEntity.threeYear.trim() == 'S') {
          viewState.show('G_OPERATIAPT_630198');
      } else {
          viewState.hide('G_OPERATIAPT_630198');
      }*/

      if (entities.OperationEntity.functionality == 'C') {
        //MOSTRAR TABS
        //viewState.hide('VC_ZHQUMTXXGR_635193');// información General
        viewState.show('VC_ZUGXQMZUBQ_554193'); // Rubros
        viewState.show('VC_UQBPHFCKCW_777193'); // Parámetros generales - optimizado
        viewState.show('VC_BKTCDNSADU_521193'); // Amortización

        viewState.enable('CM_TLNSPRMB_TRO'); //Transmitir

      } else if (entities.OperationEntity.functionality == 'SCO') {
        entities.AmortizationFormEntity.typeGrace = null;

        viewState.disable('VA_TYPEGRACEQJMJVQ_187480'); //Amortization - Forma Cobro Gracia
        viewState.disable('VA_VABUTTONOHVZDKF_347480'); //Amortization - Button - Recalcular
        viewState.disable('VA_VABUTTONNPFDSDM_920480'); //Amortization - Button - Guardar
        //viewState.hide('VA_PAYFULLFEEUGWZV_691388');//

        viewState.show('VA_VAVABUTTONVJFY0_286198'); //Amortization - Button - Imprimir
        viewState.hide('VA_VAVABUTTONZDFPF_173198'); //Amortization - Buttoon - Gracia

        viewState.disable('VA_MONEYWCCBPJYWVL_470221'); //Moneda
        viewState.disable('VA_TYPEOPERATIONNN_788221'); //Tipo Operación
        viewState.disable('VA_AMOUNTPCRKOKHWA_216221'); //Monto
        viewState.disable('VA_AMOUNTAPPROVEDE_512221'); //Monto Aprobado
        viewState.disable('VA_OFFICELAHOKRIFT_376221'); //Oficina

        viewState.disable('VA_CREATIONDATENDE_311221'); //Fecha Creación

        //MOSTRAR TABS
        //viewState.hide('VC_MWEGHJFEQQ_170626');// información General
        viewState.show('VC_FUAFKEKXSW_812626'); // Rubros
        viewState.show('VC_TPJGHFAFBF_762626'); // Parámetros generales
        viewState.show('VC_GIMALDPDEW_251626'); // Amortización

        viewState.show('CM_TLNSPRTZ_RRO'); //T_LNSPRTZAAOTEC_626 - Commando//Finalizar
      }
    } else {
      viewState.hide('VA_VAVABUTTONNXJJ__482198'); //Amortización - Cmd Adicional 
      viewState.hide('VA_VABUTTONZDXFYJP_582480'); //Amortización - Cmd Gracias 
      viewState.hide('VA_VAVABUTTONVJFY0_286198'); //Amortización - Cmd Imprimir 
      viewState.hide('VA_VAVABUTTONPJ080_778198'); //Amortización - Cmd Imprimir Desembolso 

      viewState.hide('VC_ZUGXQMZUBQ_554193'); // Rubros
      viewState.hide('VC_UQBPHFCKCW_777193'); // Parámetros generales - optimizado
      viewState.hide('VC_BKTCDNSADU_521193'); // Amortización
    }

    if (entities.OperationEntity.syndicated) {
      viewState.disable('VA_SYNDICATEDMLJZC_821221');
      viewState.disable('VA_TYPESYNDICATEEE_795221');
      viewState.disable('G_OPERATIALO_494221');
    } else {
      viewState.disable('VA_SYNDICATEDMLJZC_821221');
    }

    //Amortizacion Agregada
    viewState.refreshData('VA_TYPEAMORTIZATTN_681198');

    if (entities.AmortizationFormEntity && entities.AmortizationFormEntity.typeAmortization == 'AGREGADA') {
      viewState.disable('VA_TYPEAMORTIZATTN_681198');
    } else {
      viewState.enable('VA_TYPEAMORTIZATTN_681198');
    }
  };


  //DebtorEntityQuery Entity: 
  task_executeQuery_Q_DEBTORZN_LNSPR = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.execServer = false;
    //executeQueryEventArgs.commons.serverParameters. = true;
  };


  //SyndicatedListQuery Entity: SyndicatedList
  task_executeQuery_Q_SYNDATCT_WX29 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {

    executeQueryEventArgs.commons.execServer = true;
  };


  //Start signature to Callback event to Q_SYNDATCT_WX29
  task_executeQueryCallback_Q_SYNDATCT_WX29 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    //here your code
  };


  //gridCommand (Button) QueryView: QV_VE29_XZB37
  //Evento GridCommand: Sirve para personalizar la acción que realizan los botones de Grilla.
  task_gridCommand_CEQV_201QV_VE29_XZB37_960 = (
    entities: Model,
    gridExecuteCommandEventArgs: CobisModelGridCommandExecuteEventArgs
  ) => {
    let porcentajeTotalGrid: any = 0;
    let montoTotalGrid: any = 0;
    gridExecuteCommandEventArgs.commons.execServer = false;

    if (entities.OperationEntity.amount) {

      if (entities.OperationEntity.typeSyndicated) {
        // Se obtiene el valor de la lista del porcentajen total

        if (entities.SyndicatedList) {
          for (let i: any = 0; i < entities.SyndicatedList.length; i++) {
            porcentajeTotalGrid = porcentajeTotalGrid + entities.SyndicatedList[i].percentageParticipants
            montoTotalGrid = montoTotalGrid + entities.SyndicatedList[i].amountParticipants
          }
        }

        let nav: any = gridExecuteCommandEventArgs.commons.api.navigation;
        nav.label = 'LNSPR.LBL_LNSPR_INGRESORR_96766';
        nav.address = {
          moduleId: 'LNSPR',
          subModuleId: 'OPRTN',
          taskId: 'T_LNSPRSCSIDSOD_858',
          taskVersion: '1.0.0',
          viewContainerId: 'VC_SYNDICATDI_660858'
        };

        nav.queryParameters = {
          mode: 1
        };
        nav.modalProperties = {
          size: 'lg',
          callFromGrid: false
        };
        nav.customDialogParameters = {
          amount: entities.OperationEntity.amount,
          typeSindicated: entities.OperationEntity.typeSyndicated,
          gridPercentajeTotal: porcentajeTotalGrid,
          gridAmountTotal: montoTotalGrid,
          validationAdministrator: entities.SyndicatedList
        };

        //Si la llamada es desde un evento de un control perteneciente a la cabecera de la página
        nav.openModalWindow(gridExecuteCommandEventArgs.commons.controlId, null);
        //Si la llamada es desde un evento de un control perteneciente a una grilla de la página
        //nav.openModalWindow(id, args.modelRow);
      } else {

        gridExecuteCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_TIPODESRE_41966", false, null, this.LNSPR.timer);
      }
    } else {
      gridExecuteCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_MONTOREIO_54149", false, null, this.LNSPR.timer);
    }
  };




  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: OperationLoansForm
  task_initData_VC_OPERATIONL_208539 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    let viewState: any = initDataEventArgs.commons.api.viewState;
    let nav: any = initDataEventArgs.commons.api.navigation;
    let params: any = nav.getCustomDialogParameters();

    initDataEventArgs.commons.api.vc.model.OperationEntity = initDataEventArgs.commons.api.parentVc?.model.OperationEntity;
    entities.OperationEntity = initDataEventArgs.commons.api.vc.model.OperationEntity;

    initDataEventArgs.commons.execServer = false;
  };



  //Entity: OperationEntity
  //OperationEntity.official (DropDownList) View: OperationForm
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_OFFICIALHKVNOOZ_385221 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.OperationEntity = true;

  };

  //Start signature to Callback event to VA_OFFICIALHKVNOOZ_385221
  task_loadCatalogCallback_VA_OFFICIALHKVNOOZ_385221 = (
    entities: Model,
    loadCatalogCallbackEventArgs: CobisModelLoadCatalogCallbackEventArgs
  ) => {
    // TODO - REFACTOR
    let combobox: any = $("#VA_OFFICIALHKVNOOZ_385221").data("kendo-ext-drop-down-list");

    for (let i: any = 0; combobox.dataSource.data().length > i; i++) {
      if (JSON.parse(sessionStorage.UserName) == combobox.dataSource.data()[i].value.split("-")[1].trim()) {
        entities.OperationEntity.official = combobox.dataSource[i].code;
        break;
      }
    }
  };




  //Entity: OperationEntity
  //OperationEntity.ubication (DropDownList) View: OperationForm
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_UBICATIONZGLTDO_878221 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {

    loadCatalogDataEventArgs.commons.execServer = true;
    //loadCatalogDataEventArgs.commons.serverParameters.OperationEntity = true;

  };



  //Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
  //ViewContainer: OperationLoansForm
  task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {

    onCloseModalEventArgs.commons.execServer = false;
    if (onCloseModalEventArgs.closedViewContainerId == "findCustomer" &&
      onCloseModalEventArgs.dialogCloseType == onCloseModalEventArgs.commons.constants.dialogCloseType.Interactive) {
      if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.selectedData) {
        let data: any = onCloseModalEventArgs.result.selectedData;
        entities.OperationCRUDFormEntity.code = data.code;
        isGroup = data.isGroup;
        //entities.OperationCRUDFormEntity.fullName = data.name;
        //entities.OperationCRUDFormEntity.idNumber = data.documentId;
      }
    }

    if (onCloseModalEventArgs.closedViewContainerId == "VC_LOANSLINSS_962737" &&
      onCloseModalEventArgs.dialogCloseType == 0) {
      entities.OperationEntity.creditLine = onCloseModalEventArgs.result.result.lineaCredito;
    }
  };



  //Entity: OperationCRUDFormEntity
  //OperationCRUDFormEntity.code (TextInputButton) View: OperationLoansForm
  task_textInputButtonEvent_VA_CODEWKXBYDDSGNQ_399221 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;
    let nav: any = textInputButtonEventArgs.commons.api.navigation;
    nav.label = this.cobis.translate("LNSPR.LBL_LNSPR_BSQUEDAIE_72552");
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



  //Entity: OperationEntity
  //OperationEntity.creditLine (TextInputButton) View: OperationLoansForm
  task_textInputButtonEvent_VA_CREDITLINEUOUCM_252221 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;
    textInputButtonEventArgs.commons.execServer = false;
    let codCliente: any;

    for (let i: any = 0; i < textInputButtonEventArgs.model.DebtorEntity.data().length; i++) {
      if (textInputButtonEventArgs.model.DebtorEntity.data()[i].role == "D") {
        codCliente = textInputButtonEventArgs.model.DebtorEntity.data()[i].code;
        break;
      }
    }
    if (codCliente) {
      //Open Modal
      let nav: any = textInputButtonEventArgs.commons.api.navigation;

      nav.address = {
        moduleId: 'LNSPR',
        subModuleId: 'OPRTN',
        taskId: 'T_LNSPRFYCKEVVP_737',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_LOANSLINSS_962737'
      };

      nav.queryParameters = {
        mode: 1
      };
      nav.modalProperties = {
        size: 'md',
        callFromGrid: false
      };

      nav.customDialogParameters = {
        cliente: codCliente,
        esGrupo: isGroup
      };
    } else {
      textInputButtonEventArgs.cancel = true;
      textInputButtonEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_DEBEEXIRI_69031", false, null, this.LNSPR.timer);
    }
  };



  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: OperationForm
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    let viewState: any = renderEventArgs.commons.api.viewState;
    renderEventArgs.commons.execServer = false;
    entities.OperationEntity.office = JSON.parse(sessionStorage.userOffice).code;

    //Beneficio interes
    viewState.disable('VA_4223IMHHOSVYCXY_300309');

    if (entities.GeneralParametersQuery.benefitInterestRate == 'S') {
      viewState.enable('VA_9193TCVDUUBRZAN_137309'); //parametros generales - Tasa Base Beneficio
    } else {
      entities.GeneralParametersQuery.benefitBaseRate = null;
      viewState.disable('VA_9193TCVDUUBRZAN_137309'); //parametros generales - Tasa Base Beneficio
    }
  };


  //gridRowDeleting QueryView: QV_VE29_XZB37
  //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
  task_gridRowDeleting_QV_VE29_XZB37 = (
    entities: Model,
    gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
  ) => {

    gridRowDeletingEventArgs.commons.execServer = true;

  };







  //gridRowDeleting QueryView: QV_YWPR_NOE85
  //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
  task_gridRowDeleting_QV_YWPR_NOE85 = (
    entities: Model,
    gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
  ) => {

    gridRowDeletingEventArgs.commons.execServer = false;

  };







  //gridRowSelecting QueryView: QV_VE29_XZB37
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_VE29_XZB37 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.execServer = false;

  };







}