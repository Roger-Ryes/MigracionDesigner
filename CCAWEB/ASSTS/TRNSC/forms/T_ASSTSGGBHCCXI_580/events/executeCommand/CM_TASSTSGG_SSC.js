


// (Button) 
task.executeCommand.CM_TASSTSGG_SSC = function(entities, executeCommandEventArgs) {
    var execServer = false
    if(entities.CompaniesDiscountsList != null && entities.CompaniesDiscountsList.data().length > 0){
        execServer = true
    }
    executeCommandEventArgs.commons.execServer = execServer;
    //executeCommandEventArgs.commons.serverParameters.entityName = true;
};