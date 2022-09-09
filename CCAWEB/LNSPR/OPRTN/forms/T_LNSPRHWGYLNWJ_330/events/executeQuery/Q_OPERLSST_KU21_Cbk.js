//Start signature to Callback event to Q_OPERLSST_KU21
task.executeQueryCallback.Q_OPERLSST_KU21 = function (entities, executeQueryCallbackEventArgs) {
    //if (executeQueryCallbackEventArgs.success) {
    var grid = executeQueryCallbackEventArgs.commons.api.grid;
    var parentVc = executeQueryCallbackEventArgs.commons.api.parentVc;
    var typeAggregate = entities.GeneralParametersQuery.aggregate;
    executeQueryCallbackEventArgs.commons.api.viewState.show('VC_RCGXEYTMZG_697147');

    if (entities.OperationItemsList.data().length > 0) {
        for (var i = 0; i < entities.OperationItemsList.data().length; i++) {
            if (entities.OperationItemsList.data()[i].typeItem == 'C' || entities.OperationItemsList.data()[i].typeItem == 'I' || entities.OperationItemsList.data()[i].typeItem == 'M' || entities.OperationItemsList.data()[i].item == 'IVA_INT' || entities.OperationItemsList.data()[i].item == 'IVA_IMO') {
                executeQueryCallbackEventArgs.commons.api.grid.hideGridRowCommand('QV_MC21_OVS27', entities.OperationItemsList.data()[i], 'delete');
            }
            
            if(typeAggregate == 'S' && parentVc && parentVc.id == 'VC_RESTRUCTEG_166525'){
                grid.hideGridRowCommand('QV_MC21_OVS27', entities.OperationItemsList.data()[i], 'delete');
                grid.hideGridRowCommand('QV_MC21_OVS27', entities.OperationItemsList.data()[i], 'edit'); 
            }
        }
    }
    // }
};
