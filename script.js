
function myFunction(x) {
    x.classList.toggle("change");
  }
  const b = document.querySelector('.container');
  let count = 0;
  b.addEventListener('click', () => {
      const element = document.querySelector('.sidebar-compressed');
      if (count%2 != 0) 
        element.style.visibility = 'hidden';
      else 
      element.style.visibility = 'visible';
      count += 1;
  });

  // function myFunctions(x) {
  //   x.classList.toggle("sidebar-compressed");
  // }