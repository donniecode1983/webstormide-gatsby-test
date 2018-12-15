
module.exports = {
    plugins: [
        {
            // #PLUGIN for the Typography integration
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
        // #INSERT NEXT PLUGIN here.....
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        //    #Source File Plugin to Read the Images Folder
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
    ],
};