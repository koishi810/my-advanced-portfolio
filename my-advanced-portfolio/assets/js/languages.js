const translations = {
    zh: {
        "main.title": "獭",
        "main.subtitle": "一只獭",
        "main.description": "你好，我是獭",
        "nav.works": "作品集",
        "works.title": "我的作品集",
        "works.animation": "动画",
        "works.photography": "摄影",
        "works.painting": "绘画",
        "footer.name": "獭"
    },
    ja: {
        "main.title": "カワウソ",
        "main.subtitle": "カワウソ",
        "main.description": "こんにちは、カワウソです",
        "nav.works": "作品集",
        "works.title": "私の作品集",
        "works.animation": "アニメーション",
        "works.photography": "写真",
        "works.painting": "絵画",
        "footer.name": "獭"
    },
    en: {
        "main.title": "Otter",
        "main.subtitle": "An Otter",
        "main.description": "Hello, I am Otter, a designer who loves creativity.",
        "nav.works": "Portfolio",
        "works.title": "My Works",
        "works.animation": "Animation",
        "works.photography": "Photography",
        "works.painting": "Painting",
        "footer.name": "Otter"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const langButtons = document.querySelectorAll(".language-switcher button");
    const elementsToTranslate = document.querySelectorAll("[data-i18n]");

    langButtons.forEach(button => {
        button.addEventListener("click", () => {
            const lang = button.getAttribute("data-lang");
            applyTranslations(lang);
        });
    });

    function applyTranslations(lang) {
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute("data-i18n");
            element.textContent = translations[lang][key] || element.textContent;
        });
    }

    applyTranslations("zh");
});