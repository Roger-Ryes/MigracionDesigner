
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class GeneralInformation  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"tramo"	,
					"cantidadReestructuraciones"	,
					"fechaTitularizacion"	,
					"idMoneda"	,
					"segmentoCredito"	,
					"fechaPrimerVencimiento"	,
					"valorBloqueoCertificado"	,
					"montoOperacion"	,
					"nombreFideicomiso"	,
					"oficialOriginal"	,
					"diasGraCuota"	,
					"saldoOperacion"	,
					"tipoTitularizacion"	,
					"dobleAlicuota"	,
					"idCliente"	,
					"lineaCredito"	,
					"perGraciaInteres"	,
					"destinoFinancieroBce"	,
					"aseguradoraDesgravamen"	,
					"valorCuota"	,
					"numeroOperaciones"	,
					"actividadEconomica"	,
					"tipoConsumo"	,
					"tipoPeriodoPlazo"	,
					"reajustable"	,
					"destinoCreditoHipotecario"	,
					"fechaVencimientoAlt"	,
					"precancelar"	,
					"cantidadRefinanciaciones"	,
					"valorBloqueoAhorro"	,
					"diaPago"	,
					"tipoCartera"	,
					"estadoCobranza"	,
					"fechaColocacion"	,
					"oficialActual"	,
					"oficina"	,
					"codOperation"	,
					"codState"	,
					"institucionAlt"	,
					"tramite"	,
					"estado"	,
					"fechaProReajuste"	,
					"tipoOperacion"	,
					"numeroBanco"	,
					"ciudad"	,
					"cuentaPago"	,
					"demandaJudicial"	,
					"planCredito"	,
					"fechaUltimoProceso"	,
					"fechaLiquidacion"	,
					"periodosInteres"	,
					"renovacion"	,
					"alicuotaAhorro"	,
					"institucion"	,
					"tipo"	,
					"nombreCliente"	,
					"periodosPlazo"	,
					"tipoPeriodoCuota"	,
					"aseguradoraVehiculo"	,
					"estadoAlt"	,
					"oficinaDescripcion"	,
					"saldoDesbloqueoAhorro"	,
					"tasaEfectiva"	,
					"claseCartera"	,
					"estadoAntesTransaccion"	,
					"actividadEconomicaAlt"	,
					"destinoFinanciero"	,
					"mesGracia"	,
					"perGraciaCapital"	,
					"formaPago"	,
					"periodosCapital"	,
					"alicuota"	,
					"idOficial"	,
					"montoAprobado"	,
					"numeroOperacion"	,
					"numeroRenovacion"	,
					"numeroReestructuracion"	,
					"fechaVencimiento"	,
					"historical"	,
					"tipoOperacionId"	,
					"perReajDiaria"	,
					"fondeador"	,
					"fechaRetorno"	,
					"saldoDesbloqueoCertificado"	,
					"vinculado"	,
					"moneda"	,
					"tipoOperacionBCE"	,
					"fechaConcesion"	
			];			
			super(undefined,props);
		}   	    
	}
	public set tramo (value: number | null) {
    	this.setPropertyValue(value, "tramo");    	
  	}
  	
  	public get tramo(): number | null {
    	return this.getPropertyValue("tramo");    	
  	}
	public set cantidadReestructuraciones (value: number | null) {
    	this.setPropertyValue(value, "cantidadReestructuraciones");    	
  	}
  	
  	public get cantidadReestructuraciones(): number | null {
    	return this.getPropertyValue("cantidadReestructuraciones");    	
  	}
	public set fechaTitularizacion (value: string | null) {
    	this.setPropertyValue(value, "fechaTitularizacion");    	
  	}
  	
  	public get fechaTitularizacion(): string | null {
    	return this.getPropertyValue("fechaTitularizacion");    	
  	}
	public set idMoneda (value: number | null) {
    	this.setPropertyValue(value, "idMoneda");    	
  	}
  	
  	public get idMoneda(): number | null {
    	return this.getPropertyValue("idMoneda");    	
  	}
	public set segmentoCredito (value: string | null) {
    	this.setPropertyValue(value, "segmentoCredito");    	
  	}
  	
  	public get segmentoCredito(): string | null {
    	return this.getPropertyValue("segmentoCredito");    	
  	}
	public set fechaPrimerVencimiento (value: Date | null) {
    	this.setPropertyValue(value, "fechaPrimerVencimiento");    	
  	}
  	
  	public get fechaPrimerVencimiento(): Date | null {
    	return this.getPropertyValue("fechaPrimerVencimiento");    	
  	}
	public set valorBloqueoCertificado (value: number | null) {
    	this.setPropertyValue(value, "valorBloqueoCertificado");    	
  	}
  	
  	public get valorBloqueoCertificado(): number | null {
    	return this.getPropertyValue("valorBloqueoCertificado");    	
  	}
	public set montoOperacion (value: number | null) {
    	this.setPropertyValue(value, "montoOperacion");    	
  	}
  	
  	public get montoOperacion(): number | null {
    	return this.getPropertyValue("montoOperacion");    	
  	}
	public set nombreFideicomiso (value: string | null) {
    	this.setPropertyValue(value, "nombreFideicomiso");    	
  	}
  	
  	public get nombreFideicomiso(): string | null {
    	return this.getPropertyValue("nombreFideicomiso");    	
  	}
	public set oficialOriginal (value: string | null) {
    	this.setPropertyValue(value, "oficialOriginal");    	
  	}
  	
  	public get oficialOriginal(): string | null {
    	return this.getPropertyValue("oficialOriginal");    	
  	}
	public set diasGraCuota (value: number | null) {
    	this.setPropertyValue(value, "diasGraCuota");    	
  	}
  	
  	public get diasGraCuota(): number | null {
    	return this.getPropertyValue("diasGraCuota");    	
  	}
	public set saldoOperacion (value: number | null) {
    	this.setPropertyValue(value, "saldoOperacion");    	
  	}
  	
  	public get saldoOperacion(): number | null {
    	return this.getPropertyValue("saldoOperacion");    	
  	}
	public set tipoTitularizacion (value: string | null) {
    	this.setPropertyValue(value, "tipoTitularizacion");    	
  	}
  	
  	public get tipoTitularizacion(): string | null {
    	return this.getPropertyValue("tipoTitularizacion");    	
  	}
	public set dobleAlicuota (value: string | null) {
    	this.setPropertyValue(value, "dobleAlicuota");    	
  	}
  	
  	public get dobleAlicuota(): string | null {
    	return this.getPropertyValue("dobleAlicuota");    	
  	}
	public set idCliente (value: number | null) {
    	this.setPropertyValue(value, "idCliente");    	
  	}
  	
  	public get idCliente(): number | null {
    	return this.getPropertyValue("idCliente");    	
  	}
	public set lineaCredito (value: string | null) {
    	this.setPropertyValue(value, "lineaCredito");    	
  	}
  	
  	public get lineaCredito(): string | null {
    	return this.getPropertyValue("lineaCredito");    	
  	}
	public set perGraciaInteres (value: number | null) {
    	this.setPropertyValue(value, "perGraciaInteres");    	
  	}
  	
  	public get perGraciaInteres(): number | null {
    	return this.getPropertyValue("perGraciaInteres");    	
  	}
	public set destinoFinancieroBce (value: string | null) {
    	this.setPropertyValue(value, "destinoFinancieroBce");    	
  	}
  	
  	public get destinoFinancieroBce(): string | null {
    	return this.getPropertyValue("destinoFinancieroBce");    	
  	}
	public set aseguradoraDesgravamen (value: string | null) {
    	this.setPropertyValue(value, "aseguradoraDesgravamen");    	
  	}
  	
  	public get aseguradoraDesgravamen(): string | null {
    	return this.getPropertyValue("aseguradoraDesgravamen");    	
  	}
	public set valorCuota (value: number | null) {
    	this.setPropertyValue(value, "valorCuota");    	
  	}
  	
  	public get valorCuota(): number | null {
    	return this.getPropertyValue("valorCuota");    	
  	}
	public set numeroOperaciones (value: string | null) {
    	this.setPropertyValue(value, "numeroOperaciones");    	
  	}
  	
  	public get numeroOperaciones(): string | null {
    	return this.getPropertyValue("numeroOperaciones");    	
  	}
	public set actividadEconomica (value: string | null) {
    	this.setPropertyValue(value, "actividadEconomica");    	
  	}
  	
  	public get actividadEconomica(): string | null {
    	return this.getPropertyValue("actividadEconomica");    	
  	}
	public set tipoConsumo (value: string | null) {
    	this.setPropertyValue(value, "tipoConsumo");    	
  	}
  	
  	public get tipoConsumo(): string | null {
    	return this.getPropertyValue("tipoConsumo");    	
  	}
	public set tipoPeriodoPlazo (value: string | null) {
    	this.setPropertyValue(value, "tipoPeriodoPlazo");    	
  	}
  	
  	public get tipoPeriodoPlazo(): string | null {
    	return this.getPropertyValue("tipoPeriodoPlazo");    	
  	}
	public set reajustable (value: string | null) {
    	this.setPropertyValue(value, "reajustable");    	
  	}
  	
  	public get reajustable(): string | null {
    	return this.getPropertyValue("reajustable");    	
  	}
	public set destinoCreditoHipotecario (value: string | null) {
    	this.setPropertyValue(value, "destinoCreditoHipotecario");    	
  	}
  	
  	public get destinoCreditoHipotecario(): string | null {
    	return this.getPropertyValue("destinoCreditoHipotecario");    	
  	}
	public set fechaVencimientoAlt (value: string | null) {
    	this.setPropertyValue(value, "fechaVencimientoAlt");    	
  	}
  	
  	public get fechaVencimientoAlt(): string | null {
    	return this.getPropertyValue("fechaVencimientoAlt");    	
  	}
	public set precancelar (value: string | null) {
    	this.setPropertyValue(value, "precancelar");    	
  	}
  	
  	public get precancelar(): string | null {
    	return this.getPropertyValue("precancelar");    	
  	}
	public set cantidadRefinanciaciones (value: number | null) {
    	this.setPropertyValue(value, "cantidadRefinanciaciones");    	
  	}
  	
  	public get cantidadRefinanciaciones(): number | null {
    	return this.getPropertyValue("cantidadRefinanciaciones");    	
  	}
	public set valorBloqueoAhorro (value: number | null) {
    	this.setPropertyValue(value, "valorBloqueoAhorro");    	
  	}
  	
  	public get valorBloqueoAhorro(): number | null {
    	return this.getPropertyValue("valorBloqueoAhorro");    	
  	}
	public set diaPago (value: number | null) {
    	this.setPropertyValue(value, "diaPago");    	
  	}
  	
  	public get diaPago(): number | null {
    	return this.getPropertyValue("diaPago");    	
  	}
	public set tipoCartera (value: string | null) {
    	this.setPropertyValue(value, "tipoCartera");    	
  	}
  	
  	public get tipoCartera(): string | null {
    	return this.getPropertyValue("tipoCartera");    	
  	}
	public set estadoCobranza (value: string | null) {
    	this.setPropertyValue(value, "estadoCobranza");    	
  	}
  	
  	public get estadoCobranza(): string | null {
    	return this.getPropertyValue("estadoCobranza");    	
  	}
	public set fechaColocacion (value: string | null) {
    	this.setPropertyValue(value, "fechaColocacion");    	
  	}
  	
  	public get fechaColocacion(): string | null {
    	return this.getPropertyValue("fechaColocacion");    	
  	}
	public set oficialActual (value: string | null) {
    	this.setPropertyValue(value, "oficialActual");    	
  	}
  	
  	public get oficialActual(): string | null {
    	return this.getPropertyValue("oficialActual");    	
  	}
	public set oficina (value: number | null) {
    	this.setPropertyValue(value, "oficina");    	
  	}
  	
  	public get oficina(): number | null {
    	return this.getPropertyValue("oficina");    	
  	}
	public set codOperation (value: number | null) {
    	this.setPropertyValue(value, "codOperation");    	
  	}
  	
  	public get codOperation(): number | null {
    	return this.getPropertyValue("codOperation");    	
  	}
	public set codState (value: number | null) {
    	this.setPropertyValue(value, "codState");    	
  	}
  	
  	public get codState(): number | null {
    	return this.getPropertyValue("codState");    	
  	}
	public set institucionAlt (value: string | null) {
    	this.setPropertyValue(value, "institucionAlt");    	
  	}
  	
  	public get institucionAlt(): string | null {
    	return this.getPropertyValue("institucionAlt");    	
  	}
	public set tramite (value: number | null) {
    	this.setPropertyValue(value, "tramite");    	
  	}
  	
  	public get tramite(): number | null {
    	return this.getPropertyValue("tramite");    	
  	}
	public set estado (value: string | null) {
    	this.setPropertyValue(value, "estado");    	
  	}
  	
  	public get estado(): string | null {
    	return this.getPropertyValue("estado");    	
  	}
	public set fechaProReajuste (value: string | null) {
    	this.setPropertyValue(value, "fechaProReajuste");    	
  	}
  	
  	public get fechaProReajuste(): string | null {
    	return this.getPropertyValue("fechaProReajuste");    	
  	}
	public set tipoOperacion (value: string | null) {
    	this.setPropertyValue(value, "tipoOperacion");    	
  	}
  	
  	public get tipoOperacion(): string | null {
    	return this.getPropertyValue("tipoOperacion");    	
  	}
	public set numeroBanco (value: number | null) {
    	this.setPropertyValue(value, "numeroBanco");    	
  	}
  	
  	public get numeroBanco(): number | null {
    	return this.getPropertyValue("numeroBanco");    	
  	}
	public set ciudad (value: string | null) {
    	this.setPropertyValue(value, "ciudad");    	
  	}
  	
  	public get ciudad(): string | null {
    	return this.getPropertyValue("ciudad");    	
  	}
	public set cuentaPago (value: string | null) {
    	this.setPropertyValue(value, "cuentaPago");    	
  	}
  	
  	public get cuentaPago(): string | null {
    	return this.getPropertyValue("cuentaPago");    	
  	}
	public set demandaJudicial (value: string | null) {
    	this.setPropertyValue(value, "demandaJudicial");    	
  	}
  	
  	public get demandaJudicial(): string | null {
    	return this.getPropertyValue("demandaJudicial");    	
  	}
	public set planCredito (value: string | null) {
    	this.setPropertyValue(value, "planCredito");    	
  	}
  	
  	public get planCredito(): string | null {
    	return this.getPropertyValue("planCredito");    	
  	}
	public set fechaUltimoProceso (value: string | null) {
    	this.setPropertyValue(value, "fechaUltimoProceso");    	
  	}
  	
  	public get fechaUltimoProceso(): string | null {
    	return this.getPropertyValue("fechaUltimoProceso");    	
  	}
	public set fechaLiquidacion (value: string | null) {
    	this.setPropertyValue(value, "fechaLiquidacion");    	
  	}
  	
  	public get fechaLiquidacion(): string | null {
    	return this.getPropertyValue("fechaLiquidacion");    	
  	}
	public set periodosInteres (value: number | null) {
    	this.setPropertyValue(value, "periodosInteres");    	
  	}
  	
  	public get periodosInteres(): number | null {
    	return this.getPropertyValue("periodosInteres");    	
  	}
	public set renovacion (value: string | null) {
    	this.setPropertyValue(value, "renovacion");    	
  	}
  	
  	public get renovacion(): string | null {
    	return this.getPropertyValue("renovacion");    	
  	}
	public set alicuotaAhorro (value: string | null) {
    	this.setPropertyValue(value, "alicuotaAhorro");    	
  	}
  	
  	public get alicuotaAhorro(): string | null {
    	return this.getPropertyValue("alicuotaAhorro");    	
  	}
	public set institucion (value: string | null) {
    	this.setPropertyValue(value, "institucion");    	
  	}
  	
  	public get institucion(): string | null {
    	return this.getPropertyValue("institucion");    	
  	}
	public set tipo (value: string | null) {
    	this.setPropertyValue(value, "tipo");    	
  	}
  	
  	public get tipo(): string | null {
    	return this.getPropertyValue("tipo");    	
  	}
	public set nombreCliente (value: string | null) {
    	this.setPropertyValue(value, "nombreCliente");    	
  	}
  	
  	public get nombreCliente(): string | null {
    	return this.getPropertyValue("nombreCliente");    	
  	}
	public set periodosPlazo (value: number | null) {
    	this.setPropertyValue(value, "periodosPlazo");    	
  	}
  	
  	public get periodosPlazo(): number | null {
    	return this.getPropertyValue("periodosPlazo");    	
  	}
	public set tipoPeriodoCuota (value: string | null) {
    	this.setPropertyValue(value, "tipoPeriodoCuota");    	
  	}
  	
  	public get tipoPeriodoCuota(): string | null {
    	return this.getPropertyValue("tipoPeriodoCuota");    	
  	}
	public set aseguradoraVehiculo (value: string | null) {
    	this.setPropertyValue(value, "aseguradoraVehiculo");    	
  	}
  	
  	public get aseguradoraVehiculo(): string | null {
    	return this.getPropertyValue("aseguradoraVehiculo");    	
  	}
	public set estadoAlt (value: string | null) {
    	this.setPropertyValue(value, "estadoAlt");    	
  	}
  	
  	public get estadoAlt(): string | null {
    	return this.getPropertyValue("estadoAlt");    	
  	}
	public set oficinaDescripcion (value: string | null) {
    	this.setPropertyValue(value, "oficinaDescripcion");    	
  	}
  	
  	public get oficinaDescripcion(): string | null {
    	return this.getPropertyValue("oficinaDescripcion");    	
  	}
	public set saldoDesbloqueoAhorro (value: number | null) {
    	this.setPropertyValue(value, "saldoDesbloqueoAhorro");    	
  	}
  	
  	public get saldoDesbloqueoAhorro(): number | null {
    	return this.getPropertyValue("saldoDesbloqueoAhorro");    	
  	}
	public set tasaEfectiva (value: number | null) {
    	this.setPropertyValue(value, "tasaEfectiva");    	
  	}
  	
  	public get tasaEfectiva(): number | null {
    	return this.getPropertyValue("tasaEfectiva");    	
  	}
	public set claseCartera (value: string | null) {
    	this.setPropertyValue(value, "claseCartera");    	
  	}
  	
  	public get claseCartera(): string | null {
    	return this.getPropertyValue("claseCartera");    	
  	}
	public set estadoAntesTransaccion (value: string | null) {
    	this.setPropertyValue(value, "estadoAntesTransaccion");    	
  	}
  	
  	public get estadoAntesTransaccion(): string | null {
    	return this.getPropertyValue("estadoAntesTransaccion");    	
  	}
	public set actividadEconomicaAlt (value: string | null) {
    	this.setPropertyValue(value, "actividadEconomicaAlt");    	
  	}
  	
  	public get actividadEconomicaAlt(): string | null {
    	return this.getPropertyValue("actividadEconomicaAlt");    	
  	}
	public set destinoFinanciero (value: string | null) {
    	this.setPropertyValue(value, "destinoFinanciero");    	
  	}
  	
  	public get destinoFinanciero(): string | null {
    	return this.getPropertyValue("destinoFinanciero");    	
  	}
	public set mesGracia (value: string | null) {
    	this.setPropertyValue(value, "mesGracia");    	
  	}
  	
  	public get mesGracia(): string | null {
    	return this.getPropertyValue("mesGracia");    	
  	}
	public set perGraciaCapital (value: number | null) {
    	this.setPropertyValue(value, "perGraciaCapital");    	
  	}
  	
  	public get perGraciaCapital(): number | null {
    	return this.getPropertyValue("perGraciaCapital");    	
  	}
	public set formaPago (value: string | null) {
    	this.setPropertyValue(value, "formaPago");    	
  	}
  	
  	public get formaPago(): string | null {
    	return this.getPropertyValue("formaPago");    	
  	}
	public set periodosCapital (value: number | null) {
    	this.setPropertyValue(value, "periodosCapital");    	
  	}
  	
  	public get periodosCapital(): number | null {
    	return this.getPropertyValue("periodosCapital");    	
  	}
	public set alicuota (value: string | null) {
    	this.setPropertyValue(value, "alicuota");    	
  	}
  	
  	public get alicuota(): string | null {
    	return this.getPropertyValue("alicuota");    	
  	}
	public set idOficial (value: number | null) {
    	this.setPropertyValue(value, "idOficial");    	
  	}
  	
  	public get idOficial(): number | null {
    	return this.getPropertyValue("idOficial");    	
  	}
	public set montoAprobado (value: number | null) {
    	this.setPropertyValue(value, "montoAprobado");    	
  	}
  	
  	public get montoAprobado(): number | null {
    	return this.getPropertyValue("montoAprobado");    	
  	}
	public set numeroOperacion (value: string | null) {
    	this.setPropertyValue(value, "numeroOperacion");    	
  	}
  	
  	public get numeroOperacion(): string | null {
    	return this.getPropertyValue("numeroOperacion");    	
  	}
	public set numeroRenovacion (value: number | null) {
    	this.setPropertyValue(value, "numeroRenovacion");    	
  	}
  	
  	public get numeroRenovacion(): number | null {
    	return this.getPropertyValue("numeroRenovacion");    	
  	}
	public set numeroReestructuracion (value: number | null) {
    	this.setPropertyValue(value, "numeroReestructuracion");    	
  	}
  	
  	public get numeroReestructuracion(): number | null {
    	return this.getPropertyValue("numeroReestructuracion");    	
  	}
	public set fechaVencimiento (value: Date | null) {
    	this.setPropertyValue(value, "fechaVencimiento");    	
  	}
  	
  	public get fechaVencimiento(): Date | null {
    	return this.getPropertyValue("fechaVencimiento");    	
  	}
	public set historical (value: string | null) {
    	this.setPropertyValue(value, "historical");    	
  	}
  	
  	public get historical(): string | null {
    	return this.getPropertyValue("historical");    	
  	}
	public set tipoOperacionId (value: string | null) {
    	this.setPropertyValue(value, "tipoOperacionId");    	
  	}
  	
  	public get tipoOperacionId(): string | null {
    	return this.getPropertyValue("tipoOperacionId");    	
  	}
	public set perReajDiaria (value: string | null) {
    	this.setPropertyValue(value, "perReajDiaria");    	
  	}
  	
  	public get perReajDiaria(): string | null {
    	return this.getPropertyValue("perReajDiaria");    	
  	}
	public set fondeador (value: number | null) {
    	this.setPropertyValue(value, "fondeador");    	
  	}
  	
  	public get fondeador(): number | null {
    	return this.getPropertyValue("fondeador");    	
  	}
	public set fechaRetorno (value: string | null) {
    	this.setPropertyValue(value, "fechaRetorno");    	
  	}
  	
  	public get fechaRetorno(): string | null {
    	return this.getPropertyValue("fechaRetorno");    	
  	}
	public set saldoDesbloqueoCertificado (value: number | null) {
    	this.setPropertyValue(value, "saldoDesbloqueoCertificado");    	
  	}
  	
  	public get saldoDesbloqueoCertificado(): number | null {
    	return this.getPropertyValue("saldoDesbloqueoCertificado");    	
  	}
	public set vinculado (value: string | null) {
    	this.setPropertyValue(value, "vinculado");    	
  	}
  	
  	public get vinculado(): string | null {
    	return this.getPropertyValue("vinculado");    	
  	}
	public set moneda (value: string | null) {
    	this.setPropertyValue(value, "moneda");    	
  	}
  	
  	public get moneda(): string | null {
    	return this.getPropertyValue("moneda");    	
  	}
	public set tipoOperacionBCE (value: string | null) {
    	this.setPropertyValue(value, "tipoOperacionBCE");    	
  	}
  	
  	public get tipoOperacionBCE(): string | null {
    	return this.getPropertyValue("tipoOperacionBCE");    	
  	}
	public set fechaConcesion (value: Date | null) {
    	this.setPropertyValue(value, "fechaConcesion");    	
  	}
  	
  	public get fechaConcesion(): Date | null {
    	return this.getPropertyValue("fechaConcesion");    	
  	}
	
}