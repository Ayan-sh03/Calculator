let buttons = document.querySelectorAll(".calculator .buttons button");
      let equal = document.querySelector("#equal");
      let clear = document.querySelector("#clear");
      let screen = document.getElementById("screen");

      buttons.forEach(function (button) {
        button.addEventListener("click", function () {
          if(button.innerHTML != '=')
          screen.textContent += button.innerHTML;
        });
      });

      equal.addEventListener("click", function () {
        screen.textContent = eval(screen.textContent).toString();
        
      });

      clear.addEventListener("click", function () {
        screen.textContent = "";
      });
