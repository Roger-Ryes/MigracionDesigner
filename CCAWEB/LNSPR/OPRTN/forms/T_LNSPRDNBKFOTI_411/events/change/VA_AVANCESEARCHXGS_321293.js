

//Entity: LoanSearchFilter
//LoanSearchFilter.avanceSearch (CheckBox) View: StatusChangeMassive
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_AVANCESEARCHXGS_321293 = function(  entities, changedEventArgs ) {    
    changedEventArgs.commons.api.vc.viewState.VA_CODCURRENCYNEWR_137293.visible = changedEventArgs.newValue;
    changedEventArgs.commons.api.vc.viewState.VA_DISBURSEMENTETD_259293.visible = changedEventArgs.newValue;
    changedEventArgs.commons.api.vc.viewState.VA_STATESICWPQOPFM_485293.visible = changedEventArgs.newValue;
    changedEventArgs.commons.api.vc.viewState.VA_MIGRATEDOPERIAA_938293.visible = changedEventArgs.newValue;
    changedEventArgs.commons.api.vc.viewState.VA_TYPEFPEZUZQRCCT_308293.visible = changedEventArgs.newValue;
    
    if(changedEventArgs.newValue){
        changedEventArgs.commons.api.vc.viewState.Spacer1973.visible = false;
    }else{
        changedEventArgs.commons.api.vc.viewState.Spacer1973.visible = true;
    }
    
    entities.LoanSearchFilter.codCurrency = null;
    entities.LoanSearchFilter.disbursementDate = null;
    entities.LoanSearchFilter.state = null;
    entities.LoanSearchFilter.migratedOperation = null;
    entities.LoanSearchFilter.type = null;
    
    
    
    changedEventArgs.commons.execServer = false;

};