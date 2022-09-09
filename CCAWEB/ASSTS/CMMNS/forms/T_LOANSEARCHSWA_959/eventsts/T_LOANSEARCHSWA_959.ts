queryString: any = {};


isGroup: any = 'N';


task_closeModalEvent_findCustomer = (args: any) => {
    let resp: any = args.commons.api.vc.dialogParameters;
    let customerCode: any = args.commons.api.vc.dialogParameters.CodeReceive;
    let CustomerName: any = args.commons.api.vc.dialogParameters.name;
    let identification: any = args.commons.api.vc.dialogParameters.documentId;
    let customerType: any = args.commons.api.vc.dialogParameters.customerType;
    let title: any = '';
    /*
    if (args.model.LoanInstancia.idOptionMenu == 14) {
        args.model.LoanSearchFilter.group = 'S';
    }
    */

    switch (customerType) {
    case 'P':
        title = 'ASSTS.LBL_ASSTS_CDIGOCLEN_93241';
        //isGroup = 'N';
        break;
    case 'C':
        title = 'ASSTS.LBL_ASSTS_CDIGOCLEN_93241';
        //isGroup = 'N';
        break;
    case 'S':
        title = 'ASSTS.LBL_ASSTS_CDIGOGRPU_89879';
        //isGroup = 'S';
        break;
    case 'G':
        title = 'ASSTS.LBL_ASSTS_CDIGOGRPU_89879';
        //isGroup = 'S';
        break;
    }

    args.model.LoanSearchFilter.numIdentification = customerCode;
    args.commons.api.viewState.label("VA_CODCLIENTCIXLEY_866508",title);
};