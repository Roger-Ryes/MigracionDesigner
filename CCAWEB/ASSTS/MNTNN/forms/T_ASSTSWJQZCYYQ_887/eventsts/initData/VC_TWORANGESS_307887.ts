//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: TwoRangesForm
task_initData_VC_TWORANGESS_307887 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {

    initDataEventArgs.commons.execServer = false;
    this.dataRow = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().dataRow;
    initDataEventArgs.commons.api.viewState.label("G_TWORANGESS_553861", this.dataRow.rangeName);
    entities.TwoRangesFilter.date = new Date(this.cobis.containerScope.preferences.processDate);


};
