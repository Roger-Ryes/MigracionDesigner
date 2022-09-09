//gridRowSelecting QueryView: QV_HK73_UEC23
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_HK73_UEC23 = function (entities,gridRowSelectingEventArgs) {

//Open Modal
var nav = gridRowSelectingEventArgs.commons.api.navigation;
    nav.label= cobis.translate('ASSTS.LBL_ASSTS_DETALLEFN_34994');
nav.address = {
moduleId: 'ASSTS',
subModuleId: 'QERYS',
taskId: 'T_ASSTSXYNOAKAL_995',
taskVersion: '1.0.0',
viewContainerId: 'VC_LOANTRANCL_595995'
};

    nav.queryParameters = {
    mode: 8
    };
    nav.modalProperties = {
    size: 'lg',
    callFromGrid: false
    };

    nav.customDialogParameters = {
        secuential:gridRowSelectingEventArgs.rowData.secuential,
        bankId:gridRowSelectingEventArgs.commons.api.parentVc.model.Loan.loanBankID
        
    };

//Si la llamada es desde un evento de un control perteneciente a la cabecera de la página
//nav.openModalWindow(gridRowSelectingEventArgs.commons.controlId, null);
//Si la llamada es desde un evento de un control perteneciente a una grilla de la página
nav.openModalWindow('QV_HK73_UEC23', gridRowSelectingEventArgs.modelRow);
    

     gridRowSelectingEventArgs.commons.execServer = false;

};
