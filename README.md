# jQuery Accordion
Very simple and easy to use. Contains only a few necessary options.

## Getting Started
Copy jquery-accordion.js file to js directory.
Next just add a link to the js file before your closing <body> tag add:

```html
<script src="js/jquery-accordion.js"></script>
```

Ok, now you need to write some code in your script.js file to fire the slider:

```javascript
$(document).ready(function () {
    $('your-accordion-ul-selector-here').jqueryAccordion({
        //If you like, you may set some option here
    });
});
```

## Options
Slider contains only this option:
* 3 types of animation

If you want, you can change options of the accordion. Example below:

```javascript
$(document).ready(function () {
    $('your-accordion-ul-selector-here').jqueryAccordion({
        animation: "fade"
    });
});
```

Table with plugin options

Option |Default | Value 1 | Value 2 | Value 3
--- | --- | --- | --- | ---
**animation** | "fade" | "basic" | "fade" | "slide"

## Version

1.0.0

## License

The MIT License (MIT)
