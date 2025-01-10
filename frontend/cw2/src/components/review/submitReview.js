import React,{ useState, useContext } from "react"
import { useReview} from "./reviewContext"

const SubmitReview=()=>{
    const [review, setReview] = useContext(ReviewContext);

    const addReview = () => {
        let newReview = [nameField, reviewField, ...review
        const reviewString = JSON.stringify(newReview);
        fetch(`http://localhost:3001/addOrder`, {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*     ",
            "Content-Type": "application/json",
          },
          body: reviewString,
        })
        .then(() => {
            setMessage(
              "Hi " +
                nameField +
                " thank you for reviewing " +talkId+" ."
            );
            setReview([]);
            setNameField("");
            setReviewField("");
          })
        .catch((err) => {
          console.log(err);
        });
      };
      return (
        <div>
            <h2>Submit Review</h2>
            <label> Name:</label>
            <input
            className="form-control"
            type="text"
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
