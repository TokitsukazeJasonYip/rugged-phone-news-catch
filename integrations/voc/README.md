# RUGGED NEWS × VoC

RUGGED NEWS 保留上游的 Node.js、PostgreSQL、Web、API 和 worker。数据单独存储，VoC 窗口以侧栏入口加载站点。原项目为 MIT 许可证，保留 LICENSE 和 NOTICE。

1. 在 RUGGED NEWS 仓库运行 `node scripts/init-env.ts`，设置 `SITE_URL=http://127.0.0.1:3100` 和 `PORT=3100`。在本机配置所需模型服务和采集开关。密钥保留在本机环境文件。
2. 启动 `docker compose up -d --build`，站点地址为 http://127.0.0.1:3100。该地址默认限制为本机访问。
3. 运行 `pwsh -File integrations/voc/Add-RuggedNews.ps1 -ProjectRoot <VoC 项目根目录>`，然后按 VoC 原方式重新编译与打包。打开左侧「RUGGED NEWS」。

首批种子使用 Ulefone、OUKITEL、DOOGEE 和 AGM Mobile 官方 Atom 源。站点继承预筛、五维评分、精选、去重归组、热点、报告、RSS、公开 API 和 MCP 功能。信源的新内容要在 worker 运行和配置模型后才会进入精选和报告。其余品牌主题可用于归类，添加新信源可在管理员页面操作。
