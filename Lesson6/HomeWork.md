1 Установить Denwer

2 Создать БД, в ней создать таблицы:

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


3 Написать запрос sql, который найдет наиболее продаваемый телефон 
