import {ReactComponent as arrowBack} from './../../../public/imgs/icones/back.svg'

const icons = {
        arrowBack
}

export function ArrowIcon ({name, ...props}){
        const Element = icons[name]
        return (
                <div>
                        <Element {...props} />
                </div>
        )
}