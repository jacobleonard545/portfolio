AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// Change Theme Color
var themes = [
    {
        // Light Coral
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(240, 128, 128)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Orange
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(255, 140, 0)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Medium Purple
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(147, 112, 219)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Medium Sea Green
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(60, 179, 113)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Teal
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(0, 128, 128)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Clear Chill
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(27, 156, 252)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // green Teal
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(5, 196, 107)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Auora Green
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(120, 224, 143)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Deep Rose
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(196, 69, 105)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Saturted Sky
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(83, 82, 237)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Watermelon
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(255, 71, 87)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Greenland Green
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(34, 166, 179)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Orange Tomato
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(255, 99, 72)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // pink rose
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(237, 76, 103)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // dark grey
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(72, 85, 100)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    // COLORED BACKGROUND THEMES
    {
        // Light Coral
        backgroundColor: "rgb(240, 128, 128)",
        footerColor: "rgb(240, 128, 128)",
        navbarBackgroundColor: "rgba(240, 128, 128, 0.6)",
        primaryColor: "rgb(255, 255, 255)",
        secondaryColor: "rgb(255, 255, 255)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Orange
        backgroundColor: "rgb(255, 140, 0)",
        footerColor: "rgb(255, 140, 0)",
        navbarBackgroundColor: "rgba(255, 140, 0, 0.6)",
        primaryColor: "rgb(255, 255, 255)",
        secondaryColor: "rgb(255, 255, 255)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Medium Purple
        backgroundColor: "rgb(147, 112, 219)",
        footerColor: "rgb(147, 112, 219)",
        navbarBackgroundColor: "rgba(147, 112, 219, 0.6)",
        primaryColor: "rgb(255, 255, 255)",
        secondaryColor: "rgb(255, 255, 255)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Medium Sea Green
        backgroundColor: "rgb(60, 179, 113)",
        footerColor: "rgb(60, 179, 113)",
        navbarBackgroundColor: "rgba(60, 179, 113, 0.6)",
        primaryColor: "rgb(255, 255, 255)",
        secondaryColor: "rgb(255, 255, 255)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Teal
        backgroundColor: "rgb(0, 128, 128)",
        footerColor: "rgb(0, 128, 128)",
        navbarBackgroundColor: "rgba(0, 128, 128, 0.6)",
        primaryColor: "rgb(255, 255, 255)",
        secondaryColor: "rgb(255, 255, 255)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Clear Chill
        backgroundColor: "rgb(27, 156, 252)",
        footerColor: "rgb(27, 156, 252)",
        navbarBackgroundColor: "rgba(27, 156, 252, 0.6)",
        primaryColor: "rgb(255, 255, 255)",
        secondaryColor: "rgb(255, 255, 255)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // green Teal
        backgroundColor: "rgb(5, 196, 107)",
        footerColor: "rgb(5, 196, 107)",
        navbarBackgroundColor: "rgba(5, 196, 107, 0.6)",
        primaryColor: "rgb(255, 255, 255)",
        secondaryColor: "rgb(255, 255, 255)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Auora Green
        backgroundColor: "rgb(120, 224, 143)",
        footerColor: "rgb(120, 224, 143)",
        navbarBackgroundColor: "rgba(120, 224, 143, 0.6)",
        primaryColor: "rgb(255, 255, 255)",
        secondaryColor: "rgb(255, 255, 255)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Watermelon
        backgroundColor: "rgb(255, 71, 87)",
        footerColor: "rgb(255, 71, 87)",
        navbarBackgroundColor: "rgba(255, 71, 87, 0.6)",
        primaryColor: "rgb(255, 255, 255)",
        secondaryColor: "rgb(255, 255, 255)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Greenland Green
        backgroundColor: "rgb(34, 166, 179)",
        footerColor: "rgb(34, 166, 179)",
        navbarBackgroundColor: "rgba(34, 166, 179, 0.6)",
        primaryColor: "rgb(255, 255, 255)",
        secondaryColor: "rgb(255, 255, 255)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Orange Tomato
        backgroundColor: "rgb(255, 99, 72)",
        footerColor: "rgb(255, 99, 72)",
        navbarBackgroundColor: "rgba(255, 99, 72, 0.6)",
        primaryColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 99, 72)",
        secondaryColor: "rgb(255, 255, 255)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // pink rose
        backgroundColor: "rgb(237, 76, 103)",
        footerColor: "rgb(237, 76, 103)",
        navbarBackgroundColor: "rgba(237, 76, 103, 0.6)",
        primaryColor: "rgb(255, 255, 255)",
        secondaryColor: "rgb(255, 255, 255)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // dark grey
        backgroundColor: "rgb(72, 85, 100)",
        footerColor: "rgb(72, 85, 100)",
        navbarBackgroundColor: "rgba(72, 85, 100, 0.6)",
        primaryColor: "rgb(255, 255, 255)",
        secondaryColor: "rgb(255, 255, 255)",
        transparent: "rgb(255,255,255,0)"
    },
];

