import { Env, SiteConfig } from './types';

export function getSiteConfig(env: Env, domain: string): SiteConfig | undefined {
    const configs: {[domain: string]: SiteConfig} = {
        'src.mealuet.com': {
            name: "Mealuet Filelist for Minecraft",
            bucket: env.BUCKET_bucketname,
            desp: {
                '/': "与 Minecraft 汉化相关的一些文件",
                '/BetterMC': "BetterMC 整合包汉化文件",
                '/BetterMC/BetterMC_v24hf_v1c.zip': "BetterMC [Forge] 1.20.1 v24HF v1汉化",
                '/BetterMC/BetterMC_v24hf_v2c.zip': "BetterMC [Forge] 1.20.1 v24HF v2汉化"
            },
            showPoweredBy: false, // Set to false to hide the "Powered by" information at footer

            /// [Optional] Legal information of your website
            /// Your local government (for example Mainland China) may requires you to put some legal info at footer
            /// and you can put it here.
            /// It will be treated as raw HTML.
            // legalInfo: "Legal information of your website",

            /// [Optional] favicon, should be a URL to **PNG IMAGE**. Default to Cloudflare R2's logo
            // favicon: ''
        },
    };
    return configs[domain];
}