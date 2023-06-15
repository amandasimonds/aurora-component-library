module.exports = {
    core: {
        builder: 'webpack5',
    },
    stories: [
        '*.stories.ts',
        '../projects/ngx-aurora-pattern-library/src/lib/**/*.stories.ts',
        '../projects/ngx-aurora-pattern-library/src/lib/**/*.stories.mdx',
        '../storybook-pages/**/*.stories.ts',
        '../storybook-pages/**/*.stories.mdx'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-addon-dark-mode-toggle'
    ],
    framework: '@storybook/angular',
}
