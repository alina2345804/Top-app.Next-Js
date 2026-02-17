import "./globals.css";
import {Up} from "../../components";
import {Sidebar} from "@/components/Main/Sidebar/Sidebar";
import {Footer} from "@/components/Main/Footer/Footer";
import {Header} from "@/components/Main/Header/Header";
import styles from './page.module.css';
import {getMenu} from "@/api/menu";
import {AppContextProvider} from "@/context/app.context";

export default async function RootLayout({children, }: Readonly<{
    children: React.ReactNode;
}>) {

    const firstCategory = 0;
    const menu = await getMenu(firstCategory);

    return (
        <html lang="ru">
        <body>
        <AppContextProvider menu={menu} firstCategory={firstCategory}>
            <div className={styles.wrapper}>
                <Header menu={menu} firstCategory={firstCategory} className={styles.header}/>
                <Sidebar menu={menu} firstCategory={firstCategory} className={styles.sidebar}/>
                <div className={styles.body}>
                    {children}
                </div>
                <Footer className={styles.footer}/>
                <Up/>
            </div>
        </AppContextProvider>
        </body>
        </html>
    );
}