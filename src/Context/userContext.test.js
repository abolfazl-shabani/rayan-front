import renderer from "react-test-renderer";
import RegisterForm from "../pages/register";
import getUser from "";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { UserContext } from "./userContext";

jest.mock(getUser, ({ children }) => {
  const [user, setUser] = useState(null);
  const getUser = () => {
    axios
      .get("/profile")
      .then(({ data }) => {
        setUser(data);
      })
      .catch(({ data }) => {
        toast.error(data.error);
      });
  };

  useEffect(() => {
    !user && getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, getUser }}>
      {children}
    </UserContext.Provider>
  );
});

it("changes the class when hovered", () => {
  const component = renderer.create(<RegisterForm refresh={getUser} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  renderer.act(() => {
    tree.props.onMouseEnter();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  renderer.act(() => {
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// import { expect } from "@jest/globals";

// test('rejects to octopus', () => {
//     // make sure to add a return statement
//     return expect(Promise.reject(new Error('octopus'))).rejects.toThrow(
//       'octopus',
//     );
//   });
