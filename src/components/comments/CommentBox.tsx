import type { Comment } from "./NestedComments"

interface CommentBoxProps {
    data: Comment[];
}

const CommentBox = ({ data }: CommentBoxProps) => {
  return (
    <div>
        {
            data.map((comment, idx) => (
                <div className="pl-10">
                    <div key={idx} className="flex border-l-2 border-black">
                        <div>
                            <img 
                                className="w-16 h-16 p-2 rounded-full"
                                src={'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png'} 
                                alt="avatar"
                            />
                        </div>
                        <div>
                            <p className="font-semibold px-2 py-4">{comment.username}</p>
                            <p className="px-2">{comment.comment}</p>
                        </div>
                    </div>
                    {
                        comment?.replies && comment?.replies?.length > 0 &&
                        <div>
                            <CommentBox data={comment?.replies} />
                        </div>
                    }
                </div>
          ))
        }
    </div>
  ) 
}

export default CommentBox