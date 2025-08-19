import { API } from '@/app/api';
import { TopPageModel } from '@/interfaces/page.interface';
import {ProductModel} from "@/interfaces/product.interface";

export async function getPage(alias: string): Promise<TopPageModel | null> {
    // await new Promise((res) => setTimeout(() => { res(''); }, 3000));
    const res = await fetch(API.topPage.byAlias + alias, {
        next: { revalidate: 10 }
    });
    console.log('revalidating getPage');
    if (!res.ok) {
        return null;
    }
    return res.json();
}

export async function getProduct(page: TopPageModel): Promise<ProductModel[] | null> {
    // await new Promise((res) => setTimeout(() => { res(''); }, 3000));
    const res = await fetch(API.product.find, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ category: page.category, limit: 10 }),
        next: { revalidate: 10 }
    });
    console.log('revalidating getPage');
    if (!res.ok) {
        return null;
    }
    return res.json();
} }