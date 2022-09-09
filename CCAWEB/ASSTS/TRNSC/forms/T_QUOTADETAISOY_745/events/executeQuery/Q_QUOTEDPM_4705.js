/**
 * Event:           executeQuery
 * ID:              Q_QUOTEDPM_4705
 * Description:     Event that's executed an execute query event on the server side.
 */
task.executeQuery.Q_QUOTEDPM_4705 = function(executeQueryEventArgs){    
    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_4705_99765', ['numQuote'], executeQueryEventArgs);
    executeQueryEventArgs.parameters.tipoCobro=executeQueryEventArgs.commons.api.vc.parentVc.model.Negotiation.interestType;
    executeQueryEventArgs.commons.execServer = true;
};
