const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d")
let drawing = false
let posX,posY

window.addEventListener('load',()=>{
    resize()
    window.addEventListener('mousedown',start)
    window.addEventListener('mousemove',draw)
    window.addEventListener('mouseup',stop)
})

function resize(){
    ctx.canvas.width = window.innerWidth
    ctx.canvas.height = window.innerHeight
}

function start(e){
    drawing = true
    posX = e.pageX
    posY = e.pageY
}

function draw(e){
    if(drawing === false)
        return
    ctx.beginPath()
    ctx.lineWidth = 5
    ctx.leinCap = 'round'
    ctx.moveTo(posX,posY)
    ctx.lineTo(e.pageX,e.pageY)
    ctx.stroke()
    posX=e.pageX
    posY=e.pageY
}

function stop(e){
    drawing = false
}