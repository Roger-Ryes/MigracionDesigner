

//Entity: OperationEntity
//OperationEntity.creditLine (TextInputButton) View: OperationLoansForm
task_textInputButtonEvent_VA_CREDITLINEUOUCM_252221 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;
    textInputButtonEventArgs.commons.execServer = false;
    let codCliente: any;

    for (let i: any = 0; i < textInputButtonEventArgs.model.DebtorEntity.data().length; i++) {
        if (textInputButtonEventArgs.model.DebtorEntity.data()[i].role == "D") {
            codCliente = textInputButtonEventArgs.model.DebtorEntity.data()[i].code;
            break;
        }
    }
    if (codCliente) {
        //Open Modal
        let nav: any = textInputButtonEventArgs.commons.api.navigation;

        nav.address = {
            moduleId: 'LNSPR',
            subModuleId: 'OPRTN',
            taskId: 'T_LNSPRFYCKEVVP_737',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_LOANSLINSS_962737'
        };

        nav.queryParameters = {
            mode: 1
        };
        nav.modalProperties = {
            size: 'md',
            callFromGrid: false
        };

        nav.customDialogParameters = {
            cliente: codCliente ,
            esGrupo: isGroup
        };
    } else {
        textInputButtonEventArgs.cancel = true;
        textInputButtonEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_DEBEEXIRI_69031", false, null, timer);
    }
};