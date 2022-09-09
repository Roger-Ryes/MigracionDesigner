
//Start signature to Callback event to VC_OPERATIOEE_354330
task.initDataCallback.VC_OPERATIOEE_354330 = function(entities, initDataCallbackEventArgs) {
    var viewState = initDataCallbackEventArgs.commons.api.viewState;
    var parentVc = initDataCallbackEventArgs.commons.api.parentVc;
    var grid = initDataCallbackEventArgs.commons.api.grid;
    var typeAggregate = entities.GeneralParametersQuery.aggregate;
    
    //ocultar si es AGREGADA y en reestructura
    if(typeAggregate == 'S' && parentVc && parentVc.id == 'VC_RESTRUCTEG_166525'){    
        viewState.hide('VA_VAVABUTTONTR__P_260587');// Boton guardar
        grid.hideToolBarButton('QV_MC21_OVS27', 'create');
    }
};
