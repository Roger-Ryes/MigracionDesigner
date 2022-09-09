//Start signature to Callback event to VC_LOANSHISOO_808949
task_initDataCallback_VC_LOANSHISOO_808949 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
) => {
    //Pantalla: Resumen general del estado del préstamo
    let nav: any = initDataCallbackEventArgs.commons.api.navigation;

    nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_GENERALINFFHA_866',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_GENERALIAT_927866'
    };
    nav.queryParameters = {
        mode: 2
    };
    nav.customDialogParameters = {
        loan: entities.Loan
    };
    nav.registerView('G_LOANSHICTI_733863');

    //Pantalla: Tabla de amortización

    nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'CMMNS',
        taskId: 'T_AMORTIZATIOON_261',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_AMORTIZAII_339261'
    };
    nav.queryParameters = {
        mode: 2
    };
    nav.customDialogParameters = {
        loan: entities.Loan,
        operation: entities.Loan.loanBankID,
        menu: '1'
    };
    nav.registerView('G_LOANSHICSI_482863');
};
