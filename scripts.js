document.querySelector('.js--toggle-menu').addEventListener('click', function()
 {
    var e = document.getElementsById('menu-wrapper');
       if(e.style.display == 'inline-block')
          e.style.display = 'none';
       else
          e.style.display = 'inline-block';
});