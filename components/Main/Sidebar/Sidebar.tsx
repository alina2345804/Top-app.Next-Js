import {DetailedHTMLProps, HTMLAttributes, JSX} from "react";
import Logo from "./logo.svg";
import cn from "classnames";
import styles from "./Sidebar.module.css";
import {Search} from "@/components";
import {MenuClient} from "@/components/Menu/MenuClient";
import {TopLevelCategory} from "@/interfaces/page.interface";
import {MenuItem} from "@/interfaces/menu.interface";


type SidebarProps2 = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    menu: MenuItem[];
    firstCategory: TopLevelCategory;
};


export const Sidebar = ({menu, firstCategory, className, ...props}: SidebarProps2): JSX.Element => {
    return (
        <div className={cn(className, styles.sidebar)} {...props} >
            <Logo className={styles.logo} />
            <Search/>
            <MenuClient menu={menu} firstCategory={firstCategory} />
        </div>
    );
};