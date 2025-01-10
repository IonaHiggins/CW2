import React,{ useState, useContext } from "react"

import { useLocalStorage } from "../useLocalStorage";

const SubmitReview=({talkId})=>{
    const [review, setReview] = useLocalStorage('Review',{});
    const [nameField, setNameField] = useState("");
    const [reviewField, setReviewField] = useState("");
    const[message,setMessage]=useState("");
    const addReview = () => {
        const newReview = {name: nameField, comment: reviewField};

        const currentReviews = review[talkId] || [];

        const updatedReviews = {
            ...review,
            [talkId]: [newReview, ...currentReviews], 
        };

        setReview(updatedReviews);

        setMessage(
            "Hi " +
            nameField +
            " thank you for reviewing this talk."
            );
            setNameField("");
            setReviewField("");
          }
   
      return (
        <div>
            <h5>Review this talk:</h5>
            <label> Name:</label>
            <input
            className="form-control"
            type="text"
            height="10rm"
            placeholder="Enter your name here ..."
            value={nameField}
            onChange={(e) => setNameField(e.target.value)}
            />
            <label> Comments:</label>
            <input
            className="form-control"
            type="text"
            placeholder="Tell us your thoughts ..."
            value={reviewField}
            onChange={(e) => setReviewField(e.target.value)}
            />
            <button onClick={addReview}>Submit Review</button>
            <p>{message}</p>
        </div>
        );
    };
    export default SubmitReview;
 