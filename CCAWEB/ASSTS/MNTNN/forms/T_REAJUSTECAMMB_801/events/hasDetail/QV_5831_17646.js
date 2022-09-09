//gridInitDetailTemplate QueryView: QV_5831_17646
//
task.gridInitDetailTemplate.QV_5831_17646 = function (entities, gridInitDetailTemplateEventArgs) {
    gridInitDetailTemplateEventArgs.commons.execServer = false;
    var mode = 8;
    if (gridInitDetailTemplateEventArgs.commons.api.vc.id == 'VC_REAJUSTEKP_207872') {
        mode = 2;
    }

        var nav = gridInitDetailTemplateEventArgs.commons.api.navigation;

        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'MNTNN',
            taskId: 'T_REAJUSTEDEFTF_264',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_REAJUSTEMF_502264'
        };

        nav.queryParameters = {
            mode: mode
        };

        nav.customDialogParameters = {
            readjustmentLoanCab: gridInitDetailTemplateEventArgs.modelRow
        };
        nav.openDetailTemplate('QV_5831_17646', gridInitDetailTemplateEventArgs.modelRow);

};