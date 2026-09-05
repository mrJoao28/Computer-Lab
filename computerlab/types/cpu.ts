export interface CPU {
    name:string;
    cores :number;
    threads: number;
    frequency: number;
    cache1:number;
    cache2:number;
    cache3:number;
    tpd:number; //Thermal Design Power (medido em Watts(W))
    socket:"INTEL"|"AMD";
    litography:number; //medida em nm
    igpu:boolean;
}