# 最简单的 Excalidraw 集成方式

这个方案提供了在其他项目中使用二次开发 Excalidraw 的最简单方法。

## 特点

✅ **无需构建步骤** - 直接引用源码
✅ **实时开发** - 修改源码立即生效
✅ **最小配置** - 只需要几行配置
✅ **热重载支持** - 开发体验流畅

## 使用方法

### 1. 复制示例目录
将 `examples/simple-integration` 目录复制到你的项目位置

### 2. 安装依赖
```bash
cd your-project-directory
yarn install
```

### 3. 启动开发服务器
```bash
yarn start
```

### 4. 访问应用
打开浏览器访问 `http://localhost:3003`

## 配置说明

### vite.config.js 关键配置
```javascript
resolve: {
  alias: {
    // 直接映射到源码目录
    '@excalidraw/excalidraw': path.resolve(__dirname, '../../packages/excalidraw/index.tsx'),
    '@excalidraw/common': path.resolve(__dirname, '../../packages/common/src/index.ts'),
    // ... 其他包映射
  }
},
optimizeDeps: {
  exclude: ['@excalidraw/excalidraw']  // 避免预构建冲突
}
```

## 优势对比

| 方式 | 复杂度 | 实时性 | 配置量 | 推荐场景 |
|------|--------|--------|--------|----------|
| 源码引用 | ⭐ 简单 | ⭐⭐⭐ 实时 | ⭐ 少量 | 开发调试 |
| Git 依赖 | ⭐⭐ 中等 | ⭐ 中等 | ⭐⭐ 适中 | 生产环境 |
| Submodule | ⭐⭐⭐ 复杂 | ⭐⭐ 较好 | ⭐⭐⭐ 多 | 大型项目 |
| 本地链接 | ⭐⭐⭐ 复杂 | ⭐⭐⭐ 实时 | ⭐⭐⭐ 多 | 深度定制 |

## 注意事项

1. **路径依赖** - 确保相对路径正确指向源码目录
2. **依赖兼容** - 需要安装相应的 peer dependencies
3. **样式文件** - 记得引入 CSS 文件 `@excalidraw/excalidraw/index.css`
4. **字体资源** - 如需自定义字体，需要额外配置

## 故障排除

### 常见错误及解决方案

1. **端口占用**
   - 修改 `vite.config.js` 中的 `server.port` 配置

2. **路径解析失败**
   - 检查 alias 配置中的路径是否正确
   - 确认源码目录结构未改变

3. **依赖缺失**
   - 确保安装了 React 和 ReactDOM
   - 检查 peer dependencies 是否满足

## 进阶用法

### 自定义配置
```javascript
// 在 App.jsx 中自定义 Excalidraw 配置
import { Excalidraw } from '@excalidraw/excalidraw'

function MyWhiteboard() {
  const handleOnChange = (elements, appState) => {
    console.log('画布变化:', elements, appState)
  }

  return (
    <Excalidraw 
      onChange={handleOnChange}
      viewModeEnabled={false}
      zenModeEnabled={true}
    />
  )
}
```

这种方式特别适合快速原型开发和学习研究！