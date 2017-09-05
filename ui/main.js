console.log('Loaded!');
var img = document.getElementById('changeimg');
img.onhover = func()
{
  img.style.height='150px';
};
img.onclick = func1()
{
    if(document.getElementById('changeimg')=="http://the-art-of-autism.com/wp-content/uploads/2013/08/CraigRoveta_RefractedLight.jpg")
    {
        document.getElementById('changeimg')="https://www.mupa.hu/f/c9/62/thumb_16211_autistic_art_151210_03-6.jpg/560x350_16211_autistic_art_151210_03-6.jpg";
    }
    else
    {
        document.getElementById('changeimg')="http://the-art-of-autism.com/wp-content/uploads/2013/08/CraigRoveta_RefractedLight.jpg";
    }
};