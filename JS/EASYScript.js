
// Calculate the version number shown on the CMD prompt
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd + '.' + mm + '.' + yyyy;
document.getElementById("datelabel").innerHTML = "Elosoft Windows [Version " + today + "]";

// var screenheight = window.screen.height;
var screenheight = window.innerHeight - 50;
var screenheightpx = screenheight + "px"
document.getElementById("premenudiv").style.height = screenheightpx;

// When the user scrolls the page at all, call scrollFunction
window.onscroll = function() {scrollFunction()};

// Get the navbar & Segments
var navbar = document.getElementById("navBarContainer");
var ELink = document.getElementById("ELink");
var ALink = document.getElementById("ALink");
var SLink = document.getElementById("SLink");
var YLink = document.getElementById("YLink");

// Get heights of sections
var EHeight = document.getElementById('EContent').offsetHeight + 50;
var AHeight = document.getElementById('AContent').offsetHeight + 50;
var SHeight = document.getElementById('SContent').offsetHeight + 50;
var YHeight = document.getElementById('YContent').offsetHeight + 50;

var i = 0;
var i2 = 0;
var typingtext = "start welcome.exe.     .     .";
var typingtext2 = "Welcome to my website. Scroll down to see what I've been up to!";

function typeWriter() {
    
    if (i < typingtext.length) {

        var normaltext = document.getElementById("typinglabel").innerHTML;
        underscoreremoved = normaltext.slice(0, -1);
        document.getElementById("typinglabel").innerHTML = underscoreremoved;
        document.getElementById("typinglabel").innerHTML += typingtext.charAt(i);
        document.getElementById("typinglabel").innerHTML += "_";
        i++;
        setTimeout(typeWriter, 125);

        if (i == 30) {
            typeWriterComplete();
            document.getElementById("typinglabel").innerHTML.slice(0, -1);
        }

    } else {

        if (i2 < typingtext2.length) {

            var normaltext = document.getElementById("typinglabel2").innerHTML;
            underscoreremoved = normaltext.slice(0, -1);
            document.getElementById("typinglabel2").innerHTML = underscoreremoved;
            document.getElementById("typinglabel2").innerHTML += typingtext2.charAt(i2);
            document.getElementById("typinglabel2").innerHTML += "_";

            i2++;
            setTimeout(typeWriter, 10);

            if (i2 == 63) {
                blinkloop();
            }

        } 
    }
}

function typeWriterComplete() {
    document.getElementById("typinglabel").innerHTML = document.getElementById("typinglabel").innerHTML.slice(0, -1);
}

function blinkloop() {
    document.getElementById("typinglabel2").innerHTML = document.getElementById("typinglabel2").innerHTML.slice(0, -1);
    setTimeout(bloploop, 300);
}

function bloploop() {
    document.getElementById("typinglabel2").innerHTML += "_";
    setTimeout(blinkloop, 300);
}

// Test for if user has scrolled further than the logo image, then apply the sticky class if true
function scrollFunction() {
    if (document.body.scrollTop >= (screenheight-50) || document.documentElement.scrollTop >= (screenheight-50)) {
    	navbar.classList.add("sticky");
    } else {
    	navbar.classList.remove("sticky");
    }
	
	if (document.documentElement.scrollTop < (screenheight+50)) {
		ELink.classList.remove("EcurrentSection");
		ALink.classList.remove("AcurrentSection");
		SLink.classList.remove("ScurrentSection");
		YLink.classList.remove("YcurrentSection");
		navbar.classList.add("EcurrentSection");
		navbar.classList.remove("AcurrentSection");
		navbar.classList.remove("ScurrentSection");
		navbar.classList.remove("YcurrentSection");
	} else if (document.documentElement.scrollTop >= (screenheight+50) && (document.documentElement.scrollTop < (EHeight+screenheight+50))) {
		ELink.classList.add("EcurrentSection");
		ALink.classList.remove("AcurrentSection");
		SLink.classList.remove("ScurrentSection");
		YLink.classList.remove("YcurrentSection");
		navbar.classList.add("EcurrentSection");
		navbar.classList.remove("AcurrentSection");
		navbar.classList.remove("ScurrentSection");
		navbar.classList.remove("YcurrentSection");
	} else if (document.documentElement.scrollTop >= (EHeight+screenheight+50) && (document.documentElement.scrollTop < (EHeight+AHeight+screenheight+50))) {
		ELink.classList.remove("EcurrentSection");
		ALink.classList.add("AcurrentSection");
		SLink.classList.remove("ScurrentSection");
		YLink.classList.remove("YcurrentSection");
		navbar.classList.remove("EcurrentSection");
		navbar.classList.add("AcurrentSection");
		navbar.classList.remove("ScurrentSection");
		navbar.classList.remove("YcurrentSection");
	} else if (document.documentElement.scrollTop >= (EHeight+AHeight+screenheight+50) && (document.documentElement.scrollTop < (EHeight+AHeight+SHeight+screenheight+50))) {
		ELink.classList.remove("EcurrentSection");
		ALink.classList.remove("AcurrentSection");
		SLink.classList.add("ScurrentSection");
		YLink.classList.remove("YcurrentSection");
		navbar.classList.remove("EcurrentSection");
		navbar.classList.remove("AcurrentSection");
		navbar.classList.add("ScurrentSection");
		navbar.classList.remove("YcurrentSection");
	} else if (document.documentElement.scrollTop >= (EHeight+AHeight+SHeight+screenheight+50)) {
		ELink.classList.remove("EcurrentSection");
		ALink.classList.remove("AcurrentSection");
		SLink.classList.remove("ScurrentSection");
		YLink.classList.add("YcurrentSection");
		navbar.classList.remove("EcurrentSection");
		navbar.classList.remove("AcurrentSection");
		navbar.classList.remove("ScurrentSection");
		navbar.classList.add("YcurrentSection");
	}
	
}

// Scroll to the point where the menu becomes sticky when trying to close CMD prompt
function scrollToContent() {
	window.scrollBy({ 
		top: screenheight, // could be negative value
		left: 0, 
		behavior: 'smooth' 
	});
}

// Socials sidebar function is defined here
function openLinkedIn() {
// 	window.open("", "_blank");
	window.alert("LinkedIn page under construction :)");
}

function openGitHub() {
	window.open("https://github.com/elledot", "_blank");
}