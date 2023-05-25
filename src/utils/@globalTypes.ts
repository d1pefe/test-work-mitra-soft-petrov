import {KeyboardEvent, ReactNode} from "react";

export type SinglePageTypes = {
    title: string;
    subtitle: string;
    authors: string;
    publisher: string;
    isbn10: string;
    isbn13: string;
    pages: string;
    year: string;
    rating: number;
    desc: string;
    price: string;
    image: string;
    url: string;
    pdf: object;
};

export type FavoriteCardTypes = {
    data: SinglePageTypes;
    count?: number;
};

export type CardTypes = {
    name: string,
    parag: string,
    auth_name: string,
    img: string,
    auth_img: string,
    id: string,
}

export type CardsType = {
    card: CardTypes;
}

export type CardListType = {
    cardList: CardTypes[];
}

export type InputProps = {
    title?: string;
    placeholder: string;
    inputType: string;
    disabled?: boolean;
    errText?: string;
    className?: string;
    onChange: (value: string) => void;
    value?: string;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
};

export type ModalProps = {
    isVisible: boolean;
    onClose: () => void;
    children: ReactNode;
};


export type TitleType = {
    title: string;
    className?: string;
}

export type GetSearchedPostsPayload = {
    page: number,
    query: string,
}

export type SetSearchedPostsPayload = {
    cardList: CardTypes[],
    postCounter: number,
}

export type CommTypes = {
    username: string;
    parag: string;
}

