Runner.namespace('Runner.lang');

Runner.lang.constants = {

	current_language: "Chinese (Taiwan)",
	
//	for list page
	TEXT_FIRST: '第一筆',
	TEXT_PREVIOUS: '前一筆',
	TEXT_NEXT: '下一筆',
	TEXT_LAST: '最後一筆',
	TEXT_PROCEED_TO: '前往',
	TEXT_DETAIL_NOT_SAVED: '%s筆資料已經儲存。',
	TEXT_NO_RECORDS: '找不到資料',
	TEXT_DETAIL_GOTO: '到',
	TEXT_SHOW_ALL: '顯全部',
	TEXT_SHOW_OPTIONS: '顯示選項',
	TEXT_HIDE_OPTIONS: '隱藏選項',
	TEXT_SEARCH_SHOW_OPTIONS:'顯示搜尋選項',
	TEXT_SEARCH_HIDE_OPTIONS:'隱藏搜尋選項',
	TEXT_SHOW_SEARCH_PANEL:'Show search panel',
	TEXT_HIDE_SEARCH_PANEL:'Hide search panel',


	TEXT_LOADING: '載入',
	TEXT_DELETE_CONFIRM: '您確定要刪除這筆資料嗎?',
	TEXT_PAGE: '頁',
	TEXT_PAGEMAX: '的',

//	for editing pages	
	TEXT_INVALID_CAPTCHA_CODE: '錯誤的安全碼',	
	TEXT_PLEASE_SELECT: '請選擇',
	TEXT_CTRL_CLICK: 'CTRL+滑鼠點選多欄位排序',
	TEXT_SAVE: '存檔',
	TEXT_CANCEL: '取消',
	TEXT_PREVIEW: '預覽',
	TEXT_HIDE: '隱藏',
	TEXT_QUESTION_UNSAVED_CHANGES: 'Do you want to navigate away from this page and lose unsaved changes?',
	
	TEXT_EDIT: '修改', 
	TEXT_COPY: '複製',
	TEXT_VIEW: '預覽',
	TEXT_INLINE_EDIT: '行內修改',
	TEXT_INLINE_ADD: '行內新增',
	TEXT_AA_P_ADD: '新增',

//	for calendar
	TEXT_MONTH_JAN: '一月',
	TEXT_MONTH_FEB: '二月',
	TEXT_MONTH_MAR: '三月',
	TEXT_MONTH_APR: '四月',
	TEXT_MONTH_MAY: '五月',
	TEXT_MONTH_JUN: '六月',
	TEXT_MONTH_JUL: '七月',
	TEXT_MONTH_AUG: '八月',
	TEXT_MONTH_SEP: '九月',
	TEXT_MONTH_OCT: '十月',
	TEXT_MONTH_NOV: '十一月',
	TEXT_MONTH_DEC: '十二月',
	TEXT_DAY_SU: '日',
	TEXT_DAY_MO: '一',
	TEXT_DAY_TU: '二',
	TEXT_DAY_WE: '三',
	TEXT_DAY_TH: '四',
	TEXT_DAY_FR: '五',
	TEXT_DAY_SA: '六',
	TEXT_TODAY: '今天',
	TEXT_SELECT_DATE: '選取日期',
	TEXT_TIME: 'Time',
	TEXT_TIME_HOUR: 'Hour',
	TEXT_TIME_MINUTE: 'Minute',
	TEXT_TIME_SECOND: 'Second',
	
//	for inline message	
	TEXT_INLINE_FIELD_REQUIRED: '必要輸入的欄位',
	TEXT_INLINE_FIELD_ZIPCODE: '欄位必需是郵遞區號',
	TEXT_INLINE_FIELD_EMAIL: '欄位必需是email地址',
	TEXT_INLINE_FIELD_NUMBER: '欄位必需是數值',
	TEXT_INLINE_FIELD_CURRENCY: '欄位必需是幣別',
	TEXT_INLINE_FIELD_PHONE: '欄位必需是電話號碼',
	TEXT_INLINE_FIELD_PASSWORD1: '欄位不可以是\'password\'',
	TEXT_INLINE_FIELD_PASSWORD2: '欄位至少需要4個字元',
	TEXT_INLINE_FIELD_STATE: '欄位必需是美國的州名',
	TEXT_INLINE_FIELD_SSN: '欄位必需是社會保險號碼',
	TEXT_INLINE_FIELD_DATE: '欄位必需是日期',
	TEXT_INLINE_FIELD_TIME: '欄位必需是24小時制時間',
	TEXT_INLINE_FIELD_CC: '欄位必需是信用卡號碼',
	TEXT_INLINE_ERROR: '錯誤發生',
	TEXT_INLINE_DENY_DUPLICATES: 'Field should not contain a duplicate value',
	TEXT_INLINE_USERNAME_EXISTS1: '使用者帳號', 
	TEXT_INLINE_USERNAME_EXISTS2: '使用者帳號已經存在.選擇另一個使用者帳號',
	TEXT_INLINE_EMAIL_ALREADY1: '電子郵件', 
	TEXT_INLINE_EMAIL_ALREADY2: '已註冊完成.如果您忘記您的使用者帳號或密碼請到密碼提醒頁.',

	//for RTE
	TEXT_VIEW_SOURCE: '預覽原始碼',
	//for tree-like menu
	TEXT_EXPAND_ALL: '展開',
	TEXT_COLLAPSE_ALL: '收合',
	
	//for register page
	SEC_PWD_LEN: '密碼至少需%%字元長度',
	SEC_PWD_CASE: '密碼必需含大小寫字元',
	SEC_PWD_DIGIT: '密碼必須含%%個文數字',
	SEC_PWD_UNIQUE: '密碼必須有%%個不重複字元',
	PASSWORDS_DONT_MATCH: '密碼不吻合',
	SUCCES_LOGGED_IN: 'You have successfully logged in.',
	
	//for pdf
	TEXT_PDF_BUILD1: '建立PDF',
	TEXT_PDF_BUILD2: '完成',
	TEXT_PDF_BUILD3: 'Could not create PDF',

	CLOSE_WINDOW: '關閉視窗',
	RESET: '清除',
	
	//for search options
	CONTAINS: '內容',
	EQUALS: '等於',
	STARTS_WITH: '開始以',
	MORE_THAN: '大於...',
	LESS_THAN: '小於...',
	BETWEEN: '之間',
	EMPTY: '空的',
	
	NOT_CONTAINS: '不含',
	NOT_EQUALS: '不等',
	NOT_STARTS_WITH: '開頭非',
	NOT_MORE_THAN: '不大於',
	NOT_LESS_THAN: '不小於',
	NOT_BETWEEN: '不介於',
	NOT_EMPTY: '不是空的',
	
	SEARCH_FOR: '搜詢以',
	
	ERROR_MISSING_FILE_NAME: 'File name was not provided',
	ERROR_ACCEPT_FILE_TYPES: 'File type is not acceptable',
	ERROR_MAX_FILE_SIZE: '檔案大小超過%s KByte上限',
	ERROR_MIN_FILE_SIZE: '檔案大小必須小於 %s KByte',
	ERROR_MAX_TOTAL_FILE_SIZE: '總檔案大小超過 %s KByte上限',
	ERROR_MAX_NUMBER_OF_FILES_ONE: '你只可以上傳一個檔案',
	ERROR_MAX_NUMBER_OF_FILES_MANY: '§AμLak?W?C?W1L%s-OAER×',
	
	TEXT_SERVER_ERROR_OCCURRED: 'Server error occurred',
	TEXT_SEE_DETAILS: 'See details',

	ERROR_UPLOAD: '上傳失敗',
	START_UPLOAD: '上傳',
	CANCEL: '取消',
	DELETE: '刪除',
	
	UPLOAD_DRAG: 'Drag files here',
	
	SELECT_ALL: 'Select all',
	UNSELECT_ALL: 'Unselect all',
	
	TEXT_WR_REPORT_SAVED: '儲存報表',
	TEXT_WR_SOME_PROBLEM: '存檔時發生錯誤',
	TEXT_WR_CROSS_GROUP: '群組',
	TEXT_WR_HEADER: '頁頭',
	TEXT_WR_CROSS_GROUP: '群組',
	TEXT_COUNT: '計數', 
	TEXT_MIN: '最小',
	TEXT_MAX: '最大', 
	TEXT_SUM: '合計',
	TEXT_AVG: '平均',
	TEXT_WR_TOTAL_DATA: 'Table Data', 
	TEXT_PAGE_SUMMARY: '每頁合計',
	TEXT_GLOBAL_SUMMARY: '總計',
	TEXT_WR_SUMMARY: '加總',
	TEXT_FIELD: '欄位',
	TEXT_WR_NO_COLOR: '無顏色',
	
	TEXT_SEARCH_SAVING: 'Search saving',
	TEXT_SEARCH_NAME: 'Search name:',
	TEXT_DELETE_SEARCH_CAPTION: 'Delete saved search',
	TEXT_DELETE_SEARCH: 'Do you really want to delete this search?',
	TEXT_YES: '是',
	TEXT_NO: '否',
	
	TEXT_FILTER_APPLY: '申請',
	TEXT_FILTER_CLEAR: '清除',
	TEXT_FILTER_MULTISELECT: '多選',
	
	// for rights page
	AA_ADD_NEW_GROUP: '建立新群組',
	AA_RENAMEGROUP: '群組更名',
	AA_GROUP_NEW: '新群組',
	AA_DELETEGROUP: '您確定要刪除群組',
	AA_COPY_PERMISS_FROM: 'Choose the group to copy permissions from:',
	AA_CHOOSE_COLUMNS_TO_DIPLAY: 'Choose columns to display',
	AA_SELECT_NONE: 'Select none',
	AA_OK: '好',
	
	PREPARE_PAGE_FOR_PRINTING: 'Preparing page for printing',
	
	// import page
	IMPORT_PROCESSING_RECORDS: 'Processing records',
	IMPORT_FAILED: 'Import Failed'
};

Runner.lang.customlabels = {
	
	prefix: 'CUSTOM_LABEL_',
	
	// custom labels
};