//designer-hint: 2693: 'any' only refers to a type, but is being used as a value here.
//designer-hint: 2304: Cannot find name 'Model'.
//designer-hint: 7028: Unused label.
cleanElements: any = (entities: Model) => {
    entities.RefinanceLoanFilter.totalRefinance = 0;
    entities.RefinanceLoanFilter.totalToRenew =  entities.RefinanceLoanFilter.totalRefinance;
    entities.RefinanceLoanFilter.newLoanTerm = 0;
    // entities.RefinanceLoanFilter.periodicity = 'MES(ES)';
    //entities.RefinanceLoanFilter.newLoanCurrency = 'MX';
    entities.RefinanceLoanFilter.overDue = 'NO';
    entities.RefinanceLoanFilter.capitalBalance = 0;
    entities.RefinanceLoanFilter.interestBalance = 0;
    entities.RefinanceLoanFilter.arrearsBalance = 0;
    entities.RefinanceLoanFilter.otherBalance = 0;
    entities.RefinanceLoanFilter.aditionalBalance = 0;

    entities.RefinanceLoanFilter.capitalBalanceNew = 0;
    entities.RefinanceLoanFilter.interestBalanceNew = 0;
    entities.RefinanceLoanFilter.otherBalanceNew = 0;
    entities.RefinanceLoanFilter.aditionalBalanceNew = 0;

    entities.RefinanceLoanFilter.capitalBalanceLocal = 0;
    entities.RefinanceLoanFilter.interestBalanceLocal = 0;
    entities.RefinanceLoanFilter.otherBalanceLocal = 0;
    entities.RefinanceLoanFilter.aditionalBalanceLocal = 0;
    entities.RefinanceLoanFilter.valuePay = 0;
    entities.RefinanceLoanFilter.graceDividend = 0;

    entities.RefinanceLoanFilter.additionalValue = 0;
    entities.RefinanceLoanFilter.fixedPayDay = false;
    entities.RefinanceLoanFilter.periodicity = "M";
    entities.RefinanceLoanFilter.newLoanTerm = 12;
    entities.RefinanceLoanFilter.termInterest = 1;
    entities.RefinanceLoanFilter.termCapital = 1;
    entities.RefinanceLoanFilter.paymentDay = 0;
    entities.RefinanceLoanFilter.termGraceInt = 0;
    entities.RefinanceLoanFilter.termGraceCap = 0;
    entities.RefinanceLoanFilter.typeGrace = "S";
    entities.RefinanceLoanFilter.typeFee = "M";


     entities.RefinanceLoanFilter.basicInsurance = "false";

};



//designer-hint: 2304: Cannot find name 'task_gridRowCommand_VA_CHECKBOXKZZRISM_582515'.
task_gridRowCommand_VA_CHECKBOXKZZRISM_582515 = (
    //designer-hint: 2304: Cannot find name 'Model'.
    //designer-hint: 6133: 'entities' is declared but its value is never read.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelGridRowCommandExecuteEventArgs'.
    gridRowCommandEventArgs: CobisModelGridRowCommandExecuteEventArgs
) => {

    gridRowCommandEventArgs.commons.execServer = false;
    gridRowCommandEventArgs.commons.api.grid.updateRow('RefinanceLoans', gridRowCommandEventArgs.rowIndex, {
        selected: (gridRowCommandEventArgs.rowData.selected !== true)
    });

};
