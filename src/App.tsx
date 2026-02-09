import {useTranslation} from "react-i18next";

export interface SectionData {
    id: string;
    title: string;
    content: React.ReactNode;
}

const App: React.FC = () => {

    // const sections: SectionData[] = [
    //     {id: 'home', title: "1", content: <HomeSection/>},
    //     {id: 'goals', title: "2", content: <GoalsSection/>},
    //     {id: 'motivation', title: t("motivation-title"), content: <MotivationSection/>},
    //     {id: 'achievements', title: t("achievements-title"), content: <AchievementsSection/>},
    //     {id: 'clients', title: t("clients-title"), content: <HorizontalGallery/>},
    //     {id: 'contacts', title: t("contacts-title"), content: <ContactsSection/>}
    // ];

    const { t, i18n } = useTranslation();

    return (
        <>
            <h1>{t('title')}</h1>
            <button onClick={() => i18n.changeLanguage('en')}>
                EN
            </button>

            <button onClick={() => i18n.changeLanguage('ru')}>
                RU
            </button>
            <div>
                <h1>Tailwind OK</h1>
            </div>
            <div>
                1
            </div>
            <div>
                2
            </div>
            <div>
                3
            </div>
        </>
    )
}


export default App;