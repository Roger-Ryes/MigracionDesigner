//Start signature to callBack event to VC_BANKACCOMU_224777
    task_initDataCallback_VC_BANKACCOMU_224777 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
        //here your code
        initDataEventArgs.commons.api.vc.viewState.VA_VASIMPLELABELLL_811523.label = entities.Entity1.Attribute2;
    };