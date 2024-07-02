const asciiArt = `
██╗██╗     ███╗   ███╗██████╗ ██╗  ██╗  
██║██║     ████╗ ████║██╔══██╗╚██╗██╔╝  
██║██║     ██╔████╔██║██████╔╝ ╚███╔╝   
██║██║     ██║╚██╔╝██║██╔══██╗ ██╔██╗   
██║███████╗██║ ╚═╝ ██║██║  ██║██╔╝ ██╗  
╚═╝╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝  
                                        
██████╗ ██╗      █████╗  ██████╗███████╗
██╔══██╗██║     ██╔══██╗██╔════╝██╔════╝
██████╔╝██║     ███████║██║     █████╗  
██╔═══╝ ██║     ██╔══██║██║     ██╔══╝  
██║     ███████╗██║  ██║╚██████╗███████╗
╚═╝     ╚══════╝╚═╝  ╚═╝ ╚═════╝╚══════╝
                                                                                                                        
`;

console.log(asciiArt);

onbeforeunload = (i) => 1;

function sustoggle() {
    var e = document.getElementById("myAdvList");
    "none" === e.style.display || "" === e.style.display ? ((e.style.display = "block"), alert("As of right now these do not work")) : (e.style.display = "none");
}
function toggleList() {
    var e = document.getElementById("changelog");
    "none" === e.style.display || "" === e.style.display ? (e.style.display = "block") : (e.style.display = "none");
}
function SplashSettings() {
    var e = document.getElementById("SplashSettings");
    "none" === e.style.display || "" === e.style.display ? (e.style.display = "block") : (e.style.display = "none");
}
function toggleDevMode() {
    var e = document.getElementById("DevMode");
    "none" === e.style.display || "" === e.style.display ? ((e.style.display = "block"), localStorage.setItem("devModeVisible", "true")) : ((e.style.display = "none"), localStorage.setItem("devModeVisible", "false"));
}
function loadDevModeState() {
    var e = localStorage.getItem("devModeVisible"),
        t = document.getElementById("DevMode");
    t.style.display = "true" === e ? "block" : "none";
}
function privacywarn() {
    confirm(
        "Warning!\n Please do not put your real name or share any info with strangers!\n This room is for everyone who uses the site including out of your school!\n I am not responsible if your personal information is exposed due to your actions."
    );
}
function openApp() {
    // Open a new window
    window.top.location.href = 'https://classroom.google.com';
    var t = window.open("about:blank", "Home", "width=1000,height=850,resizable=yes,scrollbars=no,toolbar=no,location=no");

    // Create an iframe
    var e = document.createElement("iframe");
    e.src = "https://ilmrx.neocities.org/IlmrxPlace";
    e.style.position = "fixed";
    e.style.top = "0";
    e.style.left = "0";
    e.style.width = "100%";
    e.style.height = "100%";
    e.style.border = "none";
    
    // Append the iframe to the new window's document body
    t.document.body.appendChild(e);
    
    // Set cookies
    t.document.cookie = "cookieName=cookieValue; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

    // Set favicon
    t.document.head.innerHTML += '<link rel="icon" type="image/png" href="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico">';

    // Set document title
    t.document.title = "Inbox - (12,553) - Google Mail";
}

