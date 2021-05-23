/*
 * @Author: WannTonn
 * @Date:
 * @LastEditTime: 2021-05-22 19:55:24
 * @LastEditors: WannTonn
 * @Description:
 * @FilePath: /queryInput/.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  parserOptions: {
    parser: "babel-eslint",
    ecmaFeatures: {
      legacyDecorators: true
    },
    ignoreComments: true, // 允许在注释块中使用空白符
    skipBlankLines: true // 允许在空行使用空白符
  },
  // required to lint *.vue files
  plugins: ["vue"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-sparse-arrays": "off",
    "no-unused-vars": [
      0,
      {
        // 允许声明未使用变量
        vars: "local",
        // 参数不检查
        args: "none"
      }
    ],
    "vue/no-deprecated-slot-attribute": [0],
    "vue/no-deprecated-scope-attribute": [0],
    "vue/no-unused-components": [0],
    "vue/no-parsing-error": [0],
    "no-useless-escape": [0],
    quotes: [0, "double"], //使用双引号，关闭
    semi: [0],
    "no-tabs": [0], // 缩进
    "no-trailing-spaces": [0],
    "eol-last": [0],
    "dot-notation": [0], // 要求使用点号
    "object-curly-spacing": [0, "never"], //大括号内是否允许不必要的空格
    "indent": [0], //缩进风格
    "key-spacing": [0, { "beforeColon": false, "afterColon": true }],//对象字面量中冒号的前后空格
    "comma-dangle": [2, "never"],//对象字面量项尾不能有逗号
    "space-before-function-paren": [0],
    "lines-between-class-members": [0]
  }
};
