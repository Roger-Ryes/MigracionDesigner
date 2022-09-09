//Entity: CondonationDetail
    //CondonationDetail.concept (ComboBox) View: CondonationDetailForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task_change_VA_TEXTINPUTBOXVSD_563764 = (entities: Model, changeEventArgs: any) => {
        changeEventArgs.commons.execServer = false;
        let concept: any = changeEventArgs.newValue;

        // VALIDA NO INGRESAR NUEVAMENTE EL MISMO RUBRO
        let itemList: any = entities.CondonationDetail;

        if(itemList.length>0) {
            for (let i: any = 1; i < itemList.length; i++) {
                if(concept===itemList[i].concept) {
                    changeEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ELRUBROAD_63160',false, null, this.ASSTS.timer);
                    changeEventArgs.isValid = false;
                    return;
            }
        }
        }

        // MAPEA LOS CAMPOS DE MONTOS
        let consList: any = changeEventArgs.commons.api.vc.catalogs.VA_TEXTINPUTBOXVSD_563764.data();

        let amountList: any = null;
        for (let i: any = 0; i < consList.length; i++) {
            if(concept===consList[i].code) {
                amountList = consList[i].attributes;
                break;
            }
        }
        if(amountList != null) {
            changeEventArgs.rowData.currentAmount = (amountList[0]!=null)?amountList[0]:0;
            changeEventArgs.rowData.pastDueAmount = (amountList[1]!=null)?amountList[1]:0;
            changeEventArgs.rowData.dueAmount = (amountList[2]!=null)?amountList[2]:0;
            changeEventArgs.rowData.totalValue = (amountList[3]!=null)?amountList[3]:0;
            changeEventArgs.commons.api.grid.updateRowData(changeEventArgs.rowData, 'currentAmount', changeEventArgs.rowData.currentAmount);
            changeEventArgs.commons.api.grid.updateRowData(changeEventArgs.rowData, 'pastDueAmount', changeEventArgs.rowData.pastDueAmount);
            changeEventArgs.commons.api.grid.updateRowData(changeEventArgs.rowData, 'dueAmount', changeEventArgs.rowData.dueAmount);
            changeEventArgs.commons.api.grid.updateRowData(changeEventArgs.rowData, 'totalValue', changeEventArgs.rowData.totalValue);
            $("#VA_TEXTINPUTBOXABB_665764").data("kendoNumericTextBox").focus()
            $("#VA_TEXTINPUTBOXTSF_920764").data("kendoNumericTextBox").focus()
            $("#VA_TEXTINPUTBOXBSX_772764").data("kendoNumericTextBox").focus()
            $("#VA_TEXTINPUTBOXBOS_972764").data("kendoNumericTextBox").focus()
            $("#VA_TEXTINPUTBOXEPR_994764").focus()
        }
    };