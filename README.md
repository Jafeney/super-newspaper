# 超级周报
简单记录每天的工作点滴，智能生成周报。老板再也不用担心我的周报了

> Power by egg && using typescript

### 本地开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### 部署

```bash
$ npm run tsc
$ npm start
```

### Npm脚本

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### 环境依赖

- Node.js 8.x
- Typescript 2.8+






