import GlobalService from "../../components/services/global.service"
import ApiService from "../../components/services/api.service";

const globalService = new GlobalService;
const apiService = new ApiService;

import { Validator } from 'vee-validate';

const component = {
    data:() => {
        return{
            member:{
                userName:"",
                password:""
            },
            loading: false,
            message:{
                status:"success",
                display:false,
                text:"asd"
            }
        }
    },
    methods:{
        onSignin:function() {
            this.loading = true;
            this.message.display = false;
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
                    this.message = globalService.error("Email or Password incorrect!")
                    this.loading = false;
                }
            });
        }
    }
}

export default component