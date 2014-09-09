// Generated by CoffeeScript 1.7.1
(function() {
  var assetPath, bower, bump, bumpBowerVersion, clean, coffee, coffeePath, coffeeStagePath, concat, connect, copyAssets, copyBowerLibs, copyFilesToBuild, css, cssPath, cssStage, cssStagePath, declare, del, fs, git, gulp, gutil, html, htmlStage, http, jade, jadePath, jadeStagePath, js, jsStage, launch, livereload, minifyAndJoin, minifyCss, minifyHtml, open, plumber, pushViaGit, rev, sass, server, uglify, usemin, watch, watchAndCompileFiles, wrap;

  bower = require('gulp-bower');

  bump = require('gulp-bump');

  clean = require('gulp-clean');

  coffee = require('gulp-coffee');

  concat = require('gulp-concat');

  connect = require('connect');

  declare = require('gulp-declare');

  del = require('del');

  fs = require('fs');

  git = require('gulp-git');

  gulp = require('gulp');

  gutil = require('gulp-util');

  http = require('http');

  jade = require('gulp-jade');

  livereload = require('gulp-livereload');

  minifyCss = require('gulp-minify-css');

  minifyHtml = require('gulp-minify-html');

  open = require("gulp-open");

  plumber = require('gulp-plumber');

  rev = require('gulp-rev');

  sass = require('gulp-sass');

  uglify = require('gulp-uglify');

  usemin = require('gulp-usemin');

  watch = require('gulp-watch');

  wrap = require('gulp-wrap');

  jadeStagePath = 'stage/stage.jade';

  jadePath = 'app/jade/**/*.jade';

  cssPath = 'app/scss/**/*.scss';

  cssStagePath = 'stage/stage.scss';

  coffeePath = 'app/coffee/**/*.coffee';

  coffeeStagePath = 'stage/**/*.coffee';

  assetPath = ['app/images/**/*', 'app/video/*'];

  htmlStage = function() {
    return gulp.src(jadeStagePath).pipe(jade()).pipe(gulp.dest('./server/'));
  };

  html = function() {
    return gulp.src(jadePath).pipe(jade({
      client: true
    })).pipe(wrap("templates['<%= file.relative.split('.')[0] %>'] = <%= file.contents %>;\n")).pipe(concat('jade-templates.js')).pipe(wrap("templates = {};\n<%= file.contents %>")).pipe(gulp.dest('./server/js'));
  };

  css = function() {
    return gulp.src(cssPath).pipe(sass({
      errLogToConsole: true
    })).pipe(gulp.dest('./server/css'));
  };

  cssStage = function() {
    return gulp.src(cssStagePath).pipe(sass({
      errLogToConsole: true
    })).pipe(gulp.dest('./server/stage/css'));
  };

  js = function() {
    return gulp.src(coffeePath).pipe(plumber()).pipe(coffee({
      bare: true
    }).on('error', gutil.log).on('error', gutil.beep)).pipe(concat('app.js')).pipe(gulp.dest('server/js'));
  };

  jsStage = function() {
    return gulp.src(coffeeStagePath).pipe(plumber()).pipe(coffee({
      bare: true
    }).on('error', gutil.log).on('error', gutil.beep)).pipe(concat('init.js')).pipe(gulp.dest('server/stage/js'));
  };

  copyAssets = function(destination) {
    return gulp.src(assetPath).pipe(gulp.dest(destination));
  };

  copyBowerLibs = function() {
    return bower().pipe(gulp.dest('./server/bower-libs/'));
  };

  copyFilesToBuild = function() {
    gulp.src('./server/js/*').pipe(gulp.dest('./rel/'));
    return gulp.src('./server/css/main.css').pipe(gulp.dest('./rel/'));
  };

  pushViaGit = function() {
    return fs.readFile('./bower.json', 'utf8', (function(_this) {
      return function(err, data) {
        var regex, version;
        regex = /version"\s*:\s*"(.+)"/;
        version = data.match(regex)[1];
        return gulp.src('./').pipe(git.add({
          args: "--all"
        })).pipe(git.commit("BUILD - " + version)).pipe(git.push('origin', 'master', function(err) {
          return console.log(err);
        }));
      };
    })(this));
  };

  bumpBowerVersion = function() {
    return gulp.src('./bower.json').pipe(bump({
      type: 'patch'
    })).pipe(gulp.dest('./'));
  };

  minifyAndJoin = function() {
    return gulp.src('./server/stage.html').pipe(usemin({
      css: [minifyCss(), 'concat'],
      html: [
        minifyHtml({
          empty: true
        })
      ],
      js: [uglify(), rev()]
    })).pipe(gulp.dest('rel/'));
  };

  server = function() {
    var app, base, directory, hostname, port;
    port = 3000;
    hostname = null;
    base = 'server';
    directory = 'server';
    app = connect().use(connect["static"](base)).use(connect.directory(directory));
    return http.createServer(app).listen(port, hostname);
  };

  launch = function() {
    return gulp.src("./stage/stage.jade").pipe(open("", {
      url: "http://0.0.0.0:3000/stage.html",
      app: "google chrome"
    }));
  };

  watchAndCompileFiles = function(cb) {
    watch({
      glob: coffeePath
    }, function() {
      return js().pipe(livereload());
    });
    watch({
      glob: cssPath
    }, function() {
      return css().pipe(livereload());
    });
    watch({
      glob: jadePath
    }, function() {
      return html().pipe(livereload());
    });
    watch({
      glob: coffeeStagePath
    }, function() {
      return jsStage().pipe(livereload());
    });
    watch({
      glob: cssStagePath
    }, function() {
      return cssStage().pipe(livereload());
    });
    watch({
      glob: jadeStagePath
    }, function() {
      return htmlStage().pipe(livereload());
    });
    return watch({
      glob: assetPath
    }, function() {
      return copyAssets('server/assets').pipe(livereload());
    });
  };

  gulp.task('rel:clean', function(cb) {
    del(['./rel/*'], cb);
    return console.log("!! IMPORTANT !! If you haven't already, make sure you run 'gulp' before 'gulp rel'");
  });

  gulp.task('bumpVersion', function() {
    return bumpBowerVersion();
  });

  gulp.task('copyAssets', function() {
    return copyAssets('rel/assets');
  });

  gulp.task('minify', ['copyAssets'], function() {
    return minifyAndJoin();
  });

  gulp.task('rel', ['rel:clean', 'bumpVersion', 'minify'], function() {
    return pushViaGit();
  });

  gulp.task('clean', function(cb) {
    return del(['./server/*'], cb);
  });

  gulp.task('bowerLibs', ['clean'], function() {
    return copyBowerLibs();
  });

  gulp.task('server', ['bowerLibs'], function() {
    watchAndCompileFiles();
    server();
    return launch();
  });

  gulp.task('default', ['server']);

}).call(this);
