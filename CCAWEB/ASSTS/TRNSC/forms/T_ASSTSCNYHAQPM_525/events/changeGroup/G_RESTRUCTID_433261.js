// () View: View of RestructuringDetail
//Evento changeGroup : Evento change para pestañas, collapsible y accordion.
task.changeGroup.G_RESTRUCTID_433261 = function (entities, changedGroupEventArgs) {
    changedGroupEventArgs.commons.execServer = false;
    var nav = changedGroupEventArgs.commons.api.navigation;
    var params = nav.getCustomDialogParameters();

    //RUBROS
    if ((changedGroupEventArgs.commons.item.id === 'G_RESTRUCURN_482261') && (changedGroupEventArgs.commons.item.isOpen === true)) {
        console.log("Open by " + changedGroupEventArgs.commons.item.id);

        nav.address = {
            moduleId: 'LNSPR',
            subModuleId: 'OPRTN',
            taskId: 'T_LNSPRHWGYLNWJ_330',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_OPERATIOEE_354330'
        };
        nav.queryParameters = {
            mode: 2
        };
        nav.customDialogParameters = {
            operation: params.operation,
            money: params.currency,
            typeOperation: params.type
        };
        nav.registerView('G_RESTRUCURN_482261');
    }


    //PARAMETROS GENERALES
    if ((changedGroupEventArgs.commons.item.id === 'G_RESTRUCLRN_492261') && (changedGroupEventArgs.commons.item.isOpen === true)) {
        console.log("Open by " + changedGroupEventArgs.commons.item.id);

        nav.address = {
            moduleId: 'LNSPR',
            subModuleId: 'OPRTN',
            taskId: 'T_LNSPRKEGMFGIE_785',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_OPERATIONN_207785'
        };
        nav.queryParameters = {
            mode: 2
        };
        nav.customDialogParameters = {
            operation: params.operation,
            money: params.currency
        };
        nav.registerView('G_RESTRUCLRN_492261');
    }

    //AMORTIZACION
    if ((changedGroupEventArgs.commons.item.id === 'G_RESTRUCTIA_581261') && (changedGroupEventArgs.commons.item.isOpen === true)) {
        console.log("Open by " + changedGroupEventArgs.commons.item.id);

        nav.address = {
            moduleId: 'LNSPR',
            subModuleId: 'OPRTN',
            taskId: 'T_LNSPRGNPCEXYE_633',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_OPERATIOPA_648633'
        };
        nav.queryParameters = {
            mode: 2
        };
        nav.customDialogParameters = {
            operation: params.operation,
            typeOperation: params.type,
            amount: params.amount
        };
        nav.registerView('G_RESTRUCTIA_581261');
    }

};
