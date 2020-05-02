import React, { useState, useEffect } from "react";
import "./styless.css";
import ListItem from "./feelingListItem";
import FeelingListItem from "./feelingListItem";

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


const FeelingBox = ({ feeling, setFeeling, initItems, setTemp, clickHandler }) => {
    const downPress = useKeyPress("ArrowDown");
    const upPress = useKeyPress("ArrowUp");
    const enterPress = useKeyPress("Enter");
    const [cursor, setCursor] = useState(0);
    const [hovered, setHovered] = useState(undefined);

    const setSelected = (e, itm) => {
        // console.log(e);
        if (e) {
            setFeeling(e);
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

    // useEffect(() => {
    //     if (initItems.length) {
    //         if (initItems[cursor]) {
    //             setTemp(initItems[cursor]);
    //         }
    //     }
    // }, [cursor, enterPress]);

    // console.log(initItems[cursor])
    return (
        <div className="stb-feelingbox-list-conatiner">
            { initItems.map((itmm, i) => {
                return <FeelingListItem
                    feeling={ feeling }
                    key={ itmm.id }
                    active={ i === cursor }
                    item={ itmm }
                    setSelected={ setSelected }
                    setHovered={ setHovered }
                    setFeeling={ setFeeling }
                />
            }) }
            <button onClick={ () => clickHandler() } disabled={ !feeling } className="stb-f-doneBtn">
                <span>Done</span>
            </button>
        </div>
    );
};

export default FeelingBox