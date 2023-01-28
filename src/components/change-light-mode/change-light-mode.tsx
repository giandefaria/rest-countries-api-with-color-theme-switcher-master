const MainColors = ['hsl(0, 0%, 98%)', 'hsl(207, 26%, 17%)' ];
const WhiteAndDarkBlue = ['hsl(0, 0%, 100%)', 'hsl(209, 23%, 22%)'];
const FontColor = ['hsl(200, 15%, 8%)', 'hsl(0, 0%, 100%)'];
const PlaceHolderColor = ['rgba(78, 78, 78, 0.514)', 'hsl(0, 0%, 100%)'];
const ShadowColor = ['#e5e5e554', 'hsl(207, 26%, 17%)']

let index = 0;

export function changeLightMode () {
    index = (index + 1) % 2; //operador módulo binário
    console.log(index);
    document.documentElement.style.setProperty ('--main-color', MainColors[index]);
    document.documentElement.style.setProperty ('--white-and-darkblue', WhiteAndDarkBlue[index]);
    document.documentElement.style.setProperty ('--font-color', FontColor[index]);
    document.documentElement.style.setProperty ('--place-holder-color', PlaceHolderColor[index]);
    document.documentElement.style.setProperty ('--shadow-color', ShadowColor[index]);


}