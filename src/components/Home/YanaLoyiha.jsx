import React from "react";
import Yana from "./Yana.json";

const YanaLoyiha = ({ sinf }) => {
    return (
        <>
            <div className={sinf}>
                {Yana.map((item) => {
                    return (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                opacity={item.opacity}
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d={item.path1}
                                fill={item.fill}
                            ></path>
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d={item.path2}
                                fill={item.fill}
                            ></path>
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d={item.path3}
                                fill={item.fill}
                            ></path>
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d={item.path4}
                                fill={item.fill}
                            ></path>
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d={item.path5}
                                fill={item.fill}
                            ></path>
                        </svg>
                    );
                })}
            </div>

        </>
    );
};

export default YanaLoyiha;
