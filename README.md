<h1>pageSlider</h1>
<p>fadeSlider.js is the feature of full screen scrollable websites. 
</p>
</br>
</br>
<h2>Features</h2><br />
<ul class="feature">
    <li>Fully responsive</li>
    <li>Easy to use plugin</li>
    <li>Included JavaScript animation</li>
    <li>Bullets for every page with page title tooltip</li>
    <li>Control Supported</li>
    <li>6KB minified js</li>
    <li>Font Awesome icons included</li>
    <li>Works in all major browsers for desktop, tablet and mobile</li>
</ul>
<br />
<br />
<h2>Usage</h2><br />
<br />
<h3>Link files</h3>
<pre>
<code>
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"&gt; &lt;/script&gt;
&lt;script src="pageslider.min.js"&gt; &lt;/script&gt;</code>
</pre> 
<br />
<h3>Add Markup</h3>
<pre>
<code>
&lt;div id="pagewrapper"&gt;
    &lt;div data-pagetitle="Home" data-icon="fa fa-home"&gt;&lt;/div&gt;
    &lt;div data-pagetitle="Features" data-icon="fa fa-info"&gt;&lt;/div&gt;
    &lt;div data-pagetitle="Usage" data-icon="fa fa-user"&gt;&lt;/div&gt;
    &lt;div data-pagetitle="Download" data-icon="fa fa-cloud-download"&gt;&lt;/div&gt;            
&lt;/div&gt;
</code>
</pre>
<br />
<h3>Add CSS</h3>
<pre>
<code>
&lt;link href="style.css" rel="stylesheet" type="text/css" /&gt;
</code>
</pre>
<br />
<h3>Hook up the slideshow</h3>
<pre>
<code>
&lt;script&gt;
$('#pagewrapper').pageslider();
&lt;/script&gt;
</code>
</pre>
<br />
<h3>Options you can customize</h3>
<pre>
<code>
$('#pagewrapper').pageslider({
        bullet: true,            //Show bullets true or false
        bulletthumb: true,       //Show bullet thumbs popup, true or false
        bulletthumbshow: true,   //Show bullet thumbs popup auto, true or false
        controler: true          //Show next, prevoius and up, down buttons, true or false
});
</code>
</pre>
<br />
<br />
<h2>Following are supported browser of pageslider.js</h2>
<br />
<br />
<ul class="feature fleft">
    <li>Firefox</li>
    <li>Safari </li>
    <li>Chrome</li>
    <li>Opera</li>
    <li>iOS Safari</li>
    <li>iOS Chrome</li>
    <li>Firefox Mobile</li>
    <li>Android</li>
</ul>
<br />
<br />
<p> Find the <a href="http://subratadhal.com/jquery/pageslider/" target="_blank">Live Demo</a> url on <a href="http://subratadhal.com/" target="_blank">subratadhal.com</a></p>

