import "../../css/Home/ModeSwitch.css"
import useDarkMode from "use-dark-mode";
import React from "react"

const ModeSwitch = () => {

    const darkMode = useDarkMode(false);

    return (
        (darkMode.value) ?
            (
                <button onClick={(darkMode.value) ? (darkMode.disable) : (darkMode.enable)}>
                    <ion-icon name="moon"/>Dark Mode
                </button>
            ) :
            (
                <button onClick={(darkMode.value) ? (darkMode.disable) : (darkMode.enable)}>
                    <ion-icon name="sunny"/>Light Mode
                </button>
            )
    )
}
export default ModeSwitch