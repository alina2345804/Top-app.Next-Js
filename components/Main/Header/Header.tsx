'use client';

import {DetailedHTMLProps, HTMLAttributes, JSX, useEffect, useState} from "react";
import cn from "classnames";
import styles from "./Header.module.css"
import Logo from "../Sidebar/logo.svg";
import {ButtonIcon} from "@/components/ButtonIcon/ButtonIcon";
import {motion} from "framer-motion";
import {Sidebar} from "../../../components/Main/Sidebar/Sidebar";
import {usePathname} from 'next/navigation';
import {MenuItem} from "@/interfaces/menu.interface";
import {TopLevelCategory} from "@/interfaces/page.interface";

type HeaderProps2 = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    menu: MenuItem[];
    firstCategory: TopLevelCategory;
};

export const Header = ({menu, firstCategory, className, ...props }: HeaderProps2): JSX.Element => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsOpened(false);
    }, [pathname]);

    const variants = {
        opened: {
            opacity: 1,
            x:0,
            transition : {
                stiffnes:20
            }
        },
        closed: {
            opacity: 0,
            x: '100%'
        }
    }

    return (
        <header className={cn(className, styles.header)}{...props}>
            <Logo/>
            <ButtonIcon appearance='white' icon='menu' onClick={() => setIsOpened(true)}/>
            <motion.div
                className={styles.mobileMenu}
                variants={variants}
                initial={'closed'}
                animate={isOpened ? 'opened' : 'closed'}
            >
                <Sidebar menu={menu} firstCategory={firstCategory}/>
                <ButtonIcon className={styles.menuClose} appearance='white' icon='close' onClick={() => setIsOpened(false)}/>
            </motion.div>
        </header>
    );
};