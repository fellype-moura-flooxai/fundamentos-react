import React from 'react'
import Filho from './Filho'

export default props => {
    const QuerSair =
        lugar => alert(`Liberador para ir a ${lugar}`)
    return (
        <div>
            <Filho Sair={QuerSair} />
        </div>
    )
}