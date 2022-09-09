//Entity: MethodsRetention
//MethodsRetention.paymentATX (DropDownList) View: PaymentMaintenanceModal
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task.change.VA_PAYMENTATXPGDKX_602701 = function(  entities, changedEventArgs ) {

        changedEventArgs.commons.execServer = false;
        var  api = changedEventArgs.commons.api; 
        var desembolso  = entities.MethodsRetention.disbursement;
        var pagos     = entities.MethodsRetention.payment;
        var pagoAutomatico  = entities.MethodsRetention.paymentAut;
        var pagoCaja  = entities.MethodsRetention.paymentATX ;             
        validarCampos(api,desembolso,pagos,pagoAutomatico,pagoCaja);
            
    };