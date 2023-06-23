import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import Reservations from "../Reservations/Reservations";


const mockStore = configureStore([]);

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useEffect: jest.fn(),
}));

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
  
  test("Check if render", () => {
    const reservations = [
      {
        city: "Los Angeles",
        date: "2023-07-05",
        product_name: "Grenade",
        reserver_at: "2023-06-21T18:16:49.581Z",
        user_name: "user1",
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


    const store = mockStore(state);

    render(
      <BrowserRouter>
        <Provider store={store}>
          <Reservations />
        </Provider>
      </BrowserRouter>
    );
    
    const reservation = screen.getByText("MY RESERVATIONS");
    expect(reservation).toBeInTheDocument();
    expect(useEffect).toHaveBeenCalled();
  });

});

