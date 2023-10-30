function Tweet(props) {
  return (
    <div className="tweet">
      <div className="tweet-name">{props.username} - {props.name}</div>
      <div className="tweet-message">{props.message}</div>
      <div className="tweet-date">{props.date}</div>
    </div>
  );
}