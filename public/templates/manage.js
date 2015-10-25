<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>{+title /}</title>
    
        <link rel="stylesheet" href="/css/app.css">
        <link rel="stylesheet" href="/css/foundation.css">
        <link rel="stylesheet" href="/css/style.css">
    
    </head>
    <body>
    <div class="row">
        <div class="large-12 columns">
            <h1> TekBooks </h1>
        </div>  
    </div>
    
    <!-- NAVIGATION -->
    
    <div class="row"> 
        <div class = "large-12 columns">
            <nav class="top-bar" data-topbar role="navigation">
                <section class="top-bar-section">
                    <ul class="left"> 
                        <li> <a href="/"> Home </a></li>
                        <li> <a href="/pages/about"> About </a></li>
                        <li> <a href="/cart"> Cart </a></li>
                    </ul>
                </section>
            </nav>
        </div>
     </div>
     
     <!-- other pages will get filled in the body variable --> 
     <div class="row">
        <div class="large-12 columns">
            {+body /}
        </div>
     </div>
     
     <!-- FOOTER -->
    <footer>
        <div class="row">
            <div class="large-12 columns">
                <p> Tekbooks &copy; 2015 | <a href="/manage"> Manage </a> </p>
            </div>
        </div>
    </footer>
    
    
        <!-- INCLUDE JS FILES HERE-->
    
        <script data-main="/js/app" src="/components/requirejs/require.js"></script>
        <script src="/js/vendor/jquery.js"> </script>
        <script src="/js/foundation.js"> </script>
        <script src="/js/main.js"> </script>
        
        <script>
            $(document).foundation();
        
        </script>
    
    </body>
</html>
