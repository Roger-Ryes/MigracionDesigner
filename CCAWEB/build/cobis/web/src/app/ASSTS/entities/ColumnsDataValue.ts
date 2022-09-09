
import { FormGroup } from '@angular/forms';
import { CobisDesignerEntity } from 'cobis-designer';

export class ColumnsDataValue  extends CobisDesignerEntity{
	
	constructor(frm?: FormGroup) {
    	if(frm){
			super(frm);			
    		this.formGroup = frm; 			   	  
		}	
		else{
			let props : string[] = [
					"col12"	,
					"col15"	,
					"col2"	,
					"col111"	,
					"col35"	,
					"col92"	,
					"col125"	,
					"col14"	,
					"col1"	,
					"col126"	,
					"col155"	,
					"col21"	,
					"col141"	,
					"col32"	,
					"col76"	,
					"col101"	,
					"col130"	,
					"col150"	,
					"col38"	,
					"col47"	,
					"col75"	,
					"col82"	,
					"col116"	,
					"col24"	,
					"col88"	,
					"col121"	,
					"col10"	,
					"col153"	,
					"col64"	,
					"col22"	,
					"col25"	,
					"col144"	,
					"col109"	,
					"col61"	,
					"col100"	,
					"col119"	,
					"col148"	,
					"col31"	,
					"col133"	,
					"col62"	,
					"col84"	,
					"col108"	,
					"col87"	,
					"col91"	,
					"col140"	,
					"col156"	,
					"col66"	,
					"col135"	,
					"col17"	,
					"col26"	,
					"col72"	,
					"col78"	,
					"col118"	,
					"col20"	,
					"col52"	,
					"col49"	,
					"col160"	,
					"col166"	,
					"col18"	,
					"col67"	,
					"col56"	,
					"col68"	,
					"col69"	,
					"col129"	,
					"col37"	,
					"col157"	,
					"col146"	,
					"col171"	,
					"col93"	,
					"col103"	,
					"col136"	,
					"col167"	,
					"col43"	,
					"col46"	,
					"col128"	,
					"col29"	,
					"col70"	,
					"col138"	,
					"col86"	,
					"col96"	,
					"sectorDesc"	,
					"col106"	,
					"col8"	,
					"col94"	,
					"col97"	,
					"col169"	,
					"col113"	,
					"col115"	,
					"col152"	,
					"col19"	,
					"col42"	,
					"col162"	,
					"col33"	,
					"col73"	,
					"col74"	,
					"balloomFee"	,
					"col102"	,
					"col55"	,
					"col58"	,
					"col95"	,
					"col120"	,
					"col151"	,
					"col107"	,
					"col117"	,
					"col80"	,
					"col112"	,
					"col159"	,
					"col168"	,
					"col170"	,
					"col40"	,
					"col4"	,
					"col63"	,
					"col79"	,
					"companySold"	,
					"col122"	,
					"col124"	,
					"col158"	,
					"col41"	,
					"col5"	,
					"col27"	,
					"col28"	,
					"col44"	,
					"col77"	,
					"col85"	,
					"col16"	,
					"col161"	,
					"col48"	,
					"col65"	,
					"col6"	,
					"col89"	,
					"col137"	,
					"col59"	,
					"col105"	,
					"col163"	,
					"col147"	,
					"col139"	,
					"col54"	,
					"col110"	,
					"col23"	,
					"col81"	,
					"col83"	,
					"col127"	,
					"col45"	,
					"col11"	,
					"col132"	,
					"col149"	,
					"col34"	,
					"col114"	,
					"col13"	,
					"col3"	,
					"col51"	,
					"col131"	,
					"col7"	,
					"col99"	,
					"col53"	,
					"col90"	,
					"col9"	,
					"col143"	,
					"col154"	,
					"col50"	,
					"col57"	,
					"col104"	,
					"col123"	,
					"col134"	,
					"col164"	,
					"col165"	,
					"col98"	,
					"col142"	,
					"col30"	,
					"col36"	,
					"col60"	,
					"col39"	,
					"col145"	,
					"col71"	
			];			
			super(undefined,props);
		}   	    
	}
	public set col12 (value: number | null) {
    	this.setPropertyValue(value, "col12");    	
  	}
  	
  	public get col12(): number | null {
    	return this.getPropertyValue("col12");    	
  	}
	public set col15 (value: string | null) {
    	this.setPropertyValue(value, "col15");    	
  	}
  	
  	public get col15(): string | null {
    	return this.getPropertyValue("col15");    	
  	}
	public set col2 (value: string | null) {
    	this.setPropertyValue(value, "col2");    	
  	}
  	
  	public get col2(): string | null {
    	return this.getPropertyValue("col2");    	
  	}
	public set col111 (value: string | null) {
    	this.setPropertyValue(value, "col111");    	
  	}
  	
