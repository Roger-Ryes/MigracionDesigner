//gridRowDeleting QueryView: QV_ECPR_JAA30
//Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
task_gridRowDeleting_QV_ECPR_JAA30 = (
    entities: Model,
    gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
) => {
    gridRowDeletingEventArgs.commons.execServer = false;
    changeAmortization = true;
    for (let a: any = 0; a < entities.AmortizationEntity.length - 1; a++) {
        entities.AmortizationEntity[a].dividend = (+a + 1);
    }
    gridRowDeletingEventArgs.commons.api.vc.executeCommand("VA_VAVABUTTONOH3FZ_246198", "VA_VAVABUTTONOH3FZ_246198", validator, false, false, '', false);
};