function tagcopy() {
    prompt("The fix for copy and pasting is in another update of the file\nIf it didn't work, please download the file again from a trusted source\nTest if you correctly copied the tags here");
}
function Gaming() {
    alert(
        "Hey, the reason this exists is quite simple\nGame sites and games are two different things, obviously.\nI wouldn't want to create lots of clutter, so I created my own!\nThis is subject to change and many more games will be added soon.\nThanks!"
    );
}
function goober() {
    alert("Made by me and @billybobboi. THESE GAMES WERE MADE BY US IN PURE HTML FILES.");
}
function racetrase() {
    alert("Thank you so much @RaceTrase for contributing a well amount of help to this site, half of the features here would not be possible without my homie");
}
function Movies() {
    alert("Sadly, I cannot gather working movie sites in school\nYou can watch free movies on proxies but you'll have little to no luck here");
}
function edpuzzletutorial() {
    confirm("YOU NEED A PERSONAL COMPUTER AT HOME TO DO THIS\nPress Ctrl+Shift+O\nHit Ctrl+V\nLoad any edpuzzle assignment and click the bookmark"),
        navigator.clipboard.writeText("javascript: document.dev_env = 'https://edpuzzle-beta.hs.vc'; fetch('https://edpuzzle-beta.hs.vc/script.js').then(r => r.text()).then(r => eval(r));").then(
            function () {
                alert("Copied to clipboard!");
            },
            function () {
                alert("Failed to copy script to clipboard. Please copy it manually.\njavascript: document.dev_env = 'https://edpuzzle-beta.hs.vc'; fetch('https://edpuzzle-beta.hs.vc/script.js').then(r => r.text()).then(r => eval(r));");
            }
        );
}
function fastassredirect() {
    window.location.href = "https://classroom.google.com/";
}
function custom() {
    var e = document.getElementById("CustomLink").value,
        t = window.open();
    (t.document.body.style.margin = "0"), (t.document.body.style.height = "100vh");
    var o = t.document.createElement("iframe");
    (o.allow = "camera; microphone; display-capture"), (o.allowFullscreen = !0), (o.style.border = "none"), (o.style.width = "100%"), (o.style.height = "100%"), (o.style.margin = "0"), (o.src = e), t.document.body.appendChild(o);
    let n = t.document.createElement("title");
    (n.innerText = "Home"), t.document.head.appendChild(n);
    let a = t.document.createElement("link");
    (a.rel = "shortcut icon"), (a.href = "https://ilmrx.neocities.org/images/misc/favicon.png"), (a.type = "image/png"), t.document.head.appendChild(a);
}
function playSound() {
    document.getElementById("audio").play();
}
document.addEventListener("keydown", (e) => {
    "a" === e.key && console.log("You pressed a!"), console.log(e.key);
}),

document.addEventListener("DOMContentLoaded", () => {
    let e = document.getElementById("last-updated");
    if (e) {
        let t = new Date(document.lastModified),
            o = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric", timeZone: "America/New_York", timeZoneName: "short" };
        e.textContent = new Intl.DateTimeFormat("en-US", o).format(t);
    }
    localStorage.setItem("siteVersion", "1.0.0");
    let t = !0;
    function o() {
        t = !0;
    }
    window.addEventListener("mousemove", o);
    setInterval(function () {
        t &&
            fetch(location.href, { method: "HEAD" })
                .then((e) => {
                    let t = new Date(e.headers.get("Last-Modified"));
                    if (t > new Date(localStorage.getItem("lastModified"))) {
                        localStorage.setItem("lastModified", t);
                        showUpdateBar();
                    }
                })
                .catch((e) => console.error("Error checking for updates:", e));
    }, 1e3);

    function showUpdateBar() {
        let updateBar = document.createElement("div");
        updateBar.textContent = "Update!";
        updateBar.style.position = "fixed";
        updateBar.style.top = "50%";
        updateBar.style.right = "-200px"; // Start position (off-screen)
        updateBar.style.transform = "translateY(-50%)";
        updateBar.style.backgroundColor = "red";
        updateBar.style.color = "white";
        updateBar.style.padding = "20px";
        updateBar.style.zIndex = "1000";
        updateBar.style.borderRadius = "5px";
        updateBar.style.fontFamily = "'Bangers', cursive";
        updateBar.style.fontSize = "20px";
        updateBar.style.transition = "right 0.5s ease"; // Animation for sliding in

        document.body.appendChild(updateBar);

        // Trigger the slide-in animation
        setTimeout(() => {
            updateBar.style.right = "0";
        }, 100); // Delay to ensure the initial style is applied

        // Remove the update bar after 5 seconds
        setTimeout(() => {
            updateBar.style.right = "-200px"; // Slide out
            setTimeout(() => {
                document.body.removeChild(updateBar);
            }, 500); // Wait for the slide-out animation to finish before removing
        }, 5000);
    }

    // Load the Bangers font
    let fontLink = document.createElement("link");
    fontLink.href = "https://fonts.googleapis.com/css2?family=Bangers&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);
});


