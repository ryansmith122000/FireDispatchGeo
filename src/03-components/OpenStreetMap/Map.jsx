import { MapsComponent, LayersDirective, LayerDirective, Zoom, MarkersDirective, MarkerDirective, Marker, Inject } from '@syncfusion/ej2-react-maps';
import './Map.css';
import PropTypes from 'prop-types';

export function Map({ incidentData }) {
  return (
    <MapsComponent
      className="map-container"
      zoomSettings={{
        enable: true,
        zoomFactor: 4,
        toolbars: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset'],
      }}
      centerPosition={{ latitude: 29.394708, longitude: -94.954653 }}>
      <Inject services={[Marker, Zoom]} />
      <LayersDirective>
        <LayerDirective urlTemplate="https://tile.openstreetmap.org/level/tileX/tileY.png">
          <MarkersDirective>
            {incidentData.map((incident, index) => (
              <MarkerDirective
                key={index}
                visible={true}
                height={25}
                width={15}
                dataSource={[
                  {
                    latitude: incident.address.latitude,
                    longitude: incident.address.longitude,
                    name: incident.address.city,
                  },
                ]}></MarkerDirective>
            ))}
          </MarkersDirective>
        </LayerDirective>
      </LayersDirective>
    </MapsComponent>
  );
}

Map.propTypes = {
  incidentData: PropTypes.arrayOf(
    PropTypes.shape({
      address: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        city: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};
