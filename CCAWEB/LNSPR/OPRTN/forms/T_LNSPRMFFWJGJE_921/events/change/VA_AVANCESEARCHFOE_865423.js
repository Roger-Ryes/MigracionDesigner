//Entity: LoanSearchFilter
    //LoanSearchFilter.avanceSearch (CheckBox) View: LoanSearchForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task.change.VA_AVANCESEARCHFOE_865423 = function(  entities, changedEventArgs ) {
        changedEventArgs.commons.api.vc.viewState.VA_CODCURRENCYORMA_221423.visible = changedEventArgs.newValue;
        changedEventArgs.commons.api.vc.viewState.VA_DISBURSEMENTDTE_672423.visible = changedEventArgs.newValue;
        changedEventArgs.commons.api.vc.viewState.VA_STATEGXSFXFHGCB_183423.visible = changedEventArgs.newValue;
        changedEventArgs.commons.api.vc.viewState.VA_MIGRATEDOPERITA_354423.visible = changedEventArgs.newValue;
        changedEventArgs.commons.api.vc.viewState.VA_TYPEOPERATIONNN_501423.visible = changedEventArgs.newValue;
        
                
        if (getQueryStrings().type === 'C') {
            changedEventArgs.commons.api.vc.viewState.VA_NEXTREADJDATEEE_737423.visible = changedEventArgs.newValue;
            changedEventArgs.commons.api.vc.viewState.VA_TYPEOPERATIONNN_501423.visible = changedEventArgs.newValue;
            
            changedEventArgs.commons.api.vc.viewState.VA_SPACER2707FOADE_749423.visible = changedEventArgs.newValue;
            changedEventArgs.commons.api.vc.viewState.VA_SPACER2878UBAZR_925423.visible = changedEventArgs.newValue;
        }
        
        if (getQueryStrings().type === 'P' || getQueryStrings().type === 'I') {
            if(changedEventArgs.newValue){
                changedEventArgs.commons.api.vc.viewState.VA_SPACER2707FOADE_749423.visible = false;  
            }else{
                changedEventArgs.commons.api.vc.viewState.VA_SPACER2707FOADE_749423.visible = true; 
            }
            
        }

        if (getQueryStrings().type === 'U') {
            if(changedEventArgs.newValue){
                changedEventArgs.commons.api.vc.viewState.VA_SPACER2707FOADE_749423.visible = false;  
            }else{
                changedEventArgs.commons.api.vc.viewState.VA_SPACER2707FOADE_749423.visible = true; 
        }
        
        }
        
        entities.LoanSearchFilter.codCurrency = null;
        entities.LoanSearchFilter.disbursementDate = null;
        entities.LoanSearchFilter.state = null;
        entities.LoanSearchFilter.migratedOperation = null;
        entities.LoanSearchFilter.nextReadjDate = null;
        entities.LoanSearchFilter.type = null;
        
        changedEventArgs.commons.execServer = false;
    };