  	public get col111(): string | null {
    	return this.getPropertyValue("col111");    	
  	}
	public set col35 (value: string | null) {
    	this.setPropertyValue(value, "col35");    	
  	}
  	
  	public get col35(): string | null {
    	return this.getPropertyValue("col35");    	
  	}
	public set col92 (value: string | null) {
    	this.setPropertyValue(value, "col92");    	
  	}
  	
  	public get col92(): string | null {
    	return this.getPropertyValue("col92");    	
  	}
	public set col125 (value: string | null) {
    	this.setPropertyValue(value, "col125");    	
  	}
  	
  	public get col125(): string | null {
    	return this.getPropertyValue("col125");    	
  	}
	public set col14 (value: string | null) {
    	this.setPropertyValue(value, "col14");    	
  	}
  	
  	public get col14(): string | null {
    	return this.getPropertyValue("col14");    	
  	}
	public set col1 (value: number | null) {
    	this.setPropertyValue(value, "col1");    	
  	}
  	
  	public get col1(): number | null {
    	return this.getPropertyValue("col1");    	
  	}
	public set col126 (value: string | null) {
    	this.setPropertyValue(value, "col126");    	
  	}
  	
  	public get col126(): string | null {
    	return this.getPropertyValue("col126");    	
  	}
	public set col155 (value: string | null) {
    	this.setPropertyValue(value, "col155");    	
  	}
  	
  	public get col155(): string | null {
    	return this.getPropertyValue("col155");    	
  	}
	public set col21 (value: string | null) {
    	this.setPropertyValue(value, "col21");    	
  	}
  	
  	public get col21(): string | null {
    	return this.getPropertyValue("col21");    	
  	}
	public set col141 (value: string | null) {
    	this.setPropertyValue(value, "col141");    	
  	}
  	
  	public get col141(): string | null {
    	return this.getPropertyValue("col141");    	
  	}
	public set col32 (value: string | null) {
    	this.setPropertyValue(value, "col32");    	
  	}
  	
  	public get col32(): string | null {
    	return this.getPropertyValue("col32");    	
  	}
	public set col76 (value: number | null) {
    	this.setPropertyValue(value, "col76");    	
  	}
  	
  	public get col76(): number | null {
    	return this.getPropertyValue("col76");    	
  	}
	public set col101 (value: string | null) {
    	this.setPropertyValue(value, "col101");    	
  	}
  	
  	public get col101(): string | null {
    	return this.getPropertyValue("col101");    	
  	}
	public set col130 (value: number | null) {
    	this.setPropertyValue(value, "col130");    	
  	}
  	
  	public get col130(): number | null {
    	return this.getPropertyValue("col130");    	
  	}
	public set col150 (value: number | null) {
    	this.setPropertyValue(value, "col150");    	
  	}
  	
  	public get col150(): number | null {
    	return this.getPropertyValue("col150");    	
  	}
	public set col38 (value: number | null) {
    	this.setPropertyValue(value, "col38");    	
  	}
  	
  	public get col38(): number | null {
    	return this.getPropertyValue("col38");    	
  	}
	public set col47 (value: string | null) {
    	this.setPropertyValue(value, "col47");    	
  	}
  	
  	public get col47(): string | null {
    	return this.getPropertyValue("col47");    	
  	}
	public set col75 (value: string | null) {
    	this.setPropertyValue(value, "col75");    	
  	}
  	
  	public get col75(): string | null {
    	return this.getPropertyValue("col75");    	
  	}
	public set col82 (value: string | null) {
    	this.setPropertyValue(value, "col82");    	
  	}
  	
  	public get col82(): string | null {
    	return this.getPropertyValue("col82");    	
  	}
	public set col116 (value: number | null) {
    	this.setPropertyValue(value, "col116");    	
  	}
  	
  	public get col116(): number | null {
    	return this.getPropertyValue("col116");    	
  	}
	public set col24 (value: number | null) {
    	this.setPropertyValue(value, "col24");    	
  	}
  	
  	public get col24(): number | null {
    	return this.getPropertyValue("col24");    	
  	}
	public set col88 (value: string | null) {
    	this.setPropertyValue(value, "col88");    	
  	}
  	
  	public get col88(): string | null {
    	return this.getPropertyValue("col88");    	
  	}
	public set col121 (value: string | null) {
    	this.setPropertyValue(value, "col121");    	
  	}
  	
  	public get col121(): string | null {
    	return this.getPropertyValue("col121");    	
  	}
	public set col10 (value: string | null) {
    	this.setPropertyValue(value, "col10");    	
  	}
  	
  	public get col10(): string | null {
    	return this.getPropertyValue("col10");    	
  	}
	public set col153 (value: string | null) {
    	this.setPropertyValue(value, "col153");    	
  	}
  	
  	public get col153(): string | null {
    	return this.getPropertyValue("col153");    	
  	}
	public set col64 (value: string | null) {
    	this.setPropertyValue(value, "col64");    	
  	}
  	
