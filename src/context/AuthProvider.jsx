import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/auth/auth.action";

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  let callApi = false;
  useEffect(() => {
    if (!user && !callApi) {
      dispatch(getUser());
    }
    return () => {
      callApi = true;
    };
  }, []);

  return children;
}