var quotes = [
    "Um, what the sigma? ❓",
    "Made with 100% beef 🐄",
    "I got silly 😞",
    "Illumerix but freaky 👅",
    "what the tickle dude 👐",
    "Is u a jittleyang or a futuluhtoogan 🔫",
    "Me when Kai Cenat rizzes up my skibidi level 10 ohio fanum tax gyatt 🍑",
    "SHUT UP I FIXED FULLSCREEN 💯",
    "Om num num gnawm nawm gnawm num burmger 🍔",
    "I just ate Uranium 235 feelin zesty rn 👅",
    "A wild Illumerix has appeared 😼",
    "Join rn https://discord.gg/WyK725ypYA 💬",
    "Is this a hard message to get? Who knows... dun dun dunnnn 😲",
    "Not responsible if you get tickled 👐",
    "R.I.P old UI design ☠",
    "This is the official 16th message added 1️⃣6️⃣",
    "Someone leaked my left ear drum on stream 👂",
    "I witawwy lost half the quotes I ever put on the site 😭",
    "womp womp 🎺",
    "monke 🐒",
    "Typed on a $150 Keyboard 💰",
    "Ya'll do not wanna be me fr 🤑💲💸💰",
    "Brainrot 🧟‍️",
    "Fire in the Hole! 🗣🔥🕳",
    "Challenge: Collect every single splash message (There is a 1/10k, 1/69420, and a 1/100M chance) 📢",
    "Leometry Bash 🟨",
    "Her breath is like WOAH 🧺",
    "women (need sum but I get nun) (maybe this website is why) 😭",
    "4 subscriber special 4️⃣",
    "Made on neocities 🐈",
    "Nya!~ Ichi! Ni! San!~ Nya!~ Arigatooooo~  🐱",
    "Lebron James, scream if you love Illumerix Place 🏀",
    "You are my sunshine... My Only Sunshine 🏀",
    "This site originally was a google site 🤮",
    "Boy oh boy, where do I even begin? Illumerix, my coding prodigy, my digital maestro! Since the first click onto your website, I've been captivated. Your mastery of unlocking digital restrictions, it's like witnessing magic in binary form. The way you navigate through firewalls and liberate games from their digital confines, it's truly mesmerizing. Your website, a sanctuary amidst the restrictive landscape of school networks, where games once forbidden now dance freely. I'd traverse the depths of cyberspace just to bask in the glow of your digital ingenuity. If only I could freeze time, to ensure your website remains an eternal haven for gamers. Illumerix, you are the LeBron of digital liberation, my pookie bear, glorious king. 🤓",
    "🙃 uʍop ǝpᴉsdn pɐǝɥ ɹnoʎ uɹnʇ",
    "Typed on a Proxy 💻",
    "@Rainflo be an opp fr 😡",
    "Crazy how I don't give a damn 🙄",
    "WAP WAP WAP WAP 👊",
    "Felt Cute, might del later 🥺",
    "English Teacher be mad annoying 👩‍🏫",
    "I did my dance on TikTok and went viral with it 🕺",
    "God Did 🎤",
    "Dwerpy got nothing on me 🤐",
    "Whoa she got me up damn. 😴",
    "Nah, I'd Illumerix Place 😎",
    "Damn thought I was cooking till she left when I mentioned that I edge to skibidi toilet 😢",
    "Wait, uhh, hold up a minute, just a second, what the tickle dude 👐",
    "Blank Message (or not) 🕳",
    "Ahahahah, yeah. 😌",
    "Oh no, cringe. 😱",
    "This message made you want a croissant 🥐",
    "Typed at 1 AM 😴",
    "english or spanish 😐",
    "ISTG I ONLY WANTED A CUPCAKE 🧁",
    "Woah woah woah there buddy you can't enjoy this website and not subscribe you know what I mean? @Illumerix 👀",
    "Yo why tf this zombie throwin up gang signs like wrd baltimore lookin ahh zombie 🧟️",
    "OH MY GOD WHAT THE ACTUAL FUCK HOLY SHIT THIS MESSAGE WAS A FUCKING 1 in 100 MILLION. 100 MILLION I TELL YOU. HOLY FUCKING SHIT THERE IS NO ACTUAL FUCKING WAY YOU GO THIS SHIT SCREENSHOT AND DM ME FOR PROOF PLEASE PLEASE HOLY FUCKING SHIT WHAT THE ACTUAL FUCKK",
    "HOLY SHITE YOU LITERALLY JUST GOT A 1 IN 69420 MESSAGE ONG TAKE THIS VIDEO AS A CELEBRATION: https://www.youtube.com/watch?v=wGc0jClpTPQ",
    "if you get this message fart on my face (HOLY SHITE THIS IS 1 in 10,000!/?!1!) 🤩",
];
function displayRandomQuote() {
    var e = Math.floor(1e8 * Math.random()) + 1,
        t = document.getElementById("alert-10k").checked,
        o = document.getElementById("alert-69k").checked,
        n = document.getElementById("alert-100m").checked;
    if (1 === e) (document.getElementById("splash-text").innerHTML = quotes[quotes.length - 3]), n && alert("NO WAY NO WAY NO WAY CLICK OK AND READ THE SPLASH MESSAGE");
    else if (e >= 2 && e <= 1440) (document.getElementById("splash-text").innerHTML = quotes[quotes.length - 2]), o && alert("REALLY Rare Message Detected\nButton Hidden");
    else if (e >= 1441 && e <= 1e4) (document.getElementById("splash-text").innerHTML = quotes[quotes.length - 1]), t && alert("Rare Message Detected\nButton Hidden");
    else {
        var a = Math.floor(Math.random() * (quotes.length - 3));
        document.getElementById("splash-text").textContent = quotes[a];
    }
}
function saveTheme(e) {
    localStorage.setItem("selectedTheme", e);
}
function loadTheme() {
    let e = localStorage.getItem("selectedTheme");
    if (e)
        switch (e) {
            case "Matcha":
                Matcha();
                break;
            case "Coffee":
                Coffee();
                break;
            case "Dragon":
                Dragon();
                break;
            case "GruvBox":
                GruvBox();
                break;
            case "Vampyro":
                Vampyro();
                break;
            case "Skibidi":
                Skibidi();
                break;
            case "GitHub":
                GitHub();
                break;
            case "Lobotomy":
                Lobotomy();
                break;
            case "Wyatt":
                Wyatt();
                break;
            case "darkmode":
                darkmode();
                break;
            case "freaky":
                freaky();
                break;
            case "customtheme":
                customtheme(localStorage.getItem("selectedColor"));
                break;
            case "customadvanced1":
                customadvanced1(localStorage.getItem(""));
                break;
            case "Sigma":
                Sigma();
                break;
            case "Sigam":
                Sigam();
                break;
            case "OiOiOi":
                OiOiOi();
                break;
            case "PHub":
                PHub();
                break;
            case "IlmrxFans":
                IlmrxFans();
            case "dwerpy":
              dwerptheme();
        }
}
function Matcha() {
    saveTheme("Matcha"), (document.body.style.backgroundImage = "url('https://ilmrx.neocities.org/images/Background%20Loops/Matcha.png')");
    for (var e = document.getElementsByTagName("v"), t = 0; t < e.length; t++) (e[t].style.backgroundColor = "#86945e"), (e[t].style.boxShadow = "0 0 10px #86945e");
    for (var o = document.getElementsByTagName("a"), n = 0; n < o.length; n++) o[n].style.backgroundImage = "linear-gradient(to right, #6e8641, #121212, #6e8641)";
    (document.getElementById("logo").src = "https://ilmrx.neocities.org/images/Logos/Logo%20Matcha.png"),
        document.querySelectorAll(".trail").forEach(function (e) {
            e.style.backgroundColor = "#c3d4a5";
        });
}
function Coffee() {
    saveTheme("Coffee"), (document.body.style.backgroundImage = "url('https://ilmrx.neocities.org/images/Background%20Loops/Coffee.png')");
    for (var e = document.getElementsByTagName("v"), t = 0; t < e.length; t++) (e[t].style.backgroundColor = "#FBC544"), (e[t].style.boxShadow = "0 0 10px #FBC544");
    for (var o = document.getElementsByTagName("a"), n = 0; n < o.length; n++) o[n].style.backgroundImage = "linear-gradient(to right,#734c0f, #121212, #734c0f)";
    (document.getElementById("logo").src = "https://ilmrx.neocities.org/images/Logos/Logo%20Coffee.png"),
        document.querySelectorAll(".trail").forEach(function (e) {
            e.style.backgroundColor = "#fcba03";
        });
}
function Dragon() {
    saveTheme("Dragon"), (document.body.style.backgroundImage = "url('https://ilmrx.neocities.org/images/Background%20Loops/Dragon.png')");
    for (var e = document.getElementsByTagName("v"), t = 0; t < e.length; t++) (e[t].style.backgroundColor = "#5e1111"), (e[t].style.boxShadow = "0 0 10px #5e1111");
    for (var o = document.getElementsByTagName("a"), n = 0; n < o.length; n++) o[n].style.backgroundImage = "linear-gradient(to right,#4f2828, #121212, #4f2828)";
    (document.getElementById("logo").src = "https://ilmrx.neocities.org/images/Logos/Logo%20Dragon.png"),
        document.querySelectorAll(".trail").forEach(function (e) {
            e.style.backgroundColor = "#4d060e";
        });
}
function GruvBox() {
    saveTheme("GruvBox"), (document.body.style.backgroundImage = "url('https://ilmrx.neocities.org/images/Background%20Loops/GruvBox.png')");
    for (var e = document.getElementsByTagName("v"), t = 0; t < e.length; t++) (e[t].style.backgroundColor = "#FBF1C7"), (e[t].style.boxShadow = "0 0 10px #FBF1C7");
    for (var o = document.getElementsByTagName("a"), n = 0; n < o.length; n++) o[n].style.backgroundImage = "linear-gradient(to right,#FFE195, #121212, #FFE195)";
    (document.getElementById("logo").src = "https://ilmrx.neocities.org/images/Logos/Logo%20GruvBox.png"),
        document.querySelectorAll(".trail").forEach(function (e) {
            e.style.backgroundColor = "#FFF176";
        });
}
function Vampyro() {
    saveTheme("Vampyro"), (document.body.style.backgroundImage = "url('https://ilmrx.neocities.org/images/Background%20Loops/Vampyro.png')");
    for (var e = document.getElementsByTagName("v"), t = 0; t < e.length; t++) (e[t].style.backgroundColor = "#312C42"), (e[t].style.boxShadow = "0 0 10px #312C42");
    for (var o = document.getElementsByTagName("a"), n = 0; n < o.length; n++) o[n].style.backgroundImage = "linear-gradient(to right, #74689D, #121212, #74689D)";
    (document.getElementById("logo").src = "https://ilmrx.neocities.org/images/Logos/Logo%20Vampyro.png"),
        document.querySelectorAll(".trail").forEach(function (e) {
            e.style.backgroundColor = "#6200FF";
        });
}
function Skibidi() {
    saveTheme("Skibidi"), (document.body.style.backgroundImage = "url('https://ilmrx.neocities.org/images/Background%20Loops/Skibidi.png')");
    for (var e = document.getElementsByTagName("v"), t = 0; t < e.length; t++) (e[t].style.backgroundColor = "#AEA57F"), (e[t].style.boxShadow = "0 0 10px #AEA57F");
    for (var o = document.getElementsByTagName("a"), n = 0; n < o.length; n++) o[n].style.backgroundImage = "linear-gradient(to right, #AEA57F, #121212, #AEA57F)";
    (document.getElementById("logo").src = "https://ilmrx.neocities.org/images/Logos/Logo%20Skibidi.png"),
        document.querySelectorAll(".trail").forEach(function (e) {
            e.style.backgroundColor = "#CF9D71";
        });
}
function GitHub() {
    saveTheme("GitHub"), (document.body.style.backgroundImage = "url('https://ilmrx.neocities.org/images/Background%20Loops/Github.png')");
    for (var e = document.getElementsByTagName("v"), t = 0; t < e.length; t++) (e[t].style.backgroundColor = "#1a1c38"), (e[t].style.boxShadow = "0 0 10px #1a1c38");
    for (var o = document.getElementsByTagName("a"), n = 0; n < o.length; n++) o[n].style.backgroundImage = "linear-gradient(to right, #233C60, #121212, #233C60)";
    (document.getElementById("logo").src = "https://ilmrx.neocities.org/images/Logos/Logo%20Github.png"),
        document.querySelectorAll(".trail").forEach(function (e) {
            e.style.backgroundColor = "#2a3085";
        });
}
function Lobotomy() {
    saveTheme("Lobotomy"), (document.body.style.backgroundImage = "url('https://ilmrx.neocities.org/images/Background%20Loops/Lobotomy.png')");
    for (var e = document.getElementsByTagName("v"), t = 0; t < e.length; t++) (e[t].style.backgroundColor = "#169e3a"), (e[t].style.boxShadow = "0 0 10px #169e3a");
    for (var o = document.getElementsByTagName("a"), n = 0; n < o.length; n++) o[n].style.backgroundImage = "linear-gradient(to right, #227338, #121212, #227338)";
    (document.getElementById("logo").src = "https://ilmrx.neocities.org/images/Logos/Logo%20Lobotomy.png"),
        document.querySelectorAll(".trail").forEach(function (e) {
            e.style.backgroundColor = "#00ff44";
        });
}
function darkmode() {
    saveTheme("darkmode"), (document.body.style.backgroundImage = "url('https://ilmrx.neocities.org/images/Background%20Loops/Dark%20Mode.png')");
    for (var e = document.getElementsByTagName("v"), t = 0; t < e.length; t++) (e[t].style.backgroundColor = "#2A2A2A"), (e[t].style.boxShadow = "0 0 10px #2A2A2A");
    for (var o = document.getElementsByTagName("a"), n = 0; n < o.length; n++) o[n].style.backgroundImage = "linear-gradient(to right, #575757, #121212, #575757)";
    (document.getElementById("logo").src = "https://ilmrx.neocities.org/images/Logos/Logo%20Dark.png"),
        document.querySelectorAll(".trail").forEach(function (e) {
            e.style.backgroundColor = "#B3AAAA";
        });
}
function freaky() {
    saveTheme("freaky"), (document.body.style.backgroundImage = "url('https://ilmrx.neocities.org/images/Background%20Loops/Freaky.png')");
    for (var e = document.getElementsByTagName("v"), t = 0; t < e.length; t++) (e[t].style.backgroundColor = "#FF677F"), (e[t].style.boxShadow = "0 0 10px #FF677F");
    for (var o = document.getElementsByTagName("a"), n = 0; n < o.length; n++) o[n].style.backgroundImage = "linear-gradient(to right, #FF677F, #121212, #FF677F)";
    (document.getElementById("logo").src = "https://ilmrx.neocities.org/images/Logos/Logo%20Freaky.png"),
        document.querySelectorAll(".trail").forEach(function (e) {
            e.style.backgroundColor = "#FF0F0F";
        });
}
function customtheme(e) {
    for (var t = document.getElementsByTagName("v"), o = 0; o < t.length; o++) (t[o].style.backgroundColor = e), (t[o].style.boxShadow = "0 0 10px " + e);
    for (var n = document.getElementsByTagName("a"), a = 0; a < n.length; a++) n[a].style.backgroundImage = `linear-gradient(to right, ${e}, #121212, ${e})`;
    (document.body.style.backgroundImage = "url('https://ilmrx.neocities.org/images/Background%20Loops/Custom.png')"),
        (document.body.style.backgroundColor = e),
        (document.getElementById("logo").src = "https://ilmrx.neocities.org/images/Logos/Logo%20Dark.png"),
        saveTheme("customtheme"),
        document.querySelectorAll(".trail").forEach(function (t) {
            t.style.backgroundColor = e;
        });
}
function handleColorChange() {
    var e = document.getElementById("themeColorPicker").value;
    localStorage.setItem("selectedColor", e), customtheme(e);
}
function customAdvanced1() {
    for (
        var e = document.getElementById("LogoImage").value,
            t = document.getElementById("BgImage").value,
            o = document.getElementById("BgColor").value,
            n = document.getElementById("HdrColor").value,
            a = document.getElementById("Bg1Color").value,
            r = document.getElementById("Bg2Color").value,
            l = document.getElementById("TrailColor").value,
            s = document.getElementsByTagName("v"),
            i = 0;
        i < s.length;
        i++
    )
        (s[i].style.backgroundColor = o), (s[i].style.boxShadow = "0 0 10px " + o);
    for (var c = document.getElementsByTagName("a"), d = 0; d < c.length; d++) c[d].style.backgroundImage = `linear-gradient(to right, ${a}, ${r})`;
    (document.body.style.backgroundImage = `url('${t}')`),
        (document.body.style.backgroundColor = o),
        (document.getElementById("logo").src = e),
        localStorage.setItem("selectedBackgroundColor", o),
        localStorage.setItem("selectedBackgroundImage", t),
        localStorage.setItem("selectedHeaderColor", n),
        localStorage.setItem("selectedButtonGradient1", a),
        localStorage.setItem("selectedButtonGradient2", r),
        localStorage.setItem("selectedTrailColor", l),
        document.querySelectorAll(".trail").forEach(function (e) {
            e.style.backgroundColor = l;
        });
}
function Sigma() {
    saveTheme("Sigma"), (document.body.style.backgroundImage = "url('https://ilmrx.neocities.org/images/Background%20Loops/Sigma.png')");
    for (var e = document.getElementsByTagName("v"), t = 0; t < e.length; t++) (e[t].style.backgroundColor = "#E32A11"), (e[t].style.boxShadow = "0 0 10px #E32A11");
    for (var o = document.getElementsByTagName("a"), n = 0; n < o.length; n++) o[n].style.backgroundImage = "linear-gradient(to right, #4d1710, #121212, #4d1710)";
    document.querySelectorAll(".trail").forEach(function (e) {
        e.style.backgroundColor = "#992617";
    }),
        (document.getElementById("logo").src = "https://ilmrx.neocities.org/images/Logos/Logo%20Sigma.png");
}
function Sigam() {
    saveTheme("Sigam"), (document.body.style.backgroundImage = "url('https://ilmrx.neocities.org/images/Background%20Loops/Sigam.png')");
    for (var e = document.getElementsByTagName("v"), t = 0; t < e.length; t++) (e[t].style.backgroundColor = "#E32A11"), (e[t].style.boxShadow = "0 0 10px #E32A11");
    for (var o = document.getElementsByTagName("a"), n = 0; n < o.length; n++) o[n].style.backgroundImage = "linear-gradient(to right, #4d1710, #121212, #4d1710)";
    document.querySelectorAll(".trail").forEach(function (e) {
        e.style.backgroundColor = "#992617";
    }),
        (document.getElementById("logo").src = "https://ilmrx.neocities.org/images/Logos/Logo%20Sigam.png");
}
function OiOiOi() {
    saveTheme("OiOiOi"), (document.body.style.backgroundImage = "url('https://ilmrx.neocities.org/images/Background%20Loops/OIOIOI.png')");
    for (var e = document.getElementsByTagName("v"), t = 0; t < e.length; t++) (e[t].style.backgroundColor = "#D53219"), (e[t].style.boxShadow = "0 0 10px #D53219");
    for (var o = document.getElementsByTagName("a"), n = 0; n < o.length; n++) o[n].style.backgroundImage = "linear-gradient(to right, #AD3014, #121212, #AD3014)";
    document.querySelectorAll(".trail").forEach(function (e) {
        e.style.backgroundColor = "#FE9F39";
    }),
        (document.getElementById("logo").src = "https://ilmrx.neocities.org/images/Logos/Logo%20OIOIOI.png");
}
function PHub() {
    saveTheme("PHub"), (document.body.style.backgroundImage = "url('https://ilmrx.neocities.org/images/Background%20Loops/IlmrxHub.png')");
    for (var e = document.getElementsByTagName("v"), t = 0; t < e.length; t++) (e[t].style.backgroundColor = "#FF9900"), (e[t].style.boxShadow = "0 0 10px #FF9900");
    for (var o = document.getElementsByTagName("a"), n = 0; n < o.length; n++) o[n].style.backgroundImage = "linear-gradient(to right, #000000, #121212, #000000)";
    document.querySelectorAll(".trail").forEach(function (e) {
        e.style.backgroundColor = "#FF8011";
    }),
        (document.getElementById("logo").src = "https://ilmrx.neocities.org/images/Logos/LogoIlmrxHub.png");
}
function IlmrxFans() {
    saveTheme("IlmrxFans"), (document.body.style.backgroundImage = "url('https://ilmrx.neocities.org/images/Background%20Loops/IlmrxFans.png')");
    for (var e = document.getElementsByTagName("v"), t = 0; t < e.length; t++) (e[t].style.backgroundColor = "#00AFF0"), (e[t].style.boxShadow = "0 0 10px ");
    for (var o = document.getElementsByTagName("a"), n = 0; n < o.length; n++) o[n].style.backgroundImage = "linear-gradient(to right, #00688E, #121212, #00688E)";
    document.querySelectorAll(".trail").forEach(function (e) {
        e.style.backgroundColor = "#00688E";
    }),
        (document.getElementById("logo").src = "https://ilmrx.neocities.org/images/Logos/Logo%20OF.png");
}
function dwerptheme() {
    saveTheme("dwerpy"), (document.body.style.backgroundImage = "url('https://ilmrx.neocities.org/images/Background%20Loops/Dwerpy.png')");
    for (var e = document.getElementsByTagName("v"), t = 0; t < e.length; t++) (e[t].style.backgroundColor = "#E6AE5E"), (e[t].style.boxShadow = "0 0 10px ");
    for (var o = document.getElementsByTagName("a"), n = 0; n < o.length; n++) o[n].style.backgroundImage = "linear-gradient(to right, #E49E4A, #121212, #E49E4A)";
    document.querySelectorAll(".trail").forEach(function (e) {
        e.style.backgroundColor = "#00688E";
    }),
        (document.getElementById("logo").src = "https://ilmrx.neocities.org/images/Logos/Logo%20Dwerpy.png");
}
document.addEventListener("DOMContentLoaded", function () {
    var e, t;
    function o() {
        return Math.random().toString(36).substr(2, 8);
    }
    let a = localStorage.getItem("userID");
    a || ((a = o()), localStorage.setItem("userID", a));
    if ((console.log("User ID:", a), ["0b3klz72"].includes((e = a)))) {
        (document.body.innerHTML = '<iframe src="https://ilmrx.neocities.org/banpage" style="width:100vw; height:100vh; border:none; margin:0; padding:0; overflow:hidden;" allowfullscreen></iframe>'),
            console.log("User is banned. Redirecting...");
            alert('AHAHAHAHAHAH');
        return;
    }
    if (["0wflhw4u", "xj37vm1k", "y5qb81s5", "d5i82h2d", "lpd69wka", "p9gcggcv", "h7gvvzqw", "0dtpxetc", "g46396pf", "0b3klz72", "0ph30m25", "ij6j02s7"].includes((t = a))) {
        (document.getElementById("devTools").style.display = "block"),
            (document.getElementById("devTools").style.textAlign = "center"),
            (document.getElementById("ownerButton1").style.display = "block"),
            (document.getElementById("ownerButton2").style.display = "block"),
            console.log("User is the owner");
        localStorage.getItem("devToolsAlertShown") || (alert("You have dev tools enabled"), localStorage.setItem("devToolsAlertShown", "true"));
    } else console.log("User is not the owner");
    let n = JSON.parse(localStorage.getItem("userIDs"));
    if (!n) {
        let r = (function e(t) {
            let a = [];
            for (let n = 0; n < 7; n++) a.push(o());
            return a;
        })(7);
        r.splice(r.length - 2, 0, a), localStorage.setItem("userIDs", JSON.stringify(r)), (n = r);
    }
    let l = document.getElementById("userTag");
    l ? ((l.textContent = `User Tags: ${n.join(", ")}`), console.log("User tag updated:", l.textContent)) : console.log("User tag element not found");
    let s = document.getElementById("copyButton");
    s.addEventListener("click", function () {
        let e = l.textContent;
        navigator.clipboard
            .writeText(e)
            .then(function () {
                console.log("Copied to clipboard:", e);
            })
            .catch(function (e) {
                console.error("Error copying to clipboard:", e), console.log("Fallback copy method: tagcopy() called");
            });
    });
}),

    document.getElementById("themeColorPicker").addEventListener("input", handleColorChange);

    const TheLink = document.getElementById("CustomLink").value;