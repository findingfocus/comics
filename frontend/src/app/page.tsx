import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {comicList} from "@/app/comics";
import EmblaCarousel from "./EmblaCarousel";

const OPTIONS = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
    return (
        //https://loremflickr.com/400/400
        <>
            <div className={"flex flex-col items-center justify-center"}>
                <h1 className={"mx-8 text-4xl font-bold text-slate-100 py-4"}>
                    Refresh for random comics!
                </h1>
            </div>
            <div className={""}>
                {/*// 50% on small screens and 33% on larger screens.*/}
                {/*<Carousel className={""}>*/}
                {/*    <CarouselContent>*/}
                {/*        {comicList.map(comic => (*/}
                {/*            <CarouselItem key={comic.id}>*/}
                {/*                <img src={comic.src} alt={`Comic ${comic.id}`}></img>*/}
                {/*            </CarouselItem>*/}
                {/*        ))}*/}
                {/*    </CarouselContent>*/}
                {/*    <CarouselPrevious/>*/}
                {/*    <CarouselNext/>*/}
                {/*</Carousel>*/}
                <EmblaCarousel slides={comicList} options={OPTIONS} />
            </div>

        </>
    )
}