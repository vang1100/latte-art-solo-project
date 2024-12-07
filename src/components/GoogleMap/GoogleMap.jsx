import { APIProvider, Map, Marker, InfoWindow} from '@vis.gl/react-google-maps';
import { useState, React } from 'react';
import './GoogleMap.css'
import markers from '../../../server/modules/marker.data';

//import {REACT_APP_GOOGLE_MAPS_API_KEY} from '../../../.env';



function GoogleMap(){

  //const googleApi = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

//  console.log('test googleApi', REACT_APP_GOOGLE_MAPS_API_KEY);
 

        const [selectedMarker, setSelectedMarker] = useState(null);

        

    return (
        <>
        
            <APIProvider apiKey={'AIzaSyDgopZ8mN53DI30W1dnvoGV0-4SOUtl1XY'}>

                {/* //tried to use process.env but it didn't work. using api key for now */}
     
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