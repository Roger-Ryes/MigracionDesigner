//gridRowSelecting QueryView: QV_LM37_VTI26
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_LM37_VTI26 = function (entities, gridRowSelectingEventArgs) {
    gridRowSelectingEventArgs.commons.execServer = false;
    var loanBankCode;
    if (gridRowSelectingEventArgs.commons.api.parentVc.id == "VC_PROJECTIRJ_862619"){
        //Open Modal[Simulación Reajuste]
        loanBankCode = gridRowSelectingEventArgs.commons.api.parentVc.customDialogParameters.operation;
    }else{
        loanBankCode = entities.Loan.loanBankID
    }
    
        //Open Modal
        var nav = gridRowSelectingEventArgs.commons.api.navigation;
        nav.label = cobis.translate('ASSTS.LBL_ASSTS_DESGLOSCO_45546');
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