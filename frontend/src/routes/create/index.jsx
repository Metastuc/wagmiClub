import { CreateNavUI } from '../../views';
import { Toggle } from '../../hooks';
import './index.scss';

import { useState } from 'react';
import { Helmet } from 'react-helmet';


const Create = () => {

    const [tab, setTab] = useState("badge");
    // const { status, toggleStatus } = Toggle();


    function Badge() {
        return (
            <section className='badge-tab-container'>
                <form action="">
                    <div className="badge-image">
                        <input type="file" />
                    </div>

                    <div className='title'>
                        <label htmlFor="title">badge title</label>
                        <input type="text" />
                    </div>

                    <div className='description'>
                        <label htmlFor="description">badge description</label>
                        <textarea name=""></textarea>
                    </div>

                    <div className="receiver">
                        <label htmlFor="receiver">receivers wallet address</label>
                        <input type="text" />
                    </div>

                    <div className="timestamp">

                    </div>
                </form>
            </section>
        );
    }

    function Medal() {
        return (
            <section className='medal-tab-container'>

            </section>
        );
    }

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