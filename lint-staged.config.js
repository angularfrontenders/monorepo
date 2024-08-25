module.exports = {
    './{apps,libs}/**/*.{ts,html}': [
        'nx affected --target lint --uncommitted --fix true'
    ],
    '.{apps,libs}/**/*.{ts,json,md,html,css,scss}': [
        'nx format:write --uncommitted --libs-and-apps'
    ],
    './{apps,libs}/**/*.{ts,html,css,scss}': [
        'nx affected --target test --uncommitted'
    ]
};