  	public get col64(): string | null {
    	return this.getPropertyValue("col64");    	
  	}
	public set col22 (value: number | null) {
    	this.setPropertyValue(value, "col22");    	
  	}
  	
  	public get col22(): number | null {
    	return this.getPropertyValue("col22");    	
  	}
	public set col25 (value: number | null) {
    	this.setPropertyValue(value, "col25");    	
  	}
  	
  	public get col25(): number | null {
    	return this.getPropertyValue("col25");    	
  	}
	public set col144 (value: string | null) {
    	this.setPropertyValue(value, "col144");    	
  	}
  	
  	public get col144(): string | null {
    	return this.getPropertyValue("col144");    	
  	}
	public set col109 (value: string | null) {
    	this.setPropertyValue(value, "col109");    	
  	}
  	
  	public get col109(): string | null {
    	return this.getPropertyValue("col109");    	
  	}
	public set col61 (value: string | null) {
    	this.setPropertyValue(value, "col61");    	
  	}
  	
  	public get col61(): string | null {
    	return this.getPropertyValue("col61");    	
  	}
	public set col100 (value: string | null) {
    	this.setPropertyValue(value, "col100");    	
  	}
  	
  	public get col100(): string | null {
    	return this.getPropertyValue("col100");    	
  	}
	public set col119 (value: string | null) {
    	this.setPropertyValue(value, "col119");    	
  	}
  	
  	public get col119(): string | null {
    	return this.getPropertyValue("col119");    	
  	}
	public set col148 (value: number | null) {
    	this.setPropertyValue(value, "col148");    	
  	}
  	
  	public get col148(): number | null {
    	return this.getPropertyValue("col148");    	
  	}
	public set col31 (value: string | null) {
    	this.setPropertyValue(value, "col31");    	
  	}
  	
  	public get col31(): string | null {
    	return this.getPropertyValue("col31");    	
  	}
	public set col133 (value: number | null) {
    	this.setPropertyValue(value, "col133");    	
  	}
  	
  	public get col133(): number | null {
    	return this.getPropertyValue("col133");    	
  	}
	public set col62 (value: string | null) {
    	this.setPropertyValue(value, "col62");    	
  	}
  	
  	public get col62(): string | null {
    	return this.getPropertyValue("col62");    	
  	}
	public set col84 (value: number | null) {
    	this.setPropertyValue(value, "col84");    	
  	}
  	
  	public get col84(): number | null {
    	return this.getPropertyValue("col84");    	
  	}
	public set col108 (value: string | null) {
    	this.setPropertyValue(value, "col108");    	
  	}
  	
  	public get col108(): string | null {
    	return this.getPropertyValue("col108");    	
  	}
	public set col87 (value: number | null) {
    	this.setPropertyValue(value, "col87");    	
  	}
  	
  	public get col87(): number | null {
    	return this.getPropertyValue("col87");    	
  	}
	public set col91 (value: string | null) {
    	this.setPropertyValue(value, "col91");    	
  	}
  	
  	public get col91(): string | null {
    	return this.getPropertyValue("col91");    	
  	}
	public set col140 (value: string | null) {
    	this.setPropertyValue(value, "col140");    	
  	}
  	
  	public get col140(): string | null {
    	return this.getPropertyValue("col140");    	
  	}
	public set col156 (value: number | null) {
    	this.setPropertyValue(value, "col156");    	
  	}
  	
  	public get col156(): number | null {
    	return this.getPropertyValue("col156");    	
  	}
	public set col66 (value: string | null) {
    	this.setPropertyValue(value, "col66");    	
  	}
  	
  	public get col66(): string | null {
    	return this.getPropertyValue("col66");    	
  	}
	public set col135 (value: number | null) {
    	this.setPropertyValue(value, "col135");    	
  	}
  	
  	public get col135(): number | null {
    	return this.getPropertyValue("col135");    	
  	}
	public set col17 (value: string | null) {
    	this.setPropertyValue(value, "col17");    	
  	}
  	
  	public get col17(): string | null {
    	return this.getPropertyValue("col17");    	
  	}
	public set col26 (value: string | null) {
    	this.setPropertyValue(value, "col26");    	
  	}
  	
  	public get col26(): string | null {
    	return this.getPropertyValue("col26");    	
  	}
	public set col72 (value: string | null) {
    	this.setPropertyValue(value, "col72");    	
  	}
  	
  	public get col72(): string | null {
    	return this.getPropertyValue("col72");    	
  	}
	public set col78 (value: number | null) {
    	this.setPropertyValue(value, "col78");    	
  	}
  	
  	public get col78(): number | null {
    	return this.getPropertyValue("col78");    	
  	}
	public set col118 (value: string | null) {
    	this.setPropertyValue(value, "col118");    	
  	}
  	
