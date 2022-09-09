//gridCommand (Button) QueryView: QV_EF50_UVK53
    //Evento GridCommand: Sirve para personalizar la acción que realizan los botones de Grilla.
    task.gridCommand.CEQV_201QV_EF50_UVK53_388 = function (entities, gridExecuteCommandEventArgs) {
        var nav = gridExecuteCommandEventArgs.commons.api.navigation;
        
        var auxCont = 0;
        
        for (var i = 0; i < entities.LoanList.data().length; i++) {
            if (entities.LoanList.data()[i].seleccion) {
                auxCont = auxCont + 1;
            }
        }
        
        if (auxCont > 0) {
            nav.label = cobis.translate('LNSPR.LBL_LNSPR_INGRESOGA_95398');
            nav.address = {
                moduleId: 'LNSPR',
                subModuleId: 'OPRTN',
                taskId: 'T_LNSPRZYRPKNSX_507',
                taskVersion: '1.0.0',
                viewContainerId: 'VC_PAYMENTSGR_815507'
            };

            nav.queryParameters = {
                mode: 2
            };

            nav.modalProperties = {
                size: 'md',
                callFromGrid: false
            };

            nav.openModalWindow(gridExecuteCommandEventArgs.commons.controlId, null);
        } else {
            gridExecuteCommandEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_DEBESELRS_93935', false,null,timer);
        }
        
        gridExecuteCommandEventArgs.commons.execServer = false;
    };