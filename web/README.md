# Stacks Project — Dark Mode

完整的深色模式解决方案，适用于 Stacks Project 网站。

## 文件说明

| 文件 | 用途 |
|------|------|
| `dark-mode.css` | 深色模式样式表。所有规则以 `.dark` class 为作用域，在 `<html>` 上添加 class 即可激活。 |
| `dark-mode.js` | 自动在导航栏添加 🌙/☀️ 切换按钮，持久化 localStorage，默认跟随系统偏好。 |

## 部署方式

在网站模板的 `<head>` 中引入 CSS，`</body>` 之前引入 JS：

```html
<!-- 引入深色模式样式（放在主 style.css 之后） -->
<link rel="stylesheet" type="text/css" href="/static/css/dark-mode.css">

<!-- 引入深色模式 JS -->
<script type="text/javascript" src="/static/js/dark-mode.js"></script>
```

### 实际路径取决于你的设置

如果部署在 Stacks Project 网站上：
1. 将 `dark-mode.css` 复制到 `web/static/css/` 目录
2. 将 `dark-mode.js` 复制到 `web/static/js/` 目录
3. 在 `plastex` 模板的 `<head>` 中添加 CSS 引用
4. 在 `</body>` 之前添加 JS 引用

### 仅本地测试

直接在当前页面打开浏览器控制台，执行：

```js
// 注入 CSS
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '/static/css/dark-mode.css';
document.head.appendChild(link);

// 注入 JS
var script = document.createElement('script');
script.src = '/static/js/dark-mode.js';
document.body.appendChild(script);
```

## 效果预览

- 所有页面（内容页、搜索、目录、索引、评论区）统一深色
- 切换按钮位于右上角导航栏（bibliography / blog 旁边）
- 深色状态跨页面保持（localStorage）
- 首次访问自动跟随系统深色模式偏好
- MathJax 公式保持可读性