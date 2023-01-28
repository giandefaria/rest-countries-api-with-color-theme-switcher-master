const colors = ['white', 'gray' ];

let index = 0;

export function changeLightMode () {
    index = (index + 1) % 2; //operador módulo binário
    console.log(index);

}