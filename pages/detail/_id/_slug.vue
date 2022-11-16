<template lang="">
  <div>
        <hr>
        <div class="inner_box">
          <div class="row">
            <div class="col-md-1"></div>
              <div class="col-md-8 col-md-offset-2">
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
                                          {{textcontent.content}}
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
                    <ul>
                      <li v-for="(table_content,index) in subHeads" :key="index"><a :href="`#${index+1}`" :id="`link_part_${index+1}`">{{table_content}}</a></li>
                    </ul>
                  </div>
                  <div class="gray_box">
                    <h4>Criteria</h4>
                  </div>

                </div>
              </div>
          </div>
        </div>
  </div>
</template>
<script>
export default {
  components:{

  },
  data(){
    return {
        article_id: this.$route.params.id,
        article_data:{},
        sub_heads:[],
        sub_dom: {}
    }
  },
  computed:{
    subHeads(){

          return this.sub_heads.map((item)=>{
                return item.content_subtitle;
          });

        /*

            for (var i = 0; i < subtitle.length; i++) {
                this.sub_heads.push(subtitle[i].textContent);
            }
          */
        }
  },
  created(){
        this.sub_dom = this.$refs;
  },
  methods: {
    handleScroll () {

      const subtitle = this.$el.querySelectorAll("h2");
      const  observer = new IntersectionObserver(entries => {
        entries.forEach(entry=>{;
              if(entry.isIntersecting){
                  document.getElementById("link_part_"+entry.target.id).style.color = "red";
              }else{
                document.getElementById("link_part_"+entry.target.id).style.color = "blue";
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
      this.sub_heads = res.data.data[0].article_content;
    }


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
