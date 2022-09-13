// (Button) 
    task_executeCommand_CM_TPAYMENT_MA5 = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        executeCommandEventArgs.commons.execServer = false;

        //Open Modal
        let nav: any = executeCommandEventArgs.commons.api.navigation;

        nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_CONDONASE_22340'); //Condonaciones
        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'TRNSC',
            taskId: 'T_CONDONATIOSNN_532',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_CONDONATON_778532'
        };
        nav.queryParameters = {
            mode: 2
        };
        nav.modalProperties = {
            size: 'lg',
            callFromGrid: false
        };
        nav.customDialogParameters = {
            bankNum: entities.Loan.loanBankID,
            condonationDetail2: entities.CondonationDetail,
            amount: entities.Loan.amount
        };

        nav.openModalWindow(executeCommandEventArgs.commons.controlId, null);
        //executeCommandEventArgs.commons.serverParameters.entityName = true;
    };