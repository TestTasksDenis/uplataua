# Тестовое для Фронта от 08.10.2018 (Angular 2+)

Есть список категорий и услуг (Данные приезжают с сервера)
Для реализации пример данных можно сохранить в json или использовать Firebase, как удобней

### Пример списка категорий и услуг на сайте
По ссылке https://uplata.ua/popolnit-mobilnyy  выводим список услуг по конкретной категории и список всех доступных категорий

По ссылке https://uplata.ua/popolnit-mobilnyy/vodafone-po-nomeru-telefona-32192 выводим данные по конкретной услуги (Название, описание) и список всех доступных категорий

### Задачи:

1. Построить роутинг для категорий и услуг аналогичный сайту https://uplata.ua/. Добавить 5 статических страниц (Можно просто вывести в body название страницы)
- https://uplata.ua/onas
- https://uplata.ua/faq
- https://uplata.ua/tarif
- https://uplata.ua/bezopasnost
- https://uplata.ua/legal

2. Сделать два модальных окна авторизации и регистрации (Без работы с сервером)
3. Реализовать 404 страницу
4. Реализовать 500 страницу

PS. Дизайн не важен, важна логика построения архитектуры

#P.S
- 500 ошибка выводится в интерсепторе `uplataua/src/app/shared/services/auth.interceptor.ts`

# About Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
