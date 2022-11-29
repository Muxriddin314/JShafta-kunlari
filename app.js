let elForm = document.querySelector("form");
let elInput = document.querySelector("input");
let elText = document.querySelector("span");

elForm.addEventListener("submit", function (e){
  let number = Number(elInput.value);
  e.preventDefault();
  elText.textContent = "";
  let day;
      switch (number) {
        case 1:
          day = "Dushanba📅" ;
          break;
          case 2:
            day = "Seshanba📅";
            break;
            case 3:
              day = "Chorshanba📅";
              break;
              case 4:
                day = "Payshanba📅";
                break;
                case 5:
                  day = "Juma📅";
                  break;
                  case  6:
                    day = "Shanba📅";
                    break;
                    case 7:
                      day = "Yakshanba📅";
                    }
                    elText.textContent += day; 
                  });

            

