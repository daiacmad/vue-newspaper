import ApiService from "@/components/services/api.service";
import GlobalService from "@/components/services/global.service";
import config from "@/configs/index.config";
import Ckeditor from "@/components/Ckeditor";

const apiService = new ApiService;
const globalService = new GlobalService;

const component = {
    data(){
        return {
            config: config,

            //message
            message:{
                status:"success",
                display:false,
                text:""
            }

        }
    },
    mounted(){
        // console.log(1);
    },
    methods:{
        
    },
    components:{
        Ckeditor
    }
}

export default component