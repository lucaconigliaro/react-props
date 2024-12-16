import BlogCard from "./BlogCard"
import posts from "../components/data/posts"

function AppMain() {

    const printPost = () => {
        return posts.map((curPost) => (
            curPost.published &&
            <div className="col" key={curPost.id}>
                <BlogCard
                    // key={curPost.id}
                    // image={curPost.image}
                    // title={curPost.title}
                    // content={curPost.content}
                    // tags={curPost.tags}
                    post={curPost}
                />
            </div >
        ));
    };

    return (
        <main>
            <div className="container">
                <div className="row">
                    {printPost()}
                </div>
            </div>
        </main>
    );
}


export default AppMain