import {
  CobisHeader
} from "cobis-designer-controls";

export const header_HD_USCREDIEE_109: CobisHeader = {
  "collapsed": "",
  "entityId": ["EN_LOANSLIDE_580"],
  "entityToSend": ["LoansLinesHeader"],
  "headerId": "HD_USCREDIEE_109",
  "headerInfoProduct": [{
    "label": "LNSPR.LBL_LNSPR_MONTOEMFX_52083",
    "value": "LoansLinesHeader.monto"
  }, {
    "label": "LNSPR.LBL_LNSPR_MONTOUTDA_20286",
    "value": "LoansLinesHeader.montoUtilizado"
  }, {
    "label": "LNSPR.LBL_LNSPR_MONTODIPN_56241",
    "value": "LoansLinesHeader.montoDisponible"
  }, {
    "label": "LNSPR.LBL_LNSPR_MONEDAFCA_83005",
    "value": "LoansLinesHeader.monedaDesc"
  }, {
    "label": "LNSPR.LBL_LNSPR_ESTADOEAI_33340",
    "value": "LoansLinesHeader.estado"
  }, {
    "label": "LNSPR.LBL_LNSPR_OFICINAGV_33565",
    "value": "LoansLinesHeader.oficina"
  }],
  "name": "USCreditHeader",
  "primaryText": {
    "firstAttributeName": "LoansLinesHeader.cupo",
    "secondAttributeName": "LoansLinesHeader.naturalezaOp"
  },
  "searchPage": "views\\LNSPR\\OPRTN\\T_LNSPRFYCKEVVP_737\\_task.html?mode=1\\_task.html?mode=8",
  "secundaryText": {
    "firstAttributeName": "LoansLinesHeader.clienteNombre",
    "secondAttributeName": null
  },
  "showInfo": 5,
  "separator": undefined,
  "showButtons": undefined,
  "visibleExpandOption": undefined
}