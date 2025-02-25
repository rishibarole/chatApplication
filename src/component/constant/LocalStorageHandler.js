export default class LocalStorageHandler {



    static getStorageData(storage) {
        const userData = localStorage.getItem(storage) ? JSON.parse(localStorage.getItem(storage)) : [];
        return userData;
    }
    static setUpdateStorageData(storageId, storageValue) {
        localStorage.setItem(storageId, JSON.stringify(storageValue));

    }
    static getLoggedInUserData(storage) {
        const userData = localStorage.getItem(storage) ? JSON.parse(localStorage.getItem(storage)) : "";
        return userData;
    }


}
