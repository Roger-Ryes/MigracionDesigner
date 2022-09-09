//Start signature to Callback event to VA_VABUTTONXCGGMOI_839221
task.executeCommandCallback.VA_VABUTTONXCGGMOI_839221 = function(entities, executeCommandCallbackEventArgs) {
     //here your code
    var viewState = executeCommandCallbackEventArgs.commons.api.viewState;
    var grid = executeCommandCallbackEventArgs.commons.api.grid;
        
    if (executeCommandCallbackEventArgs.success) {

        monto = false;
        entities.AmortizationFormEntity.numOperation = entities.OperationEntity.operation;
        entities.AmortizationFormEntity.operationType = entities.OperationEntity.typeOperation;
        entities.AmortizationFormEntity.valueDate = entities.OperationEntity.creationDate;
        entities.AmortizationFormEntity.typeAmortization = entities.AmortizationFormEntity.typeAmortization ? entities.AmortizationFormEntity.typeAmortization.trim() : "";
        entities.AmortizationFormEntity.typeFee = entities.AmortizationFormEntity.typeFee ? entities.AmortizationFormEntity.typeFee.trim() : "";

        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_CREACIOTT_10843", false, null, timer);
        
        //Datos en otros TABS
        executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_MC21_OVS27', {
            operation: entities.OperationEntity.operation.trim()
        }); //Rubros - Grid
        viewState.refreshData('Q_APAGOOOO_YV30');//Parametros generales - ComboBox - paymentMethod
        viewState.hide('VA_VAVABUTTONNXJJ__482198');//Amortización - Cmd Adicional 
        viewState.hide('VA_VABUTTONZDXFYJP_582480');//Amortización - Cmd Gracias 
        viewState.hide('VA_VAVABUTTONVJFY0_286198');//Amortización - Cmd Imprimir 
        viewState.hide('VA_VAVABUTTONPJ080_778198');//Amortización - Cmd Imprimir Desembolso 
        
        suprColAmortization(entities, executeCommandCallbackEventArgs,'QV_ECPR_JAA30');//Amortizacion - Ocultar Tablas del Grid
        /*if (entities.AmortizationFormEntity.threeYear && entities.AmortizationFormEntity.threeYear.trim() == 'S') {
            viewState.show('G_OPERATIAPT_630198');
        } else {
            viewState.hide('G_OPERATIAPT_630198');
        }*/
        
        if(entities.OperationEntity.functionality=='C'){
            //MOSTRAR TABS
            //viewState.hide('VC_ZHQUMTXXGR_635193');// información General
            viewState.show('VC_ZUGXQMZUBQ_554193');// Rubros
            viewState.show('VC_UQBPHFCKCW_777193');// Parámetros generales - optimizado
            viewState.show('VC_BKTCDNSADU_521193');// Amortización

            viewState.enable('CM_TLNSPRMB_TRO');//Transmitir

        }else if(entities.OperationEntity.functionality=='SCO'){
            entities.AmortizationFormEntity.typeGrace = null;

            viewState.disable('VA_TYPEGRACEQJMJVQ_187480');//Amortization - Forma Cobro Gracia
            viewState.disable('VA_VABUTTONOHVZDKF_347480');//Amortization - Button - Recalcular
            viewState.disable('VA_VABUTTONNPFDSDM_920480');//Amortization - Button - Guardar
            //viewState.hide('VA_PAYFULLFEEUGWZV_691388');//
            
            viewState.show('VA_VAVABUTTONVJFY0_286198');//Amortization - Button - Imprimir
            viewState.hide('VA_VAVABUTTONZDFPF_173198');//Amortization - Buttoon - Gracia
            
            viewState.disable('VA_MONEYWCCBPJYWVL_470221');//Moneda
            viewState.disable('VA_TYPEOPERATIONNN_788221');//Tipo Operación
            viewState.disable('VA_AMOUNTPCRKOKHWA_216221');//Monto
            viewState.disable('VA_AMOUNTAPPROVEDE_512221');//Monto Aprobado
            viewState.disable('VA_OFFICELAHOKRIFT_376221');//Oficina
            
            viewState.disable('VA_CREATIONDATENDE_311221');//Fecha Creación

            //MOSTRAR TABS
            //viewState.hide('VC_MWEGHJFEQQ_170626');// información General
            viewState.show('VC_FUAFKEKXSW_812626');// Rubros
            viewState.show('VC_TPJGHFAFBF_762626');// Parámetros generales
            viewState.show('VC_GIMALDPDEW_251626');// Amortización

            viewState.show('CM_TLNSPRTZ_RRO');//T_LNSPRTZAAOTEC_626 - Commando//Finalizar
        }
    }else{
        viewState.hide('VA_VAVABUTTONNXJJ__482198');//Amortización - Cmd Adicional 
        viewState.hide('VA_VABUTTONZDXFYJP_582480');//Amortización - Cmd Gracias 
        viewState.hide('VA_VAVABUTTONVJFY0_286198');//Amortización - Cmd Imprimir 
        viewState.hide('VA_VAVABUTTONPJ080_778198');//Amortización - Cmd Imprimir Desembolso 

        viewState.hide('VC_ZUGXQMZUBQ_554193');// Rubros
        viewState.hide('VC_UQBPHFCKCW_777193');// Parámetros generales - optimizado
        viewState.hide('VC_BKTCDNSADU_521193');// Amortización
    }
    
    if(entities.OperationEntity.syndicated){
        viewState.disable('VA_SYNDICATEDMLJZC_821221');
        viewState.disable('VA_TYPESYNDICATEEE_795221');
        viewState.disable('G_OPERATIALO_494221');
       }else{
        viewState.disable('VA_SYNDICATEDMLJZC_821221');
       }
         
    //Amortizacion Agregada
    viewState.refreshData('VA_TYPEAMORTIZATTN_681198');
    
    if(entities.AmortizationFormEntity && entities.AmortizationFormEntity.typeAmortization == 'AGREGADA'){
        viewState.disable('VA_TYPEAMORTIZATTN_681198');
    }else{
        viewState.enable('VA_TYPEAMORTIZATTN_681198');
    }
    
    
         
};