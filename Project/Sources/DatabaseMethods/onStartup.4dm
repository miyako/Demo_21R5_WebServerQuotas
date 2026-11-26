

var $systemLanguage:=Get database localization(User system localization)
var $language:=($systemLanguage="ja@") ? "ja" : "en"

SET DATABASE LOCALIZATION($language)
