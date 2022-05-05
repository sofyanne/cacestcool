import CommentsCounter from "../Icons/CommentsCounter";
import LikeComponent from "../Icons/LikeComponent";

const CommentCard = (props) => {

    return (
            <div className="flex w-3/6 h-36 p-3  items-center justify-between">
                <div className="w-1/6">
                    <img className="rounded-full h-10"
                         src="https://vetref.fr/wp-content/uploads/2021/02/blank-profile-picture-973460_640.png" alt=""/>
                    <span className="text-xs">12:32</span>
                </div>

                <div className="w-5/6 bg-gray-200 rounded-3xl p-5">
                    <div className="h-1/3">
                        <p className="font-semibold h-1/3">{props.author ?? "Anonyme"}</p>
                        <p className="h-16 overflow-clip leading-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Alias
                            cum dolorem eius est molestias quis vel vitae? Accusamus aut culpa cumque cupiditate debitis
                            incidunt, iste iure odit quae quam repellendus!incidunt, iste iure odit quae quam
                            repellendus!incidunt, iste iure odit quae quam repellendus!incidunt, iste iure odit quae quam
                            repellendus!incidunt, iste iure odit quae quam repellendus!incidunt, iste iure odit quae quam
                            repellendus!incidunt, iste iure odit quae quam repellendus!incidunt, iste iure odit quae quam
                            repellendus!incidunt, iste iure odit quae quam repellendus!</p>


                    </div>
                </div>


            </div>

    )
};

export default CommentCard;