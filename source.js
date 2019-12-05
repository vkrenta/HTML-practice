var Form = {
    name: undefined,
    errName: undefined,
    submit: undefined,
    lastName: undefined,
    errLastName: undefined,
    email: undefined,
    errEmail: undefined,
    password: undefined,
    errPassword: undefined,
    radioMan: undefined,
    radioWoman: undefined,
    errGender: undefined,
    birth: undefined,
    errBirth: undefined,
    checkbox: undefined,
    errCheckbox: undefined,
    canvas_container: undefined,
    canvas: undefined,

    init(){
        this.name = document.getElementById("name");
        this.submit = document.getElementById("submit");
        this.errName = document.getElementById("errName");
        this.lastName = document.getElementById("last-name");
        this.errLastName = document.getElementById("errLastName");
        this.email = document.getElementById("email");
        this.errEmail = document.getElementById("errEmail");
        this.password = document.getElementById("password");
        this.errPassword = document.getElementById("errPassword");
        this.radioMan = document.getElementById("man");
        this.radioWoman = document.getElementById("woman");
        this.errGender = document.getElementById("errGender");
        this.birth = document.getElementById("birth");
        this.errBirth = document.getElementById("errBirth");
        this.checkbox = document.getElementById("checkbox");
        this.errCheckbox = document.getElementById("errCheckbox");
        this.canvas = document.getElementById("canvas");
    },

    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },

    validatePassword(password) {
        var re = /(?=.*[0-9])(?=.*[a-zа-я])(?=.*[A-ZА-Я]).{8,}/;
        return re.test(password);
    },

    containsLetter(str){
        var check = true;
        for (var c in str){
            if (str[c] >= "А" && str[c] <= "Я" ||
                str[c] >= "а" && str[c] <= "я") check = true;
            else check = false;
        }
        return check;
    },

    start(){
        var today = new Date().toJSON().slice(0,10).replace(/-/g,'-');
        this.birth.max = today;
        this.birth.value = today;

        this.submit.addEventListener("click", () => {
            if (this.name.value == "") this.errName.textContent = "Обов'язкове поле";
            else this.errName.textContent = "";
            if (this.lastName.value == "") this.errLastName.textContent = "Обов'язкове поле";
            else this.errLastName.textContent = "";
            if (!this.validateEmail(this.email.value)) this.errEmail.textContent = "Неправильний email";
            if (this.validateEmail(this.email.value)) this.errEmail.textContent = "";
            if (!this.validatePassword(this.password.value)) this.errPassword.textContent = "Пароль повинен містити цифри, літери верхнього і нижнього регістрів, та бути не коротше 8 знаків";
            if (this.validatePassword(this.password.value)) this.errPassword.textContent = "";
            if (!this.radioMan.checked && !this.radioWoman.checked) this.errGender.textContent = "Не вибрана стать";
            if (this.birth.value == today || this.birth.value == "") this.errBirth.textContent = "Некоректна дата народження";
            else this.errBirth.textContent = "";
            if (!this.checkbox.checked) this.errCheckbox.textContent = "Потрібно погодитись!";
            else this.errCheckbox.textContent = "";
        });

        this.name.addEventListener("input", () => {
            if (this.containsLetter(this.name.value)) this.errName.textContent = "";
            else this.errName.textContent = "Погане ім'я";
        });

        this.lastName.addEventListener("input", () => {
            if (this.containsLetter(this.lastName.value)) this.errLastName.textContent = "";
            else this.errLastName.textContent = "Погане прізвище";
        });

        this.radioMan.addEventListener("click", () => {
            this.errGender.textContent = "";
        });

        this.radioWoman.addEventListener("click", () => {
            this.errGender.textContent = "";
        });

        this.checkbox.addEventListener("click", () => {
            this.errCheckbox.textContent = "";
        });

        this.birth.addEventListener("click", () => {
            this.errBirth.textContent = "";
        });

        var arrow_keys_handler = function(e) {
                        switch(e.keyCode){
                            case 37: case 39: case 38:  case 40: // Arrow keys
                            case 32: e.preventDefault(); break; // Space
                            default: break; // do not block other keys
                        }
                    };
        
        this.canvas.addEventListener("click", () => {
            window.addEventListener("keydown", arrow_keys_handler, false);
        });

        window.addEventListener("keydown", (e) => {
            if (e.key == " ") {
                window.removeEventListener("keydown", arrow_keys_handler, false);
            }
        });

        
    }
}

Form.init();
Form.start();
