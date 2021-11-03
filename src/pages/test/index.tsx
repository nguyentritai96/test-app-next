import { useSelector, useDispatch } from 'react-redux';

import Button from '@components/Button';
import demoService from '@services/demo/index';
import { MyProvider, useMyContext } from 'src/contexts/Demo/state';
import { addNewCount } from 'src/store/test/actions';

interface post {
  userId: number;
  id: number;
  title: string;
}

const Test = (props) => {
  const { posts } = props;
  const store = useMyContext();
  const number = useSelector((state) => state.Test.number);
  const dispatch = useDispatch();

  console.log(store, 'store', number);

  const onClick = () => {
    dispatch(addNewCount({ number: 3 }));
  };

  return (
    <div>
      <button type="button" onClick={onClick}>
        Test context {store.hello}
      </button>
    </div>
  );
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
