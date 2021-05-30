import React, { useState } from "react";

function TweetReplyPage() {

  const [message, setMessage] = useState('')

  const handleSubmit = () => {

  }

  return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h1 className="text-center w-100 my-3">Reply Tweet</h1>
                <div className="d-flex flex-row">
                  <p className="my-2">
                    @john
                  </p>
                  <p className="mx-2 my-2">
                    John Doe
                  </p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellat alias recusandae ut modi error!</p>
                 
                <form onSubmit={handleSubmit}>
                  <div className="form-label-group my-2">
                    <textarea
                      rows="3"
                      name="replymessage"
                      className="form-control"
                      placeholder="Enter message"
                      required
                      autofocus
                      value={message}
                      onChange={(e)=>setMessage(e.target.value)}
                    />
                  </div>
                  
                  <br />
                  <button
                    className="btn btn-lg btn-primary btn-block w-100"
                    type="submit"
                  >
                    Reply
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default TweetReplyPage;
