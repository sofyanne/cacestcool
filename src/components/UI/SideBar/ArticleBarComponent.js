import CommentCard from "../Cards/CommentCard";

const ArticleBarComponent = (props) => {
    return (

        <div className="w-2/4 px-20 bg-white">
            <div className="mt-16">
                <div className="flex justify-between w-full">
                    <p className="bg-gray-800 text-white rounded-full w-32 h-9 text-center">{props.createdAt ?? "4 avril 2022"}</p>
                    <p className="bg-blue-600 rounded-full text-white font-semibold w-32 h-9 text-center">Commenter</p>
                </div>
                <div>
                    <h4 className="text-xl font-semibold">{props.title ?? "Titre générique"}</h4>
                    <p className="text-blue-500">Par : {props.author ?? "Anonyme"}</p>
                    <span>{props.like ?? 0} likes</span>
                    <hr className="mt-5"/>
                </div>
            </div>
            <div>
                <img className="h-96 mt-10 mx-auto"
                     src="https://images.unsplash.com/photo-1555117391-6c0795768da8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5970&q=80"
                     alt=""/>
                <p className="text-justify mt-10"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci alias eaque ipsam iste officiis. Dolor harum nesciunt ratione ullam unde veniam voluptatem. Animi delectus harum inventore non nulla porro quia?</span><span>Aliquid atque consectetur deleniti doloribus, eius error eum facere illo in inventore ipsum labore nihil officiis omnis optio sit sunt. Accusamus animi architecto distinctio est explicabo pariatur repellendus repudiandae veritatis?</span><span>Accusantium amet animi facere, fuga in molestias, nesciunt omnis pariatur placeat possimus qui quis quos repellat soluta temporibus vel velit! Accusantium aspernatur commodi illo illum labore odio quam voluptatem voluptatibus!</span><span>A alias amet at autem consequuntur cupiditate delectus deleniti dolorum ea, est, ex explicabo facere id iste magnam minus non numquam quae quam quasi quidem quisquam ratione repellendus voluptas, voluptates!</span><span>A atque, deleniti dolorem ea inventore nihil omnis rem temporibus tenetur voluptates. Ad amet dolore dolores earum ex expedita facere id inventore, quasi qui quo sint sit temporibus vel voluptatem!</span><span>Ab aperiam aspernatur cum delectus dignissimos distinctio ducimus expedita facere facilis, labore laborum minima molestiae mollitia officia placeat praesentium repellendus soluta totam vero, voluptas. Consequuntur eos iure natus similique sunt.</span><span>Adipisci amet aperiam consequuntur dolor dolore ducimus earum eius ex expedita facere id itaque laboriosam laudantium nisi non odio pariatur, perferendis quo repellat repudiandae rerum vel veniam, veritatis? Expedita, numquam.</span><span>A ab aut exercitationem numquam. Accusamus aliquid dolor eius sapiente voluptas? Adipisci aliquid at atque, expedita hic illo inventore iste laudantium perspiciatis quam quo repellat repudiandae saepe sint voluptate voluptatem.</span><span>Commodi consectetur debitis explicabo, minima pariatur placeat sit? A ab accusantium atque consequatur, corporis doloribus eaque eligendi est hic impedit, in iure laboriosam molestiae nulla quibusdam quod rerum saepe voluptas.</span><span>Aliquam assumenda consectetur distinctio doloremque eligendi excepturi fuga ipsam maiores molestias nam nesciunt odit optio perferendis praesentium quaerat reprehenderit repudiandae ullam veniam, vero voluptate? Fugit laboriosam nulla provident rem rerum.</span>
                </p>
                <hr className="mt-10"/>
            </div>
            <div className="mt-5">
                <CommentCard />

                <div>
                    <input className="mt-5 h-36 w-full rounded-xl bg-gray-100" type="text"/>
                    <span className="text-blue-500">envoyer</span>
                </div>
            </div>
            
        </div>)
};

export default ArticleBarComponent;