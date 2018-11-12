
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5uYS1wIiwiYSI6ImNqb2V1Y29vYjIxMm0zcGxlZ2EyOGR6bzYifQ.dxEq0anALJ7E_Z7RoHH5XQ';

// This adds the map to the page
var map = new mapboxgl.Map({
  // container id specified in the HTML
  container: 'map',
  // style URL
  style: 'mapbox://styles/mapbox/light-v9',
  // initial position in [lon, lat] format
  center: [-77.034084, 38.909671],
  // initial zoom
  zoom: 14
});
