//gridRowSelecting QueryView: QV_LM37_VTI26
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task_gridRowSelecting_QV_LM37_VTI26 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
) => {
    gridRowSelectingEventArgs.commons.execServer = false;
    let loanBankCode: any;
    if (gridRowSelectingEventArgs.commons.api.parentVc?.id == "VC_PROJECTIRJ_862619"){
        //Open Modal[Simulación Reajuste]
        loanBankCode = gridRowSelectingEventArgs.commons.api.navigation.getCustomDialogParameters().operation;
    }else{
        loanBankCode = entities.Loan.loanBankID
    }

    //Open Modal
    let nav: any = gridRowSelectingEventArgs.commons.api.navigation;

    nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_DESGLOSCO_45546');
    nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'MNTNN',
        taskId: 'T_AMORTIZATIDTE_881',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_AMORTIZATE_895881'
    };
    nav.queryParameters = {
        mode: 2
    };
    nav.modalProperties = {
        size: 'lg',
        callFromGrid: false
    };
    nav.customDialogParameters = {
        dividend: gridRowSelectingEventArgs.rowData.share,
    loanBankID: loanBankCode
    };
    nav.openModalWindow('QV_LM37_VTI26', gridRowSelectingEventArgs.rowData);
};