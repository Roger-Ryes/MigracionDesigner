//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: LoanLinesCreate
task_initData_VC_LOANLINESS_983793 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
        
    if(initDataEventArgs.commons.api.vc.mode == initDataEventArgs.commons.constants.mode.Insert){
        mode = initDataEventArgs.commons.constants.mode.Insert;
        let nav: any = initDataEventArgs.commons.api.navigation;

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
        initDataEventArgs.commons.execServer = false;
    }else if(initDataEventArgs.commons.api.vc.mode == initDataEventArgs.commons.constants.mode.Update){
        mode = initDataEventArgs.commons.constants.mode.Update;
        let nav: any = initDataEventArgs.commons.api.navigation;

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
        nav.customDialogParameters = {
            secuencial: initDataEventArgs.commons.api.navigation.getCustomDialogParameters().secuencial
        };

        nav.registerView('G_LOANLINSSA_305461', false);
        initDataEventArgs.commons.execServer = true;
    }
    
    
};