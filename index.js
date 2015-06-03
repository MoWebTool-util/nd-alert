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
    className: 'ui-dialog-alert',
    cancelTpl: ''
  }

});

var instance;

Alert.show = function(message, onConfirm, options) {
  var defaults = {
    message: message,
    title: '请注意'
  };

  if (options) {
    $.extend(defaults, options);
  }

  if (instance) {
    instance.set(defaults);
    instance.off('confirm');
  } else {
    instance = new Alert(defaults).after('hide', function() {
      instance = null;
    });
  }

  if (onConfirm) {
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