  	public get col118(): string | null {
    	return this.getPropertyValue("col118");    	
  	}
	public set col20 (value: string | null) {
    	this.setPropertyValue(value, "col20");    	
  	}
  	
  	public get col20(): string | null {
    	return this.getPropertyValue("col20");    	
  	}
	public set col52 (value: number | null) {
    	this.setPropertyValue(value, "col52");    	
  	}
  	
  	public get col52(): number | null {
    	return this.getPropertyValue("col52");    	
  	}
	public set col49 (value: string | null) {
    	this.setPropertyValue(value, "col49");    	
  	}
  	
  	public get col49(): string | null {
    	return this.getPropertyValue("col49");    	
  	}
	public set col160 (value: number | null) {
    	this.setPropertyValue(value, "col160");    	
  	}
  	
  	public get col160(): number | null {
    	return this.getPropertyValue("col160");    	
  	}
	public set col166 (value: string | null) {
    	this.setPropertyValue(value, "col166");    	
  	}
  	
  	public get col166(): string | null {
    	return this.getPropertyValue("col166");    	
  	}
	public set col18 (value: string | null) {
    	this.setPropertyValue(value, "col18");    	
  	}
  	
  	public get col18(): string | null {
    	return this.getPropertyValue("col18");    	
  	}
	public set col67 (value: string | null) {
    	this.setPropertyValue(value, "col67");    	
  	}
  	
  	public get col67(): string | null {
    	return this.getPropertyValue("col67");    	
  	}
	public set col56 (value: string | null) {
    	this.setPropertyValue(value, "col56");    	
  	}
  	
  	public get col56(): string | null {
    	return this.getPropertyValue("col56");    	
  	}
	public set col68 (value: string | null) {
    	this.setPropertyValue(value, "col68");    	
  	}
  	
  	public get col68(): string | null {
    	return this.getPropertyValue("col68");    	
  	}
	public set col69 (value: string | null) {
    	this.setPropertyValue(value, "col69");    	
  	}
  	
  	public get col69(): string | null {
    	return this.getPropertyValue("col69");    	
  	}
	public set col129 (value: string | null) {
    	this.setPropertyValue(value, "col129");    	
  	}
  	
  	public get col129(): string | null {
    	return this.getPropertyValue("col129");    	
  	}
	public set col37 (value: string | null) {
    	this.setPropertyValue(value, "col37");    	
  	}
  	
  	public get col37(): string | null {
    	return this.getPropertyValue("col37");    	
  	}
	public set col157 (value: number | null) {
    	this.setPropertyValue(value, "col157");    	
  	}
  	
  	public get col157(): number | null {
    	return this.getPropertyValue("col157");    	
  	}
	public set col146 (value: string | null) {
    	this.setPropertyValue(value, "col146");    	
  	}
  	
  	public get col146(): string | null {
    	return this.getPropertyValue("col146");    	
  	}
	public set col171 (value: number | null) {
    	this.setPropertyValue(value, "col171");    	
  	}
  	
  	public get col171(): number | null {
    	return this.getPropertyValue("col171");    	
  	}
	public set col93 (value: string | null) {
    	this.setPropertyValue(value, "col93");    	
  	}
  	
  	public get col93(): string | null {
    	return this.getPropertyValue("col93");    	
  	}
	public set col103 (value: string | null) {
    	this.setPropertyValue(value, "col103");    	
  	}
  	
  	public get col103(): string | null {
    	return this.getPropertyValue("col103");    	
  	}
	public set col136 (value: string | null) {
    	this.setPropertyValue(value, "col136");    	
  	}
  	
  	public get col136(): string | null {
    	return this.getPropertyValue("col136");    	
  	}
	public set col167 (value: number | null) {
    	this.setPropertyValue(value, "col167");    	
  	}
  	
  	public get col167(): number | null {
    	return this.getPropertyValue("col167");    	
  	}
	public set col43 (value: string | null) {
    	this.setPropertyValue(value, "col43");    	
  	}
  	
  	public get col43(): string | null {
    	return this.getPropertyValue("col43");    	
  	}
	public set col46 (value: string | null) {
    	this.setPropertyValue(value, "col46");    	
  	}
  	
  	public get col46(): string | null {
    	return this.getPropertyValue("col46");    	
  	}
	public set col128 (value: string | null) {
    	this.setPropertyValue(value, "col128");    	
  	}
  	
  	public get col128(): string | null {
    	return this.getPropertyValue("col128");    	
  	}
	public set col29 (value: number | null) {
    	this.setPropertyValue(value, "col29");    	
  	}
  	
  	public get col29(): number | null {
    	return this.getPropertyValue("col29");    	
  	}
	public set col70 (value: number | null) {
    	this.setPropertyValue(value, "col70");    	
  	}
  	
