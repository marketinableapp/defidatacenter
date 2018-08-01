Runner.namespace('Runner.lang');

Runner.lang.constants = {

	current_language: "Danish",
	
//	for list page
	TEXT_FIRST: 'Første',
	TEXT_PREVIOUS: 'Tilbage',
	TEXT_NEXT: 'Næste',
	TEXT_LAST: 'Sidste',
	TEXT_PROCEED_TO: 'Fortsæt til',
	TEXT_DETAIL_NOT_SAVED: 'Posten i %s er ikke blevet gemt',
	TEXT_NO_RECORDS: 'Ingen records fundet',
	TEXT_DETAIL_GOTO: 'Gå til',
	TEXT_SHOW_ALL: 'Vis alle',
	TEXT_SHOW_OPTIONS: 'Vis optioner',
	TEXT_HIDE_OPTIONS: 'Gem optioner',
	TEXT_SEARCH_SHOW_OPTIONS:'Vis søge optioner',
	TEXT_SEARCH_HIDE_OPTIONS:'Gem søge optioner',
	TEXT_SHOW_SEARCH_PANEL:'Show search panel',
	TEXT_HIDE_SEARCH_PANEL:'Hide search panel',


	TEXT_LOADING: 'laster',
	TEXT_DELETE_CONFIRM: 'Sikker paa du vil slette disse records',
	TEXT_PAGE: 'Side',
	TEXT_PAGEMAX: 'af',

//	for editing pages	
	TEXT_INVALID_CAPTCHA_CODE: 'Ugyldig sikkerhedskode',	
	TEXT_PLEASE_SELECT: 'Vælg venligst',
	TEXT_CTRL_CLICK: 'CTRL + klik for avanceret sortering',
	TEXT_SAVE: 'Gem',
	TEXT_CANCEL: 'Afbryd',
	TEXT_PREVIEW: 'Forhåndsvisning',
	TEXT_HIDE: 'Skjul',
	TEXT_QUESTION_UNSAVED_CHANGES: 'Vil du navigere væk fra denne side? Du mister alle ændringer.',
	
	TEXT_EDIT: 'Ret', 
	TEXT_COPY: 'Kopier',
	TEXT_VIEW: 'Vis',
	TEXT_INLINE_EDIT: 'Ret',
	TEXT_INLINE_ADD: 'Tilføj ny',
	TEXT_AA_P_ADD: 'Tilføj',

//	for calendar
	TEXT_MONTH_JAN: 'Januar',
	TEXT_MONTH_FEB: 'Februar',
	TEXT_MONTH_MAR: 'Marts',
	TEXT_MONTH_APR: 'April',
	TEXT_MONTH_MAY: 'Maj',
	TEXT_MONTH_JUN: 'Juni',
	TEXT_MONTH_JUL: 'Juli',
	TEXT_MONTH_AUG: 'August',
	TEXT_MONTH_SEP: 'September',
	TEXT_MONTH_OCT: 'Oktober',
	TEXT_MONTH_NOV: 'November',
	TEXT_MONTH_DEC: 'December',
	TEXT_DAY_SU: 'Sø',
	TEXT_DAY_MO: 'Ma',
	TEXT_DAY_TU: 'Ti',
	TEXT_DAY_WE: 'On',
	TEXT_DAY_TH: 'To',
	TEXT_DAY_FR: 'Fr',
	TEXT_DAY_SA: 'Lø',
	TEXT_TODAY: 'idag',
	TEXT_SELECT_DATE: 'Vælg dato',
	TEXT_TIME: 'Tid',
	TEXT_TIME_HOUR: 'Time',
	TEXT_TIME_MINUTE: 'Minut',
	TEXT_TIME_SECOND: 'Sekund',
	
//	for inline message	
	TEXT_INLINE_FIELD_REQUIRED: 'Påkrævet felt',
	TEXT_INLINE_FIELD_ZIPCODE: 'Felt skal være gyldigt postnummer',
	TEXT_INLINE_FIELD_EMAIL: 'Felt skal være gyldig email',
	TEXT_INLINE_FIELD_NUMBER: 'Felt skal være nummer',
	TEXT_INLINE_FIELD_CURRENCY: 'Feltet skal være valuta',
	TEXT_INLINE_FIELD_PHONE: 'Felst skal være telefon nummer',
	TEXT_INLINE_FIELD_PASSWORD1: 'Felt kan ikke være password',
	TEXT_INLINE_FIELD_PASSWORD2: 'Felst skal være på mindst 4 karaktere',
	TEXT_INLINE_FIELD_STATE: 'Felst skal være by navn',
	TEXT_INLINE_FIELD_SSN: 'Felst skal være personnummer',
	TEXT_INLINE_FIELD_DATE: 'Felst skal være gyldig dato',
	TEXT_INLINE_FIELD_TIME: 'Felt skal være i 24 timers format',
	TEXT_INLINE_FIELD_CC: 'Feltet skal indeholde gyldigt kreditkort nummer',
	TEXT_INLINE_ERROR: 'Fejl opstod ',
	TEXT_INLINE_DENY_DUPLICATES: 'Feltet må ikke indeholde duplikerede værdier',
	TEXT_INLINE_USERNAME_EXISTS1: 'Brugernavn', 
	TEXT_INLINE_USERNAME_EXISTS2: 'eksistere allerede, Vælg et andet brugernavn',
	TEXT_INLINE_EMAIL_ALREADY1: 'Email', 
	TEXT_INLINE_EMAIL_ALREADY2: 'allerede registreret. Hvis du har glemt brugernavn og password , brug formen glemt password',

	//for RTE
	TEXT_VIEW_SOURCE: 'Vis kilde',
	//for tree-like menu
	TEXT_EXPAND_ALL: 'Vis detaljer',
	TEXT_COLLAPSE_ALL: 'Skjul detaljer',
	
	//for register page
	SEC_PWD_LEN: 'Pasordet skal være mindst %% karakterer',
	SEC_PWD_CASE: 'Pasordet skal indeholde store og små bogstaver',
	SEC_PWD_DIGIT: 'Pasordet skal indeholde %% tal eller symboler',
	SEC_PWD_UNIQUE: 'Pasordet skal indeholde %% forskellige karakterer',
	PASSWORDS_DONT_MATCH: 'Passwords matcher ikke ',
	SUCCES_LOGGED_IN: 'Du er logget på',
	
	//for pdf
	TEXT_PDF_BUILD1: 'Genererer PDF',
	TEXT_PDF_BUILD2: 'udført',
	TEXT_PDF_BUILD3: 'Could not create PDF',

	CLOSE_WINDOW: 'Luk vindue',
	RESET: 'Nulstil',
	
	//for search options
	CONTAINS: 'Indeholder',
	EQUALS: 'Lig med',
	STARTS_WITH: 'Starter med',
	MORE_THAN: 'Mere end',
	LESS_THAN: 'Mindre end',
	BETWEEN: 'Imellem',
	EMPTY: 'Tomt felt',
	
	NOT_CONTAINS: 'Indeholder ikke',
	NOT_EQUALS: 'Er ikke samme som',
	NOT_STARTS_WITH: 'Starter ikke med',
	NOT_MORE_THAN: 'Er ikke mere end',
	NOT_LESS_THAN: 'Er ikke mindre end',
	NOT_BETWEEN: 'Er ikke imellem',
	NOT_EMPTY: 'Er ikke tom',
	
	SEARCH_FOR: 'Søg efter',
	
	ERROR_MISSING_FILE_NAME: 'Der skal angives et navn',
	ERROR_ACCEPT_FILE_TYPES: 'Filtypen matcher ikke',
	ERROR_MAX_FILE_SIZE: 'Fil størrelsen overskrider de tilladte %s kbytes',
	ERROR_MIN_FILE_SIZE: 'Fil størrelsen kan ikke være mindre end %s kbytes',
	ERROR_MAX_TOTAL_FILE_SIZE: 'Den totale fil størrelse overskrider de tilladte %s kbytes',
	ERROR_MAX_NUMBER_OF_FILES_ONE: 'Der kan kun overføres en fil',
	ERROR_MAX_NUMBER_OF_FILES_MANY: 'Du kan kun overføre %s filer',
	
	TEXT_SERVER_ERROR_OCCURRED: 'Server error occurred',
	TEXT_SEE_DETAILS: 'See details',

	ERROR_UPLOAD: 'Overførelsen fejlede',
	START_UPLOAD: 'Overfør',
	CANCEL: 'Afbryd',
	DELETE: 'Slet',
	
	UPLOAD_DRAG: 'Træk filer ind her',
	
	SELECT_ALL: 'Vælg alle',
	UNSELECT_ALL: 'Fravælg alle',
	
	TEXT_WR_REPORT_SAVED: 'Rapporten er gemt',
	TEXT_WR_SOME_PROBLEM: 'Der er opstået nogle problemer under gem',
	TEXT_WR_CROSS_GROUP: 'Gruppe',
	TEXT_WR_HEADER: 'Side hoved',
	TEXT_WR_CROSS_GROUP: 'Gruppe',
	TEXT_COUNT: 'Tæl', 
	TEXT_MIN: 'Min',
	TEXT_MAX: 'Max', 
	TEXT_SUM: 'Sum',
	TEXT_AVG: 'Gns',
	TEXT_WR_TOTAL_DATA: 'Tabel daga', 
	TEXT_PAGE_SUMMARY: 'Side oversigt',
	TEXT_GLOBAL_SUMMARY: 'Total oversigt ',
	TEXT_WR_SUMMARY: 'Opsummering',
	TEXT_FIELD: 'Felt',
	TEXT_WR_NO_COLOR: 'Ingen farve',
	
	TEXT_SEARCH_SAVING: 'Søg gemte',
	TEXT_SEARCH_NAME: 'Søg navn:',
	TEXT_DELETE_SEARCH_CAPTION: 'Slet gemt søgning',
	TEXT_DELETE_SEARCH: 'Er du sikker på at du vil slette denne søgning?',
	TEXT_YES: 'Ja',
	TEXT_NO: 'Nej',
	
	TEXT_FILTER_APPLY: 'Anvende',
	TEXT_FILTER_CLEAR: 'klart',
	TEXT_FILTER_MULTISELECT: 'Multivælge',
	
	// for rights page
	AA_ADD_NEW_GROUP: 'Tilføj ny gruppe',
	AA_RENAMEGROUP: 'Ændre navn på gruppe',
	AA_GROUP_NEW: 'Ny gruppe',
	AA_DELETEGROUP: 'Vil du virkelig slette denne gruppe',
	AA_COPY_PERMISS_FROM: 'Vælg Gruppen du vil kopiere tilladelser fra:',
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