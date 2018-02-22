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
            },

            //article
            articles:{
                slug:"",
                title:"",
                content:"",
                thumbnail:""
            }

        }
    },
    mounted(){
    },
    methods:{
        uploadImage: function(e) {
            let $this = this;
            var files = e.target.files;
            if(!files[0]) {
              return;
            }
            var data = new FormData();
            data.append('uploadfile', files[0]);


            apiService.uploadSingleFile(data , (res) =>{
                this.articles.thumbnail =config.pathUrlAssets+ res.url;
            });
        },
        onCancelUploadThumbnail: function(){
            this.articles.thumbnail = '' ;
            $("#thumbnail").val('');
        },
        onValidateForm: function(){
            this.message.display = false;
            this.$validator.validateAll('articleForm').then(result => {
                (result) ? this.onCreateUpdate() : false;
           });
        },
        onCreateUpdate: function(){
            apiService.createArticle(this.articles , res =>{
                if(res.ok){
                    this.message = globalService.success("Create Article successfully");
                }else{
                    this.message = globalService.error(res.data.message);
                }
            });
        }
    },
    components:{
        Ckeditor
    }
}

export default component