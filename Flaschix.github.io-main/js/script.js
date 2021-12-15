let btnSend = document.querySelector("#btnSend");
let txtName = document.querySelector("#txtName");
let txtMail = document.querySelector("#txtMail");
let txtPhone = document.querySelector("#txtPhone");
let txtArea = document.querySelector("#txtArea");
let radios = document.getElementsByName('contact');
let theme = document.querySelector("#idthme");
let checkboxes = document.getElementsByName('check');


// for (var i = 0, length = radios.length; i < length; i++) {
//     if (radios[i].checked) {
//         // do whatever you want with the checked radio
//         alert(radios[i].value);

//         // only one radio can be logically checked, don't check the rest
//         break;
//     }
// }

btnSend.onclick = () => {
    let rdBt;
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            rdBt = radios[i].value;
            break;
        }
    }
    let more = "";
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            more += checkboxes[i].value + " "
        }
    }
    alert("Информация которую вы ввевли \n" + "Ваше имя: " + txtName.value + "\nВаша почта: " + txtMail.value + "\nВаш номер: " + txtPhone.value + "\nВам удобней получить инф по: " + rdBt + "\nТема: " + theme.value + "\nДоп вопрос: " + more + "\nВаш вопрос: \n" + txtArea.value);
}