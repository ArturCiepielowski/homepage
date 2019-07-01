

document.getElementById("myButton--js").onclick=function(){

var name=prompt('Cześć .... eee możesz powtórzyć jak masz na mię ?','');
var age=prompt(`Witaj, ${name} powiedz mi proszę .. masz więcej niż 18 lat .. prawda ? `,'');

if(age>=18){

  alert('Super to idziemy na piwo!');

} else if(age<18){

    alert('No nic to niestety soczek dla ciebie');
} else {

    alert('Miałeś wpisać swoj wiek..... TYPIE!');
}

}


const magicWord = document.querySelector('.paragraph__test--js');

console.log(magicWord.innerHTML);

magicWord.innerHTML='Magiczne słowo stworzone przez JavaScript'



const navigationSwitcher = document.querySelector('.navigation__switcher--js');

navigationSwitcher.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__list--js');
    navigationList.classList.toggle('navigation__list--visible');
});



