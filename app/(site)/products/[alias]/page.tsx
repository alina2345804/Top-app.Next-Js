import {Metadata} from "next";
import {getPage, getProduct} from "@/api/page";
import {notFound} from "next/navigation";
import {getMenu} from "@/api/menu";
import {cache} from 'react'
import {ProductModel} from "@/interfaces/product.interface";
import {TopPageComponent} from "@/components";

interface AliasParams {
    alias: string
}

type Props = { params: Promise<AliasParams> };

const cachedGetPage = cache(getPage);
const cachedGetProduct = cache(getProduct);

export async function generateStaticParams() {
    const menu = await getMenu(0);
    return menu.flatMap(item => item.pages.map(page => ({ alias: page.alias })));
}

export default async function PageProducts({params}: Props) {
    const { alias } = await params;
    const page = await cachedGetPage(alias);
    if(!page) {
        notFound();
    }
    const products: ProductModel[] | null = await cachedGetProduct(page);
    return (
        <div>
            <TopPageComponent firstCategory={page.firstCategory} page={page} products={products ?? []}/>
        </div>
    )
}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata | null> {
    const { alias } = await params;

    const page = await cachedGetPage(alias);
    if (!page) {
        notFound();
    }
    return {
        title: page.metaTitle ?? undefined,
        description: page.metaDescription ?? undefined,
    };

}