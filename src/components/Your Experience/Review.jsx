// src/components/Reviews.js
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Reviews = (props) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    rating: 0,
    reviewText: ''
  });
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'reviews'));
        const reviewsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setReviews(reviewsData);
      } catch (error) {
        console.error("Error fetching reviews: ", error);
      }
    };

    const fetchUser = () => {
      const userEmail = localStorage.getItem("email");
      const userDisplayName = localStorage.getItem("displayName");
      if (userEmail && userDisplayName) {
        setUser({ email: userEmail, displayName: userDisplayName });
      }
    };

    fetchReviews();
    fetchUser();
  }, []);

  const handleStarClick = (rating) => {
    setNewReview(prevReview => ({
      ...prevReview,
      rating: rating
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prevReview => ({
      ...prevReview,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("User is not logged in");
      return;
    }

    const reviewToSubmit = { ...newReview, userName: user.displayName };

    try {
      const docRef = await addDoc(collection(db, 'reviews'), reviewToSubmit);
      const reviewWithId = { id: docRef.id, ...reviewToSubmit };
      setReviews([...reviews, reviewWithId]);
      setNewReview({
        rating: 0,
        reviewText: ''
      });
    } catch (error) {
      console.error("Error adding review: ", error);
    }
  };

  const handleSignIn = () => {
    signInWithPopup(auth, provider).then((data) => {
      const signedInUser = data.user;
      setUser({ email: signedInUser.email, displayName: signedInUser.displayName });
      localStorage.setItem("email", signedInUser.email);
      localStorage.setItem("displayName", signedInUser.displayName);
    }).catch((error) => {
      console.error("Error signing in: ", error);
    });
  };

  return (
    <div>
      

      {reviews.map(review => (
        <div key={review.id} className='yellow-box'>
          <p>{review.userName}:
            {Array.from({ length: 5 }, (_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                style={{ color: index < review.rating ? 'gold' : 'gray' }}
              />
            ))}
          {review.reviewText}</p>
        </div>
      ))}
      {user ? (
        <div className='yellow-box'>
          <h2>Write your Review</h2>
        <form onSubmit={handleSubmit}>
        {props.name}
          <div>
            {Array.from({ length: 5 }, (_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                onClick={() => handleStarClick(index + 1)}
                style={{
                  cursor: 'pointer',
                  color: index < newReview.rating ? 'gold' : 'gray'
                }}
              />
            ))}
          </div>
          <textarea
            name="reviewText"
            className='inp'
            placeholder="Review Text"
            value={newReview.reviewText}
            onChange={handleChange}
            required
          ></textarea>
          <button className="button" type="submit">Submit Review</button>
        </form>
        </div>
      ) : (
        <button className="button" onClick={handleSignIn}>Sign In To leave a Review</button>
      )}
    </div>
    
  );
};

export default Reviews;
