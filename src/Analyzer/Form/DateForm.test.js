import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { jest, describe, expect, test } from "@jest/globals";
import DateForm from "./DateForm";
import { dateToUnix } from "../../utils"

describe('DateForm', () => {

  test('callbackToParent is called when form is successfully submitted', async () => {
    const callbackMock = jest.fn()
    render(
      <DateForm callbackToParent={callbackMock} /> 
    )
    const startInput = screen.getByTestId("startInput");
    const endInput = screen.getByTestId("endInput");
    const form = screen.getByTestId("dateForm");

    fireEvent.change(startInput, {target: { value: '2022-01-05'}});
    fireEvent.change(endInput, {target: { value: '2022-01-08'}});
    fireEvent.submit(form);

    await waitFor(() => expect(callbackMock.mock.calls.length).toBe(1));
  })

  test('callbackToParent is returning input dates as UNIX Timestamps', async () => {
    const callbackMock = jest.fn()
    render(
      <DateForm callbackToParent={callbackMock} /> 
    )
    const startInput = screen.getByTestId("startInput");
    const endInput = screen.getByTestId("endInput");
    const form = screen.getByTestId("dateForm");

    const validStart = '2022-01-05';
    const validEnd = '2022-01-08';
    //1h is added to the end date to get full data from that day
    const HOUR_IN_SECONDS = 60 * 60; //3600s

    fireEvent.change(startInput, {target: { value: validStart}});
    fireEvent.change(endInput, {target: { value: validEnd}});
    fireEvent.submit(form);

    await waitFor(() => expect(callbackMock.mock.calls[0][0].startUnix).toBe(dateToUnix(validStart)));
    expect(callbackMock.mock.calls[0][0].endUnix).toBe(dateToUnix(validEnd) + HOUR_IN_SECONDS);
    
  })

  test("should display correct error when input dates are same", async () => {
    const callbackMock = jest.fn()
    const view = render(
      <DateForm callbackToParent={callbackMock} /> 
    )
    const startInput = screen.getByTestId("startInput");
    const endInput = screen.getByTestId("endInput");
    const form = screen.getByTestId("dateForm");

    fireEvent.change(startInput, {target: { value: '2022-01-05'}});
    fireEvent.change(endInput, {target: { value: '2022-01-05'}});
    fireEvent.submit(form);

    await waitFor(() => expect(view.container).toHaveTextContent('Oooops! Dates should be different.'));
    expect(callbackMock.mock.calls).toHaveLength(0);  
  })

  test("should display correct error when input dates are not in the past", async () => {
    const callbackMock = jest.fn()
    const view = render(
      <DateForm callbackToParent={callbackMock} /> 
    )
    const startInput = screen.getByTestId("startInput");
    const endInput = screen.getByTestId("endInput");
    const form = screen.getByTestId("dateForm");

    fireEvent.change(startInput, {target: { value: '2027-01-22'}});
    fireEvent.change(endInput, {target: { value: '2027-01-24'}});
    fireEvent.submit(form);

    await waitFor(() => expect(view.container).toHaveTextContent('Ooops! Both dates should be in the past.'));
    expect(callbackMock.mock.calls).toHaveLength(0);
  })

  test("should display correct error when input dates are not in valid order", async () => {
    const callbackMock = jest.fn()
    const view = render(
      <DateForm callbackToParent={callbackMock} /> 
    )
    const startInput = screen.getByTestId("startInput");
    const endInput = screen.getByTestId("endInput");
    const form = screen.getByTestId("dateForm");

    fireEvent.change(startInput, {target: { value: '2022-01-08'}});
    fireEvent.change(endInput, {target: { value: '2022-01-05'}});
    fireEvent.submit(form);

    await waitFor(() => expect(view.container).toHaveTextContent('Ooops! Start date should be before end date.'));
    expect(callbackMock.mock.calls).toHaveLength(0);
  })

})
