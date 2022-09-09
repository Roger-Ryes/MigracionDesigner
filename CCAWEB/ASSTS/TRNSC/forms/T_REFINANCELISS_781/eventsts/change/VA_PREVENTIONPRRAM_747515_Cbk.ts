//Start signature to Callback event to VA_PREVENTIONPRRAM_747515
    //designer-hint: 2304: Cannot find name 'task_changeCallback_VA_PREVENTIONPRRAM_747515'.
    task_changeCallback_VA_PREVENTIONPRRAM_747515 = (
        //designer-hint: 2304: Cannot find name 'Model'.
        entities: Model,
        //designer-hint: 2304: Cannot find name 'CobisModelChangeCallbackEventArgs'.
        //designer-hint: 6133: 'changeCallbackEventArgs' is declared but its value is never read.
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