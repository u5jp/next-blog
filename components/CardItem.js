import Link from "next/link";

const CardItem = ({ className, title, subTitle, date, src, link }) => {
  return (
    <div className={className}>
      {Link && (
        <Link {...link}>
          <a>
            <div className="card">
              <p>{date}</p>
              <div className="card_imgWrap">
                <img src={src} />
              </div>
              <p className="card_title">{title}</p>
              <p className="card_text">{subTitle}</p>
            </div>
          </a>
        </Link>
      )}
    </div>
  );
};

export default CardItem;
