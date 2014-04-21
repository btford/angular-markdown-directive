# angular-markdown-directive
Bower Component for a simple AngularJS Markdown directive using [Showdown](https://github.com/coreyti/showdown). Based on [this excellent tutorial](http://blog.angularjs.org/2012/05/custom-components-part-1.html) by [@johnlinquist](https://twitter.com/johnlindquist).

## Usage
1. `bower install angular-markdown-directive`
2. Include `angular-sanitize.js`. It should be located at `bower_components/angular-sanitize/`.
3. Include `showdown.js`. It should be located at `bower_components/showdown/`.
4. Include `markdown.js` provided by this component into your app.
5. Add `btford.markdown` as a module dependency to your app.
6. Insert the `btf-markdown` directive into your template:

```html
<btf-markdown>
  #Markdown directive
  *It works!*
</btf-markdown>
```

You can also bind the markdown input to a scope variable:

```html
<div btf-markdown="markdown">
</div>
<!-- Uses $scope.markdown -->
```

Or include a markdown file:

```html
<div btf-markdown ng-include="'README.md'">
</div>
<!-- Uses content from README.md -->
```

## Extensions
You can also use showdown extensions. To do so, just include the corresponding javascript on your page e.g.

```html
<script src="bower_components/showdown/src/extensions/github.js"></script>
<!-- use ~~strike-through~~syntax-->
```

and add a list of extensions to the markdown container:
```html
<btf-markdown extensions="github, table">
  ~~strike-trhough~~~
  
  | Col1 | Col2 |
  |------|------|
  | cell | cell |
</btf-markdown>
```

## License
MIT
