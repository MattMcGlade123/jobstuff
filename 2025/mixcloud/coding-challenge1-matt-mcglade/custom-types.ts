export interface CityProps {
    loading: boolean,
    error?: Error,
    data?: {
        city: string
    }
};

export interface NameProps {
    loading: boolean,
    error?: Error,
    data?: {
        name: string
    }
};

export interface ContentProps {
    loading: boolean,
    error?: Error,
    data?: string
};

export interface DescriptionWithLinksProps {
    description: string,
    links: {
        url: string,
        text: string
    }[]
}