import { useState, useEffect } from "react";
import { getUser } from "../../utils/api";
import Cookies from "js-cookie";
function useUser() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
    token: "",
  });
  console.log(user);
  console.log(Cookies.get("token"));
  const [loading, setLoading] = useState(true);
  const onLoad = (user) => {
    setUser(user);
  };
  useEffect(async () => {
    console.log("from server", Cookies.get());
    await getUser(onLoad);
    setLoading(false);
  }, [loading]);
  return { user, loading };
}
export default useUser;
