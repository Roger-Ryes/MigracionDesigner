//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: ProjectionReadjustmentForm
//designer-hint: 2304: Cannot find name 'task_initData_VC_PROJECTIRJ_862619'.
//designer-hint: 2304: Cannot find name 'Model'.
//designer-hint: 2304: Cannot find name 'CobisModelInitDataEventArgs'.
task_initData_VC_PROJECTIRJ_862619 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    let nav: any = initDataEventArgs.commons.api.navigation;
    //designer-hint: 6133: 'params' is declared but its value is never read.
    let params: any = nav.getCustomDialogParameters();

    entities.SearchProjectionReadjustement.percentage = 0;
    initDataEventArgs.commons.api.viewState.hide('CM_TASSTSPE_87R');

    entities.Loan = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().parameters.loan;

    //AMORTIZACION 
    nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'CMMNS',
        taskId: 'T_AMORTIZATIOON_261',//FormSimple (AmortizationForm)
        taskVersion: '1.0.0',
        viewContainerId: 'VC_AMORTIZAII_339261'//Contenedor FormSimple
    };
    nav.queryParameters = {
        mode: 2
    };
    nav.customDialogParameters = {
        operation: initDataEventArgs.commons.api.navigation.getCustomDialogParameters().parameters.loan.loanBankID,
        templateGrid:2
    };
    nav.registerView('G_PROJECTNTR_773798');//Grupo en el cual cargara
    initDataEventArgs.commons.execServer = true;
};