  	public get col70(): number | null {
    	return this.getPropertyValue("col70");    	
  	}
	public set col138 (value: number | null) {
    	this.setPropertyValue(value, "col138");    	
  	}
  	
  	public get col138(): number | null {
    	return this.getPropertyValue("col138");    	
  	}
	public set col86 (value: number | null) {
    	this.setPropertyValue(value, "col86");    	
  	}
  	
  	public get col86(): number | null {
    	return this.getPropertyValue("col86");    	
  	}
	public set col96 (value: number | null) {
    	this.setPropertyValue(value, "col96");    	
  	}
  	
  	public get col96(): number | null {
    	return this.getPropertyValue("col96");    	
  	}
	public set sectorDesc (value: string | null) {
    	this.setPropertyValue(value, "sectorDesc");    	
  	}
  	
  	public get sectorDesc(): string | null {
    	return this.getPropertyValue("sectorDesc");    	
  	}
	public set col106 (value: string | null) {
    	this.setPropertyValue(value, "col106");    	
  	}
  	
  	public get col106(): string | null {
    	return this.getPropertyValue("col106");    	
  	}
	public set col8 (value: string | null) {
    	this.setPropertyValue(value, "col8");    	
  	}
  	
  	public get col8(): string | null {
    	return this.getPropertyValue("col8");    	
  	}
	public set col94 (value: string | null) {
    	this.setPropertyValue(value, "col94");    	
  	}
  	
  	public get col94(): string | null {
    	return this.getPropertyValue("col94");    	
  	}
	public set col97 (value: string | null) {
    	this.setPropertyValue(value, "col97");    	
  	}
  	
  	public get col97(): string | null {
    	return this.getPropertyValue("col97");    	
  	}
	public set col169 (value: number | null) {
    	this.setPropertyValue(value, "col169");    	
  	}
  	
  	public get col169(): number | null {
    	return this.getPropertyValue("col169");    	
  	}
	public set col113 (value: string | null) {
    	this.setPropertyValue(value, "col113");    	
  	}
  	
  	public get col113(): string | null {
    	return this.getPropertyValue("col113");    	
  	}
	public set col115 (value: number | null) {
    	this.setPropertyValue(value, "col115");    	
  	}
  	
  	public get col115(): number | null {
    	return this.getPropertyValue("col115");    	
  	}
	public set col152 (value: number | null) {
    	this.setPropertyValue(value, "col152");    	
  	}
  	
  	public get col152(): number | null {
    	return this.getPropertyValue("col152");    	
  	}
	public set col19 (value: number | null) {
    	this.setPropertyValue(value, "col19");    	
  	}
  	
  	public get col19(): number | null {
    	return this.getPropertyValue("col19");    	
  	}
	public set col42 (value: number | null) {
    	this.setPropertyValue(value, "col42");    	
  	}
  	
  	public get col42(): number | null {
    	return this.getPropertyValue("col42");    	
  	}
	public set col162 (value: string | null) {
    	this.setPropertyValue(value, "col162");    	
  	}
  	
  	public get col162(): string | null {
    	return this.getPropertyValue("col162");    	
  	}
	public set col33 (value: string | null) {
    	this.setPropertyValue(value, "col33");    	
  	}
  	
  	public get col33(): string | null {
    	return this.getPropertyValue("col33");    	
  	}
	public set col73 (value: number | null) {
    	this.setPropertyValue(value, "col73");    	
  	}
  	
  	public get col73(): number | null {
    	return this.getPropertyValue("col73");    	
  	}
	public set col74 (value: number | null) {
    	this.setPropertyValue(value, "col74");    	
  	}
  	
  	public get col74(): number | null {
    	return this.getPropertyValue("col74");    	
  	}
	public set balloomFee (value: string | null) {
    	this.setPropertyValue(value, "balloomFee");    	
  	}
  	
  	public get balloomFee(): string | null {
    	return this.getPropertyValue("balloomFee");    	
  	}
	public set col102 (value: string | null) {
    	this.setPropertyValue(value, "col102");    	
  	}
  	
  	public get col102(): string | null {
    	return this.getPropertyValue("col102");    	
  	}
	public set col55 (value: string | null) {
    	this.setPropertyValue(value, "col55");    	
  	}
  	
  	public get col55(): string | null {
    	return this.getPropertyValue("col55");    	
  	}
	public set col58 (value: string | null) {
    	this.setPropertyValue(value, "col58");    	
  	}
  	
  	public get col58(): string | null {
    	return this.getPropertyValue("col58");    	
  	}
	public set col95 (value: number | null) {
    	this.setPropertyValue(value, "col95");    	
  	}
  	
  	public get col95(): number | null {
    	return this.getPropertyValue("col95");    	
  	}
	public set col120 (value: string | null) {
    	this.setPropertyValue(value, "col120");    	
  	}
  	
