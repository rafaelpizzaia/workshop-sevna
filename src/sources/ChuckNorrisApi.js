import Request from 'superagent';

const ChuckNorrisApi = {
  getCategories() {
    const getCategoriesUrl = 'https://api.chucknorris.io/jokes/categories';

    return new Promise((resolve, reject) => {
      Request
          .get(getCategoriesUrl)
          .accept('application/json')
          .end((err, res) => {
            if (err) {
              reject(err);
            } else {
              resolve(res.body);
            }
          });
    });
  },

  getFact(category) {
    let getFactUrl;
    
    if (category !== 'none') {
      getFactUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;
    } else {
      getFactUrl = 'https://api.chucknorris.io/jokes/random';
    }

    return new Promise((resolve, reject) => {
      Request
          .get(getFactUrl)
          .accept('application/json')
          .end((err, res) => {
            if (err) {
              reject(err);
            } else {
              resolve(res.body);
            }
          });
    });
  }
}

export default ChuckNorrisApi;
