// (Button) 
    task_executeCommand_CM_TASSTSSZ_C3T = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        executeCommandEventArgs.commons.execServer = false;


        let nav: any = executeCommandEventArgs.commons.api.navigation;

        nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_NEGOCIANI_54038');
        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'TRNSC',
            taskId: 'T_NEGOTIATIOTML_700',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_NEGOTIATOO_775700'
        };
        nav.queryParameters = {
            mode: 1
        };
        nav.modalProperties = {
            size: 'md',
            callFromGrid: false
        };
        nav.customDialogParameters = {
            negotiation: entities.Negotiation
        };

        nav.openModalWindow(executeCommandEventArgs.commons.controlId, null);
    };