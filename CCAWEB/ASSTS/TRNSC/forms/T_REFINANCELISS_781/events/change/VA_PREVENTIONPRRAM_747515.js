//Entity: RefinanceLoanFilter
//RefinanceLoanFilter.preventionProgram (ComboBox) View: RefinanceLoansFilter
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_PREVENTIONPRRAM_747515 = function (entities, changedEventArgs) {

    if (String(entities.RefinanceLoanFilter.totalRefinance).indexOf(",") != -1) {
        entities.RefinanceLoanFilter.totalRefinance = parseFloat((entities.RefinanceLoanFilter.totalRefinance).replace(',', ''));

    }

    changedEventArgs.commons.serverParameters.RefinanceLoanFilter = true;
    changedEventArgs.commons.serverParameters.RulerData = true;
    changedEventArgs.commons.serverParameters.RulerResult = true;
    if (entities.RefinanceLoanFilter.preventionProgram == "NAP") {
        entities.RefinanceLoanFilter.totalToRenew = entities.RefinanceLoanFilter.totalRefinance;
        changedEventArgs.commons.execServer = false;
    } else {
        var operType = entities.RefinanceLoanFilter.operationType;
        if(angular.isUndefined(operType) || operType == null || operType == ''){
            changedEventArgs.commons.execServer = false;
            changedEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.LBL_ASSTS_DEBESELTA_29044',false, null, timer);
            entities.RefinanceLoanFilter.preventionProgram = "NAP";
            changedEventArgs.commons.api.viewState.focus("VA_OPERATIONTYPEEE_619515");
        }else{
    changedEventArgs.commons.execServer = true;
        }
    }
};