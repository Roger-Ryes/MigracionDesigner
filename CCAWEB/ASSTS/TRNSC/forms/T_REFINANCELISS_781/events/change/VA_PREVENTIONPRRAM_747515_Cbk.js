//Start signature to Callback event to VA_PREVENTIONPRRAM_747515
    task.changeCallback.VA_PREVENTIONPRRAM_747515 = function(entities, changeCallbackEventArgs) {
        //here your code
        var result = 0;
        if(angular.isDefined(entities.RulerResult.returnResults)){
            result = parseInt( entities.RulerResult.returnResults.match(/(\d+)/g));
        }
        var valueAmount = parseFloat(entities.RefinanceLoanFilter.totalRefinance);
            if (valueAmount > 150000) {
                entities.RefinanceLoanFilter.totalToRenew = valueAmount;
            } else {
                var amoutCalculator = parseFloat(result) + parseFloat((entities.RefinanceLoanFilter.totalRefinance));
                if (amoutCalculator > 150000) {
                    entities.RefinanceLoanFilter.totalToRenew = 150000;
                } else {
                    entities.RefinanceLoanFilter.totalToRenew = amoutCalculator;
                }
            }
    };