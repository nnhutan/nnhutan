import TitleBody from "../titleBody/TitleBody";

const Interests = ({ data }) => {
  return (
    <div className="interests mt-4">
      <TitleBody icon="bi bi-joystick" title="Interests" />
      <div className="list ps-2 ps-lg-5">
        <span className="" style={{ fontWeight: 400, color: "#666" }}>
          {data.body && data.body.interests}
        </span>
      </div>
    </div>
  );
};

export default Interests;
