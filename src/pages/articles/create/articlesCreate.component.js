import ApiService from "@/components/services/api.service";
import GlobalService from "@/components/services/global.service";

const apiService = new ApiService;
const globalService = new GlobalService;

const component = {
    data(){
        return {
            //message
            message:{
                status:"success",
                display:false,
                text:""
            }

        }
    },
    created(){
        
    },
    methods:{
        
    }
}

export default component