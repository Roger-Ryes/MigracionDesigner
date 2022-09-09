// () View: View of LoansHistoricForm
//Evento changeGroup : Evento change para pestañas, collapsible y accordion.
task.changeGroup.G_LOANSHIRII_607863 = function (entities, changedGroupEventArgs) {
    changedGroupEventArgs.commons.execServer = false;
    //changedGroupEventArgs.commons.serverParameters.entityName = true;

    var nav = changedGroupEventArgs.commons.api.navigation;
    //Pantalla: Resumen general del estado del préstamo
    if ((changedGroupEventArgs.commons.item.id === 'G_LOANSHITIC_293863') && (changedGroupEventArgs.commons.item.isOpen === true)) {
        console.log("Open by " + changedGroupEventArgs.commons.item.id);

        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'QERYS',
            taskId: 'T_GENERALINFFHA_866',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_GENERALIAT_927866'
        };
        nav.queryParameters = {
            mode: 8
        };
        nav.customDialogParameters = {
            loan: entities.Loan
        };
        nav.registerView('G_LOANSHICTI_733863',false);
    }

    if ((changedGroupEventArgs.commons.item.id === 'G_LOANSHITIC_293863') && (changedGroupEventArgs.commons.item.isOpen === true)) {
        console.log("Open by " + changedGroupEventArgs.commons.item.id);

        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'CMMNS',
            taskId: 'T_AMORTIZATIOON_261',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_AMORTIZAII_339261'
        };
        nav.queryParameters = {
            mode: 8
        };
        nav.customDialogParameters = {
            loan: entities.Loan,
            operation: entities.Loan.loanBankID,
            menu: "1"
        };
        nav.registerView('G_LOANSHICSI_482863',false);
    }

    /*
     * Pantalla: Información general
     */
    if ((changedGroupEventArgs.commons.item.id === 'G_LOANSHIITO_581863') && (changedGroupEventArgs.commons.item.isOpen === true)) {

        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'QERYS',
            taskId: 'T_GENERALINAOIT_347',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_GENERALINO_421347'
        };
        nav.queryParameters = {
            mode: 2
        };
        nav.customDialogParameters = {
            loan: entities.Loan,
            operation: entities.Loan.loanBankID, 
            menu: '1'
        };
        nav.registerView('G_LOANSHIITO_581863',false);
    }


    /*
     * Pantalla: Rubros y Tasas - QueryItemsLoanForm
     */
    if ((changedGroupEventArgs.commons.item.id === 'G_LOANSHIOIR_548863') && (changedGroupEventArgs.commons.item.isOpen === true)) {

        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'QERYS',
            taskId: 'T_ITEMSLOANSUXI_712',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_ITEMSLOANN_757712'
        };
        nav.queryParameters = {
            mode: 8
        };
        nav.customDialogParameters = {
            loan: entities.Loan,
            operation: entities.Loan.loanBankID
        };
        nav.registerView('G_LOANSHIROI_993863',false);
    }

    /*
     * Pantalla: Rubros y Tasas
     */
    if ((changedGroupEventArgs.commons.item.id === 'G_LOANSHIOIR_548863') && (changedGroupEventArgs.commons.item.isOpen === true)) {

        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'QERYS',
            taskId: 'T_RATESPTSITVKK_186',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_RATESVLYWT_596186'
        };
        nav.queryParameters = {
            mode: 8
        };
        nav.customDialogParameters = {
            loan: entities.Loan,
            operation: entities.Loan.loanBankID
        };
        nav.registerView('G_LOANSHITCC_927863',false);

    }

    /*
     * Pantalla: Abonos
     */
    if ((changedGroupEventArgs.commons.item.id === 'G_LOANSHIITT_988863') && (changedGroupEventArgs.commons.item.isOpen === true)) {

        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'QERYS',
            taskId: 'T_PAYMENTUTOUGP_714',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_PAYMENTZMN_922714'
        };
        nav.queryParameters = {
            mode: 8
        };
        nav.customDialogParameters = {
            loan: entities.Loan,
            operation: entities.Loan.loanBankID
        };
        nav.registerView('G_LOANSHIITT_988863',false);

    }


    /*
     * Pantalla: Transacciones
     */

    if ((changedGroupEventArgs.commons.item.id === 'G_LOANSHITTO_207863') && (changedGroupEventArgs.commons.item.isOpen === true)) {
        console.log("Open by " + changedGroupEventArgs.commons.item.id);

        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'QERYS',
            taskId: 'T_ASSTSQUQPUYMT_694',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_LOANTRANTC_731694'
        };
        nav.queryParameters = {
            mode: 8
        };
        nav.customDialogParameters = {
            loan: entities.Loan
        };
        nav.registerView('G_LOANSHITTO_207863',false);
    }
};
