screenCall: any;


ioperacionGrupal: any = 'F';


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


task_closeModalEvent_findCustomer = (args: any) => {
    let resp: any = args.commons.api.vc.dialogParameters;
    let customerCode: any=  args.commons.api.vc.dialogParameters.CodeReceive;
    let CustomerName: any=  args.commons.api.vc.dialogParameters.name;
    let identification: any= args.commons.api.vc.dialogParameters.documentId;
    args.model.Payment.customer = customerCode +"-"+ CustomerName;
    args.model.Payment.customerID = customerCode;
};