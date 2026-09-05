export interface STORAGE {
    name:string;
    type:"HDD"|"SSD"|"NVMe";
    latency:number; //em ms
    capacity:number; //em GB
    readSpeed:number; //em MB/s
    writeSpeed:number; //em MB/s
}