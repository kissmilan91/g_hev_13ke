function szamol () {
    var oda_irany =document.getElementById('oda').value;
    var vissza_irany =document.getElementById('vissza').value;
    var menetido_szamitas = Math.abs(vissza_irany-oda_irany);
    
    if  ( menetido_szamitas==0) {
        alert('Azonos megállókat választott ki!')
    }
    else {
        alert('Menetidő: '+menetido_szamitas+' perc!');
    }
}