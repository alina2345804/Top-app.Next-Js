import React, { Suspense } from 'react';
import { SearchContent } from './SearchContent';

export default function SearchPage() {
    return (
        <main>
            <h1>Результаты поиска</h1>
            <Suspense fallback={<p>Загрузка...</p>}>
                <SearchContent />
            </Suspense>
        </main>
    );
}