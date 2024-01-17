import Image from "next/image"
interface AvatorProps {
    picture: string;
}
export const AvatorPresentation: React.FC<AvatorProps> = (picture) => {
    console.log(picture)
    return (
        <Image
            src={picture.picture}
            alt="Profile image"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full"
        />
    )
}
