import Button from '@components/Button';
import demoService from '@services/demo/index';
import { MyProvider, useMyContext } from 'src/contexts/Demo/state';

interface post {
  userId: number;
  id: number;
  title: string;
}

const Test = (props) => {
  const { posts } = props;
  const store = useMyContext();
  console.log(store, 'store');
  return <div>Test context {store.hello}</div>;
};

const MyTest = (props) => (
  <MyProvider>
    <Test {...props} />
  </MyProvider>
);

export default MyTest;

export async function getStaticProps(context) {
  const response = await demoService.getPosts({}, { isOriginalUrl: true });

  return {
    props: {
      posts: response.slice(0, 3),
      context: JSON.stringify(context),
    },
  };
}
