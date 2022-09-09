// () View: View of LoanPartialDisbursement
//Evento changeGroup : Evento change para pestañas, collapsible y accordion.
task_changeGroup_G_LOANPARSTB_361369 = (entities: Model, changedGroupEventArgs: any) => {
    changedGroupEventArgs.commons.execServer = false;

    //changedGroupEventArgs.commons.serverParameters.entityName = true;


    let nav: any = changedGroupEventArgs.commons.api.navigation;

    let params: any = nav.getCustomDialogParameters();

    //INFORMACION GENERAL
    if ((changedGroupEventArgs.commons.item.id === 'G_LOANPARBTT_780369') && (changedGroupEventArgs.commons.item.isOpen === true)) {
        console.log("Open by " + changedGroupEventArgs.commons.item.id);
       
        nav.address = {
            moduleId: 'LNSPR',
            subModuleId: 'OPRTN',
            taskId: 'T_LNSPRSHDBNXGH_268',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_LOANSOPETN_404268'
        };
        nav.queryParameters = {
            mode: 2
        };
        nav.customDialogParameters = {
            operation: entities.Loan.loanBankID
        };
        nav.registerView('G_LOANPARBTT_780369');
    }

    //RUBROS
    if ((changedGroupEventArgs.commons.item.id === 'G_LOANPARNET_643369') && (changedGroupEventArgs.commons.item.isOpen === true)) {
        console.log("Open by " + changedGroupEventArgs.commons.item.id);

        nav.address = {
            moduleId: 'LNSPR',
            subModuleId: 'OPRTN',
            taskId: 'T_LNSPRHWGYLNWJ_330',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_OPERATIOEE_354330'
        };
        nav.queryParameters = {
            mode: 2
        };
        nav.customDialogParameters = {
            operation: entities.Loan.loanBankID,
            money: entities.Loan.codCurrency,
            typeOperation: entities.Loan.operationTypeID,
            desempar: 'S'
        };
        nav.registerView('G_LOANPARNET_643369');
    }

    //AMORTIZACION
    if ((changedGroupEventArgs.commons.item.id === 'G_LOANPARNSB_185369') && (changedGroupEventArgs.commons.item.isOpen === true)) {
        console.log("Open by " + changedGroupEventArgs.commons.item.id);

        nav.address = {
            moduleId: 'LNSPR',
            subModuleId: 'OPRTN',
            taskId: 'T_LNSPRGNPCEXYE_633',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_OPERATIOPA_648633'
        };
        nav.queryParameters = {
            mode: 2
        };
        nav.customDialogParameters = {
            operation: entities.Loan.loanBankID,
            amount: entities.Loan.amount,
            typeOperation: entities.Loan.operationTypeID
        };
        nav.registerView('G_LOANPARNSB_185369',false);
    }

    //DESEMBOLSO 

    if ((changedGroupEventArgs.commons.item.id === 'G_LOANPARTDT_335369') && (changedGroupEventArgs.commons.item.isOpen === true)) {
        console.log("Open by " + changedGroupEventArgs.commons.item.id);

        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'TRNSC',
            taskId: 'T_DISBURSEMENNN_810',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_DISBURSEMT_116810'
        };
        nav.queryParameters = {
            mode: 2
        };
        nav.customDialogParameters = {
            loan: entities.Loan
        };
        nav.registerView('G_LOANPARTDT_335369');
    }
};
