// factory method
function manufac(name,model,size){
    return{
    name,
    model,
    size,
    start: function() {
        console.log(`
        manufacturing of the ${name}
        of ${model} with 
        the size ${size} cm has started
        `);
     }
    };    
}

let jokey = manufac("jokey","box","95");
console.log(jokey);
jokey.start();

let vanhussan = manufac("van hussan","cut","90");
console.log(vanhussan);
vanhussan.start();
