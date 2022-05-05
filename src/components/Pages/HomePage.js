import StatusBarComponent from "../UI/SideBar/StatusBarComponent";
import PostCard from "../UI/Cards/PostCard";
import ArticleBarComponent from "../UI/SideBar/ArticleBarComponent";

const HomePage = (props) => {

    return (
        <div className="flex h-full bg-gray-100">
            <StatusBarComponent/>

            <div className="w-2/4 px-10">
                <div className="h-1/4 flex flex-col justify-end mb-10">
                    <h3 className="text-gray-400 text-5xl italic font-semibold mb-5">Mon mur</h3>
                    <hr className="w-3/4"/>
                </div>
                <div className="3/4 w-full">
                    <PostCard/>
                </div>
            </div>
            <ArticleBarComponent />
        </div>
    );
};

export default HomePage;