// Google Apps Script 代碼
// 請將此代碼複製到 Google Apps Script 編輯器中

// 配置設定
const CONFIG = {
  // 替換為您的 Gmail 地址
  EMAIL_RECIPIENT: 'futurebloom.edu.centre@gmail.com',
  
  // 替換為您的 Google Sheet ID (從 Google Sheet URL 中獲取)
  SPREADSHEET_ID: 'YOUR_GOOGLE_SHEET_ID',
  
  // 工作表名稱
  SHEET_NAME: '課程查詢記錄'
};

function doPost(e) {
  try {
    // 獲取表單數據
    const formData = e.parameter;
    
    // 記錄到 Google Sheet
    recordToSheet(formData);
    
    // 發送郵件通知
    sendEmailNotification(formData);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('處理表單提交時發生錯誤:', error);
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function recordToSheet(formData) {
  try {
    // 打開 Google Sheet
    const spreadsheet = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(CONFIG.SHEET_NAME);
    
    // 如果工作表不存在，創建新的工作表
    if (!sheet) {
      sheet = spreadsheet.insertSheet(CONFIG.SHEET_NAME);
      
      // 添加標題行
      const headers = [
        '提交時間', '姓名', '聯絡電話', '電郵地址', '查詢課程', '查詢內容'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // 設置標題行格式
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground('#df5121');
      headerRange.setFontColor('white');
      headerRange.setFontWeight('bold');
      headerRange.setHorizontalAlignment('center');
    }
    
    // 準備數據行
    const rowData = [
      formData.timestamp || new Date().toLocaleString('zh-HK', {timeZone: 'Asia/Hong_Kong'}),
      formData.name || '',
      formData.phone || '',
      formData.email || '',
      formData.course || '',
      formData.message || ''
    ];
    
    // 添加新行
    sheet.appendRow(rowData);
    
    // 自動調整列寬
    sheet.autoResizeColumns(1, 6);
    
    console.log('成功記錄到 Google Sheet');
    
  } catch (error) {
    console.error('記錄到 Google Sheet 時發生錯誤:', error);
    throw error;
  }
}

function sendEmailNotification(formData) {
  try {
    const subject = '【桐年卓越教育中心】新的課程查詢';
    
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(to right, #df5121, #c44117); color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">桐年卓越教育中心</h1>
          <p style="margin: 5px 0 0 0;">新的課程查詢</p>
        </div>
        
        <div style="padding: 20px; background: #f9f9f9;">
          <h2 style="color: #df5121; margin-top: 0;">查詢詳情</h2>
          
          <table style="width: 100%; border-collapse: collapse; background: white;">
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold; width: 120px;">提交時間</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${formData.timestamp || new Date().toLocaleString('zh-HK', {timeZone: 'Asia/Hong_Kong'})}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">姓名</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${formData.name || '未提供'}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">聯絡電話</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${formData.phone || '未提供'}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">電郵地址</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${formData.email || '未提供'}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">查詢課程</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${formData.course || '未指定'}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">查詢內容</td>
              <td style="padding: 12px; border: 1px solid #ddd; white-space: pre-wrap;">${formData.message || '未提供'}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px; padding: 15px; background: #e8f4fd; border-left: 4px solid #df5121;">
            <p style="margin: 0; color: #666;">
              <strong>提醒：</strong>請盡快與查詢者聯絡，提供專業的課程建議和服務。
            </p>
          </div>
        </div>
        
        <div style="background: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
          <p style="margin: 0;">此郵件由桐年卓越教育中心網站自動發送</p>
          <p style="margin: 5px 0 0 0;">如有技術問題，請聯絡網站管理員</p>
        </div>
      </div>
    `;
    
    // 發送郵件
    MailApp.sendEmail({
      to: CONFIG.EMAIL_RECIPIENT,
      subject: subject,
      htmlBody: htmlBody
    });
    
    console.log('成功發送郵件通知');
    
  } catch (error) {
    console.error('發送郵件時發生錯誤:', error);
    throw error;
  }
}

// 測試函數 - 可以在 Apps Script 編輯器中運行來測試功能
function testSubmission() {
  const testData = {
    name: '測試用戶',
    phone: '12345678',
    email: 'test@example.com',
    course: '創意繪畫班',
    message: '這是一個測試查詢',
    timestamp: new Date().toLocaleString('zh-HK', {timeZone: 'Asia/Hong_Kong'})
  };
  
  try {
    recordToSheet(testData);
    sendEmailNotification(testData);
    console.log('測試成功完成');
  } catch (error) {
    console.error('測試失敗:', error);
  }
}