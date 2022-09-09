//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: LoansDistributionMembers
task.initData.VC_LOANSDISMM_305194 = function (entities, initDataEventArgs) {

    entities.Members.editionMode = initDataEventArgs.commons.constants.mode.Insert;
    if (initDataEventArgs.commons.api.vc.mode == initDataEventArgs.commons.constants.mode.Insert) {

        entities.Members.sequential = initDataEventArgs.commons.api.parentVc.model.LoanLinesCreation.sequential;
        entities.Members.codLine = initDataEventArgs.commons.api.parentVc.model.LoanLinesCreation.lineCode;
        entities.Members.used = 0;
        entities.Members.available = 0;
        entities.Members.control = 'N';
        
        initDataEventArgs.commons.execServer = false;

    } else if(initDataEventArgs.commons.api.vc.mode == initDataEventArgs.commons.constants.mode.Query){
        
        entities.Members.codLine = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().codLinea;
    
        initDataEventArgs.commons.execServer = false;    
    }else if(initDataEventArgs.commons.api.vc.mode == initDataEventArgs.commons.constants.mode.Update){
        entities.Members.sequential = initDataEventArgs.commons.api.parentVc.model.LoanLinesCreation.sequential;
        entities.Members.codLine = initDataEventArgs.commons.api.parentVc.model.LoanLinesCreation.lineCode;
        entities.Members.used = 0;
        entities.Members.available = 0;
        entities.Members.control = 'N';
        initDataEventArgs.commons.execServer = false;
    }




};
