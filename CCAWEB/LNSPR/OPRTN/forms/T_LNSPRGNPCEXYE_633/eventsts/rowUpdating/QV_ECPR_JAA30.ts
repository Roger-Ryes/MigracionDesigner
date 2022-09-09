//gridRowUpdating QueryView: QV_ECPR_JAA30
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task_gridRowUpdating_QV_ECPR_JAA30 = (
    entities: Model,
    gridRowUpdatingEventArgs: CobisModelGridRowActionEventArgs
) => {
    gridRowUpdatingEventArgs.commons.execServer = false;
    changeAmortization = true;
    gridRowUpdatingEventArgs.rowData.dynamicField1 = +gridRowUpdatingEventArgs.rowData.dynamicField1 + +diferenciaCapitalCuota;
    diferenciaCapitalCuota = 0;
};