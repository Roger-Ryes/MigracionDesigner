//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: OneRankForm
task_initData_VC_ONERANKGVL_254473 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {

    initDataEventArgs.commons.execServer = false;
    this.dataRow = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().dataRow;
    initDataEventArgs.commons.api.viewState.label("G_ONERANKCDL_257961", this.dataRow.rangeName);
    entities.OneRankFilter.date = new Date(this.cobis.containerScope.preferences.processDate);

};
