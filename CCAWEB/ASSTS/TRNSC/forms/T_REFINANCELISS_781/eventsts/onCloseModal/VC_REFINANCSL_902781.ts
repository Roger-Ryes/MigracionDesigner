//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
    //ViewContainer: RefinanceLoansFilter
    //designer-hint: 2304: Cannot find name 'task_onCloseModalEvent'.
    //designer-hint: 2304: Cannot find name 'Model'.
    //designer-hint: 2304: Cannot find name 'CobisModelOnCloseModalEventArgs'.
    task_onCloseModalEvent = (entities: Model, onCloseModalEventArgs: CobisModelOnCloseModalEventArgs) => {
        onCloseModalEventArgs.commons.execServer = false;
        if(onCloseModalEventArgs.result.code !=null){
          entities.RefinanceLoanFilter.account = onCloseModalEventArgs.result.code.trim();           
        }        
    };
    
    //designer-hint: 2304: ANTIPATTERN: It is not possible to call a Designer event from another event.
    task.closeModalEvent.findCustomer = (args: any) => {
        //designer-hint: 6133: 'resp' is declared but its value is never read.
        let resp: any = args.commons.api.vc.dialogParameters;
        let customerCode: any=  args.commons.api.vc.dialogParameters.CodeReceive;
        let CustomerName: any=  args.commons.api.vc.dialogParameters.name;
        //designer-hint: 6133: 'identification' is declared but its value is never read.
        let identification: any= args.commons.api.vc.dialogParameters.documentId;

        args.model.RefinanceLoanFilter.clientName  =  customerCode +"-"+ CustomerName;
        args.model.RefinanceLoanFilter.clientID  =  customerCode;
    };