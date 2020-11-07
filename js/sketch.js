//Global Variable and collected data are here
var data;
var graph;
let img;
var start;
var end;
var isStart = false;
var isEnd = false;

const scaleFactor = 0.4;
const circleSize = 20;
const circleCursorSize = 36;
const lineWeight = 8;



function preload() {
  data = dataKecamatan;
  img = loadImage("img/bali.png");
  noLoop();
  createElement("h4", "Rute terpendek yang dilalui:").parent("output");
}




function setup() {
  graph = new Graph();
  var canvas = createCanvas(2544 * scaleFactor, 1578 * scaleFactor);
  canvas.parent("sketch-holder");
  updateConnectionDatasets();
}

function updateConnectionDatasets() {
  let cities = data.cities;

  for (var i = 0; i < cities.length; i++) {
    var node = cities[i];
    var name = node.name;
    console.log(name);

    var neighbor = node.connected;

    var cityNode = graph.getNode(name);
    if (cityNode == undefined) {
      cityNode = new Node(name);
      graph.addNode(cityNode);
    }
    for (var j = 0; j < neighbor.length; j++) {
      var neighborName = neighbor[j];
      var neighborNode = graph.getNode(neighborName);
      if (neighborNode == undefined) {
        neighborNode = new Node(neighborName);
        graph.addNode(neighborNode);
      }
      cityNode.addEdge(neighborNode);
    }
  }

  //Add coordinates to each node in graph
  for (var i = 0; i < cities.length; i++) {
    var node = cities[i];
    var name = node.name;
    var x = node.x;
    var y = node.y;
    graph.addCoordinate(name, x, y);
  }
}

function preDraw() {
  // Background Romania Map
  scale(scaleFactor, scaleFactor);
  image(img, 0, 0);
  scale(1, 1);

  // Connecting Edges in Map
  data.cities.forEach((n) => {
    n.connected.forEach((e) => {
      data.cities.forEach((next) => {
        if (next.name === e) {
          stroke(0, 0, 0, 150);
          strokeWeight(lineWeight);
          line(n.x, n.y, next.x, next.y);
        }
      });
    });
  });

  // Node Points
  for (var i = 0; i < data.cities.length; i++) {
    var city = data.cities[i].name;
    var node = graph.graph[city];
    fill(0, 0, 255);
    circle(node.x, node.y, circleSize);
  }

  if (isStart) {
    fill(0, 255, 0);
    circle(start.x, start.y, circleCursorSize);
  }
  if (isEnd) {
    fill(255, 0, 0);
    circle(end.x, end.y, circleCursorSize);
  }
}

function mouseClicked() {
  if (!isStart || !isEnd) {
    // mouseX & mouseY
    for (var i = 0; i < data.cities.length; i++) {
      var city = data.cities[i];
      if (
        mouseX - 6 < city.x * scaleFactor &&
        city.x * scaleFactor < mouseX + 6 &&
        mouseY - 6 < city.y * scaleFactor &&
        city.y * scaleFactor < mouseY + 6
      ) {
        if (!isStart && !isEnd) {
          start = graph.setStart(city.name);
          isStart = true;
          fill(0, 255, 0);
          circle(start.x, start.y, circleCursorSize);
          return;
        } else if (!isEnd) {
          end = graph.setEnd(city.name);
          isEnd = true;
          fill(255, 0, 0);
          circle(end.x, end.y, circleCursorSize);
          return;
        }
      }
    }
  } else {
    return;
  }
}

//p5 animation variable and visited coordinates are stored here
var path = [];
var inPath = {};
var maxx = 0;
var m = -1;
var completed = false;

function draw() {
  frameRate(2);
  preDraw();

  var counter = 0;
  while (counter < m) {
    var px = inPath[counter].px;
    var py = inPath[counter].py;
    var cx = inPath[counter].cx;
    var cy = inPath[counter].cy;

    stroke(255, 0, 0);
    strokeWeight(lineWeight);
    line(px, py, cx, cy);
    counter++;
  }
  if (m <= maxx) {
    m++;
  }
  if (m > maxx) {
    m = maxx;
    completed = true;
  }

  if (completed) {
    path.forEach((p) => {
      var px = p.x;
      var py = p.y;
      var cx = p.x;
      var cy = p.y;
      if (p.parent != null) {
        cx = p.parent.x;
        cy = p.parent.y;
      }
      stroke(0, 255, 0);
      strokeWeight(lineWeight);
      line(px, py, cx, cy);
    });
    var j = 2;
    //Render at DOM
    createElement("br").parent("output");
    createElement("h4", "1: " + path[path.length - 1].value + " (titik asal)").parent(
      "output"
    );
    for (var i = path.length - 2; i > 0; i--) {
      createElement("h4", j + ": " + path[i].value).parent("output");
      j++;
    }
    createElement("h4", j++ + ": " + path[0].value + " (titik tujuan)").parent(
      "output"
    );
    createElement("br").parent("output");
    createElement(
      "h5",
      "Jumlah titik yang dilewati sebanyak " + (m + 1)
    ).parent("output");
    noLoop();
  }
}

function reset() {
  window.location.reload();
}

function bfs() {
  if (isStart && isEnd) {
    var queue = [];

    start.searched = true;
    queue.push(start);

    while (queue.length > 0) {
      var current = queue.shift();
      var px = current.x;
      var py = current.y;
      var edges = current.edges;
      for (var i = 0; i < edges.length; i++) {
        var neighbor = edges[i];
        if (!neighbor.searched) {
          neighbor.searched = true;
          neighbor.parent = current;
          var cx = neighbor.x;
          var cy = neighbor.y;
          inPath[maxx] = { px, py, cx, cy };
          maxx++;
          queue.push(neighbor);
          if (neighbor == end) {
            done();
            return;
          }
        }
      }
    }

    function done() {
      path.push(end);
      var next = end.parent;
      while (next != null) {
        path.push(next);
        next = next.parent;
      }
      loop();
    }
  } else {
    alert("Titik asal atau titik tujuan belum ditentukan. Silahkan diset terlebih dahulu.");
  }
}
