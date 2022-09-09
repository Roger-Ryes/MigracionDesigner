
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: GeneralInformationMain
task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    //FORMAT DATE
    // TODO
    // entities.Loan.startDate = kendo.toString(kendo.parseDate(entities.Loan.startDate), JSON.parse(sessionStorage.dateFormat));
    // entities.Loan.endDate = kendo.toString(kendo.parseDate(entities.Loan.endDate), JSON.parse(sessionStorage.dateFormat));
    // entities.Loan.feeEndDate = kendo.toString(kendo.parseDate(entities.Loan.feeEndDate), JSON.parse(sessionStorage.dateFormat));
    // entities.Loan.lastProcessDate = kendo.toString(kendo.parseDate(entities.Loan.lastProcessDate), JSON.parse(sessionStorage.dateFormat));
    // entities.Loan.balanceDue = kendo.toString(entities.Loan.balanceDue, "n");
    // entities.Loan.amountApproved = kendo.toString(entities.Loan.amountApproved, "n");
    // entities.Loan.nextPayment = kendo.toString(entities.Loan.nextPayment, "n");

    renderEventArgs.commons.execServer = false;

};