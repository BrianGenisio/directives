# jQuery - Harlem Shake - plugin

Let´s your content dance to the sound of the [http://en.wikipedia.org/wiki/Harlem_Shake_(meme)](Harlem Shake).
See the **[demo](http://piscis.github.com/jquery-harlem-shake-plugin/demo/index.html)** for a working example.

## Basic usage:
Here is an example how to integrate this in your site.

```html
<!Doctype html>
<html>
  <head>
    <script type="text/javascript" src="jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="[PATH_TO_JQ_HS]/jquery-harlem-shake-1.0.js"></script>
    <script type="text/javascript">

      jQuery.ready(function(){
        jQuery('.container').hshakeify({onEnd: function(){console.log('the end my friend');}});
      });

    </script>
  </head>
  <body>
    [....Your_Content...]
  </body>
</html>
```

## Default config options:
```javascript
var config = {
  css_file: '../jquery-harlem-shake-1.0.css', // Path the the css file
  loop: false, // Loop the HS, onEnd hook wont be triggered
  audio_file: 'harlemshake', // Url to the AudioFiles
  audio_formats: ['ogg'], // Audiofile formats
  cls_first: 'jq-hs-first', // Style of the first dancing element
  cls_speed_list: ['jq-hs-fast'], // Class to modify the transition speed
  cls_list: ['jq-hs-wobble','jq-hs-shake','jq-hs-bounceIn','jq-hs-wobble'], // Available dance styles
  onEnd: function(){} // Hook when the harlem shake ends
};
```

### Modify the plugin default settings
```javascript
jQuery([selector]).hshakeify({
  css_file: 'jquery-harlem-shake-1.0.css',
  loop: true
});
```

## License

###(The MIT License)

#####Copyright (c) 2010-2012 Alexander Pirsig <self@pirsig.net>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.