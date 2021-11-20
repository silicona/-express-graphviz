$(document).ready(function()  {
//console.log($("#graph").dataset.svg)
  var svg = $("#graph").attr('data-svg')
  $("#graph").graphviz({
    url: "../svg/" + svg + ".svg",
    //url: "../svg/app-funcionalidad.svg",
    //url: "http://localhost:8080/js/app-funcionalidad.svg",
    //url: "demo.svg",
    ready: function () {
      var gv = this
      gv.nodes().click(function () {
        var $set = $()
        $set.push(this)
        $set = $set.add(gv.linkedFrom(this, true))
        $set = $set.add(gv.linkedTo(this, true))
        gv.highlight($set, true)
        gv.bringToFront($set)
      })
      $(document).keydown(function (evt) {
        if (evt.keyCode == 27) {
          gv.highlight()
        }
      })
    },
  });
})