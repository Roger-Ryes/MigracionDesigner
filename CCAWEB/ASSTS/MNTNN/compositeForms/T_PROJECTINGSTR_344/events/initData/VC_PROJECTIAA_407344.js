//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: OtherCharges
    task.initData.VC_PROJECTIAA_407344 = function (entities, initDataEventArgs){
    // initDataEventArgs.commons.execServer = true;
        var commons = initDataEventArgs.commons;
		var api=initDataEventArgs.commons.api;
		var parameters=api.navigation.getCustomDialogParameters();		
    entities.Loan = parameters.parameters.loan;

    initDataEventArgs.commons.api.viewState.hide('VC_UJNNOFLWUJ_608344');


		commons.execServer = true;
    };