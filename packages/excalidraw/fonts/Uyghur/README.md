# 维吾尔语字体 (Uyghur Font)

此目录包含维吾尔语/阿拉伯语字体支持。

## 字体信息

- **字体名称**: UKIJ Tor
- **来源**: Uyghur Kompyutér Ilimi Jem'iyiti (UKIJ) - 维吾尔计算机科学协会
- **许可证**: LGPL / Open Font License (OFL)
- **官方网站**: https://ukij.org/

## 文件放置

请在此目录放置以下字体文件：

```
Uyghur/
├── UKIJTor-Byz7ORc7.woff2  <- 主要字体文件 (WOFF2 格式)
├── UKIJTor-Byz7ORc7.ttf    <- 原始 TTF 文件 (可选)
└── index.ts                <- 字体配置 (已创建)
```

## 字体转换

如果你的字体是 TTF 格式，需要转换为 WOFF2 格式以获得更好的 Web 性能：

### 方法 1: 使用在线工具
- https://cloudconvert.com/ttf-to-woff2
- https://convertio.co/zh/ttf-woff2/

### 方法 2: 使用命令行工具
```bash
# 安装 woff2 工具
npm install -g woff2

# 转换字体
woff2_compress UKIJTor-Byz7ORc7.ttf
```

### 方法 3: 使用 Python
```bash
pip install fonttools

# 转换
fonttools ttLib.woff2 compress UKIJTor-Byz7ORc7.ttf
```

## Unicode 范围

此字体支持以下 Unicode 范围：
- `U+0600-U+06FF` - 阿拉伯语
- `U+0750-U+077F` - 阿拉伯语补充
- `U+08A0-U+08FF` - 阿拉伯语扩展-A
- `U+FB50-U+FDFF` - 阿拉伯语呈现形式-A
- `U+FE70-U+FEFF` - 阿拉伯语呈现形式-B
- `U+10F70-U+10FFF` - 古维吾尔语/阿拉伯语扩展-C

## 使用说明

当用户在 Excalidraw 中：
1. 切换到维吾尔语界面 (ئۇيغۇرچە)
2. 输入维吾尔文字符时
3. 系统会自动使用 UKIJ Tor 字体显示

字体已配置为 Excalifont 的回退字体，无需手动选择。
