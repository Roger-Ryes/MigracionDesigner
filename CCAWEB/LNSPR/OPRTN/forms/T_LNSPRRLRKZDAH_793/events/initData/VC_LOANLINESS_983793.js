//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: LoanLinesCreate
task.initData.VC_LOANLINESS_983793 = function (entities, initDataEventArgs){
        
    if(initDataEventArgs.commons.api.vc.mode == initDataEventArgs.commons.constants.mode.Insert){
        mode = initDataEventArgs.commons.constants.mode.Insert;
    var nav = initDataEventArgs.commons.api.navigation;

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
        var nav = initDataEventArgs.commons.api.navigation;

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