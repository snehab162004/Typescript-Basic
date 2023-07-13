

let studName : string
let age : number
let isRanked : boolean
let unkown : null | undefined

enum Color {
    red = 'red',
    blue = 'blue',
    black = 'black',
    yellow = 'yellow'
}



function getColor (color: Color) {
    console.log({ color })
}

getColor(Color.red)