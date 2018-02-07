import GlobalService from "../../components/services/global.service"

const globalService = new GlobalService;

const component = {
    data:() => {
        return{
            onSignin: ()=> {
                globalService.setAuth({
                    access_token:"asdsadsad"
                });
                $(location).attr('href', '');
            }
        }
    }
}

export default component