import ApiService from "@/components/services/api.service";
import GlobalService from "@/components/services/global.service";

const apiService = new ApiService;
const globalService = new GlobalService;

const component = {
    data(){
        return {
            listArticles:[],

            //message
            message:{
                status:"success",
                display:false,
                text:""
            }

        }
    },
    created(){
        this.fetchListArticle();
    },
    methods:{
        fetchListArticle(){
            apiService.getListArticles(res =>{
                if(res.status && res.status != 200){
                    return this.message = globalService.error("Cannot fetch data!");
                }
                
                this.listArticles = res;
            })
        }
    }
}

export default component