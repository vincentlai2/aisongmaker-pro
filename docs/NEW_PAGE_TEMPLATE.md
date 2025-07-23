# 新页面模板

当你需要添加新页面时，可以使用以下模板。Canonical URL 会自动生成！

## 基本页面模板

```typescript
// app/[locale]/your-new-page/page.tsx
import { generateMetadata as generateSEOMetadata } from "@/components/seo-head"
import YourNewPageClient from "./YourNewPageClient"
import { Locale } from "@/i18n"

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  
  // 只需要设置 pathname，canonical URL 会自动生成！
  const pathname = "/your-new-page"
  
  return generateSEOMetadata({
    title: "Your Page Title - AI Song Maker",
    description: "Your page description here...",
    keywords: "your, keywords, here",
    locale,
    pathname, // 这是关键！设置了这个，canonical URL 就会自动生成
  })
}

export default function YourNewPage() {
  return <YourNewPageClient />
}
```

## Canonical URL 自动生成规则

- **英文页面**: `https://aisongmaker.pro/your-new-page`
- **中文页面**: `https://aisongmaker.pro/zh/your-new-page`  
- **西班牙语页面**: `https://aisongmaker.pro/es/your-new-page`

## 你只需要做的事情

1. **设置 `pathname`**: 比如 `/your-new-page`
2. **设置页面特定的 SEO 信息**: title, description, keywords
3. **传递 `locale` 和 `pathname`** 给 `generateSEOMetadata`

## 不需要做的事情

- ❌ 手动计算 canonical URL
- ❌ 手动设置多语言 URL
- ❌ 担心 hreflang 标签

一切都会自动处理！

## 示例：添加一个 FAQ 页面

```typescript
// app/[locale]/faq/page.tsx
import { generateMetadata as generateSEOMetadata } from "@/components/seo-head"
import FAQClient from "./FAQClient"
import { Locale } from "@/i18n"

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  
  return generateSEOMetadata({
    title: "Frequently Asked Questions - AI Song Maker",
    description: "Find answers to common questions about AI Song Maker, music generation, licensing, and more.",
    keywords: "AI song maker FAQ, music generation questions, AI music help",
    locale,
    pathname: "/faq", // 就这么简单！
  })
}

export default function FAQPage() {
  return <FAQClient />
}
```

这样生成的 canonical URLs：
- 英文: `https://aisongmaker.pro/faq`
- 中文: `https://aisongmaker.pro/zh/faq`
- 西班牙语: `https://aisongmaker.pro/es/faq`

## 记住更新 sitemap

如果添加了新页面，记得在 `app/sitemap.ts` 中添加新的路径：

```typescript
const pages = [
  '',
  '/blog',
  '/use-cases', 
  '/prompt-examples',
  '/faq', // 添加你的新页面
  '/your-new-page', // 添加你的新页面
]
```
