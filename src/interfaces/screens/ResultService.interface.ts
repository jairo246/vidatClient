export interface RenderItemType {
    item: string;
}

export interface ImagesCarouselType {
    images: Array<string>;
    position: number;
    setPosition(position:number): void;
}

export interface ServiceItemType {
    serviceId: number;
    title: string;
    images: Array<string>;
    secondaryText: string;
    onInfoServicePress: () => void;
}