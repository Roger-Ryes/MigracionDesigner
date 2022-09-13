//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: ProjectionReadjustmentForm
//designer-hint: 2304: Cannot find name 'task_render'.
//designer-hint: 2304: Cannot find name 'Model'.
//designer-hint: 2304: Cannot find name 'CobisModelRenderEventArgs'.
task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    renderEventArgs.commons.execServer = false;
    //FORMAT HEADER
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
    // entities.Loan.amount = kendo.toString(entities.Loan.amount, "n");
    //designer-hint: 2304: Cannot find name 'kendo'.
    // entities.Loan.amountApproved = kendo.toString(entities.Loan.amountApproved, "n");
    //designer-hint: 2304: Cannot find name 'kendo'.
    // entities.Loan.nextPayment = kendo.toString(entities.Loan.nextPayment, "n");
    entities.Loan.startDate = entities.Loan.startDate;
    entities.Loan.endDate = entities.Loan.endDate;
    entities.Loan.feeEndDate = entities.Loan.feeEndDate;
    entities.Loan.lastProcessDate = entities.Loan.lastProcessDate;
    entities.Loan.balanceDue = entities.Loan.balanceDue;
    entities.Loan.amount = entities.Loan.amount;
    entities.Loan.amountApproved = entities.Loan.amountApproved;
    entities.Loan.nextPayment = entities.Loan.nextPayment;

        for (let i: any = 1; i < 16; i++) {
            renderEventArgs.commons.api.grid.hideColumn("QV_EB77_IIB88", "items" + i);
        }
    
    if (!entities.Loan.group)
        entities.Loan.group = 0;
};