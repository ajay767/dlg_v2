import { useState } from "react";
import withAuth from "@lib/withAuth";
import Wrapper from "@admin/Wrapper";
import Content from "@admin/Content";
import Button from "@components/Button";
import TextInput from "@components/TextInput";
import Typography from "@components/Typography";
import Modal from "@components/Modal";
import Loader from "@utils/Loader";
import { Animated } from "react-animated-css";
import { generateCaptcha } from "../../../utils/api";
function RegisterUser() {
  const [name, setName] = useState("");
  const [modal, setModal] = useState(false);
  const [token, setToken] = useState("");

  const HandleTokenGenerator = async () => {
    const result = await generateCaptcha({ name });
    if (result.status === "success") {
      setModal(true);
      setToken(result.value);
    }
  };
  return (
    <Wrapper>
      <Content>
        <div className="text-gray-500">
          <Typography type="section" className="mb-2">
            Register User
          </Typography>
          <TextInput label="User" value={name} setValue={setName} />
          <Button btnType="primary" onClick={HandleTokenGenerator}>
            Generate
          </Button>

          {modal && (
            <Modal>
              <div className="bg-white p-3 w-11/12 md:w-6/12 rounded">
                <Typography
                  type="header-caption"
                  className="section text-gray-500 mb-3"
                >
                  Token
                </Typography>
                <Typography type="content" className="text-gray-700 font-bold">
                  {token}
                </Typography>
                <Button
                  btnType="primary"
                  onClick={() => {
                    navigator.clipboard.writeText(token);
                    setModal(false);
                  }}
                >
                  Copy Token
                </Button>
              </div>
            </Modal>
          )}
        </div>
      </Content>
    </Wrapper>
  );
}
const authProps = {
  component: RegisterUser,
  allowed: ["super"],
};

export default withAuth(authProps);
