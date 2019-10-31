function main () {
  return digit(1,0.2);
}

function digit(s,w) {
    var sg = segment(s,w);
    var sg1 = sg.rotateZ(90);
    var s6=6*s;
  return union([
      sg,
      sg1,
      sg1.translate([s6,0]),
      sg.translate([0,s6]),
      sg1.translate([0,s6]),
      sg1.translate([s6,s6]),
      sg.translate([0,s6*2]),
    ]).translate([s,s]);
}

function segment(s, w) {
    w=w/s;

    var l1 = line([0,0], [1,1], w);
    var l2 = line([0,0], [4,0], w);
    var l3 = l1.rotateZ(-90);
    
  return union([
      l1,
      l2.translate([1,1]),
      l3.translate([5,1]),
      l3,
      l2.translate([1,-1]),
      l1.translate([5,-1]),
    ]).scale(s);
}

function line(p1,p2,w) {
    var dx = (p2[0]-p1[0]);
    var dy = (p2[1]-p1[1]);
    var l = Math.sqrt(dx*dx+dy*dy);
    return square([l+w,w]).translate([-w/2,-w/2])
    .rotateZ(Math.atan2(dy,dx)*180/Math.PI)
    .translate(p1);
}
