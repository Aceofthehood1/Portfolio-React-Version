import { Link } from "react-router-dom";

interface Props {}

const HomePage = (props: Props) => {
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen bg-amber-500">
      <h2>Hi, I'm</h2>
      <h1>GEOFFREY AMEBLE</h1>
      <hr></hr>
      <h2>Web Developer and Software Engineer</h2>
      <Link to="/portfolio">Sup bro</Link>
    </div>
    </>
  );
};

export default HomePage;
