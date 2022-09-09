
//gridRowSelecting QueryView: QV_ON17_ABV99
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_ON17_ABV99 = function (entities,gridRowSelectingEventArgs) {

     gridRowSelectingEventArgs.commons.execServer = false;
     var api = gridRowSelectingEventArgs.commons.api;
 
     if ( api.parentVc && (
          api.parentVc.id == 'VC_REPAYMENTT_461527' || 
          api.parentVc.id == 'VC_COMPANIECR_302580'
     )) {
          api.vc.closeModal({
               response: {
                    institution: gridRowSelectingEventArgs.rowData.institution,
                    companyName: gridRowSelectingEventArgs.rowData.companyName
               }
          });
     }

};




