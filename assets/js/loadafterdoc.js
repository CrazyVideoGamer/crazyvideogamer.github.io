if (window.navigator.userAgent.indexOf("Edge") > -1) {
    let division = document.getElementById('division-background');
    division.id = '';
    
    let svg = document.createElement('svg');
    svg.width = '0'
    svg.height = '0'

    let clipPath = document.createElement('clipPath');
    clipPath.id = "myclippath"
    clipPath.clipPathUnits = 'objectBoundingBox'

    let polygon = document.createElement('polygon');
    polygon.points = '1, 0.29, 1, 1, 0, 1, 0, 0.50'

    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://crazyvideogamez.github.io/assets/css/clippath.css'


    let edge = document.getElementById('edge');
    edge.appendChild(link);
    edge.appendChild(svg);

    svg.appendChild(clipPath);
    clipPath.appendChild(polygon);
}