// next.config.js
import type { NextConfig } from 'next';
import type { Configuration, RuleSetRule } from 'webpack';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    webpack(config: Configuration) {
        if (!config.module || !config.module.rules) {
            return config;
        }

        const rules = config.module.rules as RuleSetRule[];
        // Находим правило, которое по умолчанию обрабатывает .svg (как файл URL)
        const fileLoaderRule = rules.find((rule) => {
            return (
                rule &&
                typeof rule !== 'string' &&
                rule.test instanceof RegExp &&
                rule.test.test('.svg')
            );
        }) as RuleSetRule | undefined;

        if (fileLoaderRule) {
            // «Исключаем» .svg из стандартного лоадера
            fileLoaderRule.exclude = /\.svg$/i;

            // Добавляем два правила:
            // 1) Если импорт сделан с «?url», то использовать стандартный file-loader
            rules.push({
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/, // import iconUrl from './mini.svg?url'
            });
            // 2) Если импорт без «?url», то передаём SVG в SVGR → ReactComponent
            rules.push({
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer ?? undefined,
                resourceQuery: { not: [/url/] }, // import { ReactComponent as Icon } from './mini.svg'
                use: ['@svgr/webpack'],
            });
        }

        return config;
    },
};

export default nextConfig;