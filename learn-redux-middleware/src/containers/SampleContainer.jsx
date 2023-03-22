import React, { useEffect } from "react";
import { connect } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample";

const SampleContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers,
}) => {
  useEffect(() => {
    const fn = async () => {
      //useEffect에 파라미터로 넣는 함수는 async로 할 수 없기 떄문에
      //그 내부에서 async 함수를 선언하고 호출해 줍니다.
      try {
        await getPost(1);
        await getUsers(1);
      } catch (e) {
        console.log(e);
      }
    };
    fn();
    // getPost(1);
    // getUsers(1);
  }, [getPost, getUsers]);

  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default connect(
  ({ sample, loading }) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: loading["sample/GET_POST"],
    loadingUsers: loading["sample/GET_USERS"],
    // loadingPost: sample.loading.GET_POST,
    // loadingUsers: sample.loading.GET_USERS,
  }),
  { getPost, getUsers }
)(SampleContainer);
