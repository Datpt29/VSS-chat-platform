const userInfo = document.querySelector('.user-info') as HTMLElement;
const avatar = document.querySelector('.avatar') as HTMLElement;

function showUserInfo(): void {
    userInfo.style.display = 'block';
}

function hideUserInfo(): void {
    userInfo.style.display = 'none';
}

avatar.addEventListener('click', showUserInfo);
document.addEventListener('click', function (event) {
    const target = event.target as HTMLElement;
    if (!userInfo.contains(target) && !avatar.contains(target)) {
        hideUserInfo();
    }
});


const logout = document.querySelector('.logout') as HTMLElement;
const popup = document.querySelector('.popup') as HTMLElement;
const closePopup = document.querySelector('.close-popup') as HTMLElement;
const stay = document.querySelector('.stay') as HTMLElement;
const logoutBtn = document.querySelector('.logout-btn') as HTMLElement;
const popup_container = document.querySelector('.popup-container') as HTMLElement;

function showPopup(): void {
    popup.style.display = 'block';
}

function hidePopup(): void {
    popup.style.display = 'none';
}

logout.addEventListener('click', showPopup);
stay.addEventListener('click', hidePopup);
closePopup.addEventListener('click', hidePopup);
logoutBtn.addEventListener('click', function () {
    window.location.href = 'login.html';
});
popup.addEventListener('click', function (event) {
    const target = event.target as HTMLElement;
    if (!popup_container.contains(target)) {
        hidePopup();
    }
});

const addUserBtn = document.querySelector('.add-user-btn') as HTMLElement;
const addUser = document.querySelector('.add-user') as HTMLElement;
const closeAdd = document.querySelector('.close-add') as HTMLElement;
const cancelAdd = document.querySelector('.cancel-add') as HTMLElement;
const saveAdd = document.querySelector('.save-add') as HTMLElement;

function showAddPopup(): void {
    addUser.style.display = 'block';
}

function hideAddPopup(): void {
    addUser.style.display = 'none';
}

addUserBtn.addEventListener('click', showAddPopup);
closeAdd.addEventListener('click', hideAddPopup);
cancelAdd.addEventListener('click', hideAddPopup);



const editBtns = document.querySelectorAll('.edit-btn') as NodeListOf<HTMLElement>;
const deleteBtn = document.querySelectorAll('.delete-btn') as NodeListOf<HTMLElement>;
const closeEdit = document.querySelector('.close-edit') as HTMLElement;
const cancelBtn = document.querySelector('.cancel') as HTMLElement;
const saveBtn = document.querySelector('.save') as HTMLElement;
const editUser = document.querySelector('.edit-user') as HTMLElement;

function showEditPopup(): void {
    editUser.style.display = 'block';
}

function hideEditPopup(): void {
    editUser.style.display = 'none';
}

editBtns.forEach((btn) => {
    btn.addEventListener('click', showEditPopup);
});

closeEdit.addEventListener('click', hideEditPopup);
cancelBtn.addEventListener('click', hideEditPopup);

deleteBtn.forEach((btn) => {

});