  	public get col120(): string | null {
    	return this.getPropertyValue("col120");    	
  	}
	public set col151 (value: number | null) {
    	this.setPropertyValue(value, "col151");    	
  	}
  	
  	public get col151(): number | null {
    	return this.getPropertyValue("col151");    	
  	}
	public set col107 (value: string | null) {
    	this.setPropertyValue(value, "col107");    	
  	}
  	
  	public get col107(): string | null {
    	return this.getPropertyValue("col107");    	
  	}
	public set col117 (value: string | null) {
    	this.setPropertyValue(value, "col117");    	
  	}
  	
  	public get col117(): string | null {
    	return this.getPropertyValue("col117");    	
  	}
	public set col80 (value: string | null) {
    	this.setPropertyValue(value, "col80");    	
  	}
  	
  	public get col80(): string | null {
    	return this.getPropertyValue("col80");    	
  	}
	public set col112 (value: string | null) {
    	this.setPropertyValue(value, "col112");    	
  	}
  	
  	public get col112(): string | null {
    	return this.getPropertyValue("col112");    	
  	}
	public set col159 (value: string | null) {
    	this.setPropertyValue(value, "col159");    	
  	}
  	
  	public get col159(): string | null {
    	return this.getPropertyValue("col159");    	
  	}
	public set col168 (value: number | null) {
    	this.setPropertyValue(value, "col168");    	
  	}
  	
  	public get col168(): number | null {
    	return this.getPropertyValue("col168");    	
  	}
	public set col170 (value: number | null) {
    	this.setPropertyValue(value, "col170");    	
  	}
  	
  	public get col170(): number | null {
    	return this.getPropertyValue("col170");    	
  	}
	public set col40 (value: string | null) {
    	this.setPropertyValue(value, "col40");    	
  	}
  	
  	public get col40(): string | null {
    	return this.getPropertyValue("col40");    	
  	}
	public set col4 (value: string | null) {
    	this.setPropertyValue(value, "col4");    	
  	}
  	
  	public get col4(): string | null {
    	return this.getPropertyValue("col4");    	
  	}
	public set col63 (value: number | null) {
    	this.setPropertyValue(value, "col63");    	
  	}
  	
  	public get col63(): number | null {
    	return this.getPropertyValue("col63");    	
  	}
	public set col79 (value: string | null) {
    	this.setPropertyValue(value, "col79");    	
  	}
  	
  	public get col79(): string | null {
    	return this.getPropertyValue("col79");    	
  	}
	public set companySold (value: string | null) {
    	this.setPropertyValue(value, "companySold");    	
  	}
  	
  	public get companySold(): string | null {
    	return this.getPropertyValue("companySold");    	
  	}
	public set col122 (value: string | null) {
    	this.setPropertyValue(value, "col122");    	
  	}
  	
  	public get col122(): string | null {
    	return this.getPropertyValue("col122");    	
  	}
	public set col124 (value: string | null) {
    	this.setPropertyValue(value, "col124");    	
  	}
  	
  	public get col124(): string | null {
    	return this.getPropertyValue("col124");    	
  	}
	public set col158 (value: Date | null) {
    	this.setPropertyValue(value, "col158");    	
  	}
  	
  	public get col158(): Date | null {
    	return this.getPropertyValue("col158");    	
  	}
	public set col41 (value: number | null) {
    	this.setPropertyValue(value, "col41");    	
  	}
  	
  	public get col41(): number | null {
    	return this.getPropertyValue("col41");    	
  	}
	public set col5 (value: string | null) {
    	this.setPropertyValue(value, "col5");    	
  	}
  	
  	public get col5(): string | null {
    	return this.getPropertyValue("col5");    	
  	}
	public set col27 (value: string | null) {
    	this.setPropertyValue(value, "col27");    	
  	}
  	
  	public get col27(): string | null {
    	return this.getPropertyValue("col27");    	
  	}
	public set col28 (value: string | null) {
    	this.setPropertyValue(value, "col28");    	
  	}
  	
  	public get col28(): string | null {
    	return this.getPropertyValue("col28");    	
  	}
	public set col44 (value: string | null) {
    	this.setPropertyValue(value, "col44");    	
  	}
  	
  	public get col44(): string | null {
    	return this.getPropertyValue("col44");    	
  	}
	public set col77 (value: number | null) {
    	this.setPropertyValue(value, "col77");    	
  	}
  	
  	public get col77(): number | null {
    	return this.getPropertyValue("col77");    	
  	}
	public set col85 (value: string | null) {
    	this.setPropertyValue(value, "col85");    	
  	}
  	
  	public get col85(): string | null {
    	return this.getPropertyValue("col85");    	
  	}
	public set col16 (value: number | null) {
    	this.setPropertyValue(value, "col16");    	
  	}
  	
  	public get col16(): number | null {
    	return this.getPropertyValue("col16");    	
  	}
	public set col161 (value: string | null) {
    	this.setPropertyValue(value, "col161");    	
  	}
  	
