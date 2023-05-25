import React, { useEffect} from "react";

import styles from "./User.module.scss";

import Title from "../../components/Title";
import CardList from "../../components/CardList";

import {useDispatch, useSelector} from "react-redux";
import {getAllComm, getAllPosts, PostSelectors} from "../../redux/reducers/postSlice";
import EmptyState from "../../components/EmptyState";
import Card from "../../components/Card";


const User = () => {
  const userInfo = useSelector(PostSelectors.getAuth);

  return userInfo ? (
    <div className={styles.container}>
      <Title title={userInfo.auth_name} className={styles.title} />
      <img src={userInfo.auth_img} alt={userInfo.auth_name} />
        <Title title="User posts" />
        <Card card={userInfo} />
    </div>
  ) : <EmptyState />;
};

export default User;
