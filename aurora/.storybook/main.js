module.exports = {
    core: {
        builder: 'webpack5',
    },
    stories: [
        '*.stories.ts',
        '../storybook-pages/**/*.stories.mdx',
        '../storybook-pages/**/*.stories.@(js|jsx|ts|tsx)',
        '../projects/ngx-aurora-pattern-library/src/lib/**/*.stories.ts'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/angular',
}
