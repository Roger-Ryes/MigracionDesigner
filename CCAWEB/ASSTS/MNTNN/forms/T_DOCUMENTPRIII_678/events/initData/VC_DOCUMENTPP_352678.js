//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: DocumentPrinting
task.initData.VC_DOCUMENTPP_352678 = function (entities, initDataEventArgs) {
	initDataEventArgs.commons.execServer = false;
	var commons = initDataEventArgs.commons;
	var api = initDataEventArgs.commons.api;
    parameters = api.navigation.getCustomDialogParameters();
    entities.Loan = parameters.parameters.loan;
    /*initDataEventArgs.commons.api.grid.fillFiltersQuery('Q_PRINTICM_3105', {
        mode: 0,
        operation: parameters.parameters.loan.desOperationType
    });*/
    initDataEventArgs.commons.api.vc.mode = 2;
};