const config = require('./config/website')

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

module.exports = {
    /* General Information */
    siteMetadata: {
        siteUrl: config.siteUrl + pathPrefix,
    },
    /* Plugins */
    plugins: [
        {
            resolve: 'gatsby-source-apiserver',
            options: {
                typePrefix: 'internal__',
                entitiesArray: [{
                    url: 'https://api.github.com/user/repos?per_page=100',
                    method: 'get',
                    headers: {
                        'Authorization': 'token c7193c20268a8a5b3001df59a4f25de2d5af6d43'
                    },
                    name: 'github',
                }],
                verboseOutput: true,
                refetchInterval: 60
            }
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/images/`,
                name: 'images',
            },
        },
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: config.googleAnalyticsID,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: config.siteTitle,
                short_name: config.siteTitleShort,
                description: config.siteDescription,
                start_url: config.pathPrefix,
                background_color: config.backgroundColor,
                theme_color: config.themeColor,
                display: 'standalone',
                icons: [
                    {
                        src: '/favicons/android-chrome-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/favicons/android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
            },
        },
        /* Must be placed at the end */
        'gatsby-plugin-offline',
        'gatsby-plugin-netlify',
    ],
}
