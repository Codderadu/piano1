let  pianoKeys=document.querySelectorAll('.key')
function playSound(newurl){
    new Audio(newurl).play()
    console.log(newurl);
}
pianoKeys.forEach((pianoKey,i)=>{
    let number=i<9 ?'0'+(i+1):(i+1);
    let newurl='24-pano-keys/key'+number+'.mp3'
    pianoKey.addEventListener('click',() => playSound(newurl))
})