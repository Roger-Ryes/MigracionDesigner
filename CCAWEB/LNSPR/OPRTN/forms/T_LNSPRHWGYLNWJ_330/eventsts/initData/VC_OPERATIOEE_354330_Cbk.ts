
//Start signature to Callback event to VC_OPERATIOEE_354330
task_initDataCallback_VC_OPERATIOEE_354330 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
) => {
    let viewState: any = initDataCallbackEventArgs.commons.api.viewState;
    let parentVc: any = initDataCallbackEventArgs.commons.api.parentVc;
    let grid: any = initDataCallbackEventArgs.commons.api.grid;
    let typeAggregate: any = entities.GeneralParametersQuery.aggregate;

    //ocultar si es AGREGADA y en reestructura
    if(typeAggregate == 'S' && parentVc && parentVc.id == 'VC_RESTRUCTEG_166525'){    
        viewState.hide('VA_VAVABUTTONTR__P_260587');// Boton guardar
        grid.hideToolBarButton('QV_MC21_OVS27', 'create');
    }
};
