var dollor1 = 11000;

var euro = 13000;

var elPrice = document.querySelector('.price');

var elError = document.querySelector('.error');

var sum = prompt('pulingizni kiriting:$ ');

if (sum * dollor1 >= 8250000){
    console.log('safaringiz behatar bolsin');
    
    elPrice.textContent = 'Sizda sayohat qilish imkoni mavjud!'
}

else{
    console.log('boshqa safar borasiz');

    elError.textContent = 'sizda sayohat uchun yetarlicha mablag` yoq!'
}




var walk = prompt('sayr uchun mablag` kiriting: ');

var elErrorwalk = document.querySelector('.errorwalk')

if (walk * euro >= 1560000){
    console.log('siz bemalol sayr qilishingiz mumkin');
    var elWalk = document.querySelector('.walk');
    elWalk.textContent = 'sizda sayir uchun pul yetarli!'
}

else{
    console.log('sizda sayr etish uchun yetarlicha mablag` yoq');

    elErrorwalk.textContent = 'siz sayir qila olmaysiz!'
}

 