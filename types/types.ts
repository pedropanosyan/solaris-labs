export interface Content {
    navbar: {
        sections: {
            name: string;
            link: string;
        }[];
        contact: {
            name: string;
            link: string;
        };
    };
    hero: {
        title: string;
        titleOptions: string[];
        subtitle: string;
    };
    services: {
        title: string;
        subtitle: string;
        items: {
            title: string;
            description: string;
            features: string[];
            order: number;
        }[];
    };
    expertise: {
        title: string;
        subtitle: string;
        label: string;
        items: {
            title: string;
            description: string;
        }[];
    };
    about: {
        title: string;
        subtitle: string;
        items: {
            title: string;
            description: string;
        }[];
    };
    contact: {
        title: string;
        form: {
            name: string;
            email: string;
            message: string;
            button: string;
        };
    };
}


export interface LanguageContextProps {
    language: string;
    content: Content;
    switchLanguage: (lang: 'spanish' | 'english') => void;
}