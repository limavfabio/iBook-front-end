import { render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Reservations from "../Reservations/Reservations";

const mockStore = configureStore([]);

describe("Reservations redux state tests", () => {
  it("expects to initially set reservations as an empty object", () => {
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

  it("expects to display one anime from mock store", () => {
    const initialState = {
      user: {
        id: 1,
      },
      reservations: {
        value: {
          reservations: [
            {
              city: "Los Angeles",
              date: "2023-07-05",
              product_name: "Grenade",
              reserver_at: "2023-06-21T18:16:49.581Z",
              user_name: "user1",
            },
          ],
        },
      },
    };
    const store = mockStore(initialState);

    const TestComponent = () => {
      return (
        <BrowserRouter>
          <Reservations reservations={initialState.reservations.value.reservations[0]} />
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
});
