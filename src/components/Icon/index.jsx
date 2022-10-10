import { ReactComponent as arrowLeft } from '/src/assets/icones/arrow-left.svg'
import { ReactComponent as arrowRight } from '/src/assets/icones/arrow-right.svg'
import { ReactComponent as back } from '/src/assets/icones/back.svg'
import { ReactComponent as profile } from '/src/assets/icones/profile.svg'

    const icons = {
         arrowLeft,
         arrowRight,
         back,
         profile
    }

export const Icon = ({ name, ...props }) => {
    const Element = icons[name]
    return <Element {...props} />
}