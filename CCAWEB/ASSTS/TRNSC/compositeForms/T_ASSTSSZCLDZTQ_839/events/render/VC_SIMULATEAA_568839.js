//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
    //ViewContainer: SimulateMain
    task.render = function (entities, renderEventArgs){

    renderEventArgs.commons.execServer = false;
    //FORMAT DATE
    entities.Loan.startDate = kendo.toString(entities.Loan.startDate, JSON.parse(sessionStorage.dateFormat));
    entities.Loan.endDate = kendo.toString(entities.Loan.endDate, JSON.parse(sessionStorage.dateFormat));
    entities.Loan.feeEndDate = kendo.toString(entities.Loan.feeEndDate, JSON.parse(sessionStorage.dateFormat));
    entities.Loan.lastProcessDate = kendo.toString(entities.Loan.lastProcessDate, JSON.parse(sessionStorage.dateFormat));
    entities.Loan.balanceDue = kendo.toString(entities.Loan.balanceDue, "n");
    entities.Loan.amount = kendo.toString(entities.Loan.amount, "n");
    entities.Loan.nextPayment = kendo.toString(entities.Loan.nextPayment, "n");
    entities.Payment.processDate = entities.Loan.lastProcessDate;
    entities.Loan.amountApproved = kendo.toString(entities.Loan.amountApproved, "n");
    };