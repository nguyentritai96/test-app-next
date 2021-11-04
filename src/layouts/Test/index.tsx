// Libraries
import { useSelector, useDispatch } from 'react-redux';

// Context API
import { MyProvider, useMyContext } from 'src/contexts/Test';
// Store
import { actionTypes } from '@store/test/middleware';
import { wrapper } from '@store';

const Test = (props) => {
  const { posts } = props;
  const store = useMyContext();
  const number = useSelector((state) => state.Test.number);
  const dispatch = useDispatch();

  console.log(store, 'store', number);

  const onClick = () => {
    dispatch({ type: actionTypes.ADD_NEW_MW, payload: number + 1 });
  };

  return (
    <div>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onClick}
      >
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
