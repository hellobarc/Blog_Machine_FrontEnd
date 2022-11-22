export const state = () => ({})

export const mutations ={};

export const getters={};

export const actions={

  async  getArticle(){
    let res = await this.$axios.get('api/v1/article');
    return res;
  }

}
