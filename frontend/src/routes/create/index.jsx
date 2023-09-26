import { UploadImage } from '../../assets/icons';
import { CreateNavUI } from '../../views';
// import { formatDate } from '../../hooks';
import './index.scss';

import { useState } from 'react';
import { Helmet } from 'react-helmet';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import { Stars } from '../../components';


const Create = () => {

    const

        [tab, setTab] = useState("badge"),

        Badge = function () {

            const
                [startDate, setStartDate] = useState(new Date()),
                [endDate, setEndDate] = useState(null);


            return (
                <section className='badge-tab-container'>
                    <form action="">
                        <div className="badge-image">
                            <input type="file" id='upload' />
                            <span onClick={() => { document.querySelector("#upload").click(); }}>
                                <UploadImage />
                            </span>
                            <label htmlFor="badge-image">Upload Nft badge image</label>
                        </div>

                        <div className='title'>
                            <label htmlFor="title">Badge title</label>
                            <input type="text" />
                        </div>

                        <div className='description'>
                            <label htmlFor="description">Badge description</label>
                            <textarea name=""></textarea>
                        </div>

                        <div className="receiver">
                            <label htmlFor="receiver">Receivers wallet address</label>
                            <input type="text" placeholder='0x636h821nb' />
                        </div>

                        <div className="timestamp">
                            <label htmlFor="timestamp">Time stamp</label>
                            <div className='timestamp-wrapper'>
                                <article>
                                    <span>start</span>
                                    <div>
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            selectsStart
                                            startDate={startDate}
                                            endDate={endDate}
                                            dateFormat={"EEEE, MMMM d, yyyy"}
                                            placeholderText='Select a Date'
                                        />
                                    </div>
                                </article>

                                <article>
                                    <span>end</span>
                                    <div>
                                        <DatePicker
                                            selected={endDate}
                                            onChange={(date) => setEndDate(date)}
                                            selectsStart
                                            startDate={startDate}
                                            endDate={endDate}
                                            dateFormat={"EEEE, MMMM d, yyyy"}
                                            placeholderText='Select a Date'
                                        />
                                    </div>
                                </article>

                                <div className=''>
                                    <label htmlFor="working">Still working</label>
                                    <input type="checkbox" name="" id="working" />
                                    <div className="working" onClick={() => { document.querySelector("#working").click(); }}></div>
                                </div>
                            </div>

                        </div>

                        <div className="validator">
                            <label htmlFor="validator">Badge Validator's name & position in organisation</label>
                            <input type="text" placeholder='JeheeCTO' />
                        </div>

                        <div className="information">
                            <label htmlFor="information">Additional information</label>
                            <textarea name=""></textarea>
                        </div>

                        <div className="rating">
                            <label htmlFor="rating">Excellence rating</label>
                            <div className="rating-wrapper">
                                <Stars />
                            </div>
                        </div>

                        <div className="submit">
                            <button>mint badge</button>
                        </div>
                    </form>
                </section>
            );
        },

        Medal = function () {
            return (
                <section className='medal-tab-container'>

                </section>
            );
        };

    function renderTab() {
        switch (tab) {
            case "badge":
                return <Badge />;
                break;

            case "medal":
                return <Medal />;
                break;

            default:
                return null;
        }
    }



    return (
        <section className="create">

            <Helmet>
                <title>Claim Profile - WagmiClub</title>
            </Helmet>

            <CreateNavUI />

            <div className="create-wrapper">

                <section className="tab-switcher">
                    <div className={tab === "badge" ? "active" : null}
                        onClick={() => { setTab("badge"); }}
                    >
                        <span>
                            badge
                        </span>
                    </div>

                    <div className={tab === "medal" ? "active" : null}
                        onClick={() => { setTab("medal"); }}
                    >
                        <span>
                            medal
                        </span>
                    </div>
                </section>

                <section className="tab-display">
                    {renderTab()}
                </section>
            </div>
        </section>
    );
};


export default Create;