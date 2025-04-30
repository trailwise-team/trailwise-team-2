'use server';

import { supabase } from './supabaseclient';
import { Tables } from '@/supabase';


export default async function ParkPage({ params }: { params: { parkId: string } }) {
    const { parkId } = await params;
    console.log(parkId)

    const { data, error } = await supabase
        .from('PARK')
        .select('*')
        .eq('park', parkId)
        .single();

        console.log({data, error});


    return (
        <div style={{ position: 'relative', width: '1550px', height: '300px' }}>
            <img
                src="https://designshack.net/wp-content/uploads/placehold.jpg"
                alt="Background"
                style={{
                    position: 'absolute',
                    top: '20px',
                    left: '10px',
                    width: '1500px',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0,
                    borderRadius: '15px',
                }}
            />
            <div style={{ backgroundColor: 'white', minHeight: '100%' }}>
                <div style={{ position: 'relative', zIndex: 1, padding: '20px', color: 'black' }}>
                    <button style={circleButtonStyle} aria-label="Go back">
                        ←
                    </button>
                    <button
                        style={circleButtonStyle}
                        aria-label={false ? 'Remove from bookmarks' : 'Add to bookmarks'}
                    >
                        {false ? '★' : '☆'}
                    </button>

                    <button style={circleButtonStyle} aria-label="Save park">
                        ✅
                    </button>

                    <button style={circleButtonStyle} aria-label="Share park">
                        📤
                    </button>

                    <br />
                    <br />
                    <br />
                    <br />
                    {data ? (
                        <>
                            <h1 className="text-4xl text-black">Park: {data.name}</h1>
                            <h2>Location</h2>
                            <div><strong>Latitude:</strong> {data.latitude}</div>
                            <div><strong>Longitude:</strong> {data.longitude}</div>

                            <br />

                            <strong>Description</strong>
                            <div>{data.description}</div>

                            <br />

                            <ol>
                                {data.rules ? (
                                    Object.entries(data.rules).map(([key, value], index) => (
                                        <li key={index}><strong>{key.replace(/_/g, ' ')}:</strong> {String(value)}</li>
                                    ))
                                ) : (
                                    <>
                                        <li>Rule 1</li>
                                        <li>Rule 2</li>
                                    </>
                                )}
                            </ol>

                            <br />
                            <strong>Website:</strong>
                            <div>
                                <a
                                    href={data.links_url ?? ""}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit park website"
                                >
                                    {data.links_url}
                                </a>
                            </div>
                        </>
                    ) : (
                        <p>Loading park</p>
                    )}
                </div>
            </div>

            <div style={{ width: '1550px', height: '300px', backgroundColor: 'white' }}></div>
        </div>
    );
}

const circleButtonStyle = {
    width: '50px',
    height: '50px',
    backgroundColor: 'black',
    borderRadius: '50%',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '10px',
};
