import services from '@services';

const APIs = {
  getPosts(params: object, options: object) {
    return services.get(
      'https://jsonplaceholder.typicode.com/posts',
      params,
      options,
    );
  },
};

export default APIs;
