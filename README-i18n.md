# 🌍 多语言国际化 (i18n) 架构文档

## 概述

本项目已完整实现了支持 **15+ 语言** 的国际化架构，使用 Next.js 15 + next-intl 构建。

## 🚀 支持的语言

- 🇺🇸 English (en) - 默认语言
- 🇨🇳 简体中文 (zh)
- 🇹🇼 繁體中文 (zh-TW)
- 🇪🇸 Español (es)
- 🇫🇷 Français (fr)
- 🇩🇪 Deutsch (de)
- 🇯🇵 日本語 (ja)
- 🇰🇷 한국어 (ko)
- 🇵🇹 Português (pt)
- 🇷🇺 Русский (ru)
- 🇸🇦 العربية (ar) - RTL 支持
- 🇮🇳 हिन्दी (hi)
- 🇮🇹 Italiano (it)
- 🇳🇱 Nederlands (nl)
- 🇸🇪 Svenska (sv)

## 📁 项目结构

```
aisongmaker-homepage/
├── app/
│   ├── [locale]/           # 多语言路由
│   │   ├── layout.tsx      # 语言特定布局
│   │   ├── page.tsx        # 主页
│   │   ├── blog/           # 博客页面
│   │   ├── prompt-examples/ # 提示词示例
│   │   └── use-cases/      # 使用案例
│   ├── globals.css         # 全局样式
│   └── layout.tsx          # 根布局
├── messages/               # 语言资源文件
│   ├── en.json            # 英文
│   ├── zh.json            # 中文简体
│   ├── es.json            # 西班牙文
│   └── ...                # 其他语言
├── components/
│   └── language-switcher.tsx # 语言切换组件
├── lib/
│   └── i18n-utils.ts      # i18n 工具函数
├── i18n.ts                # i18n 配置
└── middleware.ts          # 路由中间件
```

## 🔧 核心功能

### 1. 自动语言检测
- 基于浏览器语言偏好自动检测
- 智能回退到最佳匹配语言
- 支持地区变体 (如 en-GB → en)

### 2. SEO 优化
- 自动生成 hreflang 标签
- 语言特定的 canonical URL
- 多语言 sitemap 支持

### 3. RTL 语言支持
- 阿拉伯语等 RTL 语言完整支持
- 自动方向检测和样式调整

### 4. 动态路由
```
/ → /en (默认)
/zh → 中文版本
/es → 西班牙语版本
/ar → 阿拉伯语版本 (RTL)
```

## 🛠️ 使用方法

### 添加新语言

1. **更新语言配置** (`i18n.ts`):
```typescript
export const locales = [
  'en', 'zh', 'es', 'fr', 'de', 'ja', 'ko', 'pt', 'ru', 'ar', 'hi', 'it', 'nl', 'sv',
  'pl' // 新增波兰语
] as const;

export const localeNames: Record<Locale, string> = {
  // ... 其他语言
  pl: 'Polski', // 新增
};
```

2. **创建语言文件** (`messages/pl.json`):
```json
{
  "common": {
    "loading": "Ładowanie...",
    "error": "Błąd"
  }
  // ... 翻译内容
}
```

3. **更新中间件** (`middleware.ts`):
```typescript
matcher: [
  '/(zh|zh-TW|es|fr|de|ja|ko|pt|ru|ar|hi|it|nl|sv|pl)/:path*', // 添加 pl
]
```

### 在组件中使用翻译

```tsx
import { useTranslations } from 'next-intl';

export function MyComponent() {
  const t = useTranslations('navigation');
  
  return (
    <nav>
      <a href="/">{t('home')}</a>
      <a href="/about">{t('about')}</a>
    </nav>
  );
}
```

### 语言切换

```tsx
import { LanguageSwitcher } from '@/components/language-switcher';

export function Header() {
  return (
    <header>
      <LanguageSwitcher showLabel={true} />
    </header>
  );
}
```

## 🎯 最佳实践

1. **翻译键命名**: 使用嵌套结构，如 `navigation.home`
2. **占位符**: 使用 `{variable}` 进行动态内容替换
3. **复数形式**: 利用 next-intl 的复数规则
4. **日期/数字**: 使用内置的格式化功能

## 🔄 部署注意事项

1. **静态生成**: 所有语言路由都会预生成
2. **CDN 缓存**: 按语言路径进行缓存优化
3. **搜索引擎**: 自动生成语言特定的 sitemap

## 📊 性能优化

- **按需加载**: 只加载当前语言的翻译文件
- **Tree Shaking**: 未使用的翻译会被自动移除
- **缓存策略**: 翻译文件具有长期缓存

## 🧪 测试

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 访问不同语言版本
http://localhost:3000     # 英文 (默认)
http://localhost:3000/zh  # 中文
http://localhost:3000/es  # 西班牙语
```

## 🚀 扩展性

当前架构可轻松扩展到 **50+ 语言**，只需：
1. 添加语言配置
2. 创建翻译文件
3. 更新路由匹配器

架构完全支持未来的语言扩展需求！
