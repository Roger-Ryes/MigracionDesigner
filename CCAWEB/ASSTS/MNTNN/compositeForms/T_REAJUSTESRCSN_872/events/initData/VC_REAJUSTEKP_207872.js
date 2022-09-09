//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: REAJUSTE
    task.initData.VC_REAJUSTEKP_207872 = function (entities, initDataEventArgs){

    initDataEventArgs.commons.api.viewState.hide('VC_VPRGARGERZ_116872');

	       var commons = initDataEventArgs.commons;
	       var api=initDataEventArgs.commons.api;
               var parameters=api.navigation.getCustomDialogParameters();		
               entities.Loan = parameters.parameters.loan;

    commons.execServer = false;

        
    };