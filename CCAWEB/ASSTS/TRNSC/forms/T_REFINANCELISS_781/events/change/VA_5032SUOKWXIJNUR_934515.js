

//Entity: RefinanceLoanFilter
//RefinanceLoanFilter.graceDividend (TextInputBox) View: RefinanceLoansFilter
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_5032SUOKWXIJNUR_934515 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
    
    var grace = (entities.RefinanceLoanFilter.termGraceInt) ? entities.RefinanceLoanFilter.termGraceInt : 0;
    
    var numDividend = (entities.RefinanceLoanFilter.graceDividend) ? entities.RefinanceLoanFilter.graceDividend : 0;
    
    var totalTerm = grace + numDividend;
    
    if(entities.RefinanceLoanFilter.typeGrace == 'S' && totalTerm > entities.RefinanceLoanFilter.newLoanTerm){
        
        changedEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ELNUMDEDS_61097', false, null, timer);
        
        entities.RefinanceLoanFilter.graceDividend = 0;
        
       }else if(entities.RefinanceLoanFilter.typeGrace == 'S' &&  entities.RefinanceLoanFilter.graceDividend < 0){
         changedEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ELNUMDEER_90307', false, null, timer);
           
           entities.RefinanceLoanFilter.graceDividend = 0;
       }
};