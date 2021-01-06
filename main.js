var name1=["Cover page", "My Father" , "My Mother" , "Myself" , "My Brother" , "My Sister" , "My Whole Family"];
var images=["familybook.png" , "father.jpg" , "mother.jpg" , "me.jpg" , "brother.jpg" , "sister.jpg" , "family.jpg"];
var i=0;
function nextslide() {
document.getElementById("next_name").innerHTML=name1[i];
document.getElementById("image1").src=images[i];
i++;
}