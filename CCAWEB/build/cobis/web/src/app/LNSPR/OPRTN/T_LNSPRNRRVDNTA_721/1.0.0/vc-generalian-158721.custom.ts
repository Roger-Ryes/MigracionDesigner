import {
  firstValueFrom
} from "rxjs";
import {
  Model
} from './model/vc-generalian-158721.model';
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

/* variables locales de T_LNSPRNRRVDNTA_721*/

export class VcGeneralian158721Custom extends CobisDesignerCustomEvent {

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

  //"TaskId": "T_LNSPRNRRVDNTA_721"
  getParams = () => {
    let url: any = "",
      urlParams: any = {};

    if (this.cobis.container.tabs.getCurrentTab()) {
      url = this.cobis.container.tabs.getCurrentTab().url;
    } else {
      url = location.href;
    }



    if (url.split('?').length > 1) {
      url.split('?')[1].split('&').forEach((paramString: any) => {
        urlParams[paramString.split('=')[0]] = paramString.split('=')[1];
      })
    }
    return urlParams;
  }


  // () View: View of GeneralInformationLine
  //Evento changeGroup : Evento change para pestañas, collapsible y accordion.
  task_changeGroup_G_GENERALTII_344243 = (entities: Model, changedGroupEventArgs: any) => {
    changedGroupEventArgs.commons.execServer = false;

    let nav: any = changedGroupEventArgs.commons.api.navigation;
    //Pantalla: Estado Actual
    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALAAO_224243') && (changedGroupEventArgs.commons.item.isOpen === true)) {
      console.log("Open by " + changedGroupEventArgs.commons.item.id);
      nav.address = {
        moduleId: 'LNSPR',
        subModuleId: 'OPRTN',
        taskId: 'T_LNSPRASFFUCSU_551',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_CURRENTSSN_601551'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.customDialogParameters = {
        secuencial: entities.LoansLinesHeader.secuencial
      };
      nav.registerView('G_GENERALAAO_224243', false);
    }

    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALLII_531243') && (changedGroupEventArgs.commons.item.isOpen === true)) {
      console.log("Open by " + changedGroupEventArgs.commons.item.id);
      nav.address = {
        moduleId: 'LNSPR',
        subModuleId: 'OPRTN',
        taskId: 'T_LNSPREHKSWWGN_923',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_MEMBERSLNN_871923'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.customDialogParameters = {
        secuencial: entities.LoansLinesHeader.secuencial
      };
      nav.registerView('G_GENERALLII_531243', false);
    }
    /*INFORMACION DE LINEA*/
    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALOIA_538243') && (changedGroupEventArgs.commons.item.isOpen === true)) {
      console.log("Open by " + changedGroupEventArgs.commons.item.id);
      nav.address = {
        moduleId: 'LNSPR',
        subModuleId: 'OPRTN',
        taskId: 'T_LNSPRXLZJGUMH_556',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_LOANLINENS_928556'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.customDialogParameters = {
        secuencial: entities.LoansLinesHeader.secuencial
      };
      nav.registerView('G_GENERALOIA_538243', false);
    }


    /*DISTRIBUCION POR PRODUCTO*/
    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALTIN_333243') && (changedGroupEventArgs.commons.item.isOpen === true)) {
      console.log("Open by " + changedGroupEventArgs.commons.item.id);
      nav.address = {
        moduleId: 'LNSPR',
        subModuleId: 'OPRTN',
        taskId: 'T_LNSPRSBSNRATX_181',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_PRODUCTLIN_542181'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.customDialogParameters = {
        sequential: entities.LoansLinesHeader.secuencial
      };
      nav.registerView('G_GENERALTIN_333243', false);
    }

    /*DISTRIBUCION POR MIEMBROS*/
    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALEIN_751243') && (changedGroupEventArgs.commons.item.isOpen === true)) {
      console.log("Open by " + changedGroupEventArgs.commons.item.id);
      nav.address = {
        moduleId: 'LNSPR',
        subModuleId: 'OPRTN',
        taskId: 'T_LNSPRNBKRHAIB_194',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_LOANSDISMM_305194'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.customDialogParameters = {
        codLinea: entities.LoansLinesHeader.cupo
      };
      nav.registerView('G_GENERALEIN_751243', false);
    }

    /*Garantias de la Línea*/
    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALNLN_510243') && (changedGroupEventArgs.commons.item.isOpen === true)) {
      console.log("Open by " + changedGroupEventArgs.commons.item.id);


      nav.address = {
        moduleId: 'LNSPR',
        subModuleId: 'OPRTN',
        taskId: 'T_LNSPRQGEMJIOM_705',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_LOANSLINER_641705'
      };
      nav.queryParameters = {
        mode: 8
      };
      nav.customDialogParameters = {
        codLinea: entities.LoansLinesHeader.cupo
      };
      nav.registerView('G_GENERALNLN_510243', false);
    }
  };


  //Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
  //ViewContainer: GeneralInformationLine
  task_initData_VC_GENERALIAN_158721 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    let params: any;
    let nav: any = initDataEventArgs.commons.api.navigation;

    if (initDataEventArgs.commons.api.parentVc && initDataEventArgs.commons.api.parentVc?.id == 'VC_LOANSLINSS_962737') {
      params = initDataEventArgs.commons.api.navigation.getCustomDialogParameters();
    } else {
      params = this.getParams();
    }

    entities.LoansLinesHeader.cupo = params.cupo;

    nav.address = {
      moduleId: 'LNSPR',
      subModuleId: 'OPRTN',
      taskId: 'T_LNSPRASFFUCSU_551',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_CURRENTSSN_601551'
    };
    nav.queryParameters = {
      mode: 8
    };
    nav.customDialogParameters = {
      secuencial: params.secuencial
    };
    nav.registerView('G_GENERALAAO_224243', false);

    nav.address = {
      moduleId: 'LNSPR',
      subModuleId: 'OPRTN',
      taskId: 'T_LNSPREHKSWWGN_923',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_MEMBERSLNN_871923'
    };
    nav.queryParameters = {
      mode: 8
    };
    nav.customDialogParameters = {
      secuencial: params.secuencial
    };
    nav.registerView('G_GENERALLII_531243', false);


    initDataEventArgs.commons.execServer = true;
    //initDataEventArgs.commons.serverParameters.entityName = true;
  };



  //Start signature to Callback event to VC_GENERALIAN_158721
  task_initDataCallback_VC_GENERALIAN_158721 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
  ) => {
    //here your code
  };


  //Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
  //ViewContainer: GeneralInformationLine
  task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    renderEventArgs.commons.execServer = false;
    let apiHeader: any = renderEventArgs.commons.api.cobisPatterns.header;

    if (renderEventArgs.commons.api.parentVc && renderEventArgs.commons.api.parentVc?.id == 'VC_LOANSLINSS_962737') {
      apiHeader.visibleSearchOption(true);
    } else {
      apiHeader.visibleSearchOption(false);
    }
    entities.LoansLinesHeader.monto = kendo.toString(Number(entities.LoansLinesHeader.monto), "n");
    entities.LoansLinesHeader.montoDisponible = kendo.toString(Number(entities.LoansLinesHeader.montoDisponible), "n");
    entities.LoansLinesHeader.montoUtilizado = kendo.toString(Number(entities.LoansLinesHeader.montoUtilizado), "n");
    entities.LoansLinesHeader.naturalezaOp = entities.LoansLinesHeader.naturalezaOp == 'A' ? 'ACTIVA' : 'PASIVA';
  };



}