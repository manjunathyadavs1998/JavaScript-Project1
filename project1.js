function ageIndays() {
    var birthYear=prompt("what year you born, My friend? ");
    var ageIndayss=(2022-birthYear)*365;
    var h1=document.createElement('h1');
    var textAnswer=document.createTextNode('You are'+" " +ageIndayss+" "+'days');
    h1.setAttribute('id','ageIndays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    console.log(ageIndayss);

    
}
function reset() {
    document.getElementById('ageIndays').remove();
    
}
