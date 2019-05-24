var heatmapInstance = h337.create({
  container: document.querySelector('.heatmap'),
  radius: 45
});
document.querySelector('.demo-wrapper').onmousemove = function(ev) {
  heatmapInstance.addData({
    x: ev.layerX,
    y: ev.layerY,
    value: 5
  });
};
