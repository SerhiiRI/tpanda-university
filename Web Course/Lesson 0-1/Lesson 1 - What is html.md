# Lesson 1: First steps and little cheatsheet
### How can I build a web page?
It's preaty simple. Create new text file and replace .txt to .html and this is it. Now you can open it in browser. **Remember! It's still text file.** 
The most simple structure looks like that and it's univesal template for all pages. The next step is expansion.
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="mystyle.css">
        <title>My page</title>
    </head>
    <body>
        <div>
            <h1>Hello HTML!</h1>
            <p>My web content</p>
        </div>
    </body>
    <footer>
        <p>Created by Traspanda-Team</p>
    </footer>
</html>
```
Looks on this tags. What we have here:
1.  `<!DOCTYPE html>`. It's info what type of file it is. Web browser reading page line by line, so on start we can show to the browser, this is HTML, the website. This info we used only once for file, always on begin.
2.  Tag `<html>`. This tag told web browser where is space for html's components. To close this space just duplicate tag and add the symbol `/` into his begining. It's uniwersal ending for tags. So, finaly it's looks that: `<html> Web Content </html>`. Every tag can have optional added parameters. Here we have `lang="en"` what means this page is in English language. It's information for browser and search engine like Google.
3.  Tag `<head>`. Look on this example. We have there head, body and footer. It's not random. `<head>` is space for information about this page like a title or file to include (file with style of page `mystyle.css`). Close tag: `</head>`.
4.  Tag `<body>` is space for **all content** to display. Everything what we see watching website **it's inside body**. Close tag: `</body>`.
5.  Tag `<footer>` sometime is in body too, but I prefer have it outside. In the footer we usualy add information about contact, help, authors etc. Close tag `</footer>`.
6.  Meta information `<meta charset="UTF-8">`. What is meta data? Of course more information for browser. Here we show to browser what encoding type should be use to transform source text to finally webpage and do not display funny chinese chars.
7.  Meta information `<meta name="viewport" content="width=device-width, initial-scale=1.0">`. Here we set meta `viewport`. Web browser use this to set width of device, so next we set another meta parametr `content` and there we create text who can be transform to another parametr. Look on it. `width=device-width`. Get device width and set to our website width. It will be some like a box, variable with width of device which we using in CSS. `initial-scale=1.0` told browser, this device width is our website width and now is our current scale. Zoom 100%.
8.  Include `<link rel="stylesheet" type="text/css" href="mystyle.css">` looks creepy but it's not difficult. This is way how we include another file. Here we include css style for page. `rel` attribute specifies the relationship between the current document and the linked document. Now we need style sheet so `rel="stylesheet"`. Type of it is text too and inside is style (`CSS`), so `type="text/css"`. Last parameter is path to this file: `href="mystyle.css"`. If you set only name of file, browser try to include this file from same directory as html file.
9.  Page info `<title>`. Information to display on tab bar. Just title :smile:.
10. Tag `<div>`. It's space like in toolbox or cosmetics case for another components and elements. Here we close a header and some text in one div and this one div is our component on page. So, few elements in one tag is our component and on our prepare tag is element.
11. Tag `<h1>`. It's space for text with default style. Header 1, big text and margin (empty space around). We have smaller headers, just use next number.
12. Tag `<p>Created by Traspanda-Team</p>`. New paragraph. Simple block of text.

This information maybe are not super usefull but good to know what we using. With time it will be simple and obvious.

## So, where can I found more tags and how use it?
Of course in Internet :smirk:<br>Use W3School website. They have a lot of nice example and information.
___
## Homework
0. **Do not use CSS yet. HTML only and tag attributes. if you have any cool ideas, go ahead and add them to the tasks. Will be more interesting.**
1. **Shopping list** Real simple list with products to buy and products bought. Bought products name should be crossed out. Before product name add number to show how many product is needed to buy and make this number bold (bold text). 
2. **Business card** or profile. Create three example cards about yourself where you set first name, last name, birthday, address, phone number, hobbies, favorite colors, etc. More better. Information of course do not must be real. **Important!** Use a lot of different tags. More better :wink:.
3. **Login panel**. Create web page for login to account. People should insert login, password and click login button. Add "Forgot password?" too. It doesn't have to work yet. We just creating view part.
4. **Registry form**. Create a form to register a new account. It doesn't have to work yet. We just creating view part. But! User should have posibility inserting his data, selectiong something from list and checking few checkboxes. Like before, more better. Example:
   * Header of form
   * Some description
   * Insert first name
   * Insert last name
   * Insert date of birthday
   * Insert address
   * Insert e-mail
   * Insert phone number
   * Select sex
   * Favorite color
   * Preffered pet
   * Check licence box
   * Check newsletter box
   * Register button
   * Link to funny video on YouTube displayed as a text "Help me" (create it little like "Forgot password" in login panel on real website)

    Tip: Check type of tags. Some element are prepared for inserting some data.

5. On the next lesson, we take CSS :smiling_imp: