

//Entity: LoanSearchFilter
//LoanSearchFilter.codClient (TextInputButton) View: StatusChangeMassive
task.textInputButtonEvent.VA_CODCLIENTZHOTEY_615293 = function( textInputButtonEventArgs ) {

    textInputButtonEventArgs.commons.execServer = false;
    
    var nav = textInputButtonEventArgs.commons.api.navigation;
	nav.label = cobis.translate('LNSPR.LBL_LNSPR_INGRESOGA_95398');
	nav.customAddress = {
		id: "findCustomer",
		url: "customer/templates/find-customers-tpl.html"
	};
	nav.modalProperties = {
		size: 'lg'
	};
	nav.scripts = [{
		module: cobis.modules.CUSTOMER,
		files: [
			"/customer/services/find-customers-srv.js",
			"/customer/controllers/find-customers-ctrl.js"]
	}];

};