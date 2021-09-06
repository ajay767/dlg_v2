import { useState, useEffect } from "react";
import Wrapper from "@admin/Wrapper";
import Content from "@admin/Content";
import Navbar from "@admin/Navbar";
import routes from "@admin/routes";

function Home() {
  return (
    <Wrapper>
      <Navbar navItem={routes["blogging"].navbar} />
      <Content>All Blogs wll be shown Here</Content>
    </Wrapper>
  );
}

export default Home;
