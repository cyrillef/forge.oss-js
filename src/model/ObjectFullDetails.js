/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ObjectFullDetailsDeltas'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ObjectFullDetailsDeltas'));
  } else {
    // Browser globals (root is window)
    if (!root.ForgeOss) {
      root.ForgeOss = {};
    }
    root.ForgeOss.ObjectFullDetails = factory(root.ForgeOss.ApiClient, root.ForgeOss.ObjectFullDetailsDeltas);
  }
}(this, function(ApiClient, ObjectFullDetailsDeltas) {
  'use strict';




  /**
   * The ObjectFullDetails model module.
   * @module model/ObjectFullDetails
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>ObjectFullDetails</code>.
   * Object Details json response
   * @alias module:model/ObjectFullDetails
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>ObjectFullDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ObjectFullDetails} obj Optional instance to populate.
   * @return {module:model/ObjectFullDetails} The populated <code>ObjectFullDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bucketKey')) {
        obj['bucketKey'] = ApiClient.convertToType(data['bucketKey'], 'String');
      }
      if (data.hasOwnProperty('objectId')) {
        obj['objectId'] = ApiClient.convertToType(data['objectId'], 'String');
      }
      if (data.hasOwnProperty('objectKey')) {
        obj['objectKey'] = ApiClient.convertToType(data['objectKey'], 'String');
      }
      if (data.hasOwnProperty('sha1')) {
        obj['sha1'] = ApiClient.convertToType(data['sha1'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Integer');
      }
      if (data.hasOwnProperty('contentType')) {
        obj['contentType'] = ApiClient.convertToType(data['contentType'], 'String');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
      if (data.hasOwnProperty('blockSizes')) {
        obj['blockSizes'] = ApiClient.convertToType(data['blockSizes'], ['Integer']);
      }
      if (data.hasOwnProperty('deltas')) {
        obj['deltas'] = ApiClient.convertToType(data['deltas'], [ObjectFullDetailsDeltas]);
      }
    }
    return obj;
  }

  /**
   * Bucket key
   * @member {String} bucketKey
   */
  exports.prototype['bucketKey'] = undefined;
  /**
   * Object URN
   * @member {String} objectId
   */
  exports.prototype['objectId'] = undefined;
  /**
   * Object name
   * @member {String} objectKey
   */
  exports.prototype['objectKey'] = undefined;
  /**
   * Object SHA1
   * @member {String} sha1
   */
  exports.prototype['sha1'] = undefined;
  /**
   * Object size
   * @member {Integer} size
   */
  exports.prototype['size'] = undefined;
  /**
   * Object content-type
   * @member {String} contentType
   */
  exports.prototype['contentType'] = undefined;
  /**
   * URL to download the object
   * @member {String} location
   */
  exports.prototype['location'] = undefined;
  /**
   * For delta-encoding. Represents whether a signature exists at a specific block size
   * @member {Array.<Integer>} blockSizes
   */
  exports.prototype['blockSizes'] = undefined;
  /**
   * Patch files available for download related to this object
   * @member {Array.<module:model/ObjectFullDetailsDeltas>} deltas
   */
  exports.prototype['deltas'] = undefined;



  return exports;
}));


