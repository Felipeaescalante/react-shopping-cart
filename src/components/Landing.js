import React from 'react';
import {Link} from "react-router-dom"

export default function Landing() {
        return (
            <div className="landing">
                <div>
                <div className="poster">
                    <div className="welcome">
                        <h1>WELCOME</h1>
                        <h2>Outfit Ideas</h2>
                <Link to={'/home'}>
                    <button className="home" type="submit">GO</button>
                </Link>
                        <p>"Fashion is part of the daily air and it changes all the time, with all the events. 
                            You can even see the approaching of a revolution in clothes. 
                            You can see and feel everything in clothes."
                            - Diana Vreeland
                        </p>
                    </div>
                </div>
                </div>

                
            </div>
        );
    }


