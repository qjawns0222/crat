/* eslint-disable testing-library/render-result-naming-convention */
import { act, fireEvent, render } from "@testing-library/react";
import Button from "./Button";
describe("버튼 컴포넌트", () => {
  it("컴포넌트 정상 동작", () => {
    const button = render(<Button />);
    expect(button).not.toBe(null);
  });
  it("htmlbuttonelement", () => {
    const { getByText } = render(<Button />);
    const buttonElement = getByText("button");
    expect(buttonElement).toBeInstanceOf(HTMLButtonElement);
  });
  it("버튼클릭시 글자변경", () => {
    const { getByText } = render(<Button />);
    const buttonElement = getByText("button");
    fireEvent.click(buttonElement);
    const p = getByText("버튼이 방금 눌렸다.");
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });
  it("버튼클릭안할시", () => {
    const { getByText } = render(<Button />);
    const p = getByText("버튼이 눌리지 않았다.");
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });
  it("버튼클릭시 5초후글자변경", () => {
    jest.useFakeTimers();
    const { getByText } = render(<Button />);
    const buttonElement = getByText("button");
    fireEvent.click(buttonElement);
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    const p = getByText("버튼이 눌리지 않았다.");
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });
  it("버트비활성화5초", () => {
    jest.useFakeTimers();
    const { getByText } = render(<Button />);
    const buttonElement = getByText("button");
    fireEvent.click(buttonElement);
    expect(buttonElement).toBeDisabled();
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(buttonElement).not.toBeDisabled();
  });
});
