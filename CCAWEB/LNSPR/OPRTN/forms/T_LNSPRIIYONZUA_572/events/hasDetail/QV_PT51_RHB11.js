
//gridInitDetailTemplate QueryView: QV_PT51_RHB11
//
task.gridInitDetailTemplate.QV_PT51_RHB11 = function (entities,gridInitDetailTemplateEventArgs) {

     gridInitDetailTemplateEventArgs.commons.execServer = false;

     //gridInitDetailTemplate
    var nav = gridInitDetailTemplateEventArgs.commons.api.navigation;
    nav.address = {
      moduleId: 'LNSPR',
      subModuleId: 'OPRTN',
      taskId: 'T_LNSPRSZYOCYQK_511',
      taskVersion: '1.0.0',
      viewContainerId: 'VC_LOANSALEDE_341511'
    };

    nav.queryParameters = {
    mode: 8
    };

    nav.customDialogParameters = {
            loanSale: gridInitDetailTemplateEventArgs.modelRow,
            loanSaleDetail: entities.LoanSaleDetailList,
            uploadedFile: uploadedFile
    };
    nav.openDetailTemplate('QV_PT51_RHB11', gridInitDetailTemplateEventArgs.modelRow);

};




