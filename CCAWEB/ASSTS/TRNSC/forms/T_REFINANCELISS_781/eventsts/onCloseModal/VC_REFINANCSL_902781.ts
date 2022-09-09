//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
    //ViewContainer: RefinanceLoansFilter
    task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
        onCloseModalEventArgs.commons.execServer = false;
        if(onCloseModalEventArgs.result.code !=null){
          entities.RefinanceLoanFilter.account = onCloseModalEventArgs.result.code.trim();           
        }        
    };
    
    task.closeModalEvent.findCustomer = (args: any) => {
        let resp: any = args.commons.api.vc.dialogParameters;
        let customerCode: any=  args.commons.api.vc.dialogParameters.CodeReceive;
        let CustomerName: any=  args.commons.api.vc.dialogParameters.name;
        let identification: any= args.commons.api.vc.dialogParameters.documentId;

        args.model.RefinanceLoanFilter.clientName  =  customerCode +"-"+ CustomerName;
        args.model.RefinanceLoanFilter.clientID  =  customerCode;
    };