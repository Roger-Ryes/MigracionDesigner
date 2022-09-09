//Entity: OperationItemsList
//OperationItemsList.item (DropDownList) View: ModalOperationItems
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_ITEMUCXHLKNWSIV_574800 = function (entities, changedEventArgs) {
    var viewState = changedEventArgs.commons.api.viewState;

        changedEventArgs.commons.execServer = false;

    if (viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").category != 'S') {
        viewState.hide('VA_INSURANCEZHNZGP_890800');
        viewState.hide('VA_INSURANCETYPEEE_321800');
        entities.OperationItemsList.insurance = null;
        entities.OperationItemsList.insuranceType = null;
    } else {
        viewState.show('VA_INSURANCEZHNZGP_890800');
        viewState.show('VA_INSURANCETYPEEE_321800');
    }

    //SUBSIDIO
    if (viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").rankVal != 'S') {
        viewState.hide('VA_RANKTRPXWXRXBWJ_371800');
        entities.OperationItemsList.rank = null;
    } else {
        viewState.show('VA_RANKTRPXWXRXBWJ_371800');
    }

    if (changedEventArgs.commons.api.vc.mode == changedEventArgs.commons.constants.mode.Insert) {
        cambio = false;
        entities.OperationItemsList.description = viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").item;
        entities.OperationItemsList.typeItem = viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").typeItem;
        entities.OperationItemsList.paymentMethod = viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").paymentMethod;
        entities.OperationItemsList.priority = viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").priority;
        entities.OperationItemsList.reference = viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").referenceValue;
        entities.OperationItemsList.referenceReadjustment = viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").readjustmentValue;
        entities.OperationItemsList.minRate = viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").minRate;
        entities.OperationItemsList.maxRate = viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").maxRate;
        entities.OperationItemsList.financed = viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").financed;
        entities.OperationItemsList.insurance = viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").insurance;
        entities.OperationItemsList.insuranceType = viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").insuranceType;
        entities.OperationItemsList.rank = viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").rank;
        entities.OperationItemsList.applyRate = viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").applyRate; 

        if (viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").typeItem == 'Q' || viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").typeItem == 'O') {
            // viewState.disable('VA_ITEMUCXHLKNWSIV_574800');
            viewState.disable('VA_DESCRIPTIONZKOW_324800');
            viewState.disable('VA_TYPEITEMDSHZMXA_943800');
            viewState.disable('VA_SIGNOOZSLFEAGNU_871800');
            viewState.enable('VA_PRIORITYGWEJSIO_703800');
            viewState.disable('VA_FACTORTDKMIRESJ_493800');
            viewState.disable('VA_REFERENCESIEQUP_560800');
            viewState.disable('VA_SIGNREADJUSTEEM_203800');
            viewState.disable('VA_REFERENCEREADSD_344800');
            viewState.disable('VA_FACTORREADJUTTE_305800');
            viewState.disable('VA_CALCULATIONBEEE_756800');
            viewState.disable('VA_AMOUNTKDNIXSXCQ_807800');
            viewState.enable('VA_PERCENTAGEOQEOK_815800');
            viewState.disable('VA_PAYMENTMETHODDD_767800');

        } else if (
            viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").typeItem == 'M' || 
            viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").typeItem == 'I' || entities.OperationItemsList.typeItem == 'F' || entities.OperationItemsList.typeItem == 'S'
            ) {
            // viewState.disable('VA_ITEMUCXHLKNWSIV_574800');
            viewState.disable('VA_DESCRIPTIONZKOW_324800');
            viewState.disable('VA_TYPEITEMDSHZMXA_943800');
            viewState.enable('VA_SIGNOOZSLFEAGNU_871800');
            viewState.enable('VA_PRIORITYGWEJSIO_703800');
            viewState.enable('VA_FACTORTDKMIRESJ_493800');
            viewState.enable('VA_REFERENCESIEQUP_560800');
            viewState.enable('VA_SIGNREADJUSTEEM_203800');
            viewState.enable('VA_REFERENCEREADSD_344800');
            viewState.enable('VA_FACTORREADJUTTE_305800');
            viewState.disable('VA_CALCULATIONBEEE_756800');
            viewState.disable('VA_AMOUNTKDNIXSXCQ_807800');
            viewState.enable('VA_PERCENTAGEOQEOK_815800');
            viewState.disable('VA_PAYMENTMETHODDD_767800');

        } else if (viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").typeItem == 'C') {

            // viewState.disable('VA_ITEMUCXHLKNWSIV_574800');
            viewState.disable('VA_DESCRIPTIONZKOW_324800');
            viewState.disable('VA_TYPEITEMDSHZMXA_943800');
            viewState.disable('VA_SIGNOOZSLFEAGNU_871800');
            viewState.enable('VA_PRIORITYGWEJSIO_703800');
            viewState.disable('VA_FACTORTDKMIRESJ_493800');
            viewState.disable('VA_REFERENCESIEQUP_560800');
            viewState.disable('VA_SIGNREADJUSTEEM_203800');
            viewState.disable('VA_REFERENCEREADSD_344800');
            viewState.disable('VA_FACTORREADJUTTE_305800');
            viewState.disable('VA_CALCULATIONBEEE_756800');
            viewState.enable('VA_AMOUNTKDNIXSXCQ_807800');
            viewState.disable('VA_PERCENTAGEOQEOK_815800');
            viewState.enable('VA_PAYMENTMETHODDD_767800');

        } else if (viewState.getDataItem("VA_ITEMUCXHLKNWSIV_574800").typeItem == 'V') {

            // viewState.disable('VA_ITEMUCXHLKNWSIV_574800');

            viewState.disable('VA_DESCRIPTIONZKOW_324800');
            viewState.disable('VA_TYPEITEMDSHZMXA_943800');
            viewState.disable('VA_SIGNOOZSLFEAGNU_871800');
            viewState.enable('VA_PRIORITYGWEJSIO_703800');
            viewState.disable('VA_FACTORTDKMIRESJ_493800');
            viewState.disable('VA_REFERENCESIEQUP_560800');
            viewState.disable('VA_SIGNREADJUSTEEM_203800');
            viewState.disable('VA_REFERENCEREADSD_344800');
            viewState.disable('VA_FACTORREADJUTTE_305800');
            viewState.disable('VA_CALCULATIONBEEE_756800');
            viewState.enable('VA_AMOUNTKDNIXSXCQ_807800');
            viewState.disable('VA_PERCENTAGEOQEOK_815800');
            viewState.disable('VA_PAYMENTMETHODDD_767800');
        }
    }
};
