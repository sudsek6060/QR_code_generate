 
 const makeQrCode =  function(){
    // e.preventDefault();
    let text = document.querySelector('.data').value;
    // let value = text.value
    let qrSrc = `http://api.qrserver.com/v1/create-qr-code/?data=${text}`;
    let qrImg = document.querySelector('#img');
    qrImg.src = qrSrc;
     document.querySelector('.main').style.height = '600px'
 }
 document.querySelector('.submit').addEventListener('click',function(e){
    e.preventDefault();
    makeQrCode()
 })