// (Button) 
task.executeCommand.CM_TLNSPRZY_K05 = function(entities, executeCommandEventArgs) {
    var auxData = [];
    executeCommandEventArgs.commons.api.vc.parentVc.model.LoanList.data().forEach(function(itemData){
        if (itemData.seleccion) {
            itemData.descriptionMistake = undefined;
            auxData.push(itemData);
        }
    });
    entities.LoanList = auxData;
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.entityName = true;

};