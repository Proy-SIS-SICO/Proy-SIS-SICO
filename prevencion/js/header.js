const nav = document.querySelector('.subcontenedor');

window.addEventListener('scroll', function(){
    nav.classList.toggle('active', this.window.scrollY>0)
})