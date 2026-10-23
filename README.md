# Navigation

Google 搜索导航站，运行于 Cloudflare Workers。

**在线访问：https://navigation.maomaoshen.cc**

## 功能

- Google 网页、图片、学术搜索与 Google 翻译
- 12 个常用网站入口，按用途分类
- 自定义收藏添加、删除，本地浏览器持久化
- 深浅色主题、手机布局、键盘 `/` 聚焦搜索
- 无第三方前端依赖、无账号、无后端数据库

## 本地开发

需要 Node.js 20 或更高版本。无需安装依赖。

```sh
npm run build
npm run dev
```

打开 http://127.0.0.1:4173 。修改 public 文件后重新运行 build 并刷新浏览器。

## 部署

已部署到 Cloudflare 账户中的 `navigation` Worker，绑定自定义域名 `navigation.maomaoshen.cc`，HTTPS 已启用。

后续部署可使用官方 Wrangler CLI：

```sh
npx wrangler login
npx wrangler deploy
```

Wrangler 会通过配置中的 build 命令重新打包。部署者需要当前 Cloudflare 账户的 Workers 和域名管理权限。当前仓库没有配置自动部署；推送代码后需执行部署。

## 文件

- `public/`：页面、样式和浏览器逻辑
- `scripts/build.mjs`：将静态文件打包为一个 ES Module Worker
- `scripts/serve.mjs`：使用相同 Worker 在本地预览
- `wrangler.jsonc`：Worker、域名与构建配置
- `docs/design.png`：视觉概念参考

收藏和主题仅保存在当前浏览器的 localStorage，不会上传到服务器。搜索会跳转 Google，需所在网络能够访问对应 Google 服务。
