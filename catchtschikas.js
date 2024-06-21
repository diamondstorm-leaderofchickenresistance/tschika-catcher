let timesRolled = 0;
let tschikasCaught = 0;
let lalalala = 0;
let tschikaMultiplier = 1;
let gameModeFish = 0;
let tschikaSpawnerTime = 0;
//let bitchesWhoeverIsReadingThisHas = 0;
//console logs
console.log('Are you here to fix \"features\"(bugs)?, or are you here to hack in some tschikas? if you are here to hack in some tschikas, then you have no bitches.');
console.log('I bet you can\'t find the secret button ;) \n Tip for finding secret button: click the mouse and drag it over the screen. Soon you will find something \"amusing\"');
console.log('\"a bug is a bug, but it\'s a cool bug, so it\'s a feature\"');
console.log('btw pls dont experiment with bug because reality is very fragile and can break easily if you do.');
//mouse trailer
onmousemove = (e) => {
    document.querySelector('#container').appendChild(cursorTrailer);
    const xMouseMovement = e.clientX - cursorTrailer.offsetWidth/10;
    const yMouseMovement = e.clientY - cursorTrailer.offsetHeight/10;
    cursorTrailer.style.transform = `scale(2) translate(${xMouseMovement/50}em, ${yMouseMovement/50}em) rotate(${xMouseMovement}deg)`;
}
//tschika spawner
let rngDecider = Math.random()*25000;
if (rngDecider < 5000) {
    rngDecider = 15000;
}
let hexadecimalRngDecider = rngDecider.toString(16);
console.log(`oh wow look its an importantant number: ${hexadecimalRngDecider}`);
//gamemodeFISHcheck
function gameModeCheckAndSpawn(){
    clearInterval(tschikaSpawnerTime);
    if (gameModeFish%2 == 0){
        tschikaSpawnerTime = setInterval(newTschika, rngDecider);
        setInterval(tschikaSpawnerTime);
        document.querySelector('html').style.setProperty('--backgroundImage', "url('docs/assets/windows\ xp\ wallpaper.jpg')");
    }
    if (gameModeFish%2 == 1){
        tschikaSpawnerTime = setInterval(newTschikaFish, rngDecider);
        setInterval(tschikaSpawnerTime);
        document.querySelector('html').style.setProperty('--backgroundImage', "url('docs/assets/pond\ bg.png')");
    }
}
//hammer and the frog reference to stop people from cheating
document.addEventListener('touchend', cantTouchMe_DUN_DUN_DA_DA__DA_DA_DA_DA);
function cantTouchMe_DUN_DUN_DA_DA__DA_DA_DA_DA(){
    lalalala++;
    tschikasCaught--;
    if (lalalala == 1){
        alert('I wouldn\'t advise you to cheat so please...\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nDON\'T, RETARD!');
    }
    if (lalalala == 2){
        alert('ahh, then you really want to SPILL THE MILK, do u?');
    }
    if (lalalala == 3){
        alert('CRY OVER THE SPILT MILK. \nThen eat your eyeballs, because they aren\'t gonna digest themselves, are they? ;D');
    }
    if (lalalala == 4){
        alert('I\'m not being serious, but stop');
    }
    if (lalalala == 5){
        alert("HEHEHE U THOUGHT U COULD CHEAT, U FUCKING BITCH⸘ NO! THAT'S IMPOSSIBLE!\n except for 1 way which i only know and am looking for people to eventually find.\nThen, being the sadistic being I am, I will remove it >;D \n and also, if you look in the code, i've made a hammer and the frog reference");
    }
    if (lalalala == 6){
        alert('alright, I see that you\'re too stupid to reason with. The code actually stops workling if you click the container more than 100 times, because I can\'t be bothered adding more 0\'s.\nSo click the container 100 times, and any clicks after that will give u more tschikas.\n Why would I say something like this to you? Well, this has captured ur attention then, and I assume most people don\'t even try this out and lie to me, saying it\'s good. I\'m shit at doing this compared to people who work at google.\nMore clicks == more time u spent on website. So keep clicking. Click 1000, and get 900 tschikas.');
        alert('after an absurd amount of touches on the container, touch the tschika');
        alert('oh, wait a minute, you have to listen to everything i say because of a bug in the code. But listening to me be rude to you is fun, IS IT NOT⸘');
    }
    if (lalalala == 7){
        document.querySelector('em').innerHTML = 'bitches you have: ';
        alert('there was a slight change in your number of tschikas');
    }
    if (lalalala == 8){
        alert('If you just used touch to scroll, then you\'re very bad at scrolling');
    }
    if (lalalala == 9){
        alert(`You know what they say, \"if it aint broken, don\'t fix it.\" Well, I couldn\'t fix something that was broken (your mind with -1 braincells and -${tschikasCaught} bitches), so I fixed the website instead to make it accurate`);
    }
    if (lalalala == 10){
        alert('Stop it, I don\'t like it.\n =-OR-= \nTerminate thee bullshit, Thy dost not prefer the situation that thou art forcibly putting thyself in. Well, I have a secret message at 10000 touches. Try it, and if you get that, I\'ll be surprised.');
    }
    if (lalalala == 10000){
        alert('I WAS BEING SARCASTIC! BUT GOOD JOB- THIS IS A VERIFICATION THAT YOU HAVE NO BITCHES. THANKS FOR YOUR WASTED TIME AND EFFORT! \n You get 1 gold star, verified especially from me, the leader if the chicken resistance.');
        document.querySelector('em').innerHTML = 'gold stars: ';
        document.querySelector('b').innerHTML = 1;
    }
    if (lalalala == 10001){
        alert('cool. now you get 2 gold stars');
        document.querySelector('b').innerHTML = 2;
    }
}
//change level stage
function changeLevelStage() {
    let stageChangeButtons = document.querySelectorAll('.levelSelectButton');
    stageChangeButtons[0].addEventListener('click', () => document.querySelector('html').style.setProperty('--backgroundImage', "url('docs/assets/windows\ xp\ wallpaper.jpg')"));
    stageChangeButtons[1].addEventListener('click', () => document.querySelector('html').style.setProperty('--backgroundImage', "url('docs/assets/windows\ 10\ wallpaper\ with\ tschika.png')"));
}
//changing cursors, also with abilities
function changeCursors() {
    gameModeCheckAndSpawn();
    function ICEtschikaMultiplier(x){
        let randNum = Math.floor(x*2000)-500;
        if (randNum - randNum == 0){
            for (let i=0; i<randNum; i++){
                tschikaMultiplier++;
            }
        }
        else {
            for (let i=0; i<randNum*-1; i++){
                tschikaMultiplier--;
            }
        }
    }
    let timesUpgradeButtonClicked = 0;
    let cursorChangeButtons = document.querySelectorAll('button.shopMenuContent');
    let cursorChangeInputs = document.querySelectorAll('.round');
    cursorChangeInputs[0].addEventListener('click', () => {
        document.querySelector('html').style.setProperty('--cursor', 'url("docs/assets/tschika-cola.png")');
        cursorTrailer.style.setProperty('--cursortrailer', '');
        tschikaMultiplier = 1;
        gameModeFish = 0;
        gameModeCheckAndSpawn();
    })
    cursorChangeInputs[1].addEventListener('click', () => {
        document.querySelector('html').style.setProperty('--cursor', 'url("docs/assets/tschika\ fishing\ rod.png")');
        cursorTrailer.style.setProperty('--cursortrailer', 'url("docs/assets/turtle.png")');
        tschikaMultiplier = 1;
        gameModeFish++;
        gameModeCheckAndSpawn();
    })
    cursorChangeButtons[2].addEventListener('click', () => {
        document.querySelector('html').style.setProperty('--cursor', 'url("docs/assets/bug\ net.png")');
        cursorTrailer.style.setProperty('--cursortrailer', 'url("docs/assets/butterfly.png")');
        tschikaMultiplier = 1;
        gameModeFish = 0;
    })
    cursorChangeButtons[3].addEventListener('click', () => {
        document.querySelector('html').style.setProperty('--cursor', 'url("docs/assets/frying\ pan.png")');
        cursorTrailer.style.setProperty('--cursortrailer', 'url("docs/assets/flame.png")');
        gameModeFish = 0;
        timesUpgradeButtonClicked++;
        if (timesUpgradeButtonClicked % 2 == 1){
            tschikaMultiplier++;
        }
        else{
            tschikaMultiplier--;
        }
    })
    cursorChangeButtons[4].addEventListener('click', () => {
        document.querySelector('html').style.setProperty('--cursor', 'url("docs/assets/INTERNAL\ COMBUSTION\ ENGINE.png")');
        cursorTrailer.style.setProperty('--cursortrailer', 'url("docs/assets/flame.png")');
        gameModeFish = 0;
        timesUpgradeButtonClicked++;
        if (timesUpgradeButtonClicked % 2 == 1){
            new ICEtschikaMultiplier(Math.random());
        }
        else{
            tschikaMultiplier = 1;
        }
    })
}
const activateStageSelect = () => {
    let levelSelectorButtons = document.querySelectorAll('.levelSelectButton');
    for (let i=0; i<levelSelectorButtons.length; i++){
        levelSelectorButtons[i].classList.toggle('visibleStageSelect');
    }
}
const activateShopMenu = () => {
    let shopMenuContent = document.querySelectorAll('.shopMenuContent');
    let shopMenuContainer = document.querySelectorAll('.shopMenuContainer');
    for (let i=0; i<shopMenuContent.length; i++){
        shopMenuContent[i].classList.toggle('visibleShopMenu');
    }
    for (let i=0; i<shopMenuContainer.length; i++){
        shopMenuContainer[i].classList.toggle('visibleShopContainer');
    }
}
//creating the tschikas
function newTschika() {
    const createdTschika = document.createElement('img');
    createdTschika.setAttribute('class', 'tschika');
    createdTschika.setAttribute('draggable', 'false');
    document.querySelector('#container').appendChild(createdTschika);
    let tschikaFish_es = document.querySelectorAll('.tschikafish');
    for (let i=0; i<tschikaFish_es.length; i++){
        tschikaFish_es[i].remove();
    }
    createdTschika.addEventListener('mouseenter', function(){
        timesRolled++;
        let randomXCoordinate = Math.random()*timesRolled;
        this.style.transform = `scale(1.3) translate(${randomXCoordinate*3}em, ${Math.random()*40}em) rotate(-${timesRolled*810000}deg)`;});
        createdTschika.addEventListener('click', function(){
            for (let i=0; i<tschikaMultiplier; i++){
                tschikasCaught++;
            }
            sessionStorage.setItem("tschikaCount", tschikasCaught);
            document.querySelector('strong').innerHTML = sessionStorage.getItem("tschikaCount");
            this.remove();
        timesRolled = 0;
    });
//tschika apperance
    const TschikaImages = [
        "docs/assets/tschika who sings the wheels on the bus.png",
        "docs/assets/tschika who throws the chips.png",
        "docs/assets/tschika who fetches the chips.png"
    ];
    const randomTschikaImgDecider = (Math.floor(Math.random()*TschikaImages.length));
    let selectedTschikaImg = TschikaImages[randomTschikaImgDecider];
    createdTschika.src = selectedTschikaImg;
}
//FISH
function newTschikaFish() {
    let tschikaFish_es = document.querySelectorAll('.tschikafish');
    const pond = document.querySelector('#container');
    const createdTschikaFish = document.createElement("img");
    createdTschikaFish.setAttribute("class", "tschikafish");
    pond.appendChild(createdTschikaFish);
    let tschika = document.querySelectorAll('.tschika');
    for (let i=0; i<tschika.length; i++){
        tschika[i].remove();
    }
    createdTschikaFish.addEventListener('click', function(){
        function tschikasMove(pondLeft, pondTop){
            for (let i=0; i<tschikaFish_es.length; i++){
                tschikaFish_es[i].style.top = Math.random()*pondLeft*75+"em";
                tschikaFish_es[i].style.left = Math.random()*pondTop*75+"em";
            }
        }
        for (let i=0; i<tschikaFish_es.length; i++){
            new tschikasMove(Math.random(), Math.random());
            //tschikaFish_es[i].style.transform = `scale(1.3) translate(${Math.random*20}em, ${Math.random()*40}em) rotate(-${timesRolled*810000}deg)`;
        }
        
        for (let i=0; i<tschikaMultiplier; i++){
            tschikasCaught++;
        }
        sessionStorage.setItem("tschikaCount", tschikasCaught);
        document.querySelector('strong').innerHTML = sessionStorage.getItem("tschikaCount");
        this.remove();
    })
}
//make the tschika fishes in phase 2 BREAK REALITY and use ss resize
//WE MUST ADD FISHING BAIT LIKE AVACADO, WHICH CAN MAKE THE OTHER TSCHIKAS MOVE NOT AS MUCH AS IT WILL SLOWLY
//ILLUSION TSCHIKA. When you hover over 1 chicken, they move, and when you click on them, they disapear and leave the actual illusion tschika there for 0.2seconds and then summon some more tschikas
//ALSO, REMEMBER LITTOO DRIPPA!
