export interface DataType{
    title: string;
    subtitle: string
    start: Date;
    end: Date;
    top: number;
    height: number;
    color: string;
}

export interface BlockType{
    dataArray: Array<DataType>

}