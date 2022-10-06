import {ReactComponent as profile} from './../../../public/imgs/icones/profile.svg'


const icons = {
        profile
}

export function ProfileIcon ({name, ...props}){
        const Element = icons[name]
        return (
                <div>
                        <Element {...props} />
                </div>
        )
}