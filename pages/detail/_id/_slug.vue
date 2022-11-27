<template lang="">
  <div>
      <hr>
        <div class="inner_box">
          <div class="row">
            <div class="col-md-2"></div>
              <div class="col-md-7 col-md-offset-3">
                {{meta_keyword}}
                <div class="main_content" v-for="(item,index) in article_data" :key="index"  >
                  <div>
                    <nuxt-link to="/category/id/slug"><p>{{item.category.cat_name}}</p></nuxt-link>
                  </div>
                  <h1 class="post_title">{{item.title}}</h1>
                    <div class="article_content" ref="mycontent">
                        <div v-for="(article_content,article_index) in item.article_content" :key="article_index">
                            <h2 :id="article_content.id" class="subt">{{article_content.content_subtitle}}</h2>
                            <div class="content_type" v-if="article_content.content_type=='text'">
                                <div v-for="(textcontent,ind) in item.article_text_content" :key="ind">
                                      <div v-if="textcontent.article_content_id==article_content.id">
                                          <div v-html="textcontent.content"></div>
                                      </div>
                                </div>
                            </div>
                            <div class="content_type" v-if="article_content.content_type=='image'">
                                <div v-for="(image_content,ind) in item.article_image_content" :key="ind">
                                      <div v-if="image_content.article_content_id==article_content.id">
                                         <img :src="`${base_url}${image_content.content}`" width="100%">
                                      </div>
                                </div>
                            </div>
                            <div class="content_type" v-if="article_content.content_type=='video'">
                                <div v-for="(video_content,index) in item.article_video_content" :key="index">
                                      <div v-if="video_content.article_content_id==article_content.id">
                                         {{video_content.content}}
                                      </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- Main Content -->
              </div>
              <div class="col-md-3">
                <div class="sticky_sidebar">
                  <div class="gray_box" >
                    <h4>Content Navigation</h4>
                    <hr/>
                    <ul class="table_content">
                      <li v-for="(table_content,index) in subHeads" :key="index"><a :href="`#${index+1}`" :id="`link_part_${index+1}`">{{table_content}}</a></li>
                    </ul>
                  </div>
                  <div class="gray_box">
                    <h4>Criteria</h4>
                    <hr/>
                      <CategoryWidget/>
                  </div>
                </div>
              </div>
          </div>
        </div>
  </div>
</template>
<script>
import CategoryWidget from '~/components/parts/CategoryWidget.vue';

export default {
  components:{
    CategoryWidget
  },
  head () {
    return {
      title: 'About Us - Nuxt.js',
      meta: [
        { hid: 'description', name: 'description', content: 'About our company Nuxt.js ' },
        { hid: 'keywords', name: 'keywords', content: this.metaKey}
      ]
    }
  },
  data(){
    return {
        base_url: this.$axios.defaults.baseURL || 'http://127.0.0.1:8000/',
        article_id: this.$route.params.id,
        article_data:{},
        sub_heads:[],
        sub_dom: {},
        meta_keyword:null
    }
  },
  computed:{
    subHeads(){
          return this.sub_heads.map((item)=>{
                return item.content_subtitle;
          });
        },
    metaKey(){
       return "Dynamic keyword dear try cholse";
    }
  },
  created(){
        this.sub_dom = this.$refs;
  },
  methods: {
    handleScroll () {
      const subtitle = this.$el.querySelectorAll("h2");
      const  observer = new IntersectionObserver(entries => {
        entries.forEach(entry=>{
                                  if(entry.isIntersecting){
                                      document.getElementById("link_part_"+entry.target.id).style.color = "red";
                                  }else{
                                     if(entry.target.id){
                                        document.getElementById("link_part_"+entry.target.id).style.color = "#000";
                                     }

                                  }
                              });
            },{
              threshold: 1
            }
      );
      for (var i = 0; i < subtitle.length; i++) {
          observer.observe(subtitle[i]);
      }
    },

    async getArticle(){
      const res= await this.$store.dispatch("getArticle",this.article_id);
      this.article_data = res.data.data;
      this.meta_keyword = res.data.data[0].meta_keyword;
      this.sub_heads = res.data.data[0].article_content;
    },


  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);

  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted(){
   // this.subHeads();
    this.getArticle();

  }
}
</script>
<style lang="">

</style>
