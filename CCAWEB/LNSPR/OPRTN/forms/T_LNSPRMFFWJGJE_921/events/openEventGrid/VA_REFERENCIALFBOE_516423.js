//Entity: ReadjustmenMList
    //ReadjustmenMList.referencial (TextInputButton) View: LoanSearchForm
    
    task.textInputButtonEventGrid.VA_REFERENCIALFBOE_516423 = function( textInputButtonEventGridEventArgs ) {
        textInputButtonEventGridEventArgs.commons.execServer = false;
    
        var nav = textInputButtonEventGridEventArgs.commons.api.navigation;

        nav.label = cobis.translate('LNSPR.LBL_LNSPR_REFERENIC_88346');
        nav.address = {
            moduleId: 'LNSPR',
            subModuleId: 'OPRTN',
            taskId: 'T_LNSPRUPDQTUXI_446',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_MODALREFTE_678446'
        };
        nav.queryParameters = {
            mode: 8
        };
        nav.modalProperties = {
            size: 'lg',
            callFromGrid: false
        };
    };