let countElement = document.querySelector('.add-result-js')
let saveElement = document.querySelector('.save-result-js')

let count = 0

function addEl(){
   count += 1;
   countElement.textContent=count;
  
};


function saveEl(){
let countStr = count + ' ' + " - ";
saveElement.textContent += countStr;
countElement.textContent=0
count=0
};

function removeEl(){
   if(count <=0){
      return
   }
   count -= 1;
   countElement.textContent=count;
   
    }
