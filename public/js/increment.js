let valueDisplays = document.querySelectorAll(".num");
let interval = 20;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  console.log(endValue);
  let duration = Math.floor(interval / endValue);
  let increment=1;
  if(endValue > 100) 
   increment=11;
  console.log(duration);
  let counter = setInterval(function () {
    valueDisplay.textContent = startValue;
    if(endValue-startValue<=11)
    {
        startValue+=(endValue-startValue);
         valueDisplay.textContent = startValue;
    }
    if (startValue == endValue) {
      clearInterval(counter);
    }
    startValue += increment;
  }, 1);
});