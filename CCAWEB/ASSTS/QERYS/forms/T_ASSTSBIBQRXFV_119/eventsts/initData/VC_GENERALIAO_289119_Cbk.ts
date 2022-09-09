//Start signature to Callback event to VC_GENERALIAO_289119
task_initDataCallback_VC_GENERALIAO_289119 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
) => {
    let nav: any = initDataCallbackEventArgs.commons.api.navigation;

    if(this.ASSTS.tab.parameters){
       entities.Loan.desOperationType = this.ASSTS.tab.parameters.desOperationType;
    }else{
    entities.Loan.desOperationType = nav.getCustomDialogParameters().parameters.loan.desOperationType;
    }

    if (entities.Loan.natureOp != 'P') {
        initDataCallbackEventArgs.commons.api.viewState.hide('G_GENERALNNA_591193');
    }
    //Pantalla: Resumen general del estado del préstamo

    nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_GENERALINFFHA_866', //FormSimple (AmortizationForm)
        taskVersion: '1.0.0',
        viewContainerId: 'VC_GENERALIAT_927866' //Contenedor FormSimple
    };
    nav.queryParameters = {
        mode: 2
    };
    nav.customDialogParameters = {
        loan: entities.Loan
    };
    nav.registerView('G_GENERALAIN_757193'); //Grupo en el cual cargara

    //Pantalla: Tabla de amortización

    nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'CMMNS',
        taskId: 'T_AMORTIZATIOON_261', //FormSimple (AmortizationForm)
        taskVersion: '1.0.0',
        viewContainerId: 'VC_AMORTIZAII_339261' //Contenedor FormSimple
    };
    nav.queryParameters = {
        mode: 2
    };
    nav.customDialogParameters = {
        loan: entities.Loan,
        operation: entities.Loan.loanBankID
    };
    nav.registerView('G_GENERALMMI_992193'); //Grupo en el cual cargara
};
