'use client'
// import { Metadata } from "next";
import {Button, Htag, P, Tag, Rating} from '../../components';
import {JSX, useState, useEffect} from "react";
import styles from './page.module.css'
// import {Menu} from "@/components/menu/menu";

//
// export const metadata: Metadata = {
//   title: "Исправленные данные",
//   description: "Мой текст",
// };

export default function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(4);
    const [counter, setCounter] = useState<number>(0)

    useEffect(() => {
        console.log('Counter: ', counter);
        return function cleanup() {
            console.log('Unmount');
        };
    }, []); // если добавить [], то эффект появится один раз

    useEffect(() => {
        console.log('Monuted');
    }, []);

    return (
        <>
            {/*Добавила*/}
            <main className={styles.main}>
                Главная страница
                {/*<Menu />*/}
            </main>

            <Htag tag='h1'>{counter}</Htag>

            <Button appearance='primary' arrow='right' onClick={() => setCounter(x => x + 1)}>Кнопка</Button>
            <Button appearance='ghost' arrow='down'>Кнопка2</Button>

            <P size='l'> Большой </P>
            <P size='m'> Средний </P>
            <P size='s'> Маленький </P>

            <Tag size='s'> Ghost </Tag>
            <Tag size='m' color='red'> Red </Tag>
            <Tag size='s' color='green'> Green </Tag>
            <Tag color='primary'> Primary </Tag>
            <Rating rating={rating} isEditable setRating={setRating}/>

        </>
    );
}
