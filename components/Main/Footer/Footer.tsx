import {FooterProps} from "./Footer.props";
import {JSX} from "react";
import styles from './Footer.module.css';
import cn from "classnames";
import Link from "next/link";

export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <div>
                OwlTop &copy; 2020 - {new Date().getFullYear()} Все права защищены
            </div>
            <Link href={`https://www.youtube.com/watch?v=l_7e2ZamUpI`}>
                Пользовательское соглашение
            </Link>
            <Link href={`https://vkvideo.ru/video-171965386_456239017?ref_domain=yastatic.net`}>
                Политика конфиденциальности
            </Link>
        </footer>
    );
};