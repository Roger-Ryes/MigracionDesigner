//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: ExtendsQuotaFormMain
    task.initData.VC_EXTENDSQMN_712926 = function (entities, initDataEventArgs){
       // initDataEventArgs.commons.execServer = true;
        var commons = initDataEventArgs.commons;
		var api=initDataEventArgs.commons.api;
		var parameters=api.navigation.getCustomDialogParameters();		
        entities.Loan=parameters.parameters.loan;

    initDataEventArgs.commons.api.viewState.hide('VC_DFZRKBDHHZ_908926');

		commons.execServer = true;
    };