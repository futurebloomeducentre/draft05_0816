# 桐年卓越教育中心網站
FutureBloom Education Centre Website

## 項目簡介

桐年卓越教育中心的官方網站，採用現代化的響應式設計，提供完整的課程資訊和線上查詢功能。

### 主要功能

- 🎨 **響應式設計** - 適配所有設備尺寸
- 📚 **課程展示** - 完整的課程資訊和價格
- 📝 **線上查詢** - 整合 Google Apps Script 的聯絡表單
- 📧 **自動通知** - Gmail 郵件通知和 Google Sheets 記錄
- 🎯 **SEO 優化** - 搜尋引擎友好的結構

## 技術架構

- **前端框架**: React 18 + TypeScript
- **構建工具**: Vite
- **樣式框架**: Tailwind CSS
- **圖標庫**: Lucide React
- **後端整合**: Google Apps Script
- **部署平台**: Netlify

## 本地開發

### 環境要求

- Node.js 16+
- npm 或 yarn

### 安裝依賴

```bash
npm install
```

### 啟動開發服務器

```bash
npm run dev
```

### 構建生產版本

```bash
npm run build
```

### 預覽生產版本

```bash
npm run preview
```

## 部署

### Netlify 部署

項目已配置為可直接部署到 Netlify：

1. 將代碼推送到 GitHub
2. 在 Netlify 中連接 GitHub 儲存庫
3. 設置構建命令：`npm run build`
4. 設置發布目錄：`dist`

### 自定義域名

在 Netlify 控制台中：
1. 進入 Domain settings
2. 添加自定義域名
3. 配置 DNS 記錄

## Google Apps Script 整合

### 設置步驟

1. 創建 Google Sheet 用於存儲查詢記錄
2. 創建 Google Apps Script 項目
3. 複製 `google-apps-script.js` 中的代碼
4. 配置郵件接收地址和 Sheet ID
5. 部署為 Web App
6. 更新 `Contact.tsx` 中的 Script URL

詳細設置說明請參考 `setup-instructions.md`

## 項目結構

```
src/
├── components/          # React 組件
│   ├── Header.tsx      # 導航頭部
│   ├── Hero.tsx        # 主橫幅
│   ├── About.tsx       # 關於我們
│   ├── Courses.tsx     # 課程展示
│   ├── Contact.tsx     # 聯絡表單
│   └── Footer.tsx      # 頁腳
├── App.tsx             # 主應用組件
├── main.tsx            # 應用入口
└── index.css           # 全局樣式

public/                 # 靜態資源
├── course-*.png        # 課程圖片
└── futurebloom-logo.jpg # 機構標誌

google-apps-script.js   # Google Apps Script 代碼
setup-instructions.md   # 設置說明文檔
```

## 課程類別

### 學術課程
- 趣味中文啟蒙班 (2-6歲)
- 趣味數學啟蒙班 (2-6歲)
- 中文升小應用班 (4-7歲)
- 數學升小應用班 (4-7歲)
- 中文閱讀常規班 (小1-小6)
- 中文寫作常規班 (小1-小6)
- 數學基礎與奧數常規班 (小1-小6)

### 藝術課程
- 繪本啟蒙班 (2-6歲)
- 創意繪畫班 (2-6歲)
- 多元體驗班 (4-12歲)
- 兒童基礎班 (小1-小3)
- 兒童進階班 (小4-小6)
- 和諧粉彩準/正指導師證書課程 (10歲以上)

### 特色課程
- LCM幼兒音樂證書課程 (2.5-6歲)
- 普通話 GAPSK 課程 (3-7歲)
- 奇趣探索班 (3-7歲)
- 個性化學習計劃 (小1-小6)

## 聯絡資訊

- **地址**: 九龍觀塘瑞泰偉基商業廣場209室
- **電話**: +852 9380 2827
- **電郵**: futurebloom.edu.centre@gmail.com
- **Facebook**: https://www.facebook.com/share/19omeBFkMm/
- **Instagram**: https://www.instagram.com/futurebloom_edu

## 營業時間

- 星期一至六：上午9:00 - 下午6:00
- 星期日及公眾假期：10:00AM - 5:00PM

## 授權

© 2024 桐年卓越教育中心. 版權所有.

## 技術支援

如需技術支援或有任何問題，請聯絡開發團隊。# futurebloom-education-website
# futurebloom-education-website
