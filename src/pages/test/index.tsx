// Services
import demoService from '@services/demo';
// Components
import Test from 'src/layouts/Test';
// Store
import { wrapper } from '@store';
import { actionTypes } from 'src/store/test/middleware';

interface post {
  userId: number;
  id: number;
  title: string;
}

const MyTest = () => (
  <>
    <Test />
  </>
);

export default MyTest;

// export const getStaticProps = wrapper.getStaticProps(
//   (store) => async (context) => {
//     console.log(
//       '2. Page.getStaticProps uses the store to dispatch things',
//       store.getState(),
//       store.persistor.getState(),
//     );
//     // store.dispatch({
//     //   type: actionTypes.ADD_NEW_MW,
//     //   payload: 6,
//     // });

//     const response = await demoService.getPosts({}, { isOriginalUrl: true });

//     return {
//       props: {
//         posts: [].slice(0, 3),
//         context: JSON.stringify(context),
//       },
//     };
//   },
// );

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    console.log(
      '2. Page.getStaticProps uses the store to dispatch things',
      store.getState(),
    );

    // console.log(context.req.cookies['Test.number']);
    // await store.dispatch({
    //   type: actionTypes.ADD_NEW_MW,
    //   payload: 2,
    // });

    const response = await demoService.getPosts({}, { isOriginalUrl: true });

    return {
      props: {
        posts: [].slice(0, 3),
      },
    };
  },
);
