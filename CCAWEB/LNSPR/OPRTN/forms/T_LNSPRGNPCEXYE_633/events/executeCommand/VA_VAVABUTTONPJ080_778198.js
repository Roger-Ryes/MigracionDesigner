// (Button) - Imprimir reembolso
task.executeCommand.VA_VAVABUTTONPJ080_778198 = function (entities, executeCommandEventArgs) {
    executeCommandEventArgs.commons.execServer = false;
    var name = null;
    for (var i = 0; i < entities.DebtorEntity._data.length; i++) {
        if (entities.DebtorEntity._data[i].role.trim() == 'D') {
            name = entities.DebtorEntity._data[i].fullName;
            break;
        }
    }
    var index = 0;
    var parameters = [];    
    parameters[index] = [];
    parameters[index][0] = 'operation';
    parameters[index][1]= entities.OperationEntity.operation;
    index++;
    parameters[index] = [];
    parameters[index][0] = 'name';
    parameters[index][1] = name;
    index++;
    
    var argsTitle={
        reportTitle: 'Simulaci\u00f3n'
    }
    
    Utils.generarReporteModal('settlementTmp', parameters, argsTitle)

};