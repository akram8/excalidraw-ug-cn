import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// TODO: 根据选择的集成方式配置别名
export default defineConfig({
  plugins: [react()],
  // 如果使用源码引用方式，需要配置别名
  /*
  resolve: {
    alias: {
      '@excalidraw/excalidraw': path.resolve(__dirname, '../../packages/excalidraw/index.tsx'),
      '@excalidraw/common': path.resolve(__dirname, '../../packages/common/src/index.ts'),
      '@excalidraw/element': path.resolve(__dirname, '../../packages/element/src/index.ts'),
      '@excalidraw/math': path.resolve(__dirname, '../../packages/math/src/index.ts'),
      '@excalidraw/utils': path.resolve(__dirname, '../../packages/utils/src/index.ts')
    }
  },
  */
  server: {
    port: 3002
  }
  // 如果使用源码引用，可能需要排除预构建
  /*
  optimizeDeps: {
    exclude: ['@excalidraw/excalidraw', '@excalidraw/common', '@excalidraw/element', '@excalidraw/math', '@excalidraw/utils']
  }
  */
})