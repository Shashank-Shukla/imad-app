console.log('Loaded!');
var img = document.getElementById('changeimg');
function bigsize()
{
    img.style.height='325px';
}
img.onclick = "bigsize()";
/*function imagechange()
{
    if(document.getElementById("changeimg").src=="http://the-art-of-autism.com/wp-content/uploads/2013/08/CraigRoveta_RefractedLight.jpg")
    {
        document.getElementById("changeimg").src="https://www.mupa.hu/f/c9/62/thumb_16211_autistic_art_151210_03-6.jpg/560x350_16211_autistic_art_151210_03-6.jpg";
    }
    else
    {
        document.getElementById("changeimg").src="http://the-art-of-autism.com/wp-content/uploads/2013/08/CraigRoveta_RefractedLight.jpg";
    }
}
img.onclick = "imagechange()";*/