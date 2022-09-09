//"TaskId": "T_PAYMENTMODEEE_368"

task_closeModalEvent_findCustomer = (args: any) => {
    let resp: any = args.commons.api.vc.dialogParameters;
    let customerCode: any = resp.CodeReceive;
    let CustomerName: any = resp.name;
    //var customerCode=  args.commons.api.vc.dialogParameters.CodeReceive;
    //var CustomerName=  args.commons.api.vc.dialogParameters.name;
    //var identification= args.commons.api.vc.dialogParameters.documentId;
    args.model.PaymentForm.clientFullName = customerCode +" - "+ CustomerName;
    args.model.PaymentForm.clientId = customerCode;
};