  	public get col161(): string | null {
    	return this.getPropertyValue("col161");    	
  	}
	public set col48 (value: number | null) {
    	this.setPropertyValue(value, "col48");    	
  	}
  	
  	public get col48(): number | null {
    	return this.getPropertyValue("col48");    	
  	}
	public set col65 (value: string | null) {
    	this.setPropertyValue(value, "col65");    	
  	}
  	
  	public get col65(): string | null {
    	return this.getPropertyValue("col65");    	
  	}
	public set col6 (value: number | null) {
    	this.setPropertyValue(value, "col6");    	
  	}
  	
  	public get col6(): number | null {
    	return this.getPropertyValue("col6");    	
  	}
	public set col89 (value: string | null) {
    	this.setPropertyValue(value, "col89");    	
  	}
  	
  	public get col89(): string | null {
    	return this.getPropertyValue("col89");    	
  	}
	public set col137 (value: string | null) {
    	this.setPropertyValue(value, "col137");    	
  	}
  	
  	public get col137(): string | null {
    	return this.getPropertyValue("col137");    	
  	}
	public set col59 (value: number | null) {
    	this.setPropertyValue(value, "col59");    	
  	}
  	
  	public get col59(): number | null {
    	return this.getPropertyValue("col59");    	
  	}
	public set col105 (value: string | null) {
    	this.setPropertyValue(value, "col105");    	
  	}
  	
  	public get col105(): string | null {
    	return this.getPropertyValue("col105");    	
  	}
	public set col163 (value: string | null) {
    	this.setPropertyValue(value, "col163");    	
  	}
  	
  	public get col163(): string | null {
    	return this.getPropertyValue("col163");    	
  	}
	public set col147 (value: string | null) {
    	this.setPropertyValue(value, "col147");    	
  	}
  	
  	public get col147(): string | null {
    	return this.getPropertyValue("col147");    	
  	}
	public set col139 (value: number | null) {
    	this.setPropertyValue(value, "col139");    	
  	}
  	
  	public get col139(): number | null {
    	return this.getPropertyValue("col139");    	
  	}
	public set col54 (value: number | null) {
    	this.setPropertyValue(value, "col54");    	
  	}
  	
  	public get col54(): number | null {
    	return this.getPropertyValue("col54");    	
  	}
	public set col110 (value: string | null) {
    	this.setPropertyValue(value, "col110");    	
  	}
  	
  	public get col110(): string | null {
    	return this.getPropertyValue("col110");    	
  	}
	public set col23 (value: number | null) {
    	this.setPropertyValue(value, "col23");    	
  	}
  	
  	public get col23(): number | null {
    	return this.getPropertyValue("col23");    	
  	}
	public set col81 (value: string | null) {
    	this.setPropertyValue(value, "col81");    	
  	}
  	
  	public get col81(): string | null {
    	return this.getPropertyValue("col81");    	
  	}
	public set col83 (value: number | null) {
    	this.setPropertyValue(value, "col83");    	
  	}
  	
  	public get col83(): number | null {
    	return this.getPropertyValue("col83");    	
  	}
	public set col127 (value: string | null) {
    	this.setPropertyValue(value, "col127");    	
  	}
  	
  	public get col127(): string | null {
    	return this.getPropertyValue("col127");    	
  	}
	public set col45 (value: string | null) {
    	this.setPropertyValue(value, "col45");    	
  	}
  	
  	public get col45(): string | null {
    	return this.getPropertyValue("col45");    	
  	}
	public set col11 (value: string | null) {
    	this.setPropertyValue(value, "col11");    	
  	}
  	
  	public get col11(): string | null {
    	return this.getPropertyValue("col11");    	
  	}
	public set col132 (value: string | null) {
    	this.setPropertyValue(value, "col132");    	
  	}
  	
  	public get col132(): string | null {
    	return this.getPropertyValue("col132");    	
  	}
	public set col149 (value: number | null) {
    	this.setPropertyValue(value, "col149");    	
  	}
  	
  	public get col149(): number | null {
    	return this.getPropertyValue("col149");    	
  	}
	public set col34 (value: number | null) {
    	this.setPropertyValue(value, "col34");    	
  	}
  	
  	public get col34(): number | null {
    	return this.getPropertyValue("col34");    	
  	}
	public set col114 (value: string | null) {
    	this.setPropertyValue(value, "col114");    	
  	}
  	
  	public get col114(): string | null {
    	return this.getPropertyValue("col114");    	
  	}
	public set col13 (value: string | null) {
    	this.setPropertyValue(value, "col13");    	
  	}
  	
  	public get col13(): string | null {
    	return this.getPropertyValue("col13");    	
  	}
	public set col3 (value: number | null) {
    	this.setPropertyValue(value, "col3");    	
  	}
  	
