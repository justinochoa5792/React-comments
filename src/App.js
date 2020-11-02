import "./App.css";
import CommentDetail from "./component/CommentDetail";
import ApprovalCard from "./component/ApprovalCard";
import faker from "faker";
function App() {
  return (
    <div className="ui container commments">
      <ApprovalCard>
        <CommentDetail
          author="Justin"
          timeAgo="Today at 6:00pm"
          content="Nice Blog Post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 4:45pm"
          content="Great Read!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Yesterday at 12:23 pm"
          content="Good to Know!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
