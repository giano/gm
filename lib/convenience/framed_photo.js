/**
 * Extend proto.
 */
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
module.exports = function (proto) {
	proto.framed_photo = function(width, height, frame_width_perc, frame_color, shadow_opacity, shadow_offset) {
	  var preprocess_cb;
	  if (width == null) {
	    width = 260;
	  }
	  if (height == null) {
	    height = 260;
	  }
	  if (frame_width_perc == null) {
	    frame_width_perc = 8;
	  }
	  if (frame_color == null) {
	    frame_color = "#EEEEEE";
	  }
	  if (shadow_opacity == null) {
	    shadow_opacity = 30;
	  }
	  if (shadow_offset == null) {
	    shadow_offset = 2;
	  }
	  preprocess_cb = __bind(function(callback) {
	    return this.autoOrient().background("transparent").filter("Bessel").gravity("Center").background(frame_color).enhance().size(__bind(function(err, value) {
	      var border_size, orig_h, orig_w, rot;
	      orig_w = value.width;
	      orig_h = value.height;
	      border_size = Math.round(Math.max(5, Math.min(orig_w, orig_h) * (frame_width_perc/100)));
	      rot = (Math.round(5 - (Math.random() * 11))) || 1;
	      this.sharpen(2).extent(orig_w + border_size, orig_h + border_size).background("#00000011").extent(orig_w + border_size + 2, orig_h + border_size + 2).resize(width, height).rotate("transparent", rot).shadow(shadow_opacity, Math.abs(shadow_offset * 2), shadow_offset, shadow_offset);
	      return typeof callback === "function" ? callback() : void 0;
	    }, this));
	  }, this);
	  this.preprocessor(preprocess_cb);
	  return this;
	};
	
}
