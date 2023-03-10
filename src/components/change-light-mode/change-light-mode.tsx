//valores que serão repassados no índice 0 para modo dia, e indice 1 para modo noturno
const MainColors = ['hsl(0, 0%, 98%)', 'hsl(207, 26%, 17%)' ];
const WhiteAndDarkBlue = ['hsl(0, 0%, 100%)', 'hsl(209, 23%, 22%)'];
const FontColor = ['hsl(200, 15%, 8%)', 'hsl(0, 0%, 100%)'];
const PlaceHolderColor = ['rgba(78, 78, 78, 0.514)', 'hsl(0, 0%, 100%)'];
const ShadowColor = ['#e5e5e554', 'hsl(207, 26%, 17%)'];
const FilterIcon = ['none', 'invert(1)'];


export function changeLightMode () {
    
    let newIndex: any = sessionStorage.getItem('index'); //atribuo o valor do sessionStorage a newIndex, que sera 0, 1 ou null;
    
    //se newIndex for igual a 1, seto newIndex a 0 e retorno ao modo de dia
    if (newIndex == 1) { 
        newIndex = 0;
        sessionStorage.setItem('index', newIndex);     
    } else { //se for diferente de 1 ou null, newIndex será 1, ligando o modo noturno
    newIndex = 1; 
    //console.log(newIndex);
    sessionStorage.setItem('index', newIndex);
    }
    
    //executo a função setStyle que adicionará qual será o valor das var()Css, de acordo com o índice informado como parâmetro
    setStyle(newIndex); 

}

//adicionará o valor das var()Css, que será de acordo com o indice informado.
export function setStyle(index: any) {
    document.documentElement.style.setProperty ('--main-color', MainColors[index]);
    document.documentElement.style.setProperty ('--white-and-darkblue', WhiteAndDarkBlue[index]);
    document.documentElement.style.setProperty ('--font-color', FontColor[index]);
    document.documentElement.style.setProperty ('--place-holder-color', PlaceHolderColor[index]);
    document.documentElement.style.setProperty ('--shadow-color', ShadowColor[index]);
    document.documentElement.style.setProperty ('--icon-filter', FilterIcon[index]);

}