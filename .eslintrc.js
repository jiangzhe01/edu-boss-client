module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    // 引入那些工具来帮助eslint约束, node_modules中eslint-plugin-vue, @vue/eslint-config-standard
    "plugin:vue/essential", // vue官方提供的工具, 对.vue文件里面的template和script语法检查, 指令错误, 违反了vue style guide的风格指南
    "@vue/standard", // standard风格
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    semi: 0,
    quotes: 0,
    "vue/multi-word-component-names": 0,
    "comma-dangle": 0,
    "space-before-function-paren": 0,
    "spaced-comment": 0,
  },
};
