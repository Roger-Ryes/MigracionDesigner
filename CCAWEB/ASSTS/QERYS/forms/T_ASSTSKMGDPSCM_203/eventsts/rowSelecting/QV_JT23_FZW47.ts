
//gridRowSelecting QueryView: QV_JT23_FZW47
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task_gridRowSelecting_QV_JT23_FZW47 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
) => {
    gridRowSelectingEventArgs.commons.execServer = false;

    //Open Modal
    let nav: any = gridRowSelectingEventArgs.commons.api.navigation;

    nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_DETALLEDI_67713');
    nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_ASSTSFLSVSFLG_975',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_DEFERREDEA_345975'
    };
    nav.queryParameters = {
        mode: 2
    };
    nav.modalProperties = {
        size: 'md',
        callFromGrid: false
    };
    nav.customDialogParameters = {
        dividend: gridRowSelectingEventArgs.rowData.dividend,
        loanBankID: entities.Loan.loanBankID
    };
    nav.openModalWindow('QV_JT23_FZW47', gridRowSelectingEventArgs.rowData);
};




