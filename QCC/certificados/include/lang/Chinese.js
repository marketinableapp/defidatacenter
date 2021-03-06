Runner.namespace('Runner.lang');

Runner.lang.constants = {

	current_language: "Chinese",
	
//	for list page
	TEXT_FIRST: '首先',
	TEXT_PREVIOUS: '前面的',
	TEXT_NEXT: '下一个',
	TEXT_LAST: '最后',
	TEXT_PROCEED_TO: '继续执行 继续执行订单',
	TEXT_DETAIL_NOT_SAVED: '%S 中的记录尚未保存',
	TEXT_NO_RECORDS: '无法找到纪录',
	TEXT_DETAIL_GOTO: '转到',
	TEXT_SHOW_ALL: '显示所有项目',
	TEXT_SHOW_OPTIONS: '显示选项',
	TEXT_HIDE_OPTIONS: '隐藏选项',
	TEXT_SEARCH_SHOW_OPTIONS:'显示搜索选项',
	TEXT_SEARCH_HIDE_OPTIONS:'隐藏搜索选项。',
	TEXT_SHOW_SEARCH_PANEL:'Show search panel',
	TEXT_HIDE_SEARCH_PANEL:'Hide search panel',


	TEXT_LOADING: '加载 加载…消息',
	TEXT_DELETE_CONFIRM: '您确定要删除这些记录？',
	TEXT_PAGE: '网页',
	TEXT_PAGEMAX: '的',

//	for editing pages	
	TEXT_INVALID_CAPTCHA_CODE: '无效的安全代码。',	
	TEXT_PLEASE_SELECT: '请选择',
	TEXT_CTRL_CLICK: 'CTRL + 单击多个排序 在工具提示中显示的消息。多个字段排序。',
	TEXT_SAVE: '保存',
	TEXT_CANCEL: '取消',
	TEXT_PREVIEW: '预览 预览详细信息表数据',
	TEXT_HIDE: '隐藏 隐藏详细信息表预览',
	TEXT_QUESTION_UNSAVED_CHANGES: '想要导航到其他页面和丢失未保存的更改吗？',
	
	TEXT_EDIT: '修改', 
	TEXT_COPY: '复制',
	TEXT_VIEW: '阅读',
	TEXT_INLINE_EDIT: '修改',
	TEXT_INLINE_ADD: '增添新项',
	TEXT_AA_P_ADD: '添加',

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
	TEXT_DAY_SU: '周日',
	TEXT_DAY_MO: '周一',
	TEXT_DAY_TU: '周二',
	TEXT_DAY_WE: '周三',
	TEXT_DAY_TH: '周四',
	TEXT_DAY_FR: '周五',
	TEXT_DAY_SA: '周六',
	TEXT_TODAY: '今天 Datepicker 的链接选择今天的日期。',
	TEXT_SELECT_DATE: '选择日期 Datepicker 窗口标题。',
	TEXT_TIME: '时间',
	TEXT_TIME_HOUR: '小时',
	TEXT_TIME_MINUTE: '分',
	TEXT_TIME_SECOND: '秒',
	
//	for inline message	
	TEXT_INLINE_FIELD_REQUIRED: '必需填字段',
	TEXT_INLINE_FIELD_ZIPCODE: '字段应该是有效的邮政编码',
	TEXT_INLINE_FIELD_EMAIL: '字段应该是一个有效的电子邮件地址',
	TEXT_INLINE_FIELD_NUMBER: '字段应该是有效的数字',
	TEXT_INLINE_FIELD_CURRENCY: '字段应该是一种有效的货币',
	TEXT_INLINE_FIELD_PHONE: '字段应该是有效的电话号码',
	TEXT_INLINE_FIELD_PASSWORD1: '字段不能是密码。',
	TEXT_INLINE_FIELD_PASSWORD2: '字段应至少 4 个字符',
	TEXT_INLINE_FIELD_STATE: '字段应该是有效的美国州名',
	TEXT_INLINE_FIELD_SSN: '字段应该是有效的社保編号',
	TEXT_INLINE_FIELD_DATE: '字段应该是一个有效的日期',
	TEXT_INLINE_FIELD_TIME: '字段应该是一个有效时间，24 小时格式',
	TEXT_INLINE_FIELD_CC: '字段应是有效信用卡号',
	TEXT_INLINE_ERROR: '发生错误',
	TEXT_INLINE_DENY_DUPLICATES: '字段不应包含重复的值',
	TEXT_INLINE_USERNAME_EXISTS1: '', 
	TEXT_INLINE_USERNAME_EXISTS2: '用户姓名已有。请选择其他用户姓名。',
	TEXT_INLINE_EMAIL_ALREADY1: '电子邮箱地址', 
	TEXT_INLINE_EMAIL_ALREADY2: '已经注册。如忘记用户姓名及电子邮箱地址, 请使用密码提示表格。',

	//for RTE
	TEXT_VIEW_SOURCE: '阅读原文',
	//for tree-like menu
	TEXT_EXPAND_ALL: '全部展开 扩大树形菜单中的所有菜单项',
	TEXT_COLLAPSE_ALL: '全部折叠 折叠树形菜单中的所有菜单项',
	
	//for register page
	SEC_PWD_LEN: '密码必须至少为 %%字符长度。',
	SEC_PWD_CASE: '密码必须包含小和大写字母。',
	SEC_PWD_DIGIT: '密码必须包含 %%数字或符号。',
	SEC_PWD_UNIQUE: '密码必须包含 %%唯一的字符。',
	PASSWORDS_DONT_MATCH: '密码不符',
	SUCCES_LOGGED_IN: '您已成功进入',
	
	//for pdf
	TEXT_PDF_BUILD1: '建PDF   建PDF 。 50%完成',
	TEXT_PDF_BUILD2: '做 建PDF。50%完成',
	TEXT_PDF_BUILD3: 'Could not create PDF',

	CLOSE_WINDOW: '关闭视窗',
	RESET: '重新设置',
	
	//for search options
	CONTAINS: '包含',
	EQUALS: '等于',
	STARTS_WITH: '以。。。。。。开始',
	MORE_THAN: '多于．．．．．．',
	LESS_THAN: '少于．．．．．．',
	BETWEEN: '在 --- 中间',
	EMPTY: '空格',
	
	NOT_CONTAINS: '不包含 键入搜索条件。成分不包含脂肪',
	NOT_EQUALS: '不等于 键入搜索条件。宠物不等于猫',
	NOT_STARTS_WITH: '不会开始 键入搜索条件。名称不会启动与A',
	NOT_MORE_THAN: '是不能超过 键入搜索条件。Horsepowers是不能超过200',
	NOT_LESS_THAN: '是不小于 键入搜索条件。Horsepowers是不小于200',
	NOT_BETWEEN: '不介于 键入搜索条件。重量不介于50 和 100',
	NOT_EMPTY: '不是空的 键入搜索条件。利益，不为空',
	
	SEARCH_FOR: '搜索 。。。。。。',
	
	ERROR_MISSING_FILE_NAME: '未提供文件的名称 ',
	ERROR_ACCEPT_FILE_TYPES: '文件类型是不能接受',
	ERROR_MAX_FILE_SIZE: '文件大小超出限制的 %s kb 为单位）',
	ERROR_MIN_FILE_SIZE: '文件大小不能小于 %s kb 为单位）',
	ERROR_MAX_TOTAL_FILE_SIZE: '总的文件大小超过了限制的 %s kb 为单位）',
	ERROR_MAX_NUMBER_OF_FILES_ONE: '您可以将只有一个文件上载',
	ERROR_MAX_NUMBER_OF_FILES_MANY: '你可以上传文件 %s 不超过',
	
	TEXT_SERVER_ERROR_OCCURRED: 'Server error occurred',
	TEXT_SEE_DETAILS: 'See details',

	ERROR_UPLOAD: '上传失败',
	START_UPLOAD: '上传 ',
	CANCEL: '取消',
	DELETE: '删除',
	
	UPLOAD_DRAG: '文件拖到此处',
	
	SELECT_ALL: '选择所有',
	UNSELECT_ALL: '取消全选',
	
	TEXT_WR_REPORT_SAVED: '保存报表',
	TEXT_WR_SOME_PROBLEM: '在保存过程中出现的一些问题 ',
	TEXT_WR_CROSS_GROUP: '集团 ',
	TEXT_WR_HEADER: '标头',
	TEXT_WR_CROSS_GROUP: '集团 ',
	TEXT_COUNT: '计数', 
	TEXT_MIN: '最小数',
	TEXT_MAX: '最大数', 
	TEXT_SUM: '总和',
	TEXT_AVG: '平均 缩写',
	TEXT_WR_TOTAL_DATA: '表数据  ', 
	TEXT_PAGE_SUMMARY: '此页概要',
	TEXT_GLOBAL_SUMMARY: '综述概要',
	TEXT_WR_SUMMARY: '摘要 ',
	TEXT_FIELD: '字段 提示的字段的列表。用户应选择字段，该字段将会显示在交叉分析报表中的网格内哪些值。',
	TEXT_WR_NO_COLOR: '没有颜色 ',
	
	TEXT_SEARCH_SAVING: '搜索保存',
	TEXT_SEARCH_NAME: '搜索名称：',
	TEXT_DELETE_SEARCH_CAPTION: '删除已保存的搜索',
	TEXT_DELETE_SEARCH: '确实要删除此搜索吗？',
	TEXT_YES: '是',
	TEXT_NO: '否',
	
	TEXT_FILTER_APPLY: '申请',
	TEXT_FILTER_CLEAR: '清除',
	TEXT_FILTER_MULTISELECT: '多选',
	
	// for rights page
	AA_ADD_NEW_GROUP: '添加新的组',
	AA_RENAMEGROUP: '重命名组',
	AA_GROUP_NEW: 'newgroup 在权限区域中的新组的默认名称',
	AA_DELETEGROUP: '确实要删除组 确实要删除组\'组名\' 吗？适用于动态权限。',
	AA_COPY_PERMISS_FROM: '选择的组群作为允许抄㝍',
	AA_CHOOSE_COLUMNS_TO_DIPLAY: '顕示選的直項',
	AA_SELECT_NONE: '沒選擇到',
	AA_OK: '可以',
	
	PREPARE_PAGE_FOR_PRINTING: '預備印刷的頁面',
	
	// import page
	IMPORT_PROCESSING_RECORDS: '處理記録',
	IMPORT_FAILED: 'Import Failed'
};

Runner.lang.customlabels = {
	
	prefix: 'CUSTOM_LABEL_',
	
	// custom labels
};