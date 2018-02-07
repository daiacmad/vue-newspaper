import GlobalService from "../../components/services/global.service"
import ApiService from "../../components/services/api.service";

const globalService = new GlobalService;
const apiService = new ApiService;

const component = {
    data:() => {
        return{
            onSignin: ()=> {
                apiService.login({
                    userName:"admin",
                    password:"111111"
                },res =>{
                    if(res.status){
                        globalService.setAuth({
                            access_token: res.token
                        });
                        $(location).attr('href', '');
                    }else{
                        alert("sai pass")
                    }
                });
                
                
            }
        }
    }
}

export default component