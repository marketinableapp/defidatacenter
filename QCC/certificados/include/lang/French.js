Runner.namespace('Runner.lang');

Runner.lang.constants = {

	current_language: "French",
	
//	for list page
	TEXT_FIRST: 'Premier',
	TEXT_PREVIOUS: 'Précédent',
	TEXT_NEXT: 'Suivant',
	TEXT_LAST: 'Dernier',
	TEXT_PROCEED_TO: 'Continuez vers',
	TEXT_DETAIL_NOT_SAVED: 'Les enregistrements en %s n\'ont pas été sauvegardés',
	TEXT_NO_RECORDS: 'Pas d\'enregistrements trouvés',
	TEXT_DETAIL_GOTO: 'Aller vers',
	TEXT_SHOW_ALL: 'Montrer tout',
	TEXT_SHOW_OPTIONS: 'Montrer options',
	TEXT_HIDE_OPTIONS: 'Cacher options',
	TEXT_SEARCH_SHOW_OPTIONS:'Montrer les options de recherche',
	TEXT_SEARCH_HIDE_OPTIONS:'Cacher les options de recherche',
	TEXT_SHOW_SEARCH_PANEL:'Show search panel',
	TEXT_HIDE_SEARCH_PANEL:'Hide search panel',


	TEXT_LOADING: 'Charger',
	TEXT_DELETE_CONFIRM: 'Voulez-vous vraiment supprimer ces enregistrements?',
	TEXT_PAGE: 'Page',
	TEXT_PAGEMAX: 'de',

//	for editing pages	
	TEXT_INVALID_CAPTCHA_CODE: 'Code de sécurité non valable',	
	TEXT_PLEASE_SELECT: 'Sélectionner s.v.p.',
	TEXT_CTRL_CLICK: 'CTRL + clic pour multiple triage',
	TEXT_SAVE: 'Sauvegarder',
	TEXT_CANCEL: 'Annuler',
	TEXT_PREVIEW: 'Exemple',
	TEXT_HIDE: 'Cacher',
	TEXT_QUESTION_UNSAVED_CHANGES: 'Souhaitez-vous quitter cette page et perdre les modifications non-enregistrées?',
	
	TEXT_EDIT: 'Editer', 
	TEXT_COPY: 'Copier',
	TEXT_VIEW: 'Afficher',
	TEXT_INLINE_EDIT: 'Modifier dans la liste',
	TEXT_INLINE_ADD: 'Ajouter dans la liste',
	TEXT_AA_P_ADD: 'Ajouter',

//	for calendar
	TEXT_MONTH_JAN: 'Janvier',
	TEXT_MONTH_FEB: 'Février',
	TEXT_MONTH_MAR: 'Mars',
	TEXT_MONTH_APR: 'Avril',
	TEXT_MONTH_MAY: 'Mai',
	TEXT_MONTH_JUN: 'Juin',
	TEXT_MONTH_JUL: 'Juillet',
	TEXT_MONTH_AUG: 'Août',
	TEXT_MONTH_SEP: 'Septembre',
	TEXT_MONTH_OCT: 'Octobre',
	TEXT_MONTH_NOV: 'Novembre',
	TEXT_MONTH_DEC: 'Décembre',
	TEXT_DAY_SU: 'Di',
	TEXT_DAY_MO: 'Lu',
	TEXT_DAY_TU: 'Ma',
	TEXT_DAY_WE: 'Me',
	TEXT_DAY_TH: 'Je',
	TEXT_DAY_FR: 'Ve',
	TEXT_DAY_SA: 'Sa',
	TEXT_TODAY: 'Aujourd\'hui',
	TEXT_SELECT_DATE: 'Sélectionnez date',
	TEXT_TIME: 'Temps',
	TEXT_TIME_HOUR: 'Heure',
	TEXT_TIME_MINUTE: 'Minute',
	TEXT_TIME_SECOND: 'Seconde',
	
//	for inline message	
	TEXT_INLINE_FIELD_REQUIRED: 'Champ obligatoire',
	TEXT_INLINE_FIELD_ZIPCODE: 'Le champ doit contenir un code d\'acheminement postal valable',
	TEXT_INLINE_FIELD_EMAIL: 'Le champ doit contenir une adresse email valable',
	TEXT_INLINE_FIELD_NUMBER: 'Le champ doit contenir un nombre',
	TEXT_INLINE_FIELD_CURRENCY: 'Le champ doit contenir un monnaie valable',
	TEXT_INLINE_FIELD_PHONE: 'Le champ doit contenir un numéro de téléphone valable',
	TEXT_INLINE_FIELD_PASSWORD1: 'Le champ ne peut pas contenir le mot \'password\'',
	TEXT_INLINE_FIELD_PASSWORD2: 'Le champ doit contenir minimum 4 caractères',
	TEXT_INLINE_FIELD_STATE: 'Le champ doit contenir  un nom de pays',
	TEXT_INLINE_FIELD_SSN: 'Le champ doit contenir un numéro de sécurité social valable',
	TEXT_INLINE_FIELD_DATE: 'Le champ doit contenir une date valable',
	TEXT_INLINE_FIELD_TIME: 'Le champ doit contenir une heure dans le format 24 heures',
	TEXT_INLINE_FIELD_CC: 'Le champ doit contenir un numéro de carte de crédit valable',
	TEXT_INLINE_ERROR: 'Une erreur s\'est produite',
	TEXT_INLINE_DENY_DUPLICATES: 'Le champ ne devrait pas contenir de doublon',
	TEXT_INLINE_USERNAME_EXISTS1: 'Nom d\'utilisateur', 
	TEXT_INLINE_USERNAME_EXISTS2: 'existe deja. Choisir un autre nom d\'utilisateur.',
	TEXT_INLINE_EMAIL_ALREADY1: 'Courriel', 
	TEXT_INLINE_EMAIL_ALREADY2: 'déjà enregistré. Si vous avez oublié votre nom d\'utilisateur ou votre mot de passe utilisez la page retenir mot de passe',

	//for RTE
	TEXT_VIEW_SOURCE: 'Afficher la source',
	//for tree-like menu
	TEXT_EXPAND_ALL: 'déplier tout',
	TEXT_COLLAPSE_ALL: 'plier tout',
	
	//for register page
	SEC_PWD_LEN: 'Le mot de passe doit être composé de minimum %% caractères',
	SEC_PWD_CASE: 'Le mot de passe doit être composé de majuscules et minuscules',
	SEC_PWD_DIGIT: 'Le mot de passe doit être composé de minimum %% caractères ou symboles',
	SEC_PWD_UNIQUE: 'Le mot de passe doit être composé de minimum %% caractères distincts',
	PASSWORDS_DONT_MATCH: 'Mot de passe ne concorde pas',
	SUCCES_LOGGED_IN: 'Vous vous êtes connecté avec succès',
	
	//for pdf
	TEXT_PDF_BUILD1: 'Fichier PDF en création',
	TEXT_PDF_BUILD2: 'Fini',
	TEXT_PDF_BUILD3: 'Could not create PDF',

	CLOSE_WINDOW: 'Fermer fenêtre',
	RESET: 'Remettre',
	
	//for search options
	CONTAINS: 'Contient',
	EQUALS: 'Égal à',
	STARTS_WITH: 'Commence avec',
	MORE_THAN: 'Supérieure à',
	LESS_THAN: 'Inférieur à',
	BETWEEN: 'Entre',
	EMPTY: 'Vide',
	
	NOT_CONTAINS: 'Ne contient pas',
	NOT_EQUALS: 'N\'est pas égale à',
	NOT_STARTS_WITH: 'Ne commence pas avec',
	NOT_MORE_THAN: 'N\'est pas supérieur à',
	NOT_LESS_THAN: 'N\'est pas inférieur à',
	NOT_BETWEEN: 'N\'est pas entre',
	NOT_EMPTY: 'N\'est pas vide',
	
	SEARCH_FOR: 'Rechercher',
	
	ERROR_MISSING_FILE_NAME: 'Aucun nom de fichier n\'était indiqué',
	ERROR_ACCEPT_FILE_TYPES: 'Type de fichier inacceptable',
	ERROR_MAX_FILE_SIZE: 'Largeur du fichier excède la limite de %s kilo-octets',
	ERROR_MIN_FILE_SIZE: 'Largeur du fichier ne peut pas être inférieur de %s kilo-octets',
	ERROR_MAX_TOTAL_FILE_SIZE: 'Largeur total des fichiers excède la limite de %s kilo-octets',
	ERROR_MAX_NUMBER_OF_FILES_ONE: 'Vous ne pouvez télécharger qu\'un seul fichier',
	ERROR_MAX_NUMBER_OF_FILES_MANY: 'Vous ne pouvez télécharger que %s fichiers',
	
	TEXT_SERVER_ERROR_OCCURRED: 'Server error occurred',
	TEXT_SEE_DETAILS: 'See details',

	ERROR_UPLOAD: 'Téléchargement échoué',
	START_UPLOAD: 'Télécharger',
	CANCEL: 'Annuler',
	DELETE: 'Supprimer',
	
	UPLOAD_DRAG: 'Glissez les fichiers ici',
	
	SELECT_ALL: 'Sélectionner tout',
	UNSELECT_ALL: 'Désélectionner tout',
	
	TEXT_WR_REPORT_SAVED: 'Rapport sauvegardé',
	TEXT_WR_SOME_PROBLEM: 'Des problèmes se sont produits pendant la sauvegarde',
	TEXT_WR_CROSS_GROUP: 'Groupe',
	TEXT_WR_HEADER: 'En-tête',
	TEXT_WR_CROSS_GROUP: 'Groupe',
	TEXT_COUNT: 'Compter', 
	TEXT_MIN: 'Min',
	TEXT_MAX: 'Max', 
	TEXT_SUM: 'Somme',
	TEXT_AVG: 'Moyenne',
	TEXT_WR_TOTAL_DATA: 'Données de la table', 
	TEXT_PAGE_SUMMARY: 'Résumé pour la page',
	TEXT_GLOBAL_SUMMARY: 'Résumé général',
	TEXT_WR_SUMMARY: 'Résumé',
	TEXT_FIELD: 'Champ',
	TEXT_WR_NO_COLOR: 'Pas de couleur',
	
	TEXT_SEARCH_SAVING: 'Sauvegarde de recherche',
	TEXT_SEARCH_NAME: 'Nom de la sauvegarde de recherche:',
	TEXT_DELETE_SEARCH_CAPTION: 'Supprimer des sauvegardes de recherche',
	TEXT_DELETE_SEARCH: 'Voulez-vous vraiment supprimer cette recherche ?',
	TEXT_YES: 'Oui',
	TEXT_NO: 'Non',
	
	TEXT_FILTER_APPLY: 'Appliquer',
	TEXT_FILTER_CLEAR: 'effacer',
	TEXT_FILTER_MULTISELECT: 'Multisélection',
	
	// for rights page
	AA_ADD_NEW_GROUP: 'Ajouter un nouveau groupe',
	AA_RENAMEGROUP: 'Renommer groupe',
	AA_GROUP_NEW: 'nouveau_groupe',
	AA_DELETEGROUP: 'Est-ce que vous voulez vraiment supprimer le groupe',
	AA_COPY_PERMISS_FROM: 'Sélectionnez le groupe pour copier les permissions:',
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