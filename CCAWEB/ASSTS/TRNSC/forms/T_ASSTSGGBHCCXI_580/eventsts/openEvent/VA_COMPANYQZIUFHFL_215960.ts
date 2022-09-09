

//Entity: CompaniesDiscounts
//CompaniesDiscounts.company (TextInputButton) View: CompaniesDiscountsCreateForm
task_textInputButtonEvent_VA_COMPANYQZIUFHFL_215960 = (textInputButtonEventArgs: CobisModelOnInputButtonEventArgs) => {
    textInputButtonEventArgs.commons.execServer = false;

    //open modal
    let nav: any = textInputButtonEventArgs.commons.api.navigation;

    nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'TRNSC',
        taskId: 'T_ASSTSROZTLMPE_144',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_COMPANIEEE_220144'
    };

    nav.queryParameters = {
        mode: 4095
    };
    nav.modalProperties = {
        size: 'md',
        callFromGrid: false
    };
};