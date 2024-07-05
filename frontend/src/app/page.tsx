import EmblaCarousel from "./EmblaCarousel";
import {comicList} from "@/app/comics";

export default function Home() {
    return (
        <>
            <div className={"flex flex-col items-center justify-center"}>
                <h1 className={"mx-8 text-4xl font-bold text-slate-100 py-4"}>
                    Refresh for random comics!
                </h1>
            </div>
            <div className={""}>
                <EmblaCarousel slides={comicList}/>
            </div>

        </>
    )
}