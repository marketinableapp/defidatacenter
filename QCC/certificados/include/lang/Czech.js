Runner.namespace('Runner.lang');

Runner.lang.constants = {

	current_language: "Czech",
	
//	for list page
	TEXT_FIRST: 'První',
	TEXT_PREVIOUS: 'Předchozí',
	TEXT_NEXT: 'Další',
	TEXT_LAST: 'Poslední',
	TEXT_PROCEED_TO: 'Pokračovat na',
	TEXT_DETAIL_NOT_SAVED: 'Záznam %s nemohl být uložen',
	TEXT_NO_RECORDS: 'Nenalezen žádný záznam',
	TEXT_DETAIL_GOTO: 'Jít na',
	TEXT_SHOW_ALL: 'Zobrazit vše',
	TEXT_SHOW_OPTIONS: 'Zobrazit nastavení',
	TEXT_HIDE_OPTIONS: 'Skrýt nastavení',
	TEXT_SEARCH_SHOW_OPTIONS:'Zobrazit nastavení hledání',
	TEXT_SEARCH_HIDE_OPTIONS:'Skrýt nastavení hledání',
	TEXT_SHOW_SEARCH_PANEL:'Show search panel',
	TEXT_HIDE_SEARCH_PANEL:'Hide search panel',


	TEXT_LOADING: 'nahrávám',
	TEXT_DELETE_CONFIRM: 'Chcete opravdu smazat tyto záznamy?',
	TEXT_PAGE: 'stránka',
	TEXT_PAGEMAX: 'z',

//	for editing pages	
	TEXT_INVALID_CAPTCHA_CODE: 'Chybný CAPTCHA kód.',	
	TEXT_PLEASE_SELECT: 'Prosím vyberte',
	TEXT_CTRL_CLICK: 'CTRL + klik pro kombinované třídění',
	TEXT_SAVE: 'Uložit',
	TEXT_CANCEL: 'Zrušit',
	TEXT_PREVIEW: 'náhled',
	TEXT_HIDE: 'skrýt',
	TEXT_QUESTION_UNSAVED_CHANGES: 'Chcete opustit tuto stránku a ztratit neuložená data?',
	
	TEXT_EDIT: 'Editovat', 
	TEXT_COPY: 'Kopírovat',
	TEXT_VIEW: 'Zobrazit',
	TEXT_INLINE_EDIT: 'Editovat řádek',
	TEXT_INLINE_ADD: 'Vložit řádek',
	TEXT_AA_P_ADD: 'Přidat',

//	for calendar
	TEXT_MONTH_JAN: 'Leden',
	TEXT_MONTH_FEB: 'Únor',
	TEXT_MONTH_MAR: 'Březen',
	TEXT_MONTH_APR: 'Duben',
	TEXT_MONTH_MAY: 'Květen',
	TEXT_MONTH_JUN: 'Červen',
	TEXT_MONTH_JUL: 'Červenec',
	TEXT_MONTH_AUG: 'Srpen',
	TEXT_MONTH_SEP: 'Září',
	TEXT_MONTH_OCT: 'Říjen',
	TEXT_MONTH_NOV: 'Listopad',
	TEXT_MONTH_DEC: 'Prosinec',
	TEXT_DAY_SU: 'Neděle',
	TEXT_DAY_MO: 'Pondělí',
	TEXT_DAY_TU: 'Úterý',
	TEXT_DAY_WE: 'Středa',
	TEXT_DAY_TH: 'Čtvrtek',
	TEXT_DAY_FR: 'Pátek',
	TEXT_DAY_SA: 'Sobota',
	TEXT_TODAY: 'dnes',
	TEXT_SELECT_DATE: 'Vyber datum',
	TEXT_TIME: 'Čas',
	TEXT_TIME_HOUR: 'Hodina',
	TEXT_TIME_MINUTE: 'Minuta',
	TEXT_TIME_SECOND: 'Vteřina',
	
//	for inline message	
	TEXT_INLINE_FIELD_REQUIRED: 'Povinné pole',
	TEXT_INLINE_FIELD_ZIPCODE: 'Pole musí obsahovat platné smerovací číslo',
	TEXT_INLINE_FIELD_EMAIL: 'Hodnota pole musí být platná emailová adresa',
	TEXT_INLINE_FIELD_NUMBER: 'Hodnota pole musí obsahovat číslo',
	TEXT_INLINE_FIELD_CURRENCY: 'Hodnota pole musí obsahovat měnu',
	TEXT_INLINE_FIELD_PHONE: 'Hodnota pole musí obsahovat telefonní číslo',
	TEXT_INLINE_FIELD_PASSWORD1: 'Hodnota pole musí obsahovat platné heslo',
	TEXT_INLINE_FIELD_PASSWORD2: 'dlouhé alespoň 4 znaky.',
	TEXT_INLINE_FIELD_STATE: 'Pole musí obsahovat platný název státu US',
	TEXT_INLINE_FIELD_SSN: 'Hodnota pole musí obsahovat číslo sociálního pojištění (SSN US)',
	TEXT_INLINE_FIELD_DATE: 'Hodnota pole musí obsahovat datum',
	TEXT_INLINE_FIELD_TIME: 'Hodnota pole musí obsahovat platný 24 hod. časový formát',
	TEXT_INLINE_FIELD_CC: 'Hodnota pole musí obsahovat platné číslo platební karty',
	TEXT_INLINE_ERROR: 'Došlo k chybě',
	TEXT_INLINE_DENY_DUPLICATES: 'Pole nesmí obsahovat duplicitní hodnoty',
	TEXT_INLINE_USERNAME_EXISTS1: 'Uživatelské jméno', 
	TEXT_INLINE_USERNAME_EXISTS2: 'již existuje. Zvolte si prosím jiné.',
	TEXT_INLINE_EMAIL_ALREADY1: 'Email', 
	TEXT_INLINE_EMAIL_ALREADY2: 'již existuje. Pokud jste zapomněli uživatelské jméno nebo heslo, použijte formulář pro jeho zaslání na váš email.',

	//for RTE
	TEXT_VIEW_SOURCE: 'Zobrazit zdroj',
	//for tree-like menu
	TEXT_EXPAND_ALL: 'rozbal vše',
	TEXT_COLLAPSE_ALL: 'sbal vše',
	
	//for register page
	SEC_PWD_LEN: 'Heslo musí být minimálně %% znaků dlouhé.',
	SEC_PWD_CASE: 'Heslo musí obsahovat velká a malá písmena.',
	SEC_PWD_DIGIT: 'Heslo musí obsahovat %% čísel nebo symbolů.',
	SEC_PWD_UNIQUE: 'Heslo musí obsahovat %% unikátních znaků.',
	PASSWORDS_DONT_MATCH: 'Hesla sa neshodují.',
	SUCCES_LOGGED_IN: 'Jste přihlášeni',
	
	//for pdf
	TEXT_PDF_BUILD1: 'Vytváření PDF',
	TEXT_PDF_BUILD2: 'dokončeno',
	TEXT_PDF_BUILD3: 'Could not create PDF',

	CLOSE_WINDOW: 'Zavřít okno',
	RESET: 'Reset',
	
	//for search options
	CONTAINS: 'Obsahuje',
	EQUALS: 'je rovno',
	STARTS_WITH: 'Začíná na',
	MORE_THAN: 'Větší než',
	LESS_THAN: 'Menší než',
	BETWEEN: 'Mezi',
	EMPTY: 'Prázdný',
	
	NOT_CONTAINS: 'Neobsahuje',
	NOT_EQUALS: 'Není rovno',
	NOT_STARTS_WITH: 'Nezačíná',
	NOT_MORE_THAN: 'Není větší než',
	NOT_LESS_THAN: 'Není menší než',
	NOT_BETWEEN: 'Není mezi',
	NOT_EMPTY: 'Není prázdný',
	
	SEARCH_FOR: 'Hledat ',
	
	ERROR_MISSING_FILE_NAME: 'Název souboru není zadán',
	ERROR_ACCEPT_FILE_TYPES: 'Typ souboru není povolen',
	ERROR_MAX_FILE_SIZE: 'Velikost souboru přesahuje limit %s kB',
	ERROR_MIN_FILE_SIZE: 'Velikost souboru nesmí být menší než %s kB',
	ERROR_MAX_TOTAL_FILE_SIZE: 'Celkový objem souboru přesahuje limit %s kB',
	ERROR_MAX_NUMBER_OF_FILES_ONE: 'Můžete nahrát jenom jeden soubor',
	ERROR_MAX_NUMBER_OF_FILES_MANY: 'Nesmíte nahrát více než %s souboru',
	
	TEXT_SERVER_ERROR_OCCURRED: 'Server error occurred',
	TEXT_SEE_DETAILS: 'See details',

	ERROR_UPLOAD: 'Nahrávání souboru selhalo',
	START_UPLOAD: 'Nahrát',
	CANCEL: 'Zrušit',
	DELETE: 'Smazat',
	
	UPLOAD_DRAG: 'Přetáhnout soubory sem',
	
	SELECT_ALL: 'Vybrat vše',
	UNSELECT_ALL: 'Odznačit vše',
	
	TEXT_WR_REPORT_SAVED: 'Report byl uložen',
	TEXT_WR_SOME_PROBLEM: 'Problémy v průběhu uložení',
	TEXT_WR_CROSS_GROUP: 'Skupina',
	TEXT_WR_HEADER: 'Záhlaví',
	TEXT_WR_CROSS_GROUP: 'Skupina',
	TEXT_COUNT: 'Počet', 
	TEXT_MIN: 'Minimum',
	TEXT_MAX: 'Maximum', 
	TEXT_SUM: 'Součet',
	TEXT_AVG: 'Průměr',
	TEXT_WR_TOTAL_DATA: 'Tabulka dat', 
	TEXT_PAGE_SUMMARY: 'Souhrn za stránku',
	TEXT_GLOBAL_SUMMARY: 'Celkový souhrn',
	TEXT_WR_SUMMARY: 'Součet',
	TEXT_FIELD: 'Pole',
	TEXT_WR_NO_COLOR: 'Žádná barva',
	
	TEXT_SEARCH_SAVING: 'Uložená hledání',
	TEXT_SEARCH_NAME: 'Název hledání',
	TEXT_DELETE_SEARCH_CAPTION: 'Smazat uložená hledání',
	TEXT_DELETE_SEARCH: 'Opravdu chcete smazat tato hledání?',
	TEXT_YES: 'Ano',
	TEXT_NO: 'Ne',
	
	TEXT_FILTER_APPLY: 'Použít',
	TEXT_FILTER_CLEAR: 'vymazat',
	TEXT_FILTER_MULTISELECT: 'Multivýběr',
	
	// for rights page
	AA_ADD_NEW_GROUP: 'Přidat novou roli',
	AA_RENAMEGROUP: 'Přejmenovat roli',
	AA_GROUP_NEW: 'nová role',
	AA_DELETEGROUP: 'Opravdu chcete smazat roli?',
	AA_COPY_PERMISS_FROM: 'Vybrat skupinu ke zkopírování práv z ...',
	AA_CHOOSE_COLUMNS_TO_DIPLAY: 'Choose columns to display',
	AA_SELECT_NONE: 'Select none',
	AA_OK: 'OK',
	
	PREPARE_PAGE_FOR_PRINTING: 'Preparing page for printing',
	
	// import page
	IMPORT_PROCESSING_RECORDS: 'Processing records',
	IMPORT_FAILED: 'Import Failed'
};

Runner.lang.customlabels = {
	
	prefix: 'CUSTOM_LABEL_',
	
	// custom labels
};