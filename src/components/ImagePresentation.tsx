interface IImagePresentationProps {
    name: string;
    src: string;
}

export const ImagePresentation = ({name, src}: IImagePresentationProps) => {

    return (
        <img style={{width: '150px', height: 'auto'}} src={src} alt={name} onError={({currentTarget}) => {currentTarget.src = '../public/placeholder-image.jpg'}}/>
    )
    
}