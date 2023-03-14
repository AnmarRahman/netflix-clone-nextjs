import Image from "next/image"
import { Movie } from "../typings"
import { useEffect, useState } from "react"

interface Props {
    netflixOriginals: Movie[]
}

function Banner({ netflixOriginals }: Props) {
    const [movie, setMovie] = useState<Movie | null>(null)

    useEffect(() => {
        setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
    }, [netflixOriginals])

    return (
        <div>
            <div>
                {/* <Image src={}/> */}
            </div>
        </div>
    )
}

export default Banner
