"use strict";
const userInfo = document.querySelector('.user-info');
const avatar = document.querySelector('.avatar');
function showUserInfo() {
    userInfo.style.display = 'block';
}
function hideUserInfo() {
    userInfo.style.display = 'none';
}
avatar.addEventListener('click', showUserInfo);
document.addEventListener('click', function (event) {
    const target = event.target;
    if (!userInfo.contains(target) && !avatar.contains(target)) {
        hideUserInfo();
    }
});
const logout = document.querySelector('.logout');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.close-popup');
const stay = document.querySelector('.stay');
const logoutBtn = document.querySelector('.logout-btn');
const popup_container = document.querySelector('.popup-container');
function showPopup() {
    popup.style.display = 'block';
}
function hidePopup() {
    popup.style.display = 'none';
}
logout.addEventListener('click', showPopup);
stay.addEventListener('click', hidePopup);
closePopup.addEventListener('click', hidePopup);
logoutBtn.addEventListener('click', function () {
    window.location.href = 'login.html';
});
popup.addEventListener('click', function (event) {
    const target = event.target;
    if (!popup_container.contains(target)) {
        hidePopup();
    }
});
const addUserBtn = document.querySelector('.add-user-btn');
const addUser = document.querySelector('.add-user');
const closeAdd = document.querySelector('.close-add');
const cancelAdd = document.querySelector('.cancel-add');
const saveAdd = document.querySelector('.save-add');
function showAddPopup() {
    addUser.style.display = 'block';
}
function hideAddPopup() {
    addUser.style.display = 'none';
}
addUserBtn.addEventListener('click', showAddPopup);
closeAdd.addEventListener('click', hideAddPopup);
cancelAdd.addEventListener('click', hideAddPopup);
const editBtns = document.querySelectorAll('.edit-btn');
const deleteBtn = document.querySelectorAll('.delete-btn');
const closeEdit = document.querySelector('.close-edit');
const cancelBtn = document.querySelector('.cancel');
const saveBtn = document.querySelector('.save');
const editUser = document.querySelector('.edit-user');
function showEditPopup() {
    editUser.style.display = 'block';
}
function hideEditPopup() {
    editUser.style.display = 'none';
}
editBtns.forEach((btn) => {
    btn.addEventListener('click', showEditPopup);
});
closeEdit.addEventListener('click', hideEditPopup);
cancelBtn.addEventListener('click', hideEditPopup);
deleteBtn.forEach((btn) => {
});
