

//Entity: CompaniesDiscounts
//CompaniesDiscounts.sequentialBatch (TextInputButton) View: CompaniesDiscountsCreateForm
task_textInputButtonEvent_VA_SEQUENTIALBATHC_999960 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;

    //open modal
    let nav: any = textInputButtonEventArgs.commons.api.navigation;

    nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'TRNSC',
        taskId: 'T_ASSTSSMJDYNLF_161',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_COMPANIETA_879161'
    };
    nav.queryParameters = {
        mode: 8
    };
    nav.modalProperties = {
        size: 'md',
        callFromGrid: false
    };
    nav.customDialogParameters = {
        company: textInputButtonEventArgs.model.CompaniesBatch.company
    };
};