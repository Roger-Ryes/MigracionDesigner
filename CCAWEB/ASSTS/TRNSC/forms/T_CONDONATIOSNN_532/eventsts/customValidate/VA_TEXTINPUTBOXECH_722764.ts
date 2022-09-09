//Entity: CondonationDetail.valueToCondone (TextInputBox) View: CondonationDetailForm  - TEXTBOX GRID [VALOR A CONDONAR]
    task_customValidate_VA_TEXTINPUTBOXECH_722764 = (entities: Model, args: any) => {
        args.commons.execServer = false;
        args.rowData.totalValue;
        args.isValid = (args.currentValue >= 0 && args.currentValue <= args.rowData.totalValue);
        if(!args.isValid) {
            args.errorMessage = 'El valor debe ser mayor a 0 y Menor o Igual al TOTAL';
        }
    };