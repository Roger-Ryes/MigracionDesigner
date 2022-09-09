
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: PassivePortfolioCreation
task_initData_VC_PASSIVEPTE_108832 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = false;

    entities.OperationEntity.creationDate = new Date(this.cobis.containerScope.preferences.processDate);
    entities.OperationEntity.authDate = new Date(this.cobis.containerScope.preferences.processDate);
    let viewState: any = initDataEventArgs.commons.api.viewState;
    viewState.disable('CM_TLNSPRYT_R8O');

    //OCULTAR TABS
    viewState.hide('VC_WNGSNACMOW_776330');//Rubros
    viewState.hide('VC_UBTCDKFYUM_204785');//Parametros generales
    viewState.hide('VC_VDXJPHMPYC_153633');//Amortización
};