import { useContext, useState } from "react";
import Header from "../Header/Header";
import { Listeinfo } from "../../utils/Liste-info";
import { Link } from 'react-router-dom';

export default function Section_1() {
    const [location, setlocation] = useState('')
    const [person, setperson] = useState(0)
    const [Date_in, setdate_in] = useState("2024-03-09");
    const [Date_out, setdate_out] = useState("2024-05-12");
    const { liste, setliste } = useContext(Listeinfo)
    /*-------------------------------------------------*/
    const Handelchangelocation = e => setlocation(e.target.value.toLowerCase());
    const Handelchangepreson = e => setperson(e.target.value);
    const Handelchangedatein = e => setdate_in(e.target.value);
    const Handelchangedateout = e => setdate_out(e.target.value);
    /*-------------------------------------------------*/
    const SendInfo = () => {
        if (location.trim('') == "" || person <= 0) {
            return
        }
        const Hotel = { Location: location, Person: person, DateIn: Date_in, DateOut: Date_out }
        setliste([...liste, Hotel]);
        setlocation('');
        setperson(0)
    }
    return <>
        <section className="w-full lg:h-screen HomePage-Background" id="HomePage">
            <div className="w-full h-full flex flex-col justify-between bg-black-blur lg:px-6 xl:px-20">
                <Header color={'white'} />
                <div className="w-full h-[15vh] lg:hidden"></div>
                <div className="w-full h-[85%] lg:h-[80%] flex flex-col justify-between lg:mt-auto">
                    <div className="w-full h-[45%] lg:h-[70%] flex justify-between items-center flex-wrap px-2 lg:px-0 gap-5 lg:gap-0">
                        <div className="w-full lg:w-4/6 h-2/3 lg:h-full flex flex-col justify-center items-center lg:items-start gap-3 sm:gap-5 lg:gap-6 text-white">
                            <h1 className="w-full sm:w-5/6 lg:w-full xl:w-[80%] text-5xl sm:text-7xl xl:text-8xl text-center lg:text-start">Stay Quietly, With No Worries</h1>
                            <p className="lg:5/6 xl:w-[75%] text-[1.1rem] hidden lg:flex">
                                Welcome to our hotel booking platform, where your travel experience
                                becomes easier and more enjoyable. With our platform, you can discover
                                the perfect accommodation for your stay worldwide.
                            </p>
                            <p className="sm:w-4/6 text-lg lg:hidden text-center lg:text-start">
                                Welcome to our hotel booking platform, where your
                                travel experience becomes easier and more enjoyable.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/6 h-1/3 lg:h-full flex lg:flex-col justify-center items-end gap-5 lg:gap-8 text-white">
                            <div className="w-1/3 lg:w-4/6 text-center lg:text-start">
                                <div className="w-full flex flex-col justify-center gap-2">
                                    <h2 className="text-3xl lg:text-5xl">12k+</h2>
                                    <h2>Satisfied Visitors</h2>
                                </div>
                            </div>
                            <div className="w-1/3 lg:w-4/6 text-center lg:text-start">
                                <div className="w-full flex flex-col justify-center gap-2">
                                    <h2 className="text-3xl lg:text-5xl">4.5k+</h2>
                                    <h2 className="text-[0.9rem] lg:text-[1rem]">Amazing TourGuide</h2>
                                </div>
                            </div>
                            <div className="w-1/3 lg:w-4/6 text-center lg:text-start">
                                <div className="w-full flex flex-col justify-center gap-2">
                                    <h2 className="text-3xl lg:text-5xl">2k+</h2>
                                    <h2>Special Travel Trip</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[30%] flex justify-center items-center py-5 sm:py-4 px-4 lg:px-0">
                        <div className="w-full sm:w-full md:w-5/6 lg:w-full h-full flex justify-between items-center flex-wrap px-1 lg:px-3 py-3 lg:py-4 rounded-xl gap-2 lg:gap-0 bg-white">
                            <div className="w-full lg:w-5/6 h-[70%] lg:h-full flex justify-between flex-wrap">
                                <div className="w-1/2 lg:w-1/4 h-[45%] lg:h-full flex flex-col justify-between px-2 lg:px-5 gap-1 lg:gap-0">
                                    <div className="w-full h-[30%] lg:h-1/4 flex items-center gap-1">
                                        <i class='bx bx-map text-xl'></i>
                                        <h1 className="h-full flex items-end text-lg lg:text-[1rem]">Location</h1>
                                    </div>
                                    <div className="w-full lg:h-[65%]">
                                        <input type="text" className="w-full h-full px-5 py-4 lg:py-0 rounded-xl text-lg lg:text-xl text-black placeholder:text-black bg-gray focus:outline-none" placeholder="Type Location"
                                            value={location} onChange={Handelchangelocation} />
                                    </div>
                                </div>
                                <div className="w-1/2 lg:w-1/4 h-[45%] lg:h-full flex flex-col justify-between px-2 lg:px-5 gap-1 lg:gap-0">
                                    <div className="w-full h-[30%] lg:h-1/4 flex items-center gap-1">
                                        <i class='bx bx-user text-xl'></i>
                                        <h1 className="h-full flex items-end text-lg lg:text-[1rem]">Person</h1>
                                    </div>
                                    <div className="w-full h-[60%] lg:h-[65%] flex justify-end">
                                        <div className="w-full h-full bg-gray pr-2 lg:pr-5 rounded-xl">
                                            <select className="w-full h-full px-5 py-4 lg:py-0 bg-transparent text-lg lg:text-xl focus:outline-none text-black"
                                                value={person} onChange={Handelchangepreson}>
                                                <option>Person</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/2 lg:w-1/4 h-[45%] lg:h-full flex flex-col justify-between px-2 lg:px-5 mt-2 lg:mt-0 gap-1 lg:gap-0">
                                    <div className="w-full h-[30%] lg:h-1/4 flex items-center gap-1">
                                        <i class='bx bx-calendar text-xl'></i>
                                        <h1 className="h-full flex items-end text-lg lg:text-[1rem]">Check-in</h1>
                                    </div>
                                    <div className="w-full h-[65%]">
                                        <input type="date" className="w-full h-full px-2 lg:px-5 py-4 lg:py-0 pr-2 rounded-xl text-black bg-gray text-lg" value={Date_in} onChange={Handelchangedatein} />
                                    </div>
                                </div>
                                <div className="w-1/2 lg:w-1/4 h-[45%] lg:h-full flex flex-col justify-between px-2 lg:px-5 mt-2 lg:mt-0 gap-1 lg:gap-0">
                                    <div className="w-full h-[30%] lg:h-1/4 flex items-center gap-1">
                                        <i class='bx bx-calendar text-xl'></i>
                                        <h1 className="h-full flex items-end text-lg lg:text-[1rem]">Check-out</h1>
                                    </div>
                                    <div className="w-full h-[65%]">
                                        <input type="date" className="w-full h-full px-2 lg:px-5 py-4 lg:py-0 pr-2 rounded-xl text-black bg-gray text-lg" value={Date_out} onChange={Handelchangedateout} />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/6 h-[30%] lg:h-full flex flex-col justify-center lg:justify-end px-2 lg:px-0">
                                <div className="w-full h-5/6 lg:h-[70%] pt-[0.38rem] flex justify-center">
                                    <Link to="/Search" className="w-full lg:w-[90%] h-full py-4 flex justify-center items-center text-xl bg-black text-white rounded-xl border"
                                        onClick={SendInfo}>Search</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}