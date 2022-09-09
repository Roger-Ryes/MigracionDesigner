// (Button) - Imprimir
task.executeCommand.VA_VAVABUTTONVJFY0_286198 = function (entities, executeCommandEventArgs) {
    var name = null;
    for (var i = 0; i < entities.DebtorEntity._data.length; i++) {
        if (entities.DebtorEntity._data[i].role.trim() == 'D') {
            name = entities.DebtorEntity._data[i].fullName;
            break;
        }
    }
    executeCommandEventArgs.commons.execServer = false;

    var reportTitle = "SIMULACION";
    var itemReporte = "";
    var reportName = "SimulationAmortization";
    var args = [
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