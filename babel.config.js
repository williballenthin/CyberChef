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
            "dynamic-import-node",
            ["@babel/plugin-syntax-import-assertions", {
                "importAttributesKeyword": "with"
            }],
            [
                "babel-plugin-transform-builtin-extend", {
                    "globals": ["Error"]
                }
            ],
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
