# Сайт-портфолио

Персональный сайт-портфолио, созданный на Jekyll и размещенный на GitHub Pages. Простой статический сайт с формой обратной связи и автоматическим деплоем.

## Что это

Сайт-визитка с информацией об опыте работы, проектах, навыках и сертификатах. Включает форму обратной связи через Formspree и автоматическую генерацию PDF резюме.

## Технологии

- Jekyll - генератор статических сайтов
- GitHub Pages - хостинг
- GitHub Actions - автоматический деплой
- Formspree - обработка формы обратной связи
- HTML, CSS, JavaScript

## Локальная разработка

1. Установите Ruby и Bundler

2. Клонируйте репозиторий:

```bash
git clone https://github.com/johnnyshut/johnnyshut.github.io.git
cd johnnyshut.github.io
```

1. Установите зависимости:

```bash
bundle install
```

1. Запустите локальный сервер:

```bash
bundle exec jekyll serve
```

1. Откройте [http://localhost:4000](http://localhost:4000)

## Структура проекта

- `_config.yml` - конфигурация Jekyll
- `_layouts/default.html` - основной шаблон
- `_includes/` - компоненты (about, certificates, contacts, experience, projects, technologies)
- `index.md` - главная страница
- `assets/css/main.css` - стили
- `js/contact-form.js` - обработка формы обратной связи
- `.github/workflows/jekyll.yml` - настройка автоматического деплоя

## Как изменить контент

- Главная страница: `index.md`
- О себе: `_includes/about.html`
- Сертификаты: `_includes/certificates.html`
- Опыт работы: `_includes/experience.html`
- Проекты: `_includes/projects.html`
- Технологии: `_includes/technologies.html`
- Контакты: `_includes/contacts.html`
- Стили: `assets/css/main.css`
- Настройки сайта: `_config.yml`

## Форма обратной связи

Форма работает через Formspree. Чтобы настроить свою:

1. Зарегистрируйтесь на [Formspree.io](https://formspree.io)
2. Создайте форму и получите Form ID
3. Замените ID в файле `js/contact-form.js`:

```javascript
const FORMSPREE_FORM_ID = 'ваш_id';
```

## Деплой

Сайт автоматически деплоится на GitHub Pages при каждом push в ветку `main` через GitHub Actions.

## Лицензия

MIT License - см. файл [LICENSE](LICENSE)

## Контакты

- Email: [i.karlo@outlook.com](mailto:i.karlo@outlook.com)
- Telegram: @ivcarlo
- GitHub: [johnnyshut](https://github.com/johnnyshut)
