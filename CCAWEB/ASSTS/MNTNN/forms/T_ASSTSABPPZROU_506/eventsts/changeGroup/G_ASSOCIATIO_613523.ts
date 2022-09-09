// () View: View of AssociateDisassociateForm
//Evento changeGroup : Evento change para pestañas, collapsible y accordion.
task_changeGroup_G_ASSOCIATIO_613523 = (entities: Model, changedGroupEventArgs: any) => {
    changedGroupEventArgs.commons.execServer = false;
    let nav: any = changedGroupEventArgs.commons.api.navigation;

    if ((changedGroupEventArgs.commons.item.id === 'G_ASSOCIATTA_623523') && (changedGroupEventArgs.commons.item.isOpen === true)) {

        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'MNTNN',
            taskId: 'T_ASSTSDXZMZWIL_957',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_LOANITEMSS_778957'
        };
        nav.queryParameters = {
            mode: 2
        };
        nav.customDialogParameters = {
            loan: entities.Loan
        };
        nav.registerView('G_ASSOCIATTA_623523');
    } else if ((changedGroupEventArgs.commons.item.id === 'G_ASSOCIAOTE_595523') && (changedGroupEventArgs.commons.item.isOpen === true)) {

        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'CMMNS',
            taskId: 'T_AMORTIZATIOON_261',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_AMORTIZAII_339261'
        };
        nav.queryParameters = {
            mode: 2
        };
        nav.customDialogParameters = {
            loan: entities.Loan,
            operation: entities.Loan.loanBankID
        };
        nav.registerView('G_ASSOCIASIT_808523');
    }
};
