import React, {useContext, useState} from 'react';
import ReviewContext from './submitReview';
const SubmitReview = () =>{
    const [review, setReview] = useContext(ReviewContext);
    const [nameField, setNameField] = useState("");
    const [reviewField, setReviewField] = useState("");
    const [message, setMessage] = useState("");

    const addReview = () =>{
        let newReview = [nameField, reviewField, ...order];
        const reviewString = JSON.stringify(newReview);
        fetch(`http://localhost:3001/addReview`, {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*     ",
            "Content-Type": "application/json",
          },
          body: orderString,
        })
        .then(() => {
            setMessage(
              "Hi " +
                nameField +
                " thank you for reviewing this talk."
            );
            setOrder([]);
            setNameField("");
            setReviewField("");
          })
        .catch((err) => {
          console.log(err);
        });
      };
      return (
        <div>
            <h2>Review Talk</h2>
            <label> Enter your name:</label>
            <input
            className="form-control"
            type="text"
            placeholder="Enter your name here ..."
            value={nameField}
            onChange={(e) => setNameField(e.target.value)}
            />
            <label> Tell us your thoughts!</label>
            <input
            className="form-control"
            type="text"
            placeholder="Enter review here ..."
            value={tableField}
            onChange={(e) => setTableField(e.target.value)}
            />
            <button onClick={addReview}>Submit</button>
            <p>{message}</p>
        </div>
        );
    };
    export default SubmitReview;
