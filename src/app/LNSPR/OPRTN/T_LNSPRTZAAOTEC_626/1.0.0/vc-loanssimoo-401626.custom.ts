import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-loanssimoo-401626.model';
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

/* variables locales de T_LNSPRHWGYLNWJ_330*/

let prioridad: any = 0;

let valor: any = 0;


/* variables locales de T_LNSPRKEGMFGIE_785*/

/* variables locales de T_LNSPRGNPCEXYE_633*/
let changeAmortization: any = false;

let stateCalculate: any = 'V';
let diferenciaCapitalCuota: any = 0;
let updateFila: any = true; // V - Validate, A - Allows, C - Cancel

/* variables locales de T_LNSPRTZAAOTEC_626*/
let funcionality: any;

let EMPTY: any = ['', null, undefined];
let NOT_FOUND: any = -1;
let flagUpdateFee: any = false;
let flagUpdateTerm: any = false; //FormAmortization = AmortizationFormEntity.fee = 0;
let tmpGridAmortization: any = null;

//var flagCreate = false;//FormAmortization = VA_TYPEAMORTIZATTN_681198 = ALEMANA
let monto: any = true; //FormAmortization = entities.AmortizationEntity; Tabla temporal



export class VcLoanssimoo401626Custom extends CobisDesignerCustomEvent {

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
  isEmpty = (item: any, withZero ? : any) => {
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
      this.isEmpty(entities.OperationCRUDFormEntity.idNumber)
      // &&
      // TODO - REFACTORIZAR
      // $.inArray(funcionality, ['SCO', 'TA']) !== NOT_FOUND
    ) {
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

      entities.DebtorEntity.forEach((_debtor: any) => {
        if (_debtor.role === debtor.role && role === 'D') {
          mainDebtor = true;
          eventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_YAFUERENE_35185', false, null, this.LNSPR.timer);
        }
      });

      if (!mainDebtor) {
        entities.DebtorEntity.forEach((_debtor: any) => {
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
          entities.OperationEntity.mainDebtor = Number(entities.OperationCRUDFormEntity.code);


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

  //"TaskId": "T_LNSPRHWGYLNWJ_330"


  //"TaskId": "T_LNSPRKEGMFGIE_785"


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
    let combobox: any /*= $("#VA_OFFICIALHKVNOOZ_385221").data("kendo-ext-drop-down-list");*/

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
      // TODO - ALE
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
      // TODO - ALE
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
      // TODO - ALE 
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
      // TODO - ALE
      state = entities.GeneralInformation.codState;
      //asignacion variable actualizacion prestamos != no vigente
      if (state != stateOp) {
        viewState.enable('CM_TLNSPRVJ_776'); //habilitar transmitir
      }
    }


    gridRowUpdatingCallbackEventArgs.commons.api.grid.refresh('QV_MC21_OVS27');
  };




  //Entity: GeneralParametersQuery
  //GeneralParametersQuery.benefitInterestRate (CheckBox) View: OperationGeneralParametersForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_4223IMHHOSVYCXY_300309 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    let viewState: any = changedEventArgs.commons.api.viewState;
    let baseRate: any = entities.GeneralParametersQuery.benefitBaseRate;

    if (changedEventArgs.newValue == 'S') {
      viewState.enable('VA_9193TCVDUUBRZAN_137309');
      if (!baseRate) {
        entities.GeneralParametersQuery.benefitBaseRate = 'A';
      }
    } else {
      entities.GeneralParametersQuery.benefitBaseRate = null;
      viewState.disable('VA_9193TCVDUUBRZAN_137309');
    }
  };

  //Entity: GeneralParametersQuery
  //GeneralParametersQuery.paymentMethod (DropDownList) View: OperationLoansGeneralParametersForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_PAYMENTMETHODDD_220309 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = true;
    let viewState: any = changedEventArgs.commons.api.viewState;

    //if (entities.GeneralParametersQuery && viewState.getDataItem("VA_PAYMENTMETHODDD_220309")){
    let category: any = null;

    if (
      viewState.getDataItem("VA_PAYMENTMETHODDD_220309").categoria
    ) {
      category = viewState.getDataItem("VA_PAYMENTMETHODDD_220309").categoria;
      entities.GeneralParametersQuery.paymentCategory = category
    } else {
      category = entities.GeneralParametersQuery.paymentCategory
    }

    if (category == 'NDAH' || category == 'PLANO') {
      viewState.show('VA_VABUTTONOHXRHAO_106309');
    } else {
      viewState.hide('VA_VABUTTONOHXRHAO_106309');
    }

    /*  } else {
        viewState.hide('VA_VABUTTONOHXRHAO_106309');//button establecer
        entities.GeneralParametersQuery.account = null;
      }*/
  };


