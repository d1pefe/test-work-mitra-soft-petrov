import React, { useEffect} from "react";

import styles from "./Main.module.scss";

import Title from "../../components/Title";
import CardList from "../../components/CardList";

import {useDispatch, useSelector} from "react-redux";
import {getAllComm, getAllPosts, PostSelectors} from "../../redux/reducers/postSlice";


const Main = () => {
  const dispatch = useDispatch();

  const postsList = useSelector(PostSelectors.getAllPosts);

  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(getAllComm());
  }, []);

  return (
    <div className={styles.container}>
      <Title title={"NEWS"} className={styles.title} />
      <CardList cardList={postsList} />
    </div>
  );
};

export default Main;
