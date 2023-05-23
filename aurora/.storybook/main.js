module.exports = {
    core: {
        builder: 'webpack5',
    },
    stories: [
        '*.stories.ts',
        '../projects/ngx-aurora-pattern-library/src/lib/**/*.stories.ts',
        '../projects/ngx-aurora-pattern-library/src/lib/**/*.stories.mdx'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/angular',
}
