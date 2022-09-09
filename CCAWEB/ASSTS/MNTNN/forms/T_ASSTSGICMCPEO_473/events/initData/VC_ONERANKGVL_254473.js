//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: OneRankForm
task.initData.VC_ONERANKGVL_254473 = function (entities, initDataEventArgs) {

    initDataEventArgs.commons.execServer = false;
    dataRow = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().dataRow;
    initDataEventArgs.commons.api.viewState.label("G_ONERANKCDL_257961", dataRow.rangeName);
    entities.OneRankFilter.date = new Date(cobis.containerScope.preferences.processDate);

};
