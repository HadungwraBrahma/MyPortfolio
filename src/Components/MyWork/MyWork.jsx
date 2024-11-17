import "./MyWork.css";
import mywork_data from "../../assets/mywork_data";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Project</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <a key={index} target="_blank" href={work.w_url}>
              <img  src={work.w_img} alt="" />
            </a>
          );
        })}
      </div>
      <p className="mywork-para">👆Click to view project👆</p>
    </div>
  );
};

export default MyWork;
