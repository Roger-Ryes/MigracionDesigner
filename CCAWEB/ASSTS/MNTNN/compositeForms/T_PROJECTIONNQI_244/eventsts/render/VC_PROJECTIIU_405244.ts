//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
    //ViewContainer: ProjectionQuotaFormMain
    task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
        renderEventArgs.commons.execServer = false;
        entities.ProjectionQuota.typeCalculation = 'S';
        let api: any = renderEventArgs.commons.api;
        api.vc.viewState.VA_TIPOUWNWJMGVYCI_648517.disabled = false;

        //FORMAT DATE
        // TODO
        // entities.Loan.startDate = kendo.toString(entities.Loan.startDate, JSON.parse(sessionStorage.dateFormat));
        // entities.Loan.endDate = kendo.toString(entities.Loan.endDate, JSON.parse(sessionStorage.dateFormat));
        // entities.Loan.feeEndDate = kendo.toString(entities.Loan.feeEndDate, JSON.parse(sessionStorage.dateFormat));
        // entities.Loan.lastProcessDate = kendo.toString(entities.Loan.lastProcessDate, JSON.parse(sessionStorage.dateFormat));
        // entities.Loan.balanceDue = kendo.toString(entities.Loan.balanceDue, "n");
        // entities.Loan.amountApproved = kendo.toString(entities.Loan.amountApproved, "n");
        // entities.Loan.amount = kendo.toString(entities.Loan.amount, "n");
        // entities.Loan.nextPayment = kendo.toString(entities.Loan.nextPayment, "n");
        entities.Loan.startDate = entities.Loan.startDate;
        entities.Loan.endDate = entities.Loan.endDate;
        entities.Loan.feeEndDate = entities.Loan.feeEndDate;
        entities.Loan.lastProcessDate = entities.Loan.lastProcessDate;
        entities.Loan.balanceDue = entities.Loan.balanceDue;
        entities.Loan.amountApproved = entities.Loan.amountApproved;
        entities.Loan.amount = entities.Loan.amount;
        entities.Loan.nextPayment = entities.Loan.nextPayment;
    };