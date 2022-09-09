// (Button) 
    //designer-hint: 2304: Cannot find name 'task_executeCommand_CM_PAYMENTS_T7N'.
    task_executeCommand_CM_PAYMENTS_T7N = (
        //designer-hint: 2304: Cannot find name 'Model'.
        entities: Model,
        //designer-hint: 2304: Cannot find name 'CobisModelExecuteCommandEventArgs'.
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        executeCommandEventArgs.commons.execServer = false;

        //Open Modal
        let nav: any = executeCommandEventArgs.commons.api.navigation;

        nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_NEGOCIANI_54038'); //Negociacion
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