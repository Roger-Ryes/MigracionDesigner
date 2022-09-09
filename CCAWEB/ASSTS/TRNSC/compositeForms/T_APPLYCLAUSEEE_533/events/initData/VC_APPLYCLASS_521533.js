//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: ApplyClause
    task.initData.VC_APPLYCLASS_521533 = function (entities, initDataEventArgs){
    //initDataEventArgs.commons.execServer = true;
        var commons = initDataEventArgs.commons;
		var api=initDataEventArgs.commons.api;
		var parameters=api.navigation.getCustomDialogParameters();		
    entities.Loan = parameters.parameters.loan;

    initDataEventArgs.commons.api.viewState.hide('VC_ZFLEAUPGRQ_436533');


		commons.execServer = true;
    };