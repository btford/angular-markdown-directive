# angular-markdown-directive
Bower Component for a simple AngularJS Markdown directive using [Showdown](https://github.com/coreyti/showdown). Based on [this excellent tutorial](http://blog.angularjs.org/2012/05/custom-components-part-1.html) by [@johnlinquist](https://twitter.com/johnlindquist).

## Usage
1. `bower install angular-markdown-directive`
2. Made sure the showdown lib is loaded. It should be installed as a dependency at `components/showdown/compressed/showdown.js`.
3. Include the `markdown.js` script provided by this component into your app.
4. Add `btford.markdown` as a module dependency to your app.
5. Insert the `btf-markdown` directive into your template:

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
## License
MIT
