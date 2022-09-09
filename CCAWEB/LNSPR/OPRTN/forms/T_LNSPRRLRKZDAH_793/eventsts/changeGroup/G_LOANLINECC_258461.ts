// () View: View of LoanLinesCreate
//Evento changeGroup : Evento change para pestañas, collapsible y accordion.
task_changeGroup_G_LOANLINECC_258461 = (entities: Model, changedGroupEventArgs: any) => {
    changedGroupEventArgs.commons.execServer = false;

    let nav: any = changedGroupEventArgs.commons.api.navigation;

    if((changedGroupEventArgs.commons.item.id === 'G_LOANLINSSA_305461') && (changedGroupEventArgs.commons.item.isOpen === true)){

        nav.address = {
            moduleId: 'LNSPR',
            subModuleId: 'OPRTN',
            taskId: 'T_LNSPRXLZJGUMH_556',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_LOANLINENS_928556'
        };
        nav.queryParameters = {
            mode: mode
        };

        nav.registerView('G_LOANLINSSA_305461', false);
    }

    //DISTRIBUCION POR PRODUCTO
    if ((changedGroupEventArgs.commons.item.id === 'G_LOANLINRER_722461') && (changedGroupEventArgs.commons.item.isOpen === true)) {
        nav.address = {
            moduleId: 'LNSPR',
            subModuleId: 'OPRTN',
            taskId: 'T_LNSPRSBSNRATX_181',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_PRODUCTLIN_542181'
        };
        nav.queryParameters = {
            mode: mode
        };

        nav.customDialogParameters = {
            lineCode: entities.LoanLinesCreation.lineCode,
            sequential :entities.LoanLinesCreation.sequential,
            nature : entities.LoanLinesCreation.nature
        };
        nav.registerView('G_LOANLINRER_722461');
    }
    //DISTRIBUCION POR MIEMBRO
    if ((changedGroupEventArgs.commons.item.id === 'G_LOANLINACR_870461') && (changedGroupEventArgs.commons.item.isOpen === true)) {

             nav.address = {
                 moduleId: 'LNSPR',
                 subModuleId: 'OPRTN',
                 taskId: 'T_LNSPRNBKRHAIB_194',
                 taskVersion: '1.0.0',
                 viewContainerId: 'VC_LOANSDISMM_305194'
             };
             nav.queryParameters = {
                 mode: mode
             };
             nav.customDialogParameters = {
                 codLinea: changedGroupEventArgs.commons.api.navigation.getCustomDialogParameters().codLinea
             };

             nav.registerView('G_LOANLINACR_870461', false);

    }
    //GARANTIAS DE LA lINEA
    if ((changedGroupEventArgs.commons.item.id === 'G_LOANLINTRE_952461') && (changedGroupEventArgs.commons.item.isOpen === true)) {
            nav.address = {
                moduleId: 'LNSPR',
                subModuleId: 'OPRTN',
                taskId: 'T_LNSPRQGEMJIOM_705',
                taskVersion: '1.0.0',
                viewContainerId: 'VC_LOANSLINER_641705'
            };
            nav.queryParameters = {
                mode: mode
            };
            nav.customDialogParameters = {
                codLinea: changedGroupEventArgs.commons.api.navigation.getCustomDialogParameters().codLinea
            };

            nav.registerView('G_LOANLINTRE_952461', false);

   }
};