# Author Marks

JavaScript to toggle highlighting HTML5 `mark` tags, to emphasise content.

<div style="text-align:center;">
<a href="http://www.flickr.com/photos/mattgemmell/8745247030/" title="Author Marks by Matt Gemmell, on Flickr"><img src="http://farm8.staticflickr.com/7283/8745247030_f10f9127dd_o.png" width="646" height="171" alt="Author Marks"></a>
</div>


## Author

[Matt Gemmell](http://mattgemmell.com/) ([@mattgemmell](http://twitter.com/mattgemmell)).


## License

BSD. Attribution politely requested.


## Requirements

* [jQuery](http://jquery.com)


## Compatibility

I've tested it on the latest versions (as of 8th May 2013) of:

- Safari, Chrome and Firefox on OS X.
- Safari on iPad and iPhone.


## Installation

Load the JavaScript in your webpage, probably in the HEAD section, like this:

	<script src='/javascripts/authormarks.js' type="text/javascript"></script>

Make sure jQuery is loaded too. You'll also want to add some CSS.


## Installation - Octopress

If you're using [Octopress](http://octopress.org), you already have jQuery, so don't worry about that. To install the script, simply:

1. Copy the `authormarks.js` file to `source/javascripts/`
2. Add the aforementioned line of code to `source/_includes/custom/head.html`
3. (Add some CSS wherever you prefer.)
4. Regenerate and deploy your site.


## CSS

Author Marks works very simply by adding (or removing) a given CSS class to any `mark` tags in your document which have the `author-mark` CSS class applied.

You'll want to add these CSS styles:

1. `.marks-highlighted` for marks which are currently highlighted. This style will also be applied to the toggling links themselves, whilst highlighting is active.
2. `.toggle-marks-highlight` for your toggle link(s), optionally.


## Creating marks in your content

Just use the HTML5 `mark` tag with the `author-mark` class applied: `<mark class="author-mark">An important remark</mark>`.


## Toggling links

You should add at least one link that your readers can use to toggle your author marks. Any old link will do, as long as it has the CSS class `.toggle-marks-highlight`.

This JavaScript will add an appropriate on-click action to such links, to toggle the marks.


## Support

There is absolutely no support available. Feel free to report issues on the [github issue tracker for this project](https://github.com/mattgemmell/author-marks/issues), or indeed to fix them yourself and submit a pull request!