var themeArr = [];
var counter = 0;
const numOfThemes = 28;


function randomTheme() { // returns a random number
    // no duplicate themes 
    while (themeArr.length < numOfThemes) {
        var ran = Math.floor(Math.random() * numOfThemes);
        if (themeArr.indexOf(ran) === -1) themeArr.push(ran);
    }
    themeArr.splice(themeArr.indexOf(14), 1)
    themeArr.unshift(14)
}

function setTheme() {
    var num = themeArr[counter];
    var primaryColor = themes[num]["primaryColor"];
    var secondaryColor = themes[num]["secondaryColor"];
    var backgroundColor = themes[num]["backgroundColor"];
    var footerColor = themes[num]["footerColor"];
    var navbarBackgroundColor = themes[num]["navbarBackgroundColor"];
    var transparent = themes[num]["transparent"];
    $("html").css("background-color", backgroundColor);
    $("body").css("background-color", backgroundColor);
    $("nav").css("background-color", navbarBackgroundColor);
    $(".secondaryColor").css("color", secondaryColor);
    $(".primaryColor").css({ "color": primaryColor, "border-color": primaryColor });
    $("footer").css("background-color", footerColor);
    $("hr").css("border-color", primaryColor);
    $(".primaryButtonColor").css({ "color": backgroundColor, "background-color": primaryColor });
    $(".secondaryButtonColor").css({ "color": secondaryColor, "border-color": primaryColor });
    $(".primaryButtonColor").hover(function () {
        $(this).css({ "color": primaryColor, "background-color": backgroundColor, "border-color": primaryColor });
    }, function () {
        $(this).css({ "color": backgroundColor, "background-color": primaryColor });
    })
    $(".secondaryButtonColor").hover(function () {
        $(this).css({ "color": backgroundColor, "background-color": primaryColor });
    }, function () {
        $(this).css({ "color": secondaryColor, "background-color": transparent });
    })
    $(".form-control").css("background-color", backgroundColor);
    $(".marker").css("background-color", primaryColor);
    var style = document.querySelector('.container').style;
    style.setProperty('--color', primaryColor);
    setParticleColor(primaryColor);
}


$('#color-btn').click(function () {

    if (counter >= numOfThemes) {
        themeArr = [];
        counter = 0;
        randomTheme();
    }
    setTheme();
    counter++;

})


// Type.js

var options = {
    strings: ["Calvin", "Ambitious", "Dilligent", "Adaptable", "Amazing!!!!"],
    typeSpeed: 200
}

var typed = new Typed("#my-name", {
    strings: options.strings,
    startDelay: 300,
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1000,
    loop: true,
    loopCount: Infinity,
});


// Alert for project button
$("#p-btn").click(function () {
    document.querySelector('.alert-text').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.alert-text').style.display = 'none';
    }, 3000);
})
