const MainColors = ['hsl(0, 0%, 98%)', 'hsl(207, 26%, 17%)' ];
const WhiteAndDarkBlue = ['hsl(0, 0%, 100%)', 'hsl(209, 23%, 22%)'];
const FontColor = ['hsl(200, 15%, 8%)', 'hsl(0, 0%, 100%)'];
const PlaceHolderColor = ['rgba(78, 78, 78, 0.514)', 'hsl(0, 0%, 100%)'];
const ShadowColor = ['#e5e5e554', 'hsl(207, 26%, 17%)']

let index: any;

//sessionStorage.setItem('index', '0');

export function changeLightMode () {
    console.log(sessionStorage.getItem('index'));
    if (sessionStorage.getItem('index') == '0') {
        console.log('okok')
    }
    let newIndex: any = sessionStorage.getItem('index');
    //console.log(teste)
    //index = (index + 1) % 2;
    //console.log(index)
    if (newIndex == 1) {
        newIndex = 0;
        sessionStorage.setItem('index', newIndex);     
    } else {
    newIndex = (newIndex + 1) % 2; //operador módulo binário
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