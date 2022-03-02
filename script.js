let input = document.getElementById("input")
let par = document.getElementById("par")
let pole = document.getElementById("pole")

input.addEventListener('keyup', vvod)
function vvod(){
    par.innerHTML = input.value
}
let start = document.getElementById("start")
let top1 = document.getElementById("top")
let left = document.getElementById("left")
let right = document.getElementById("right")
let down = document.getElementById("down")
let player = document.getElementById("player")
let fast = document.getElementById("fast")
let slower = document.getElementById("slow")
let w = 0
let h = 0
let speed = 20



start.addEventListener("click", letStart)
function letStart(){
    player.style.opacity = "1"
    // player.style.top = 430
    console.log("Игра началась! Чтобы двигать персонажлм нажимайте на кнопки.")
    console.log(h + "px - по вертекали")


}
fast.addEventListener("click", fastt)
function fastt(){
    if(speed > 480){
        alert("Эта максимальная скорость")
    }
    else{
        speed +=20
        console.log(speed + " - speed")
    }
}
slower.addEventListener("click", sloww)
function sloww(){
    if(speed < 20){
        alert("Эта минимальная скорость")
        console.log(speed + " - speed")
    }
    else{
        speed -= 20
        console.log(speed + " - speed")
    }
}
right.addEventListener("click", vpravo)
function vpravo(){
    w += speed
    if(w > 1250){
        alert("Туда идти нельзя")
        console.log(w + "px - по горизонатали")

    } else {
        player.style.left = w + "px"
        player.style.backgroundImage = "url(./img/Хантер_2.png)"
        console.log(w + "px - по горизонатали")
        
        
    }
}

left.addEventListener("click", vlevo)
function vlevo(){
    w -= speed
    if(w < 0){
        alert("Туда идти нельзя")
        console.log(w + "px - по горизонатали")
    } else {
        player.style.left = w + "px"
        player.style.backgroundImage = "url(./img/Хантер.png)"
        console.log(w + "px - по горизонатали")
        
    }
}

top1.addEventListener("click", vverh)
function vverh(){
    h -= speed
    if(h < 0){
        alert("Туда идти нельзя")
    } else {
        console.log(h + "px - по вертекали")
        player.style.top = h + "px"
        
    }
}

down.addEventListener("click", vniz)
function vniz(){
    h += speed
    if(h > 440){
        alert("Туда идти нельзя")
    } else {
        console.log(h + "px - по вертекали")
        player.style.top = h + "px"
        
    }
}