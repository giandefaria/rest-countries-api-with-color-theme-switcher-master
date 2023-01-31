const MainColors = ['hsl(0, 0%, 98%)', 'hsl(207, 26%, 17%)' ];
const WhiteAndDarkBlue = ['hsl(0, 0%, 100%)', 'hsl(209, 23%, 22%)'];
const FontColor = ['hsl(200, 15%, 8%)', 'hsl(0, 0%, 100%)'];
const PlaceHolderColor = ['rgba(78, 78, 78, 0.514)', 'hsl(0, 0%, 100%)'];
const ShadowColor = ['#e5e5e554', 'hsl(207, 26%, 17%)']


export function changeLightMode () {
    console.log(sessionStorage.getItem('index'));
    let newIndex: any = sessionStorage.getItem('index'); //atribuo o valor a newIndex, que sera 0, 1 ou null;
    //console.log(teste)
    //index = (index + 1) % 2;
    //console.log(index)
    if (newIndex == 1) { //se newIndex for igual a 1
        newIndex = 0;
        sessionStorage.setItem('index', newIndex);     
    } else { //se for diferente de 1 ou null
    newIndex = 1; 
    console.log(newIndex);
    sessionStorage.setItem('index', newIndex);
    }
        
    setStyle(newIndex);

}

export function setStyle(index: any) {
    document.documentElement.style.setProperty ('--main-color', MainColors[index]);
    document.documentElement.style.setProperty ('--white-and-darkblue', WhiteAndDarkBlue[index]);
    document.documentElement.style.setProperty ('--font-color', FontColor[index]);
    document.documentElement.style.setProperty ('--place-holder-color', PlaceHolderColor[index]);
    document.documentElement.style.setProperty ('--shadow-color', ShadowColor[index]);

}