# Lesson 2: CSS for beginners
## ***What is this CSS?***
Cascading Style Sheets - It is set of rules who define how should looks your website. Every part of page. To create new rule you can use css parameters like background-color to define color of background. Pretty easy isn't it?. Hell will beginning when we need to create one dynamic style for phones, desktops, and other devices. But responsive lesson will be later. Now we try create something simple and pretty.

## How to using it?
For first We need to add `<style>` tag. Inside will be every rules for HTML tags. Are few ways to add style to components:
1.  Points to the tag, then every same tag will have same style. It's looks like this: <br>`<style>h1{ font-size: 3em; }</style>`.<br>Every `<h1>` tag will have this style and it's mean the font of text in h1 will have size 3em. `em` is scaling size based on meta web browser data.<br>`<meta name="viewport" content="width=device-width, initial-scale=1.0">`<br>Remember this? Thanks for this we can scaling font on all different devices because parameters like font size are as default inside browser configuration.
2.  By id, then every tag with same id will have same style. So we need to add id to class using parameter `id` and it looks like that: <br>`<div id="mydiv">Some content</div>`<br>In JS we can find this tag by id too.
3.  Create class, then every tag with this class will have style from this class. Classes can be combined with their names after spaces. So in tag we use parameter `class` and it looks like that: <br>`<div class="myclass1 myclass2">Some content</div>`.
4.  Hierarchy. If we want to points to the tag inside in other tag, we can do some like this: <br>`<style>article p { font-size: 2em; }</style>`. So, only tags `<p>` inside tags `<article>` will be with different font size. So, if `<p>` will be next to `<article>`, not inside, then nothing change.

## Now some simple example:
Look on it quick, next read text after example and then back to example. Please search in internet the parameters who you don't understand. Use W3School website and other. You need to know what parameter you can use, then you will have more cool tools. And then you can build more cool things

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- This import style from other file but we can add style into html inside <style> tags -->
    <link rel="stylesheet" type="text/css" href="mystyle.css">

    <title>My page</title>
</head>
<style>
    /* Style by id */
    
    #box {
        margin-left: 10%;
        margin-right: 10%;
        /* same be */
        /* matrgin: top_and_bottom left_and_right */
        /* if we use it, upper margin will be overwritten */
        margin: 0 10%;
        /* and same be */
        /* matrgin: top right bottom left */
        /* if we use it again, upper margin will be overwritten again*/
        margin: 0 10% 0 10%;
        /* everything component inside will have parameter "text-align: center", it's a inheritance */
        text-align: center;
    }
    /* Style by tag */
    
    h1 {
        font-size: 3em;
    }
    
    p {
        text-align: left;
        color: blue;
    }
    /* style in hierarchy */
    
    article p {
        /* every <p> tag inside article will be overwrite with this style. BUT! still global tag style p is more strength because work on all p tag, so still color will be inheritance, not overwritted by default styles */
        text-align: right;
        font-size: 2em;
    }
    /* style by class */
    
    .freestyla {
        background-color: #ac3;
        color: aqua;
    }
    
    .wacmacaphone {
        color: rgba(255, 255, 255, 1);
        border: dotted 2px rgba(0, 0, 0);
    }
    
    .freestyla h4 {
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
        color: #ffffff;
    }
    
    .divception div div div {
        color: #ca4;
    }
    
    footer {
        width: 300px;
        margin: auto;
    }
    
    footer * {
        /* star in hierarchy means all components inside */
        text-align: center;
    }
    
    footer *:not(h1) {
        /* :not(h1) means all without h1 */
        font-size: 1em;
    }
</style>

<body>
    <div id="box">
        <h1>Hello HTML!</h1>
        <p>My web content</p>
        <section>
            <p>Some lorem ipsum.</p>
        </section>
        <article>
            <p>Nice to meat you!</p>
        </article>
        <h2 class="freestyla">My defineted style by class</h2>
        <h3 class="freestyla wacmacaphone">Other defineted style by combine class</h3>
        <!-- &lt; it's just a symbol < in other code and &gt; same it's just > -->
        <h4>Default &lt;h4&gt; tag</h4>
        <div class="freestyla">
            <h4>And hierarchy style in tag started by used class name.</h4>
        </div>
        <div class="divception">
            div 1
            <div>
                div 2
                <div>
                    div3
                    <div>
                        I like trains = ^ v ^ =
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
<footer>
    <h1>Be Creative</h1>
    <h2>It is all what we want</h2>
    <p>Traspanda-Team</p>
