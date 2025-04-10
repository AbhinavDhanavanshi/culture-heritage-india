'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';

const geoUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json';

export default function IndiaMap() {
  const router = useRouter();
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    // Ensures component only renders on client side
    setMapReady(true);
  }, []);

  if (!mapReady) return null;

  return (
    <div className="w-full flex justify-center items-center mt-10 px-4">
      <ComposableMap
        projection="geoMercator"
        width={600}
        height={700}
        style={{ width: '100%', height: 'auto' }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }: any) =>
            geographies.map((geo: any) => {
              const stateName = geo.properties.NAME_1
                ?.toLowerCase()
                .replace(/\s+/g, '-');

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => router.push(`/states/${stateName}`)}
                  style={{
                    default: {
                      fill: '#334155',
                      stroke: '#94a3b8',
                      outline: 'none',
                    },
                    hover: {
                      fill: '#38bdf8',
                      cursor: 'pointer',
                    },
                    pressed: {
                      fill: '#0ea5e9',
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
