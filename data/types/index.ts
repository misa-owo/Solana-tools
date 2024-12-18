export interface ImageHeader {
    img_url: string;
    type: "image-header"
}

export interface DirectLink {
    title: string;
    link: string;
    type: "direct-link"
}

export interface DetailsComponent {
    title: string;
    paragraphs: string[]
    type: "details-component"
}

export interface DetailsListComponent {
    type: "details-list",
    title: string;
    list: string[];
}

export interface TrialLink {
    title: string;
    link: string;
    type: "trial-link"
    buttonText: string
}

export interface ImageCarousel {
    type: "image-carousel";
    images: string[];
}
export type IContent = ImageHeader | ImageCarousel | DirectLink | DetailsComponent | DetailsListComponent | TrialLink
