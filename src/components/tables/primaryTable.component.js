import ApiService from "@/components/services/api.service";
import GlobalService from "@/components/services/global.service";
import Router from 'vue-router'

const apiService = new ApiService;
const globalService = new GlobalService;
const router =  new Router;

const component = {
    props:{
        data: Array,
        TotalPage: Number,
        CurrentPage: Number,
        pathUrl: String,
        TotalItem:Number,
        ItemToShow:Number
    },
    data(){
        return {};
    },
    created(){
        this.$emit("update:CurrentPage" , parseInt(this.$route.query.page) );
    },
    watch:{
        CurrentPage: function(val){
            router.push({path: this.pathUrl, query: { page : val }} );
        }
    },
    methods:{
        onChangePage: function(currentPage){
            // console.log(currentPage);
            // this.CurrentPage = currentPage;
            this.$emit("update:CurrentPage" , currentPage)
        }
    },
}

export default component