//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: AssociateLoanItemsForm
task_initData_VC_ASSOCIATAI_871506 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = false;

    let api: any = initDataEventArgs.commons.api;
    let parameters: any = api.navigation.getCustomDialogParameters();
    entities.Loan = parameters.parameters.loan;


    let nav: any = initDataEventArgs.commons.api.navigation;

    //Pantalla: Negociacion rubros

    nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'MNTNN',
        taskId: 'T_ASSTSDXZMZWIL_957',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_LOANITEMSS_778957'
    };
    nav.queryParameters = {
        mode: 2
    };
    nav.customDialogParameters = {
        loan: entities.Loan
    };
    nav.registerView('G_ASSOCIATTA_623523');
};
