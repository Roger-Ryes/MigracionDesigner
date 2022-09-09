//Start signature to Callback event to VC_GENERALIAO_289119
task_onCloseModalEventCallback = (
    entities: Model,
    onCloseModalCallbackEventArgs: CobisModelOnCloseModalCallbackEventArgs
) => {
    onCloseModalCallbackEventArgs.commons.api.viewState.selectLayout("G_GENERALNTN_956193", "G_GENERALIIO_430193");
    

    if (!onCloseModalCallbackEventArgs.commons.api.vc.dialogParameters.controlId || onCloseModalCallbackEventArgs.commons.api.vc.dialogParameters.controlId == 'G_GENERALMMI_992193') {
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
    entities.Loan.startDate = kendo.toString(kendo.parseDate(entities.Loan.startDate), JSON.parse(sessionStorage.dateFormat));
    entities.Loan.endDate = kendo.toString(kendo.parseDate(entities.Loan.endDate), JSON.parse(sessionStorage.dateFormat));
    entities.Loan.feeEndDate = kendo.toString(kendo.parseDate(entities.Loan.feeEndDate), JSON.parse(sessionStorage.dateFormat));
    entities.Loan.lastProcessDate = kendo.toString(kendo.parseDate(entities.Loan.lastProcessDate), JSON.parse(sessionStorage.dateFormat));
    entities.Loan.balanceDue = kendo.toString(entities.Loan.balanceDue, "n");
      entities.Loan.amountApproved = kendo.toString(entities.Loan.amountApproved, "n");
    entities.Loan.nextPayment = kendo.toString(entities.Loan.nextPayment, "n");
};
