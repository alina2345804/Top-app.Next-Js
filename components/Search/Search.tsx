'use client'

import {SearchProps} from './Search.props';
import {Button} from "../Button/Button";
import styles from './Search.module.css';
import { JSX } from 'react';
import cn from 'classnames';
import {Input} from "@/components";
import {useState} from "react";
import SearchIcon from './search.svg';
import {useRouter} from "next/navigation";


export const Search = ({className, ...props }: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();

    const goToSearch = () => {
        router.push( `/search?q=${search}` );
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key == 'Enter') {
            goToSearch();
        }
    };


    return (
        <div className={cn(className, styles.search)} {...props}>
            <Input className={styles.input}
            placeholder="Поиск..."
            value={search}
            onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown}
            />
            <Button
                appearance={"primary"}
            className={styles.searchButton}
            onClick={ goToSearch}>
                <SearchIcon />

            </Button>
        </div>
    );
};
