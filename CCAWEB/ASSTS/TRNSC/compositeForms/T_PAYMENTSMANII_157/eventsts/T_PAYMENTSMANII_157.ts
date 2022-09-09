//designer-hint: 2693: 'any' only refers to a type, but is being used as a value here.
//designer-hint: 7028: Unused label.
screenCall: any;


//designer-hint: 2693: 'any' only refers to a type, but is being used as a value here.
//designer-hint: 7028: Unused label.
ioperacionGrupal: any = 'F';


//designer-hint: 2693: 'any' only refers to a type, but is being used as a value here.
//designer-hint: 7028: Unused label.
getQuotation: any = (quotationList: any, currencyTypeSearch: any) => {
        let currencyType = 0;
        let quotationValue = 1;
        
        for (let i = 0; i < quotationList._data.length - 1; i++) {
            currencyType = quotationList._data[i].currencyType;
            if (currencyTypeSearch == currencyType) {
                quotationValue = quotationList._data[i].value;
                break;
            }
        }
        return quotationValue;
    };


//designer-hint: 2304: Cannot find name 'task_closeModalEvent_findCustomer'.
task_closeModalEvent_findCustomer = (args: any) => {
    //designer-hint: 6133: 'resp' is declared but its value is never read.
    let resp: any = args.commons.api.vc.dialogParameters;
    let customerCode: any=  args.commons.api.vc.dialogParameters.CodeReceive;
    let CustomerName: any=  args.commons.api.vc.dialogParameters.name;
    //designer-hint: 6133: 'identification' is declared but its value is never read.
    let identification: any= args.commons.api.vc.dialogParameters.documentId;
    args.model.Payment.customer = customerCode +"-"+ CustomerName;
    args.model.Payment.customerID = customerCode;
};