

//Entity: Entity5
//Entity5.attribute3 (TextInputButton) View: LoansLineGuaranteesForm
task.textInputButtonEvent.VA_3IGDRVHQOABVMRS_328308 = function( textInputButtonEventArgs ) {

    textInputButtonEventArgs.commons.execServer = false;
   var nav = textInputButtonEventArgs.commons.api.navigation;
        nav.label = cobis.translate('CLLTL.LBL_CLLTL_TIPOGARAT_73165');
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