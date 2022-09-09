

//Entity: RefinanceLoanFilter
//RefinanceLoanFilter.graceDividend (TextInputBox) View: RefinanceLoansFilter
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_5032SUOKWXIJNUR_934515 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;

    let grace: any = (entities.RefinanceLoanFilter.termGraceInt) ? entities.RefinanceLoanFilter.termGraceInt : 0;
    let numDividend: any = (entities.RefinanceLoanFilter.graceDividend) ? entities.RefinanceLoanFilter.graceDividend : 0;
    let totalTerm: any = grace + numDividend;

    if(entities.RefinanceLoanFilter.typeGrace == 'S' && totalTerm > entities.RefinanceLoanFilter.newLoanTerm!){
        
        changedEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ELNUMDEDS_61097', false, null, this.ASSTS.timer);
        
        entities.RefinanceLoanFilter.graceDividend = 0;
        
       }else if(entities.RefinanceLoanFilter.typeGrace == 'S' &&  entities.RefinanceLoanFilter.graceDividend! < 0){
         changedEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ELNUMDEER_90307', false, null, this.ASSTS.timer);
           
           entities.RefinanceLoanFilter.graceDividend = 0;
       }
};