
function switchLang() {
    const lang = document.documentElement.lang;
    if (lang === "ar") {
        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";
        window.location.reload(); // تبسيط التبديل في النموذج المبدئي
    } else {
        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";
        window.location.reload();
    }
}
