

//Entity: RefinanceLoanFilter
//RefinanceLoanFilter.termGraceInt (TextInputBox) View: RefinanceLoansFilter
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_TERMGRACEINTJNV_305515 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    
     if(entities.RefinanceLoanFilter.termGraceInt == 0 && entities.RefinanceLoanFilter.typeGrace == 'S' ){
          entities.RefinanceLoanFilter.graceDividend = 0;
        }

};