import { render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Reservations from "../Reservations/Reservations";

// const mockStore = configureStore([]);
const reservations = [
      {
        city: "Los Angeles",
        date: "2023-07-05",
        product_name: "Grenade",
        reserver_at: "2023-06-21T18:16:49.581Z",
        username: "user1",
      },
    ];
    const state = {
      user: {
        id: 1,
        username: "user1",
      },
      reservations: {
        value: reservations,
        ifLoading: false,
      },
    };

const mockStore = configureStore([]);
const initialState = {
  reservation: {
    state,
  },
};

const store = mockStore(initialState);

//   jest.mock('react-router-dom', () => ({
//     useParams: () => ({ name: 'Augustus' }),
//   }));

describe("Reservations redux state tests", () => {
  xit("expects to initially set reservations as an empty object", () => {
    const initialState = {
      reservations: {
        value: "",
        ifSucceed: false,
        ifLoading: false,
        errors: null,
      },
    };
    const store = mockStore(initialState);
    const state = store.getState().reservations;
    expect(state).toEqual(initialState.reservations);
  });

  xit("expects to display one reservation from mock store", () => {
    // const reservations = [
    //   {
    //     city: "Los Angeles",
    //     date: "2023-07-05",
    //     product_name: "Grenade",
    //     reserver_at: "2023-06-21T18:16:49.581Z",
    //     username: "user1",
    //   },
    // ];
    // const state = {
    //   user: {
    //     id: 1,
    //     username: "user1",
    //   },
    //   reservations: {
    //     value: reservations,
    //     ifLoading: false,
    //   },
    // };

    // const store = mockStore(state);
    console.log(state);
    const TestComponent = () => {
      return (
        <BrowserRouter>
          <Reservations />
        </BrowserRouter>
      );
    };

    render(
      <Provider store={store}>
        <TestComponent />
      </Provider>
    );
    const animeName = screen.getByText("MY RESERVATIONS");
    expect(animeName).toBeInTheDocument();
  });

  describe("Reservations", () => {
    test("Check if render", () => {
      render(
        <Provider store={store}>
          <Reservations />
        </Provider>
      );
      const animeName = screen.getByText("MY RESERVATIONS");
      expect(animeName).toBeInTheDocument();
    });
  });
});
