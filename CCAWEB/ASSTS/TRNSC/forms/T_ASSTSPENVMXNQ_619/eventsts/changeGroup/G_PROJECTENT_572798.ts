// () View: View of ProjectionReadjustmentForm
//Evento changeGroup : Evento change para pestañas, collapsible y accordion.
task_changeGroup_G_PROJECTENT_572798 = (entities: Model, changedGroupEventArgs: any) => {
    changedGroupEventArgs.commons.execServer = false;

    let nav: any = changedGroupEventArgs.commons.api.navigation;
    let params: any = nav.getCustomDialogParameters();

    if ((changedGroupEventArgs.commons.item.id === 'G_PROJECTNTR_773798') && (changedGroupEventArgs.commons.item.isOpen === true)) {
        //AMORTIZACION
        console.log("Open by " + changedGroupEventArgs.commons.item.id);

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
            operation: entities.Loan.loanBankID,
            templateGrid:2
        };
        nav.registerView('G_PROJECTNTR_773798');
        
    }else if ((changedGroupEventArgs.commons.item.id === 'G_PROJECTNDI_257798') && (changedGroupEventArgs.commons.item.isOpen === true)) {
        console.log("Open by " + changedGroupEventArgs.commons.item.id);
        //RUBROS
        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'QERYS',
            taskId: 'T_ITEMSLOANSUXI_712',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_ITEMSLOANN_757712'
        };
        nav.queryParameters = {
            mode: 2
        };
        nav.customDialogParameters = {
            operation: entities.Loan.loanBankID
        };
        nav.registerView('G_PROJECTROE_758798');
        
        //TASAS
        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'QERYS',
            taskId: 'T_RATESPTSITVKK_186',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_RATESVLYWT_596186'
        };
        nav.queryParameters = {
            mode: 2
        };
        nav.customDialogParameters = {
            operation: entities.Loan.loanBankID
        };
        nav.registerView('G_PROJECTOAS_769798');
    
    }
};