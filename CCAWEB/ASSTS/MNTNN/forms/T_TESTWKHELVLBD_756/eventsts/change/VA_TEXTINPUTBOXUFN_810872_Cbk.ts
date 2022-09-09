//Start signature to callBack event to VA_TEXTINPUTBOXUFN_810872
    task_changeCallback_VA_TEXTINPUTBOXUFN_810872 = (entities: Model, changeEventArgs: any) => {
        let api: any = changeEventArgs.commons.api;
        let balanceOp: any = entities.OtherCharges.balanceOp;
        let balanceDesemp: any = entities.OtherCharges.balanceDesemp;
        let categoryType: any = entities.OtherCharges.categoryType;
        if(categoryType != null){
            if(categoryType.trim() ==='Q'){
                if (balanceOp.trim() === 'N' && balanceDesemp.trim() === 'N'){
                    api.viewState.enable("VA_BASECALCULATONI_509872");
                }else{
                    api.viewState.disable("VA_BASECALCULATONI_509872");
                }
        } else {
            api.viewState.disable("VA_BASECALCULATONI_509872");
            }
    } else {
            api.viewState.disable("VA_BASECALCULATONI_509872");
        }
    };