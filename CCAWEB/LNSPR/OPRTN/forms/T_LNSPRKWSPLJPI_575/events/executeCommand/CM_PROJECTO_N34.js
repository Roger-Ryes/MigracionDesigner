// (Button) 
    task.executeCommand.CM_PROJECTO_N34 = function(entities, executeCommandEventArgs) {
        var auxData = [];
         var execServer = true;
        executeCommandEventArgs.commons.api.vc.parentVc.model.LoanList.data().forEach(function(itemData){
            if (itemData.seleccion) {
                auxData.push(itemData);
            }
        })
        
        entities.LoanList = auxData;
        executeCommandEventArgs.commons.execServer = execServer;
    };