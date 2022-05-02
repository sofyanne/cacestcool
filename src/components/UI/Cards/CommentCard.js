import {Comment} from "postcss";
import CommentsCounter from "../Icons/CommentsCounter";
import LikeComponent from "../Icons/LikeComponent";

const CommentCard = (props) => {

    return (
        <div className="flex w-96 h-28 p-3 rounded-2xl bg-white items-center justify-between">
            <img className="rounded-full h-16 w-16"
                 src="https://vetref.fr/wp-content/uploads/2021/02/blank-profile-picture-973460_640.png" alt=""/>
            <div className="ml-2">
                <p className="font-semibold">Comment javascript a baissé le level</p>
                <p className="h-9 overflow-clip text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                    cum dolorem eius est molestias quis vel vitae? Accusamus aut culpa cumque cupiditate debitis
                    incidunt, iste iure odit quae quam repellendus!</p>
                <div className="flex justify-between mt-2">
                    <CommentsCounter/>
                    <LikeComponent />
                </div>
            </div>
        </div>
    );
}

export default CommentCard;