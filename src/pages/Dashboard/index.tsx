import { SidebarMenu } from "../../components/sideMenu";
import { Container, AnimationBox } from "./style";
import Lottie from "react-lottie";
import animationData from "../../assets/22830-page-construction.json";
import { GiHistogram } from "react-icons/gi";
import { Link } from "react-router-dom";

export const DashboardPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <SidebarMenu />
      <AnimationBox>
        <div>
          <GiHistogram />
          <Link to="/dashboard">Dashboard</Link>
          <p>Dashboard</p>
        </div>
        <Lottie options={defaultOptions} height={400} width={600} />
        <h1>Em construção . . .</h1>
      </AnimationBox>
    </Container>
  );
};
