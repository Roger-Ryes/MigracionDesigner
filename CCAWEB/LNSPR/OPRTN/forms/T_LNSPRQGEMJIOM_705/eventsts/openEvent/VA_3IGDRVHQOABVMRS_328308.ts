

//Entity: Entity5
//Entity5.attribute3 (TextInputButton) View: LoansLineGuaranteesForm
task_textInputButtonEvent_VA_3IGDRVHQOABVMRS_328308 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;
    let nav: any = textInputButtonEventArgs.commons.api.navigation;
    nav.label = this.cobis.translate('CLLTL.LBL_CLLTL_TIPOGARAT_73165');
    nav.address = {
        moduleId: 'CLLTL',
        subModuleId: 'TRNSC',
        taskId: 'T_CLLTLCYJZJZQF_906',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_GUARANTETY_611906'
    };
    nav.queryParameters = {
        mode: 8
    };
};