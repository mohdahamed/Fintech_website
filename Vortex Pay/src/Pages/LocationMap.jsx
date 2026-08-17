import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Navigation, Building2 } from 'lucide-react';

// Fix for default markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
});

// Custom icons
const userIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const hqIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const LocationMap = () => {
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Headquarters in Lucknow, India
  const headquarters = {
    lat: 26.8467,
    lng: 80.9462,
    name: 'VORTEXPAY Headquarters',
    address: 'Lucknow, Uttar Pradesh, India',
    phone: '+91 (522) 123-4567'
  };

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || mapInstance.current) return;

    // Create map instance
    mapInstance.current = L.map(mapContainer.current).setView([20, 78], 5);

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(mapInstance.current);

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  // Add user location and HQ markers
  useEffect(() => {
    if (!mapInstance.current || !userLocation) return;

    // Clear existing markers
    mapInstance.current.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        layer.remove();
      }
      if (layer instanceof L.Circle) {
        layer.remove();
      }
    });

    // Add user marker
    L.marker([userLocation.lat, userLocation.lng], { icon: userIcon })
      .addTo(mapInstance.current)
      .bindPopup(`
        <div class="text-slate-900">
          <div class="flex items-center gap-2 mb-2 font-bold">
            <span>📍 Your Live Location</span>
          </div>
          <p class="text-xs">Latitude: ${userLocation.lat.toFixed(4)}</p>
          <p class="text-xs">Longitude: ${userLocation.lng.toFixed(4)}</p>
          ${userLocation.accuracy ? `<p class="text-xs">Accuracy: ±${userLocation.accuracy.toFixed(0)}m</p>` : ''}
          ${userLocation.timestamp ? `<p class="text-xs mt-1">Updated: ${userLocation.timestamp}</p>` : ''}
        </div>
      `);

    // Add accuracy circle
    if (userLocation.accuracy) {
      L.circle([userLocation.lat, userLocation.lng], {
        color: '#0ea5e9',
        fill: true,
        fillColor: '#0ea5e9',
        fillOpacity: 0.1,
        weight: 2,
        radius: userLocation.accuracy
      }).addTo(mapInstance.current);
    }

    // Add HQ marker
    L.marker([headquarters.lat, headquarters.lng], { icon: hqIcon })
      .addTo(mapInstance.current)
      .bindPopup(`
        <div class="text-slate-900">
          <div class="flex items-center gap-2 mb-2 font-bold">
            <span>🏢 ${headquarters.name}</span>
          </div>
          <p class="text-xs font-semibold mb-1">${headquarters.address}</p>
          <p class="text-xs">📞 ${headquarters.phone}</p>
          <p class="text-xs mt-1">Latitude: ${headquarters.lat.toFixed(4)}</p>
          <p class="text-xs">Longitude: ${headquarters.lng.toFixed(4)}</p>
        </div>
      `);

    // Fit map to show both markers
    const centerLat = (userLocation.lat + headquarters.lat) / 2;
    const centerLng = (userLocation.lng + headquarters.lng) / 2;
    mapInstance.current.setView([centerLat, centerLng], 6);
  }, [userLocation]);

  // Get user location
  useEffect(() => {
    if ('geolocation' in navigator) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            accuracy: position.coords.accuracy,
            timestamp: new Date(position.timestamp).toLocaleTimeString()
          });
          setLoading(false);
          setError(null);
        },
        (err) => {
          console.warn('Geolocation error:', err);
          // Fallback to New Delhi if location not available
          setUserLocation({
            lat: 28.7041,
            lng: 77.1025,
            accuracy: null,
            name: 'Default Location (New Delhi)'
          });
          setLoading(false);
          setError(err.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );

      return () => navigator.geolocation.clearWatch(watchId);
    } else {
      setError('Geolocation not supported');
      setUserLocation({
        lat: 28.7041,
        lng: 77.1025,
        accuracy: null
      });
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="w-full h-96 sm:h-[500px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center border border-emerald-500/20">
        <div className="text-center">
          <div className="animate-spin mb-4">
            <MapPin className="text-emerald-400 mx-auto" size={32} />
          </div>
          <p className="text-slate-300 text-sm sm:text-base">Getting your location...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Map Container */}
      <div className="relative rounded-2xl overflow-hidden border border-emerald-500/20 h-96 sm:h-[500px] shadow-xl">
        <div ref={mapContainer} style={{ height: '100%', width: '100%' }} className="rounded-2xl" />

        {/* Info Overlay */}
        <div className="absolute top-4 left-4 right-4 sm:right-auto bg-gradient-to-r from-slate-900/90 to-slate-900/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-emerald-500/20 z-10 max-w-xs">
          <div className="space-y-2 text-xs sm:text-sm">
            <div className="flex items-start gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 mt-1 flex-shrink-0"></div>
              <div>
                <p className="text-emerald-400 font-bold">Your Location</p>
                <p className="text-slate-300">{userLocation?.name || 'Live Location'}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 mt-1 flex-shrink-0"></div>
              <div>
                <p className="text-emerald-400 font-bold">Our Headquarters</p>
                <p className="text-slate-300">{headquarters.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Loading/Error Badge */}
        {error && (
          <div className="absolute bottom-4 right-4 bg-yellow-500/90 text-slate-900 px-3 py-2 rounded-lg text-xs font-semibold z-10">
            📍 Using default location
          </div>
        )}
      </div>

      {/* Location Details Below Map */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {/* Your Location Card */}
        <div className="bg-white/5 border border-emerald-500/20 rounded-lg p-4 hover:border-emerald-500/50 transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Navigation className="text-blue-400" size={20} />
            </div>
            <h3 className="font-bold text-white">Your Live Location</h3>
          </div>
          <div className="space-y-1 text-xs sm:text-sm text-slate-300">
            {userLocation && (
              <>
                <p><span className="text-emerald-400 font-semibold">Latitude:</span> {userLocation.lat.toFixed(6)}°</p>
                <p><span className="text-emerald-400 font-semibold">Longitude:</span> {userLocation.lng.toFixed(6)}°</p>
                {userLocation.accuracy && (
                  <p><span className="text-emerald-400 font-semibold">Accuracy:</span> ±{userLocation.accuracy.toFixed(0)} meters</p>
                )}
                {userLocation.timestamp && (
                  <p className="text-slate-400 text-xs mt-2">Last Update: {userLocation.timestamp}</p>
                )}
              </>
            )}
          </div>
        </div>

        {/* Headquarters Card */}
        <div className="bg-white/5 border border-emerald-500/20 rounded-lg p-4 hover:border-emerald-500/50 transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
              <Building2 className="text-red-400" size={20} />
            </div>
            <h3 className="font-bold text-white">VORTEXPAY HQ</h3>
          </div>
          <div className="space-y-1 text-xs sm:text-sm text-slate-300">
            <p><span className="text-emerald-400 font-semibold">Address:</span></p>
            <p className="ml-4">{headquarters.address}</p>
            <p className="mt-2"><span className="text-emerald-400 font-semibold">Phone:</span> {headquarters.phone}</p>
            <p><span className="text-emerald-400 font-semibold">Latitude:</span> {headquarters.lat.toFixed(6)}°</p>
            <p><span className="text-emerald-400 font-semibold">Longitude:</span> {headquarters.lng.toFixed(6)}°</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
