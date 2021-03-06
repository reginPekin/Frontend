# Наследие и каскадирование

## Иерархическое дерево

HTML-документ представляет собой иерархическое дерево. Это означает, что у каждого элемента (кроме корневого) есть только один родитель, т.е. элемент, внутри которого он располагается. У корневого раздела родитель отсутствует. Рассмотрим простейшую страницу:

```html
<html>
   <head></head>
   <body>
      <p>Текст документа</p>
      <p class="text">Выделенная <span>строка</span></p>
   </body>
</html>
```
Для этой страницы можно нарисовать такое иерархическое дерево:

<img src = "https://htmlacademy.ru/assets/courses/66/1.png">

Оно схематически отображает структуру вложенности элементов. В данном примере видно, что у элемента __span__ родителем является __p.text__, а у __p.text__ родитель — __body__.

Иерархическая структура документа определяет основы концепции наследования.

## Наследование

Наследование в CSS — механизм, с помощью которого значения свойств элемента-родителя передаются его элементам-потомкам.

Стили, присвоенные некоторому элементу, наследуются всеми потомками (вложенными элементами), если они не переопределены явно. Например, размер шрифта и его цвет достаточно применить к __body__, чтобы все элементы внутри имели те же свойства.

Наследование позволяет сократить размер таблицы стилей, но если стилей много, то отследить какой родительский элемент установил некоторое свойство, становится сложнее.

## Наследуемые свойства

К наследуемым свойствам относятся в первую очередь свойства, определяющие параметры отображения текста:

font-size, font-family, font-style, font-weight, color, text-align, text-transform, text-indent, line-height, letter-spacing, word-spacing, white-space, direction и т. д.

Также к наследуемым свойствам относятся list-style, cursor, visibility, border-collapse и некоторые другие. Но они используются значительно реже.

*Весь список наследуемых свойств смотрите в [стандарте CSS](https://www.w3.org/TR/CSS21/propidx.html). Значение yes в колонке ***Inherited?***. *

Эти свойства можно и нужно задавать через предков, следуя семантике документа.

Например, параметры текста зачастую не меняются в пределах отдельных блоков страницы: меню, основного содержания, информационных панелей. Поэтому общие параметры текста (цвет, размер, гарнитура) обычно указывают в стилях самих блоков.

## Ненаследуемые свойства

В предыдущем задании мы перечислили основные наследуемые свойства. Все остальные относятся к ненаследуемым. Это параметры позиционирования, размеров, отступов, фона, рамок и т. д.

А именно: __background__, __border__, __padding__, __margin__, __width__, __height__, __position__ и др.

Не наследуются они из соображений здравого смысла. Например: если для какого-либо блока установлен внутренний отступ, автоматически выставлять такой же отступ каждому вложенному элементу нет никакой надобности. Эти параметры чаще всего уникальны для каждого отдельного блока.

## Принудительное наследование

Для каждого свойства может быть задано значение __inherit__.

Оно означает, что данное свойство принимает такое же значение, как и у родительского элемента. Значение __inherit__ может быть использовано для усиления наследуемых значений, а также в свойствах, которые обычно не наследуются.

Запись выглядит следующим образом:

```css
p {
  background: inherit;
}
```
В данном случае у тегов __p__ свойство __background__ будет таким же, как и у их родительских тегов.

## Каскадирование

CSS расшифровывается как «Cascading Style Sheets» или «каскадные таблицы стилей».

Каскадность обозначает, что к одному и тому же элементу может применяться несколько CSS-правил (наборов CSS-свойств). Среди этих свойств могут быть и конфликтующие между собой. Поэтому существуют инструкции, которые определяют, каким будет финальный набор свойств элемента.

Например, для элемента:
```html
<p class="text" style="color: red;"></p>
```
CSS-правила существуют как минимум в трёх разных местах:
* в подключаемом файле **style.css** для селекторов p или .text;
* в атрибуте **style**;
* в стандартных стилях отображения, встроенных в браузер.
Каскадирование как раз и определяет, какие именно свойства из этих источников применятся к данному абзацу.

Имеется три основные концепции, управляющие порядком, в котором применяются CSS-свойства:
* важность;
* специфичность;
* порядок исходного кода.

## Расчёт значения специфичности

Вы вдоволь наигрались со специфичностью, а теперь пришло время изучить полные правила её вычисления.

Специфичность селектора разбивается на 4 группы — __a__, __b__, __c__, __d__:

* если стиль встроенный, т.е. определен как __style="..."__, то __а=1__, иначе __a=0__;
* значение __b__ равно количеству идентификаторов (тех, которые начинаются с #) в селекторе;
* значение __c__ равно количеству классов, псевдоклассов и селекторов атрибутов;
* значение __d__ равно количеству селекторов типов элементов и псевдо-элементов.<br>

После этого полученное значение приводится к числу (обычно в десятичной системе счисления). Селектор, обладающий большим значением специфичности, обладает и большим приоритетом.

Посчитаем специфичность в нашем примере:

<img src = "https://i.ibb.co/F08982D/2019-02-20-1-05-38.png" width = "250">

Отсюда сразу видно, что в нашем примере самым приоритетным является селектор **#floor .cat-in-box**.

## Испытание: взломанный котопрофайл

```css
html,
body {
margin: 0;
padding: 0;
}

body {
width: 550px;
height: 300px;
font-size: 12px;
font-family: "Tahoma", "Arial", sans-serif;
}

.profile {
padding: 5px 10px;
}

.profile img {
display: block;
padding: 10px;
border: 2px solid #34495e;
border-radius: 8px;
}

.profile .photo {
float: left;
width: 152px;
}

.profile .info {
float: left;
width: 368px;
margin-left: 10px;
}

.info #info-title, 
h2 {
margin: 0 !important;
padding: 10px !important;

font-weight: normal;
font-size: 12px;
color: #ffffff;
background: #34495e;
border-radius: 4px;
}

.info div.fact {
padding: 10px;
background: white;
}

.info div.fact:nth-child(odd) {
background: #ecf0f1;
}

.info .fact:after {
content: "";
display: table;
clear: both;
}

.info .fact .title {
float: left;
width: 120px;
text-align: right;
color: #7f8c8d;
}

.info .fact .value {
margin-left: 140px;
color: #34495e;
}

.albums {
margin-top: 5px;
}

.albums img {
float: left;
margin-right: 5px !important;
}

.albums img:last-child {
margin-right: 0 !important;
}

.photo .button {
display: block;
height: 30px;
margin: 5px 0;

line-height: 30px;
text-align: center;
color: #ffffff;
border-radius: 4px;
}

.photo .stroke {
background: #3498db;
}

.photo .feed {
background: #2ecc71;
}

.photo .startle {
background: #e74c3c;
}
```