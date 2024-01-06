import Image from "next/image"
export const AvatorPresentation = (props: any) => {
    return (
        <Image
            src="/images/profile.jpg"
            alt="Profile image"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full"
        />
    )
}
