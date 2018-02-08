import GlobalService from "../../components/services/global.service"
import ApiService from "../../components/services/api.service";

const globalService = new GlobalService;
const apiService = new ApiService;

const component = {
    data:() => {
        return{
            member:{
                userName:"",
                password:""
            }
        }
    },
    methods:{
        onSignin:function() {
            apiService.login({
                userName:this.member.userName,
                password:this.member.password
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

export default component