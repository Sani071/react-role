import React, { useState, useEffect } from "react";
import "./styless.css";
import ListItem from "./listItem";
import { useDispatch, useSelector } from "react-redux";
import { addTag } from "../../../../../../store/actions/createPostAction";


const useKeyPress = function (targetKey) {
    const [keyPressed, setKeyPressed] = useState(false);

    function downHandler({ key }) {
        if (key === targetKey) {
            setKeyPressed(true);
        }
    }

    const upHandler = ({ key }) => {
        if (key === targetKey) {
            setKeyPressed(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);

        return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        };
    });

    return keyPressed;
};

const Tagbox = ({ searchKeyword, setFriend, initItems, setTemp }) => {
    const tagOptions = useSelector(state => state.createPostData.tagOptions);
    const downPress = useKeyPress("ArrowDown");
    const upPress = useKeyPress("ArrowUp");
    const enterPress = useKeyPress("Enter");
    const [cursor, setCursor] = useState(0);
    const [hovered, setHovered] = useState(undefined);
    const dispatch = useDispatch()
    const setSelected = (itm) => {
        if (itm) {
            dispatch(addTag({ id: itm.id }))
            // setFriend(itm);
        }
    }

    useEffect(() => {
        if (initItems.length && downPress) {
            setCursor(prevState =>
                prevState < initItems.length - 1 ? prevState + 1 : prevState
            );
        }
    }, [downPress]);

    useEffect(() => {
        if (initItems.length && upPress) {
            setCursor(prevState => (prevState > 0 ? prevState - 1 : prevState));
        }
    }, [upPress]);

    useEffect(() => {
        if (initItems.length && enterPress) {
            setSelected(initItems[cursor]);
        }
    }, [cursor, enterPress]);

    useEffect(() => {
        if (initItems.length && hovered) {
            setCursor(initItems.indexOf(hovered));
        }
    }, [hovered]);

    useEffect(() => {
        if (initItems.length) {
            if (initItems[cursor]) {
                setTemp(initItems[cursor]);
            }
        }
    }, [cursor, enterPress]);

    // console.log(initItems[cursor])
    console.log(searchKeyword);
    return (
        <div className="stb-tagbox-list-conatiner">
            { !searchKeyword ? tagOptions.filter(itm => {
                return !itm.isSelected && itm.isSuggested

            }).map((itmm, i) => {
                return <ListItem
                    key={ itmm.id }
                    active={ i === cursor }
                    item={ itmm }
                    setSelected={ setSelected }
                    setHovered={ setHovered }
                />
            }) : tagOptions.filter(itm => {
                return !itm.isSelected
            }).map((itmm, i) => {
                return <ListItem
                    key={ itmm.id }
                    active={ i === cursor }
                    item={ itmm }
                    setSelected={ setSelected }
                    setHovered={ setHovered }
                />
            }) }
        </div>
    );
};

export default Tagbox