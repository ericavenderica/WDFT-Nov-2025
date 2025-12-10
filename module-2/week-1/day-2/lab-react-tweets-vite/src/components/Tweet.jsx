import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet(props) {
  //destructuring
  const { user, timestamp, message } = props.oneTweet;
  return (
    <div className="tweet">
      <ProfileImage theImage={user.image} />

      <div className="body">
        <div className="top">
          <User name={user.name} handle={user.handle} />

          <Timestamp timestamp={timestamp} />
        </div>
        <Message message={message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
