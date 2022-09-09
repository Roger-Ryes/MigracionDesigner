//Entity: LoanItemsList
//LoanItemsList.item (TextInputBox) View: ModalLoanItemsForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_ITEMJIJOVTYJBHS_939980 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    let viewState: any = changedEventArgs.commons.api.viewState;

    changedEventArgs.commons.execServer = false;

    if (viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").category != 'S') {
        viewState.hide('VA_INSURANCERNDVZP_758980');
        viewState.hide('VA_INSURANCETYPEEE_633980');
        entities.LoanItemsList.insurance = null;
        entities.LoanItemsList.insuranceType = null;
    } else {
        viewState.show('VA_INSURANCERNDVZP_758980');
        viewState.show('VA_INSURANCETYPEEE_633980');
    }

    if (viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").rankVal != 'S') {
        viewState.hide('VA_RANKGUJYXFFOUPY_234980');
        entities.LoanItemsList.rank = null;
    } else {
        viewState.show('VA_RANKGUJYXFFOUPY_234980');
    }

    if (changedEventArgs.commons.api.vc.mode == changedEventArgs.commons.constants.mode.Insert) {
        cambio = false;
        entities.LoanItemsList.description = viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").item;
        entities.LoanItemsList.typeItem = viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").typeItem;
        entities.LoanItemsList.paymentMethod = viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").paymentMethod;
        entities.LoanItemsList.priority = viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").priority;
        entities.LoanItemsList.reference = viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").referenceValue;
        entities.LoanItemsList.referenceReadjustment = viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").readjustmentValue;
        entities.LoanItemsList.minRate = viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").minRate;
        entities.LoanItemsList.maxRate = viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").maxRate;
        entities.LoanItemsList.financed = viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").financed;
        entities.LoanItemsList.insurance = viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").insurance;
        entities.LoanItemsList.insuranceType = viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").insuranceType;
        entities.LoanItemsList.rank = viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").rank;

        if (viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").typeItem == 'Q' || viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").typeItem == 'O') {

            viewState.disable('VA_DESCRIPTIONXUEB_185980');
            viewState.disable('VA_TYPEITEMKNWJUJS_933980');
            viewState.disable('VA_SIGNOWUDEEEWFGZ_407980');
            viewState.enable('VA_PRIORITYDAWHSWY_831980');
            viewState.disable('VA_FACTOROWCCFAZFG_876980');
            viewState.disable('VA_GRACEBSRSLHPWZD_368980');
            viewState.disable('VA_SIGNREADJUSTETE_706980');
            viewState.disable('VA_REFERENCEREAUUU_417980');
            viewState.disable('VA_FACTORREADJUTME_771980');
            viewState.disable('VA_CALCULATIONBASE_138980');
            viewState.disable('VA_AMOUNTFAWDLDZLX_436980');
            viewState.enable('VA_PERCENTAGEPOUVM_313980');
            viewState.disable('VA_PAYMENTMETHODDD_900980');

        } else if (
            viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").typeItem == 'M' ||
            viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").typeItem == 'I' || entities.LoanItemsList.typeItem == 'F' || entities.LoanItemsList.typeItem == 'S'
        ) {

            viewState.disable('VA_DESCRIPTIONXUEB_185980');
            viewState.disable('VA_TYPEITEMKNWJUJS_933980');
            viewState.enable('VA_SIGNOWUDEEEWFGZ_407980');
            viewState.enable('VA_PRIORITYDAWHSWY_831980');
            viewState.enable('VA_FACTOROWCCFAZFG_876980');
            viewState.enable('VA_GRACEBSRSLHPWZD_368980');
            viewState.enable('VA_SIGNREADJUSTETE_706980');
            viewState.enable('VA_REFERENCEREAUUU_417980');
            viewState.enable('VA_FACTORREADJUTME_771980');
            viewState.disable('VA_CALCULATIONBASE_138980');
            viewState.disable('VA_AMOUNTFAWDLDZLX_436980');
            viewState.enable('VA_PERCENTAGEPOUVM_313980');
            viewState.disable('VA_PAYMENTMETHODDD_900980');

        } else if (viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").typeItem == 'C') {

            viewState.disable('VA_DESCRIPTIONXUEB_185980');
            viewState.disable('VA_TYPEITEMKNWJUJS_933980');
            viewState.disable('VA_SIGNOWUDEEEWFGZ_407980');
            viewState.enable('VA_PRIORITYDAWHSWY_831980');
            viewState.disable('VA_FACTOROWCCFAZFG_876980');
            viewState.disable('VA_GRACEBSRSLHPWZD_368980');
            viewState.disable('VA_SIGNREADJUSTETE_706980');
            viewState.disable('VA_REFERENCEREAUUU_417980');
            viewState.disable('VA_FACTORREADJUTME_771980');
            viewState.disable('VA_CALCULATIONBASE_138980');
            viewState.enable('VA_AMOUNTFAWDLDZLX_436980');
            viewState.disable('VA_PERCENTAGEPOUVM_313980');
            viewState.enable('VA_PAYMENTMETHODDD_900980');

        } else if (viewState.getDataItem("VA_ITEMJIJOVTYJBHS_939980").typeItem == 'V') {

            viewState.disable('VA_DESCRIPTIONXUEB_185980');
            viewState.disable('VA_TYPEITEMKNWJUJS_933980');
            viewState.disable('VA_SIGNOWUDEEEWFGZ_407980');
            viewState.enable('VA_PRIORITYDAWHSWY_831980');
            viewState.disable('VA_FACTOROWCCFAZFG_876980');
            viewState.disable('VA_GRACEBSRSLHPWZD_368980');
            viewState.disable('VA_SIGNREADJUSTETE_706980');
            viewState.disable('VA_REFERENCEREAUUU_417980');
            viewState.disable('VA_FACTORREADJUTME_771980');
            viewState.disable('VA_CALCULATIONBASE_138980');
            viewState.enable('VA_AMOUNTFAWDLDZLX_436980');
            viewState.disable('VA_PERCENTAGEPOUVM_313980');
            viewState.disable('VA_PAYMENTMETHODDD_900980');
        }
    }
};
