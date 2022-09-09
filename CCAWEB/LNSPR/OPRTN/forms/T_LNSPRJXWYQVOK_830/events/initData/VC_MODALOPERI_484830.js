//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: ModalOperationItems
task.initData.VC_MODALOPERI_484830 = function (entities, initDataEventArgs){

    initDataEventArgs.commons.execServer = false;

    var viewState = initDataEventArgs.commons.api.viewState;
    var api = initDataEventArgs.commons.api;

    entities.OperationEntity.operation = api.parentVc.model.OperationEntity.operation;
    entities.GeneralParametersQuery = api.parentVc.model.GeneralParametersQuery;

    if (api.parentVc && api.parentVc.parentVc && api.parentVc.parentVc.id == 'VC_LOANPARTIR_265871') {
        valor = valorAprobado - valorOperacion;
    }

    //RUBRO TIPO SEGURO
    if (entities.OperationItemsList.category != 'S') {
        viewState.hide('VA_INSURANCEZHNZGP_890800');
        viewState.hide('VA_INSURANCETYPEEE_321800');
    }

    //SUBSIDIO
    if (entities.OperationItemsList.limit != 'S') {
        viewState.hide('VA_RANKTRPXWXRXBWJ_371800');
    }

    if (api.vc.mode == initDataEventArgs.commons.constants.mode.Update) {
        prioridad = entities.OperationItemsList.priority;
        if (api.parentVc && api.parentVc.parentVc && api.parentVc.parentVc.id == 'VC_LOANPARTIR_265871') {
            valor = valorAprobado - valorOperacion;
        }

        viewState.disable('VA_FINANCEDTQRTUFB_342800');//Financiado

        if (entities.OperationItemsList.typeItem == 'Q' || entities.OperationItemsList.typeItem == 'O') {
            viewState.disable('VA_ITEMUCXHLKNWSIV_574800');//Rubro
            viewState.disable('VA_DESCRIPTIONZKOW_324800');//Descripción
            viewState.disable('VA_TYPEITEMDSHZMXA_943800');//Tipo
            viewState.disable('VA_PAYMENTMETHODDD_767800');//Forma Pago
            
            //viewState.('VA_FINANCEDTQRTUFB_342800');//Financiado
            viewState.enable('VA_PRIORITYGWEJSIO_703800');//Prioridad
            viewState.disable('VA_REFERENCESIEQUP_560800');//Referencial
            viewState.disable('VA_SIGNOOZSLFEAGNU_871800');//Signo

            viewState.disable('VA_FACTORTDKMIRESJ_493800');//Factor
            viewState.disable('VA_REFERENCEREADSD_344800');//Ref. Reajuste
            viewState.disable('VA_SIGNREADJUSTEEM_203800');//Signo Reajuste
            viewState.disable('VA_FACTORREADJUTTE_305800');//Factor Reajuste

            viewState.disable('VA_CALCULATIONBEEE_756800');//Base de Cálculo
            viewState.disable('VA_AMOUNTKDNIXSXCQ_807800');//Valor
            viewState.enable('VA_PERCENTAGEOQEOK_815800');//Tasa
        } else if (entities.OperationItemsList.typeItem == 'M' || entities.OperationItemsList.typeItem == 'I' || entities.OperationItemsList.typeItem == 'F' || entities.OperationItemsList.typeItem == 'S') {
            viewState.disable('VA_ITEMUCXHLKNWSIV_574800');//Rubro
            viewState.disable('VA_DESCRIPTIONZKOW_324800');//Descripción
            viewState.disable('VA_TYPEITEMDSHZMXA_943800');//Tipo
            viewState.disable('VA_PAYMENTMETHODDD_767800');//Forma Pago
            
            //viewState.('VA_FINANCEDTQRTUFB_342800');//Financiado
            viewState.enable('VA_PRIORITYGWEJSIO_703800');//Prioridad
            viewState.enable('VA_REFERENCESIEQUP_560800');//Referencial
            viewState.enable('VA_SIGNOOZSLFEAGNU_871800');//Signo

            viewState.enable('VA_FACTORTDKMIRESJ_493800');//Factor
            viewState.enable('VA_REFERENCEREADSD_344800');//Ref. Reajuste
            viewState.enable('VA_SIGNREADJUSTEEM_203800');//Signo Reajuste
            viewState.enable('VA_FACTORREADJUTTE_305800');//Factor Reajuste

            viewState.disable('VA_CALCULATIONBEEE_756800');//Base de Cálculo
            viewState.disable('VA_AMOUNTKDNIXSXCQ_807800');//Valor
            viewState.enable('VA_PERCENTAGEOQEOK_815800');//Tasa
        } else if (entities.OperationItemsList.typeItem == 'C') {
            viewState.disable('VA_ITEMUCXHLKNWSIV_574800');//Rubro
            viewState.disable('VA_DESCRIPTIONZKOW_324800');//Descripción
            viewState.disable('VA_TYPEITEMDSHZMXA_943800');//Tipo
            viewState.enable('VA_PAYMENTMETHODDD_767800');//Forma Pago
            
            //viewState.('VA_FINANCEDTQRTUFB_342800');//Financiado
            viewState.enable('VA_PRIORITYGWEJSIO_703800');//Prioridad
            viewState.disable('VA_REFERENCESIEQUP_560800');//Referencial
            viewState.disable('VA_SIGNOOZSLFEAGNU_871800');//Signo

            viewState.disable('VA_FACTORTDKMIRESJ_493800');//Factor
            viewState.disable('VA_REFERENCEREADSD_344800');//Ref. Reajuste
            viewState.disable('VA_SIGNREADJUSTEEM_203800');//Signo Reajuste
            viewState.disable('VA_FACTORREADJUTTE_305800');//Factor Reajuste

            viewState.disable('VA_CALCULATIONBEEE_756800');//Base de Cálculo
            viewState.enable('VA_AMOUNTKDNIXSXCQ_807800');//Valor
            viewState.disable('VA_PERCENTAGEOQEOK_815800');//Tasa
        } else if (entities.OperationItemsList.typeItem == 'V') {
            viewState.disable('VA_ITEMUCXHLKNWSIV_574800');//Rubro
            viewState.disable('VA_DESCRIPTIONZKOW_324800');//Descripción
            viewState.disable('VA_TYPEITEMDSHZMXA_943800');//Tipo
            viewState.disable('VA_PAYMENTMETHODDD_767800');//Forma Pago
            
            //viewState.('VA_FINANCEDTQRTUFB_342800');//Financiado
            viewState.enable('VA_PRIORITYGWEJSIO_703800');//Prioridad
            viewState.disable('VA_REFERENCESIEQUP_560800');//Referencial
            viewState.disable('VA_SIGNOOZSLFEAGNU_871800');//Signo

            viewState.disable('VA_FACTORTDKMIRESJ_493800');//Factor
            viewState.disable('VA_REFERENCEREADSD_344800');//Ref. Reajuste
            viewState.disable('VA_SIGNREADJUSTEEM_203800');//Signo Reajuste
            viewState.disable('VA_FACTORREADJUTTE_305800');//Factor Reajuste

            viewState.disable('VA_CALCULATIONBEEE_756800');//Base de Cálculo
            viewState.enable('VA_AMOUNTKDNIXSXCQ_807800');//Valor
            viewState.disable('VA_PERCENTAGEOQEOK_815800');//Tasa
        }
    }else{
        viewState.disable('VA_FINANCEDTQRTUFB_342800');//Financiado
        entities.OperationItemsList.calculationBase = null;
    }

};