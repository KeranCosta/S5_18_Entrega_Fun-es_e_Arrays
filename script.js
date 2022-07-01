let arrayMaratona = ["Daniel","Rafael","Manoel"];

function position(array){
  let Daniel= 0;
  

    for(let i=0; i<=array.length;i++){
        if(array[i] == "Daniel"){
            Daniel = i;
        }
    }   
        if(Daniel != 0){
            array.splice(0,0,array[Daniel]);
            array.splice(Daniel+1,1);
        }else{
            console.log( `Daniel é o vencedor!!!`    )
        }
   
        return `Este é o pódio ${array}`;
}

console.log (position(arrayMaratona));