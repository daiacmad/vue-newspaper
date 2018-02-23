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
    },
    methods:{
        fetchListArticle(){
            apiService.getListArticles(this.pagination.CurrentPage , this.itemToShow , res =>{
                if(!res.ok){
                    return this.message = globalService.error(res.data.message);
                }
                
                this.listArticles = res.data;

                //pass Total page to child component table
                this.pagination.TotalPage = Math.ceil( res.TotalItem / this.itemToShow );
            })
        },
        onPrimaryTableChangePage(data){
            this.pagination.CurrentPage = data;
            this.fetchListArticle();
        }
    },
    components:{
        PrimaryTable
    }
}

export default component