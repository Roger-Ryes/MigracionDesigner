//gridRowDeleting QueryView: QV_ECPR_JAA30
//Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
task.gridRowDeleting.QV_ECPR_JAA30 = function (entities, gridRowDeletingEventArgs) {
    gridRowDeletingEventArgs.commons.execServer = false;
    changeAmortization = true;
    for (var a = 0; a < entities.AmortizationEntity._data.length - 1; a++) {
        entities.AmortizationEntity._data[a].dividend = (+a + 1);
    }
    gridRowDeletingEventArgs.commons.api.vc.executeCommand("VA_VAVABUTTONOH3FZ_246198", "VA_VAVABUTTONOH3FZ_246198", validator, false, false, '', false);
};