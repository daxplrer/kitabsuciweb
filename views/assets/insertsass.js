async function insrt(){
const sass = await import('https://jspm.dev/sass');
sass.compileString('$primary:#9c672a;');
}; insrt()