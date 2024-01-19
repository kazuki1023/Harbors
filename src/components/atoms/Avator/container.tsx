import { AvatorPresentation } from "./presentation";
interface AvatorProps {
    picture: string;
}
export const AvatorContainer: React.FC<AvatorProps> = ({picture}) => {
    console.log(picture)
    return (
        <AvatorPresentation picture={picture}/>
    )
}
