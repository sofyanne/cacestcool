import {Comment} from "postcss";
import CommentsCounter from "../Icons/CommentsCounter";
import LikeComponent from "../Icons/LikeComponent";

const PostCard = (props) => {

    return (
        <div className="flex items-center justify-around w-4/5">
            <div className="flex w-5/6 h-36 p-3 rounded-3xl bg-white items-center justify-between hover:scale-105 shadow-2xl">
                <img className="rounded-full h-20"
                     src="https://vetref.fr/wp-content/uploads/2021/02/blank-profile-picture-973460_640.png" alt=""/>
                <div className="ml-5">
                    <div className="h-1/3">
                        <p className="font-semibold h-1/3">Comment javascript a baissé le level</p>
                        <p className="h-16 overflow-clip leading-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Alias
                            cum dolorem eius est molestias quis vel vitae? Accusamus aut culpa cumque cupiditate debitis
                            incidunt, iste iure odit quae quam repellendus!incidunt, iste iure odit quae quam
                            repellendus!incidunt, iste iure odit quae quam repellendus!incidunt, iste iure odit quae quam
                            repellendus!incidunt, iste iure odit quae quam repellendus!incidunt, iste iure odit quae quam
                            repellendus!incidunt, iste iure odit quae quam repellendus!incidunt, iste iure odit quae quam
                            repellendus!incidunt, iste iure odit quae quam repellendus!</p>


                    </div>
                    <div className="flex h-1/3 justify-between mt-2">
                        <CommentsCounter/>
                        <LikeComponent/>
                    </div>
                </div>


            </div>
            <svg className="w-1/6 " width="40" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6 6L1 11" stroke="#444444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        </div>

);
}

export default PostCard;