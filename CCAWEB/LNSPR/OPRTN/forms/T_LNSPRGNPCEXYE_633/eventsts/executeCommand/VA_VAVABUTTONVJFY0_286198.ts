// (Button) - Imprimir
task_executeCommand_VA_VAVABUTTONVJFY0_286198 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    let name: any = null;
    for (let i: any = 0; i < entities.DebtorEntity.length; i++) {
        if (entities.DebtorEntity[i].role.trim() == 'D') {
            name = entities.DebtorEntity[i].fullName;
            break;
        }
    }
    executeCommandEventArgs.commons.execServer = false;

    let reportTitle: any = "SIMULACION";
    let itemReporte: any = "";
    let reportName: any = "SimulationAmortization";

    let args: any = [
        ['report.module', 'cartera'], 
        ['report.name', reportName], 
        ['bank', entities.AmortizationFormEntity.numOperation], 
        ['tipoOperacion', entities.AmortizationFormEntity.operationType], 
        ['monto', entities.AmortizationFormEntity.amount], 
        ['cliente',name ], 
        ['moneda', executeCommandEventArgs.commons.api.viewState.getDataItem("VA_MONEYWCCBPJYWVL_470221").value],
        ['fechaInicio',  kendo.toString(kendo.parseDate(entities.OperationEntity.creationDate), JSON.parse(sessionStorage.dateFormat))], 
        ['tasa', entities.AmortizationFormEntity.interest]
    ];

    Utils.generarReporteModal(itemReporte, args, reportTitle)
};