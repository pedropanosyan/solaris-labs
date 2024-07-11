"use client"
import {LanguageContextProps, Content} from "@/types/types";
import {createContext, ReactNode, useContext, useState} from "react";
import spanishContent from '@/assets/content/spanish.json';
import englishContent from '@/assets/content/english.json';

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<'spanish' | 'english'>('english');
    const content: Content = language === 'spanish' ? spanishContent : englishContent;

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