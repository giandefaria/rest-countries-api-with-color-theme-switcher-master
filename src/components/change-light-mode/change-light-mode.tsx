const Maincolors = ['hsl(0, 0%, 98%)', 'hsl(207, 26%, 17%)' ];

let index = 0;

export function changeLightMode () {
    index = (index + 1) % 2; //operador módulo binário
    console.log(index);
    document.documentElement.style.setProperty ('--main-color', Maincolors[index]);

}