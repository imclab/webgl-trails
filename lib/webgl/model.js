// Generated by CoffeeScript 1.3.3
var Model,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

return Model = (function(_super) {

  __extends(Model, _super);

  Model.prototype.attribs = ['position', 'normal', 'texcoord'];

  function Model(gl, data) {
    this.gl = gl;
    Model.__super__.constructor.call(this);
    this.size = data.byteLength / (8 * Float32Array.BYTES_PER_ELEMENT);
    this.upload(data);
  }

  Model.prototype.setPointersForShader = function(shader) {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
    this.setPointer(shader, 'position', 3, 0, 8);
    this.setPointer(shader, 'normal', 3, 3, 8);
    this.setPointer(shader, 'texcoord', 2, 6, 8);
    return this;
  };

  return Model;

})(require('drawable'));
