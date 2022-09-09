//gridRowUpdating QueryView: QV_ECPR_JAA30
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowUpdating.QV_ECPR_JAA30 = function (entities, gridRowUpdatingEventArgs) {
    gridRowUpdatingEventArgs.commons.execServer = false;
    changeAmortization = true;
    gridRowUpdatingEventArgs.rowData.dynamicField1 = +gridRowUpdatingEventArgs.rowData.dynamicField1 + +diferenciaCapitalCuota;
    diferenciaCapitalCuota = 0;
};