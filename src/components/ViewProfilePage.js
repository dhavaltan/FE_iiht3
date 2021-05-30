import React, { useState, useEffect } from "react";
import TweetComponent from "./TweetComponent";
import userService from '../services/user.service'
import { useParams } from "react-router";

function ViewProfilePage() {

  
  const [userTweets, setUserTweets] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [userId, setUserId] = useState();

  let { id } = useParams();
    

  useEffect(() => {
    callAPI();
    }, [])

  const callAPI = () => {
    if (id) {
      setUserId(id);
      // const user = authService.getCurrentUser();
      //   setCurrentUser(user)
      userService.getUserTweets(id).then(response => {
        setUserTweets(response.data)
          console.log(response);
        })
          .catch(error => {
            console.log(error);
        })
    }
  }

  return (
      <div className="container" style={{
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <h1 className="text-center w-100 my-3">@{userId}</h1>
                

        <p>User Tweets</p>
        {
          userTweets.length > 0 ? (userTweets?.map((ele , index) => <TweetComponent key={index} callAPI={callAPI} tweet = {ele} />)) : null
        }
      </div>
  );
}

export default ViewProfilePage;
