//Entity: RefinanceLoanFilter
    //RefinanceLoanFilter.additionalValue (TextInputBox) View: RefinanceLoansFilter
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    //designer-hint: 2304: Cannot find name 'task_change_VA_ADDITIONALVAUUU_896515'.
    //designer-hint: 2304: Cannot find name 'Model'.
    //designer-hint: 2304: Cannot find name 'CobisModelChangeEventArgs'.
    task_change_VA_ADDITIONALVAUUU_896515 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
      if(changedEventArgs.newValue != null  ){
        changedEventArgs.commons.execServer = true;
      }else{
          changedEventArgs.commons.execServer = false;
          entities.RefinanceLoanFilter.additionalValue =  0.00;
      }
        
            /*entities.RefinanceLoanFilter.capitalBalance = 0;
        entities.RefinanceLoanFilter.interestBalance = "";        
        entities.RefinanceLoanFilter.otherBalance = 0;
        entities.RefinanceLoanFilter.aditionalBalance = 0;
        var additionalValue = entities.RefinanceLoanFilter.additionalValue;
        var totalRefinance  = 0;
        
        for (var i = 0; i < entities.RefinanceLoans.length; i++) {
            entities.RefinanceLoanFilter.capitalBalance = entities.RefinanceLoanFilter.capitalBalance + entities.RefinanceLoans[i].capitalBalance
            totalRefinance = totalRefinance + entities.RefinanceLoans[i].capitalBalance;            
            entities.RefinanceLoanFilter.otherBalance = entities.RefinanceLoanFilter.otherBalance + entities.RefinanceLoans[i].interestBalance;
            totalRefinance = totalRefinance + entities.RefinanceLoans[i].interestBalance;
            entities.RefinanceLoanFilter.otherBalance = entities.RefinanceLoanFilter.otherBalance + entities.RefinanceLoans[i].defaultBalance
            totalRefinance = totalRefinance + entities.RefinanceLoans[i].defaultBalance;
            entities.RefinanceLoanFilter.otherBalance = entities.RefinanceLoanFilter.otherBalance + entities.RefinanceLoans[i].otherConceptsBalance
            totalRefinance = totalRefinance + entities.RefinanceLoans[i].otherConceptsBalance;
            
        }
        totalRefinance  = totalRefinance + additionalValue;
   // totalRefinance = kendo.toString(totalRefinance, "n2");
   // additionalValue = kendo.toString(additionalValue, "n2");
        entities.RefinanceLoanFilter.aditionalBalance = additionalValue;
        entities.RefinanceLoanFilter.totalRefinance = totalRefinance
    entities.RefinanceLoanFilter.totalToRenew = entities.RefinanceLoanFilter.totalRefinance*/
        
    };