'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';

export function SearchContent() {
    const searchParams = useSearchParams();
    const q = searchParams.get('q') || '';

    return (
        <div>
            <p>Вы искали: <strong>{q}</strong></p>
        </div>
    );
}