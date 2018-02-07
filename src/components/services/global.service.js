export default class GlobalService{
    setAuth(userInfo){
        localStorage.setItem("infoUser", JSON.stringify(userInfo) );
    }
    getAuth(){
        return JSON.parse(localStorage.getItem("infoUser") );
    }
    removeAuth(){
        localStorage.removeItem("infoUser");
    }
}