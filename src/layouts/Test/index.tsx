// Libraries
import { useSelector, useDispatch } from 'react-redux';

// Context API
import { MyProvider, useMyContext } from 'src/contexts/Demo/state';
// Store
import { actionTypes } from 'src/store/test/middleware';
import { wrapper } from '@store';

const Test = (props) => {
  const { posts } = props;
  const store = useMyContext();
  const number = useSelector((state) => state.Test.number);
  const dispatch = useDispatch();

  console.log(store, 'store', number);

  const onClick = () => {
    dispatch({ type: actionTypes.ADD_NEW_MW, payload: 3 });
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
