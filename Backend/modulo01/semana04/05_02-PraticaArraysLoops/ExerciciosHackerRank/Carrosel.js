const sequencia = "<>>>>>>>><";
let indice = 0;

for (let item of sequencia) {
    if (item === ">" && indice === 6) {
        indice = 0;
    } else if (item === "<" && indice === 0) {
        indice = 6;
    } else if (item === ">") {
        indice++;
    }
    else {
        indice--;
    }


    /* 2ª opção de código
for (let i = 0; i < sequencia.length; i++){    	
    if(sequencia[i] === ">"){
           if(indice <6){
               indice++;
           }else{
               indice = 0;
           }
       }else{
           if(indice === 0){
               indice = 6;
           }else{
               indice--;
           }
       }
}
   */

}
console.log(indice);