import React, {FC, useState} from "react";

import styles from "./Card.module.scss";
import {CardsType} from "../../../../paralect-test/src/utils/@globalTypes";
import {Button, Modal} from "antd";
import classNames from "classnames";
import {useSelector} from "react-redux";
import {getAllComm, PostSelectors} from "../../redux/reducers/postSlice";

const Card: FC<CardsType> = ({card}) => {
    const colors = ["#D7E4FD", "#CAEFF0", "#FEE9E2", "#F4EEFD"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const commList = useSelector(PostSelectors.getAllComm);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCommOpen, setIsCommOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onCardClick = () => {
        showModal()
    };

    const onShowCommClick = () => {
        setIsCommOpen(!isCommOpen)
    };


    return (
        <div className={styles.container}>
            <div style={{backgroundColor: randomColor}}>
                <div className={styles.img} onClick={onCardClick}>
                    <img className={styles.card_img} src={card.img} alt={card.name}/>
                </div>
            </div>
            <div className={styles.title} onClick={onCardClick}>
                {card.name}
            </div>
            <div className={styles.author}>{card.parag}</div>
            <div className={styles.author_flex}>
                <div className={styles.auth_name}>{card.auth_name}</div>
                <img src={card.auth_img} alt={card.name} className={styles.auth_img}/>
            </div>
            <Modal title={card.name} open={isModalOpen} onCancel={handleCancel}  footer={[]}>
                <div className={styles.modal_img}><img className={styles.card_img} src={card.img} alt={card.name}/></div>
                <div className={styles.title}>{card.name}</div>
                <div className={styles.author}>{card.parag}</div>
                <Button onClick={onShowCommClick} type="primary">Show comments</Button>
                <div className={classNames(styles.comm, {
                    [styles.showd_comm] : isCommOpen,
                })}>
                    <div>
                        {commList.map((data: any) => {
                            return (<div>
                                <div className={styles.author}>{data.username}</div>
                                <div>{data.parag}</div>
                            </div>)
                        })}
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Card;