// document.getElementsByClassName("img1")[0].setAttribute("src","/images/dice1.");
function randomF()
{
    var p1, p2;
    p1 = Math.floor(Math.random() * 6) + 1;
    p2 = Math.floor(Math.random() * 6) + 1;

    var firstImage= "dice"+p1+".png";
    console.log(firstImage);
    var secondImage="dice"+p2+".png";

    document.getElementsByClassName("img1")[0].src=firstImage;
    document.getElementsByClassName("img2")[0].src=secondImage;
    
    if (p1 >p2)
        document.getElementsByTagName("h1")[0].innerHTML = "<strong><em>Player 1 has won !</em></strong>"
    else if(p1== p2)
        document.getElementsByTagName("h1")[0].innerHTML = "<strong><em>It's a Draw ! </em></strong>"
    else
        document.getElementsByTagName("h1")[0].innerHTML = "<strong><em>Player 2 has won !</em></strong>"
}