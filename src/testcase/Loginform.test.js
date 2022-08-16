import { screen, render, fireEvent } from "@testing-library/react";
import Loginform from "./Loginform";

test("testdemo", () => {
  render(<Loginform />);

  const names = screen.getByTestId("name");
  const mail = screen.getByTestId("mail");
  const mobilenumber = screen.getByTestId("mobilenumber");

  fireEvent.change(names, { target: { name: "name", value: "kishore" } });
  fireEvent.change(mail, {
    target: { name: "mail", value: "kk@dorustree.in" },
  });
  fireEvent.change(mobilenumber, { target: { name: "mobilenumber" } });
  //mobile number did not enter the value

  expect(names.value).toBe("kishore");
  expect(mail.value).toBe("kk@dorustree.in");
  // expect(mobilenumber).toBe("");
});
