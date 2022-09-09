

//Entity: RefinanceLoanFilter
//RefinanceLoanFilter.capitalizeBalance (RadioButtonList) View: RefinanceLoansFilter
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_CAPITALIZEBANNE_580515 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = true;
    //changedEventArgs.commons.serverParameters.RefinanceLoanFilter = true;

};