export interface PhotoType {
    photo: string;
}
export interface InfoBlockDescriptionType {
    title: string;
    data: string;
}
export interface InfoBlockFreeType {
    title: string;
    unitCost: number;
    currency: string;
}
export interface InfoRenderItemType {
    item: string;
}
export interface InfoRenderItemListType {
    left: string;
    center: string;
    right: string;
}
interface Blocktype{
    left: string;
    center: string;
    right: string;
}
interface ServiceType{
    id: number;
    title: string;
    photo: string;
    description: string;
    currency: string;
    unitCost: number;
    images: Array<Blocktype>
}
export interface InfoServiceType{
    service: ServiceType
}