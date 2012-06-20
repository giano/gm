/**
 * Extend proto.
 */

module.exports = function (proto) {
	proto.shadow = function(opacity, blur, offset_x, offset_y, curvature_width) {
	  if (opacity == null) {
	    opacity = 60;
	  }
	  if (blur == null) {
	    blur = 4;
	  }
	  if (offset_x == null) {
	    offset_x = 4;
	  }
	  if (offset_y == null) {
	    offset_y = 4;
	  }
	  if (curvature_width == null) {
	    curvature_width = 500;
	  }
	  this.open().out("+clone").background("black").out("-shadow", "" + opacity + "x" + blur + (offset_x >= 0 ? "+" : "-") + offset_x + (offset_y >= 0 ? "+" : "-") + offset_y).background("transparent").out("-wave", "-" + Math.abs(offset_y*2)+ "x"+curvature_width).setFormat("png").close().out("+swap").setFormat("png").background("transparent").out("-layers", "merge").out("+repage");
	  return this;
	};	
}
