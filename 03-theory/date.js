const output = document.getElementById("output");
const btnFull = document.getElementById("full");
const btnDate = document.getElementById("date");
const btnTime = document.getElementById("time");

//                  Моя версия

// let intervalArray = [];

// function setOutputTextContent (x){
//     const outputTextContent =  output.textContent;
//     switch(x) {
//         case 'Полная':outputTextContent = new Date().toLocaleString()
//         break;
//         case 'Дата':  outputTextContent = new Date().toLocaleDateString()
//         break;
//         case 'Время': outputTextContent = new Date().toLocaleTimeString()
//         break;
//         default: outputTextContent = new Date().toLocaleTimeString()
//       }
// }

// intervalArray.push(setInterval(function(){setOutputTextContent()}, 1000))

// function clearIntervalArray (intervalArray){
//     if (intervalArray.length>0) {
//         for (let interval of intervalArray){clearInterval(interval)}
//     }
// }

// btnFull.onclick = function(){
//    clearIntervalArray(intervalArray)
//    intervalArray.push(setInterval(function(){setOutputTextContent(btnFull.textContent)}, 1000))
// }

// btnDate.onclick = function(){
//     clearIntervalArray(intervalArray)
//     intervalArray.push(setInterval(function(){setOutputTextContent(btnDate.textContent)}, 1000))
// }

// btnTime.onclick = function(){
//     clearIntervalArray(intervalArray)
//     intervalArray.push(setInterval(function(){setOutputTextContent(btnTime.textContent)}, 1000))
// }

//                      Версия Минина

let mode = "time";

function update() {
  output.textContent = format(mode);
}

function format(formatMode) {
  const now = new Date();
  switch (formatMode) {
    case "full":
      return now.toLocaleString();
      break;
    case "date":
      return now.toLocaleDateString();
      break;
    case "time":
      return now.toLocaleTimeString();
      break;
    default:
      return now.toLocaleTimeString();
  }
}

update();

setInterval(() => {
  update();
}, 1000);

//  пример замыкания

function btnUpdate(modeValue) {
  return function () {
    mode = modeValue;
    update();
  };
}

btnFull.onclick =  btnUpdate("full"); // после замыкания

btnDate.onclick = btnUpdate("date"); // после замыкания

btnTime.onclick = function () {      // как было до замыкания
 mode = 'time'
 update()
};
