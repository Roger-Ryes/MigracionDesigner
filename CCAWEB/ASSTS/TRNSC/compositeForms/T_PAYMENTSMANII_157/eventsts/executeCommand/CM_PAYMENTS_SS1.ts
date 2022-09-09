// (Button) 
    //designer-hint: 2304: Cannot find name 'task_executeCommand_CM_PAYMENTS_SS1'.
    task_executeCommand_CM_PAYMENTS_SS1 = (
        //designer-hint: 2304: Cannot find name 'Model'.
        entities: Model,
        //designer-hint: 2304: Cannot find name 'CobisModelExecuteCommandEventArgs'.
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        executeCommandEventArgs.commons.execServer = false;

        //Open Modal
        let nav: any = executeCommandEventArgs.commons.api.navigation;

        nav.label =  this.cobis.translate('ASSTS.LBL_ASSTS_SOBRANTSE_66830'); //Sobrantes
        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'TRNSC',
            taskId: 'T_LEFTOVERPALDD_459',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_LEFTOVERPM_168459'
        };
        nav.queryParameters = {
            mode: 1
        };
        nav.modalProperties = {
            size: 'md',
            callFromGrid: false
        };
        nav.customDialogParameters = {
            creditType: entities.Loan.operationTypeID,
            customerCode: entities.Payment.customerID,
            leftOverPayment: entities.LeftOverPayment
        };

        nav.openModalWindow(executeCommandEventArgs.commons.controlId, null);
    };