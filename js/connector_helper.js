function connect() {
  console.log("asdfs");

  if (isStart && isEnd) {
      addConnected(start, end);
      drawNodes();
  }
}

function addConnected(nodeA, nodeB) {
  // Add to nodeA
  for (let i = 0; i < dataKecamatan.cities.length; i++) {
    if ((dataKecamatan.cities[i].name = nodeA)) {
      if (!dataKecamatan.cities[i].connected.includes(nodeB)) {
        dataKecamatan.cities[i].connected.push(nodeB);
      }
    }
  }
  // Add to nodeB
  for (let i = 0; i < dataKecamatan.cities.length; i++) {
    if ((dataKecamatan.cities[i].name = nodeB)) {
      if (!dataKecamatan.cities[i].connected.includes(nodeA)) {
        dataKecamatan.cities[i].connected.push(nodeA);
      }
    }
  }
}

function saveUpdated() {
  saveJSON(dataKecamatan, "updated.json");
}
