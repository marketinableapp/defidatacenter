Runner.namespace('Runner.lang');

Runner.lang.constants = {

	current_language: "German",
	
//	for list page
	TEXT_FIRST: 'erste',
	TEXT_PREVIOUS: 'vorhergehende',
	TEXT_NEXT: 'nächster',
	TEXT_LAST: 'letzte',
	TEXT_PROCEED_TO: 'Fortfahren mit',
	TEXT_DETAIL_NOT_SAVED: 'Datensätze wurden seit %s nicht gesichert',
	TEXT_NO_RECORDS: 'Keine Datensätze gefunden',
	TEXT_DETAIL_GOTO: 'gehe zu',
	TEXT_SHOW_ALL: 'Alle anzeigen',
	TEXT_SHOW_OPTIONS: 'Optionen anzeigen',
	TEXT_HIDE_OPTIONS: 'Optionen ausblenden',
	TEXT_SEARCH_SHOW_OPTIONS:'Suchoptionen einblenden',
	TEXT_SEARCH_HIDE_OPTIONS:'Suchoptionen ausblenden',
	TEXT_SHOW_SEARCH_PANEL:'Show search panel',
	TEXT_HIDE_SEARCH_PANEL:'Hide search panel',


	TEXT_LOADING: 'wird geladen ...',
	TEXT_DELETE_CONFIRM: 'Wollen Sie diese Datensätze wirklich löschen?',
	TEXT_PAGE: 'Seite',
	TEXT_PAGEMAX: 'von',

//	for editing pages	
	TEXT_INVALID_CAPTCHA_CODE: 'Ungültiger Sicherheitscode',	
	TEXT_PLEASE_SELECT: 'Bitte auswählen',
	TEXT_CTRL_CLICK: 'CRTL + click für mehrfache Sortierung',
	TEXT_SAVE: 'Speichern',
	TEXT_CANCEL: 'abbrechen',
	TEXT_PREVIEW: 'Vorschau',
	TEXT_HIDE: 'ausblenden',
	TEXT_QUESTION_UNSAVED_CHANGES: 'Wenn Sie diese Seite verlassen, gehen alle ungesicherten Eingaben verloren!',
	
	TEXT_EDIT: 'Ändern', 
	TEXT_COPY: 'Kopie',
	TEXT_VIEW: 'Anzeigen',
	TEXT_INLINE_EDIT: 'inline ändern',
	TEXT_INLINE_ADD: 'inline hinzufügen',
	TEXT_AA_P_ADD: 'Hinzufügen',

//	for calendar
	TEXT_MONTH_JAN: 'Januar',
	TEXT_MONTH_FEB: 'Februar',
	TEXT_MONTH_MAR: 'März',
	TEXT_MONTH_APR: 'April',
	TEXT_MONTH_MAY: 'Mai',
	TEXT_MONTH_JUN: 'Juni',
	TEXT_MONTH_JUL: 'Juli',
	TEXT_MONTH_AUG: 'August',
	TEXT_MONTH_SEP: 'September',
	TEXT_MONTH_OCT: 'Oktober',
	TEXT_MONTH_NOV: 'November',
	TEXT_MONTH_DEC: 'Dezember',
	TEXT_DAY_SU: 'So',
	TEXT_DAY_MO: 'Mo',
	TEXT_DAY_TU: 'Di',
	TEXT_DAY_WE: 'Mi',
	TEXT_DAY_TH: 'Do',
	TEXT_DAY_FR: 'Fr',
	TEXT_DAY_SA: 'Sa',
	TEXT_TODAY: 'heute',
	TEXT_SELECT_DATE: 'Datum auswählen',
	TEXT_TIME: 'Zeit',
	TEXT_TIME_HOUR: 'Stunde',
	TEXT_TIME_MINUTE: 'Minute',
	TEXT_TIME_SECOND: 'Sekunde',
	
//	for inline message	
	TEXT_INLINE_FIELD_REQUIRED: 'Benötigtes Feld',
	TEXT_INLINE_FIELD_ZIPCODE: 'Feld soll eine gültige Postleitzahl beinhalten',
	TEXT_INLINE_FIELD_EMAIL: 'Feld soll eine gültige E-mail Adresse beinhalten',
	TEXT_INLINE_FIELD_NUMBER: 'Feld soll eine Nummer beinhalten',
	TEXT_INLINE_FIELD_CURRENCY: 'Feld soll das Währungsformat beinhalten',
	TEXT_INLINE_FIELD_PHONE: 'Feld soll eine Telefon-Nummer beinhalten',
	TEXT_INLINE_FIELD_PASSWORD1: 'Feld kann nicht \'password\' sein',
	TEXT_INLINE_FIELD_PASSWORD2: 'Feld sollte mindestens 4 Zeichen lang sein',
	TEXT_INLINE_FIELD_STATE: 'Feld soll den Namen eines Bundeslandes beinhalten',
	TEXT_INLINE_FIELD_SSN: 'Feld soll eine Sozialversicherungsnummer beinhalten',
	TEXT_INLINE_FIELD_DATE: 'Feld soll ein gültiges Datum beinhalten',
	TEXT_INLINE_FIELD_TIME: 'Feld soll ein gültiges 24-Stundenformat beinhalten ',
	TEXT_INLINE_FIELD_CC: 'Feld soll eine gültige Kreditkartennummer beinhalten',
	TEXT_INLINE_ERROR: 'Ein Fehler ist aufgetreten',
	TEXT_INLINE_DENY_DUPLICATES: 'Feld sollte keine Dubletten enthalten!',
	TEXT_INLINE_USERNAME_EXISTS1: 'Benutzername', 
	TEXT_INLINE_USERNAME_EXISTS2: 'besteht bereits. Wählen Sie einen anderen.',
	TEXT_INLINE_EMAIL_ALREADY1: 'Email', 
	TEXT_INLINE_EMAIL_ALREADY2: 'besteht bereits. Sollten Sie ihren Benutzernamen oder Ihr Passwort vergessen haben, benutzen Sie das “Passwort vergessen” Formular.',

	//for RTE
	TEXT_VIEW_SOURCE: 'Quelle anzeigen',
	//for tree-like menu
	TEXT_EXPAND_ALL: 'alles aufklappen',
	TEXT_COLLAPSE_ALL: 'alles zusammenklappen',
	
	//for register page
	SEC_PWD_LEN: 'das Passwort muß mindestens %% Zeichen lang sein',
	SEC_PWD_CASE: 'Passwort muß Buchstaben in Groß- und Kleinschrift enthalten',
	SEC_PWD_DIGIT: 'Passwort mu %% Ziffern oder Sonderzeichen enthalten',
	SEC_PWD_UNIQUE: 'das Passwort muß %% eindeutige Zeichen enthalten',
	PASSWORDS_DONT_MATCH: 'Passwörter stimmen nicht überein',
	SUCCES_LOGGED_IN: 'Sie haben sich erfolgreich angemeldet.',
	
	//for pdf
	TEXT_PDF_BUILD1: 'PDF-Datei erstellen',
	TEXT_PDF_BUILD2: 'fertig',
	TEXT_PDF_BUILD3: 'Could not create PDF',

	CLOSE_WINDOW: 'Fenster schließen',
	RESET: 'Zurücksetzen',
	
	//for search options
	CONTAINS: 'Enthält',
	EQUALS: 'Ist gleich',
	STARTS_WITH: 'Beginnt mit',
	MORE_THAN: 'Größer als',
	LESS_THAN: 'Kleiner als',
	BETWEEN: 'Zwischen',
	EMPTY: 'Leer',
	
	NOT_CONTAINS: 'Enthält nicht',
	NOT_EQUALS: 'ist nicht gleich',
	NOT_STARTS_WITH: 'Beginnt nicht mit',
	NOT_MORE_THAN: 'ist nicht größer als',
	NOT_LESS_THAN: 'ist nicht kleiner als',
	NOT_BETWEEN: 'liegt nicht zwischen .. und ..',
	NOT_EMPTY: 'ist nicht leer',
	
	SEARCH_FOR: 'Suche nach',
	
	ERROR_MISSING_FILE_NAME: 'Kein Dateiname angegeben',
	ERROR_ACCEPT_FILE_TYPES: 'Dateityp ungültig',
	ERROR_MAX_FILE_SIZE: 'Die Datei darf max. %s kBytes groß sein!',
	ERROR_MIN_FILE_SIZE: 'Die Datei darf nicht kleiner als %s kBytes sein!',
	ERROR_MAX_TOTAL_FILE_SIZE: 'Die Speichergröße aller Dateien darf max. %s kBytes sein!',
	ERROR_MAX_NUMBER_OF_FILES_ONE: 'Sie können nur eine Datei hochladen.',
	ERROR_MAX_NUMBER_OF_FILES_MANY: 'Sie können nur %s Dateien hochladen.',
	
	TEXT_SERVER_ERROR_OCCURRED: 'Server error occurred',
	TEXT_SEE_DETAILS: 'See details',

	ERROR_UPLOAD: 'Der Upload wurde abgebrochen.',
	START_UPLOAD: 'Hochladen',
	CANCEL: 'abbrechen',
	DELETE: 'Löschen',
	
	UPLOAD_DRAG: 'Dateien hierher ziehen',
	
	SELECT_ALL: 'Alle auswählen',
	UNSELECT_ALL: 'Alle abwählen',
	
	TEXT_WR_REPORT_SAVED: 'Report gesichert',
	TEXT_WR_SOME_PROBLEM: 'Bei der Sicherung gab es ein Problem.',
	TEXT_WR_CROSS_GROUP: 'Gruppe',
	TEXT_WR_HEADER: 'Kopfzeile',
	TEXT_WR_CROSS_GROUP: 'Gruppe',
	TEXT_COUNT: 'Anzahl', 
	TEXT_MIN: 'Minimum',
	TEXT_MAX: 'Maximum', 
	TEXT_SUM: 'Summe',
	TEXT_AVG: 'Durchschnitt',
	TEXT_WR_TOTAL_DATA: 'Tabelleninhalt', 
	TEXT_PAGE_SUMMARY: 'Zusammenfassung (Seite)',
	TEXT_GLOBAL_SUMMARY: 'Zusammenfassung (Global)',
	TEXT_WR_SUMMARY: 'Zusammenfassung',
	TEXT_FIELD: 'Feld',
	TEXT_WR_NO_COLOR: 'Keine Farbe',
	
	TEXT_SEARCH_SAVING: 'Suchabfrage wird gesichert',
	TEXT_SEARCH_NAME: 'Suchabfragen-Name:',
	TEXT_DELETE_SEARCH_CAPTION: 'Gespeicherte Suchabfrage löschen',
	TEXT_DELETE_SEARCH: 'Wollen Sie die Suchabfrage wirklich löschen?',
	TEXT_YES: 'Ja',
	TEXT_NO: 'Nein',
	
	TEXT_FILTER_APPLY: 'Anwenden',
	TEXT_FILTER_CLEAR: 'löschen',
	TEXT_FILTER_MULTISELECT: 'Multiauswahl',
	
	// for rights page
	AA_ADD_NEW_GROUP: 'neue Gruppe hinzufügen',
	AA_RENAMEGROUP: 'Gruppe umbenennen',
	AA_GROUP_NEW: 'neue Gruppe  (but in this text : the default name of a new group...must be translateted as : ',
	AA_DELETEGROUP: 'Wollen Sie wirklich die Gruppe löschen',
	AA_COPY_PERMISS_FROM: 'Bitte Gruppe zum Kopieren der Berechtigungen wählen:',
	AA_CHOOSE_COLUMNS_TO_DIPLAY: 'Darzustellende Spalten wählen',
	AA_SELECT_NONE: 'Nichts auswählen',
	AA_OK: 'OK',
	
	PREPARE_PAGE_FOR_PRINTING: 'Druckvorbereitung...',
	
	// import page
	IMPORT_PROCESSING_RECORDS: 'Datensätze werden verarbeitet',
	IMPORT_FAILED: 'Import Failed'
};

Runner.lang.customlabels = {
	
	prefix: 'CUSTOM_LABEL_',
	
	// custom labels
};