"use strict";
function Validator(options) {
    function validate(inputElement, rule) {
        var _a, _b;
        var errorElement = (_a = inputElement.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector(options.errorSelector);
        var label = (_b = inputElement.parentElement) === null || _b === void 0 ? void 0 : _b.querySelector("label");
        var errorMessage = rule.test(inputElement.value);
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.style.border = "1px solid red";
            inputElement.style.background = "#F21B6A0D";
            if (label) {
                label.classList.add("error");
                label.classList.remove("normal");
            }
        }
        else {
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
                    var _a, _b;
                    var errorElement = (_a = inputElement.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector(options.errorSelector);
                    errorElement.innerText = "";
                    inputElement.style.border = "";
                    inputElement.style.background = "";
                    var label = (_b = inputElement.parentElement) === null || _b === void 0 ? void 0 : _b.querySelector("label");
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
            if (!value.trim())
                return "Bạn chưa nhập tài khoản";
            var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return regex.test(value) ? undefined : "Email không hợp lệ";
        }
    };
};
Validator.isPassword = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            if (!value.trim())
                return "Bạn chưa nhập mật khẩu";
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
    let errorUsername = document.querySelector(".error-usn");
    let errorPassword = document.querySelector(".error-psw");
    let message = document.querySelector(".message");
    let loginMessage = document.querySelector(".login-message");
    let inputUsername = document.getElementById("username");
    let inputPassword = document.getElementById("password");
    let attempts = parseInt(localStorage.getItem("failedAttempts") || "0");
    const correctUsername = "admin@gmail.com";
    const correctPassword = "123456";
    if (attempts >= Max_attempts) {
        message.innerText = "Bạn đã nhập sai quá nhiều lần. Vui lòng thử lại sau.";
        loginMessage.style.display = "flex";
        document.getElementById("login-btn").disabled = true;
    }
    if (username === "") {
        errorUsername.innerText = "Bạn chưa nhập tài khoản";
        inputUsername.style.border = "1px solid red";
        inputUsername.style.background = "#F21B6A0D";
    }
    if (password === "") {
        errorPassword.innerText = "Bạn chưa nhập mật khẩu";
        inputPassword.style.border = "1px solid red";
        inputPassword.style.background = "#F21B6A0D";
    }
    if (username === correctUsername && password === correctPassword) {
        localStorage.removeItem("failedAttempts");
        window.location.href = "index.html";
    }
    else if (username && password) {
        attempts++;
        localStorage.setItem("failedAttempts", attempts.toString());
        if (attempts >= Max_attempts) {
            loginMessage.style.display = "flex";
            message.innerText = "Bạn đã nhập sai quá nhiều lần. Vui lòng thử lại sau 5 phút";
            document.getElementById("login-btn").disabled = true;
        }
        else {
            loginMessage.style.display = "flex";
            message.innerText = "Bạn đã nhập sai tài khoản hoặc mật khẩu";
        }
    }
    function hideMessage() {
        loginMessage.style.display = "none";
    }
    document.addEventListener("click", function (event) {
        const target = event.target;
        if (!loginMessage.contains(target) && target !== document.getElementById("login-btn")) {
            hideMessage();
        }
    });
    setTimeout(() => {
        hideMessage();
    }, 5000); //5s
    setTimeout(() => {
        localStorage.removeItem("failedAttempts");
        document.getElementById("login-btn").disabled = false;
        message.innerText = "";
    }, 300000); // 5m  
}
