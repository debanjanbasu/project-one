module.exports = {
    navigateFallback: '/index.html',
    stripPrefix: 'dist',
    root: 'dist/',
    staticFileGlobs: [
        'dist/index.html',
        'dist/**.js',
        'dist/**.css',
        'dist/**/*.woff',
        'dist/**/*.woff2',
        'dist/**/*.png',
        'dist/**/*.xml',
        'dist/**/*.ico',
        'dist/**/*.json',
        'dist/**/*.svg'
    ]
};
