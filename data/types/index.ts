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


export interface Guide {
    title: string;
    logo: string;
    accesscode: string;
    link: string;
    description: string,
    question: Question
    steps: Step[],
}

interface Question {
    title: string,
    paragraph: string
    
}
interface Step {
    details: {
        title: string,
        paragraph: string[]
    }
    image: string;
    reverse?: boolean
}
