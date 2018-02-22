import ApiService from "@/components/services/api.service";
import GlobalService from "@/components/services/global.service";
import PrimaryTable from "@/components/tables/PrimaryTable.vue";

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
            },

            //pagination
            pagination:{
                TotalPage: 0,
                CurrentPage:1
            },
            itemToShow:3

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
                this.pagination.TotalPage = Math.ceil( this.listArticles.length / this.itemToShow );
            })
        },
        onPrimaryTableChangePage(data){
            this.pagination.CurrentPage = data;
        }
    },
    components:{
        PrimaryTable
    }
}

export default component