Runner.namespace('Runner.lang');

Runner.lang.constants = {

	current_language: "Dutch",
	
//	for list page
	TEXT_FIRST: 'Eerste',
	TEXT_PREVIOUS: 'Vorige',
	TEXT_NEXT: 'Volgende',
	TEXT_LAST: 'Laatste',
	TEXT_PROCEED_TO: 'Ga door naar',
	TEXT_DETAIL_NOT_SAVED: 'Records in %s zijn niet opgeslagen',
	TEXT_NO_RECORDS: 'Geen records gevonden',
	TEXT_DETAIL_GOTO: 'Ga naar',
	TEXT_SHOW_ALL: 'Toon alles',
	TEXT_SHOW_OPTIONS: 'Opties tonen',
	TEXT_HIDE_OPTIONS: 'Opties verbergen',
	TEXT_SEARCH_SHOW_OPTIONS:'Zoekopties tonen',
	TEXT_SEARCH_HIDE_OPTIONS:'Zoekopties verbergen',
	TEXT_SHOW_SEARCH_PANEL:'Show search panel',
	TEXT_HIDE_SEARCH_PANEL:'Hide search panel',


	TEXT_LOADING: 'Laden',
	TEXT_DELETE_CONFIRM: 'Wilt u deze records echt verwijderen?',
	TEXT_PAGE: 'Pagina',
	TEXT_PAGEMAX: 'van',

//	for editing pages	
	TEXT_INVALID_CAPTCHA_CODE: 'Verkeerde beveiligingscode.',	
	TEXT_PLEASE_SELECT: 'A.u.b. selecteren',
	TEXT_CTRL_CLICK: 'CTRL + klik voor meerdere sorteringen',
	TEXT_SAVE: 'Opslaan',
	TEXT_CANCEL: 'Annuleren',
	TEXT_PREVIEW: 'Voobeeld',
	TEXT_HIDE: 'Verbergen',
	TEXT_QUESTION_UNSAVED_CHANGES: 'Wilt u de pagina verlaten zonder de gegevens op te slaan?',
	
	TEXT_EDIT: 'Bewerken', 
	TEXT_COPY: 'Kopiëren',
	TEXT_VIEW: 'Tonen',
	TEXT_INLINE_EDIT: 'Bewerken in de lijst',
	TEXT_INLINE_ADD: 'Toevoegen in lijst',
	TEXT_AA_P_ADD: 'Toevoegen',

//	for calendar
	TEXT_MONTH_JAN: 'Januari',
	TEXT_MONTH_FEB: 'Februari',
	TEXT_MONTH_MAR: 'Maart',
	TEXT_MONTH_APR: 'April',
	TEXT_MONTH_MAY: 'Mei',
	TEXT_MONTH_JUN: 'Juni',
	TEXT_MONTH_JUL: 'Juli',
	TEXT_MONTH_AUG: 'Augustus',
	TEXT_MONTH_SEP: 'September',
	TEXT_MONTH_OCT: 'Oktober',
	TEXT_MONTH_NOV: 'November',
	TEXT_MONTH_DEC: 'December',
	TEXT_DAY_SU: 'Zo',
	TEXT_DAY_MO: 'Mo',
	TEXT_DAY_TU: 'Di',
	TEXT_DAY_WE: 'Wo',
	TEXT_DAY_TH: 'Do',
	TEXT_DAY_FR: 'Vr',
	TEXT_DAY_SA: 'Za',
	TEXT_TODAY: 'vandaag',
	TEXT_SELECT_DATE: 'Selecteer datum',
	TEXT_TIME: 'Tijd',
	TEXT_TIME_HOUR: 'Uur',
	TEXT_TIME_MINUTE: 'Minuten',
	TEXT_TIME_SECOND: 'Seconden',
	
//	for inline message	
	TEXT_INLINE_FIELD_REQUIRED: 'Verplicht veld',
	TEXT_INLINE_FIELD_ZIPCODE: 'Invoer moet een geldige postcode zijn',
	TEXT_INLINE_FIELD_EMAIL: 'Invoer moet een geldig email adres zijn',
	TEXT_INLINE_FIELD_NUMBER: 'Invoer moet een geldig getal zijn',
	TEXT_INLINE_FIELD_CURRENCY: 'Invoer moet een geldige valuta zijn',
	TEXT_INLINE_FIELD_PHONE: 'Invoer moet een geldig telefoonnummer zijn',
	TEXT_INLINE_FIELD_PASSWORD1: 'Invoer kan geen \'password\' zijn',
	TEXT_INLINE_FIELD_PASSWORD2: 'Invoer moet minsten 4 karakters lang zijn',
	TEXT_INLINE_FIELD_STATE: 'Invoer moet een geldig \'US staat naam\' zijn',
	TEXT_INLINE_FIELD_SSN: 'Invoer moet een geldig Sociaal Zekerheid nummer zijn',
	TEXT_INLINE_FIELD_DATE: 'Invoer moet een geldige datum zijn',
	TEXT_INLINE_FIELD_TIME: 'Invoer moet een geldige tijdsaanduiding zijn in \'24u formaat\'',
	TEXT_INLINE_FIELD_CC: 'Invoer moet een geldig credit card nummer zijn',
	TEXT_INLINE_ERROR: 'Fout opgetreden',
	TEXT_INLINE_DENY_DUPLICATES: 'Mag geen duplicaten bevatten',
	TEXT_INLINE_USERNAME_EXISTS1: 'Gebruikersnaam', 
	TEXT_INLINE_USERNAME_EXISTS2: 'bestaat al. Kies een andere gebruikersnaam.',
	TEXT_INLINE_EMAIL_ALREADY1: 'Email', 
	TEXT_INLINE_EMAIL_ALREADY2: 'al geregistreerd. Als u uw gebruikersnaam of wachtwoord bent vergeten gebruik dan het formulier \'wachtwoord herinnering\'',

	//for RTE
	TEXT_VIEW_SOURCE: 'Bron tonen',
	//for tree-like menu
	TEXT_EXPAND_ALL: 'alles uitklappen',
	TEXT_COLLAPSE_ALL: 'alles inklappen',
	
	//for register page
	SEC_PWD_LEN: 'Wachtwoord dient minimaal %% karakters te zijn.',
	SEC_PWD_CASE: 'Het wachtwoord dient te bestaan uit kleine letters en hoofdletters.',
	SEC_PWD_DIGIT: 'Wachtwoord dient minimaal %% cijfers of symbolen te bevatten.',
	SEC_PWD_UNIQUE: 'Wachtwoord dient %% unieke karakters te bevatten.',
	PASSWORDS_DONT_MATCH: 'Wachtwoorden komen niet overeen',
	SUCCES_LOGGED_IN: 'U bent succesvol ingelogd',
	
	//for pdf
	TEXT_PDF_BUILD1: 'PDF bestand wordt aangemaakt',
	TEXT_PDF_BUILD2: 'Klaar',
	TEXT_PDF_BUILD3: 'Could not create PDF',

	CLOSE_WINDOW: 'Venster sluiten',
	RESET: 'Terugzetten',
	
	//for search options
	CONTAINS: 'Bevat',
	EQUALS: 'Gelijk aan',
	STARTS_WITH: 'Begint met',
	MORE_THAN: 'Groter dan',
	LESS_THAN: 'Kleiner dan',
	BETWEEN: 'Tussen',
	EMPTY: 'Leeg',
	
	NOT_CONTAINS: 'Bevat niet',
	NOT_EQUALS: 'Is niet gelijk aan',
	NOT_STARTS_WITH: 'Begint niet met',
	NOT_MORE_THAN: 'Is niet meer dan',
	NOT_LESS_THAN: 'Is niet kleiner dan',
	NOT_BETWEEN: 'Is niet tussen',
	NOT_EMPTY: 'Is niet leeg',
	
	SEARCH_FOR: 'Zoek naar',
	
	ERROR_MISSING_FILE_NAME: 'Bestandsnaam was niet gegeven',
	ERROR_ACCEPT_FILE_TYPES: 'Bestand type is niet acceptabel',
	ERROR_MAX_FILE_SIZE: 'Bestandsgrootte overschrijdt limiet van %s kbytes',
	ERROR_MIN_FILE_SIZE: 'Bestandsgrootte kan niet minder zijn %s kbytes',
	ERROR_MAX_TOTAL_FILE_SIZE: 'Totale bestandsgrootte overschrijdt limiet van %s kbytes',
	ERROR_MAX_NUMBER_OF_FILES_ONE: 'U kunt slechts 1 bestand uploaden',
	ERROR_MAX_NUMBER_OF_FILES_MANY: 'U kunt niet meer dan %s bestanden uploaden',
	
	TEXT_SERVER_ERROR_OCCURRED: 'Server error occurred',
	TEXT_SEE_DETAILS: 'See details',

	ERROR_UPLOAD: 'Uploaden niet gelukt',
	START_UPLOAD: 'Uploaden',
	CANCEL: 'Annuleren',
	DELETE: 'Verwijderen',
	
	UPLOAD_DRAG: 'Sleep bestanden naar hier',
	
	SELECT_ALL: 'Selecteer alles',
	UNSELECT_ALL: 'Deselecteer alles',
	
	TEXT_WR_REPORT_SAVED: 'Rapportage bewaard',
	TEXT_WR_SOME_PROBLEM: 'Er zijn fouten opgetreden tijdens het opslaan',
	TEXT_WR_CROSS_GROUP: 'Groep',
	TEXT_WR_HEADER: 'Koptekst',
	TEXT_WR_CROSS_GROUP: 'Groep',
	TEXT_COUNT: 'Tellen', 
	TEXT_MIN: 'Min',
	TEXT_MAX: 'Max', 
	TEXT_SUM: 'Som',
	TEXT_AVG: 'Gem.',
	TEXT_WR_TOTAL_DATA: 'Tabel gegevens', 
	TEXT_PAGE_SUMMARY: 'Pagina samenvatting',
	TEXT_GLOBAL_SUMMARY: 'Globale samenvatting',
	TEXT_WR_SUMMARY: 'Samenvatting',
	TEXT_FIELD: 'Veld',
	TEXT_WR_NO_COLOR: 'Geen kleur',
	
	TEXT_SEARCH_SAVING: 'Selectie opslaan',
	TEXT_SEARCH_NAME: 'Selectie naam:',
	TEXT_DELETE_SEARCH_CAPTION: 'Verwijderen bewaarde selectie',
	TEXT_DELETE_SEARCH: 'Weet u zeker dat u deze selectie wilt verwijderen?',
	TEXT_YES: 'Ja',
	TEXT_NO: 'Nee',
	
	TEXT_FILTER_APPLY: 'Toepassen',
	TEXT_FILTER_CLEAR: 'wissen',
	TEXT_FILTER_MULTISELECT: 'Multiselectie',
	
	// for rights page
	AA_ADD_NEW_GROUP: 'Nieuwe groep toevoegen',
	AA_RENAMEGROUP: 'Groep hernoemen',
	AA_GROUP_NEW: 'nieuwe groep',
	AA_DELETEGROUP: 'Wilt u de volgende groep echt verwijderen',
	AA_COPY_PERMISS_FROM: 'Kies de groep om rechten van te kopieren',
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