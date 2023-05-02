const copydir = require('copy-dir');

copydir('projects/ngx-aurora-pattern-library/src/lib/styles', 'dist/ngx-aurora-pattern-library/lib/styles', {
  utimes: true,
  mode: true,
  cover: true
}, function(err){
  if(err) throw err;
  console.log('done copy styles');
});
