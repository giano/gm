/**
 * Extend proto.
 */

module.exports = function (proto) {
	proto.open = function() {
	  return this.out("(");
	};
	proto.close = function() {
	  return this.out(")");
	};
}