</footer>
</html>
```

How you see, It's a lot of different paramerers and combines. I do not writing every of them becouse it have no sens. You need to learn them on you own trying. You can find information about css in W3School website and other website. Just you must trying and learning like with drawing. It will be intuition over time.

***Look at the example again but calmly. Try to change something and add something your own.***

## ***HOVER***
Components can be in different stan. What that mean? When you move your mouse cursor on component or element, you make action and change state of this element. So we can use it for cool hover effect. For example, add to your css style some like this:
```css
h1:hover{
    background: black;
    color: white;
}
```

And if you want to change something on hover when you move on parent element, it's enough written in style what is this parent element. Set :hover and after spacebar set child element. Like that:
```css
div:hover h1{
    background: black;
    color: white;
}
/* and that */
.myclass:hover .otherclass{
    cursor: pointer;
}
```
Try it : D<br>
Cool yeah?<br>
But still can be better. Add to h1 style line `transition: all 0.2s;`. Like that:
```css
h1{
    transition: all 0.2s;
}
```
Now is better don't you think?

## ***Margin vs Padding***
It's good to know how should it be using. So, padding create something like a border around our component, margin just make empty space. Look on it in practic:
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Margin and padding</title>
</head>
<style>
    /* Different browsers sometimes have default margin or padding so good on start is set this parameters for html and body with 0 */
    
    html,
    body {
        margin: 0;
        padding: 0;
    }
    
    body {
        text-align: center;
    }
    
    h1 {
        background-color: coral;
        border: dotted 2px black;
    }
    
    .padd {
        padding: 20px;
    }
    
    .marg {
        margin: 20px;
    }
    
    .btn {
        min-width: 200px;
        width: 20%;
        padding: 20px;
        /* automatic margin calculate how many margin is needed on right and left to make component on 100% width to parent component */
        margin: auto;
        background-color: chartreuse;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
        transition: all 0.2s;
    }
    
    .btn:hover {
        /* On mouse move on */
        color: white;
        background-color: black;
        cursor: pointer;
        /* padding: top/bottom left/right */
        padding: 20px 60px;
    }
</style>

<body>
    <h1 class="marg">Margin is empty space around component</h1>
    <h1 class="padd">Padding is fill space inside component</h1>
    <div class="btn">Move on me for hover</div>
</body>

</html>
```

CSS is like a lego. You can combine every parameters and watching what can be build. You need just trying and playing with this. It's many way to build cool stuff. Just be creative : D

## ***My lovely FLEX***
Flex is a one of way to create template for components and elements. If you use developer tools of browser, just click F12, and select inspect tool, you can see every component is on by on in column. So, if you want to set two component one next to second, you can use grid or flex. I prefer flex because is more dynamic. I give you best website about felx:
<br>Link: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flex</title>
</head>
<style>
    html,
    body {
        margin: 0;
        padding: 0;
        /* on start we can set width and height on 100%
        flex work automaticly using this size 
        so if we want to move component to center
        we need full size of browser's window */
        width: 100%;
        height: 100%;
    }
    
    .container,
    .pills {
        /* now we can set height 100%, default height is height of component content 
        so if we want to use auto cener in horizonatall we need to set some hight,
        automaticly will be 100%, full browser's window */
        height: 100%;
        /* this mean, everythin inside this component will be display with flex rules */
        display: flex;
        /* how components shuold be display, now we set inline not in column */
        flex-direction: column;
        /* Every components will be moved to center in vertical */
        justify-content: center;
        /* and this prametr move component to center but in horizontal */
        align-items: center;
        text-align: center;
    }
    
    .pills {
        /* if we do not set 100% width then div inside container will have size 
        of components inside and then justify will be don't work */
        width: 100%;
        /* this parameter set some like margin around component inside and move them
        to center with space between them */
        justify-content: space-around;
        /* And here components will be inline */
        flex-direction: row;
    }
    
    .item {
        padding: 20px;
        transition: all 0.2s;
    }
    
    .item:first-child {
        background-color: cornflowerblue;
        color: red;
    }
    
    .item:last-child {
        background-color: coral;
        color: blue;
    }
    
    .item:hover {
        background-color: black;
        color: white;
        cursor: pointer;
    }
</style>

<body>
    <div class="container">
        <!-- display as flex in column, first fontainer -->
        <h1>Neo, what pill you choose?</h1>
        <div class="pills">
            <!-- display as flex in row, second container inside container -->
            <div class="item">Blue pill</div>
            <div class="item">Red pill</div>
        </div>
    </div>
</body>

</html>
```

On begin it can be little difficult but if you create few page with this, you will see it is great for positioning. Important is create div in div. If you want to make something inline or in column, just create more div for this components and next this div set inside another div. Boxes in boxes.

___

## ***HOMEWORKS***
### Lab 1:
Set cool picture (best picture size will be 1920x1080) as a background but with not repeat, don't move with scroll and 100% window size. As a text copy and paste lorem ipsum. A lot of lorem ipsum, the page should be scrollable : D.

### Lab 2:
Make a lot of different buttons using different tags and styles. Tags and styles can be repeated. Be creative and combine parameters : D. And do not forget about hover and transition.

### Lab 3:
Make few links component to few YT videos who looks different, not only text. You can create div block as a button link and picture too as a link to website. Everything can be as a link.

### Lab 4:
Using flex, try make div who looks like as window explorer in windows 10 or something near with few elements who looks like a file in folder.

### Lab 5:
Restyle Lab 1: Shopping list, bought items should have orange or red background, maybe some gradient ( ͡° ͜ʖ ͡°)? Next registration and login panel. Try used felx to position components on the middle screen. You can restyle business card too. Surprise me : D