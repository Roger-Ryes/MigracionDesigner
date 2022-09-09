//ConceptItemsQuery Entity: ConceptItems
task.executeQuery.Q_CONCPPTM_GI69 = function (executeQueryEventArgs) {
    var parentVc = executeQueryEventArgs.commons.api.parentVc;
    
    
    executeQueryEventArgs.parameters.tOperacion = parentVc.model.OperationEntity.typeOperation;
    executeQueryEventArgs.parameters.moneda = parentVc.model.OperationEntity.money;
    executeQueryEventArgs.parameters.operacion = 'S';

    
    //asignacion variable actualizacion prestamos != no vigente
    if(parentVc && parentVc.parentVc && parentVc.parentVc.id == 'VC_FSEARCHRUU_598110' ){
        state = parentVc.model.GeneralInformation.codState;
        if(state != stateOp){
       executeQueryEventArgs.parameters.opActiva = 'S';
    }
    }
    
    if (parentVc && parentVc.parentVc && parentVc.parentVc.id == "VC_LOANPARTIR_265871") {
        executeQueryEventArgs.parameters.desempar = 'S';
    }

    if (executeQueryEventArgs.commons.api.vc.mode == executeQueryEventArgs.commons.constants.mode.Insert) {
        executeQueryEventArgs.parameters.modo = 3;
        executeQueryEventArgs.parameters.banco = parentVc.model.OperationEntity.operation;
    } else if (executeQueryEventArgs.commons.api.vc.mode == executeQueryEventArgs.commons.constants.mode.Update) {
        executeQueryEventArgs.parameters.modo = 0;
    }

    if (executeQueryEventArgs.parameters.tOperacion && executeQueryEventArgs.parameters.moneda == 0) {
        executeQueryEventArgs.commons.execServer = true;
    } else {
        executeQueryEventArgs.commons.execServer = executeQueryEventArgs.parameters.tOperacion && executeQueryEventArgs.parameters.moneda ? true : false;
    }
    //executeQueryEventArgs.commons.serverParameters.ConceptItems = true;
};
