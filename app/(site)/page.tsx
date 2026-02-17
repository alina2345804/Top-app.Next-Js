// 'use client'

import {Input, Textarea} from '@/components';
// import {JSX, useState, useEffect} from "react";
import styles from './page.module.css'
// import {Metadata} from "next";
// import {MenuItem} from "@/interfaces/menu.interface";
// import { getMenu } from "@/api/menu";
import Menu from "@/app/(site)/components/menu";
// import {getMenu} from "@/api/menu";

export default  async function Home() {
    // const menu = await getMenu(0);
    // Добавила Menu
    // const [menu, setMenu] = useState<MenuItem[]>([]);
    // const [rating, setRating] = useState<number>(4);
    // const [counter, setCounter] = useState<number>(0)

    // Это тоже добавила
    // useEffect(() => {
    //     getMenu(0).then(setMenu);
    // }, []);

    // useEffect(() => {
    //     console.log('Counter: ', counter);
    //     return function cleanup() {
    //         console.log('Unmount');
    //     };
    // }, []); //
    //
    // useEffect(() => {
    //     console.log('Monuted');
    // }, [])

    return (
        <>
            {/*Добавила*/}
            <main className={styles.main}>
                Главная страница
                <Input placeholder='тест'/>
                <Textarea placeholder='тест area' />
                <Menu />
            </main>

            {/*<Htag tag='h1'>{counter}</Htag>*/}

            {/*<ButtonIcon appearance='primary' arrow='right' onClick={() => setCounter(x => x + 1)}>Кнопка</ButtonIcon>*/}
            {/*<ButtonIcon appearance='ghost' arrow='down'>Кнопка2</ButtonIcon>*/}

            {/*<Advantages size='l'> Большой </Advantages>*/}
            {/*<Advantages size='m'> Средний </Advantages>*/}
            {/*<Advantages size='s'> Маленький </Advantages>*/}

            {/*<Tag size='s'> Ghost </Tag>*/}
            {/*<Tag size='m' color='red'> Red </Tag>*/}
            {/*<Tag size='s' color='green'> Green </Tag>*/}
            {/*<Tag color='primary'> Primary </Tag>*/}
            {/*<Rating rating={rating} isEditable setRating={setRating}/>*/}

        </>
    );
}
