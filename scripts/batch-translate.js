#!/usr/bin/env node

/**
 * 批量翻译脚本
 * 使用方法: node scripts/batch-translate.js
 */

const { initializeBatchTranslation } = require('../lib/article-management')

async function main() {
  console.log('🚀 Starting batch translation process...')
  
  try {
    await initializeBatchTranslation()
    console.log('✅ Batch translation completed successfully!')
  } catch (error) {
    console.error('❌ Batch translation failed:', error)
    process.exit(1)
  }
}

// 如果直接运行此脚本
if (require.main === module) {
  main()
}

module.exports = { main }
