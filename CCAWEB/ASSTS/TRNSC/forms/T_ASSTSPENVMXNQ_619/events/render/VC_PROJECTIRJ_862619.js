//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: ProjectionReadjustmentForm
task.render = function (entities, renderEventArgs){
    renderEventArgs.commons.execServer = false;
    //FORMAT HEADER
    entities.Loan.startDate = kendo.toString(kendo.parseDate(entities.Loan.startDate), JSON.parse(sessionStorage.dateFormat));
    entities.Loan.endDate = kendo.toString(kendo.parseDate(entities.Loan.endDate), JSON.parse(sessionStorage.dateFormat));
    entities.Loan.feeEndDate = kendo.toString(kendo.parseDate(entities.Loan.feeEndDate), JSON.parse(sessionStorage.dateFormat));
    entities.Loan.lastProcessDate = kendo.toString(kendo.parseDate(entities.Loan.lastProcessDate), JSON.parse(sessionStorage.dateFormat));
    entities.Loan.balanceDue = kendo.toString(entities.Loan.balanceDue, "n");
    entities.Loan.amount = kendo.toString(entities.Loan.amount, "n");
    entities.Loan.amountApproved = kendo.toString(entities.Loan.amountApproved, "n");
    entities.Loan.nextPayment = kendo.toString(entities.Loan.nextPayment, "n");

        for (let i = 1; i < 16; i++) {
            renderEventArgs.commons.api.grid.hideColumn("QV_EB77_IIB88", "items" + i);
        }
    
    if (!entities.Loan.group)
        entities.Loan.group = 0;
};