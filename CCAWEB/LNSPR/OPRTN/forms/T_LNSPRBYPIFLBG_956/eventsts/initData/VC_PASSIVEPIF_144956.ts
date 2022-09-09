//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: PassivePortfolioCreation
task_initData_VC_PASSIVEPIF_144956 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = false;
    entities.OperationEntity.creationDate = new Date(this.cobis.containerScope.preferences.processDate);
    entities.OperationEntity.authDate = new Date(this.cobis.containerScope.preferences.processDate);
    let viewState: any = initDataEventArgs.commons.api.viewState;
    viewState.disable('CM_TINTBNMA_VTA');//unsee
};
