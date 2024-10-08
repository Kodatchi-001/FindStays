import { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Section_1 from "../../Components/Home/Section-1";
import Section_2 from "../../Components/Home/Section-2";
import Section_3 from "../../Components/Home/Section-3";
import Section_4 from "../../Components/Home/Section-4";

export default function HomePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return <>
        <Section_1 />
        <Section_2 />
        <Section_3 />
        <Section_4 />
        <Footer background={'black'} background_2={'white'}/>
    </>
}