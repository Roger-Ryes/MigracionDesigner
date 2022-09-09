//Start signature to Callback event to Q_OPERLSST_KU21
task_executeQueryCallback_Q_OPERLSST_KU21 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
) => {
    //if (executeQueryCallbackEventArgs.success) {
    let grid: any = executeQueryCallbackEventArgs.commons.api.grid;

    let parentVc: any = executeQueryCallbackEventArgs.commons.api.parentVc;
    let typeAggregate: any = entities.GeneralParametersQuery.aggregate;
    executeQueryCallbackEventArgs.commons.api.viewState.show('VC_RCGXEYTMZG_697147');

    if (entities.OperationItemsList.length > 0) {
        for (let i: any = 0; i < entities.OperationItemsList.length; i++) {
            if (entities.OperationItemsList.data()[i].typeItem == 'C' || entities.OperationItemsList.data()[i].typeItem == 'I' || entities.OperationItemsList.data()[i].typeItem == 'M' || entities.OperationItemsList.data()[i].item == 'IVA_INT' || entities.OperationItemsList[i].item == 'IVA_IMO') {
                executeQueryCallbackEventArgs.commons.api.grid.hideGridRowCommand('QV_MC21_OVS27', entities.OperationItemsList[i], 'delete');
            }
            
            if(typeAggregate == 'S' && parentVc && parentVc.id == 'VC_RESTRUCTEG_166525'){
                grid.hideGridRowCommand('QV_MC21_OVS27', entities.OperationItemsList[i], 'delete');
                grid.hideGridRowCommand('QV_MC21_OVS27', entities.OperationItemsList[i], 'edit'); 
            }
        }
    }
    // }
};
