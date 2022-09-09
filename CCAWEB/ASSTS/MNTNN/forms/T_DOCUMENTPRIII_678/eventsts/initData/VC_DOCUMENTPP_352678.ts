//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: DocumentPrinting
task_initData_VC_DOCUMENTPP_352678 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = false;
    let commons: any = initDataEventArgs.commons;
    let api: any = initDataEventArgs.commons.api;
    parameters = api.navigation.getCustomDialogParameters();
    entities.Loan = parameters.parameters.loan;
    /*initDataEventArgs.commons.api.grid.fillFiltersQuery('Q_PRINTICM_3105', {
        mode: 0,
        operation: parameters.parameters.loan.desOperationType
    });*/
    initDataEventArgs.commons.api.vc.mode = 2;
};