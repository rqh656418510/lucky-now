# Lucky Now · 彩票开奖查询

基于 **Vue3 + Taro + TypeScript + NutUI** 的微信小程序项目。

## 技术栈

| 技术       | 说明                           |
| ---------- | ------------------------------ |
| Vue 3      | 组合式 API                     |
| Taro 4.x   | 跨端框架，编译目标为微信小程序 |
| TypeScript | 类型支持                       |
| NutUI Taro | 京东风格移动端组件库           |

## 环境要求

- Node.js >= 24（当前环境：24.14.1）
- 微信开发者工具

## 开发

```bash
# 安装依赖
npm install

# 编译并监听微信小程序
npm run dev:weapp
```

编译产物在 `dist/` 目录。用微信开发者工具打开**项目根目录**（`miniprogramRoot` 指向 `dist`）。

## 常用命令

```bash
npm run dev:weapp    # 微信小程序开发
npm run build:weapp  # 微信小程序生产构建
npm run dev:h5       # H5 开发预览
```

## 目录结构

- 完整的目录结构

```
lucky-now/
├── config/                          # Taro 构建配置
│   ├── index.ts                     # 主配置（Webpack5、NutUI 按需导入、@ 路径别名）
│   ├── dev.ts                       # 开发环境覆盖项
│   └── prod.ts                      # 生产环境覆盖项
├── src/                             # 应用源码
│   ├── app.ts                       # Vue 应用入口，挂载全局生命周期
│   ├── app.config.ts                # 小程序全局配置（页面路由、导航栏样式）
│   ├── app.scss                     # 全局样式
│   ├── index.html                   # H5 构建入口模板
│   ├── assets/                      # 静态资源（彩种图标等图片）
│   ├── components/                  # 可复用组件
│   │   └── LotteryResultCard.vue    # 单条开奖结果卡片
│   ├── data/                        # 数据层
│   │   └── lottery-results.ts       # 开奖类型定义与 mock 数据
│   └── pages/                       # 页面目录（Taro 约定式路由）
│       └── index/                   # 首页 · 开奖列表
│           ├── index.vue            # 页面逻辑与模板
│           ├── index.scss           # 页面样式
│           └── index.config.ts      # 页面级小程序配置（如自定义导航栏）
├── types/                           # 全局 TypeScript 类型声明
│   ├── global.d.ts                  # Taro / 小程序 API 等全局类型
│   └── vue.d.ts                     # Vue 相关类型扩展
├── .husky/                          # Git hooks
│   ├── pre-commit                   # 提交前：Prettier + ESLint（lint-staged）
│   └── commit-msg                   # 提交信息：Conventional Commits 校验
├── .vscode/                         # VS Code / Cursor 编辑器配置
│   ├── settings.json                # 保存时 Prettier 格式化 + ESLint 自动修复
│   └── extensions.json              # 推荐插件（Prettier、ESLint、Volar）
├── dist/                            # 编译产物（npm run dev/build 后生成，勿手动编辑）
│
├── .editorconfig                    # 编辑器通用格式（缩进 2 空格、UTF-8、换行符 LF）
├── .env.development                 # 开发环境变量（如 TARO_APP_ID）
├── .env.production                  # 生产环境变量
├── .env.test                        # 测试环境变量
├── .eslintrc                        # ESLint 规则（extends taro/vue3 + prettier）
├── .gitignore                       # Git 忽略规则（dist、node_modules 等）
├── .npmrc                           # npm 配置（legacy-peer-deps=true）
├── .prettierignore                  # Prettier 跳过格式化的路径
├── .prettierrc                      # Prettier 格式化规则（单引号、无分号等）
├── babel.config.js                  # Babel 转译配置（Taro preset）
├── commitlint.config.mjs            # Commit message 规范（Conventional Commits）
├── components.d.ts                  # NutUI 组件自动导入类型（构建时生成，勿手动编辑）
├── package.json                     # 依赖声明与 npm scripts
├── package-lock.json                # 依赖版本锁定
├── project.config.json              # 微信开发者工具项目配置（miniprogramRoot → dist）
├── stylelint.config.mjs             # Stylelint CSS/SCSS 规则（stylelint-config-standard）
└── tsconfig.json                    # TypeScript 配置（含 @/* → src/* 路径别名）
```

- 关键的目录结构

| 路径                                | 说明                                                                      |
| ----------------------------------- | ------------------------------------------------------------------------- |
| `src/pages/`                        | 新增页面时在此创建目录，并在 `app.config.ts` 的 `pages` 数组中注册        |
| `src/data/lottery-results.ts`       | 当前使用 mock 数据展示各彩种开奖结果，后续可替换为 API 请求               |
| `config/index.ts`                   | 修改设计稿宽度、编译目标、插件等构建行为                                  |
| `project.config.json`               | 用微信开发者工具打开**项目根目录**即可，`miniprogramRoot` 已指向 `dist/`  |
| `dist/`                             | 由 Taro 自动生成；开发时执行 `npm run dev:weapp` 后微信开发者工具会热更新 |
| `.env.*`                            | 按 Taro 环境模式加载；开发小程序 AppID 等写在 `.env.development`          |
| `.eslintrc` / `.prettierrc`         | 代码规范；`npm run lint` / `npm run format` 手动检查与修复                |
| `.husky/` + `commitlint.config.mjs` | 提交时自动格式化、lint，并校验 commit message 格式                        |
| `.vscode/`                          | 团队统一的编辑器行为；安装 `extensions.json` 中的推荐插件即可             |

## 开发文档

- [微信小程序官方开发文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)