  	public get col3(): number | null {
    	return this.getPropertyValue("col3");    	
  	}
	public set col51 (value: number | null) {
    	this.setPropertyValue(value, "col51");    	
  	}
  	
  	public get col51(): number | null {
    	return this.getPropertyValue("col51");    	
  	}
	public set col131 (value: string | null) {
    	this.setPropertyValue(value, "col131");    	
  	}
  	
  	public get col131(): string | null {
    	return this.getPropertyValue("col131");    	
  	}
	public set col7 (value: string | null) {
    	this.setPropertyValue(value, "col7");    	
  	}
  	
  	public get col7(): string | null {
    	return this.getPropertyValue("col7");    	
  	}
	public set col99 (value: string | null) {
    	this.setPropertyValue(value, "col99");    	
  	}
  	
  	public get col99(): string | null {
    	return this.getPropertyValue("col99");    	
  	}
	public set col53 (value: number | null) {
    	this.setPropertyValue(value, "col53");    	
  	}
  	
  	public get col53(): number | null {
    	return this.getPropertyValue("col53");    	
  	}
	public set col90 (value: string | null) {
    	this.setPropertyValue(value, "col90");    	
  	}
  	
  	public get col90(): string | null {
    	return this.getPropertyValue("col90");    	
  	}
	public set col9 (value: number | null) {
    	this.setPropertyValue(value, "col9");    	
  	}
  	
  	public get col9(): number | null {
    	return this.getPropertyValue("col9");    	
  	}
	public set col143 (value: string | null) {
    	this.setPropertyValue(value, "col143");    	
  	}
  	
  	public get col143(): string | null {
    	return this.getPropertyValue("col143");    	
  	}
	public set col154 (value: string | null) {
    	this.setPropertyValue(value, "col154");    	
  	}
  	
  	public get col154(): string | null {
    	return this.getPropertyValue("col154");    	
  	}
	public set col50 (value: string | null) {
    	this.setPropertyValue(value, "col50");    	
  	}
  	
  	public get col50(): string | null {
    	return this.getPropertyValue("col50");    	
  	}
	public set col57 (value: string | null) {
    	this.setPropertyValue(value, "col57");    	
  	}
  	
  	public get col57(): string | null {
    	return this.getPropertyValue("col57");    	
  	}
	public set col104 (value: number | null) {
    	this.setPropertyValue(value, "col104");    	
  	}
  	
  	public get col104(): number | null {
    	return this.getPropertyValue("col104");    	
  	}
	public set col123 (value: string | null) {
    	this.setPropertyValue(value, "col123");    	
  	}
  	
  	public get col123(): string | null {
    	return this.getPropertyValue("col123");    	
  	}
	public set col134 (value: number | null) {
    	this.setPropertyValue(value, "col134");    	
  	}
  	
  	public get col134(): number | null {
    	return this.getPropertyValue("col134");    	
  	}
	public set col164 (value: string | null) {
    	this.setPropertyValue(value, "col164");    	
  	}
  	
  	public get col164(): string | null {
    	return this.getPropertyValue("col164");    	
  	}
	public set col165 (value: string | null) {
    	this.setPropertyValue(value, "col165");    	
  	}
  	
  	public get col165(): string | null {
    	return this.getPropertyValue("col165");    	
  	}
	public set col98 (value: string | null) {
    	this.setPropertyValue(value, "col98");    	
  	}
  	
  	public get col98(): string | null {
    	return this.getPropertyValue("col98");    	
  	}
	public set col142 (value: number | null) {
    	this.setPropertyValue(value, "col142");    	
  	}
  	
  	public get col142(): number | null {
    	return this.getPropertyValue("col142");    	
  	}
	public set col30 (value: string | null) {
    	this.setPropertyValue(value, "col30");    	
  	}
  	
  	public get col30(): string | null {
    	return this.getPropertyValue("col30");    	
  	}
	public set col36 (value: number | null) {
    	this.setPropertyValue(value, "col36");    	
  	}
  	
  	public get col36(): number | null {
    	return this.getPropertyValue("col36");    	
  	}
	public set col60 (value: string | null) {
    	this.setPropertyValue(value, "col60");    	
  	}
  	
  	public get col60(): string | null {
    	return this.getPropertyValue("col60");    	
  	}
	public set col39 (value: string | null) {
    	this.setPropertyValue(value, "col39");    	
  	}
  	
  	public get col39(): string | null {
    	return this.getPropertyValue("col39");    	
  	}
	public set col145 (value: string | null) {
    	this.setPropertyValue(value, "col145");    	
  	}
  	
  	public get col145(): string | null {
    	return this.getPropertyValue("col145");    	
  	}
	public set col71 (value: string | null) {
    	this.setPropertyValue(value, "col71");    	
  	}
  	
  	public get col71(): string | null {
    	return this.getPropertyValue("col71");    	
  	}
	
}