export const state = () => ({})

export const mutations ={};

export const getters={};

export const actions={

  async  getArticle(){
    let res = await this.$axios.get('api/v1/article');
    return res;
  },

  async getArticleByContentID(){
    let res = await this.$axios.get('');
  },

  async getContentById(commit,content_id){
    let res = await this.$axios.get(`api/v1/auth/article-content/show/${content_id}`);
    return res;
  }

}
