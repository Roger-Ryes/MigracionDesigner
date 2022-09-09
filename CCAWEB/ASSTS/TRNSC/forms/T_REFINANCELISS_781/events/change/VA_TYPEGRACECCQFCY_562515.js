

//Entity: RefinanceLoanFilter
//RefinanceLoanFilter.typeGrace (DropDownList) View: RefinanceLoansFilter
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_TYPEGRACECCQFCY_562515 = function(  entities, changedEventArgs ) {

    var viewState = changedEventArgs.commons.api.viewState;
    changedEventArgs.commons.execServer = false;
    
    if(changedEventArgs.newValue == 'S'){
       viewState.show('VA_5032SUOKWXIJNUR_934515');
    }else{
       viewState.hide('VA_5032SUOKWXIJNUR_934515'); 
       entities.RefinanceLoanFilter.graceDividend = 0;
    }

};