# chain.import.js
Import JavaScript files in load order (chained)

**Simple** way to import scripts with no *dependencies*, *AJAX* or *XMLHttpRequest*.

Example:

```javascript
// myscript.js
var myVar = "Hello World!";
```

```html
<!-- mypage.html -->
<html>
    <head>
        <meta charset="utf-8">
        <title>ChainImport Example</title>
        <script type="text/javascript" src="https://williamd1k0.github.io/cdn/chain.import.js"></script>
        <script>
            ChainImport('myscript.js', function(){
                alert(myVar);
            });
        </script>
    </head>
    <body>
        
    </body>
</html>
```
