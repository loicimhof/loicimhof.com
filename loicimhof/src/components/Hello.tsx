import "animate.css";

const Hello = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <h1 className="animate__animated animate__flip">Welcome</h1>

        <h3 className="animate__animated animate__lightSpeedInLeft animate__delay-1s">
          To my home page
        </h3>
      </div>
    </>
  );
};

export default Hello;
