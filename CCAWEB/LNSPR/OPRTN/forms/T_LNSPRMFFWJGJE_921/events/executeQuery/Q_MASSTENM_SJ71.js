//MassivePaymentsQuery Entity: MassivePayments
task.executeQuery.Q_MASSTENM_SJ71 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.lote = lote;

    //executeQueryEventArgs.commons.serverParameters.MassivePayments = true;
    
    //Paginación
        executeQueryEventArgs.parameters.pagSec = 0;

        executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_BZ71_NGV26', 'sequentialPM', executeQueryEventArgs);
        if (executeQueryEventArgs.config.appendRecords) {
            var ultimaFila = executeQueryEventArgs.commons.api.grid.lastRow('QV_BZ71_NGV26')
            executeQueryEventArgs.parameters.pagSec = ultimaFila.sequentialPM;
        
        }
    executeQueryEventArgs.commons.execServer = true;
};