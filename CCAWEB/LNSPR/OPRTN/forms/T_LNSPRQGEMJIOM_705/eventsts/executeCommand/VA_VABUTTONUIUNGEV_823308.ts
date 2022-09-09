// (Button) 
task_executeCommand_VA_VABUTTONUIUNGEV_823308 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {

    entities.LoansLineGuarantee.guarantee = null;
    entities.LoansLineGuarantee.guaranteeValue = null;
    entities.LoansLineGuarantee.type = null;
    entities.LoansLineGuarantee.client = null;
    entities.LoansLineGuarantee.clientCode = null;  
    entities.LoansLineGuarantee.guaranteeType = null;
    entities.LoansLineGuarantee.guaranteeTypeCode = null;
    executeCommandEventArgs.commons.api.viewState.disable('VA_VABUTTONZLYUQVN_789308');
    
    executeCommandEventArgs.commons.execServer = false;

};