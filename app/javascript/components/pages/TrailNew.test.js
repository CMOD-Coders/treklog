import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import TrailNew from "./TrailNew";
import { BrowserRouter, Router, MemoryRouter } from "react-router-dom";
import { object } from "prop-types";
import '@testing-library/jest-dom'

describe("<TrailNew />", () => {
  const current_user = {
    id: 1,
    name: "John Doe",
  };
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(
      <MemoryRouter>
        <TrailNew currentUser={current_user} /> 
      </MemoryRouter>
    )
  })
  it("can see the title of the page", () => {
    const div = document.createElement("div");
    render(
    <MemoryRouter>
      <TrailNew currentUser={current_user} /> 
    </MemoryRouter>
    )
    const title = screen.getByText("Create", { exact: false });
    expect(title.textContent).toEqual("Create a New Trail");
  });
  it("has a button", () => {
    render(
      <BrowserRouter>
        <TrailNew currentUser={current_user} />
      </BrowserRouter>
    )
    const button = screen.getByRole("button", {
      name: /Add New Trail/i,
    })
    expect(button).toBeInTheDocument();
  })
  it("has a form with all entries", () => {
    render(
      <MemoryRouter>
        <TrailNew currentUser={current_user} /> 
      </MemoryRouter>
    )
    const formName = screen.getByText("Name" ,{exact: false})
    expect(formName.getAttribute("for")).toEqual("trail name")
    const formLocation = screen.getByText(/location/i)
    expect(formLocation.getAttribute("for")).toEqual("location")
    const formImage = screen.getByText(/image/i)
    expect(formImage.getAttribute("for")).toEqual("image")
  })
  it("calls the createTrail function and navigates to '/trailsindex' when the 'Add Trail' button is clicked", () => {
    const createTrail = jest.fn("hello")
    const navigate = jest.fn("hello")
    const currentUser = "user123"
    const { getByText, getByPlaceholderText } = render(<BrowserRouter >
    <TrailNew createTrail={createTrail} currentUser={currentUser} /> </BrowserRouter>)
    fireEvent.change(getByPlaceholderText("Type the Trail Name..."), { target: { value: "Test Trail" } })
    fireEvent.change(getByPlaceholderText("Type the City and State..."), { target: { value: "Test Location" } })
    fireEvent.change(getByPlaceholderText("Type the URL Image..."), { target: { value: "https://example.com/image.jpg" } })
    fireEvent.change(getByPlaceholderText("Type a Description..."), { target: { value: "Test Description" } })
    fireEvent.change(getByPlaceholderText("Choose between Beginner, Intermediate or Advanced..."), { target: { value: "Beginner" } })
    fireEvent.change(getByPlaceholderText("Type the # of miles..."), { target: { value: "5" } })
    fireEvent.change(getByPlaceholderText("Type the # of hours..."), { target: { value: "2 hours" } })
  })
});
