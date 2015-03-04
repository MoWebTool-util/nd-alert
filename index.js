/**
 * Description: index.js
 * Author: crossjs <liwenfu@crossjs.com>
 * Date: 2014-12-19 13:23:15
 */

'use strict';

var $ = require('jquery'),
  Confirm = require('nd-confirm');

// Alert
// -------
// Alert 是一个有基础模板和样式的对话框组件。
var Alert = Confirm.extend({

  attrs: {
    cancelTpl: ''
  }

});

var instance;

Alert.show = function(message, onConfirm, options) {
  var defaults = {
    message: message,
    title: '确认框',
    afterHide: null
  };

  defaults = $.extend(null, defaults, options);

  if (instance) {
    instance.set(defaults);
  } else {
    instance = new Alert(defaults);
  }

  if (onConfirm) {
    instance.off('confirm');
    instance.on('confirm', onConfirm);
  }

  return instance.show();
};

Alert.hide = function() {
  if (instance) {
    instance.hide();
  }
};

module.exports = Alert;
