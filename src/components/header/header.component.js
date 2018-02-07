import GlobalService from "../../components/services/global.service";
import Router from "vue-router";


const router = new Router();
const globalService = new GlobalService;

const component = {
    methods:{
        onLogout(){
            globalService.removeAuth();
            router.go("/login");
        }
    }
}

export default component