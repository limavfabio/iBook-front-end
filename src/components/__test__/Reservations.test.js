import configureStore from 'redux-mock-store';
import store from '../../redux/store';
const mockStore = configureStore([]);

describe('Reservations redux state tests', () => {
  it('expects to initially set reservations as an empty object', () => {
    const state = store.getState().reservations;
    const initialState = {
        value: '',
        ifSucceed: false,
        ifLoading: false,
        errors: null,
      };
    expect(state).toEqual(initialState);
  });
//   it('expects to display one  anime from mock store', () => {
//     const anime = [
//       {
//         mal_id: 1,
//         title: 'Cowboy Bebop',
//         episodes: 26,
//         images: {
//           jpg: { image_url: 'https://cdn.myanimelist.net/images/anime/4/19644.jpg' },
//         },
//       },

//     ];
//     const state = {
//       animeList: {
//         anime,
//         loading: false,
//       },
//     };
//     const store = mockStore(state);
//     render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <Reservations />
//         </BrowserRouter>
//       </Provider>,
//     );
//     const animeName = screen.getByText('Cowboy Bebop');
//     expect(animeName).toBeInTheDocument();
//   });
});
