//Entity: CondonationDetail.valueToCondone (TextInputBox) View: CondonationDetailForm  - TEXTBOX GRID [VALOR A CONDONAR]
    task.customValidate.VA_TEXTINPUTBOXECH_722764 = function(  entities, args ) {
        args.commons.execServer = false;
        args.rowData.totalValue;
        args.isValid = (args.currentValue >= 0 && args.currentValue <= args.rowData.totalValue);
        if(!args.isValid) {
            args.errorMessage = 'El valor debe ser mayor a 0 y Menor o Igual al TOTAL';
        }
    };