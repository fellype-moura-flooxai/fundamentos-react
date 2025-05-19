import React from "react"

export function filhosComProps(props) {
    return React.Children.map(props.children, Filho => {
        return React.cloneElement(Filho, { ...props })
    })
}