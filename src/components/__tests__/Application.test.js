import React from "react";

import { render, cleanup, waitForElement,fireEvent } from "@testing-library/react";

import Application from "components/Application";


afterEach(cleanup);

it("Defaults to Monday and changes schedule when new day is selected", () => {
  const {getByText} = render(<Application />);

  return waitForElement(() => getByText("Monday")).then(() => {
    fireEvent.click(getByText("Tuesday"));
    expect(getByText("Leopold Silvers")).toBeInTheDocument();
  });
});
