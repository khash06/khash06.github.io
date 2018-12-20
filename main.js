window.onscroll = function(){scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 640 || document.documentElement.scrollTop > 640) {
        document.getElementById("navbar").style.padding = "30px 10px";
        document.getElementById("logo").style.fontSize = "20px";
        document.getElementById("navbar").style.backgroundColor = "#062F4F";
    } else {
        document.getElementById("navbar").style.padding="40px 10px";
        document.getElementById("logo").style.fontSize="40px"; 
        document.getElementById("navbar").style.backgroundColor = "#4ABDAC";

    }
}