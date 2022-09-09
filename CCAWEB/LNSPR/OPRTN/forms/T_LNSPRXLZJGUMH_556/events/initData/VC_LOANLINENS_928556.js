//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: LoanLineCreation
task.initData.VC_LOANLINENS_928556 = function (entities, initDataEventArgs){
    if (entities.LoanLinesCreation.nature) {
        initDataEventArgs.commons.api.viewState.enable('VA_CLIENTENOMBREEE_802412');
    } else {
        initDataEventArgs.commons.api.viewState.disable('VA_CLIENTENOMBREEE_802412');
    }
    if(initDataEventArgs.commons.api.vc.mode == initDataEventArgs.commons.constants.mode.Insert){
        calcular = true;
        entities.LoanLinesCreation.used = 0;
        entities.LoanLinesCreation.available = 0;
        entities.LoanLinesCreation.estado = 'PEN';
        entities.LoanLinesCreation.startDate = new Date(cobis.containerScope.preferences.processDate);
        entities.LoanLinesCreation.office = JSON.parse(sessionStorage.userOffice).code;
        initDataEventArgs.commons.execServer = false;
        
    }else if(initDataEventArgs.commons.api.vc.mode == initDataEventArgs.commons.constants.mode.Query){
        
        entities.LoanLinesCreation.sequential = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().secuencial;
    
        initDataEventArgs.commons.execServer = true;    
    }else if(initDataEventArgs.commons.api.vc.mode == initDataEventArgs.commons.constants.mode.Update){
        
        entities.LoanLinesCreation.sequential = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().secuencial;
        
        initDataEventArgs.commons.execServer = true;
    }

    

};