  //Start signature to Callback event to VA_PAYMENTMETHODDD_220309
  task_changeCallback_VA_PAYMENTMETHODDD_220309 = (
    entities: Model,
    changeCallbackEventArgs: CobisModelChangeCallbackEventArgs
  ) => {
    //here your code
  };


  //Entity: GeneralParametersQuery
  //GeneralParametersQuery.readjustable (RadioButtonList) View: OperationGeneralParametersForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_READJUSTABLELXP_279309 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    if (changedEventArgs.newValue == 'N') {
      changedEventArgs.commons.api.viewState.disable('VA_PERIODICITYEHNN_689309');
      entities.GeneralParametersQuery.periodicity = null;
    } else {
      changedEventArgs.commons.api.viewState.enable('VA_PERIODICITYEHNN_689309');
      //entities.GeneralParametersQuery.periodicity=3;
    }
  };




  // (Button) 
  task_executeCommand_VA_VABUTTONFIRPTAQ_308309 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters. = true;

  };

  //Start signature to Callback event to VA_VABUTTONFIRPTAQ_308309
  task_executeCommandCallback_VA_VABUTTONFIRPTAQ_308309 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    if (executeCommandCallbackEventArgs.success) {
      executeCommandCallbackEventArgs.commons.api.viewState.enable('CM_TLNSPRVJ_776');
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_OPERACICA_42329', false, null, this.LNSPR.timer);
    }
  };


  //Entity: GeneralParametersQuery
  //GeneralParametersQuery. (Button) View: OperationGeneralParametersForm
  //Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
  task_executeCommand_VA_VABUTTONOHXRHAO_106309 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;
    let paymentCategory: any = executeCommandEventArgs.commons.api.viewState.getDataItem("VA_PAYMENTMETHODDD_220309").categoria;
    if (paymentCategory == 'NDAH' || paymentCategory == 'PLANO') {
      //open modal
      let nav: any = executeCommandEventArgs.commons.api.navigation;

      nav.label = this.cobis.translate('LNSPR.LBL_LNSPR_DETALLELG_12706');
      nav.address = {
        moduleId: 'LNSPR',
        subModuleId: 'OPRTN',
        taskId: 'T_LNSPRACJAQDUP_527',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_REPAYMENTT_461527'
      };

      nav.queryParameters = {
        mode: 1
      };
      nav.modalProperties = {
        size: 'md'
      };
      nav.customDialogParameters = {
        banco: entities.OperationEntity.operation,
        paymentMethod: entities.GeneralParametersQuery.paymentMethod,
        paymentCategory: paymentCategory
      };
      nav.openModalWindow(executeCommandEventArgs.commons.controlId, null);
    }
  };

  //FormaPagoQuery Entity: FormaPago
  task_executeQuery_Q_APAGOOOO_YV30 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.currency = executeQueryEventArgs.commons.api.vc.model.OperationEntity.money;
    executeQueryEventArgs.parameters.opType = executeQueryEventArgs.commons.api.vc.model.OperationEntity.typeOperation;
    /* if (executeQueryEventArgs.parameters.currency == 0) {
        executeQueryEventArgs.commons.execServer = true;
    } else {
        executeQueryEventArgs.commons.execServer = executeQueryEventArgs.parameters.currency ? true : false;
     }*/
    //executeQueryEventArgs.commons.serverParameters.FormaPago = true; 

    executeQueryEventArgs.commons.execServer = (executeQueryEventArgs.parameters.currency == 0 || executeQueryEventArgs.parameters.currency) ? true : false;
  };

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
        // TODO - REFACTORIZAR
        gridAfterLeaveInLineRowEventArgs.commons.api.vc.executeCommand("VA_VAVABUTTONOH3FZ_246198", "VA_VAVABUTTONOH3FZ_246198", validator, false, false, '', false);
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
    // TODO - ALE
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
        // TODO - REFACTORIZAR
        executeCommandEventArgs.commons.api.vc.executeCommand("VA_VAVABUTTONNPM_2_987198", "VA_VAVABUTTONOH3FZ_246198", validator, false, false, '', false);
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
    let grid: any /* = $("#QV_ECPR_JAA30").data("kendoGrid");*/
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
    // TODO - REFACTORIZAR
    gridRowDeletingEventArgs.commons.api.vc.executeCommand("VA_VAVABUTTONOH3FZ_246198", "VA_VAVABUTTONOH3FZ_246198", validator, false, false, '', false);
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




  // (Button) 
  task_executeCommand_CM_TLNSPRTZ_RRO = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.entityName = true;

  };


  //Start signature to Callback event to CM_TLNSPRTZ_RRO
  task_executeCommandCallback_CM_TLNSPRTZ_RRO = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    //here your code
    if (executeCommandCallbackEventArgs.success) {
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_OPERACICA_42329', false, null, this.LNSPR.timer);

      /*var nav = executeCommandCallbackEventArgs.commons.api.navigation;

      nav.address = {
          moduleId: 'LNSPR',
          subModuleId: 'OPRTN',
          taskId: 'T_LNSPRTZAAOTEC_626',
          taskVersion: '1.0.0',
          viewContainerId: 'VC_LOANSSIMOO_401626'
      };

      nav.queryParameters = {
          newCustomer: "N",
          functionality: "SCO"
      };*/

      let idAux: any = this.cobis.container.tabs.getCurrentTab().id;

      let urlAux: any = this.cobis.container.tabs.getCurrentTab().url;
      let nameAux: any = undefined;

      if (this.cobis.container.tabs.getCurrentTab().name != undefined) {
        nameAux = this.cobis.container.tabs.getCurrentTab().name;
      } else {
        nameAux = this.cobis.translate("LNSPR.LBL_LNSPR_SIMULACMO_93778");
      }

      this.LNSPR.container.changeCurrentTab(idAux, urlAux, nameAux, true);
    }
  };




  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: LoansSimulationForm
  task_initData_VC_LOANSSIMOO_401626 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    let viewState: any = initDataEventArgs.commons.api.viewState;
    let nav: any = initDataEventArgs.commons.api.navigation;
    let grid: any = initDataEventArgs.commons.api.grid;
    //Beneficio interes
    viewState.disable('VA_4223IMHHOSVYCXY_300309');

    //OCULTAR TABS
    //viewState.hide('VC_MWEGHJFEQQ_170626');// información General
    viewState.hide('VC_FUAFKEKXSW_812626'); // Rubros
    viewState.hide('VC_TPJGHFAFBF_762626'); // Parámetros generales
    viewState.hide('VC_GIMALDPDEW_251626'); // Amortización
    //Préstamos Sindicados
    initDataEventArgs.commons.api.vc.viewState.G_OPERATIALO_494221.visible = false;
    initDataEventArgs.commons.api.viewState.hide('VA_TYPESYNDICATEEE_795221');
    initDataEventArgs.commons.api.viewState.hide('VA_SYNDICATEDMLJZC_821221');


    funcionality = this.LNSPR.Utils.IsNullOrEmpty(this.LNSPR.getQueryStrings().funcionality) ? 'SCO' : this.LNSPR.getQueryStrings().funcionality;

    //entities.OperationEntity.processDate = new Date(2020,4,5);//desarrollo
    entities.OperationEntity.processDate = String(new Date(this.cobis.containerScope.preferences.processDate));
    entities.OperationEntity.sector = String(1);
    entities.OperationEntity.functionality = funcionality;
    //entities.OperationEntity.amount = 0; //supr 0.0
    //entities.OperationEntity.amountApproved = 0; //supr 0.0
    //entities.OperationEntity.creationDate = new Date(2020,4,5);//desarrollo
    entities.OperationEntity.creationDate = new Date(this.cobis.containerScope.preferences.processDate);
    entities.OperationEntity.doubleAliquot = 'E';
    entities.AmortizationFormEntity.baseInterestCalculation = 'E';

    initDataEventArgs.commons.execServer = false;

    viewState.disable('CM_TLNSPRMB_TRO'); //T_LNSPRMBVLAOGA_193 = Commando//Transmitir

    //Ocultar Adicional
    viewState.hide('VA_CODEWKXBYDDSGNQ_399221'); // Información General - Cod.Cliente
    viewState.show('VA_FULLNAMENVMNPEV_901221'); // Información General - Nombre Cliente
    viewState.enable('VA_FULLNAMENVMNPEV_901221'); // Información General - Nombre Cliente
    viewState.readOnly('VA_FULLNAMENVMNPEV_901221', false); // Información General - Nombre Cliente
    // viewState.disable('VA_AMOUNTAPPROVEDE_512221');//Monto Aprobado

    viewState.hide('VA_ROLEGMHNCTPDKZE_265221'); // Información General - Deudor Principal

    viewState.hide('CM_TLNSPRTZ_RRO'); //Commando Finalizar
  };



  //Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
  //ViewContainer: LoansSimulationForm
  task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
    onCloseModalEventArgs.commons.execServer = false;
    let constants: any = onCloseModalEventArgs.commons.constants;
    let resultArgs: any = onCloseModalEventArgs.result.resultArgs;

    if (onCloseModalEventArgs.closedViewContainerId == 'VC_ACCONTSOPT_347664' &&
      onCloseModalEventArgs.dialogCloseType == 0) {
      if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.response) {
        entities.GeneralParametersQuery.paymentAccount = onCloseModalEventArgs.result.response.code;
      }
    }

    if (onCloseModalEventArgs.closedViewContainerId == 'VC_MODALOPERI_484830' && resultArgs) {
      if (onCloseModalEventArgs.dialogCloseType !== constants.dialogCloseType.NonInteractive) {
        if (resultArgs.mode === constants.mode.Insert) {
          onCloseModalEventArgs.commons.api.grid.addRow('OperationItemsList', resultArgs.data.OperationItemsList, true);
        } else if (resultArgs.mode === constants.mode.Update) {
          onCloseModalEventArgs.commons.api.grid.updateRow('OperationItemsList', resultArgs.index, resultArgs.data.OperationItemsList, true);
        }
      }
    }

    if (onCloseModalEventArgs.closedViewContainerId == "VC_LOANSLINSS_962737" &&
      onCloseModalEventArgs.dialogCloseType == 0) {
      entities.OperationEntity.creditLine = onCloseModalEventArgs.result.result.lineaCredito;
    }
  };



  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: LoansSimulationForm
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    renderEventArgs.commons.execServer = false;
    entities.OperationEntity.office = JSON.parse(sessionStorage.userOffice).code;
    renderEventArgs.commons.api.viewState.label('VA_FULLNAMENVMNPEV_901221', 'LNSPR.LBL_LNSPR_CLIENTEPS_50076');
    renderEventArgs.commons.api.viewState.hide('VA_EXTENDEDPAYMEDA_710198');
    let viewState: any = renderEventArgs.commons.api.viewState;

    //Amortizacion Agregada
    if (entities.AmortizationFormEntity && entities.AmortizationFormEntity.typeAmortization == 'AGREGADA') {
      viewState.disable('VA_TYPEAMORTIZATTN_681198');
    }

    //Numero dividendos gracia
    if (entities.AmortizationFormEntity.typeGrace == 'S') {
      viewState.show('VA_9468GILHMJRMZIF_745198');
    } else {
      viewState.hide('VA_9468GILHMJRMZIF_745198');
    }
  };


}