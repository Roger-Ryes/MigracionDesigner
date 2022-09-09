//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: SimulateMain
    task.initData.VC_SIMULATEAA_568839 = function (entities, initDataEventArgs){
        initDataEventArgs.commons.execServer = true;
        
        var commons = initDataEventArgs.commons;
        var api = initDataEventArgs.commons.api;
        var parameters = api.navigation.getCustomDialogParameters(); 
        entities.Loan = parameters.parameters.loan;
        entities.AmortizationSimulate = [];

    var apiHeader = initDataEventArgs.commons.api.cobisPatterns.header;

    initDataEventArgs.commons.api.viewState.hide('VC_HSQKWBMJAF_924316');
    if (initDataEventArgs.commons.api.parentVc.id == "VC_GENERALIAO_289119") {
        //initDataEventArgs.commons.api.viewState.hide('VC_HSQKWBMJAF_924316');
        apiHeader.loadHeader(false);
    } else {
        //initDataEventArgs.commons.api.viewState.show('VC_HSQKWBMJAF_924316');
        apiHeader.loadHeader(true);
    }
        
    };