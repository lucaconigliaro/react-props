import style from "./BlogCard.module.css"
import ButtonCard from "./ButtonCard"

function BlogCard({ title, content, image, tags }) {
    return (
        <div className={style.card}>
            <div className="card-image">
                <img className={style.image} src={image} alt="" />
            </div>
            <div className={style.content}>
                <div className={style.header}>
                    <h4>{title}</h4>
                    <div className={style.tags}>
                        {tags.map((tag, index) => (
                            <span key={index} className={`tag ${style[tag]}`}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <p>{content}</p>
                <ButtonCard />
            </div>
        </div>
    );
}

export default BlogCard