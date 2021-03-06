import Image from "next/image";
import {ThumbUpIcon} from '@heroicons/react/outline'
import {forwardRef} from "react"

const Thumbnail=forwardRef(({result},ref) => {
    const BASE_URL="https://image.tmdb.org/t/p/original/"
    return (
        <div ref={ref} className="group cursor-pointer transition w-full  md:p-2 md:m-2 ">
            <Image className="duration-300 ease-in transform hover:scale-105 hover:z-50"
            layout="responsive"
            src={`${BASE_URL}${result.backdrop_path || result.poster_path}`||
            `${BASE_URL}${result.poster_path}`
            }height={1080}
            width={1920}
            placeholder="blur"
            />
            <div className="p-2">
                <p className="truncate mx-w-md">{result.overview}</p>
                <h2 className="mt-1 text-2xl text-white transition duration-100 ease-in-out group-hover:font-bold">{result.title}</h2>
                <p className="flex items-center {/*md:opacity-0 group-hover:opacity-100*/}">
                    {result.media_type && `${result.media_type} •`}{""}
                    {result.release_date || result.first_air_date}•{""}
                    <ThumbUpIcon className="h-5 mx-2"/>{result.vote_count  }
                    <p className="ml-1">  Rating {result.vote_average}</p>
                </p>
            </div>
        </div>
    )
})

export default Thumbnail
