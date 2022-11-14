export const state = () => ({})

export const mutations ={};

export const getters={};

export const actions={

  async allCategory() {
    let res = await this.$axios.get('api/v1/category')
    return res;
  },

  async featruedPost() {
    let res = await this.$axios.get('api/v1/article/featured-post')
    return res;
  },
  async latestPost() {
    let res = await this.$axios.get('api/v1/article/latest-post')
    return res;
  },

};
