<?php $pageID = "jquery" ?>
<!doctype html>
<html>
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <title>pageSlider</title>
        <meta name="author" content="Subrata Dhal">
        <meta name="desription" content="pageSlider created with jquery for fullscreen scrollable websites">
        <meta name="keyword" content="jquery,jquery plugins,javascript plugins,jquery page slider,page slider,slider">
        <meta name="robots" content="index,follow">
        <link rel="canonical" href="http://subratadhal.com/jquery/pageslider/" />
        <link href="font-awesome-4.7.0/css/font-awesome.css" rel="stylesheet" type="text/css"/>
        <link href="https://fonts.googleapis.com/css?family=Josefin+Slab" rel="stylesheet">
        <link href="css/page.css" rel="stylesheet" type="text/css" />
        <link href="css/style.css" rel="stylesheet" type="text/css" />
        <link href="css/prism.css" rel="stylesheet" type="text/css"/>
    </head>
    <body> 
        <main>
            <div id="pagewrapper">
                <div data-pagetitle="PAGESLIDEER" data-icon="fa fa-home">
                    <div class="page-content color1">
                        <div class="page-inner">
                            <h1>pageslider.js</h1>
                            <p class="page1-para">Future of full screen scrollable websites<br/>
                            <a class="anclink" href="https://github.com/subratadhal/pageslider" target="_blank">Download</a></p>
                        </div>
                    </div>
                </div>
                <div data-pagetitle="Features" data-icon="fa fa-info">
                    <div class="page-content color2">
                        <div class="page-inner clearfix">
                            <h2>Features</h2>
                            <ul class="feature fleft">
                                <li>Fully responsive </li>
                                <li>Easy to use plugin</li>
                                <li>Included JavaScript animation </li>
                                <li>Bullets for every page with page title tooltip</li>
                            </ul>
                            <ul class="feature fright">
                                <li>Control Supported</li>
                                <li>6KB minified js</li>
                                <li>Font Awesome icons included</li>
                                <li>Works in all major browsers for desktop, tablet and mobile</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div data-pagetitle="Usage" data-icon="fa fa-user">
                    <div class="page-content color3">
                        <div class="page-inner">
                            <h2>Usage</h2>
                            <h3>Link files</h3>
                            <article class="pre-container">
                        <pre class="line-numbers language-html">
                            <code class="language-html">
&lt;link href="style.css" rel="stylesheet" type="text/css" /&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"&gt; &lt;/script&gt;
&lt;script src="pageslider.min.js"&gt; &lt;/script&gt;</code>
                        </pre> 
                    </article>
                            <h3>Add Markup</h3>
                            <article class="pre-container">
                        <pre class="line-numbers language-html">
                            <code class="language-html">
&lt;div id="pagewrapper"&gt;
    &lt;div data-pagetitle="Home" data-icon="fa fa-home"&gt;&lt;/div&gt;
    &lt;div data-pagetitle="Features" data-icon="fa fa-info"&gt;&lt;/div&gt;
    &lt;div data-pagetitle="Usage" data-icon="fa fa-user"&gt;&lt;/div&gt;
    &lt;div data-pagetitle="Download" data-icon="fa fa-cloud-download"&gt;&lt;/div&gt;            
&lt;/div&gt;</code>
                        </pre> 
                    </article>
                            <h3 class="hide768">Hook up the slideshow</h3>
                            <article class="pre-container hide768">
                        <pre class="line-numbers language-html">
                            <code class="language-html">
&lt;script&gt;
    $('#pagewrapper').pageslider({
        bullet: true,
        bulletthumb: true,
        bulletthumbshow: true,
        controler: true
    });
&lt;/script&gt;</code>
                        </pre> 
                    </article>
                        </div>
                    </div>
                </div>
                <div data-pagetitle="Download" data-icon="fa fa-cloud-download">
                    <div class="page-content color4">
                        <div class="page-inner">
                            <h2>Download</h2>
                            <a class="github-link" href="https://github.com/subratadhal/pageslider" target="_blank">
                                Find in Github
                            </a>
                            <small>copyright © subratadhal.com</small>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <script src="js/jquery.min.js" type="text/javascript"></script>
        <script src="js/pageslider.js" type="text/javascript"></script>
        <script src="js/prism.js" type="text/javascript"></script>
        <script>
            $(document).ready(function() {
                 $('#pagewrapper').pageslider({
                    bullet: true,
                    bulletthumb: true,
                    bulletthumbshow: true,
                    controler: true
                 });
            });
        </script>
    </body>
</html>
