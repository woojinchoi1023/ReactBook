import React from "react";

const Sample = ({ loadingPost, loadingUsers, post, users }) => {
  return (
    <div>
      <section>
        <h1>POST</h1>
        {loadingPost && "loading..."}
        {!loadingPost &&
          post && ( //유효성검사
            <div>
              <h3>{post.title}</h3>
              <h3>{post.body}</h3>
            </div>
          )}
      </section>
      <hr />
      <section>
        <h1>User List</h1>
        {loadingUsers && "loading..."}
        {!loadingUsers && users && (
          <ul>
            {users.map(
              (
                user //유효성검사
              ) => (
                <li key={user.id}>
                  {user.username} ({user.email})
                </li>
              )
            )}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Sample;
