# 設置 Gmail 和 Google Sheet 整合指南

## 步驟 1: 創建 Google Sheet

1. 前往 [Google Sheets](https://sheets.google.com)
2. 創建新的試算表
3. 將試算表命名為「桐年卓越教育中心 - 課程查詢記錄」
4. 從 URL 中複製 Spreadsheet ID
   - URL 格式：`https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
   - 複製 `SPREADSHEET_ID` 部分

## 步驟 2: 設置 Google Apps Script

1. 前往 [Google Apps Script](https://script.google.com)
2. 點擊「新專案」
3. 將 `google-apps-script.js` 中的代碼複製到編輯器中
4. 修改 `CONFIG` 物件中的設定：
   ```javascript
   const CONFIG = {
     EMAIL_RECIPIENT: 'futurebloom.edu.centre@gmail.com', // 修改為您的 Gmail
     SPREADSHEET_ID: 'YOUR_GOOGLE_SHEET_ID', // 替換為步驟1中的 Spreadsheet ID
     SHEET_NAME: '課程查詢記錄'
   };
   ```

## 步驟 3: 部署 Web App

1. 在 Apps Script 編輯器中，點擊「部署」→「新增部署作業」
2. 選擇類型：「網頁應用程式」
3. 設定：
   - 說明：「桐年教育中心表單處理」
   - 執行身分：「我」
   - 存取權：「任何人」
4. 點擊「部署」
5. 複製 Web App URL

## 步驟 4: 更新前端代碼

1. 在 `Contact.tsx` 中找到這行：
   ```javascript
   const scriptURL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
   ```
2. 將 `YOUR_SCRIPT_ID` 替換為步驟3中獲得的 Web App URL

## 步驟 5: 設置權限

1. 在 Apps Script 中，點擊「執行」→「testSubmission」來測試
2. 授權應用程式存取 Gmail 和 Google Sheets
3. 確認測試成功運行

## 步驟 6: 測試整合

1. 在網站上提交測試表單
2. 檢查：
   - Gmail 是否收到通知郵件
   - Google Sheet 是否新增了記錄
   - 表單是否顯示成功訊息

## 功能特色

### Gmail 通知
- 自動發送格式化的 HTML 郵件
- 包含所有表單資料
- 專業的郵件模板設計

### Google Sheet 記錄
- 自動創建標題行
- 記錄所有提交資料
- 包含時間戳記
- 自動調整列寬

### 錯誤處理
- 完整的錯誤捕獲和記錄
- 用戶友好的錯誤訊息
- 備用聯絡方式提示

## 注意事項

1. **隱私權**：確保遵守相關的資料保護法規
2. **安全性**：定期檢查 Apps Script 的存取權限
3. **備份**：定期備份 Google Sheet 資料
4. **測試**：定期測試整合功能是否正常運作

## 疑難排解

### 常見問題

1. **表單提交後沒有收到郵件**
   - 檢查 Gmail 垃圾郵件資料夾
   - 確認 Apps Script 權限設定正確
   - 檢查 Web App URL 是否正確

2. **Google Sheet 沒有新增記錄**
   - 確認 Spreadsheet ID 正確
   - 檢查 Google Sheet 的共享權限
   - 確認 Apps Script 有存取權限

3. **表單顯示錯誤訊息**
   - 檢查瀏覽器控制台的錯誤訊息
   - 確認網路連線正常
   - 檢查 Apps Script 部署狀態

如需技術支援，請聯絡網站開發團隊。