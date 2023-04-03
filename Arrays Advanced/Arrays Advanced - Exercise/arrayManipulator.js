function arrayManipulator(array,commandsToDo){
 
   
 
    for(let i = 0; i < commandsToDo.length; i++){
         let toDo = commandsToDo[i].split(" ");
         let command = toDo[0];
         let index = Number(toDo[1]);
         let input = Number(toDo[2]);
         
         switch(command){
             case 'add':
                 array.splice(index,0,input); break;
                
             case 'addMany':
                 let addIndex = index; 
                 for(let k = 2;k<toDo.length;k++){
                     let num = Number(toDo[k]);
                     array.splice(addIndex,0,num);
                     addIndex++;
                 
                 }
                 break;
             case 'contains':
                 let searchIndex = array.indexOf(index);
                 if(searchIndex > - 1){
                     console.log(searchIndex);
                 }else{
                    console.log(-1);
                 }
                 break;
             case 'remove':
                 array.splice(index,1);
                break;
             
             case 'shift':
                 for(let i = 0; i<index; i++ ){
                     array.push(array.shift());
                  
                 }
                 break;
             case 'sumPairs':
                 let sumArr = [];
                 
             if(array.length % 2 != 0){
                 array.push(0)
             }
             for(let i = 0; i <array.length; i+=2){
                 let sumPairs = 0;
                 sumPairs+= array[i] + array[i+1];
                 sumArr.push(sumPairs)
             };
             array = sumArr;
             break;
  
             case 'print':
                 console.log(`[ ${array.join(", ")} ]`);
             }
  
    }
 }