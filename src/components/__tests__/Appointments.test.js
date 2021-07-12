import React from "react";

import { render, cleanup } from "@testing-library/react";

import Appointment from "../Appointment/index";

afterEach(cleanup);


describe('Appointments', () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });

  it("doesn't call the function", () => {
    const fn = jest.fn();
    expect(fn).toHaveBeenCalledTimes(0);
  });

  it("calls the function", () => {
    const fn = jest.fn();
    fn();
    expect(fn).toHaveBeenCalledTimes(1);
   });

   it("uses the mock implementation", () => {
    const fn = jest.fn((a, b) => 42);
    fn(1, 2);
    expect(fn).toHaveReturnedWith(42);
   });
})
