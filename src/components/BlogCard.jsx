import style from "./BlogCard.module.css"
import ButtonCard from "./ButtonCard"

function BlogCard({post}) {

    const { id, title, content, image, tags } = post
    
    return (
        <div className={style.card}>
            <div className="card-image">
                <img className={style.image} src={image} alt="" />
            </div>
            <div className={style.content}>
                <div className={style.header}>
                    <h4>{title}</h4>
                    <div className={style.tags}>
                        {tags.map((curTag, index) => (
                            <span key={index} className={`curTag ${style[curTag]}`}>
                                {curTag}
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