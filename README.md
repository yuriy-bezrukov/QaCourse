##### Курс по тестированию ПО (начальный уровень)

[Литература ](https://github.com/bezrukovyura/QaCourse/blob/master/Literature/list.md "Книги для изучения тестирования ПО")

|Занятие  | Темы |
| ------------- | ------------- |
| 1  |  [Что такое тестирование и тест-дизайн.](https://github.com/bezrukovyura/QaCourse/tree/master/Lesson1 "Книги для изучения тестирования ПО") |
| 2  | Agile/Scrum. Http/Soap/Rest/xml/json. Postman |
| 3  | Тестирование mobile, desktop, web приложений. Виртуальные машины |
| 4  |[Тест сьюты, кейсы, баг репорты. Jira. TestRail. / Тестирование web приложений. Chrome devTools](https://github.com/bezrukovyura/QaCourse/tree/master/Lesson1 "Создание тест-кейсов и баг-репортов на практических примерах")|
| 5  | Javascript. NPM пакеты, NodeJs. Selenium. CSS/xPath Автоматизированные тесты |
| 6  | Javascript. NPM пакеты, NodeJs. Selenium. CSS/xPath Автоматизированные тесты |
| 7  | Анализ покрытия тестами. Нефункциональные виды тестирования |
| 8  | Устройство Компьютера/Сети/Программ. Полный цикл тестирования клиент-серверного приложения. |
| 9  | Реляционные базы данных. SQL. Простые запросы |
| 10  | Реляционные базы данных. SQL. Вложенные запросы |
| 11  | Повторение теории тестирования. Документация, тест-дизайн, Виды тестирования. Powershell |
| 12  | Составление резюме. Примеры собеседований  |

######Домашняя работа

<details>
  <summary>1 Что такое тестирование и тест-дизайн.</summary>
  
  1. 10-63 Савин.  Тестирование dot com
  2. Сделать шааблонный вариант тест-кейса в excel
  3. Написать тесты как минимум с помощью 4х видов тест-дизайна https://codepen.io/bezrukovyra/full/OJLKyqe
  
</details>

<details>
  <summary>2 Agile/Scrum. Postman</summary>

  1. 67-131 Савин.  Тестирование dot com
  2. Установить Postman
  3. Написать тесты api формы входа через postman 

  https://github.com/bezrukovyura/QaCourse/tree/master/Lesson2
  https://learning.getpostman.com/docs/postman/scripts/test-scripts/
  https://learning.getpostman.com/docs/postman/scripts/test-examples/
</details>

<details>
  <summary>3 Виртуальные машины</summary>

  1. 131-136 Савин.  Тестирование dot com
  2. Установите две vm (windows и android)
  3. Настройте локальную сеть между ними
</details>

<details>
  <summary>4 Chrome devTools. TestRail</summary>

  1. 139-169 Савин.  Тестирование dot com
  2. Проанализировать сайт mail.ru с помощью консоли разработчика
  3. Зарегистрироваться в TestRail, изучить возможности ситемы.
</details>

<details>
  <summary>5 Автоматизация тестирования</summary>

  1. Прочитать об основах js https://learn.javascript.ru/first-steps
  2. Установить Node js, в консоле браузера найти простые числа от 0 до 1000 и сохранить их в массив.
  3. Заполнить PageObject для примера через css и xPath.
</details>

<details>
  <summary>6 Автоматизация тестирования</summary>

  1. Куликов. Тестирование 257 - 280.
  2. Написать тесты для страницы
  3. Разобраться с устройством проекта https://github.com/bezrukovyura/typescript-selenium
</details>

<details>
  <summary>7 Нефункциональные виды тестирования</summary>

  1. 169-257 Савин.  Тестирование dot com
  2. Прочитать https://livetyping.com/ru/blog/chto-nuzhno-znat-i-umet-chtoby-rabotat-testirovshikom
  2. Придумать нефункциональные тесты для карандаша.
  4. Test-plans https://github.com/bezrukovyura/QaCourse/tree/master/Lesson7
</details>


<details>
  <summary>8 Базовые ИТ навыки</summary>
  
  1. 257-308 Савин.  Тестирование dot com
  2. Нарисовать модель локальной сети в своей квартире со всеми устройстваи и их ip
  3. Настроить отображение метрик по загрузке жесткого диска и ЦП.
</details>

<details>
  <summary>9 SQL</summary>
  
  1. Установить denwer
  2. Прочитать https://habr.com/ru/post/123636/
  3. выполнить задание

Создать БД, в ней создать таблицы:

Phones

|  id(Int IA) |name(Text)   |
|---|---|
| 1  | Iphone 0  | 
| 2  | Iphone 3  | 
| 3  | Galaxy  | 

shop1

|  id(Int IA) |idPhone(Text)   | sales(Int)   |
|---|---|---|
| 1  | 1 | 33 |
| 2  | 3  | 24|

shop2

|  id(Int IA) |idPhone(Text)   | sales(Int)   |
|---|---|---|
| 1  | 1 | 6 |
| 2  | 2  | 3|


--- Написать запрос sql, который сформирует таблицу и отсортирует по количеству продаж

|Phones.name | shop1.sales  |
|---|---|
|   |  
</details>

<details>
  <summary>10 SQL</summary>
  
  1. Прочитать http://barbaricqa.com/blog/wp-content/uploads/2013/10/SQL-Joins-visualisation.jpeg
  2. Придумать базу данных для любой предметной области не менее 4х таблиц
  3. Сделать вложенный запрос для поиска информации в базе данных

</details>


<details>
  <summary>11 Powershell</summary>
  
  1. Прочитать https://habr.com/ru/post/242425/
  2. Написать скрипт удаления файлов из папки, которые старше 20 минут
  3. С помощью ps открывать txt файл и заменять все номера телефонов строкой "111-11-11"

</details>
