//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: AmortizationModal
    task.initData.VC_AMORTIZATT_397548 = function (entities, initDataEventArgs){
        initDataEventArgs.commons.execServer = true;
        //initDataEventArgs.commons.serverParameters.Loan = true;
        
        var param = initDataEventArgs.commons.api.navigation.getCustomDialogParameters();
        entities.Loan = param.Loan;
        entities.AmortizationSimulate = param.AmortizationSimulate;
        
    };