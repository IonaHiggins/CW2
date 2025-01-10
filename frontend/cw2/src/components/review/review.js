import React, {useState} from "react";
import ReviewContext from "./reviewContext";
import SubmitReview from "./submitReview";

const Review = ({talkId})=>{
    const [review, setReview] = useState([]);
    return(
    <div><ReviewContext.Provider value={[review, setReview]}>
    <SubmitReview talkId = {talkId}/>
    </ReviewContext.Provider>
</div>
    );
};
export default Review;