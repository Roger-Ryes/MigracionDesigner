//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: TwoRangesForm
task.initData.VC_TWORANGESS_307887 = function (entities, initDataEventArgs) {

    initDataEventArgs.commons.execServer = false;
    dataRow = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().dataRow;
    initDataEventArgs.commons.api.viewState.label("G_TWORANGESS_553861", dataRow.rangeName);
    entities.TwoRangesFilter.date = new Date(cobis.containerScope.preferences.processDate);


};
