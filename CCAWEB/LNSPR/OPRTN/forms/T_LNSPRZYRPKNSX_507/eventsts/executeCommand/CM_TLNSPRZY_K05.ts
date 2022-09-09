// (Button) 
task_executeCommand_CM_TLNSPRZY_K05 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    let auxData: any = [];
    executeCommandEventArgs.commons.api.parentVc?.model.LoanList.data().forEach((itemData: any) => {
        if (itemData.seleccion) {
            itemData.descriptionMistake = undefined;
            auxData.push(itemData);
        }
    });
    entities.LoanList = auxData;
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.entityName = true;
};