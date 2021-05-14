
var tab = [];

let init = () =>
{
	let a = document.querySelectorAll('a');
	for(let i=0; i<a.length; i++)
	{
		//a[i].addEventListener('click', getPageName, false)
		//a[i].addEventListener('click', getHistory, false)
		a[i].addEventListener('click', addTo)
		//a[i].addEventListener('click', goTO)



	}


}

let getPageName = () =>
{
	console.log('hiBar');
	var path = window.location.pathname;
	var hash = location.hash;
	console.log(path);
	console.log(hash);




}

let getHistory = () => {
	console.log(history.length);
}

const mainTitle= document.querySelector('title').textContent;

let updPageName = (value) =>
{
	document.querySelector('title').textContent = mainTitle + ' #' + value;

}


let barHistory = [];



let addTo = (e) =>
{

	e.preventDefault();
console.log(e.target.href);





let hash = null;

if(e.type == "click")
{
	hash = e.target.href.split('#')[1];
}
else //popstate
{
	hash = location.hash.replace('#', '');
}

let label = document.querySelector('a[href="#'+hash+'"]');
label = (label===null) ? 'Home' : label.textContent;
console.log(label+' #'+hash);






let len = barHistory.length;

updPageName(label);
//przy kliknieciu w odnosnik zmiana tytulu

//recznie dopisz do historii (preventDefeault)


history.pushState(hash, label, '#'+hash)

barHistory[len] = {hashKey:hash, value:label };
(e.type='click') ? location.hash = hash : null;
console.log(barHistory);








/////////////////KONIEC KODU Z LEKCJI ROZPOCZYNA SIĘ MÓJ ////////////////////////


///Ta cześć odpowiada za klikniete hiperłącza


///////pobieram sobie kontrolke selecta
let select = document.querySelector("#history");

if(!tab.includes(hash)){   ///jesli tablica z hashami nie zawiera hasha
var node = document.createElement("option"); 
var node2 = document.createElement("a");
node.setAttribute("value", hash);
if(node.value=="undefined") ///zamieniam undefined na home
{
	hash = "home";
}
tab.push(hash);  ///wrzucam kliknięte hiperłącza do tablicy
select.appendChild(node); 
node.textContent = hash;
	
console.log(tab);

}

//ta część odpowiada za kliknięcie OPTIONA


let options = document.querySelectorAll('option');  
    console.log(options);
        for(let i = 0; i<options.length; i++){
            options[i].addEventListener('click', function(){  ///po kliknieciu w ktorys option
                var txt = options[i].textContent; //pobieramy do zmiennej zawartosc tego optiona
                   //console.log(options[i].textContent);
                   var element = document.getElementById(txt);  ///pobieramy element o tym ID
                   element.scrollIntoView(); ///idziemy do tego elementu
                   updPageName(txt); //upgradujemy nazwe strony
                   history.pushState(txt, txt, '#'+txt);  ///wrzucamy do historii
                
              
            });
    }






}   ///KONIEC FUNKCJI ADDTO()



//zdarzenie kazdorazowej zmiany adresu URL
//window.addEventListener('popstate', getPageName, false);
window.addEventListener('load', init, false);




var tab2 = ['home', 'page1', 'page2', 'contact'];  ///przechowuje sobie wszystkie <a>




 ////funkcja odpowiedzialna za wyszukiwanie odpowiedniiej tresci


function goTO(){       


var inpt = document.querySelector("#inp");

	inpt.addEventListener("keyup", function(){
	//console.log(inpt.value);
   // console.log(options);
        for(let i = 0; i<tab2.length; i++){
        	if(tab2.includes(inpt.value))  ///jesli tablica wyzej zawiera tresc z inputa
        	{
        		var txt = inpt.value;
        		var element = document.getElementById(txt); ///pobieram sobie ten element
                   element.scrollIntoView(); ///ide do niego
                   updPageName(txt);  ///upgraduje nazwe strony
                   history.pushState(txt, txt, '#'+txt);   ///wrzucam do historii

        	}
        }

}	)

	


	}

goTO();





