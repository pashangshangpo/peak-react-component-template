# 简介

一个 react component 库开发模板

## 启动项目

```
yarn
yarn start
```

## 组件规范

- 文件名首字母大写
- 组件里面需要有一个 readme.md 示例文档
- 组件必须写propTypes
- 使用 El 来生成 react 元素

### 组件示例

/Button
 /index.js
 /index.scss
 /readme.md

## 注意事项

- readme.md 中写的代码，外部依赖需要使用 require导入，并且每个语句需要加分号，否则无法正常执行，可查看ButtonExample示例
