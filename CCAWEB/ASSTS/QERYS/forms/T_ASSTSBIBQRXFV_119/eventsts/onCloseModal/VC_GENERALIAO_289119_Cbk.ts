//Start signature to Callback event to VC_GENERALIAO_289119
//designer-hint: 2304: Cannot find name 'task_onCloseModalEventCallback'.
task_onCloseModalEventCallback = (
    //designer-hint: 2304: Cannot find name 'Model'.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelOnCloseModalCallbackEventArgs'.
    onCloseModalCallbackEventArgs: CobisModelOnCloseModalCallbackEventArgs
) => {
    onCloseModalCallbackEventArgs.commons.api.viewState.selectLayout("G_GENERALNTN_956193", "G_GENERALIIO_430193");


    if (!onCloseModalCallbackEventArgs.commons.api.navigation.getCustomDialogParameters().controlId || onCloseModalCallbackEventArgs.commons.api.navigation.getCustomDialogParameters().controlId == 'G_GENERALMMI_992193') {
        let nav: any = onCloseModalCallbackEventArgs.commons.api.navigation;
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
    }


    //FORMAT DATE
    // TODO
    //designer-hint: 2304: Cannot find name 'kendo'.
    // entities.Loan.startDate = kendo.toString(entities.Loan.startDate, JSON.parse(sessionStorage.dateFormat));
    //designer-hint: 2304: Cannot find name 'kendo'.
    // entities.Loan.endDate = kendo.toString(entities.Loan.endDate, JSON.parse(sessionStorage.dateFormat));
    //designer-hint: 2304: Cannot find name 'kendo'.
    // entities.Loan.feeEndDate = kendo.toString(entities.Loan.feeEndDate, JSON.parse(sessionStorage.dateFormat));
    //designer-hint: 2304: Cannot find name 'kendo'.
    // entities.Loan.lastProcessDate = kendo.toString(entities.Loan.lastProcessDate, JSON.parse(sessionStorage.dateFormat));
    //designer-hint: 2304: Cannot find name 'kendo'.
    // entities.Loan.balanceDue = kendo.toString(entities.Loan.balanceDue, "n");
    //designer-hint: 2304: Cannot find name 'kendo'.
    // entities.Loan.amountApproved = kendo.toString(entities.Loan.amountApproved, "n");
    //designer-hint: 2304: Cannot find name 'kendo'.
    // entities.Loan.nextPayment = kendo.toString(entities.Loan.nextPayment, "n");
    entities.Loan.startDate = entities.Loan.startDate;
    entities.Loan.endDate = entities.Loan.endDate;
    entities.Loan.feeEndDate = entities.Loan.feeEndDate;
    entities.Loan.lastProcessDate = entities.Loan.lastProcessDate;
    entities.Loan.balanceDue = entities.Loan.balanceDue;
    entities.Loan.amountApproved = entities.Loan.amountApproved;
    entities.Loan.nextPayment = entities.Loan.nextPayment;

};
