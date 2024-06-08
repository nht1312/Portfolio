import "../../assets/styles/header.css";
import avatar from "../../assets/images/avt.jpg";
import { Image, Tag } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import CONTENT from "../../utils/constants/CONTENT";
const Header = () => {
  //MinusCircleOutlined used for unavailable status
  return (
    <div className="header">
      <div className="container">
        <div className="image">
          <div className="blank"></div>
          <div className="img">
            <Image className="avt" src={avatar} />
            <div className="status">
              <Tag icon={<CheckCircleOutlined />} color="success">
                {CONTENT.FREELANCER}
              </Tag>
            </div>
          </div>
        </div>
        <div className="content-header">
          <h1>{CONTENT.PORTFOLIO}</h1>
          <h4>{CONTENT.AUTHOR}</h4>
          <div className="blank"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
