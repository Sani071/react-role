import React from 'react';

export default function BackButton({ clickHandler }) {
    return (
        <>
            <button onClick={ clickHandler } className="stb-backbtn">
                <span><i class="fa fa-angle-left" aria-hidden="true"></i></span>
                <span>Back</span>
            </button>
        </>
    );
}
