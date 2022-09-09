/**
 * Event:           executeQuery
 * ID:              Q_QUOTEDPM_4705
 * Description:     Event that's executed an execute query event on the server side.
 */
task_executeQuery_Q_QUOTEDPM_4705 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {    
    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_4705_99765', ['numQuote'], executeQueryEventArgs);
    executeQueryEventArgs.parameters.tipoCobro = executeQueryEventArgs.commons.api.parentVc?.model.Negotiation.interestType;
    executeQueryEventArgs.commons.execServer = true;
};
