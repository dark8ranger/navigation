# 猫猫神 · 站点集

主站 https://maomaoshen.cc ，展示 Cloudflare DNS 中已配置的三个子站。独立 Worker `maomaoshen-home`，不修改搜索导航和投资导航的代码。

无第三方依赖，中文响应式页面，支持名称/域名搜索、分类筛选及 `/` 搜索快捷键。直接 HTML 链接在禁用 JavaScript 时仍可访问。

## 开发

在此目录运行 `npm run build`，然后 `npm run dev`，访问 http://127.0.0.1:4173 。

## 维护与部署

修改 `public/index.html` 中的卡片和分类数字；交互位于 `public/app.js`，样式位于 `public/style.css`。

运行 `npx wrangler deploy` 构建并部署，需要 Cloudflare 授权。GitHub 推送不自动触发部署。

主域名原绑定 `invest-nav`，现在绑定 `maomaoshen-home`。`invest.maomaoshen.cc` 仍绑定 `invest-nav`。如需回滚，将主域名重新绑定至 `invest-nav`。
