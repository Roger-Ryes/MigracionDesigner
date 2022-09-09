//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: LoanStatusChangeMain
    task.initData.VC_LOANSTATCE_588120 = function (entities, initDataEventArgs){
    //initDataEventArgs.commons.execServer = true;
        var commons = initDataEventArgs.commons;
        var api=initDataEventArgs.commons.api;
        var parameters=api.navigation.getCustomDialogParameters();        
    entities.Loan = parameters.parameters.loan;

    entities.Loan.statusCopy = entities.Loan.status
        commons.execServer = true
        
    };