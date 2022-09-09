//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: PaymentMaintenanceModal
    task_initData_VC_PAYMENTMDA_338828 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
        initDataEventArgs.commons.execServer = false;

        let mode: any = initDataEventArgs.commons.api.vc.mode;

        initDataEventArgs.commons.api.viewState.enable('VA_PAYMENTMETHODSD_816701');
        if (mode === 2){
            initDataEventArgs.commons.execServer = false;
            let params: any=initDataEventArgs.commons.api.navigation.getCustomDialogParameters();

            let currentRow: any=params.currentRow;
        }

        let api: any = initDataEventArgs.commons.api;
        api.viewState.hide('VA_CANALAHHGQQRYXT_909701');
        api.viewState.hide('VA_BANKSERVICESDQR_160701');
        if ( entities.MethodsRetention.paymentAut ==='N'){
   api.vc.viewState.VA_TRANSACCTIONKAF_634701.visible = false;
      }

        entities.MethodsRetention.transacction ='D';
    };