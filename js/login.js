function Validator(options) {
    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var label = inputElement.parentElement.querySelector("label"); 
        var errorMessage = rule.test(inputElement.value);

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.style.border = "1px solid red";
            inputElement.style.background = "#F21B6A0D";
            if (label) {
                label.classList.add("error");
                label.classList.remove("normal");
            }
        } else {
            errorElement.innerText = "";
            inputElement.style.border = "";
            inputElement.style.background = "";
            if (label) {
                label.classList.remove("error");
                label.classList.add("normal");
            }  
        }
    }

    var formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            if (inputElement) {
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                };

                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = "";
                    inputElement.style.border = "";
                    inputElement.style.background = "";
                    var label = inputElement.parentElement.querySelector("label");
                    if (label) {
                        label.classList.remove("error");
                        label.classList.add("normal");
                    } 
                };
            }
        });
    }
}

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            if (!value.trim()) return "Bạn chưa nhập tài khoản";
            var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return regex.test(value) ? undefined : "Email không hợp lệ";
        }
    };
};

Validator.isPassword = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            if (!value.trim()) return "Bạn chưa nhập mật khẩu";
            return value.length >= 6 ? undefined : "Mật khẩu phải có ít nhất 6 ký tự";
        }
    };
};

document.addEventListener("DOMContentLoaded", function () {
    function showLabel(inputElement, labelElement) {
        let input = document.getElementById(inputElement);
        let label = document.querySelector("." + labelElement);

        input.addEventListener("focus", function () {
            label.classList.remove("hidden");
            input.placeholder = "";
        });
    }

    showLabel("username", "subtext-usn");
    showLabel("password", "subtext-psw");
});

// Báo lỗi thông tin đăng nhập và giới hạn đăng nhập
const Max_attempts = 5; // Số lần thử tối đa

function handleLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.querySelector(".message");
    let loginMessage = document.querySelector(".login-message");
    let formElement = document.getElementById("login-form");
    loginMessage.style.display = "none"; 
    let attempts = parseInt(localStorage.getItem("failedAttempts")) || 0; 

    const correctUsername = "admin@gmail.com";
    const correctPassword = "123456";

    if(attempts >= Max_attempts) {
        message.innerText = "Bạn đã nhập sai quá nhiều lần. Vui lòng thử lại sau.";
        loginMessage.style.display = "flex";
        document.getElementById("login-btn").disabled = true;
        return;
    }

    if (username === "" || password === "") {
        message.innerText = "Bạn chưa nhập tài khoản hoặc mật khẩu";
        loginMessage.style.display = "flex";
        return;
    }

    if (username === correctUsername && password === correctPassword) {
        localStorage.removeItem("failedAttempts"); 
        window.location.href = "index.html"; 
    } else {
        attempts++;
        localStorage.setItem("failedAttempts", attempts); 
        if(attempts >=Max_attempts) {
            message.innerText = "Bạn đã nhập sai quá nhiều lần. Vui lòng thử lại sau.";
            loginMessage.style.display = "flex";
            document.getElementById("login-btn").disabled = true;
        } else {
            loginMessage.style.display = "flex";
            message.innerText = "Bạn đã nhập sai tài khoản hoặc mật khẩu";
        }
    }

    function hideMessage() {
        loginMessage.style.display = "none";
    }

    loginMessage.addEventListener("click", hideMessage);
}
