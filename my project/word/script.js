const fonts = {
    'Grape Nuts':'Grape Nuts, cursive',
    'Open Sans':'Open Sans, sans-serif',
    'fantasy':'fantasy'
}
setInterval(() => {
   document.getElementById('txt').style.fontFamily = fonts[document.getElementById('font').value]
   document.getElementById('txt').style.fontSize = document.getElementById('size').value +'px'
   document.getElementById('txt').style.color = document.getElementById('color').value
},1);