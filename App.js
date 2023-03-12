 
 const makeQrCode =  function(){
    const text = document.querySelector('.data').value;
    const qrSrc = `http://api.qrserver.com/v1/create-qr-code/?data=${text}`;
    const qrImg = document.querySelector('#img');
    qrImg.src = qrSrc;
     document.querySelector('.main').style.height = '600px'
 }
 document.querySelector('.submit').addEventListener('click',function(e){
    e.preventDefault();
    makeQrCode()
 })