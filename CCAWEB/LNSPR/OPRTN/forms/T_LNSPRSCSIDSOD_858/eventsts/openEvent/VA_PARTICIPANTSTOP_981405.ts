//Entity: OperationEntity
//OperationEntity.participantS (TextInputButton) View: SyndicatedListForm
task_textInputButtonEvent_VA_PARTICIPANTSTOP_981405 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    let nav: any = textInputButtonEventArgs.commons.api.navigation;
    nav.label = 'LNSPR.LBL_LNSPR_PARTICIPE_28143';
    nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'MNTNN',
        taskId: 'T_ASSTSUFGAMLTW_237',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_FUNDWJCLLL_877237'
    };

    nav.queryParameters = {
        mode: 8
    };
    nav.modalProperties = {
        size: 'lg',
        callFromGrid: false
    };



    //Si la llamada es desde un evento de un control perteneciente a la cabecera de la página
    // nav.openModalWindow(textInputButtonEventArgs.commons.controlId, null);
    //Si la llamada es desde un evento de un control perteneciente a una grilla de la página
    //nav.openModalWindow(id, args.modelRow);
    textInputButtonEventArgs.commons.execServer = false;
};
