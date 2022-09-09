// () View: View of GeneralInformationMain
//Evento changeGroup : Evento change para pestañas, collapsible y accordion.
task_changeGroup_G_GENERALNTN_956193 = (entities: Model, changedGroupEventArgs: any) => {
    changedGroupEventArgs.commons.execServer = false;

    //changedGroupEventArgs.commons.serverParameters.entityName = true;

    let nav: any = changedGroupEventArgs.commons.api.navigation;

    //Pantalla: Resumen general del estado del préstamo
    if((changedGroupEventArgs.commons.item.id === 'G_GENERALIIO_430193') && (changedGroupEventArgs.commons.item.isOpen === true)){
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
        nav.registerView('G_GENERALAIN_757193');
    }

    if((changedGroupEventArgs.commons.item.id === 'G_GENERALIIO_430193') && (changedGroupEventArgs.commons.item.isOpen === true)){
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
            operation: entities.Loan.loanBankID
        };
        nav.registerView('G_GENERALMMI_992193');
    }

    /*
     * Pantalla: Información general
     */
    if((changedGroupEventArgs.commons.item.id === 'G_GENERALINN_164193') && (changedGroupEventArgs.commons.item.isOpen === true)){
       
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
            operation: entities.Loan.loanBankID
        };
        nav.registerView('G_GENERALINN_164193');
    }
    /*
     * Pantalla: Préstamos Sindicados
     */
    if((changedGroupEventArgs.commons.item.id === 'G_GENERALANN_232193') && (changedGroupEventArgs.commons.item.isOpen === true)){
      
        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'QERYS',
            taskId: 'T_ASSTSUHBKGFUE_991',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_LOANSYNDIE_790991'
        };
        nav.queryParameters = {
            mode: 2
        };
        nav.customDialogParameters = {
            parameters:{
            loan: entities.Loan
            }
            
        };
        nav.registerView('G_GENERALANN_232193');
    }

    /**
     * Pantalla: Garant&iacute;as y deudores - Garant&iacute;as
     */
    if((changedGroupEventArgs.commons.item.id === 'G_GENERALOII_638193') && (changedGroupEventArgs.commons.item.isOpen === true)){

        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'QERYS',
            taskId: 'T_LOANWARRANTYT_123',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_LOANWARRTT_422123'
        };
        nav.queryParameters = {
            mode: 8
        };
        nav.customDialogParameters = {
            loan: entities.Loan,
            operation: entities.Loan.loanBankID
        };
        nav.registerView('G_GENERALNIN_596193');
    }

    /*
     * Pantalla: Loan Warranty - Debtor List
     */
    if((changedGroupEventArgs.commons.item.id === 'G_GENERALOII_638193') && (changedGroupEventArgs.commons.item.isOpen === true)){
       
        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'QERYS',
            taskId: 'T_LOANDEBTORUIG_168',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_LOANDEBTRR_256168'
        };
        nav.queryParameters = {
            mode: 8
        };
        nav.customDialogParameters = {
            loan: entities.Loan,
            operation: entities.Loan.loanBankID
        };
        nav.registerView('G_GENERALNOA_127193');
    }


    /*
     * Pantalla: Polizas
     */
    if((changedGroupEventArgs.commons.item.id === 'G_GENERALOII_638193') && (changedGroupEventArgs.commons.item.isOpen === true)){
       
        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'QERYS',
            taskId: 'T_ASSTSMABINVRB_160',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_LOANPOLIYY_967160'
        };
        nav.queryParameters = {
            mode: 8
        };
        nav.customDialogParameters = {
            loan: entities.Loan,
            operation: entities.Loan.loanBankID
        };
        nav.registerView('G_GENERALTTN_154193');
    }

    /*
    * Pantalla: Garantes y Fiadores
    */
    if((changedGroupEventArgs.commons.item.id === 'G_GENERALOII_638193') && (changedGroupEventArgs.commons.item.isOpen === true)){
      
        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'QERYS',
            taskId: 'T_ASSTSABVOMTUL_791',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_LOANGUARNE_277791'
        };
        nav.queryParameters = {
            mode: 8
        };
        nav.customDialogParameters = {
            loan: entities.Loan,
            operation: entities.Loan.loanBankID
        };
        nav.registerView('G_GENERALNMM_828193');
        
        
    }



    /*
     * Pantalla: Rubros y Tasas - QueryItemsLoanForm
     */
    if((changedGroupEventArgs.commons.item.id === 'G_GENERALIOT_600193') && (changedGroupEventArgs.commons.item.isOpen === true)){
      
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
        nav.registerView('G_GENERALAAM_308193');
    }

    /*
     * Pantalla: Rubros y Tasas
     */
    if((changedGroupEventArgs.commons.item.id === 'G_GENERALIOT_600193') && (changedGroupEventArgs.commons.item.isOpen === true)){
  
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
        nav.registerView('G_GENERALMTO_993193');

    }

    /*
     * Pantalla: Abonos
     */
    if((changedGroupEventArgs.commons.item.id === 'G_GENERALOTN_662193') && (changedGroupEventArgs.commons.item.isOpen === true)){
       
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
        nav.registerView('G_GENERALOTN_662193');
        
    }

    /*
     * Tab: Structured/Renewed Operation
     */
    if((changedGroupEventArgs.commons.item.id === 'G_GENERALNNM_609193') && (changedGroupEventArgs.commons.item.isOpen === true)){
      
        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'QERYS',
            taskId: 'T_REFINANCEDALA_857',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_REFINANCLE_514857'
        };
        nav.queryParameters = {
            mode: 8
        };
        nav.customDialogParameters = {
            loan: entities.Loan
        };
        nav.registerView('G_GENERALNNM_609193');
        
    }

    /*
     * Tab: Child operations
     */
    if((changedGroupEventArgs.commons.item.id === 'G_GENERALMIN_860193') && (changedGroupEventArgs.commons.item.isOpen === true)){
      
        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'QERYS',
            taskId: 'T_ASSTSVDYQFQAP_288',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_LOANSCHILE_317288'
        };
        nav.queryParameters = {
            mode: 8
        };
        nav.customDialogParameters = {
            loan: entities.Loan
        };
        nav.registerView('G_GENERALMIN_860193');
        
    }

    /*
     * Tab: Internal periods operations
     */
    if((changedGroupEventArgs.commons.item.id === 'G_GENERALOAT_762193') && (changedGroupEventArgs.commons.item.isOpen === true)){
   
        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'QERYS',
            taskId: 'T_ASSTSEYKPQBME_621',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_LOANSINTRE_184621'
        };
        nav.queryParameters = {
            mode: 8
        };
        nav.customDialogParameters = {
            loan: entities.Loan
        };
        nav.registerView('G_GENERALOAT_762193');
    
    }

    /*
     * Pantalla: Seguros
     */
    if((changedGroupEventArgs.commons.item.id === 'G_GENERALTAM_466193') && (changedGroupEventArgs.commons.item.isOpen === true)){

        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'QERYS',
            taskId: 'T_ASSTSQMEVBPIH_868',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_LOANSSEGRR_486868'
        };
        nav.queryParameters = {
            mode: 8
        };
        nav.customDialogParameters = {
            loan: entities.Loan,
            operation: entities.Loan.loanBankID
        };
        nav.registerView('G_GENERALTAM_466193');
    }

    /*
     * Pantalla: Cartera Pasiva
     */
    if ((changedGroupEventArgs.commons.item.id === 'G_GENERALNNA_591193') && (changedGroupEventArgs.commons.item.isOpen === true)) {
      
        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'QERYS',
            taskId: 'T_ASSTSNXKZRVUH_117',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_PASSIVEPOF_610117'
        };
        nav.queryParameters = {
            mode: 2
        };
        nav.customDialogParameters = {
            operation: entities.Loan.loanBankID
        };
        nav.registerView('G_GENERALNNA_591193');
    }

    /*
     * Pantalla: Reajustes del Prestamos
     */
    if((changedGroupEventArgs.commons.item.id === 'G_GENERALAIA_225193') && (changedGroupEventArgs.commons.item.isOpen === true)){
      
        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'MNTNN',
            taskId: 'T_REAJUSTECAMMB_801',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_REAJUSTEMF_738801'
        };
        nav.queryParameters = {
            mode: 8
        };
        nav.customDialogParameters = {
            parameters:{
            loan: entities.Loan
            }
            
        };
        nav.registerView('G_GENERALAIA_225193');
    }

    /*
     * Pantalla: Transacciones
     */

    if((changedGroupEventArgs.commons.item.id === 'G_GENERALNNN_702193') && (changedGroupEventArgs.commons.item.isOpen === true)){
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
      nav.registerView('G_GENERALNNN_702193');
  }

    /*
     * Pantalla: Comision / Gastos Diferidos
     */

    if((changedGroupEventArgs.commons.item.id === 'G_GENERALTAI_721193') && (changedGroupEventArgs.commons.item.isOpen === true)){
      
      nav.address = {
          moduleId: 'ASSTS',
          subModuleId: 'QERYS',
          taskId: 'T_ASSTSKMGDPSCM_203',
          taskVersion: '1.0.0',
          viewContainerId: 'VC_DEFERREDIT_242203'
      };
      nav.queryParameters = {
          mode: 8
      };
      nav.customDialogParameters = {
          loan: entities.Loan
      };
      nav.registerView('G_GENERALTAI_721193');
  }
};