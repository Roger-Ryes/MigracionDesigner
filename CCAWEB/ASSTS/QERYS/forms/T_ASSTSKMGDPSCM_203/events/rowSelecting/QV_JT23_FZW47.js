
//gridRowSelecting QueryView: QV_JT23_FZW47
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_JT23_FZW47 = function (entities,gridRowSelectingEventArgs) {

     gridRowSelectingEventArgs.commons.execServer = false;
    
    //Open Modal
    var nav = gridRowSelectingEventArgs.commons.api.navigation;
    nav.label = cobis.translate('ASSTS.LBL_ASSTS_DETALLEDI_67713');
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




