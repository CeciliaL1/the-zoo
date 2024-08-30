interface IImagePresentationProps {
    name: string;
    src: string;
}

export const ImagePresentation = ({name, src}: IImagePresentationProps) => {

    return (
        <img src={src} alt={name} onError={({currentTarget}) => {currentTarget.src = '../public/placeholder-image.jpg'}}/>
    )
    
}