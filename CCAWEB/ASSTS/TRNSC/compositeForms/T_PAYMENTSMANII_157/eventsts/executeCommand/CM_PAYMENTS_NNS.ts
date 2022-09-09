// (Button) 
    //designer-hint: 2304: Cannot find name 'task_executeCommand_CM_PAYMENTS_NNS'.
    task_executeCommand_CM_PAYMENTS_NNS = (
        //designer-hint: 2304: Cannot find name 'Model'.
        entities: Model,
        //designer-hint: 2304: Cannot find name 'CobisModelExecuteCommandEventArgs'.
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        executeCommandEventArgs.commons.execServer = false;

        //Open Modal
        let nav: any = executeCommandEventArgs.commons.api.navigation;

        nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_PRIORIDAA_58251'); //Priodidades
        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'TRNSC',
            taskId: 'T_PRIORITIESENY_489',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_PRIORITIOM_989489'
        };
        nav.queryParameters = {
            mode: 1
        };
        nav.modalProperties = {
            size: 'md',
            callFromGrid: false
        };
        //designer-hint: 2304: Cannot find name 'angular'.
        let priorities2: any = angular.copy(entities.Priorities);
        nav.customDialogParameters = {
            bankNum: entities.Loan.loanBankID,
            priorities: priorities2
        };
        nav.openModalWindow(executeCommandEventArgs.commons.controlId, null);
    };