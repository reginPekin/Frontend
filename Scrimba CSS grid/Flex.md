# A Visual Guide To CSS3 Flexbox Properties

[This](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties) guide.

**Flexbox** –> smaller components of project

**CSS Grids** –> a whole layout

1. [Basics](#1)
2. [Usage](#2)
3. [FB container props](#3)
    1. [flex-direction](#4)
    2. [flex-wrap](#5)
    3. [flex-flow](#6)
    4. [justify-content](#7)
    5. [align-items](#8)
    6. [align-content](#9)
    7. [Note for flex containers](#10)
4. [FB items props](#11)
    1. [order](#12)
    2. [flex-grow](#13)
    3. [flex-shrink](#14)
    4. [flex-basis](#15)
    5. [flex](#16)
    6. [align-self](#17)
    7. [Note for flex items](#18)

[Check this playground](https://codepen.io/justd/pen/yydezN/)!

<a name="1"></a>

## Basics

There are *flex container* == **parent**, and *flex items* == **children**

![](https://scotch-res.cloudinary.com/image/upload/dpr_1,w_650,q_auto:good,f_auto/media/https://cask.scotch.io/2015/04/CSS3-Flexbox-Model.jpg)

It's first draft were made in 2009 and is under development.

### Browser support

For 2019 it's pretty sweet. IE11 has bugs, otherwise it's perfect.

<a name="2"></a>

## Usage

FB is set with `display` property in container. All children automatically become flex items:

```css
.flex-container {
  display: -webkit-flex; /_ Safari _/
  display: flex;
}
```

We can split properties in the two sections: *container & items properties*

<a name='3'></a>
## FB container props

<a name='4'></a>

### flex-direction

Sets the direction of main axis: elements can be laid in rows or in columns:

```css
.flex-container {
  /* In row from left to right */
  -webkit-flex-direction: row; /_ Safari _/
  flex-direction:         row;

  /* In row from right to left */
  flex-direction:         row-reverse;

  /* Top to bottom and reversed */
  flex-direction:         column;
  flex-direction:         column-reverse;
}
```

**Default**: `row`

`row` & `row-reverse` depend on writing mode.

<a name='5'></a>

### flex-wrap

Sets the amount of lines. Should it be a single or multiple lines, and direction.

```css
.flex-container {
  /* In one row */
  -webkit-flex-wrap: nowrap; /_ Safari _/
  flex-wrap:         nowrap;

  /* In multiple rows */
  flex-wrap:         wrap;
  flex-wrap:         wrap-reverse;
}
```
**Default**: `nowrap`

Same with writing mode.

<a name='6'></a>

### flex-flow

Shorthand for `flex-direction` and `flex-wrap`.

```css
.flex-container {
  -webkit-flex-flow:  flex-direction flex-wrap ; /_ Safari _/

  /* For example */
  flex-flow:          row wrap;
}
```

**Default**: `row nowrap`

<a name='7'></a>
