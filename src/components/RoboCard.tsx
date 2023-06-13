interface RobotInfoProps {
  id: number;
  name: string;
  email: string;
  phone: number;
  address1: string;
  address2: string;
}

const RoboCard: React.FC<RobotInfoProps> = ({
  id,
  name,
  email,
  phone,
  address1,
  address2,
}) => {
  return (
    <div className="roboBox">
      <div className="boxImage">
        <img src={`https://robohash.org/$${id}?size=100x100`} alt={name} />
      </div>
      <div className="boxName">
        <h3>{name}</h3>
      </div>
      <div className="boxInfo">
        <p>{phone}</p>
        <p>{email}</p>
        <p>
          {address1}, {address2}
        </p>
      </div>
    </div>
  );
};

export default RoboCard;
