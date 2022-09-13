
//gridRowSelecting QueryView: QV_PJ68_WJJ41
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task_gridRowSelecting_QV_PJ68_WJJ41 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
) => {
    //Open Modal
    let nav: any = gridRowSelectingEventArgs.commons.api.navigation;

    nav.label = this.cobis.translate("ASSTS.LBL_ASSTS_DETALLEFN_34994");
    nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'TRNSC',
        taskId: 'T_ASSTSSJVXBFJD_286',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_DETAILNOIE_803286'
    };

    nav.queryParameters = {
    mode: 8
    };

    nav.modalProperties = {
    size: 'md',
    callFromGrid: false
    };

    nav.customDialogParameters = {
        secuencial:gridRowSelectingEventArgs.rowData.secuencial,
        bankId: gridRowSelectingEventArgs.commons.api.parentVc?.model.Loan.loanBankID
        
    };

    nav.openModalWindow('QV_RO76_OKE25', gridRowSelectingEventArgs.nameEntityGrid);

    gridRowSelectingEventArgs.commons.execServer = false;
};




