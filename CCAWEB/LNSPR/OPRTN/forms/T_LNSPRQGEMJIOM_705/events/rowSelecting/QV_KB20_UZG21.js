//gridRowSelecting QueryView: QV_KB20_UZG21
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_KB20_UZG21 = function (entities, gridRowSelectingEventArgs) {

    entities.LoansLineGuarantee.guarantee = gridRowSelectingEventArgs.rowData.code;
    entities.LoansLineGuarantee.guaranteeValue = gridRowSelectingEventArgs.rowData.initialValue;
    entities.LoansLineGuarantee.type = gridRowSelectingEventArgs.rowData.type;
    entities.LoansLineGuarantee.classe = gridRowSelectingEventArgs.rowData.clase;
    entities.LoansLineGuarantee.clientGar = gridRowSelectingEventArgs.rowData.clientGar;

    gridRowSelectingEventArgs.commons.api.viewState.enable('VA_VABUTTONZLYUQVN_789308');
    gridRowSelectingEventArgs.commons.execServer = false;

};