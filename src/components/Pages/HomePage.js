import StatusBarComponent from "../UI/SideBar/StatusBarComponent";

const HomePage = (props) => {

    return <div className="flex h-full bg-gray-100">
        <StatusBarComponent/>

        <div className="w-2/4 px-10">
            <div className="h-1/4 flex flex-col justify-end">
                <h3 className="text-gray-400 text-5xl italic font-semibold mb-5">Mon mur</h3>
                <hr/>
            </div>
        </div>
    </div>
};

export default HomePage;