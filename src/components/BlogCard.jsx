import style from "./BlogCard.module.css"
import ButtonCard from "./ButtonCard"

function BlogCard() {

    return (
        <div className={style.card}>
            <div className="card-image">
                <img className={style.image} src="../public/blog.png" alt="" />
            </div>
            <div className={style.content}>
                <h4>Titolo del Post</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ad optio blanditiis necessitatibus rem, quam eos, quis aut inventore totam, quod minus sint labore a facere velit autem error! Fuga.</p>
                <ButtonCard />
            </div>
        </div>
    )
}

export default BlogCard