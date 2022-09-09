//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: PassivePortfolioCreation
task.initData.VC_PASSIVEPIF_144956 = function (entities, initDataEventArgs) {

    initDataEventArgs.commons.execServer = false;
    entities.OperationEntity.creationDate = new Date(cobis.containerScope.preferences.processDate);
    entities.OperationEntity.authDate = new Date(cobis.containerScope.preferences.processDate);
    var viewState = initDataEventArgs.commons.api.viewState;
    viewState.disable('CM_TINTBNMA_VTA');//unsee
};
