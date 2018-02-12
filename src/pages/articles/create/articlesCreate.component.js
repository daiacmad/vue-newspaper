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
        uploadImage: function(e) {
            var files = e.target.files;
            if(!files[0]) {
              return;
            }
            var data = new FormData();
            data.append('photo', files[0]);

            console.log(data);


            apiService.uploadSingleFile(data , res =>{
                console.log(res);
            })
            // var reader = new FileReader();
            // reader.onload = (e) => {
            //   this.imageSrc = e.target.result;
            //   console.log(this.imageSrc);
            // };
            // reader.readAsDataURL(files[0]);
        }
    },
    components:{
        Ckeditor
    }
}

export default component