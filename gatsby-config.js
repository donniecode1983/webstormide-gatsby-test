module.exports = {
    plugins: [
        {
            // #PLUGIN for the Typography integration
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
            // #INSERT NEXT PLUGIN here.....
        },
    ],
};