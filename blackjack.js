isalife = false
cards = document.getElementById("cards")
sumel = document.getElementById("sum-el")
let sum = 0
cardplace = 1
function NewCard()
{
    console.log("New card selected")
    GetCard()
}
function StartGame()
{
    document.getElementById("message-el").textContent = "Want to play a round?"
    let status = document.getElementById("StartGame").textContent
    if (status === "START GAME") {
        //refreshpage()
        document.getElementById("StartGame").textContent = "GAME RUNNING"
        isalife = true
        //refreshpage()
    }
    else if (status === "RELOAD GAME.")
    { 
        refreshpage()
    }
    else {
        console.log("Start game click")
    isalife = true
    document.getElementById("StartGame").textContent = "GAME RUNNING"
    }
    
    
}
function GetCard() {
    let status = document.getElementById("StartGame").textContent
    if (status === "RELOAD GAME.")
    {
        refreshpage()
        }
    if (isalife) {
        let card = Math.random()
        card = (Math.floor(card * 13)) + 1
        sum += card
        cards.textContent += card + " "
        sumel.textContent = "Sum: " + sum
        
        if (card === 11){
            card = "king"
        }
        else if (card == 12) {
            card = "q"
        }
        else if (card === 13)
        {
            card = "j"
            }
        let game = {
            image : "images/" + card + ".jpg"
        }
        image(game.image)
        if (sum === 21) {
            document.getElementById("message-el").textContent = "HURRAY YOU GOT a BLACKJACK, You Won!!!"
            window.alert("HURRAY YOU GOT a BLACKJACK, You Won!!!, Start a New Game")
            document.getElementById("StartGame").textContent = "RELOAD GAME."
        }
        else if (sum > 21)
        {
            document.getElementById("message-el").textContent = "BETTER LUCK NEXT TIME, You Are Out... Start a New Game"
            document.getElementById("StartGame").textContent = "RELOAD GAME."
            }
    }
    else
    {
        window.alert("you need to start the game")
        }
    
}

function image(pix)
{
    //dynamically add an image and set its attribute
    var img = document.createElement("img");
    img.src = pix
    img.id = "picture"
    if (cardplace === 1)
    {
        var foo = document.getElementById("cardImg");
        foo.appendChild(img);
        cardplace = cardplace + 1
    }
    else if (cardplace === 2)
    {
        var foo = document.getElementById("cardImg2");
        foo.appendChild(img);
        cardplace++
    }
    else if (cardplace === 3)
    {
        var foo = document.getElementById("cardImg3");
        foo.appendChild(img);
        cardplace++
    }
    else if (cardplace === 4)
    {
        var foo = document.getElementById("cardImg4");
        foo.appendChild(img);
        cardplace++
    }
    else if (cardplace === 5)
    {
        var foo = document.getElementById("cardImg5");
        foo.appendChild(img);
        cardplace++
    }
    else if (cardplace === 6)
    {
        var foo = document.getElementById("cardImg6");
        foo.appendChild(img);
        cardplace++
    }
    else
    {
        document.getElementById("message-el").textContent = "OUT OF CARD OPTIONS!!!"
        document.getElementById("StartGame").textContent = "RELOAD GAME."
    }
}
function saveMyGame() {
    if (sum < 1) {
        document.getElementById("message-el").textContent = "Kindly Select a Card"
            
    }
    else
    {
    document.getElementById("StartGame").textContent = "START GAME"
    isalife = false
    refreshpage()
        
    }
    
}
function refreshpage() {
    location.reload();
}