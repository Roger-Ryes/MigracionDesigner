//Start signature to Callback event to VA_PREVENTIONPRRAM_747515
    task_changeCallback_VA_PREVENTIONPRRAM_747515 = (
        entities: Model,
        changeCallbackEventArgs: CobisModelChangeCallbackEventArgs
    ) => {
        //here your code
        let result: any = 0;

        if(this.cobis.utils.isDefined(entities.RulerResult.returnResults)){
            result = parseInt( entities.RulerResult.returnResults?.match(/(\d+)/g));
        }
        let valueAmount: any = parseFloat(entities.RefinanceLoanFilter.totalRefinance);
        if (valueAmount > 150000) {
            entities.RefinanceLoanFilter.totalToRenew = valueAmount;
        } else {
            let amoutCalculator: any = parseFloat(result) + parseFloat((entities.RefinanceLoanFilter.totalRefinance));
            if (amoutCalculator > 150000) {
                entities.RefinanceLoanFilter.totalToRenew = 150000;
            } else {
                entities.RefinanceLoanFilter.totalToRenew = amoutCalculator;
            }
        }
    };