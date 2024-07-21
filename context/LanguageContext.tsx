"use client"
import {LanguageContextProps, Content} from "@/types/types";
import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import spanishContent from '@/assets/content/spanish.json';
import englishContent from '@/assets/content/english.json';

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<'spanish' | 'english'>('english');
    const content: Content = language === 'spanish' ? spanishContent : englishContent;

    const isLanguageSpanish = (countryCode: string) => countryCode === 'ES' || 'AR';

    useEffect(() => {
        async function fetchLocationAndSetLanguage() {
            try {
                const response = await fetch(`https://ipinfo.io/json?token=${process.env.NEXT_PUBLIC_IP_API_TOKEN}`);
                if (!response.ok) new Error('Failed to fetch user location.');
                const data = await response.json();
                const countryCode = data.country;
                const lang = isLanguageSpanish(countryCode) ? 'spanish' : 'english';
                setLanguage(lang);
            } catch (error) {
                console.error('Error fetching user location:', error);
            }
        }

        fetchLocationAndSetLanguage();
    }, []);

    const switchLanguage = (lang: 'spanish' | 'english') => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, content, switchLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextProps => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};