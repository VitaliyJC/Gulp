const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.scripts = tasks.scripts;
exports.styles = tasks.styles;
exports.html = tasks.html;
exports.watch = tasks.watch;
exports.live_html = tasks.live_html;


exports.default = gulp.parallel(
  exports.scripts,
  exports.styles,
  exports.html,
  exports.live_html,
  exports.watch,
)