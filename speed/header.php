<h1><span>SlickSpeed</span></h1>
<h2>speed/validity selectors test for frameworks.</h2>
<p>Every framework runs in his own iFrame, thus no conflicts can happen. Tests are run selector by selector, with an interval to prevent the browser from freeezing.</p>
<p>Tests are run in a neutral environment, no library or framework is included in the main javascript test, to avoid favoritism.</p>

<p>Tests are run against a local copy of <a href="http://www.w3.org/TR/2001/CR-css3-selectors-20011113/">this document</a>.</p>

<p>
	Available templates <sup style="color: red">NEW!</sup>:
	<a href="index.php" title="Selectors are tested on normal document.">Default</a> |
	<a href="index.php?special=loose" title="Selectors are tested on the detached DOM fragment (no parent node).">Loose DOM Fragment</a> |
	<a href="index.php?special=xml" title="Selectors are tested on an XML document (fuzzy in IE, yet).">XML Document</a>
</p> 