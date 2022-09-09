//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: ProductLineDistributionForm
task.initData.VC_PRODUCTLIN_542181 = function (entities, initDataEventArgs) {
        var params = initDataEventArgs.commons.api.navigation.getCustomDialogParameters();
        entities.ProductLineDistribution.sequential = params.sequential;
    entities.ProductLineDistribution.editionMode = initDataEventArgs.commons.constants.mode.Insert;
    if (initDataEventArgs.commons.api.vc.mode == initDataEventArgs.commons.constants.mode.Insert) {
        entities.ProductLineDistribution.codLine = params.lineCode;
        entities.ProductLineDistribution.used = 0;
        entities.ProductLineDistribution.available = 0;
        entities.ProductLineDistribution.controlsAmount = false;
        initDataEventArgs.commons.execServer = true;

    } else if (initDataEventArgs.commons.api.vc.mode == initDataEventArgs.commons.constants.mode.Query) {
        initDataEventArgs.commons.execServer = false;
    } else if (initDataEventArgs.commons.api.vc.mode == initDataEventArgs.commons.constants.mode.Update) {
        entities.ProductLineDistribution.codLine = params.lineCode;
        entities.ProductLineDistribution.used = 0;
        entities.ProductLineDistribution.available = 0;
        entities.ProductLineDistribution.controlsAmount = false;
        initDataEventArgs.commons.execServer = true;
    }

};
