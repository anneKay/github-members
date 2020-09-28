import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import memberListData from "../utils/helper";
import { act } from "react-dom/test-utils";
import MemberList from "../components/MemberList";

describe('MemberList component rendering', () => {

  let container = null;
  beforeEach(() => {

    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {

    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("renders members", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(memberListData)
      })
    );

    await act(async () => {
      render(<MemberList />, container);
    });
    expect(container.querySelector("div").textContent).toBe('Members');
    expect(container.querySelector("li").textContent).toContain(memberListData[0].login);
  
    global.fetch.mockRestore();
  })
});
