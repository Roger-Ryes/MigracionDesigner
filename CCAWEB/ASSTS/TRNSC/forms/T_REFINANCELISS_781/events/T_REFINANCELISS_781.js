//"TaskId": "T_REFINANCELISS_781"
var cleanElements = function (entities) {
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


    task.gridRowCommand.VA_CHECKBOXKZZRISM_582515 = function (entities, gridRowCommandEventArgs) {

        gridRowCommandEventArgs.commons.execServer = false;
        gridRowCommandEventArgs.commons.api.grid.updateRow('RefinanceLoans', gridRowCommandEventArgs.rowIndex, {
            selected: (gridRowCommandEventArgs.rowData.selected !== true)
        });

    };
