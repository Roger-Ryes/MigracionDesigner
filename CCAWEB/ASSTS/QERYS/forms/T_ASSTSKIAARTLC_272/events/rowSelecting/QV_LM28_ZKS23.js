
//gridRowSelecting QueryView: 
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_LM28_ZKS23 = function (entities,gridRowSelectingEventArgs) {

//Open Modal
var nav = gridRowSelectingEventArgs.commons.api.navigation;

nav.label = cobis.translate('ASSTS.LBL_ASSTS_DETALLENI_97876');
nav.address = {
moduleId: 'ASSTS',
subModuleId: 'QERYS',
taskId: 'T_ASSTSECRXYFPY_431',
taskVersion: '1.0.0',
viewContainerId: 'VC_DETAILTRSN_444431'
};

    nav.queryParameters = {
    mode: 2
    };
    nav.modalProperties = {
    size: 'lg',
    callFromGrid: false
    };

   nav.customDialogParameters = {
   detailTrans: gridRowSelectingEventArgs.rowData,
    transaction: entities.FilterTransactionQuery.typeTransaction   
    };

//Si la llamada es desde un evento de un control perteneciente a la cabecera de la página
//nav.openModalWindow(args.commons.controlId, null);
//Si la llamada es desde un evento de un control perteneciente a una grilla de la página
    nav.openModalWindow('QV_LM28_ZKS23', gridRowSelectingEventArgs.modelRow);

    
     gridRowSelectingEventArgs.commons.execServer = false;

};






