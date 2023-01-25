const Score = (props) => {
  console.log(props, 'score')
  return (
    <div>
      {props.studentName} recieved a score of: {props.score.score} on: {props.score.date}.
    </div>
  );
}

export default Score;