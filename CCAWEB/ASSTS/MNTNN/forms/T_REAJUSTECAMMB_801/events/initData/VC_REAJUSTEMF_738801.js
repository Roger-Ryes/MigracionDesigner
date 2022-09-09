//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: ReadjustmentLoanCabForm
    task.initData.VC_REAJUSTEMF_738801 = function (entities, initDataEventArgs){
        
    initDataEventArgs.commons.execServer = false;

        var commons = initDataEventArgs.commons;
        var api=initDataEventArgs.commons.api;
        var parameters=api.navigation.getCustomDialogParameters();		
    
        entities.Loan = parameters.parameters.loan;
        
    };