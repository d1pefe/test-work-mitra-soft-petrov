import React, {useState} from "react";

import styles from "./Header.module.scss";

import {
    BurgerIcon,
} from "../../../assets/icons";
import {Dropdown, MenuProps, Space} from "antd";
import {useNavigate} from "react-router-dom";
import {RoutesList} from "../../Router";

const Header = () => {
    const navigate = useNavigate();

    const items: MenuProps['items'] = [
        {
            label: <div onClick={() => {navigate(RoutesList.Main)}}>Home</div>,
            key: '0',
        },
        {
            label: <div onClick={() => {navigate(RoutesList.About)}}>About me</div>,
            key: '1',
        },
    ];

    return (
        <>
            <div className={styles.header}>
                <div className={styles.headerFlex}>
                    <Dropdown menu={{ items }} trigger={['click']}>
                        <a onClick={(e) => e.preventDefault()} className={styles.burgerIcon}>
                            <Space>
                                <BurgerIcon/>
                            </Space>
                        </a>
                    </Dropdown>
                    </div>
                </div>
                <hr/>
        </>
    );
};

export default Header;