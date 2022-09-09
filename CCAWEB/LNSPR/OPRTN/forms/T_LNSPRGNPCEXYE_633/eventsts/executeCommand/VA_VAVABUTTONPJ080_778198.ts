// (Button) - Imprimir reembolso
task_executeCommand_VA_VAVABUTTONPJ080_778198 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    executeCommandEventArgs.commons.execServer = false;
    let name: any = null;
    for (let i: any = 0; i < entities.DebtorEntity.length; i++) {
        if (entities.DebtorEntity[i].role.trim() == 'D') {
            name = entities.DebtorEntity[i].fullName;
            break;
        }
    }
    let index: any = 0;
    let parameters: any = [];
    parameters[index] = [];
    parameters[index][0] = 'operation';
    parameters[index][1]= entities.OperationEntity.operation;
    index++;
    parameters[index] = [];
    parameters[index][0] = 'name';
    parameters[index][1] = name;
    index++;

    let argsTitle: any={
        reportTitle: 'Simulaci\u00f3n'
    };

    Utils.generarReporteModal('settlementTmp', parameters, argsTitle)
};