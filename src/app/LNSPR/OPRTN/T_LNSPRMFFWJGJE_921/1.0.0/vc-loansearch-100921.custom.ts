import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-loansearch-100921.model';
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

/* variables locales de LoanSearchForm*/
let listaSeleccionados: any;

let listaErrores: any = [];
let lote: any = 0;

export class VcLoansearch100921Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_LNSPRMFFWJGJE_921"
  task_gridRowCommand_VA_CHECKBOXYLXHRAO_645423 = (
    entities: Model,
    gridRowCommandEventArgs: CobisModelGridRowCommandExecuteEventArgs
  ) => {
    gridRowCommandEventArgs.commons.execServer = false;
    gridRowCommandEventArgs.commons.api.grid.updateRow('ReadjustmenMList', gridRowCommandEventArgs.rowIndex, {
      seleccion: (gridRowCommandEventArgs.rowData.seleccion !== true)
    });

    let datos: any = entities.ReadjustmenMList;
    let contDatos: any = 0;

    for (let i: any = 0; i < datos.length; i++) {
      let dato: any = datos[i];

      if (dato.seleccion) {
        contDatos++;
      }
    }

    if (contDatos > 0) {
      gridRowCommandEventArgs.commons.api.viewState.enable('CM_LOANSEAR_R04');
    } else {
      gridRowCommandEventArgs.commons.api.viewState.disable('CM_LOANSEAR_R04');
    }
  };

  //gridBeforeEnterInLineRow QueryView: QV_PG40_VCD65
  //Evento GridBeforeEnterInLineRow: Se ejecuta antes de la edición o inserción en línea de la grilla.
  task_gridBeforeEnterInLineRow_QV_PG40_VCD65 = (
    entities: Model,
    gridBeforeEnterInLineRowEventArgs: CobisModelGridBeforeEnterInLineRowEventArgs
  ) => {
    gridBeforeEnterInLineRowEventArgs.commons.execServer = false;
  };

  //Entity: LoanSearchFilter
  //LoanSearchFilter.avanceSearch (CheckBox) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_AVANCESEARCHFOE_865423 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.api.vc.viewState.VA_CODCURRENCYORMA_221423.visible = changedEventArgs.newValue;
    changedEventArgs.commons.api.vc.viewState.VA_DISBURSEMENTDTE_672423.visible = changedEventArgs.newValue;
    changedEventArgs.commons.api.vc.viewState.VA_STATEGXSFXFHGCB_183423.visible = changedEventArgs.newValue;
    changedEventArgs.commons.api.vc.viewState.VA_MIGRATEDOPERITA_354423.visible = changedEventArgs.newValue;
    changedEventArgs.commons.api.vc.viewState.VA_TYPEOPERATIONNN_501423.visible = changedEventArgs.newValue;


    if (this.LNSPR.getQueryStrings().type === 'C') {
      changedEventArgs.commons.api.vc.viewState.VA_NEXTREADJDATEEE_737423.visible = changedEventArgs.newValue;
      changedEventArgs.commons.api.vc.viewState.VA_TYPEOPERATIONNN_501423.visible = changedEventArgs.newValue;

      changedEventArgs.commons.api.vc.viewState.VA_SPACER2707FOADE_749423.visible = changedEventArgs.newValue;
      changedEventArgs.commons.api.vc.viewState.VA_SPACER2878UBAZR_925423.visible = changedEventArgs.newValue;
    }

    if (this.LNSPR.getQueryStrings().type === 'P' || this.LNSPR.getQueryStrings().type === 'I') {
      if (changedEventArgs.newValue) {
        changedEventArgs.commons.api.vc.viewState.VA_SPACER2707FOADE_749423.visible = false;
      } else {
        changedEventArgs.commons.api.vc.viewState.VA_SPACER2707FOADE_749423.visible = true;
      }

    }

    if (this.LNSPR.getQueryStrings().type === 'U') {
      if (changedEventArgs.newValue) {
        changedEventArgs.commons.api.vc.viewState.VA_SPACER2707FOADE_749423.visible = false;
      } else {
        changedEventArgs.commons.api.vc.viewState.VA_SPACER2707FOADE_749423.visible = true;
      }

    }

    entities.LoanSearchFilter.codCurrency = null;
    entities.LoanSearchFilter.disbursementDate = null;
    entities.LoanSearchFilter.state = null;
    entities.LoanSearchFilter.migratedOperation = null;
    entities.LoanSearchFilter.nextReadjDate = null;
    entities.LoanSearchFilter.type = null;

    changedEventArgs.commons.execServer = false;
  };

  //Entity: LoanSearchFilter
  //LoanSearchFilter.codCurrency (ComboBox) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_CODCURRENCYORMA_221423 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    entities.LoanSearchFilter.seleccionarTodo = false;

    changedEventArgs.commons.api.grid.removeAllRows('LoanList');
    changedEventArgs.commons.execServer = false;
  };

  //Entity: LoanSearchFilter
  //LoanSearchFilter.condition (CheckBox) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_CONDITIONLQYMCH_855423 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;


  };

  //Entity: LoanSearchFilter
  //LoanSearchFilter.disbursementDate (DateField) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_DISBURSEMENTDTE_672423 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    entities.LoanSearchFilter.seleccionarTodo = false;

    changedEventArgs.commons.api.grid.removeAllRows('LoanList');
    changedEventArgs.commons.execServer = false;
  };

  //Entity: ReadjustmentMEntity
  //ReadjustmentMEntity.factor (TextInputBox) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_FACTORGZZGBQQEQ_812423 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    if (entities.ReadjustmentMEntity.sign != null && entities.ReadjustmentMEntity.factor != null) {
      changedEventArgs.commons.api.viewState.disable('VA_PERCENTAGEJSRSR_369423');
      entities.ReadjustmentMEntity.percentage = null;
    } else {
      changedEventArgs.commons.api.viewState.enable('VA_PERCENTAGEJSRSR_369423');
      entities.ReadjustmentMEntity.percentage = null;
    }

    changedEventArgs.commons.execServer = false;

  };

  //Entity: LoanSearchFilter
  //LoanSearchFilter.migratedOperation (TextInputBox) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_MIGRATEDOPERITA_354423 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    entities.LoanSearchFilter.seleccionarTodo = false;

    changedEventArgs.commons.api.grid.removeAllRows('LoanList');
    changedEventArgs.commons.execServer = false;
  };

  //Entity: LoanSearchFilter
  //LoanSearchFilter.nextReadjDate (DateField) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_NEXTREADJDATEEE_737423 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.api.grid.removeAllRows('ReadjustmenMList');
    changedEventArgs.commons.execServer = false;
  };

  //Entity: LoanSearchFilter
  //LoanSearchFilter.numIdentification (TextInputButton) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_NUMIDENTIFICTII_228423 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    entities.LoanSearchFilter.seleccionarTodo = false;

    changedEventArgs.commons.api.grid.removeAllRows('LoanList');
    changedEventArgs.commons.execServer = false;
  };

  //Entity: LoanSearchFilter
  //LoanSearchFilter.numProcedures (TextInputBox) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_NUMPROCEDURESSS_844423 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    entities.LoanSearchFilter.seleccionarTodo = false;

    changedEventArgs.commons.api.grid.removeAllRows('LoanList');
    changedEventArgs.commons.execServer = false;
  };

  //Entity: LoanSearchFilter
  //LoanSearchFilter.office (ComboBox) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_OFFICERVXRGASBK_236423 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    entities.LoanSearchFilter.seleccionarTodo = false;

    changedEventArgs.commons.api.grid.removeAllRows('LoanList');
    changedEventArgs.commons.execServer = false;
  };

  //Entity: LoanSearchFilter
  //LoanSearchFilter.operation (TextInputBox) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_OPERATIONIPSSEI_652423 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    entities.LoanSearchFilter.seleccionarTodo = false;

    changedEventArgs.commons.api.grid.removeAllRows('LoanList');
    changedEventArgs.commons.execServer = false;
  };

  //Entity: ReadjustmenMList
  //ReadjustmenMList.percentage (TextInputBox) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_PERCENTAGEDNCBC_389423 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;


  };

  //Entity: 
  //.percentage (TextInputBox) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_PERCENTAGEJSRSR_369423 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    if (changedEventArgs.newValue != null) {
      changedEventArgs.commons.api.viewState.disable('VA_SIGNKLSEFBDNEKD_114423');
      changedEventArgs.commons.api.viewState.disable('VA_FACTORGZZGBQQEQ_812423');
      changedEventArgs.commons.api.viewState.disable('VA_REFERENCIALHVKA_159423');

      entities.ReadjustmentMEntity.sign = null;
      entities.ReadjustmentMEntity.factor = null;
      entities.ReadjustmentMEntity.referencial = null;
    } else {
      changedEventArgs.commons.api.viewState.enable('VA_SIGNKLSEFBDNEKD_114423');
      changedEventArgs.commons.api.viewState.enable('VA_FACTORGZZGBQQEQ_812423');
      changedEventArgs.commons.api.viewState.enable('VA_REFERENCIALHVKA_159423');
    }


    changedEventArgs.commons.execServer = false;


  };

  //Entity: ReadjustmenMList
  //ReadjustmenMList.referencial (TextInputButton) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_REFERENCIALFBOE_516423 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;


  };

  //Entity: LoanSearchFilter
  //LoanSearchFilter.seleccionarTodo (CheckBox) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_SELECCIONARTOOD_173423 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;

    for (let i: any = 0; i < entities.LoanList.length; i++) {
      changedEventArgs.commons.api.grid.updateRow('LoanList', i, {
        seleccion: changedEventArgs.newValue
      });
    }
  };

  //Entity: LoanList
  //LoanList.seleccion (CheckBox) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_SELECCIONBGDZXY_881423 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;

    for (let i: any = 0; i < entities.LoanList.length; i++) {
      if (entities.LoanList[i].id === changedEventArgs.rowData.id) {
        changedEventArgs.commons.api.grid.updateRow('LoanList', i, {
          seleccion: (changedEventArgs.rowData.seleccion !== true ? true : false)
        });
        break;
      }
    }
  };



  //Entity: ReadjustmenMList
  //ReadjustmenMList.sign (ComboBox) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_SIGNHCAEEHGEZFU_341423 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
  };

  //Entity: 
  //.sign (ComboBox) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_SIGNKLSEFBDNEKD_114423 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    entities.ReadjustmentMEntity.factor = null;
    changedEventArgs.commons.execServer = false;
  };

  //Entity: LoanSearchFilter
  //LoanSearchFilter.state (ComboBox) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_STATEGXSFXFHGCB_183423 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    entities.LoanSearchFilter.seleccionarTodo = false;

    changedEventArgs.commons.api.grid.removeAllRows('LoanList');
    changedEventArgs.commons.execServer = false;
  };

  //Entity: ReadjustmentMEntity
  //ReadjustmentMEntity.tasaMin (CheckBox) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_TASAMINHABRDVAM_870423 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    if (changedEventArgs.newValue == 'S') {
      changedEventArgs.commons.api.viewState.enable('VA_PERCENTAGEJSRSR_369423');
      changedEventArgs.commons.api.viewState.disable('VA_REFERENCIALHVKA_159423');
      changedEventArgs.commons.api.viewState.disable('VA_SIGNKLSEFBDNEKD_114423');
      changedEventArgs.commons.api.viewState.disable('VA_FACTORGZZGBQQEQ_812423');
      entities.ReadjustmentMEntity.referencial = null;
      entities.ReadjustmentMEntity.sign = null;
      entities.ReadjustmentMEntity.factor = null;

    } else {

      changedEventArgs.commons.api.viewState.enable('VA_REFERENCIALHVKA_159423');
      changedEventArgs.commons.api.viewState.enable('VA_SIGNKLSEFBDNEKD_114423');
      changedEventArgs.commons.api.viewState.enable('VA_FACTORGZZGBQQEQ_812423');
      changedEventArgs.commons.api.viewState.enable('VA_PERCENTAGEJSRSR_369423');
      entities.ReadjustmentMEntity.percentage = null;
    }
  };


  //Entity: LoanSearchFilter
  //LoanSearchFilter.type (ComboBox) View: LoanSearchForm
  //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
  task_change_VA_TYPEOPERATIONNN_501423 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.api.grid.removeAllRows('ReadjustmenMList');
    changedEventArgs.commons.execServer = false;
  };

  // (Button) 
  task_executeCommand_CM_LOANSEAR_PN2 = async (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    // executeCommandEventArgs.commons.api.viewState.disableValidation('VA_ITEMUMGHQQCSAYX_466423');
    let datos: any = entities.ReadjustmenMList;

    let execServer: any = true;
    let contar: any = 0;

    for (let i: any = 0; i < datos.length; i++) {
      if (datos[i].seleccion) {
        contar++;
      }
    }

    if (contar == 0) {
      executeCommandEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_DEBESELRS_93935', false, null, this.LNSPR.timer);
      executeCommandEventArgs.commons.execServer = false;
      return;
    }

    let response: any = await firstValueFrom(
      executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("LNSPR.MSG_LNSPR_ESTSEGUDT_45931")
    );

    switch (response.buttonIndex) {

      case 0: //cancel

        executeCommandEventArgs.commons.execServer = false;
        break;
      case 1:

        executeCommandEventArgs.commons.execServer = execServer;
        return true;
        break;
    }
  };

  //Start signature to Callback event to CM_LOANSEAR_PN2
  task_executeCommandCallback_CM_LOANSEAR_PN2 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    if (executeCommandCallbackEventArgs.success) {
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_TRANSACEC_84918', false, null, this.LNSPR.timer);
      //executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_LOANSEAR_PN2');
      executeCommandCallbackEventArgs.commons.api.grid.removeAllRows('ReadjustmenMList');

      entities.ReadjustmentMEntity.item = null;
      entities.ReadjustmentMEntity.readjustDate = null;
      entities.ReadjustmentMEntity.referencial = null;
      entities.ReadjustmentMEntity.sign = null;
      entities.ReadjustmentMEntity.factor = null;
      entities.ReadjustmentMEntity.percentage = null;
      entities.ReadjustmentMEntity.tasaMin = 'N';
      entities.ReadjustmentMEntity.mantieneCuota = 'N';

      //Field: Código cliente
      if (entities.LoanSearchFilter.numIdentification != null) {
        entities.LoanSearchFilter.numIdentification = null;
      }

      //Field: Num. préstamo
      if (entities.LoanSearchFilter.operation != null) {
        entities.LoanSearchFilter.operation = null;
      }

      //Field: Num. trámite
      if (entities.LoanSearchFilter.numProcedures != null) {
        entities.LoanSearchFilter.numProcedures = null;
      }

      //Field: Oficina
      if (entities.LoanSearchFilter.office != null) {
        entities.LoanSearchFilter.office = null;
      }

      //Field: Moneda
      if (entities.LoanSearchFilter.codCurrency != null) {
        entities.LoanSearchFilter.codCurrency = null;
      }

      //Field: Fecha desembolso
      if (entities.LoanSearchFilter.disbursementDate != null) {
        entities.LoanSearchFilter.disbursementDate = null;
      }

      //Field: Próximo reajuste
      if (entities.LoanSearchFilter.nextReadjDate != null) {
        entities.LoanSearchFilter.nextReadjDate = null;
      }

      //Field: Estado préstamo
      if (entities.LoanSearchFilter.state != null) {
        entities.LoanSearchFilter.state = null;
      }

      //Field: Préstamo migrado
      if (entities.LoanSearchFilter.migratedOperation != null) {
        entities.LoanSearchFilter.migratedOperation = null;
      }

      //Field: Tipo operación
      if (entities.LoanSearchFilter.type != null) {
        entities.LoanSearchFilter.type = null;
      }

    } else {
      entities.ReadjustmenMList.pop();
    }
  };


  //BtnGuardar (Button) 
  task_executeCommand_CM_LOANSEAR_R04 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    let datos: any = entities.ReadjustmenMList;

    for (let i: any = 0; i < datos.length; i++) {
      let dato: any = datos[i];
      if (!dato.seleccion) {
        dato.seleccion = false;
      }
    }
    executeCommandEventArgs.commons.execServer = true;
  };



  //Start signature to Callback event to CM_LOANSEAR_R04
  task_executeCommandCallback_CM_LOANSEAR_R04 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    if (executeCommandCallbackEventArgs.success) {
      executeCommandCallbackEventArgs.commons.api.viewState.enable('CM_LOANSEAR_PN2');
    }
  };


  // (Button) 
  task_executeCommand_CM_TLNSPRMF_22S = async (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = true;
    lote = entities.MassivePayments[0].lotePM;

    let response: any = await firstValueFrom(
      executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("LNSPR.MSG_LNSPR_SEPAGARAD_24782")
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
  };

  //Start signature to Callback event to CM_TLNSPRMF_22S
  task_executeCommandCallback_CM_TLNSPRMF_22S = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {

    if (executeCommandCallbackEventArgs.success) {
      executeCommandCallbackEventArgs.commons.api.viewState.disable("CM_TLNSPRMF_JP1");
      executeCommandCallbackEventArgs.commons.api.viewState.enable("CM_TLNSPRMF_22S");
      executeCommandCallbackEventArgs.commons.api.viewState.show('CM_TLNSPRMF_22S');
      executeCommandCallbackEventArgs.commons.api.viewState.enable("CM_TLNSPRMF_3SN");
      executeCommandCallbackEventArgs.commons.api.viewState.show("CM_TLNSPRMF_3SN");
      executeCommandCallbackEventArgs.commons.api.viewState.hide("CM_TLNSPRMF_TP8");
      executeCommandCallbackEventArgs.commons.api.viewState.hide("CM_TLNSPRMF_22S");

      /* if (entities.MassivePayments.length > 0) {
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_ALGUNASEO_37894",false,null,this.LNSPR.timer);
        } else {*/
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_TRANSACEC_84918", false, null, this.LNSPR.timer);
      // }
      executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_BZ71_NGV26');
    }
  };


  // (Button) 
  task_executeCommand_CM_TLNSPRMF_3SN = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = false;

    let idAux: any = this.cobis.container.tabs.getCurrentTab().id;
    let urlAux: any = this.cobis.container.tabs.getCurrentTab().url;
    let nameAux: any = undefined;

    if (entities.LoanSearchFilter.mode == 'C') {
      nameAux = this.cobis.translate("LNSPR.LBL_LNSPR_CAMBIOTAS_63595");
    } else {
      nameAux = this.cobis.translate("LNSPR.LBL_LNSPR_PAGOSMAOS_76833");
    }


    this.LNSPR.container.changeCurrentTab(idAux, urlAux, nameAux, true);

    /*entities.LoanSearchFilter.archivo = null;
   // entities.ErrorMassivePayments = null;
    listaSeleccionados = null;
    executeCommandEventArgs.commons.api.grid.removeAllRows('LoanList');
    executeCommandEventArgs.commons.api.viewState.show('G_LOANSEAHHC_140423');
    executeCommandEventArgs.commons.api.viewState.hide('G_LOANSEAHHC_356423');
    executeCommandEventArgs.commons.api.viewState.disable('CM_TLNSPRMF_22S');
    executeCommandEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_TP8');
    executeCommandEventArgs.commons.api.viewState.disable('CM_TLNSPRMF_JP1');
    executeCommandEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_PSF');
    executeCommandEventArgs.commons.api.viewState.show("CM_TLNSPRMF_3SN");
    executeCommandEventArgs.commons.api.viewState.enable('VA_NUMIDENTIFICTII_228423');
    executeCommandEventArgs.commons.api.viewState.enable('VA__174423');
    executeCommandEventArgs.commons.api.vc.viewState.VA_ARCHIVOJFAGWZSQ_219423.visible = true;
    executeCommandEventArgs.commons.api.grid.hideToolBarButton('QV_EF50_UVK53', 'CEQV_201QV_EF50_UVK53_388');
    executeCommandEventArgs.commons.api.viewState.enable('VA_ARCHIVOJFAGWZSQ_219423');
    executeCommandEventArgs.commons.api.vc.removeFile('VA_ARCHIVOJFAGWZSQ_219423');
    executeCommandEventArgs.commons.execServer = false;
    
    //Field: Código cliente
    if (entities.LoanSearchFilter.numIdentification != null) {
        entities.LoanSearchFilter.numIdentification = null;
    }

    //Field: Num. préstamo
    if (entities.LoanSearchFilter.operation != null) {
        entities.LoanSearchFilter.operation = null;
    }

    //Field: Num. trámite
    if (entities.LoanSearchFilter.numProcedures != null) {
        entities.LoanSearchFilter.numProcedures = null;
    }

    //Field: Oficina
    if (entities.LoanSearchFilter.office != null) {
        entities.LoanSearchFilter.office = null;
    }

    //Field: Moneda
    if (entities.LoanSearchFilter.codCurrency != null) {
        entities.LoanSearchFilter.codCurrency = null;
    }

    //Field: Fecha desembolso
    if (entities.LoanSearchFilter.disbursementDate != null) {
        entities.LoanSearchFilter.disbursementDate = null;
    }

    //Field: Próximo reajuste
    if (entities.LoanSearchFilter.nextReadjDate != null) {
        entities.LoanSearchFilter.nextReadjDate = null;
    }

    //Field: Estado préstamo
    if (entities.LoanSearchFilter.state != null) {
        entities.LoanSearchFilter.state = null;
    }

    //Field: Préstamo migrado
    if (entities.LoanSearchFilter.migratedOperation != null) {
        entities.LoanSearchFilter.migratedOperation = null;
    }

    //Field: Tipo operación
    if (entities.LoanSearchFilter.type != null) {
        entities.LoanSearchFilter.type = null;
    }
*/
  };

  // (Button) 
  task_executeCommand_CM_TLNSPRMF_9NN = async (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    let response: any = await firstValueFrom(
      executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("LNSPR.MSG_LNSPR_ESTASEGSR_43909")
    );




    //executeCommandEventArgs.commons.serverParameters.entityName = true;

    switch (response.buttonIndex) {

      case 0: //cancel

        executeCommandEventArgs.commons.execServer = false;
        break;
      case 1: //accept
        executeCommandEventArgs.commons.api.viewState.show('CM_TLNSPRMF_NMS');
        executeCommandEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_9NN');
        executeCommandEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_F7N');

        executeCommandEventArgs.commons.execServer = true;
        return true;
        break;
    }
  };



  //Start signature to Callback event to CM_TLNSPRMF_9NN
  task_executeCommandCallback_CM_TLNSPRMF_9NN = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    let datos: any = entities.MassiveCommissions;
    let contador: any = 0;

    for (let i: any = 0; i < datos.length; i++) {
      let dato: any = datos[i];
      if (dato.mistake) {
        contador++;
      }
    }

    if (contador > 0) {
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_ALGUNASEN_20984", false, null, this.LNSPR.timer);

    } else {
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_TRANSACEC_84918', false, null, this.LNSPR.timer);

    }
  };



  // (Button) 
  task_executeCommand_CM_TLNSPRMF_JP1 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.execServer = true;

  };

  //Start signature to Callback event to CM_TLNSPRMF_JP1
  task_executeCommandCallback_CM_TLNSPRMF_JP1 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {
    //here your code
    if (executeCommandCallbackEventArgs.success == true) {
      //var datos = entities.MassivePayments;
      // var contador = 0;
      executeCommandCallbackEventArgs.commons.api.viewState.disable("CM_TLNSPRMF_JP1");
      executeCommandCallbackEventArgs.commons.api.viewState.show('CM_TLNSPRMF_22S');
      executeCommandCallbackEventArgs.commons.api.viewState.enable("CM_TLNSPRMF_22S");
      executeCommandCallbackEventArgs.commons.api.viewState.show("CM_TLNSPRMF_TP8");
      executeCommandCallbackEventArgs.commons.api.viewState.enable("CM_TLNSPRMF_TP8");
      executeCommandCallbackEventArgs.commons.api.viewState.hide("CM_TLNSPRMF_3SN");

      /*for (let i = 0; i < datos.length; i++) {
        let dato = datos[i];
        if (dato.errorPM) {
          contador++;
        }
      }*/

      if (entities.ErrorMassivePayments.length >= 2) {
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_ALGUNASEO_37894", false, null, this.LNSPR.timer);

      } else {
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_TRANSMION_38404", false, null, this.LNSPR.timer);
      }
    }

  };


  // (Button) 
  task_executeCommand_CM_TLNSPRMF_NMS = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    entities.LoanSearchFilter.archivo = null;
    entities.LoanSearchFilter.numIdentification = null;
    entities.LoanSearchFilter.operation = null;
    entities.LoanSearchFilter.numProcedures = null;
    entities.LoanSearchFilter.office = null;
    entities.LoanSearchFilter.numProcedures = null;
    entities.LoanSearchFilter.avanceSearch = null;
    entities.LoanSearchFilter.seleccionarTodo = null;
    executeCommandEventArgs.commons.api.grid.removeAllRows('MassiveCommissions');
    executeCommandEventArgs.commons.api.grid.removeAllRows('LoanList');
    executeCommandEventArgs.commons.api.viewState.enable('VA_ARCHIVOJFAGWZSQ_219423');
    executeCommandEventArgs.commons.api.viewState.show('G_LOANSEAHHC_140423');
    executeCommandEventArgs.commons.api.viewState.hide('CEQV_201QV_EF50_UVK53_197');
    executeCommandEventArgs.commons.api.viewState.hide('G_LOANSEARCR_617423');
    executeCommandEventArgs.commons.api.viewState.enable('VA__174423');
    executeCommandEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_9NN');
    // TODO - REFACTORIZAR - FUNCION NO EXISTE
    //    executeCommandEventArgs.commons.api.vc.removeFile('VA_ARCHIVOJFAGWZSQ_219423');
    executeCommandEventArgs.commons.api.grid.hideToolBarButton('QV_EF50_UVK53', 'CEQV_201QV_EF50_UVK53_197');
    executeCommandEventArgs.commons.api.viewState.enable('VA_NUMIDENTIFICTII_228423');

    // executeCommandEventArgs.commons.api.grid.refresh('QV_PY15_EUR25');
    listaErrores = [];
    entities.MassiveCommissionsMistakes = null;
    executeCommandEventArgs.commons.execServer = false;

  };


  // (Button) 
  task_executeCommand_CM_TLNSPRMF_TP8 = async (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    let idAux: any = this.cobis.container.tabs.getCurrentTab().id;
    let urlAux: any = this.cobis.container.tabs.getCurrentTab().url;
    let nameAux: any = this.cobis.translate("LNSPR.LBL_LNSPR_PAGOSMAOS_76833");

    // executeCommandEventArgs.commons.execServer = true;
    let response: any = await firstValueFrom(
      executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("LNSPR.MSG_LNSPR_VAASALITS_91042")
    );

    switch (response.buttonIndex) {

      case 0: //cancel
        executeCommandEventArgs.commons.execServer = false;
        break;
      case 1: //accept
        executeCommandEventArgs.commons.execServer = true;

        this.LNSPR.container.changeCurrentTab(idAux, urlAux, nameAux, true);
        return true;
        break;
    }
  };

  //Entity: LoanSearchFilter
  //LoanSearchFilter.archivo (FileUpload) View: LoanSearchForm
  //Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
  task_executeCommand_VA_ARCHIVOJFAGWZSQ_219423 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    let origen: any = this.LNSPR.getQueryStrings().type;
    let fileUpload: any = executeCommandEventArgs.commons.api.viewState.fileUpload('VA_ARCHIVOJFAGWZSQ_219423');

    //modificación de parámetros en caso de necesitarlo
    //fileUpload.setMaxSizeInMB(20);
    fileUpload.setConfirmUpload(false);
    fileUpload.setRelativePath('loans-files');

    //Search form clean

    //Field: Código cliente
    if (entities.LoanSearchFilter.numIdentification != null) {
      entities.LoanSearchFilter.numIdentification = null;
    }

    //Field: Num. préstamo
    if (entities.LoanSearchFilter.operation != null) {
      entities.LoanSearchFilter.operation = null;
    }

    //Field: Num. trámite
    if (entities.LoanSearchFilter.numProcedures != null) {
      entities.LoanSearchFilter.numProcedures = null;
    }

    //Field: Oficina
    if (entities.LoanSearchFilter.office != null) {
      entities.LoanSearchFilter.office = null;
    }

    //Field: Moneda
    if (entities.LoanSearchFilter.codCurrency != null) {
      entities.LoanSearchFilter.codCurrency = null;
    }

    //Field: Fecha desembolso
    if (entities.LoanSearchFilter.disbursementDate != null) {
      entities.LoanSearchFilter.disbursementDate = null;
    }

    //Field: Próximo reajuste
    if (entities.LoanSearchFilter.nextReadjDate != null) {
      entities.LoanSearchFilter.nextReadjDate = null;
    }

    //Field: Estado préstamo
    if (entities.LoanSearchFilter.state != null) {
      entities.LoanSearchFilter.state = null;
    }

    //Field: Préstamo migrado
    if (entities.LoanSearchFilter.migratedOperation != null) {
      entities.LoanSearchFilter.migratedOperation = null;
    }

    //Field: Tipo operación
    if (entities.LoanSearchFilter.type != null) {
      entities.LoanSearchFilter.type = null;
    }


    //Readjust data clean

    //Field: Rubro
    if (entities.ReadjustmentMEntity.item != null) {
      entities.ReadjustmentMEntity.item = null;
    }

    //Field: Reajustar el
    if (entities.ReadjustmentMEntity.readjustDate != null) {
      entities.ReadjustmentMEntity.readjustDate = null;
    }

    //Field: Referencial
    if (entities.ReadjustmentMEntity.referencial != null) {
      entities.ReadjustmentMEntity.referencial = null;
    }

    //Field: Signo
    if (entities.ReadjustmentMEntity.sign != null) {
      entities.ReadjustmentMEntity.sign = null;
    }

    //Field: Factor
    if (entities.ReadjustmentMEntity.factor != null) {
      entities.ReadjustmentMEntity.factor = null;
    }

    //Field: Porcentaje
    if (entities.ReadjustmentMEntity.percentage != null) {
      entities.ReadjustmentMEntity.percentage = null;
    }

    //Massive Commissions data clean

    //Field: Operacion
    if (entities.MassiveCommissions.operation != null) {
      entities.MassiveCommissions.operation = null;
    }


    executeCommandEventArgs.commons.api.viewState.disable('VA__174423');
    executeCommandEventArgs.commons.api.viewState.disable('VA_NUMIDENTIFICTII_228423');

    if (entities.LoanSearchFilter.mode != 'U') {
      executeCommandEventArgs.commons.execServer = true;
    } else {
      executeCommandEventArgs.commons.execServer = false;
    }
  };


  //Start signature to Callback event to VA_ARCHIVOJFAGWZSQ_219423
  task_executeCommandCallback_VA_ARCHIVOJFAGWZSQ_219423 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
  ) => {

    if (executeCommandCallbackEventArgs.success) {

      if (this.LNSPR.getQueryStrings().type == 'I') {
        executeCommandCallbackEventArgs.commons.api.viewState.show('G_LOANSEARCR_617423');
        executeCommandCallbackEventArgs.commons.api.viewState.hide('G_LOANSEAHHC_140423');
        executeCommandCallbackEventArgs.commons.api.viewState.enable('CM_LOANSEAR_PN2');
        executeCommandCallbackEventArgs.commons.api.viewState.hide('CM_LOANSEAR_R04');
        executeCommandCallbackEventArgs.commons.api.viewState.show('CM_TLNSPRMF_9NN');
        executeCommandCallbackEventArgs.commons.api.viewState.show('CM_TLNSPRMF_NMS');

      } else if (this.LNSPR.getQueryStrings().type == 'P') {
        executeCommandCallbackEventArgs.commons.api.viewState.show('G_LOANSEAHHC_356423');
        executeCommandCallbackEventArgs.commons.api.viewState.enable('G_LOANSEAHHC_356423');
        executeCommandCallbackEventArgs.commons.api.viewState.hide('G_LOANSEAHHC_140423');
        executeCommandCallbackEventArgs.commons.api.viewState.hide('QV_EF50_UVK53');
        executeCommandCallbackEventArgs.commons.api.viewState.enable('CM_TLNSPRMF_JP1');
        executeCommandCallbackEventArgs.commons.api.viewState.show('CM_TLNSPRMF_JP1');
        executeCommandCallbackEventArgs.commons.api.viewState.show('CM_TLNSPRMF_22S');
        executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_TLNSPRMF_22S');
        executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_TLNSPRMF_TP8');
        executeCommandCallbackEventArgs.commons.api.vc.viewState.VA_ARCHIVOJFAGWZSQ_219423.visible = true;

        //Bloquea Cabecera
        executeCommandCallbackEventArgs.commons.api.viewState.disable('VA_NUMIDENTIFICTII_228423');
        executeCommandCallbackEventArgs.commons.api.viewState.disable('VA__174423');

      } else if (this.LNSPR.getQueryStrings().type == 'C') {
        executeCommandCallbackEventArgs.commons.api.viewState.disable('VA_READJUSTDATEHXG_933423');
        executeCommandCallbackEventArgs.commons.api.viewState.disable('VA_REFERENCIALHVKA_159423');
        executeCommandCallbackEventArgs.commons.api.viewState.disable('VA_SIGNKLSEFBDNEKD_114423');
        executeCommandCallbackEventArgs.commons.api.viewState.disable('VA_FACTORGZZGBQQEQ_812423');
        executeCommandCallbackEventArgs.commons.api.viewState.disable('VA_PERCENTAGEJSRSR_369423');
        executeCommandCallbackEventArgs.commons.api.viewState.disable('VA_MANTIENECUOTAAA_735423');

      } else {
        executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_TLNSPRMF_JP1');
        executeCommandCallbackEventArgs.commons.api.grid.removeAllRows("MassivePayments");
      }

    } else {
      executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.LBL_LNSPR_VERIFIQRL_10425', false, null, this.LNSPR.timer);

    }
  };




  //Entity: LoanSearchFilter
  //LoanSearchFilter. (Button) View: LoanSearchForm
  //Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
  task_executeCommand_VA_VAVABUTTONNJ9LB_637423 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.api.viewState.show('G_LOANSEAHHC_140423');

    executeCommandEventArgs.commons.execServer = false;
    //executeCommandEventArgs.commons.serverParameters.LoanSearchFilter = true;

  };



  //Entity: LoanSearchFilter
  //LoanSearchFilter. (Button) View: LoanSearchForm
  //Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
  task_executeCommand_VA__174423 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
  ) => {
    executeCommandEventArgs.commons.api.viewState.show('CM_TLNSPRMF_3SN');
    listaErrores = [];

    entities.MassiveCommissionsMistakes = null;
    executeCommandEventArgs.commons.execServer = false;

    entities.ErrorMassivePayments = null;
    executeCommandEventArgs.commons.api.grid.refresh('QV_PY15_EUR25');

  };

  //LoanListQuery Entity: LoanList
  task_executeQuery_Q_LOANSILT_NX50 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let execServer: any = true;
    executeQueryEventArgs.commons.api.grid.hideToolBarButton('QV_EF50_UVK53', 'CEQV_201QV_EF50_UVK53_197');
    executeQueryEventArgs.commons.api.grid.hideToolBarButton('QV_EF50_UVK53', 'CEQV_201QV_EF50_UVK53_388');
    executeQueryEventArgs.commons.api.grid.hideToolBarButton('QV_EF50_UVK53', 'CEQV_201QV_EF50_UVK53_351');

    executeQueryEventArgs.commons.api.viewState.show('G_LOANSEAHHC_140423');
    executeQueryEventArgs.commons.api.viewState.hide('G_LOANSEARCR_617423');
    executeQueryEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_9NN');
    executeQueryEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_F7N');
    //oculta btn carga archivo
    executeQueryEventArgs.commons.api.viewState.disable('VA_ARCHIVOJFAGWZSQ_219423');

    let model: any = executeQueryEventArgs.commons.api.vc.model;
    model.LoanSearchFilter.codCurrecy = model.LoanSearchFilter.codCurrecy ? model.LoanSearchFilter.codCurrecy : null;
    model.LoanSearchFilter.migratedOperation = model.LoanSearchFilter.migratedOperation ? model.LoanSearchFilter.migratedOperation : null;
    model.LoanSearchFilter.numIdentification = model.LoanSearchFilter.numIdentification ? model.LoanSearchFilter.numIdentification : null;
    model.LoanSearchFilter.numProcedures = model.LoanSearchFilter.numProcedures ? model.LoanSearchFilter.numProcedures : null;
    model.LoanSearchFilter.office = model.LoanSearchFilter.office ? model.LoanSearchFilter.office : null;
    model.LoanSearchFilter.type = model.LoanSearchFilter.type ? model.LoanSearchFilter.type : null;
    model.LoanSearchFilter.operation = model.LoanSearchFilter.operation ? model.LoanSearchFilter.operation : null;

    if ((model.LoanSearchFilter.numIdentification) ||
      (model.LoanSearchFilter.operation) ||
      (model.LoanSearchFilter.numProcedures) ||
      (model.LoanSearchFilter.office)) {

      execServer = true;
      executeQueryEventArgs.parameters.numIdentification = model.LoanSearchFilter.numIdentification;
      executeQueryEventArgs.parameters.loanBankID = model.LoanSearchFilter.operation;
      executeQueryEventArgs.parameters.numProcedure = model.LoanSearchFilter.numProcedures;
      executeQueryEventArgs.parameters.office = model.LoanSearchFilter.office;
      executeQueryEventArgs.parameters.currency = model.LoanSearchFilter.codCurrency;
      executeQueryEventArgs.parameters.disbursementDate = model.LoanSearchFilter.disbursementDate;
      executeQueryEventArgs.parameters.state = model.LoanSearchFilter.state;
      executeQueryEventArgs.parameters.migratedOperation = model.LoanSearchFilter.migratedOperation;
      executeQueryEventArgs.parameters.categoryGroup = "10";
      executeQueryEventArgs.parameters.type = model.LoanSearchFilter.type;
      executeQueryEventArgs.commons.serverParameters.MassiveCommissionsMistakes = true;
      executeQueryEventArgs.parameters.MassiveCommissionsMistakes = model.MassiveCommissionsMistakes;

      executeQueryEventArgs.parameters.selectedOperationsArray = listaSeleccionados;
      executeQueryEventArgs.commons.serverParameters.ErrorMassivePayments = true;
      executeQueryEventArgs.parameters.ErrorMassivePayments = model.ErrorMassivePayments;
      if (this.LNSPR.getQueryStrings().type == 'U') {
        executeQueryEventArgs.parameters.categoryGroup = "2";
      }

      if (this.LNSPR.getQueryStrings().type === 'P') {
        executeQueryEventArgs.commons.api.viewState.disable('VA__174423');
      }

      executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_EF50_UVK53', ['numIdentification',
          'loanBankID',
          'numProcedure',
          'office',
          'currency',
          'disbursementDate',
          'state',
          'migratedOperation',
          'categoryGroup'
        ],
        executeQueryEventArgs);
    } else {
      executeQueryEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_DEBEINGTA_48173', false, null, this.LNSPR.timer);
      model.ErrorMassivePayments = null;
      model.MassiveCommissionsMistakes = null;

      execServer = false;
    }


    executeQueryEventArgs.commons.execServer = execServer;
  };


  //Start signature to Callback event to Q_LOANSILT_NX50
  task_executeQueryCallback_Q_LOANSILT_NX50 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    if (entities.LoanList.length > 0) {
      if (this.LNSPR.getQueryStrings().type === 'I') {
        executeQueryCallbackEventArgs.commons.api.grid.showToolBarButton('QV_EF50_UVK53', 'CEQV_201QV_EF50_UVK53_197');
      } else if (this.LNSPR.getQueryStrings().type === 'P') {
        executeQueryCallbackEventArgs.commons.api.grid.showToolBarButton('QV_EF50_UVK53', 'CEQV_201QV_EF50_UVK53_388');
        executeQueryCallbackEventArgs.commons.api.viewState.disable('VA_ARCHIVOJFAGWZSQ_219423');

      } else if (this.LNSPR.getQueryStrings().type === 'C') {
        executeQueryCallbackEventArgs.commons.api.grid.showToolBarButton('QV_EF50_UVK53', 'CEQV_201QV_EF50_UVK53_351');
      }
    }
  };


  //MassiveCommissionsQuery Entity: MassiveCommissions
  task_executeQuery_Q_MASSSEOO_AX15 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.execServer = true;

  };

  //MassivePaymentsQuery Entity: MassivePayments
  task_executeQuery_Q_MASSTENM_SJ71 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.lote = lote;

    //executeQueryEventArgs.commons.serverParameters.MassivePayments = true;

    //Paginación
    executeQueryEventArgs.parameters.pagSec = 0;

    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_BZ71_NGV26', ['sequentialPM'], executeQueryEventArgs);
    if (executeQueryEventArgs.config?.appendRecords) {
      let ultimaFila: any = executeQueryEventArgs.commons.api.grid.lastRow('QV_BZ71_NGV26');
      executeQueryEventArgs.parameters.pagSec = ultimaFila.sequentialPM;
    }
    executeQueryEventArgs.commons.execServer = true;
  };

  //ReadjustmenMListQuery Entity: ReadjustmenMList
  task_executeQuery_Q_READJUSM_7240 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.api.grid.removeAllRows('ReadjustmenMList');

    if ((executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.numIdentification !== null &&
        executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.numIdentification !== undefined &&
        executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.numIdentification !== '') ||
      (executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.operation !== null &&
        executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.operation !== undefined &&
        executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.operation !== '') ||
      (executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.numProcedures !== null &&
        executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.numProcedures !== undefined &&
        executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.numProcedures !== '') ||
      (executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.office !== null &&
        executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.office !== undefined &&
        executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.office !== '')) {

      executeQueryEventArgs.parameters.numIdentification = executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.numIdentification;
      executeQueryEventArgs.parameters.operation = executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.operation;
      executeQueryEventArgs.parameters.numProcedure = executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.numProcedures;
      executeQueryEventArgs.parameters.office = executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.office;
      executeQueryEventArgs.parameters.currency = executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.codCurrency;
      executeQueryEventArgs.parameters.disbursementDate = executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.disbursementDate;
      executeQueryEventArgs.parameters.state = executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.state;
      executeQueryEventArgs.parameters.migratedOperation = executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.migratedOperation;
      executeQueryEventArgs.parameters.type = executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter.type;
      executeQueryEventArgs.parameters.categoryGroup = '10';

      executeQueryEventArgs.commons.api.parentVc = undefined;
      executeQueryEventArgs.commons.api.navigation.customDialogParameters = {};
      executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().LoanSearchFilter = executeQueryEventArgs.commons.api.vc.model.LoanSearchFilter;
      executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().ReadjustmentMEntity = executeQueryEventArgs.commons.api.vc.model.ReadjustmentMEntity;

      executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_EF50_UVK53', ['numIdentification',
          'operation',
          'categoryGroup'
        ],
        executeQueryEventArgs);

      executeQueryEventArgs.commons.execServer = true;

    } else {
      executeQueryEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_DEBEINGTA_48173', false, null, this.LNSPR.timer);
      executeQueryEventArgs.commons.execServer = false;
    }
  };


  //Start signature to Callback event to Q_READJUSM_7240
  task_executeQueryCallback_Q_READJUSM_7240 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
  ) => {
    if (entities.ReadjustmenMList.length > 0) {
      if (entities.LoanSearchFilter.archivo != null) {
        entities.LoanSearchFilter.archivo = null;
      }

      //Readjust data clean

      //Field: Rubro
      if (entities.ReadjustmentMEntity.item != null) {
        entities.ReadjustmentMEntity.item = null;
      }

      //Field: Reajustar el
      if (entities.ReadjustmentMEntity.readjustDate != null) {
        entities.ReadjustmentMEntity.readjustDate = null;
      }

      //Field: Referencial
      if (entities.ReadjustmentMEntity.referencial != null) {
        entities.ReadjustmentMEntity.referencial = null;
      }

      //Field: Signo
      if (entities.ReadjustmentMEntity.sign != null) {
        entities.ReadjustmentMEntity.sign = null;
      }

      //Field: Factor
      if (entities.ReadjustmentMEntity.factor != null) {
        entities.ReadjustmentMEntity.factor = null;
      }

      //Field: Porcentaje
      if (entities.ReadjustmentMEntity.percentage != null) {
        entities.ReadjustmentMEntity.percentage = null;
      }

      executeQueryCallbackEventArgs.commons.api.viewState.enable('CM_LOANSEAR_R04'); //Commando Guardar
      //executeQueryCallbackEventArgs.commons.api.viewState.enable('CM_LOANSEAR_PN2');//Commando Aplicar
    } else {
      executeQueryCallbackEventArgs.commons.api.viewState.disable('CM_LOANSEAR_R04'); //Commando Guardar
      //executeQueryCallbackEventArgs.commons.api.viewState.disable('CM_LOANSEAR_PN2');//Commando Aplicar
    }
  };

  //gridCommand (Button) QueryView: QV_EF50_UVK53
  //Evento GridCommand: Sirve para personalizar la acción que realizan los botones de Grilla.
  task_gridCommand_CEQV_201QV_EF50_UVK53_197 = (
    entities: Model,
    gridExecuteCommandEventArgs: CobisModelGridCommandExecuteEventArgs
  ) => {
    let nav: any = gridExecuteCommandEventArgs.commons.api.navigation;
    let auxCont: any = 0;

    for (let i: any = 0; i < entities.LoanList.length; i++) {
      if (entities.LoanList[i].seleccion) {
        auxCont = auxCont + 1;
      }
    }

    if (auxCont > 0) {
      nav.label = this.cobis.translate('LNSPR.LBL_LNSPR_INGRESOVS_19444');
      nav.address = {
        moduleId: 'LNSPR',
        subModuleId: 'OPRTN',
        taskId: 'T_LNSPRKWSPLJPI_575',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_PROJECTORC_636575'
      };

      nav.queryParameters = {
        mode: 2
      };

      nav.modalProperties = {
        size: 'md',
        callFromGrid: false
      };

      nav.openModalWindow(gridExecuteCommandEventArgs.commons.controlId, null);
    } else {
      gridExecuteCommandEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_DEBESELRS_93935', false, null, this.LNSPR.timer);
    }

    gridExecuteCommandEventArgs.commons.execServer = false;
  };

  //gridCommand (Button) QueryView: QV_EF50_UVK53
  //Evento GridCommand: Sirve para personalizar la acción que realizan los botones de Grilla.
  task_gridCommand_CEQV_201QV_EF50_UVK53_351 = (
    entities: Model,
    gridExecuteCommandEventArgs: CobisModelGridCommandExecuteEventArgs
  ) => {
    let nav: any = gridExecuteCommandEventArgs.commons.api.navigation;
    let auxCont: any = 0;

    for (let i: any = 0; i < entities.LoanList.length; i++) {
      if (entities.LoanList[i].seleccion) {
        auxCont = auxCont + 1;
      }
    }

    if (auxCont > 0) {} else {
      gridExecuteCommandEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_DEBESELRS_93935', false, null, this.LNSPR.timer);
    }

    gridExecuteCommandEventArgs.commons.execServer = false;
  };

  //gridCommand (Button) QueryView: QV_EF50_UVK53
  //Evento GridCommand: Sirve para personalizar la acción que realizan los botones de Grilla.
  task_gridCommand_CEQV_201QV_EF50_UVK53_388 = (
    entities: Model,
    gridExecuteCommandEventArgs: CobisModelGridCommandExecuteEventArgs
  ) => {
    let nav: any = gridExecuteCommandEventArgs.commons.api.navigation;
    let auxCont: any = 0;

    for (let i: any = 0; i < entities.LoanList.length; i++) {
      if (entities.LoanList[i].seleccion) {
        auxCont = auxCont + 1;
      }
    }

    if (auxCont > 0) {
      nav.label = this.cobis.translate('LNSPR.LBL_LNSPR_INGRESOGA_95398');
      nav.address = {
        moduleId: 'LNSPR',
        subModuleId: 'OPRTN',
        taskId: 'T_LNSPRZYRPKNSX_507',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_PAYMENTSGR_815507'
      };

      nav.queryParameters = {
        mode: 2
      };

      nav.modalProperties = {
        size: 'md',
        callFromGrid: false
      };

      nav.openModalWindow(gridExecuteCommandEventArgs.commons.controlId, null);
    } else {
      gridExecuteCommandEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_DEBESELRS_93935', false, null, this.LNSPR.timer);
    }

    gridExecuteCommandEventArgs.commons.execServer = false;
  };

  task_gridInitColumnTemplate_QV_EF50_UVK53 = (
    idColumn: any,
    gridInitColumnTemplateEventArgs: CobisModelGridInitColumnTemplateEventArgs
  ) => {
    if (idColumn === 'seleccion') {
      return "<div><input type='checkbox' value='#=seleccion#' #=seleccion?checked='checked':''# data-bind='value:seleccion'  ng-click='vc.change(null,\"VA_SELECCIONBGDZXY_881423\",this.dataItem,\"seleccion\", $event)' /></div>";
    }
  };


  task_gridInitColumnTemplate_QV_PG40_VCD65 = (
    idColumn: any,
    gridInitColumnTemplateEventArgs: CobisModelGridInitColumnTemplateEventArgs
  ) => {
    if (idColumn === 'seleccion') {
      return "<input name='seleccion' type='checkbox' value='#=seleccion#' #=seleccion?checked='checked':''# data-bind='value:seleccion' ng-click='vc.grids.QV_PG40_VCD65.events.customRowClick($event,\"VA_CHECKBOXYLXHRAO_645423\",\"ReadjustmenMList\",\"QV_PG40_VCD65\")'/>";
    }
  };

  task_gridInitEditColumnTemplate_QV_EF50_UVK53 = (
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


  task_gridInitEditColumnTemplate_QV_PG40_VCD65 = (
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
  //ViewContainer: LoanSearchForm
  task_initData_VC_LOANSEARCH_100921 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.api.vc.viewState.VA_CODCURRENCYORMA_221423.visible = false;
    initDataEventArgs.commons.api.vc.viewState.VA_DISBURSEMENTDTE_672423.visible = false;
    initDataEventArgs.commons.api.vc.viewState.VA_STATEGXSFXFHGCB_183423.visible = false;
    initDataEventArgs.commons.api.vc.viewState.VA_MIGRATEDOPERITA_354423.visible = false;

    entities.LoanSearchFilter.disbursementDate = null;
    entities.LoanSearchFilter.state = null;
    //entities.LoanSearchFilter.codCurrency  = "0";
    entities.LoanSearchFilter.migratedOperation = null;
    entities.ReadjustmentMEntity.factor = 0.00;
    entities.ReadjustmentMEntity.percentage = 0.00;

    initDataEventArgs.commons.api.grid.hideToolBarButton('QV_EF50_UVK53', 'CEQV_201QV_EF50_UVK53_197');
    initDataEventArgs.commons.api.grid.hideToolBarButton('QV_EF50_UVK53', 'CEQV_201QV_EF50_UVK53_388');
    initDataEventArgs.commons.api.grid.hideToolBarButton('QV_EF50_UVK53', 'CEQV_201QV_EF50_UVK53_351');

    initDataEventArgs.commons.api.vc.viewState.VA_NEXTREADJDATEEE_737423.visible = false;
    initDataEventArgs.commons.api.vc.viewState.VA_TYPEOPERATIONNN_501423.visible = false;

    entities.LoanSearchFilter.mode = this.LNSPR.getQueryStrings().type;
    initDataEventArgs.commons.api.viewState.hide('G_LOANSEARCR_617423');
    initDataEventArgs.commons.api.viewState.hide("G_LOANSEAHHC_356423");
    initDataEventArgs.commons.api.viewState.hide('QV_PY15_EUR25');
    initDataEventArgs.commons.api.vc.viewState.G_LOANSEARCR_617423.visible = false;

    /*if (getQueryStrings().type == 'U') {
        initDataEventArgs.commons.api.viewState.hide('VA_SPACER2562CECVV_901423');
        initDataEventArgs.commons.api.vc.viewState.VA_CONDITIONLQYMCH_855423.visible = false;
        //Spacer ubicado después de la opción 'Reajustables'.
        initDataEventArgs.commons.api.vc.viewState.VA_SPACER2187YYOCB_420423.visible = false;
        //Spacer ubicado después de la opción 'Reajustables'.
        initDataEventArgs.commons.api.vc.viewState.VA_SPACER2707FOADE_749423.visible = true;
        initDataEventArgs.commons.api.vc.viewState.VA_SPACER2878UBAZR_925423.visible = false;
        initDataEventArgs.commons.api.vc.viewState.VA_VAVABUTTONNJ9LB_637423.visible = false;
        initDataEventArgs.commons.api.vc.viewState.G_LOANSEAHCH_634423.visible = false;
        initDataEventArgs.commons.api.vc.viewState.G_LOANSEACRC_945423.visible = false;
        initDataEventArgs.commons.api.vc.viewState.CM_LOANSEAR_PN2.visible = false;

        initDataEventArgs.commons.api.vc.viewState.CM_TLNSPRMF_JP1.visible = false;
        initDataEventArgs.commons.api.vc.viewState.CM_TLNSPRMF_NMS.visible = false;
        initDataEventArgs.commons.api.vc.viewState.CM_TLNSPRMF_22S.visible = false;
        initDataEventArgs.commons.api.vc.viewState.CM_TLNSPRMF_TP8.visible = false;
        initDataEventArgs.commons.api.vc.viewState.CM_TLNSPRMF_3SN.visible = false;
        
        initDataEventArgs.commons.api.vc.viewState.VA_SELECCIONARTOOD_173423.visible = false;
        initDataEventArgs.commons.api.grid.hideColumn('QV_EF50_UVK53','seleccion');

        initDataEventArgs.commons.api.viewState.hide('CM_LOANSEAR_R04');
        initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_9NN');
        initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_F7N');

        initDataEventArgs.commons.api.vc.viewState.VA_ARCHIVOJFAGWZSQ_219423.visible = false;
    } else */
    if (this.LNSPR.getQueryStrings().type === 'I') {

      initDataEventArgs.commons.api.vc.viewState.VA_CONDITIONLQYMCH_855423.visible = false;

      //Spacer ubicado después de la opción 'Reajustables'.
      initDataEventArgs.commons.api.vc.viewState.VA_SPACER2187YYOCB_420423.visible = false;

      //Spacer ubicado después de la opción 'Reajustables'.
      initDataEventArgs.commons.api.vc.viewState.VA_SPACER2707FOADE_749423.visible = true;

      initDataEventArgs.commons.api.vc.viewState.VA_SPACER2878UBAZR_925423.visible = false;

      initDataEventArgs.commons.api.vc.viewState.VA_VAVABUTTONNJ9LB_637423.visible = false;
      initDataEventArgs.commons.api.vc.viewState.G_LOANSEAHCH_634423.visible = false;
      initDataEventArgs.commons.api.vc.viewState.G_LOANSEACRC_945423.visible = false;
      initDataEventArgs.commons.api.vc.viewState.CM_LOANSEAR_PN2.visible = false;

      initDataEventArgs.commons.api.viewState.hide('CM_LOANSEAR_R04');
      initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_9NN');
      initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_F7N');
      initDataEventArgs.commons.api.viewState.show('CM_TLNSPRMF_NMS');
      initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_JP1');
      initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_22S');
      initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_TP8');
      initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_3SN');

      initDataEventArgs.commons.api.vc.viewState.VA_ARCHIVOJFAGWZSQ_219423.visible = true;
    } else if (this.LNSPR.getQueryStrings().type === 'P') {

      initDataEventArgs.commons.api.vc.viewState.VA_CONDITIONLQYMCH_855423.visible = false;
      //Spacer ubicado después de la opción 'Reajustables'.
      initDataEventArgs.commons.api.vc.viewState.VA_SPACER2187YYOCB_420423.visible = false;
      //Spacer ubicado después de la opción 'Reajustables'.
      initDataEventArgs.commons.api.vc.viewState.VA_SPACER2707FOADE_749423.visible = true;
      initDataEventArgs.commons.api.vc.viewState.VA_SPACER2878UBAZR_925423.visible = false;
      initDataEventArgs.commons.api.vc.viewState.VA_VAVABUTTONNJ9LB_637423.visible = false;
      initDataEventArgs.commons.api.vc.viewState.G_LOANSEAHCH_634423.visible = false;
      initDataEventArgs.commons.api.vc.viewState.G_LOANSEACRC_945423.visible = false;
      initDataEventArgs.commons.api.vc.viewState.CM_LOANSEAR_PN2.visible = false;
      initDataEventArgs.commons.api.vc.viewState.G_LOANSEARCR_617423.visible = false;
      initDataEventArgs.commons.api.viewState.disable("CM_TLNSPRMF_22S");
      initDataEventArgs.commons.api.viewState.disable("CM_TLNSPRMF_JP1");

      initDataEventArgs.commons.api.viewState.hide("CM_LOANSEAR_R04");
      initDataEventArgs.commons.api.viewState.hide("CM_TLNSPRMF_9NN");
      initDataEventArgs.commons.api.viewState.hide("CM_TLNSPRMF_F7N");
      initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_NMS');
      initDataEventArgs.commons.api.viewState.hide("CM_TLNSPRMF_TP8");
      initDataEventArgs.commons.api.viewState.show('CM_TLNSPRMF_3SN');
      initDataEventArgs.commons.api.viewState.enable('CM_TLNSPRMF_3SN');

      initDataEventArgs.commons.api.vc.viewState.VA_ARCHIVOJFAGWZSQ_219423.visible = true;
    } else if (this.LNSPR.getQueryStrings().type === 'C') { // Formulario - Cambio Tasa Masiva
      entities.ReadjustmentMEntity.factor = 0.00;
      entities.ReadjustmentMEntity.percentage = 0.00;

      initDataEventArgs.commons.api.vc.viewState.VA_SELECCIONARTOOD_173423.visible = false;

      initDataEventArgs.commons.api.vc.viewState.VA_SPACER2187YYOCB_420423.visible = true;
      initDataEventArgs.commons.api.vc.viewState.VA_SPACER2707FOADE_749423.visible = false;
      initDataEventArgs.commons.api.vc.viewState.VA_SPACER2878UBAZR_925423.visible = false;
      initDataEventArgs.commons.api.vc.viewState.VA__174423.visible = false;
      initDataEventArgs.commons.api.vc.viewState.G_LOANSEAHHC_140423.visible = false;
      initDataEventArgs.commons.api.vc.viewState.G_LOANSEARCR_617423.visible = false;

      initDataEventArgs.commons.api.viewState.hide('CM_LOANSEAR_R04');
      initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_9NN');
      initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_F7N');
      initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_NMS');
      initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_JP1');
      initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_22S');
      initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_TP8');
      //initDataEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_3SN');
    }
    initDataEventArgs.commons.execServer = false;
  };


  //Entity: 
  //.item (ComboBox) View: LoanSearchForm
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_ITEMUMGHQQCSAYX_466423 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {
    loadCatalogDataEventArgs.commons.execServer = true;
  };

  //Entity: ReadjustmenMList
  //ReadjustmenMList.sign (ComboBox) View: LoanSearchForm
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_SIGNHCAEEHGEZFU_341423 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {
    loadCatalogDataEventArgs.commons.execServer = false;
    return [{
        code: '-',
        value: "-"
      },
      {
        code: '+',
        value: "+"
      },
      {
        code: '*',
        value: "*"
      },
      {
        code: '/',
        value: "/"
      }
    ];
  };

  //Entity: 
  //.sign (ComboBox) View: LoanSearchForm
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_SIGNKLSEFBDNEKD_114423 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {
    loadCatalogDataEventArgs.commons.execServer = false;

    return [{
        code: '-',
        value: "-"
      },
      {
        code: '+',
        value: "+"
      },
      {
        code: '*',
        value: "*"
      },
      {
        code: '/',
        value: "/"
      }
    ];
  };

  //Entity: LoanSearchFilter
  //LoanSearchFilter.state (ComboBox) View: LoanSearchForm
  //Evento LoadCatalogData: Sobreescribe la forma de cargar datos en un catálogo.
  task_loadCatalog_VA_STATEGXSFXFHGCB_183423 = (loadCatalogDataEventArgs: CobisModelLoadCatalogEventArgs) => {
    loadCatalogDataEventArgs.commons.execServer = true;
  };

  //Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
  //ViewContainer: LoanSearchForm
  task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
    onCloseModalEventArgs.commons.execServer = false;
    if (onCloseModalEventArgs.closedViewContainerId == "findCustomer" &&
      onCloseModalEventArgs.dialogCloseType == onCloseModalEventArgs.commons.constants.dialogCloseType.Interactive) {
      if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.selectedData) {
        let data: any = onCloseModalEventArgs.result.selectedData;
        entities.LoanSearchFilter.numIdentification = data.code + "";
      }
    } else if (onCloseModalEventArgs.result.referencial != undefined) {
      if (onCloseModalEventArgs.result.param != undefined) {
        entities.ReadjustmentMEntity.referencial = onCloseModalEventArgs.result.referencial;
      } else {
        let api: any = onCloseModalEventArgs.commons.api,
          selectedRow: any = api.vc.grids.QV_PG40_VCD65.selectedRow;

        // TODO - REFACTORIZAR
        // document.getElementById('VA_REFERENCIALFBOE_516423').readOnly = true;
        selectedRow.set('referencial', onCloseModalEventArgs.result.referencial);
        selectedRow.set('percentage', undefined);
      }
    } else if (onCloseModalEventArgs.closedViewContainerId == 'VC_PROJECTORC_636575' &&
      onCloseModalEventArgs.dialogCloseType == 0) {
      if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.objLoans) {
        listaSeleccionados = onCloseModalEventArgs.result.objLoans;
        // onCloseModalEventArgs.commons.api.vc.model.MassiveCommissionsMistakes = onCloseModalEventArgs.result.objMistakes;
        entities.MassiveCommissionsMistakes = onCloseModalEventArgs.result.objMistakes;
        onCloseModalEventArgs.commons.api.grid.refresh('QV_EF50_UVK53');
      }
    } else if (onCloseModalEventArgs.closedViewContainerId == 'VC_PAYMENTSGR_815507' && onCloseModalEventArgs.dialogCloseType == 0) {
      if (onCloseModalEventArgs.result && onCloseModalEventArgs.result.objLoans) {
        listaSeleccionados = onCloseModalEventArgs.result.objLoans;
        lote = listaSeleccionados[0].lote;

        onCloseModalEventArgs.commons.api.grid.refresh('QV_BZ71_NGV26');
        onCloseModalEventArgs.commons.api.viewState.hide('G_LOANSEAHHC_140423');
        onCloseModalEventArgs.commons.api.viewState.show('G_LOANSEAHHC_356423');
        onCloseModalEventArgs.commons.api.grid.removeAllRows('LoanList');


      }
    } else {
      onCloseModalEventArgs.commons.api.grid.refresh('QV_EF50_UVK53');
    }


  };

  //Entity: LoanSearchFilter
  //LoanSearchFilter.numIdentification (TextInputButton) View: LoanSearchForm
  task_textInputButtonEvent_VA_NUMIDENTIFICTII_228423 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
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

  //Entity: ReadjustmenMList
  //ReadjustmenMList.referencial (TextInputButton) View: LoanSearchForm

  task_textInputButtonEvent_VA_REFERENCIALFBOE_516423 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {

    textInputButtonEventArgs.commons.execServer = false;


  };

  //Entity: ReadjustmentMEntity
  //ReadjustmentMEntity.referencial (TextInputButton) View: MassiveReadjustmentForm

  task_textInputButtonEvent_VA_REFERENCIALHVKA_159423 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;

    //Open Modal
    let nav: any = textInputButtonEventArgs.commons.api.navigation;

    nav.label = this.cobis.translate('LNSPR.LBL_LNSPR_REFERENIC_88346');
    nav.address = {
      moduleId: 'LNSPR',
      subModuleId: 'OPRTN',
      taskId: 'T_LNSPRUPDQTUXI_446',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_MODALREFTE_678446'
    };
    nav.queryParameters = {
      mode: 8
    };
    nav.modalProperties = {
      size: 'lg',
      callFromGrid: false
    };

    nav.customDialogParameters = {
      param: 1
    };

    //Si la llamada es desde un evento de un control perteneciente a la cabecera de la página
    //nav.openModalWindow(args.commons.controlId, null);
    //Si la llamada es desde un evento de un control perteneciente a una grilla de la página
    //nav.openModalWindow(id, args.modelRow);
  };

  //Entity: LoanSearchFilter
  //LoanSearchFilter.numIdentification (TextInputButton) View: LoanSearchForm
  task_textInputButtonEventGrid_VA_NUMIDENTIFICTII_228423 = (textInputButtonEventGridEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventGridEventArgs.commons.execServer = false;
    let nav: any = textInputButtonEventGridEventArgs.commons.api.navigation;
    nav.label = this.cobis.translate('LNSPR.LBL_LNSPR_BSQUEDAIE_72552');
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

  //Entity: ReadjustmenMList
  //ReadjustmenMList.referencial (TextInputButton) View: LoanSearchForm

  task_textInputButtonEventGrid_VA_REFERENCIALFBOE_516423 = (textInputButtonEventGridEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventGridEventArgs.commons.execServer = false;

    let nav: any = textInputButtonEventGridEventArgs.commons.api.navigation;

    nav.label = this.cobis.translate('LNSPR.LBL_LNSPR_REFERENIC_88346');
    nav.address = {
      moduleId: 'LNSPR',
      subModuleId: 'OPRTN',
      taskId: 'T_LNSPRUPDQTUXI_446',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_MODALREFTE_678446'
    };
    nav.queryParameters = {
      mode: 8
    };
    nav.modalProperties = {
      size: 'lg',
      callFromGrid: false
    };
  };



  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: LoanSearchForm
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    entities.ReadjustmentMEntity.sign = null;
    entities.ReadjustmentMEntity.factor = null;
    entities.ReadjustmentMEntity.percentage = null;
    renderEventArgs.commons.execServer = false;
  };


  //gridRowSelecting QueryView: PAGOS_MASIVOS
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_BZ71_NGV26 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.execServer = false;

  };






  //gridRowSelecting QueryView: QV_EF50_UVK53
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_EF50_UVK53 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {
    gridRowSelectingEventArgs.commons.execServer = false;
    if (this.LNSPR.getQueryStrings().type == 'U') {
      //Navigation between forms
      let nav: any = gridRowSelectingEventArgs.commons.api.navigation;

      nav.label = this.cobis.translate('LNSPR.LBL_LNSPR_ACTUALIZN_20307');
      nav.address = {
        moduleId: 'LNSPR',
        subModuleId: 'OPRTN',
        taskId: 'T_LNSPRVJAKOEIC_908',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_LOANSUPDEE_628908'
      };
      nav.queryParameters = {
        mode: 2,
        rechargeLifeCycle: true
      };
      nav.customDialogParameters = {
        client: gridRowSelectingEventArgs.rowData.client,
        clientCode: gridRowSelectingEventArgs.rowData.clientCode,
        loanBankID: gridRowSelectingEventArgs.rowData.loanBankID,
        state: gridRowSelectingEventArgs.rowData.state,
        numProcedure: gridRowSelectingEventArgs.rowData.numProcedure,
        desOperationType: gridRowSelectingEventArgs.rowData.desOperationType,
        currency: gridRowSelectingEventArgs.rowData.currency,
        amount: gridRowSelectingEventArgs.rowData.currency
      };
      nav.navigate(gridRowSelectingEventArgs.commons.controlId);
    }

  };


  //gridRowSelecting QueryView: QV_PG40_VCD65
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_PG40_VCD65 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.execServer = false;

  };







  //gridRowSelecting QueryView: QV_PY15_EUR25
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowSelecting_QV_PY15_EUR25 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
  ) => {

    gridRowSelectingEventArgs.commons.execServer = false;

  };






  //gridRowUpdating QueryView: QV_PG40_VCD65
  //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
  task_gridRowUpdating_QV_PG40_VCD65 = (
    entities: Model,
    gridRowUpdatingEventArgs: CobisModelGridRowActionEventArgs
  ) => {
    gridRowUpdatingEventArgs.commons.execServer = false;

  };


}