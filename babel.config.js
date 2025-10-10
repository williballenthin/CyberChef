module.exports = function(api) {
    api.cache.forever();

    return {
        "presets": [
            ["@babel/preset-env", {
                "modules": "commonjs",
                "useBuiltIns": "entry",
                "corejs": 3
            }]
        ],
        "plugins": [
            ["@babel/plugin-syntax-import-assertions", {
                "importAttributesKeyword": "with"
            }],
            [
                "@babel/plugin-transform-runtime", {
                    "regenerator": true
                }
            ]
        ],
        "generatorOpts": {
            "importAttributesKeyword": "with"
        }
    };
};
