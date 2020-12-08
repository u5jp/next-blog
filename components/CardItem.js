const CardItem = ({ className }) => {
  return (
    <div className={className}>
      <div className="card">
        <img className="card_img" src={"https://via.placeholder.com/150"} />
        <p className="card_title">タイトル</p>
        <p className="card_text">サブタイトル</p>
      </div>
    </div>
  );
};

export default CardItem;
