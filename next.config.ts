import type { NextConfig } from "next";
import type { Configuration, RuleSetRule } from "webpack";

const nextConfig: NextConfig = {
    output: 'export',
};
module.exports = nextConfig;

const customWebpack = (config: Configuration): Configuration => {
    if (!config.module || !config.module.rules) {
        return config;
    }

    const rules = config.module.rules as RuleSetRule[];
    const fileLoaderRule = rules.find((rule) => {
        return (
            rule &&
            typeof rule !== "string" &&
            rule.test instanceof RegExp &&
            rule.test.test(".svg")
        );
    }) as RuleSetRule | undefined;

    if (!fileLoaderRule) {
        return config;
    }

    fileLoaderRule.exclude = /\.svg$/i;

    rules.push(
        {
            ...fileLoaderRule,
            test: /\.svg$/i,
            resourceQuery: /url/,
        },
        {
            test: /\.svg$/i,
            issuer: fileLoaderRule.issuer ?? undefined,
            resourceQuery: { not: [/url/] },
            use: ['@svgr/webpack'],
        }
    );

    return config;
};

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.vkcs.cloud',
                port: '',
            },
        ],
    },
    webpack: customWebpack,
};


export default nextConfig;