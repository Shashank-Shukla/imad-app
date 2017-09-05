console.log('Loaded!');
var img = document.getElementById('changeimg');
var val=0;
img.onclick = "bigsize(200)";
function bigsize(val)
{
    val=val+1;
    img.style.width=val+'px';
    if(val<100)
    {
        setTimeout("bigsize(val)",10);
    }
}

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