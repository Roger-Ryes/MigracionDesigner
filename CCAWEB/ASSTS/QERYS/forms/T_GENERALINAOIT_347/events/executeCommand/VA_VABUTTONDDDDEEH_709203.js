// (Button) 
    task.executeCommand.VA_VABUTTONDDDDEEH_709203 = function(  entities, executeCommandEventArgs ) {

        executeCommandEventArgs.commons.execServer = false;
        var nav = executeCommandEventArgs.commons.api.navigation;
        nav.label = cobis.translate("ASSTS.LBL_ASSTS_INACINFEN_59763");
        nav.address = {
           moduleId: 'BUSIN',
           subModuleId: 'FLCRE',
           taskId: 'T_BUSINDMGDSMDC_905',
           taskVersion: '1.0.0',
           viewContainerId: 'VC_FINANCIAII_971905'
        };
        nav.modalProperties = {
           size: 'lg',
           callFromGrid: false
        };
        nav.queryParameters = {
            mode: executeCommandEventArgs.commons.constants.mode.Query
        };
        nav.customDialogParameters = {
            opNumBank: entities.Loan.loanBankID,
            sourceFrom: 'GD',
            mode: 'Q'
        };
        nav.openModalWindow(executeCommandEventArgs.commons.controlId, null);
    
        
    };