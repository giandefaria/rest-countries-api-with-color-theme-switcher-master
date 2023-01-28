const colors = ['hsl(0, 0%, 98%)', 'black' ];

let index = 0;

export function changeLightMode () {
    index = (index + 1) % 2; //operador módulo binário
    console.log(index);
    document.documentElement.style.setProperty ('--main-color', colors[index]);

}