export default class LocalStorageHandler {



    static getUserData() {
        const userData = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
        return userData;
    }
    static updateUserData(storageId, storageValue) {
        localStorage.setItem("users", JSON.stringify(storageValue));

    }

}
