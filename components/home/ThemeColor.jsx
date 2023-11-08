import React from 'react'

const ThemeColor = () => {
    return (
        <div
            className="offcanvas offcanvas-bottom m-3 rounded"
            tabIndex={-1}
            id="offcanvasBottom"
        >
            <div className="offcanvas-body small">
                <ul className="theme-color-settings">
                    <li>
                        <input
                            className="filled-in"
                            id="primary_color_10"
                            name="theme_color"
                            type="radio"
                            defaultValue="color-teal"
                        />
                        <label htmlFor="primary_color_10" />
                        <span>Default</span>
                    </li>
                    <li>
                        <input
                            className="filled-in"
                            id="primary_color_2"
                            name="theme_color"
                            type="radio"
                            defaultValue="color-green"
                        />
                        <label htmlFor="primary_color_2" />
                        <span>Green</span>
                    </li>
                    <li>
                        <input
                            className="filled-in"
                            id="primary_color_3"
                            name="theme_color"
                            type="radio"
                            defaultValue="color-blue"
                        />
                        <label htmlFor="primary_color_3" />
                        <span>Blue</span>
                    </li>
                    <li>
                        <input
                            className="filled-in"
                            id="primary_color_4"
                            name="theme_color"
                            type="radio"
                            defaultValue="color-pink"
                        />
                        <label htmlFor="primary_color_4" />
                        <span>Pink</span>
                    </li>
                    <li>
                        <input
                            className="filled-in"
                            id="primary_color_5"
                            name="theme_color"
                            type="radio"
                            defaultValue="color-yellow"
                        />
                        <label htmlFor="primary_color_5" />
                        <span>Yellow</span>
                    </li>
                    <li>
                        <input
                            className="filled-in"
                            id="primary_color_6"
                            name="theme_color"
                            type="radio"
                            defaultValue="color-orange"
                        />
                        <label htmlFor="primary_color_6" />
                        <span>Orange</span>
                    </li>
                    <li>
                        <input
                            className="filled-in"
                            id="primary_color_7"
                            name="theme_color"
                            type="radio"
                            defaultValue="color-purple"
                        />
                        <label htmlFor="primary_color_7" />
                        <span>Purple</span>
                    </li>
                    <li>
                        <input
                            className="filled-in"
                            id="primary_color_1"
                            name="theme_color"
                            type="radio"
                            defaultValue="color-red"
                        />
                        <label htmlFor="primary_color_1" />
                        <span>Red</span>
                    </li>
                    <li>
                        <input
                            className="filled-in"
                            id="primary_color_9"
                            name="theme_color"
                            type="radio"
                            defaultValue="color-lightblue"
                        />
                        <label htmlFor="primary_color_9" />
                        <span>Lightblue</span>
                    </li>
                    <li>
                        <input
                            className="filled-in"
                            id="primary_color_11"
                            name="theme_color"
                            type="radio"
                            defaultValue="color-lime"
                        />
                        <label htmlFor="primary_color_11" />
                        <span>Lime</span>
                    </li>
                    <li>
                        <input
                            className="filled-in"
                            id="primary_color_12"
                            name="theme_color"
                            type="radio"
                            defaultValue="color-deeporange"
                        />
                        <label htmlFor="primary_color_12" />
                        <span>Deeporange</span>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default ThemeColor