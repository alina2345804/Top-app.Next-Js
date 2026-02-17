'use client';

import {Advantages, HhData, Htag, Product, Sort, Tag} from '../../components';
import {TopPageComponentProps} from '../TopPageComponents/TopPageComponents.props';
import styles from './TopPageComponents.module.css';
import {JSX, useReducer} from 'react';
import {TopLevelCategory} from "@/interfaces/page.interface";
import {SortEnum} from "@/components/Sort/Sort.props";
import {sortReducer} from "../TopPageComponents/sort.reducer";
import {useScrollY} from "@/hooks/useScrollY";

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {
    const [{products: sortedProducts, sort}, dispathSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating});
    const y = useScrollY();

    const setSort = (sort: SortEnum) => {
        dispathSort({type: sort})
    }

    return (
        <div className={styles.wrapper}>
            {y}
            <div className={styles.title}>
                <Htag tag={'h1'}>{page.title}</Htag>
                {products && <Tag color={'grey'} size={'s'}>{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort}/>
            </div>

            <div>
                {products && sortedProducts.map(p => (<Product layout key={p._id} product={p}/>))}
            </div>

            <div className={styles.hhTitle}>
                <Htag tag={'h2'}>Вакансии - {page.category}</Htag>
                <Tag color={'red'} size={'m'}>hh.ru</Tag>
            </div>

            {firstCategory == TopLevelCategory.Courses && page.hh && <HhData
                _id={page._id}
                count={page.hh!.count}
                juniorSalary={page.hh!.juniorSalary}
                middleSalary={page.hh!.middleSalary}
                seniorSalary={page.hh!.seniorSalary}
                updatedAt={page.updatedAt}
            />}
            {page.advantages && page.advantages.length > 0 && <>
                <Htag tag='h2'>Преимущества</Htag>
                <Advantages advantages={page.advantages}/>
            </>}
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
            <Htag tag='h2'>Получаемые навыки</Htag>
            {page.tags.map(t=> <Tag key={t} color='primary'>{t}</Tag>)}
        </div>
    );
};