'use client';
import {MenuItem, PageItem} from "@/interfaces/menu.interface";
import {TopLevelCategory} from "@/interfaces/page.interface";

import {usePathname} from "next/navigation";
import {useState} from "react";
import Link from "next/link";
import cn from "classnames";
import styles from './Menu.module.css';
import {firstLevelMenu} from "@/helpers/helpers";
import {motion} from 'framer-motion'


interface MenuClientProps {
    menu: MenuItem[];
    firstCategory: TopLevelCategory;
}


export function MenuClient({ menu: serverMenu, firstCategory }: MenuClientProps) {
    const pathname = usePathname();
    const [menu, setMenu] = useState<MenuItem[]>(() =>
        (serverMenu ?? []).map((item) => {
            const isOpened = item.pages.some((p) => pathname?.includes(p.alias));
            return { ...item, isOpened };
        })
    );


    const openSecondLevel = (secondCategory: string) => {
        setMenu((prevMenu) =>
            prevMenu.map((m) =>
                m._id.secondCategory === secondCategory
                    ? { ...m, isOpened: !m.isOpened }
                    : m
            )
        );
    };

    const variants = {
        visible: {
            marginBottom: 20,
            transition: {
                where: 'beforeChildren',
                staggerChildren: 0.1,
            }
        },
        hidden: { marginBottom: 0},
    }

    const variantsChildren = {
        visible: {
            opacity: 1,
            height: 29,

        },
        hidden: { opacity: 0, height: 0},
    }

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map((menuItem) => (
                    <div key={menuItem.route}>
                        <Link href={`/${menuItem.route}`}>
                            <div
                                className={cn(styles.firstLevel, {
                                    [styles.firstLevelActive]: menuItem.id === firstCategory,
                                })}
                            >
                                {menuItem.icon}
                                <span>{menuItem.name}</span>
                            </div>
                        </Link>

                        {menuItem.id === firstCategory && buildSecondLevel(menuItem.route)}
                    </div>
                ))}
            </>
        );
    };

    const buildSecondLevel = (menuItemRoute: string) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map((menuItem) => (
                    <div key={menuItem._id.secondCategory}>
                        <div
                            className={styles.secondLevel}
                            onClick={() => openSecondLevel(menuItem._id.secondCategory)}
                        >
                            {menuItem._id.secondCategory}
                        </div>
                        <motion.div
                            layout
                            variants={variants}
                            initial={menuItem.isOpened ? 'visible' : 'hidden'}
                            animate={menuItem.isOpened ? 'visible' : 'hidden'}
                            className={cn(styles.secondLevelBlock)}
                        >
                            {buildThirdLevel(menuItem.pages, menuItemRoute)}
                        </motion.div>
                    </div>
                ))}
            </div>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            <>
                {pages.map((page) => (
                    <motion.div key={page._id} variants={variantsChildren}>
                        <Link
                            href={`/${route}/${page.alias}`}
                            className={cn(styles.thirdLevel, {
                                [styles.thirdLevelActive]: pathname === `/${route}/${page.alias}`,
                            })}
                        >
                            {page.category}
                        </Link>
                    </motion.div>
                ))}
            </>
        );
    };

    return <div>{buildFirstLevel()}</div>;
}