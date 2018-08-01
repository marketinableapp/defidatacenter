Runner.namespace('Runner.lang');

Runner.lang.constants = {

	current_language: "Chinese (Hong Kong S.A.R.)",
	
//	for list page
	TEXT_FIRST: '第一頁',
	TEXT_PREVIOUS: '往前',
	TEXT_NEXT: '下頁',
	TEXT_LAST: '最後一頁',
	TEXT_PROCEED_TO: 'Proceed to',
	TEXT_DETAIL_NOT_SAVED: 'Records in %s haven\'t been saved',
	TEXT_NO_RECORDS: '查無資料',
	TEXT_DETAIL_GOTO: 'Go to',
	TEXT_SHOW_ALL: '顯示全部資料',
	TEXT_SHOW_OPTIONS: 'Show options',
	TEXT_HIDE_OPTIONS: 'Hide options',
	TEXT_SEARCH_SHOW_OPTIONS:'Show search options',
	TEXT_SEARCH_HIDE_OPTIONS:'Hide search options',
	TEXT_SHOW_SEARCH_PANEL:'Show search panel',
	TEXT_HIDE_SEARCH_PANEL:'Hide search panel',


	TEXT_LOADING: 'loading',
	TEXT_DELETE_CONFIRM: '你確定要刪除 ?',
	TEXT_PAGE: '第',
	TEXT_PAGEMAX: '頁共',

//	for editing pages	
	TEXT_INVALID_CAPTCHA_CODE: 'Invalid security code.',	
	TEXT_PLEASE_SELECT: '請選擇',
	TEXT_CTRL_CLICK: 'CTRL + click for multiple sorting',
	TEXT_SAVE: '儲存',
	TEXT_CANCEL: '取消',
	TEXT_PREVIEW: 'preview',
	TEXT_HIDE: 'hide',
	TEXT_QUESTION_UNSAVED_CHANGES: 'Do you want to navigate away from this page and lose unsaved changes?',
	
	TEXT_EDIT: '修改', 
	TEXT_COPY: '複製',
	TEXT_VIEW: '檢視',
	TEXT_INLINE_EDIT: '修改',
	TEXT_INLINE_ADD: '新增',
	TEXT_AA_P_ADD: 'Add',

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
	TEXT_TODAY: 'today',
	TEXT_SELECT_DATE: 'Select Date',
	TEXT_TIME: 'Time',
	TEXT_TIME_HOUR: 'Hour',
	TEXT_TIME_MINUTE: 'Minute',
	TEXT_TIME_SECOND: 'Second',
	
//	for inline message	
	TEXT_INLINE_FIELD_REQUIRED: 'Required field',
	TEXT_INLINE_FIELD_ZIPCODE: 'Field should be a valid zipcode',
	TEXT_INLINE_FIELD_EMAIL: 'Field should be a valid email address',
	TEXT_INLINE_FIELD_NUMBER: 'Field should be a valid number',
	TEXT_INLINE_FIELD_CURRENCY: 'Field should be a valid currency',
	TEXT_INLINE_FIELD_PHONE: 'Field should be a valid phone number',
	TEXT_INLINE_FIELD_PASSWORD1: 'Field can not be \'password\'',
	TEXT_INLINE_FIELD_PASSWORD2: 'Field should be at least 4 characters long',
	TEXT_INLINE_FIELD_STATE: 'Field should be a valid US state name',
	TEXT_INLINE_FIELD_SSN: 'Field should be a valid Social Security Number',
	TEXT_INLINE_FIELD_DATE: 'Field should be a valid date',
	TEXT_INLINE_FIELD_TIME: 'Field should be a valid time in 24-hour format',
	TEXT_INLINE_FIELD_CC: 'Field should be a valid credit card number',
	TEXT_INLINE_ERROR: 'Error occurred',
	TEXT_INLINE_DENY_DUPLICATES: 'Field should not contain a duplicate value',
	TEXT_INLINE_USERNAME_EXISTS1: '帳號Username', 
	TEXT_INLINE_USERNAME_EXISTS2: '已存在，請改用其他帳號.',
	TEXT_INLINE_EMAIL_ALREADY1: 'Email', 
	TEXT_INLINE_EMAIL_ALREADY2: '已經註冊過，若忘記密碼請按密碼提示表單.',

	//for RTE
	TEXT_VIEW_SOURCE: '檢視原始碼',
	//for tree-like menu
	TEXT_EXPAND_ALL: 'expand all',
	TEXT_COLLAPSE_ALL: 'collapse all',
	
	//for register page
	SEC_PWD_LEN: 'Password must be at least %% characters length.',
	SEC_PWD_CASE: 'Password must contain letters in upper and lower case.',
	SEC_PWD_DIGIT: 'Password must contain %% digits or symbols.',
	SEC_PWD_UNIQUE: 'Password must contain %% unique characters.',
	PASSWORDS_DONT_MATCH: '密碼不一致',
	SUCCES_LOGGED_IN: 'You have successfully logged in.',
	
	//for pdf
	TEXT_PDF_BUILD1: 'Building PDF',
	TEXT_PDF_BUILD2: 'done',
	TEXT_PDF_BUILD3: 'Could not create PDF',

	CLOSE_WINDOW: '關閉視窗',
	RESET: '清除',
	
	//for search options
	CONTAINS: '包含',
	EQUALS: '等於',
	STARTS_WITH: '開始於 ...',
	MORE_THAN: '大於 ...',
	LESS_THAN: '小於 ...',
	BETWEEN: '介於',
	EMPTY: '空白',
	
	NOT_CONTAINS: 'Doesn\'t contain',
	NOT_EQUALS: 'Doesn\'t equal',
	NOT_STARTS_WITH: 'Doesn\'t start with',
	NOT_MORE_THAN: 'Is not more than',
	NOT_LESS_THAN: 'Is not less than',
	NOT_BETWEEN: 'Is not between',
	NOT_EMPTY: 'Is not empty',
	
	SEARCH_FOR: '搜尋資料',
	
	ERROR_MISSING_FILE_NAME: 'File name was not provided',
	ERROR_ACCEPT_FILE_TYPES: 'File type is not acceptable',
	ERROR_MAX_FILE_SIZE: 'File size exceeds limit of %s kbytes',
	ERROR_MIN_FILE_SIZE: 'File size must not be less than %s kbytes',
	ERROR_MAX_TOTAL_FILE_SIZE: 'Total files size exceeds limit of %s kbytes',
	ERROR_MAX_NUMBER_OF_FILES_ONE: 'You can upload only one file',
	ERROR_MAX_NUMBER_OF_FILES_MANY: 'You can upload no more than %s files',
	
	TEXT_SERVER_ERROR_OCCURRED: 'Server error occurred',
	TEXT_SEE_DETAILS: 'See details',

	ERROR_UPLOAD: 'Uploading failed',
	START_UPLOAD: 'Upload',
	CANCEL: '取消',
	DELETE: '刪除',
	
	UPLOAD_DRAG: 'Drag files here',
	
	SELECT_ALL: 'Select all',
	UNSELECT_ALL: 'Unselect all',
	
	TEXT_WR_REPORT_SAVED: 'Report Saved',
	TEXT_WR_SOME_PROBLEM: 'Some problems appear during saving',
	TEXT_WR_CROSS_GROUP: 'Group',
	TEXT_WR_HEADER: 'Header',
	TEXT_WR_CROSS_GROUP: 'Group',
	TEXT_COUNT: '筆數', 
	TEXT_MIN: '最小',
	TEXT_MAX: '最大', 
	TEXT_SUM: '合計',
	TEXT_AVG: 'Avg',
	TEXT_WR_TOTAL_DATA: 'Table Data', 
	TEXT_PAGE_SUMMARY: '每頁合計',
	TEXT_GLOBAL_SUMMARY: '總計',
	TEXT_WR_SUMMARY: 'Summary',
	TEXT_FIELD: 'Field',
	TEXT_WR_NO_COLOR: 'No color',
	
	TEXT_SEARCH_SAVING: 'Search saving',
	TEXT_SEARCH_NAME: 'Search name:',
	TEXT_DELETE_SEARCH_CAPTION: 'Delete saved search',
	TEXT_DELETE_SEARCH: 'Do you really want to delete this search?',
	TEXT_YES: '是',
	TEXT_NO: '否',
	
	TEXT_FILTER_APPLY: 'Apply',
	TEXT_FILTER_CLEAR: 'Clear',
	TEXT_FILTER_MULTISELECT: 'Multiselect',
	
	// for rights page
	AA_ADD_NEW_GROUP: 'Add new group',
	AA_RENAMEGROUP: 'Rename group',
	AA_GROUP_NEW: 'newgroup',
	AA_DELETEGROUP: 'Do you really want to delete group',
	AA_COPY_PERMISS_FROM: 'Choose the group to copy permissions from:',
	AA_CHOOSE_COLUMNS_TO_DIPLAY: 'Choose columns to display',
	AA_SELECT_NONE: 'Select none',
	AA_OK: '確定',
	
	PREPARE_PAGE_FOR_PRINTING: 'Preparing page for printing',
	
	// import page
	IMPORT_PROCESSING_RECORDS: 'Processing records',
	IMPORT_FAILED: 'Import Failed'
};

Runner.lang.customlabels = {
	
	prefix: 'CUSTOM_LABEL_',
	
	// custom labels
};