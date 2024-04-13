import { Github } from "./scripts/api.js";
import { elements } from "./scripts/helpers.js";
import { UI } from "./scripts/ui.js";

// Github classın örnegi oluşturma (miras alma)
const github = new Github();
//UI class ın örneği
const ui = new UI();
github.fetchUserData();
const getInput = (event) => {
  event.preventDefault();
  const value = elements.searchInput.value;
  if (value == "") {
    ui.showAlert("Lütfen form alanını doldurunuz.", "alert alert-warning");
    return;
  }
  if (value) {
    github.fetchUserData(value).then((res)  => {
        //eğer kullanıcı bulunamadıysa
        console.log(res)
      if(res.message == "Not Found") {
            ui.showAlert("Aradığınız kullanıcı bulunamadı." , "alert alert-danger " );
        }else{
            //kullanıcı bulunduysa
            ui.showAlert("kullanıcı bulundu.", 
            "alert alert-success");
            ui.renderProfile(res.data);
            ui.renderProjects(res.repos);
         
        };
    })
    .catch((err) => console.log(err));
    return;
  }
};

//! olay izleyicileri
elements.searchBtn.addEventListener("click", getInput);
