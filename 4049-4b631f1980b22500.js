(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4049], {
        7835: function(n, e, t) {
            var r;
            ! function() {
                var u = language(function(n) {
                        return 1 === n ? "χρόνος" : "χρόνια"
                    }, function(n) {
                        return 1 === n ? "μήνας" : "μήνες"
                    }, function(n) {
                        return 1 === n ? "εβδομάδα" : "εβδομάδες"
                    }, function(n) {
                        return 1 === n ? "μέρα" : "μέρες"
                    }, function(n) {
                        return 1 === n ? "ώρα" : "ώρες"
                    }, function(n) {
                        return 1 === n ? "λεπτό" : "λεπτά"
                    }, function(n) {
                        return 1 === n ? "δευτερόλεπτο" : "δευτερόλεπτα"
                    }, function(n) {
                        return (1 === n ? "χιλιοστό" : "χιλιοστά") + " του δευτερολέπτου"
                    }, ","),
                    i = {
                        af: language("jaar", function(n) {
                            return "maand" + (1 === n ? "" : "e")
                        }, function(n) {
                            return 1 === n ? "week" : "weke"
                        }, function(n) {
                            return 1 === n ? "dag" : "dae"
                        }, function(n) {
                            return 1 === n ? "uur" : "ure"
                        }, function(n) {
                            return 1 === n ? "minuut" : "minute"
                        }, function(n) {
                            return "sekonde" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "millisekonde" + (1 === n ? "" : "s")
                        }, ","),
                        ar: assign(language(function(n) {
                            return ["سنة", "سنتان", "سنوات"][getArabicForm(n)]
                        }, function(n) {
                            return ["شهر", "شهران", "أشهر"][getArabicForm(n)]
                        }, function(n) {
                            return ["أسبوع", "أسبوعين", "أسابيع"][getArabicForm(n)]
                        }, function(n) {
                            return ["يوم", "يومين", "أيام"][getArabicForm(n)]
                        }, function(n) {
                            return ["ساعة", "ساعتين", "ساعات"][getArabicForm(n)]
                        }, function(n) {
                            return ["دقيقة", "دقيقتان", "دقائق"][getArabicForm(n)]
                        }, function(n) {
                            return ["ثانية", "ثانيتان", "ثواني"][getArabicForm(n)]
                        }, function(n) {
                            return ["جزء من الثانية", "جزآن من الثانية", "أجزاء من الثانية"][getArabicForm(n)]
                        }, ","), {
                            delimiter: " ﻭ ",
                            _digitReplacements: ["۰", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"]
                        }),
                        bg: language(function(n) {
                            return ["години", "година", "години"][getSlavicForm(n)]
                        }, function(n) {
                            return ["месеца", "месец", "месеца"][getSlavicForm(n)]
                        }, function(n) {
                            return ["седмици", "седмица", "седмици"][getSlavicForm(n)]
                        }, function(n) {
                            return ["дни", "ден", "дни"][getSlavicForm(n)]
                        }, function(n) {
                            return ["часа", "час", "часа"][getSlavicForm(n)]
                        }, function(n) {
                            return ["минути", "минута", "минути"][getSlavicForm(n)]
                        }, function(n) {
                            return ["секунди", "секунда", "секунди"][getSlavicForm(n)]
                        }, function(n) {
                            return ["милисекунди", "милисекунда", "милисекунди"][getSlavicForm(n)]
                        }, ","),
                        bn: language("বছর", "মাস", "সপ্তাহ", "দিন", "ঘন্টা", "মিনিট", "সেকেন্ড", "মিলিসেকেন্ড"),
                        ca: language(function(n) {
                            return "any" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "mes" + (1 === n ? "" : "os")
                        }, function(n) {
                            return "setman" + (1 === n ? "a" : "es")
                        }, function(n) {
                            return "di" + (1 === n ? "a" : "es")
                        }, function(n) {
                            return "hor" + (1 === n ? "a" : "es")
                        }, function(n) {
                            return "minut" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "segon" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "milisegon" + (1 === n ? "" : "s")
                        }, ","),
                        cs: language(function(n) {
                            return ["rok", "roku", "roky", "let"][getCzechOrSlovakForm(n)]
                        }, function(n) {
                            return ["měs\xedc", "měs\xedce", "měs\xedce", "měs\xedců"][getCzechOrSlovakForm(n)]
                        }, function(n) {
                            return ["t\xfdden", "t\xfddne", "t\xfddny", "t\xfddnů"][getCzechOrSlovakForm(n)]
                        }, function(n) {
                            return ["den", "dne", "dny", "dn\xed"][getCzechOrSlovakForm(n)]
                        }, function(n) {
                            return ["hodina", "hodiny", "hodiny", "hodin"][getCzechOrSlovakForm(n)]
                        }, function(n) {
                            return ["minuta", "minuty", "minuty", "minut"][getCzechOrSlovakForm(n)]
                        }, function(n) {
                            return ["sekunda", "sekundy", "sekundy", "sekund"][getCzechOrSlovakForm(n)]
                        }, function(n) {
                            return ["milisekunda", "milisekundy", "milisekundy", "milisekund"][getCzechOrSlovakForm(n)]
                        }, ","),
                        cy: language("flwyddyn", "mis", "wythnos", "diwrnod", "awr", "munud", "eiliad", "milieiliad"),
                        da: language("\xe5r", function(n) {
                            return "m\xe5ned" + (1 === n ? "" : "er")
                        }, function(n) {
                            return "uge" + (1 === n ? "" : "r")
                        }, function(n) {
                            return "dag" + (1 === n ? "" : "e")
                        }, function(n) {
                            return "time" + (1 === n ? "" : "r")
                        }, function(n) {
                            return "minut" + (1 === n ? "" : "ter")
                        }, function(n) {
                            return "sekund" + (1 === n ? "" : "er")
                        }, function(n) {
                            return "millisekund" + (1 === n ? "" : "er")
                        }, ","),
                        de: language(function(n) {
                            return "Jahr" + (1 === n ? "" : "e")
                        }, function(n) {
                            return "Monat" + (1 === n ? "" : "e")
                        }, function(n) {
                            return "Woche" + (1 === n ? "" : "n")
                        }, function(n) {
                            return "Tag" + (1 === n ? "" : "e")
                        }, function(n) {
                            return "Stunde" + (1 === n ? "" : "n")
                        }, function(n) {
                            return "Minute" + (1 === n ? "" : "n")
                        }, function(n) {
                            return "Sekunde" + (1 === n ? "" : "n")
                        }, function(n) {
                            return "Millisekunde" + (1 === n ? "" : "n")
                        }, ","),
                        el: u,
                        en: language(function(n) {
                            return "year" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "month" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "week" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "day" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "hour" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "minute" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "second" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "millisecond" + (1 === n ? "" : "s")
                        }),
                        eo: language(function(n) {
                            return "jaro" + (1 === n ? "" : "j")
                        }, function(n) {
                            return "monato" + (1 === n ? "" : "j")
                        }, function(n) {
                            return "semajno" + (1 === n ? "" : "j")
                        }, function(n) {
                            return "tago" + (1 === n ? "" : "j")
                        }, function(n) {
                            return "horo" + (1 === n ? "" : "j")
                        }, function(n) {
                            return "minuto" + (1 === n ? "" : "j")
                        }, function(n) {
                            return "sekundo" + (1 === n ? "" : "j")
                        }, function(n) {
                            return "milisekundo" + (1 === n ? "" : "j")
                        }, ","),
                        es: language(function(n) {
                            return "a\xf1o" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "mes" + (1 === n ? "" : "es")
                        }, function(n) {
                            return "semana" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "d\xeda" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "hora" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "minuto" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "segundo" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "milisegundo" + (1 === n ? "" : "s")
                        }, ","),
                        et: language(function(n) {
                            return "aasta" + (1 === n ? "" : "t")
                        }, function(n) {
                            return "kuu" + (1 === n ? "" : "d")
                        }, function(n) {
                            return "n\xe4dal" + (1 === n ? "" : "at")
                        }, function(n) {
                            return "p\xe4ev" + (1 === n ? "" : "a")
                        }, function(n) {
                            return "tund" + (1 === n ? "" : "i")
                        }, function(n) {
                            return "minut" + (1 === n ? "" : "it")
                        }, function(n) {
                            return "sekund" + (1 === n ? "" : "it")
                        }, function(n) {
                            return "millisekund" + (1 === n ? "" : "it")
                        }, ","),
                        eu: language("urte", "hilabete", "aste", "egun", "ordu", "minutu", "segundo", "milisegundo", ","),
                        fa: language("سال", "ماه", "هفته", "روز", "ساعت", "دقیقه", "ثانیه", "میلی ثانیه"),
                        fi: language(function(n) {
                            return 1 === n ? "vuosi" : "vuotta"
                        }, function(n) {
                            return 1 === n ? "kuukausi" : "kuukautta"
                        }, function(n) {
                            return "viikko" + (1 === n ? "" : "a")
                        }, function(n) {
                            return "p\xe4iv\xe4" + (1 === n ? "" : "\xe4")
                        }, function(n) {
                            return "tunti" + (1 === n ? "" : "a")
                        }, function(n) {
                            return "minuutti" + (1 === n ? "" : "a")
                        }, function(n) {
                            return "sekunti" + (1 === n ? "" : "a")
                        }, function(n) {
                            return "millisekunti" + (1 === n ? "" : "a")
                        }, ","),
                        fo: language("\xe1r", function(n) {
                            return 1 === n ? "m\xe1na\xf0ur" : "m\xe1na\xf0ir"
                        }, function(n) {
                            return 1 === n ? "vika" : "vikur"
                        }, function(n) {
                            return 1 === n ? "dagur" : "dagar"
                        }, function(n) {
                            return 1 === n ? "t\xedmi" : "t\xedmar"
                        }, function(n) {
                            return 1 === n ? "minuttur" : "minuttir"
                        }, "sekund", "millisekund", ","),
                        fr: language(function(n) {
                            return "an" + (n >= 2 ? "s" : "")
                        }, "mois", function(n) {
                            return "semaine" + (n >= 2 ? "s" : "")
                        }, function(n) {
                            return "jour" + (n >= 2 ? "s" : "")
                        }, function(n) {
                            return "heure" + (n >= 2 ? "s" : "")
                        }, function(n) {
                            return "minute" + (n >= 2 ? "s" : "")
                        }, function(n) {
                            return "seconde" + (n >= 2 ? "s" : "")
                        }, function(n) {
                            return "milliseconde" + (n >= 2 ? "s" : "")
                        }, ","),
                        gr: u,
                        he: language(function(n) {
                            return 1 === n ? "שנה" : "שנים"
                        }, function(n) {
                            return 1 === n ? "חודש" : "חודשים"
                        }, function(n) {
                            return 1 === n ? "שבוע" : "שבועות"
                        }, function(n) {
                            return 1 === n ? "יום" : "ימים"
                        }, function(n) {
                            return 1 === n ? "שעה" : "שעות"
                        }, function(n) {
                            return 1 === n ? "דקה" : "דקות"
                        }, function(n) {
                            return 1 === n ? "שניה" : "שניות"
                        }, function(n) {
                            return 1 === n ? "מילישנייה" : "מילישניות"
                        }),
                        hr: language(function(n) {
                            return n % 10 == 2 || n % 10 == 3 || n % 10 == 4 ? "godine" : "godina"
                        }, function(n) {
                            return 1 === n ? "mjesec" : 2 === n || 3 === n || 4 === n ? "mjeseca" : "mjeseci"
                        }, function(n) {
                            return n % 10 == 1 && 11 !== n ? "tjedan" : "tjedna"
                        }, function(n) {
                            return 1 === n ? "dan" : "dana"
                        }, function(n) {
                            return 1 === n ? "sat" : 2 === n || 3 === n || 4 === n ? "sata" : "sati"
                        }, function(n) {
                            var e = n % 10;
                            return (2 === e || 3 === e || 4 === e) && (n < 10 || n > 14) ? "minute" : "minuta"
                        }, function(n) {
                            var e = n % 10;
                            if (5 === e || Math.floor(n) === n && n >= 10 && n <= 19);
                            else if (1 === e) return "sekunda";
                            else if (2 === e || 3 === e || 4 === e) return "sekunde";
                            return "sekundi"
                        }, function(n) {
                            return 1 === n ? "milisekunda" : n % 10 == 2 || n % 10 == 3 || n % 10 == 4 ? "milisekunde" : "milisekundi"
                        }, ","),
                        hi: language("साल", function(n) {
                            return 1 === n ? "महीना" : "महीने"
                        }, function(n) {
                            return 1 === n ? "हफ़्ता" : "हफ्ते"
                        }, "दिन", function(n) {
                            return 1 === n ? "घंटा" : "घंटे"
                        }, "मिनट", "सेकंड", "मिलीसेकंड"),
                        hu: language("\xe9v", "h\xf3nap", "h\xe9t", "nap", "\xf3ra", "perc", "m\xe1sodperc", "ezredm\xe1sodperc", ","),
                        id: language("tahun", "bulan", "minggu", "hari", "jam", "menit", "detik", "milidetik"),
                        is: language("\xe1r", function(n) {
                            return "m\xe1nu\xf0" + (1 === n ? "ur" : "ir")
                        }, function(n) {
                            return "vik" + (1 === n ? "a" : "ur")
                        }, function(n) {
                            return "dag" + (1 === n ? "ur" : "ar")
                        }, function(n) {
                            return "klukkut\xedm" + (1 === n ? "i" : "ar")
                        }, function(n) {
                            return "m\xedn\xfat" + (1 === n ? "a" : "ur")
                        }, function(n) {
                            return "sek\xfand" + (1 === n ? "a" : "ur")
                        }, function(n) {
                            return "millisek\xfand" + (1 === n ? "a" : "ur")
                        }),
                        it: language(function(n) {
                            return "ann" + (1 === n ? "o" : "i")
                        }, function(n) {
                            return "mes" + (1 === n ? "e" : "i")
                        }, function(n) {
                            return "settiman" + (1 === n ? "a" : "e")
                        }, function(n) {
                            return "giorn" + (1 === n ? "o" : "i")
                        }, function(n) {
                            return "or" + (1 === n ? "a" : "e")
                        }, function(n) {
                            return "minut" + (1 === n ? "o" : "i")
                        }, function(n) {
                            return "second" + (1 === n ? "o" : "i")
                        }, function(n) {
                            return "millisecond" + (1 === n ? "o" : "i")
                        }, ","),
                        ja: language("年", "ヶ月", "週", "日", "時間", "分", "秒", "ミリ秒"),
                        km: language("ឆ្នាំ", "ខែ", "សប្តាហ៍", "ថ្ងៃ", "ម៉ោង", "នាទី", "វិនាទី", "មិល្លីវិនាទី"),
                        kn: language(function(n) {
                            return 1 === n ? "ವರ್ಷ" : "ವರ್ಷಗಳು"
                        }, function(n) {
                            return 1 === n ? "ತಿಂಗಳು" : "ತಿಂಗಳುಗಳು"
                        }, function(n) {
                            return 1 === n ? "ವಾರ" : "ವಾರಗಳು"
                        }, function(n) {
                            return 1 === n ? "ದಿನ" : "ದಿನಗಳು"
                        }, function(n) {
                            return 1 === n ? "ಗಂಟೆ" : "ಗಂಟೆಗಳು"
                        }, function(n) {
                            return 1 === n ? "ನಿಮಿಷ" : "ನಿಮಿಷಗಳು"
                        }, function(n) {
                            return 1 === n ? "ಸೆಕೆಂಡ್" : "ಸೆಕೆಂಡುಗಳು"
                        }, function(n) {
                            return 1 === n ? "ಮಿಲಿಸೆಕೆಂಡ್" : "ಮಿಲಿಸೆಕೆಂಡುಗಳು"
                        }),
                        ko: language("년", "개월", "주일", "일", "시간", "분", "초", "밀리 초"),
                        ku: language("sal", "meh", "hefte", "roj", "seet", "deqe", "saniye", "m\xeel\xee\xe7irk", ","),
                        lo: language("ປີ", "ເດືອນ", "ອາທິດ", "ມື້", "ຊົ່ວໂມງ", "ນາທີ", "ວິນາທີ", "ມິນລິວິນາທີ", ","),
                        lt: language(function(n) {
                            return n % 10 == 0 || n % 100 >= 10 && n % 100 <= 20 ? "metų" : "metai"
                        }, function(n) {
                            return ["mėnuo", "mėnesiai", "mėnesių"][getLithuanianForm(n)]
                        }, function(n) {
                            return ["savaitė", "savaitės", "savaičių"][getLithuanianForm(n)]
                        }, function(n) {
                            return ["diena", "dienos", "dienų"][getLithuanianForm(n)]
                        }, function(n) {
                            return ["valanda", "valandos", "valandų"][getLithuanianForm(n)]
                        }, function(n) {
                            return ["minutė", "minutės", "minučių"][getLithuanianForm(n)]
                        }, function(n) {
                            return ["sekundė", "sekundės", "sekundžių"][getLithuanianForm(n)]
                        }, function(n) {
                            return ["milisekundė", "milisekundės", "milisekundžių"][getLithuanianForm(n)]
                        }, ","),
                        lv: language(function(n) {
                            return getLatvianForm(n) ? "gads" : "gadi"
                        }, function(n) {
                            return getLatvianForm(n) ? "mēnesis" : "mēneši"
                        }, function(n) {
                            return getLatvianForm(n) ? "nedēļa" : "nedēļas"
                        }, function(n) {
                            return getLatvianForm(n) ? "diena" : "dienas"
                        }, function(n) {
                            return getLatvianForm(n) ? "stunda" : "stundas"
                        }, function(n) {
                            return getLatvianForm(n) ? "minūte" : "minūtes"
                        }, function(n) {
                            return getLatvianForm(n) ? "sekunde" : "sekundes"
                        }, function(n) {
                            return getLatvianForm(n) ? "milisekunde" : "milisekundes"
                        }, ","),
                        mk: language(function(n) {
                            return 1 === n ? "година" : "години"
                        }, function(n) {
                            return 1 === n ? "месец" : "месеци"
                        }, function(n) {
                            return 1 === n ? "недела" : "недели"
                        }, function(n) {
                            return 1 === n ? "ден" : "дена"
                        }, function(n) {
                            return 1 === n ? "час" : "часа"
                        }, function(n) {
                            return 1 === n ? "минута" : "минути"
                        }, function(n) {
                            return 1 === n ? "секунда" : "секунди"
                        }, function(n) {
                            return 1 === n ? "милисекунда" : "милисекунди"
                        }, ","),
                        mn: language("жил", "сар", "долоо хоног", "өдөр", "цаг", "минут", "секунд", "миллисекунд"),
                        mr: language(function(n) {
                            return 1 === n ? "वर्ष" : "वर्षे"
                        }, function(n) {
                            return 1 === n ? "महिना" : "महिने"
                        }, function(n) {
                            return 1 === n ? "आठवडा" : "आठवडे"
                        }, "दिवस", "तास", function(n) {
                            return 1 === n ? "मिनिट" : "मिनिटे"
                        }, "सेकंद", "मिलिसेकंद"),
                        ms: language("tahun", "bulan", "minggu", "hari", "jam", "minit", "saat", "milisaat"),
                        nl: language("jaar", function(n) {
                            return 1 === n ? "maand" : "maanden"
                        }, function(n) {
                            return 1 === n ? "week" : "weken"
                        }, function(n) {
                            return 1 === n ? "dag" : "dagen"
                        }, "uur", function(n) {
                            return 1 === n ? "minuut" : "minuten"
                        }, function(n) {
                            return 1 === n ? "seconde" : "seconden"
                        }, function(n) {
                            return 1 === n ? "milliseconde" : "milliseconden"
                        }, ","),
                        no: language("\xe5r", function(n) {
                            return "m\xe5ned" + (1 === n ? "" : "er")
                        }, function(n) {
                            return "uke" + (1 === n ? "" : "r")
                        }, function(n) {
                            return "dag" + (1 === n ? "" : "er")
                        }, function(n) {
                            return "time" + (1 === n ? "" : "r")
                        }, function(n) {
                            return "minutt" + (1 === n ? "" : "er")
                        }, function(n) {
                            return "sekund" + (1 === n ? "" : "er")
                        }, function(n) {
                            return "millisekund" + (1 === n ? "" : "er")
                        }, ","),
                        pl: language(function(n) {
                            return ["rok", "roku", "lata", "lat"][getPolishForm(n)]
                        }, function(n) {
                            return ["miesiąc", "miesiąca", "miesiące", "miesięcy"][getPolishForm(n)]
                        }, function(n) {
                            return ["tydzień", "tygodnia", "tygodnie", "tygodni"][getPolishForm(n)]
                        }, function(n) {
                            return ["dzień", "dnia", "dni", "dni"][getPolishForm(n)]
                        }, function(n) {
                            return ["godzina", "godziny", "godziny", "godzin"][getPolishForm(n)]
                        }, function(n) {
                            return ["minuta", "minuty", "minuty", "minut"][getPolishForm(n)]
                        }, function(n) {
                            return ["sekunda", "sekundy", "sekundy", "sekund"][getPolishForm(n)]
                        }, function(n) {
                            return ["milisekunda", "milisekundy", "milisekundy", "milisekund"][getPolishForm(n)]
                        }, ","),
                        pt: language(function(n) {
                            return "ano" + (1 === n ? "" : "s")
                        }, function(n) {
                            return 1 === n ? "m\xeas" : "meses"
                        }, function(n) {
                            return "semana" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "dia" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "hora" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "minuto" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "segundo" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "milissegundo" + (1 === n ? "" : "s")
                        }, ","),
                        ro: language(function(n) {
                            return 1 === n ? "an" : "ani"
                        }, function(n) {
                            return 1 === n ? "lună" : "luni"
                        }, function(n) {
                            return 1 === n ? "săptăm\xe2nă" : "săptăm\xe2ni"
                        }, function(n) {
                            return 1 === n ? "zi" : "zile"
                        }, function(n) {
                            return 1 === n ? "oră" : "ore"
                        }, function(n) {
                            return 1 === n ? "minut" : "minute"
                        }, function(n) {
                            return 1 === n ? "secundă" : "secunde"
                        }, function(n) {
                            return 1 === n ? "milisecundă" : "milisecunde"
                        }, ","),
                        ru: language(function(n) {
                            return ["лет", "год", "года"][getSlavicForm(n)]
                        }, function(n) {
                            return ["месяцев", "месяц", "месяца"][getSlavicForm(n)]
                        }, function(n) {
                            return ["недель", "неделя", "недели"][getSlavicForm(n)]
                        }, function(n) {
                            return ["дней", "день", "дня"][getSlavicForm(n)]
                        }, function(n) {
                            return ["часов", "час", "часа"][getSlavicForm(n)]
                        }, function(n) {
                            return ["минут", "минута", "минуты"][getSlavicForm(n)]
                        }, function(n) {
                            return ["секунд", "секунда", "секунды"][getSlavicForm(n)]
                        }, function(n) {
                            return ["миллисекунд", "миллисекунда", "миллисекунды"][getSlavicForm(n)]
                        }, ","),
                        sq: language(function(n) {
                            return 1 === n ? "vit" : "vjet"
                        }, "muaj", "jav\xeb", "dit\xeb", "or\xeb", function(n) {
                            return "minut" + (1 === n ? "\xeb" : "a")
                        }, function(n) {
                            return "sekond" + (1 === n ? "\xeb" : "a")
                        }, function(n) {
                            return "milisekond" + (1 === n ? "\xeb" : "a")
                        }, ","),
                        sr: language(function(n) {
                            return ["години", "година", "године"][getSlavicForm(n)]
                        }, function(n) {
                            return ["месеци", "месец", "месеца"][getSlavicForm(n)]
                        }, function(n) {
                            return ["недељи", "недеља", "недеље"][getSlavicForm(n)]
                        }, function(n) {
                            return ["дани", "дан", "дана"][getSlavicForm(n)]
                        }, function(n) {
                            return ["сати", "сат", "сата"][getSlavicForm(n)]
                        }, function(n) {
                            return ["минута", "минут", "минута"][getSlavicForm(n)]
                        }, function(n) {
                            return ["секунди", "секунда", "секунде"][getSlavicForm(n)]
                        }, function(n) {
                            return ["милисекунди", "милисекунда", "милисекунде"][getSlavicForm(n)]
                        }, ","),
                        ta: language(function(n) {
                            return 1 === n ? "வருடம்" : "ஆண்டுகள்"
                        }, function(n) {
                            return 1 === n ? "மாதம்" : "மாதங்கள்"
                        }, function(n) {
                            return 1 === n ? "வாரம்" : "வாரங்கள்"
                        }, function(n) {
                            return 1 === n ? "நாள்" : "நாட்கள்"
                        }, function(n) {
                            return 1 === n ? "மணி" : "மணிநேரம்"
                        }, function(n) {
                            return "நிமிட" + (1 === n ? "ம்" : "ங்கள்")
                        }, function(n) {
                            return "வினாடி" + (1 === n ? "" : "கள்")
                        }, function(n) {
                            return "மில்லி விநாடி" + (1 === n ? "" : "கள்")
                        }),
                        te: language(function(n) {
                            return "సంవత్స" + (1 === n ? "రం" : "రాల")
                        }, function(n) {
                            return "నెల" + (1 === n ? "" : "ల")
                        }, function(n) {
                            return 1 === n ? "వారం" : "వారాలు"
                        }, function(n) {
                            return "రోజు" + (1 === n ? "" : "లు")
                        }, function(n) {
                            return "గంట" + (1 === n ? "" : "లు")
                        }, function(n) {
                            return 1 === n ? "నిమిషం" : "నిమిషాలు"
                        }, function(n) {
                            return 1 === n ? "సెకను" : "సెకన్లు"
                        }, function(n) {
                            return 1 === n ? "మిల్లీసెకన్" : "మిల్లీసెకన్లు"
                        }),
                        uk: language(function(n) {
                            return ["років", "рік", "роки"][getSlavicForm(n)]
                        }, function(n) {
                            return ["місяців", "місяць", "місяці"][getSlavicForm(n)]
                        }, function(n) {
                            return ["тижнів", "тиждень", "тижні"][getSlavicForm(n)]
                        }, function(n) {
                            return ["днів", "день", "дні"][getSlavicForm(n)]
                        }, function(n) {
                            return ["годин", "година", "години"][getSlavicForm(n)]
                        }, function(n) {
                            return ["хвилин", "хвилина", "хвилини"][getSlavicForm(n)]
                        }, function(n) {
                            return ["секунд", "секунда", "секунди"][getSlavicForm(n)]
                        }, function(n) {
                            return ["мілісекунд", "мілісекунда", "мілісекунди"][getSlavicForm(n)]
                        }, ","),
                        ur: language("سال", function(n) {
                            return 1 === n ? "مہینہ" : "مہینے"
                        }, function(n) {
                            return 1 === n ? "ہفتہ" : "ہفتے"
                        }, "دن", function(n) {
                            return 1 === n ? "گھنٹہ" : "گھنٹے"
                        }, "منٹ", "سیکنڈ", "ملی سیکنڈ"),
                        sk: language(function(n) {
                            return ["rok", "roky", "roky", "rokov"][getCzechOrSlovakForm(n)]
                        }, function(n) {
                            return ["mesiac", "mesiace", "mesiace", "mesiacov"][getCzechOrSlovakForm(n)]
                        }, function(n) {
                            return ["t\xfdždeň", "t\xfdždne", "t\xfdždne", "t\xfdždňov"][getCzechOrSlovakForm(n)]
                        }, function(n) {
                            return ["deň", "dni", "dni", "dn\xed"][getCzechOrSlovakForm(n)]
                        }, function(n) {
                            return ["hodina", "hodiny", "hodiny", "hod\xedn"][getCzechOrSlovakForm(n)]
                        }, function(n) {
                            return ["min\xfata", "min\xfaty", "min\xfaty", "min\xfat"][getCzechOrSlovakForm(n)]
                        }, function(n) {
                            return ["sekunda", "sekundy", "sekundy", "sek\xfand"][getCzechOrSlovakForm(n)]
                        }, function(n) {
                            return ["milisekunda", "milisekundy", "milisekundy", "milisek\xfand"][getCzechOrSlovakForm(n)]
                        }, ","),
                        sl: language(function(n) {
                            return n % 10 == 1 ? "leto" : n % 100 == 2 ? "leti" : n % 100 == 3 || n % 100 == 4 || Math.floor(n) !== n && n % 100 <= 5 ? "leta" : "let"
                        }, function(n) {
                            return n % 10 == 1 ? "mesec" : n % 100 == 2 || Math.floor(n) !== n && n % 100 <= 5 ? "meseca" : n % 10 == 3 || n % 10 == 4 ? "mesece" : "mesecev"
                        }, function(n) {
                            return n % 10 == 1 ? "teden" : n % 10 == 2 || Math.floor(n) !== n && n % 100 <= 4 ? "tedna" : n % 10 == 3 || n % 10 == 4 ? "tedne" : "tednov"
                        }, function(n) {
                            return n % 100 == 1 ? "dan" : "dni"
                        }, function(n) {
                            return n % 10 == 1 ? "ura" : n % 100 == 2 ? "uri" : n % 10 == 3 || n % 10 == 4 || Math.floor(n) !== n ? "ure" : "ur"
                        }, function(n) {
                            return n % 10 == 1 ? "minuta" : n % 10 == 2 ? "minuti" : n % 10 == 3 || n % 10 == 4 || Math.floor(n) !== n && n % 100 <= 4 ? "minute" : "minut"
                        }, function(n) {
                            return n % 10 == 1 ? "sekunda" : n % 100 == 2 ? "sekundi" : n % 100 == 3 || n % 100 == 4 || Math.floor(n) !== n ? "sekunde" : "sekund"
                        }, function(n) {
                            return n % 10 == 1 ? "milisekunda" : n % 100 == 2 ? "milisekundi" : n % 100 == 3 || n % 100 == 4 || Math.floor(n) !== n ? "milisekunde" : "milisekund"
                        }, ","),
                        sv: language("\xe5r", function(n) {
                            return "m\xe5nad" + (1 === n ? "" : "er")
                        }, function(n) {
                            return "veck" + (1 === n ? "a" : "or")
                        }, function(n) {
                            return "dag" + (1 === n ? "" : "ar")
                        }, function(n) {
                            return "timm" + (1 === n ? "e" : "ar")
                        }, function(n) {
                            return "minut" + (1 === n ? "" : "er")
                        }, function(n) {
                            return "sekund" + (1 === n ? "" : "er")
                        }, function(n) {
                            return "millisekund" + (1 === n ? "" : "er")
                        }, ","),
                        sw: assign(language(function(n) {
                            return 1 === n ? "mwaka" : "miaka"
                        }, function(n) {
                            return 1 === n ? "mwezi" : "miezi"
                        }, "wiki", function(n) {
                            return 1 === n ? "siku" : "masiku"
                        }, function(n) {
                            return 1 === n ? "saa" : "masaa"
                        }, "dakika", "sekunde", "milisekunde"), {
                            _numberFirst: !0
                        }),
                        tr: language("yıl", "ay", "hafta", "g\xfcn", "saat", "dakika", "saniye", "milisaniye", ","),
                        th: language("ปี", "เดือน", "สัปดาห์", "วัน", "ชั่วโมง", "นาที", "วินาที", "มิลลิวินาที"),
                        uz: language("yil", "oy", "hafta", "kun", "soat", "minut", "sekund", "millisekund"),
                        uz_CYR: language("йил", "ой", "ҳафта", "кун", "соат", "минут", "секунд", "миллисекунд"),
                        vi: language("năm", "th\xe1ng", "tuần", "ng\xe0y", "giờ", "ph\xfat", "gi\xe2y", "mili gi\xe2y", ","),
                        zh_CN: language("年", "个月", "周", "天", "小时", "分钟", "秒", "毫秒"),
                        zh_TW: language("年", "個月", "周", "天", "小時", "分鐘", "秒", "毫秒")
                    };

                function language(n, e, t, r, u, i, o, a, c) {
                    var f = {
                        y: n,
                        mo: e,
                        w: t,
                        d: r,
                        h: u,
                        m: i,
                        s: o,
                        ms: a
                    };
                    return void 0 !== c && (f.decimal = c), f
                }

                function getArabicForm(n) {
                    return 2 === n ? 1 : n > 2 && n < 11 ? 2 : 0
                }

                function getPolishForm(n) {
                    return 1 === n ? 0 : Math.floor(n) !== n ? 1 : n % 10 >= 2 && n % 10 <= 4 && !(n % 100 > 10 && n % 100 < 20) ? 2 : 3
                }

                function getSlavicForm(n) {
                    return Math.floor(n) !== n ? 2 : n % 100 >= 5 && n % 100 <= 20 || n % 10 >= 5 && n % 10 <= 9 || n % 10 == 0 ? 0 : n % 10 == 1 ? 1 : n > 1 ? 2 : 0
                }

                function getCzechOrSlovakForm(n) {
                    return 1 === n ? 0 : Math.floor(n) !== n ? 1 : n % 10 >= 2 && n % 10 <= 4 && n % 100 < 10 ? 2 : 3
                }

                function getLithuanianForm(n) {
                    return 1 === n || n % 10 == 1 && n % 100 > 20 ? 0 : Math.floor(n) !== n || n % 10 >= 2 && n % 100 > 20 || n % 10 >= 2 && n % 100 < 10 ? 1 : 2
                }

                function getLatvianForm(n) {
                    return n % 10 == 1 && n % 100 != 11
                }

                function assign(n) {
                    for (var e, t = 1; t < arguments.length; t++)
                        for (var r in e = arguments[t]) has(e, r) && (n[r] = e[r]);
                    return n
                }
                var o = Array.isArray || function(n) {
                    return "[object Array]" === Object.prototype.toString.call(n)
                };

                function has(n, e) {
                    return Object.prototype.hasOwnProperty.call(n, e)
                }

                function renderPiece(n, e, t) {
                    var r, u, i, o, a = n.unitName,
                        c = n.unitCount,
                        f = t.spacer,
                        l = t.maxDecimalPoints;
                    r = has(t, "decimal") ? t.decimal : has(e, "decimal") ? e.decimal : ".", "digitReplacements" in t ? u = t.digitReplacements : "_digitReplacements" in e && (u = e._digitReplacements);
                    var s = (void 0 === l ? c : Math.floor(c * Math.pow(10, l)) / Math.pow(10, l)).toString();
                    if (u) {
                        i = "";
                        for (var d = 0; d < s.length; d++) {
                            var g = s[d];
                            "." === g ? i += r : i += u[g]
                        }
                    } else i = s.replace(".", r);
                    var m = e[a];
                    return (o = "function" == typeof m ? m(c) : m, e._numberFirst) ? o + f + i : i + f + o
                }

                function humanizer(n) {
                    var result = function(n, e) {
                        n = Math.abs(n);
                        var t = assign({}, result, e || {});
                        return function(n, e) {
                            var t, r = function(n) {
                                var e = [n.language];
                                if (has(n, "fallbacks")) {
                                    if (o(n.fallbacks) && n.fallbacks.length) e = e.concat(n.fallbacks);
                                    else throw Error("fallbacks must be an array with at least one element")
                                }
                                for (var t = 0; t < e.length; t++) {
                                    var r = e[t];
                                    if (has(n.languages, r)) return n.languages[r];
                                    if (has(i, r)) return i[r]
                                }
                                throw Error("No language found.")
                            }(e);
                            if (!n.length) {
                                var u = e.units;
                                return renderPiece({
                                    unitName: u[u.length - 1],
                                    unitCount: 0
                                }, r, e)
                            }
                            var a = e.conjunction,
                                c = e.serialComma;
                            t = has(e, "delimiter") ? e.delimiter : has(r, "delimiter") ? r.delimiter : ", ";
                            for (var f = [], l = 0; l < n.length; l++) f.push(renderPiece(n[l], r, e));
                            return a && 1 !== n.length ? 2 === n.length ? f.join(a) : f.slice(0, -1).join(t) + (c ? "," : "") + a + f.slice(-1) : f.join(t)
                        }(function(n, e) {
                            var t, r, u, i, o = e.units,
                                a = e.unitMeasures,
                                c = "largest" in e ? e.largest : 1 / 0;
                            if (!o.length) return [];
                            var f = {};
                            for (r = 0, i = n; r < o.length; r++) {
                                var l = a[t = o[r]];
                                u = r === o.length - 1 ? i / l : Math.floor(i / l), f[t] = u, i -= u * l
                            }
                            if (e.round) {
                                var s = c;
                                for (r = 0; r < o.length; r++)
                                    if (0 !== (u = f[t = o[r]]) && 0 == --s) {
                                        for (var d = r + 1; d < o.length; d++) {
                                            var g = o[d],
                                                m = f[g];
                                            f[t] += m * a[g] / a[t], f[g] = 0
                                        }
                                        break
                                    } for (r = o.length - 1; r >= 0; r--)
                                    if (0 !== (u = f[t = o[r]])) {
                                        var h = Math.round(u);
                                        if (f[t] = h, 0 === r) break;
                                        var v = o[r - 1],
                                            k = a[v],
                                            p = Math.floor(h * a[t] / k);
                                        if (p) f[v] += p, f[t] = 0;
                                        else break
                                    }
                            }
                            var y = [];
                            for (r = 0; r < o.length && y.length < c; r++)(u = f[t = o[r]]) && y.push({
                                unitName: t,
                                unitCount: u
                            });
                            return y
                        }(n, t), t)
                    };
                    return assign(result, {
                        language: "en",
                        spacer: " ",
                        conjunction: "",
                        serialComma: !0,
                        units: ["y", "mo", "w", "d", "h", "m", "s"],
                        languages: {},
                        round: !1,
                        unitMeasures: {
                            y: 315576e5,
                            mo: 26298e5,
                            w: 6048e5,
                            d: 864e5,
                            h: 36e5,
                            m: 6e4,
                            s: 1e3,
                            ms: 1
                        }
                    }, n)
                }
                var a = humanizer({});
                a.getSupportedLanguages = function() {
                    var n = [];
                    for (var e in i) has(i, e) && "gr" !== e && n.push(e);
                    return n
                }, a.humanizer = humanizer, void 0 !== (r = (function() {
                    return a
                }).call(e, t, e, n)) && (n.exports = r)
            }()
        },
        3821: function(n, e, t) {
            "use strict";
            t.d(e, {
                Z: function() {
                    return setLanguage
                }
            });
            var r = t(6497),
                u = t.n(r),
                __generator = function(n, e) {
                    var t, r, u, i, o = {
                        label: 0,
                        sent: function() {
                            if (1 & u[0]) throw u[1];
                            return u[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: verb(0),
                        throw: verb(1),
                        return: verb(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function verb(a) {
                        return function(c) {
                            return function(a) {
                                if (t) throw TypeError("Generator is already executing.");
                                for (; i && (i = 0, a[0] && (o = 0)), o;) try {
                                    if (t = 1, r && (u = 2 & a[0] ? r.return : a[0] ? r.throw || ((u = r.return) && u.call(r), 0) : r.next) && !(u = u.call(r, a[1])).done) return u;
                                    switch (r = 0, u && (a = [2 & a[0], u.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            u = a;
                                            break;
                                        case 4:
                                            return o.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            o.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = o.ops.pop(), o.trys.pop();
                                            continue;
                                        default:
                                            if (!(u = (u = o.trys).length > 0 && u[u.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!u || a[1] > u[0] && a[1] < u[3])) {
                                                o.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && o.label < u[1]) {
                                                o.label = u[1], u = a;
                                                break
                                            }
                                            if (u && o.label < u[2]) {
                                                o.label = u[2], o.ops.push(a);
                                                break
                                            }
                                            u[2] && o.ops.pop(), o.trys.pop();
                                            continue
                                    }
                                    a = e.call(n, o)
                                } catch (n) {
                                    a = [6, n], r = 0
                                } finally {
                                    t = u = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                };

            function setLanguage(n, e) {
                var t, r, i, o;
                return void 0 === e && (e = !0), t = this, r = void 0, i = void 0, o = function() {
                    return __generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, u().push({
                                    pathname: u().pathname,
                                    query: u().query
                                }, u().asPath, {
                                    locale: n,
                                    scroll: e
                                })];
                            case 1:
                                return [2, t.sent()]
                        }
                    })
                }, new(i || (i = Promise))(function(n, e) {
                    function fulfilled(n) {
                        try {
                            step(o.next(n))
                        } catch (n) {
                            e(n)
                        }
                    }

                    function rejected(n) {
                        try {
                            step(o.throw(n))
                        } catch (n) {
                            e(n)
                        }
                    }

                    function step(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof i ? t : new i(function(n) {
                            n(t)
                        })).then(fulfilled, rejected)
                    }
                    step((o = o.apply(t, r || [])).next())
                })
            }
        },
        7518: function(n, e, t) {
            n.exports = t(1106)
        },
        3795: function(n, e) {
            "use strict";
            var t, r;
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(n, e) {
                    for (var t in e) Object.defineProperty(n, t, {
                        enumerable: !0,
                        get: e[t]
                    })
                }(e, {
                    PrefetchKind: function() {
                        return t
                    },
                    ACTION_REFRESH: function() {
                        return u
                    },
                    ACTION_NAVIGATE: function() {
                        return i
                    },
                    ACTION_RESTORE: function() {
                        return o
                    },
                    ACTION_SERVER_PATCH: function() {
                        return a
                    },
                    ACTION_PREFETCH: function() {
                        return c
                    },
                    ACTION_FAST_REFRESH: function() {
                        return f
                    },
                    ACTION_SERVER_ACTION: function() {
                        return l
                    }
                });
            let u = "refresh",
                i = "navigate",
                o = "restore",
                a = "server-patch",
                c = "prefetch",
                f = "fast-refresh",
                l = "server-action";
            (r = t || (t = {})).AUTO = "auto", r.FULL = "full", r.TEMPORARY = "temporary", ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), n.exports = e.default)
        },
        9735: function(n, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getDomainLocale", {
                enumerable: !0,
                get: function() {
                    return getDomainLocale
                }
            });
            let r = t(625);

            function getDomainLocale(n, e, u, i) {
                {
                    let o = t(5621).normalizeLocalePath,
                        a = t(2099).detectDomainLocale,
                        c = e || o(n, u).detectedLocale,
                        f = a(i, void 0, c);
                    if (f) {
                        let e = "http" + (f.http ? "" : "s") + "://",
                            t = c === f.defaultLocale ? "" : "/" + c;
                        return "" + e + f.domain + (0, r.normalizePathTrailingSlash)("" + t + n)
                    }
                    return !1
                }
            }("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), n.exports = e.default)
        },
        1106: function(n, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return p
                }
            });
            let r = t(314),
                u = r._(t(1248)),
                i = t(7444),
                o = t(9908),
                a = t(4846),
                c = t(5373),
                f = t(3236),
                l = t(5623),
                s = t(7859),
                d = t(8073),
                g = t(9735),
                m = t(5948),
                h = t(3795),
                v = new Set;

            function prefetch(n, e, t, r, u, i) {
                if (!i && !(0, o.isLocalURL)(e)) return;
                if (!r.bypassPrefetchedCheck) {
                    let u = void 0 !== r.locale ? r.locale : "locale" in n ? n.locale : void 0,
                        i = e + "%" + t + "%" + u;
                    if (v.has(i)) return;
                    v.add(i)
                }
                let a = i ? n.prefetch(e, u) : n.prefetch(e, t, r);
                Promise.resolve(a).catch(n => {})
            }

            function formatStringOrUrl(n) {
                return "string" == typeof n ? n : (0, a.formatUrl)(n)
            }
            let k = u.default.forwardRef(function(n, e) {
                    let t, r;
                    let {
                        href: a,
                        as: v,
                        children: k,
                        prefetch: p = null,
                        passHref: y,
                        replace: b,
                        shallow: F,
                        scroll: x,
                        locale: S,
                        onClick: j,
                        onMouseEnter: O,
                        onTouchStart: _,
                        legacyBehavior: C = !1,
                        ...P
                    } = n;
                    t = k, C && ("string" == typeof t || "number" == typeof t) && (t = u.default.createElement("a", null, t));
                    let M = u.default.useContext(l.RouterContext),
                        L = u.default.useContext(s.AppRouterContext),
                        z = null != M ? M : L,
                        w = !M,
                        A = !1 !== p,
                        E = null === p ? h.PrefetchKind.AUTO : h.PrefetchKind.FULL,
                        {
                            href: R,
                            as: T
                        } = u.default.useMemo(() => {
                            if (!M) {
                                let n = formatStringOrUrl(a);
                                return {
                                    href: n,
                                    as: v ? formatStringOrUrl(v) : n
                                }
                            }
                            let [n, e] = (0, i.resolveHref)(M, a, !0);
                            return {
                                href: n,
                                as: v ? (0, i.resolveHref)(M, v) : e || n
                            }
                        }, [M, a, v]),
                        I = u.default.useRef(R),
                        N = u.default.useRef(T);
                    C && (r = u.default.Children.only(t));
                    let U = C ? r && "object" == typeof r && r.ref : e,
                        [D, K, H] = (0, d.useIntersection)({
                            rootMargin: "200px"
                        }),
                        q = u.default.useCallback(n => {
                            (N.current !== T || I.current !== R) && (H(), N.current = T, I.current = R), D(n), U && ("function" == typeof U ? U(n) : "object" == typeof U && (U.current = n))
                        }, [T, U, R, H, D]);
                    u.default.useEffect(() => {
                        z && K && A && prefetch(z, R, T, {
                            locale: S
                        }, {
                            kind: E
                        }, w)
                    }, [T, R, K, S, A, null == M ? void 0 : M.locale, z, w, E]);
                    let V = {
                        ref: q,
                        onClick(n) {
                            C || "function" != typeof j || j(n), C && r.props && "function" == typeof r.props.onClick && r.props.onClick(n), z && !n.defaultPrevented && function(n, e, t, r, i, a, c, f, l, s) {
                                let {
                                    nodeName: d
                                } = n.currentTarget, g = "A" === d.toUpperCase();
                                if (g && (function(n) {
                                        let e = n.currentTarget,
                                            t = e.getAttribute("target");
                                        return t && "_self" !== t || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey || n.nativeEvent && 2 === n.nativeEvent.which
                                    }(n) || !l && !(0, o.isLocalURL)(t))) return;
                                n.preventDefault();
                                let navigate = () => {
                                    let n = null == c || c;
                                    "beforePopState" in e ? e[i ? "replace" : "push"](t, r, {
                                        shallow: a,
                                        locale: f,
                                        scroll: n
                                    }) : e[i ? "replace" : "push"](r || t, {
                                        forceOptimisticNavigation: !s,
                                        scroll: n
                                    })
                                };
                                l ? u.default.startTransition(navigate) : navigate()
                            }(n, z, R, T, b, F, x, S, w, A)
                        },
                        onMouseEnter(n) {
                            C || "function" != typeof O || O(n), C && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(n), z && (A || !w) && prefetch(z, R, T, {
                                locale: S,
                                priority: !0,
                                bypassPrefetchedCheck: !0
                            }, {
                                kind: E
                            }, w)
                        },
                        onTouchStart(n) {
                            C || "function" != typeof _ || _(n), C && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(n), z && (A || !w) && prefetch(z, R, T, {
                                locale: S,
                                priority: !0,
                                bypassPrefetchedCheck: !0
                            }, {
                                kind: E
                            }, w)
                        }
                    };
                    if ((0, c.isAbsoluteUrl)(T)) V.href = T;
                    else if (!C || y || "a" === r.type && !("href" in r.props)) {
                        let n = void 0 !== S ? S : null == M ? void 0 : M.locale,
                            e = (null == M ? void 0 : M.isLocaleDomain) && (0, g.getDomainLocale)(T, n, null == M ? void 0 : M.locales, null == M ? void 0 : M.domainLocales);
                        V.href = e || (0, m.addBasePath)((0, f.addLocale)(T, n, null == M ? void 0 : M.defaultLocale))
                    }
                    return C ? u.default.cloneElement(r, V) : u.default.createElement("a", {
                        ...P,
                        ...V
                    }, t)
                }),
                p = k;
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), n.exports = e.default)
        },
        5621: function(n, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "normalizeLocalePath", {
                enumerable: !0,
                get: function() {
                    return normalizeLocalePath
                }
            });
            let normalizeLocalePath = (n, e) => t(889).normalizeLocalePath(n, e);
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), n.exports = e.default)
        },
        8073: function(n, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "useIntersection", {
                enumerable: !0,
                get: function() {
                    return useIntersection
                }
            });
            let r = t(1248),
                u = t(6990),
                i = "function" == typeof IntersectionObserver,
                o = new Map,
                a = [];

            function useIntersection(n) {
                let {
                    rootRef: e,
                    rootMargin: t,
                    disabled: c
                } = n, f = c || !i, [l, s] = (0, r.useState)(!1), d = (0, r.useRef)(null), g = (0, r.useCallback)(n => {
                    d.current = n
                }, []);
                (0, r.useEffect)(() => {
                    if (i) {
                        if (f || l) return;
                        let n = d.current;
                        if (n && n.tagName) {
                            let r = function(n, e, t) {
                                let {
                                    id: r,
                                    observer: u,
                                    elements: i
                                } = function(n) {
                                    let e;
                                    let t = {
                                            root: n.root || null,
                                            margin: n.rootMargin || ""
                                        },
                                        r = a.find(n => n.root === t.root && n.margin === t.margin);
                                    if (r && (e = o.get(r))) return e;
                                    let u = new Map,
                                        i = new IntersectionObserver(n => {
                                            n.forEach(n => {
                                                let e = u.get(n.target),
                                                    t = n.isIntersecting || n.intersectionRatio > 0;
                                                e && t && e(t)
                                            })
                                        }, n);
                                    return e = {
                                        id: t,
                                        observer: i,
                                        elements: u
                                    }, a.push(t), o.set(t, e), e
                                }(t);
                                return i.set(n, e), u.observe(n),
                                    function() {
                                        if (i.delete(n), u.unobserve(n), 0 === i.size) {
                                            u.disconnect(), o.delete(r);
                                            let n = a.findIndex(n => n.root === r.root && n.margin === r.margin);
                                            n > -1 && a.splice(n, 1)
                                        }
                                    }
                            }(n, n => n && s(n), {
                                root: null == e ? void 0 : e.current,
                                rootMargin: t
                            });
                            return r
                        }
                    } else if (!l) {
                        let n = (0, u.requestIdleCallback)(() => s(!0));
                        return () => (0, u.cancelIdleCallback)(n)
                    }
                }, [f, t, e, l, d.current]);
                let m = (0, r.useCallback)(() => {
                    s(!1)
                }, []);
                return [g, l, m]
            }("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), n.exports = e.default)
        }
    }
]);
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4049], {
        7835: function(n, e, t) {
            var r;
            ! function() {
                var u = language(function(n) {
                        return 1 === n ? "χρόνος" : "χρόνια"
                    }, function(n) {
                        return 1 === n ? "μήνας" : "μήνες"
                    }, function(n) {
                        return 1 === n ? "εβδομάδα" : "εβδομάδες"
                    }, function(n) {
                        return 1 === n ? "μέρα" : "μέρες"
                    }, function(n) {
                        return 1 === n ? "ώρα" : "ώρες"
                    }, function(n) {
                        return 1 === n ? "λεπτό" : "λεπτά"
                    }, function(n) {
                        return 1 === n ? "δευτερόλεπτο" : "δευτερόλεπτα"
                    }, function(n) {
                        return (1 === n ? "χιλιοστό" : "χιλιοστά") + " του δευτερολέπτου"
                    }, ","),
                    i = {
                        af: language("jaar", function(n) {
                            return "maand" + (1 === n ? "" : "e")
                        }, function(n) {
                            return 1 === n ? "week" : "weke"
                        }, function(n) {
                            return 1 === n ? "dag" : "dae"
                        }, function(n) {
                            return 1 === n ? "uur" : "ure"
                        }, function(n) {
                            return 1 === n ? "minuut" : "minute"
                        }, function(n) {
                            return "sekonde" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "millisekonde" + (1 === n ? "" : "s")
                        }, ","),
                        ar: assign(language(function(n) {
                            return ["سنة", "سنتان", "سنوات"][getArabicForm(n)]
                        }, function(n) {
                            return ["شهر", "شهران", "أشهر"][getArabicForm(n)]
                        }, function(n) {
                            return ["أسبوع", "أسبوعين", "أسابيع"][getArabicForm(n)]
                        }, function(n) {
                            return ["يوم", "يومين", "أيام"][getArabicForm(n)]
                        }, function(n) {
                            return ["ساعة", "ساعتين", "ساعات"][getArabicForm(n)]
                        }, function(n) {
                            return ["دقيقة", "دقيقتان", "دقائق"][getArabicForm(n)]
                        }, function(n) {
                            return ["ثانية", "ثانيتان", "ثواني"][getArabicForm(n)]
                        }, function(n) {
                            return ["جزء من الثانية", "جزآن من الثانية", "أجزاء من الثانية"][getArabicForm(n)]
                        }, ","), {
                            delimiter: " ﻭ ",
                            _digitReplacements: ["۰", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"]
                        }),
                        bg: language(function(n) {
                            return ["години", "година", "години"][getSlavicForm(n)]
                        }, function(n) {
                            return ["месеца", "месец", "месеца"][getSlavicForm(n)]
                        }, function(n) {
                            return ["седмици", "седмица", "седмици"][getSlavicForm(n)]
                        }, function(n) {
                            return ["дни", "ден", "дни"][getSlavicForm(n)]
                        }, function(n) {
                            return ["часа", "час", "часа"][getSlavicForm(n)]
                        }, function(n) {
                            return ["минути", "минута", "минути"][getSlavicForm(n)]
                        }, function(n) {
                            return ["секунди", "секунда", "секунди"][getSlavicForm(n)]
                        }, function(n) {
                            return ["милисекунди", "милисекунда", "милисекунди"][getSlavicForm(n)]
                        }, ","),
                        bn: language("বছর", "মাস", "সপ্তাহ", "দিন", "ঘন্টা", "মিনিট", "সেকেন্ড", "মিলিসেকেন্ড"),
                        ca: language(function(n) {
                            return "any" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "mes" + (1 === n ? "" : "os")
                        }, function(n) {
                            return "setman" + (1 === n ? "a" : "es")
                        }, function(n) {
                            return "di" + (1 === n ? "a" : "es")
                        }, function(n) {
                            return "hor" + (1 === n ? "a" : "es")
                        }, function(n) {
                            return "minut" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "segon" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "milisegon" + (1 === n ? "" : "s")
                        }, ","),
                        cs: language(function(n) {
                            return ["rok", "roku", "roky", "let"][getCzechOrSlovakForm(n)]
                        }, function(n) {
                            return ["měs\xedc", "měs\xedce", "měs\xedce", "měs\xedců"][getCzechOrSlovakForm(n)]
                        }, function(n) {
                            return ["t\xfdden", "t\xfddne", "t\xfddny", "t\xfddnů"][getCzechOrSlovakForm(n)]
                        }, function(n) {
                            return ["den", "dne", "dny", "dn\xed"][getCzechOrSlovakForm(n)]
                        }, function(n) {
                            return ["hodina", "hodiny", "hodiny", "hodin"][getCzechOrSlovakForm(n)]
                        }, function(n) {
                            return ["minuta", "minuty", "minuty", "minut"][getCzechOrSlovakForm(n)]
                        }, function(n) {
                            return ["sekunda", "sekundy", "sekundy", "sekund"][getCzechOrSlovakForm(n)]
                        }, function(n) {
                            return ["milisekunda", "milisekundy", "milisekundy", "milisekund"][getCzechOrSlovakForm(n)]
                        }, ","),
                        cy: language("flwyddyn", "mis", "wythnos", "diwrnod", "awr", "munud", "eiliad", "milieiliad"),
                        da: language("\xe5r", function(n) {
                            return "m\xe5ned" + (1 === n ? "" : "er")
                        }, function(n) {
                            return "uge" + (1 === n ? "" : "r")
                        }, function(n) {
                            return "dag" + (1 === n ? "" : "e")
                        }, function(n) {
                            return "time" + (1 === n ? "" : "r")
                        }, function(n) {
                            return "minut" + (1 === n ? "" : "ter")
                        }, function(n) {
                            return "sekund" + (1 === n ? "" : "er")
                        }, function(n) {
                            return "millisekund" + (1 === n ? "" : "er")
                        }, ","),
                        de: language(function(n) {
                            return "Jahr" + (1 === n ? "" : "e")
                        }, function(n) {
                            return "Monat" + (1 === n ? "" : "e")
                        }, function(n) {
                            return "Woche" + (1 === n ? "" : "n")
                        }, function(n) {
                            return "Tag" + (1 === n ? "" : "e")
                        }, function(n) {
                            return "Stunde" + (1 === n ? "" : "n")
                        }, function(n) {
                            return "Minute" + (1 === n ? "" : "n")
                        }, function(n) {
                            return "Sekunde" + (1 === n ? "" : "n")
                        }, function(n) {
                            return "Millisekunde" + (1 === n ? "" : "n")
                        }, ","),
                        el: u,
                        en: language(function(n) {
                            return "year" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "month" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "week" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "day" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "hour" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "minute" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "second" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "millisecond" + (1 === n ? "" : "s")
                        }),
                        eo: language(function(n) {
                            return "jaro" + (1 === n ? "" : "j")
                        }, function(n) {
                            return "monato" + (1 === n ? "" : "j")
                        }, function(n) {
                            return "semajno" + (1 === n ? "" : "j")
                        }, function(n) {
                            return "tago" + (1 === n ? "" : "j")
                        }, function(n) {
                            return "horo" + (1 === n ? "" : "j")
                        }, function(n) {
                            return "minuto" + (1 === n ? "" : "j")
                        }, function(n) {
                            return "sekundo" + (1 === n ? "" : "j")
                        }, function(n) {
                            return "milisekundo" + (1 === n ? "" : "j")
                        }, ","),
                        es: language(function(n) {
                            return "a\xf1o" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "mes" + (1 === n ? "" : "es")
                        }, function(n) {
                            return "semana" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "d\xeda" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "hora" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "minuto" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "segundo" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "milisegundo" + (1 === n ? "" : "s")
                        }, ","),
                        et: language(function(n) {
                            return "aasta" + (1 === n ? "" : "t")
                        }, function(n) {
                            return "kuu" + (1 === n ? "" : "d")
                        }, function(n) {
                            return "n\xe4dal" + (1 === n ? "" : "at")
                        }, function(n) {
                            return "p\xe4ev" + (1 === n ? "" : "a")
                        }, function(n) {
                            return "tund" + (1 === n ? "" : "i")
                        }, function(n) {
                            return "minut" + (1 === n ? "" : "it")
                        }, function(n) {
                            return "sekund" + (1 === n ? "" : "it")
                        }, function(n) {
                            return "millisekund" + (1 === n ? "" : "it")
                        }, ","),
                        eu: language("urte", "hilabete", "aste", "egun", "ordu", "minutu", "segundo", "milisegundo", ","),
                        fa: language("سال", "ماه", "هفته", "روز", "ساعت", "دقیقه", "ثانیه", "میلی ثانیه"),
                        fi: language(function(n) {
                            return 1 === n ? "vuosi" : "vuotta"
                        }, function(n) {
                            return 1 === n ? "kuukausi" : "kuukautta"
                        }, function(n) {
                            return "viikko" + (1 === n ? "" : "a")
                        }, function(n) {
                            return "p\xe4iv\xe4" + (1 === n ? "" : "\xe4")
                        }, function(n) {
                            return "tunti" + (1 === n ? "" : "a")
                        }, function(n) {
                            return "minuutti" + (1 === n ? "" : "a")
                        }, function(n) {
                            return "sekunti" + (1 === n ? "" : "a")
                        }, function(n) {
                            return "millisekunti" + (1 === n ? "" : "a")
                        }, ","),
                        fo: language("\xe1r", function(n) {
                            return 1 === n ? "m\xe1na\xf0ur" : "m\xe1na\xf0ir"
                        }, function(n) {
                            return 1 === n ? "vika" : "vikur"
                        }, function(n) {
                            return 1 === n ? "dagur" : "dagar"
                        }, function(n) {
                            return 1 === n ? "t\xedmi" : "t\xedmar"
                        }, function(n) {
                            return 1 === n ? "minuttur" : "minuttir"
                        }, "sekund", "millisekund", ","),
                        fr: language(function(n) {
                            return "an" + (n >= 2 ? "s" : "")
                        }, "mois", function(n) {
                            return "semaine" + (n >= 2 ? "s" : "")
                        }, function(n) {
                            return "jour" + (n >= 2 ? "s" : "")
                        }, function(n) {
                            return "heure" + (n >= 2 ? "s" : "")
                        }, function(n) {
                            return "minute" + (n >= 2 ? "s" : "")
                        }, function(n) {
                            return "seconde" + (n >= 2 ? "s" : "")
                        }, function(n) {
                            return "milliseconde" + (n >= 2 ? "s" : "")
                        }, ","),
                        gr: u,
                        he: language(function(n) {
                            return 1 === n ? "שנה" : "שנים"
                        }, function(n) {
                            return 1 === n ? "חודש" : "חודשים"
                        }, function(n) {
                            return 1 === n ? "שבוע" : "שבועות"
                        }, function(n) {
                            return 1 === n ? "יום" : "ימים"
                        }, function(n) {
                            return 1 === n ? "שעה" : "שעות"
                        }, function(n) {
                            return 1 === n ? "דקה" : "דקות"
                        }, function(n) {
                            return 1 === n ? "שניה" : "שניות"
                        }, function(n) {
                            return 1 === n ? "מילישנייה" : "מילישניות"
                        }),
                        hr: language(function(n) {
                            return n % 10 == 2 || n % 10 == 3 || n % 10 == 4 ? "godine" : "godina"
                        }, function(n) {
                            return 1 === n ? "mjesec" : 2 === n || 3 === n || 4 === n ? "mjeseca" : "mjeseci"
                        }, function(n) {
                            return n % 10 == 1 && 11 !== n ? "tjedan" : "tjedna"
                        }, function(n) {
                            return 1 === n ? "dan" : "dana"
                        }, function(n) {
                            return 1 === n ? "sat" : 2 === n || 3 === n || 4 === n ? "sata" : "sati"
                        }, function(n) {
                            var e = n % 10;
                            return (2 === e || 3 === e || 4 === e) && (n < 10 || n > 14) ? "minute" : "minuta"
                        }, function(n) {
                            var e = n % 10;
                            if (5 === e || Math.floor(n) === n && n >= 10 && n <= 19);
                            else if (1 === e) return "sekunda";
                            else if (2 === e || 3 === e || 4 === e) return "sekunde";
                            return "sekundi"
                        }, function(n) {
                            return 1 === n ? "milisekunda" : n % 10 == 2 || n % 10 == 3 || n % 10 == 4 ? "milisekunde" : "milisekundi"
                        }, ","),
                        hi: language("साल", function(n) {
                            return 1 === n ? "महीना" : "महीने"
                        }, function(n) {
                            return 1 === n ? "हफ़्ता" : "हफ्ते"
                        }, "दिन", function(n) {
                            return 1 === n ? "घंटा" : "घंटे"
                        }, "मिनट", "सेकंड", "मिलीसेकंड"),
                        hu: language("\xe9v", "h\xf3nap", "h\xe9t", "nap", "\xf3ra", "perc", "m\xe1sodperc", "ezredm\xe1sodperc", ","),
                        id: language("tahun", "bulan", "minggu", "hari", "jam", "menit", "detik", "milidetik"),
                        is: language("\xe1r", function(n) {
                            return "m\xe1nu\xf0" + (1 === n ? "ur" : "ir")
                        }, function(n) {
                            return "vik" + (1 === n ? "a" : "ur")
                        }, function(n) {
                            return "dag" + (1 === n ? "ur" : "ar")
                        }, function(n) {
                            return "klukkut\xedm" + (1 === n ? "i" : "ar")
                        }, function(n) {
                            return "m\xedn\xfat" + (1 === n ? "a" : "ur")
                        }, function(n) {
                            return "sek\xfand" + (1 === n ? "a" : "ur")
                        }, function(n) {
                            return "millisek\xfand" + (1 === n ? "a" : "ur")
                        }),
                        it: language(function(n) {
                            return "ann" + (1 === n ? "o" : "i")
                        }, function(n) {
                            return "mes" + (1 === n ? "e" : "i")
                        }, function(n) {
                            return "settiman" + (1 === n ? "a" : "e")
                        }, function(n) {
                            return "giorn" + (1 === n ? "o" : "i")
                        }, function(n) {
                            return "or" + (1 === n ? "a" : "e")
                        }, function(n) {
                            return "minut" + (1 === n ? "o" : "i")
                        }, function(n) {
                            return "second" + (1 === n ? "o" : "i")
                        }, function(n) {
                            return "millisecond" + (1 === n ? "o" : "i")
                        }, ","),
                        ja: language("年", "ヶ月", "週", "日", "時間", "分", "秒", "ミリ秒"),
                        km: language("ឆ្នាំ", "ខែ", "សប្តាហ៍", "ថ្ងៃ", "ម៉ោង", "នាទី", "វិនាទី", "មិល្លីវិនាទី"),
                        kn: language(function(n) {
                            return 1 === n ? "ವರ್ಷ" : "ವರ್ಷಗಳು"
                        }, function(n) {
                            return 1 === n ? "ತಿಂಗಳು" : "ತಿಂಗಳುಗಳು"
                        }, function(n) {
                            return 1 === n ? "ವಾರ" : "ವಾರಗಳು"
                        }, function(n) {
                            return 1 === n ? "ದಿನ" : "ದಿನಗಳು"
                        }, function(n) {
                            return 1 === n ? "ಗಂಟೆ" : "ಗಂಟೆಗಳು"
                        }, function(n) {
                            return 1 === n ? "ನಿಮಿಷ" : "ನಿಮಿಷಗಳು"
                        }, function(n) {
                            return 1 === n ? "ಸೆಕೆಂಡ್" : "ಸೆಕೆಂಡುಗಳು"
                        }, function(n) {
                            return 1 === n ? "ಮಿಲಿಸೆಕೆಂಡ್" : "ಮಿಲಿಸೆಕೆಂಡುಗಳು"
                        }),
                        ko: language("년", "개월", "주일", "일", "시간", "분", "초", "밀리 초"),
                        ku: language("sal", "meh", "hefte", "roj", "seet", "deqe", "saniye", "m\xeel\xee\xe7irk", ","),
                        lo: language("ປີ", "ເດືອນ", "ອາທິດ", "ມື້", "ຊົ່ວໂມງ", "ນາທີ", "ວິນາທີ", "ມິນລິວິນາທີ", ","),
                        lt: language(function(n) {
                            return n % 10 == 0 || n % 100 >= 10 && n % 100 <= 20 ? "metų" : "metai"
                        }, function(n) {
                            return ["mėnuo", "mėnesiai", "mėnesių"][getLithuanianForm(n)]
                        }, function(n) {
                            return ["savaitė", "savaitės", "savaičių"][getLithuanianForm(n)]
                        }, function(n) {
                            return ["diena", "dienos", "dienų"][getLithuanianForm(n)]
                        }, function(n) {
                            return ["valanda", "valandos", "valandų"][getLithuanianForm(n)]
                        }, function(n) {
                            return ["minutė", "minutės", "minučių"][getLithuanianForm(n)]
                        }, function(n) {
                            return ["sekundė", "sekundės", "sekundžių"][getLithuanianForm(n)]
                        }, function(n) {
                            return ["milisekundė", "milisekundės", "milisekundžių"][getLithuanianForm(n)]
                        }, ","),
                        lv: language(function(n) {
                            return getLatvianForm(n) ? "gads" : "gadi"
                        }, function(n) {
                            return getLatvianForm(n) ? "mēnesis" : "mēneši"
                        }, function(n) {
                            return getLatvianForm(n) ? "nedēļa" : "nedēļas"
                        }, function(n) {
                            return getLatvianForm(n) ? "diena" : "dienas"
                        }, function(n) {
                            return getLatvianForm(n) ? "stunda" : "stundas"
                        }, function(n) {
                            return getLatvianForm(n) ? "minūte" : "minūtes"
                        }, function(n) {
                            return getLatvianForm(n) ? "sekunde" : "sekundes"
                        }, function(n) {
                            return getLatvianForm(n) ? "milisekunde" : "milisekundes"
                        }, ","),
                        mk: language(function(n) {
                            return 1 === n ? "година" : "години"
                        }, function(n) {
                            return 1 === n ? "месец" : "месеци"
                        }, function(n) {
                            return 1 === n ? "недела" : "недели"
                        }, function(n) {
                            return 1 === n ? "ден" : "дена"
                        }, function(n) {
                            return 1 === n ? "час" : "часа"
                        }, function(n) {
                            return 1 === n ? "минута" : "минути"
                        }, function(n) {
                            return 1 === n ? "секунда" : "секунди"
                        }, function(n) {
                            return 1 === n ? "милисекунда" : "милисекунди"
                        }, ","),
                        mn: language("жил", "сар", "долоо хоног", "өдөр", "цаг", "минут", "секунд", "миллисекунд"),
                        mr: language(function(n) {
                            return 1 === n ? "वर्ष" : "वर्षे"
                        }, function(n) {
                            return 1 === n ? "महिना" : "महिने"
                        }, function(n) {
                            return 1 === n ? "आठवडा" : "आठवडे"
                        }, "दिवस", "तास", function(n) {
                            return 1 === n ? "मिनिट" : "मिनिटे"
                        }, "सेकंद", "मिलिसेकंद"),
                        ms: language("tahun", "bulan", "minggu", "hari", "jam", "minit", "saat", "milisaat"),
                        nl: language("jaar", function(n) {
                            return 1 === n ? "maand" : "maanden"
                        }, function(n) {
                            return 1 === n ? "week" : "weken"
                        }, function(n) {
                            return 1 === n ? "dag" : "dagen"
                        }, "uur", function(n) {
                            return 1 === n ? "minuut" : "minuten"
                        }, function(n) {
                            return 1 === n ? "seconde" : "seconden"
                        }, function(n) {
                            return 1 === n ? "milliseconde" : "milliseconden"
                        }, ","),
                        no: language("\xe5r", function(n) {
                            return "m\xe5ned" + (1 === n ? "" : "er")
                        }, function(n) {
                            return "uke" + (1 === n ? "" : "r")
                        }, function(n) {
                            return "dag" + (1 === n ? "" : "er")
                        }, function(n) {
                            return "time" + (1 === n ? "" : "r")
                        }, function(n) {
                            return "minutt" + (1 === n ? "" : "er")
                        }, function(n) {
                            return "sekund" + (1 === n ? "" : "er")
                        }, function(n) {
                            return "millisekund" + (1 === n ? "" : "er")
                        }, ","),
                        pl: language(function(n) {
                            return ["rok", "roku", "lata", "lat"][getPolishForm(n)]
                        }, function(n) {
                            return ["miesiąc", "miesiąca", "miesiące", "miesięcy"][getPolishForm(n)]
                        }, function(n) {
                            return ["tydzień", "tygodnia", "tygodnie", "tygodni"][getPolishForm(n)]
                        }, function(n) {
                            return ["dzień", "dnia", "dni", "dni"][getPolishForm(n)]
                        }, function(n) {
                            return ["godzina", "godziny", "godziny", "godzin"][getPolishForm(n)]
                        }, function(n) {
                            return ["minuta", "minuty", "minuty", "minut"][getPolishForm(n)]
                        }, function(n) {
                            return ["sekunda", "sekundy", "sekundy", "sekund"][getPolishForm(n)]
                        }, function(n) {
                            return ["milisekunda", "milisekundy", "milisekundy", "milisekund"][getPolishForm(n)]
                        }, ","),
                        pt: language(function(n) {
                            return "ano" + (1 === n ? "" : "s")
                        }, function(n) {
                            return 1 === n ? "m\xeas" : "meses"
                        }, function(n) {
                            return "semana" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "dia" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "hora" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "minuto" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "segundo" + (1 === n ? "" : "s")
                        }, function(n) {
                            return "milissegundo" + (1 === n ? "" : "s")
                        }, ","),
                        ro: language(function(n) {
                            return 1 === n ? "an" : "ani"
                        }, function(n) {
                            return 1 === n ? "lună" : "luni"
                        }, function(n) {
                            return 1 === n ? "săptăm\xe2nă" : "săptăm\xe2ni"
                        }, function(n) {
                            return 1 === n ? "zi" : "zile"
                        }, function(n) {
                            return 1 === n ? "oră" : "ore"
                        }, function(n) {
                            return 1 === n ? "minut" : "minute"
                        }, function(n) {
                            return 1 === n ? "secundă" : "secunde"
                        }, function(n) {
                            return 1 === n ? "milisecundă" : "milisecunde"
                        }, ","),
                        ru: language(function(n) {
                            return ["лет", "год", "года"][getSlavicForm(n)]
                        }, function(n) {
                            return ["месяцев", "месяц", "месяца"][getSlavicForm(n)]
                        }, function(n) {
                            return ["недель", "неделя", "недели"][getSlavicForm(n)]
                        }, function(n) {
                            return ["дней", "день", "дня"][getSlavicForm(n)]
                        }, function(n) {
                            return ["часов", "час", "часа"][getSlavicForm(n)]
                        }, function(n) {
                            return ["минут", "минута", "минуты"][getSlavicForm(n)]
                        }, function(n) {
                            return ["секунд", "секунда", "секунды"][getSlavicForm(n)]
                        }, function(n) {
                            return ["миллисекунд", "миллисекунда", "миллисекунды"][getSlavicForm(n)]
                        }, ","),
                        sq: language(function(n) {
                            return 1 === n ? "vit" : "vjet"
                        }, "muaj", "jav\xeb", "dit\xeb", "or\xeb", function(n) {
                            return "minut" + (1 === n ? "\xeb" : "a")
                        }, function(n) {
                            return "sekond" + (1 === n ? "\xeb" : "a")
                        }, function(n) {
                            return "milisekond" + (1 === n ? "\xeb" : "a")
                        }, ","),
                        sr: language(function(n) {
                            return ["години", "година", "године"][getSlavicForm(n)]
                        }, function(n) {
                            return ["месеци", "месец", "месеца"][getSlavicForm(n)]
                        }, function(n) {
                            return ["недељи", "недеља", "недеље"][getSlavicForm(n)]
                        }, function(n) {
                            return ["дани", "дан", "дана"][getSlavicForm(n)]
                        }, function(n) {
                            return ["сати", "сат", "сата"][getSlavicForm(n)]
                        }, function(n) {
                            return ["минута", "минут", "минута"][getSlavicForm(n)]
                        }, function(n) {
                            return ["секунди", "секунда", "секунде"][getSlavicForm(n)]
                        }, function(n) {
                            return ["милисекунди", "милисекунда", "милисекунде"][getSlavicForm(n)]
                        }, ","),
                        ta: language(function(n) {
                            return 1 === n ? "வருடம்" : "ஆண்டுகள்"
                        }, function(n) {
                            return 1 === n ? "மாதம்" : "மாதங்கள்"
                        }, function(n) {
                            return 1 === n ? "வாரம்" : "வாரங்கள்"
                        }, function(n) {
                            return 1 === n ? "நாள்" : "நாட்கள்"
                        }, function(n) {
                            return 1 === n ? "மணி" : "மணிநேரம்"
                        }, function(n) {
                            return "நிமிட" + (1 === n ? "ம்" : "ங்கள்")
                        }, function(n) {
                            return "வினாடி" + (1 === n ? "" : "கள்")
                        }, function(n) {
                            return "மில்லி விநாடி" + (1 === n ? "" : "கள்")
                        }),
                        te: language(function(n) {
                            return "సంవత్స" + (1 === n ? "రం" : "రాల")
                        }, function(n) {
                            return "నెల" + (1 === n ? "" : "ల")
                        }, function(n) {
                            return 1 === n ? "వారం" : "వారాలు"
                        }, function(n) {
                            return "రోజు" + (1 === n ? "" : "లు")
                        }, function(n) {
                            return "గంట" + (1 === n ? "" : "లు")
                        }, function(n) {
                            return 1 === n ? "నిమిషం" : "నిమిషాలు"
                        }, function(n) {
                            return 1 === n ? "సెకను" : "సెకన్లు"
                        }, function(n) {
                            return 1 === n ? "మిల్లీసెకన్" : "మిల్లీసెకన్లు"
                        }),
                        uk: language(function(n) {
                            return ["років", "рік", "роки"][getSlavicForm(n)]
                        }, function(n) {
                            return ["місяців", "місяць", "місяці"][getSlavicForm(n)]
                        }, function(n) {
                            return ["тижнів", "тиждень", "тижні"][getSlavicForm(n)]
                        }, function(n) {
                            return ["днів", "день", "дні"][getSlavicForm(n)]
                        }, function(n) {
                            return ["годин", "година", "години"][getSlavicForm(n)]
                        }, function(n) {
                            return ["хвилин", "хвилина", "хвилини"][getSlavicForm(n)]
                        }, function(n) {
                            return ["секунд", "секунда", "секунди"][getSlavicForm(n)]
                        }, function(n) {
                            return ["мілісекунд", "мілісекунда", "мілісекунди"][getSlavicForm(n)]
                        }, ","),
                        ur: language("سال", function(n) {
                            return 1 === n ? "مہینہ" : "مہینے"
                        }, function(n) {
                            return 1 === n ? "ہفتہ" : "ہفتے"
                        }, "دن", function(n) {
                            return 1 === n ? "گھنٹہ" : "گھنٹے"
                        }, "منٹ", "سیکنڈ", "ملی سیکنڈ"),
                        sk: language(function(n) {
                            return ["rok", "roky", "roky", "rokov"][getCzechOrSlovakForm(n)]
                        }, function(n) {
                            return ["mesiac", "mesiace", "mesiace", "mesiacov"][getCzechOrSlovakForm(n)]
                        }, function(n) {
                            return ["t\xfdždeň", "t\xfdždne", "t\xfdždne", "t\xfdždňov"][getCzechOrSlovakForm(n)]
                        }, function(n) {
                            return ["deň", "dni", "dni", "dn\xed"][getCzechOrSlovakForm(n)]
                        }, function(n) {
                            return ["hodina", "hodiny", "hodiny", "hod\xedn"][getCzechOrSlovakForm(n)]
                        }, function(n) {
                            return ["min\xfata", "min\xfaty", "min\xfaty", "min\xfat"][getCzechOrSlovakForm(n)]
                        }, function(n) {
                            return ["sekunda", "sekundy", "sekundy", "sek\xfand"][getCzechOrSlovakForm(n)]
                        }, function(n) {
                            return ["milisekunda", "milisekundy", "milisekundy", "milisek\xfand"][getCzechOrSlovakForm(n)]
                        }, ","),
                        sl: language(function(n) {
                            return n % 10 == 1 ? "leto" : n % 100 == 2 ? "leti" : n % 100 == 3 || n % 100 == 4 || Math.floor(n) !== n && n % 100 <= 5 ? "leta" : "let"
                        }, function(n) {
                            return n % 10 == 1 ? "mesec" : n % 100 == 2 || Math.floor(n) !== n && n % 100 <= 5 ? "meseca" : n % 10 == 3 || n % 10 == 4 ? "mesece" : "mesecev"
                        }, function(n) {
                            return n % 10 == 1 ? "teden" : n % 10 == 2 || Math.floor(n) !== n && n % 100 <= 4 ? "tedna" : n % 10 == 3 || n % 10 == 4 ? "tedne" : "tednov"
                        }, function(n) {
                            return n % 100 == 1 ? "dan" : "dni"
                        }, function(n) {
                            return n % 10 == 1 ? "ura" : n % 100 == 2 ? "uri" : n % 10 == 3 || n % 10 == 4 || Math.floor(n) !== n ? "ure" : "ur"
                        }, function(n) {
                            return n % 10 == 1 ? "minuta" : n % 10 == 2 ? "minuti" : n % 10 == 3 || n % 10 == 4 || Math.floor(n) !== n && n % 100 <= 4 ? "minute" : "minut"
                        }, function(n) {
                            return n % 10 == 1 ? "sekunda" : n % 100 == 2 ? "sekundi" : n % 100 == 3 || n % 100 == 4 || Math.floor(n) !== n ? "sekunde" : "sekund"
                        }, function(n) {
                            return n % 10 == 1 ? "milisekunda" : n % 100 == 2 ? "milisekundi" : n % 100 == 3 || n % 100 == 4 || Math.floor(n) !== n ? "milisekunde" : "milisekund"
                        }, ","),
                        sv: language("\xe5r", function(n) {
                            return "m\xe5nad" + (1 === n ? "" : "er")
                        }, function(n) {
                            return "veck" + (1 === n ? "a" : "or")
                        }, function(n) {
                            return "dag" + (1 === n ? "" : "ar")
                        }, function(n) {
                            return "timm" + (1 === n ? "e" : "ar")
                        }, function(n) {
                            return "minut" + (1 === n ? "" : "er")
                        }, function(n) {
                            return "sekund" + (1 === n ? "" : "er")
                        }, function(n) {
                            return "millisekund" + (1 === n ? "" : "er")
                        }, ","),
                        sw: assign(language(function(n) {
                            return 1 === n ? "mwaka" : "miaka"
                        }, function(n) {
                            return 1 === n ? "mwezi" : "miezi"
                        }, "wiki", function(n) {
                            return 1 === n ? "siku" : "masiku"
                        }, function(n) {
                            return 1 === n ? "saa" : "masaa"
                        }, "dakika", "sekunde", "milisekunde"), {
                            _numberFirst: !0
                        }),
                        tr: language("yıl", "ay", "hafta", "g\xfcn", "saat", "dakika", "saniye", "milisaniye", ","),
                        th: language("ปี", "เดือน", "สัปดาห์", "วัน", "ชั่วโมง", "นาที", "วินาที", "มิลลิวินาที"),
                        uz: language("yil", "oy", "hafta", "kun", "soat", "minut", "sekund", "millisekund"),
                        uz_CYR: language("йил", "ой", "ҳафта", "кун", "соат", "минут", "секунд", "миллисекунд"),
                        vi: language("năm", "th\xe1ng", "tuần", "ng\xe0y", "giờ", "ph\xfat", "gi\xe2y", "mili gi\xe2y", ","),
                        zh_CN: language("年", "个月", "周", "天", "小时", "分钟", "秒", "毫秒"),
                        zh_TW: language("年", "個月", "周", "天", "小時", "分鐘", "秒", "毫秒")
                    };

                function language(n, e, t, r, u, i, o, a, c) {
                    var f = {
                        y: n,
                        mo: e,
                        w: t,
                        d: r,
                        h: u,
                        m: i,
                        s: o,
                        ms: a
                    };
                    return void 0 !== c && (f.decimal = c), f
                }

                function getArabicForm(n) {
                    return 2 === n ? 1 : n > 2 && n < 11 ? 2 : 0
                }

                function getPolishForm(n) {
                    return 1 === n ? 0 : Math.floor(n) !== n ? 1 : n % 10 >= 2 && n % 10 <= 4 && !(n % 100 > 10 && n % 100 < 20) ? 2 : 3
                }

                function getSlavicForm(n) {
                    return Math.floor(n) !== n ? 2 : n % 100 >= 5 && n % 100 <= 20 || n % 10 >= 5 && n % 10 <= 9 || n % 10 == 0 ? 0 : n % 10 == 1 ? 1 : n > 1 ? 2 : 0
                }

                function getCzechOrSlovakForm(n) {
                    return 1 === n ? 0 : Math.floor(n) !== n ? 1 : n % 10 >= 2 && n % 10 <= 4 && n % 100 < 10 ? 2 : 3
                }

                function getLithuanianForm(n) {
                    return 1 === n || n % 10 == 1 && n % 100 > 20 ? 0 : Math.floor(n) !== n || n % 10 >= 2 && n % 100 > 20 || n % 10 >= 2 && n % 100 < 10 ? 1 : 2
                }

                function getLatvianForm(n) {
                    return n % 10 == 1 && n % 100 != 11
                }

                function assign(n) {
                    for (var e, t = 1; t < arguments.length; t++)
                        for (var r in e = arguments[t]) has(e, r) && (n[r] = e[r]);
                    return n
                }
                var o = Array.isArray || function(n) {
                    return "[object Array]" === Object.prototype.toString.call(n)
                };

                function has(n, e) {
                    return Object.prototype.hasOwnProperty.call(n, e)
                }

                function renderPiece(n, e, t) {
                    var r, u, i, o, a = n.unitName,
                        c = n.unitCount,
                        f = t.spacer,
                        l = t.maxDecimalPoints;
                    r = has(t, "decimal") ? t.decimal : has(e, "decimal") ? e.decimal : ".", "digitReplacements" in t ? u = t.digitReplacements : "_digitReplacements" in e && (u = e._digitReplacements);
                    var s = (void 0 === l ? c : Math.floor(c * Math.pow(10, l)) / Math.pow(10, l)).toString();
                    if (u) {
                        i = "";
                        for (var d = 0; d < s.length; d++) {
                            var g = s[d];
                            "." === g ? i += r : i += u[g]
                        }
                    } else i = s.replace(".", r);
                    var m = e[a];
                    return (o = "function" == typeof m ? m(c) : m, e._numberFirst) ? o + f + i : i + f + o
                }

                function humanizer(n) {
                    var result = function(n, e) {
                        n = Math.abs(n);
                        var t = assign({}, result, e || {});
                        return function(n, e) {
                            var t, r = function(n) {
                                var e = [n.language];
                                if (has(n, "fallbacks")) {
                                    if (o(n.fallbacks) && n.fallbacks.length) e = e.concat(n.fallbacks);
                                    else throw Error("fallbacks must be an array with at least one element")
                                }
                                for (var t = 0; t < e.length; t++) {
                                    var r = e[t];
                                    if (has(n.languages, r)) return n.languages[r];
                                    if (has(i, r)) return i[r]
                                }
                                throw Error("No language found.")
                            }(e);
                            if (!n.length) {
                                var u = e.units;
                                return renderPiece({
                                    unitName: u[u.length - 1],
                                    unitCount: 0
                                }, r, e)
                            }
                            var a = e.conjunction,
                                c = e.serialComma;
                            t = has(e, "delimiter") ? e.delimiter : has(r, "delimiter") ? r.delimiter : ", ";
                            for (var f = [], l = 0; l < n.length; l++) f.push(renderPiece(n[l], r, e));
                            return a && 1 !== n.length ? 2 === n.length ? f.join(a) : f.slice(0, -1).join(t) + (c ? "," : "") + a + f.slice(-1) : f.join(t)
                        }(function(n, e) {
                            var t, r, u, i, o = e.units,
                                a = e.unitMeasures,
                                c = "largest" in e ? e.largest : 1 / 0;
                            if (!o.length) return [];
                            var f = {};
                            for (r = 0, i = n; r < o.length; r++) {
                                var l = a[t = o[r]];
                                u = r === o.length - 1 ? i / l : Math.floor(i / l), f[t] = u, i -= u * l
                            }
                            if (e.round) {
                                var s = c;
                                for (r = 0; r < o.length; r++)
                                    if (0 !== (u = f[t = o[r]]) && 0 == --s) {
                                        for (var d = r + 1; d < o.length; d++) {
                                            var g = o[d],
                                                m = f[g];
                                            f[t] += m * a[g] / a[t], f[g] = 0
                                        }
                                        break
                                    } for (r = o.length - 1; r >= 0; r--)
                                    if (0 !== (u = f[t = o[r]])) {
                                        var h = Math.round(u);
                                        if (f[t] = h, 0 === r) break;
                                        var v = o[r - 1],
                                            k = a[v],
                                            p = Math.floor(h * a[t] / k);
                                        if (p) f[v] += p, f[t] = 0;
                                        else break
                                    }
                            }
                            var y = [];
                            for (r = 0; r < o.length && y.length < c; r++)(u = f[t = o[r]]) && y.push({
                                unitName: t,
                                unitCount: u
                            });
                            return y
                        }(n, t), t)
                    };
                    return assign(result, {
                        language: "en",
                        spacer: " ",
                        conjunction: "",
                        serialComma: !0,
                        units: ["y", "mo", "w", "d", "h", "m", "s"],
                        languages: {},
                        round: !1,
                        unitMeasures: {
                            y: 315576e5,
                            mo: 26298e5,
                            w: 6048e5,
                            d: 864e5,
                            h: 36e5,
                            m: 6e4,
                            s: 1e3,
                            ms: 1
                        }
                    }, n)
                }
                var a = humanizer({});
                a.getSupportedLanguages = function() {
                    var n = [];
                    for (var e in i) has(i, e) && "gr" !== e && n.push(e);
                    return n
                }, a.humanizer = humanizer, void 0 !== (r = (function() {
                    return a
                }).call(e, t, e, n)) && (n.exports = r)
            }()
        },
        3821: function(n, e, t) {
            "use strict";
            t.d(e, {
                Z: function() {
                    return setLanguage
                }
            });
            var r = t(6497),
                u = t.n(r),
                __generator = function(n, e) {
                    var t, r, u, i, o = {
                        label: 0,
                        sent: function() {
                            if (1 & u[0]) throw u[1];
                            return u[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: verb(0),
                        throw: verb(1),
                        return: verb(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function verb(a) {
                        return function(c) {
                            return function(a) {
                                if (t) throw TypeError("Generator is already executing.");
                                for (; i && (i = 0, a[0] && (o = 0)), o;) try {
                                    if (t = 1, r && (u = 2 & a[0] ? r.return : a[0] ? r.throw || ((u = r.return) && u.call(r), 0) : r.next) && !(u = u.call(r, a[1])).done) return u;
                                    switch (r = 0, u && (a = [2 & a[0], u.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            u = a;
                                            break;
                                        case 4:
                                            return o.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            o.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = o.ops.pop(), o.trys.pop();
                                            continue;
                                        default:
                                            if (!(u = (u = o.trys).length > 0 && u[u.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!u || a[1] > u[0] && a[1] < u[3])) {
                                                o.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && o.label < u[1]) {
                                                o.label = u[1], u = a;
                                                break
                                            }
                                            if (u && o.label < u[2]) {
                                                o.label = u[2], o.ops.push(a);
                                                break
                                            }
                                            u[2] && o.ops.pop(), o.trys.pop();
                                            continue
                                    }
                                    a = e.call(n, o)
                                } catch (n) {
                                    a = [6, n], r = 0
                                } finally {
                                    t = u = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                };

            function setLanguage(n, e) {
                var t, r, i, o;
                return void 0 === e && (e = !0), t = this, r = void 0, i = void 0, o = function() {
                    return __generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, u().push({
                                    pathname: u().pathname,
                                    query: u().query
                                }, u().asPath, {
                                    locale: n,
                                    scroll: e
                                })];
                            case 1:
                                return [2, t.sent()]
                        }
                    })
                }, new(i || (i = Promise))(function(n, e) {
                    function fulfilled(n) {
                        try {
                            step(o.next(n))
                        } catch (n) {
                            e(n)
                        }
                    }

                    function rejected(n) {
                        try {
                            step(o.throw(n))
                        } catch (n) {
                            e(n)
                        }
                    }

                    function step(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof i ? t : new i(function(n) {
                            n(t)
                        })).then(fulfilled, rejected)
                    }
                    step((o = o.apply(t, r || [])).next())
                })
            }
        },
        7518: function(n, e, t) {
            n.exports = t(1106)
        },
        3795: function(n, e) {
            "use strict";
            var t, r;
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(n, e) {
                    for (var t in e) Object.defineProperty(n, t, {
                        enumerable: !0,
                        get: e[t]
                    })
                }(e, {
                    PrefetchKind: function() {
                        return t
                    },
                    ACTION_REFRESH: function() {
                        return u
                    },
                    ACTION_NAVIGATE: function() {
                        return i
                    },
                    ACTION_RESTORE: function() {
                        return o
                    },
                    ACTION_SERVER_PATCH: function() {
                        return a
                    },
                    ACTION_PREFETCH: function() {
                        return c
                    },
                    ACTION_FAST_REFRESH: function() {
                        return f
                    },
                    ACTION_SERVER_ACTION: function() {
                        return l
                    }
                });
            let u = "refresh",
                i = "navigate",
                o = "restore",
                a = "server-patch",
                c = "prefetch",
                f = "fast-refresh",
                l = "server-action";
            (r = t || (t = {})).AUTO = "auto", r.FULL = "full", r.TEMPORARY = "temporary", ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), n.exports = e.default)
        },
        9735: function(n, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getDomainLocale", {
                enumerable: !0,
                get: function() {
                    return getDomainLocale
                }
            });
            let r = t(625);

            function getDomainLocale(n, e, u, i) {
                {
                    let o = t(5621).normalizeLocalePath,
                        a = t(2099).detectDomainLocale,
                        c = e || o(n, u).detectedLocale,
                        f = a(i, void 0, c);
                    if (f) {
                        let e = "http" + (f.http ? "" : "s") + "://",
                            t = c === f.defaultLocale ? "" : "/" + c;
                        return "" + e + f.domain + (0, r.normalizePathTrailingSlash)("" + t + n)
                    }
                    return !1
                }
            }("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), n.exports = e.default)
        },
        1106: function(n, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return p
                }
            });
            let r = t(314),
                u = r._(t(1248)),
                i = t(7444),
                o = t(9908),
                a = t(4846),
                c = t(5373),
                f = t(3236),
                l = t(5623),
                s = t(7859),
                d = t(8073),
                g = t(9735),
                m = t(5948),
                h = t(3795),
                v = new Set;

            function prefetch(n, e, t, r, u, i) {
                if (!i && !(0, o.isLocalURL)(e)) return;
                if (!r.bypassPrefetchedCheck) {
                    let u = void 0 !== r.locale ? r.locale : "locale" in n ? n.locale : void 0,
                        i = e + "%" + t + "%" + u;
                    if (v.has(i)) return;
                    v.add(i)
                }
                let a = i ? n.prefetch(e, u) : n.prefetch(e, t, r);
                Promise.resolve(a).catch(n => {})
            }

            function formatStringOrUrl(n) {
                return "string" == typeof n ? n : (0, a.formatUrl)(n)
            }
            let k = u.default.forwardRef(function(n, e) {
                    let t, r;
                    let {
                        href: a,
                        as: v,
                        children: k,
                        prefetch: p = null,
                        passHref: y,
                        replace: b,
                        shallow: F,
                        scroll: x,
                        locale: S,
                        onClick: j,
                        onMouseEnter: O,
                        onTouchStart: _,
                        legacyBehavior: C = !1,
                        ...P
                    } = n;
                    t = k, C && ("string" == typeof t || "number" == typeof t) && (t = u.default.createElement("a", null, t));
                    let M = u.default.useContext(l.RouterContext),
                        L = u.default.useContext(s.AppRouterContext),
                        z = null != M ? M : L,
                        w = !M,
                        A = !1 !== p,
                        E = null === p ? h.PrefetchKind.AUTO : h.PrefetchKind.FULL,
                        {
                            href: R,
                            as: T
                        } = u.default.useMemo(() => {
                            if (!M) {
                                let n = formatStringOrUrl(a);
                                return {
                                    href: n,
                                    as: v ? formatStringOrUrl(v) : n
                                }
                            }
                            let [n, e] = (0, i.resolveHref)(M, a, !0);
                            return {
                                href: n,
                                as: v ? (0, i.resolveHref)(M, v) : e || n
                            }
                        }, [M, a, v]),
                        I = u.default.useRef(R),
                        N = u.default.useRef(T);
                    C && (r = u.default.Children.only(t));
                    let U = C ? r && "object" == typeof r && r.ref : e,
                        [D, K, H] = (0, d.useIntersection)({
                            rootMargin: "200px"
                        }),
                        q = u.default.useCallback(n => {
                            (N.current !== T || I.current !== R) && (H(), N.current = T, I.current = R), D(n), U && ("function" == typeof U ? U(n) : "object" == typeof U && (U.current = n))
                        }, [T, U, R, H, D]);
                    u.default.useEffect(() => {
                        z && K && A && prefetch(z, R, T, {
                            locale: S
                        }, {
                            kind: E
                        }, w)
                    }, [T, R, K, S, A, null == M ? void 0 : M.locale, z, w, E]);
                    let V = {
                        ref: q,
                        onClick(n) {
                            C || "function" != typeof j || j(n), C && r.props && "function" == typeof r.props.onClick && r.props.onClick(n), z && !n.defaultPrevented && function(n, e, t, r, i, a, c, f, l, s) {
                                let {
                                    nodeName: d
                                } = n.currentTarget, g = "A" === d.toUpperCase();
                                if (g && (function(n) {
                                        let e = n.currentTarget,
                                            t = e.getAttribute("target");
                                        return t && "_self" !== t || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey || n.nativeEvent && 2 === n.nativeEvent.which
                                    }(n) || !l && !(0, o.isLocalURL)(t))) return;
                                n.preventDefault();
                                let navigate = () => {
                                    let n = null == c || c;
                                    "beforePopState" in e ? e[i ? "replace" : "push"](t, r, {
                                        shallow: a,
                                        locale: f,
                                        scroll: n
                                    }) : e[i ? "replace" : "push"](r || t, {
                                        forceOptimisticNavigation: !s,
                                        scroll: n
                                    })
                                };
                                l ? u.default.startTransition(navigate) : navigate()
                            }(n, z, R, T, b, F, x, S, w, A)
                        },
                        onMouseEnter(n) {
                            C || "function" != typeof O || O(n), C && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(n), z && (A || !w) && prefetch(z, R, T, {
                                locale: S,
                                priority: !0,
                                bypassPrefetchedCheck: !0
                            }, {
                                kind: E
                            }, w)
                        },
                        onTouchStart(n) {
                            C || "function" != typeof _ || _(n), C && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(n), z && (A || !w) && prefetch(z, R, T, {
                                locale: S,
                                priority: !0,
                                bypassPrefetchedCheck: !0
                            }, {
                                kind: E
                            }, w)
                        }
                    };
                    if ((0, c.isAbsoluteUrl)(T)) V.href = T;
                    else if (!C || y || "a" === r.type && !("href" in r.props)) {
                        let n = void 0 !== S ? S : null == M ? void 0 : M.locale,
                            e = (null == M ? void 0 : M.isLocaleDomain) && (0, g.getDomainLocale)(T, n, null == M ? void 0 : M.locales, null == M ? void 0 : M.domainLocales);
                        V.href = e || (0, m.addBasePath)((0, f.addLocale)(T, n, null == M ? void 0 : M.defaultLocale))
                    }
                    return C ? u.default.cloneElement(r, V) : u.default.createElement("a", {
                        ...P,
                        ...V
                    }, t)
                }),
                p = k;
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), n.exports = e.default)
        },
        5621: function(n, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "normalizeLocalePath", {
                enumerable: !0,
                get: function() {
                    return normalizeLocalePath
                }
            });
            let normalizeLocalePath = (n, e) => t(889).normalizeLocalePath(n, e);
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), n.exports = e.default)
        },
        8073: function(n, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "useIntersection", {
                enumerable: !0,
                get: function() {
                    return useIntersection
                }
            });
            let r = t(1248),
                u = t(6990),
                i = "function" == typeof IntersectionObserver,
                o = new Map,
                a = [];

            function useIntersection(n) {
                let {
                    rootRef: e,
                    rootMargin: t,
                    disabled: c
                } = n, f = c || !i, [l, s] = (0, r.useState)(!1), d = (0, r.useRef)(null), g = (0, r.useCallback)(n => {
                    d.current = n
                }, []);
                (0, r.useEffect)(() => {
                    if (i) {
                        if (f || l) return;
                        let n = d.current;
                        if (n && n.tagName) {
                            let r = function(n, e, t) {
                                let {
                                    id: r,
                                    observer: u,
                                    elements: i
                                } = function(n) {
                                    let e;
                                    let t = {
                                            root: n.root || null,
                                            margin: n.rootMargin || ""
                                        },
                                        r = a.find(n => n.root === t.root && n.margin === t.margin);
                                    if (r && (e = o.get(r))) return e;
                                    let u = new Map,
                                        i = new IntersectionObserver(n => {
                                            n.forEach(n => {
                                                let e = u.get(n.target),
                                                    t = n.isIntersecting || n.intersectionRatio > 0;
                                                e && t && e(t)
                                            })
                                        }, n);
                                    return e = {
                                        id: t,
                                        observer: i,
                                        elements: u
                                    }, a.push(t), o.set(t, e), e
                                }(t);
                                return i.set(n, e), u.observe(n),
                                    function() {
                                        if (i.delete(n), u.unobserve(n), 0 === i.size) {
                                            u.disconnect(), o.delete(r);
                                            let n = a.findIndex(n => n.root === r.root && n.margin === r.margin);
                                            n > -1 && a.splice(n, 1)
                                        }
                                    }
                            }(n, n => n && s(n), {
                                root: null == e ? void 0 : e.current,
                                rootMargin: t
                            });
                            return r
                        }
                    } else if (!l) {
                        let n = (0, u.requestIdleCallback)(() => s(!0));
                        return () => (0, u.cancelIdleCallback)(n)
                    }
                }, [f, t, e, l, d.current]);
                let m = (0, r.useCallback)(() => {
                    s(!1)
                }, []);
                return [g, l, m]
            }("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), n.exports = e.default)
        }
    }
]);