import BlogCard from "./BlogCard"
import posts from "../components/data/posts"

function AppMain() {
    const printPost = () => {
        return posts.map((curPost, index) => (
            <BlogCard
                key={index}
                image={curPost.image}
                title={curPost.title}
                content={curPost.content}
                tags={curPost.tags}
            />
        ));
    };

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {printPost()}
                    </div>
                </div>
            </div>
        </main>
    );
}


export default AppMain