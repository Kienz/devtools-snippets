// jquerify.js
// https://github.com/bgrins/devtools-snippets
// Add jQuery to any page that does not have it already.

(function () {

  if ( !window.jQuery ) {
    var s=document.createElement('script');
    s.setAttribute('src','//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js');
    document.body.appendChild(s);
  }

})();
