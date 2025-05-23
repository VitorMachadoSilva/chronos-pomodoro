import { TimerIcon } from 'lucide-react'
import { Heading } from './components/Heading'

import './styles/global.css'
import './styles/theme.css'

export function App () {
    return (
    <>
        <Heading>
            Olá mundo
            <button>
                <TimerIcon/>
            </button>        
        </Heading>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Vel itaque pariatur nobis eligendi! Ipsam id doloribus nisi 
            fuga soluta. Reprehenderit similique, nostrum dolor nobis 
            non voluptas sed atque reiciendis quidem!
        </p>
    </>    

    )
}

