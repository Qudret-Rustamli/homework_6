var programalar = [
    'JAVASCRIPT',
    'JAVA',
    'C',
    'PYHTON',
    'CSS',
    'HTML',
    'SQL',
    'MONGODB'
]
var qelebeler = 0;
var meglubiyyetler = 0;
var secilenSoz = null;      //secilenSozFunc()
var secilenler = [];
var xettler = [];           //xettCek()
var maxMeglubiyyet = 7;
var maxQelebe = 7;
/***************************************************************************/
function sozSec() {
    var index = Math.floor(Math.random() * programalar.length)
    return programalar[index]
}
/**************************************************************************/
var xettlerDisplay = document.querySelector('#xettler');
$('#maxQalibiyyet').html(maxQelebe)
$('#maxMeglubiyyet').html(maxMeglubiyyet)
var qelebedisp = document.querySelector('#qelebeler')
secilenlerDisp = document.querySelector('#SecilenHerfSpan')
/***************************************************************************/
var secilenSoz = sozSec()
console.log(secilenSoz)
/***************************************************************************/
function xettCek() {
    for (var i = 0; i < secilenSoz.length; i++) {
        xettler.push('_ ')
        xettlerDisplay.innerHTML = xettler.join(' ')
    }
}
xettCek()
/****************************************************************************/
window.onkeyup = function (e) {
    var clickOlunanHerf = e.key.toUpperCase()
    if (e.keyCode > 64 && e.keyCode < 96) {
        if (secilenSoz.includes(clickOlunanHerf)) {
            var found = false
            for (let j in secilenSoz) {
                if (clickOlunanHerf === secilenSoz[j]) {
                    xettler[j] = secilenSoz[j];
                    found = true;
                }
            }
            if (!secilenler || !xettler.includes('_ ')) {
                if (qelebeler<=6) {
                    qelebeler++; 
                }else{
                    alert('Maxsimum Oyun Limitini kecdiniz')
                    qelebeler=0
                }
                
                qelebedisp.innerHTML = qelebeler
                secilenler = []
                xettler = []
                secilenSoz=sozSec()
                xettCek()
                $('#maxMeglubiyyet').html(7)
            }
        } else {
            if (maxMeglubiyyet >= 1) {
                if (!secilenler.includes(clickOlunanHerf)) {
                    secilenler.push(clickOlunanHerf)
                    secilenlerDisp.innerHTML = secilenler.join(',')
                    maxMeglubiyyet--;
                    $('#maxMeglubiyyet').html(maxMeglubiyyet)
                }
            } else {
                alert("siz meglub oldunuz")
            }
        }
    }
    /*****************************************************************************/
    document.querySelector('#xettler').innerHTML = xettler.join('')
    document.querySelector('#SecilenHerfSpan').innerHTML = secilenler.join(' ,')
    document.querySelector('#qelebeler').innerHTML = qelebeler
   
   

}
/********************************************************************************/