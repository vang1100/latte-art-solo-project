import { APIProvider, Map, Marker, InfoWindow} from '@vis.gl/react-google-maps';
import { useState, React } from 'react';
import './GoogleMap.css'
//import {REACT_APP_GOOGLE_MAPS_API_KEY} from '../../../.env';



function GoogleMap(){

  //const googleApi = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

//  console.log('test googleApi', REACT_APP_GOOGLE_MAPS_API_KEY);
  
    const markers = [
        {
            position:{lat: 44.95152716625376, lng: -93.08509290488523},
            image:"eggdonut.jpg",
            name:"Eggdonut's Cafe",
            description: "289 5th St E, St Paul, MN 55101"
        },
        
        {
            position: {lat: 44.93331013518692, lng: -93.16571733665351},
            image:"spyhouse.jpg",
            name:"Spyhouse Coffee Roasters",
            description: "420 Snelling Ave S, St Paul, MN 55105"
        },
        
        {
            position: {lat: 44.933053663043836, lng:-93.0841353032228},
            image:"backstory.jpg",
            name: "Backstory Coffee Roasters",
            description: "432 Wabasha St S, St Paul, MN 55107"
        },
        
        {
            position: {lat: 44.96851787468767, lng:-93.07338678131681},
            image:"caydence.jpg",
            name: "Caydence Records & Coffee",
            description: "900 Payne Ave, St Paul, MN 55130"
        },
        
        {
            position: {lat: 44.94784451659447, lng: -93.14976096207641},
            image:"yellowbird.jpg",
            name: "Yellowbird Coffee Bar",
            description: "1168 Selby Ave, St Paul, MN 55104"
        },
        
         {
            position: {lat: 44.935571311797865, lng: -93.16622019265698},
            image:"roots.jpg",
            name: "Roots Roasting",
            description: "1552 St Clair Ave, St Paul, MN 55105"
         },
        
        {
            position: {lat: 44.96072030599185, lng: -93.15686464757776},
            image:"groundswell.jpg",
            name: "Groundswell",
            description: "1340 Thomas Ave W, St Paul, MN 55104"
        }
        
        ];

        const [selectedMarker, setSelectedMarker] = useState(null);

        

    return (
        <>
            <APIProvider apiKey={'AIzaSyDgopZ8mN53DI30W1dnvoGV0-4SOUtl1XY'}>
     
                <div className="align-item" style={{ height: '50vh', width: '100%' }}>
                    
                    <Map
                      defaultCenter={{  lat: 44.953566588994356,lng: -93.08970548193398}}
                      defaultZoom={12}
                      style={{ width: '50%', height: '90%' }}
          >
                      {markers.map((marker, index) => (
            
                          <Marker

                              key={index}
                              position={marker.position}
                              onClick={() => setSelectedMarker(marker)}
                              label={{
                                text: (index + 1).toString(),
                                color: 'white',
                                fontSize: '14px',
                                fontWeight: 'bold'
                
              }}
          
              
            />
          ))}

                      {selectedMarker && (

                        <InfoWindow
                          
                            position={selectedMarker.position}
                            onCloseClick={() => setSelectedMarker(null)}
                        >
                              <div>
                                <img src={selectedMarker.image}/>
                                <h3>{selectedMarker.name}</h3>
                                <p>{selectedMarker.description}</p>
                              </div>

                        </InfoWindow>
            )}
                    </Map>

              </div>

    </APIProvider>
        </>
    )
}

export default GoogleMap;