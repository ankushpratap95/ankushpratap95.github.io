const resource = [ /* --- CSS --- */ '/assets/css/style.css', /* --- PWA --- */ '/app.js', '/sw.js', /* --- HTML --- */ '/index.html', '/404.html', '/about/', '/resume/', '/projects/', '/contact/', /* --- Favicons & compressed JS --- */ '/android-chrome-512x512.png', '/assets/js/dist/categories.min.js', '/assets/js/dist/commons.min.js', '/assets/js/dist/misc.min.js', '/assets/js/dist/page.min.js', '/assets/js/dist/post.min.js' ]; /* The request url with below domain will be cached */ const allowedDomains = [ 'ankushpratap95.github.io', 'ankushpratap95.github.io', 'fonts.gstatic.com', 'fonts.googleapis.com', 'cdn.jsdelivr.net', 'polyfill.io' ]; /* Requests that include the following path will be banned */ const denyUrls = [ ];