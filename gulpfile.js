var gulp   = require('gulp');
var gm     = require('gulp-gm');
var rename = require("gulp-rename");

var sizes = {
    c : [
        { width : 870, height : 217, prefix: '', suffix : '' },
        { width : 870, height : 217, prefix: '', suffix : '-category_default' },
        { width : 125, height : 125, prefix: '', suffix : '-medium_default' }
    ],
    m : [
        { width : 290, height :  81, prefix: '', suffix : '' },
        { width : 458, height : 458, prefix: '', suffix : '-large_default' },
        { width : 128, height : 125, prefix: '', suffix : '-medium_default' },
        { width :  98, height :  98, prefix: '', suffix : '-small_default' }
    ],
    p : [
        { width : 800, height : 800, prefix: 'image_', suffix : '' },
        { width :  80, height :  80, prefix: 'image_', suffix : '-cart_default' },
        { width : 250, height : 250, prefix: 'image_', suffix : '-home_default' },
        { width : 458, height : 458, prefix: 'image_', suffix : '-large_default' },
        { width : 125, height : 125, prefix: 'image_', suffix : '-medium_default' },
        { width :  98, height :  98, prefix: 'image_', suffix : '-small_default' },
        { width : 800, height : 800, prefix: 'image_', suffix : '-thickbox_default' }
    ],
    su : [
        { width : 290, height :  81, prefix: '', suffix : '' },
        { width : 458, height : 458, prefix: '', suffix : '-large_default' },
        { width : 128, height : 125, prefix: '', suffix : '-medium_default' },
        { width :  98, height :  98, prefix: '', suffix : '-small_default' }
    ]
};

gulp.task('create-category-images', function(){
    var categoryImages = gulp.src(['src/*/install/**/c/*.jpg', 'src/*/install/**/c/*.png']);
    sizes.c.forEach(function(size) {
        categoryImages.pipe(gm(
            function(gmfile) {
                return gmfile.setFormat('jpg')
                    .background('#ffffff')
                    .gravity('Center')
                    .resize(size.width, size.height)
                    .extent(size.width, size.height);
            },
            { imageMagick: true }
        ))
        .pipe(rename(function(path) {
            path.basename = size.prefix + path.basename + size.suffix;
        }))
        .pipe(gulp.dest('dist/'));
    });

});

gulp.task('create-manufacturer-images', function(){
    var manufacturerImages = gulp.src(['src/*/install/**/m/*.jpg', 'src/*/install/**/m/*.png']);
    sizes.m.forEach(function(size) {
        manufacturerImages.pipe(gm(
            function(gmfile) {
                return gmfile.setFormat('jpg')
                    .background('#ffffff')
                    .gravity('Center')
                    .resize(size.width, size.height)
                    .extent(size.width, size.height);
            },
            { imageMagick: true }
            ))
            .pipe(rename(function(path) {
                path.basename = size.prefix + path.basename + size.suffix;
            }))
            .pipe(gulp.dest('dist/'));
    });
});

gulp.task('create-product-images', function(){
    var productImages = gulp.src(['src/*/install/**/p/*.jpg', 'src/*/install/**/p/*.png']);
    sizes.p.forEach(function(size) {
        productImages.pipe(gm(
            function(gmfile) {
                return gmfile.setFormat('jpg')
                    .background('#ffffff')
                    .gravity('Center')
                    .resize(size.width, size.height)
                    .extent(size.width, size.height);
            },
            { imageMagick: true }
            ))
            .pipe(rename(function(path) {
                path.basename = size.prefix + path.basename + size.suffix;
            }))
            .pipe(gulp.dest('dist/'));
    });
});

gulp.task('create-supplier-images', function(){
    var supplierImages = gulp.src(['src/*/install/**/su/*.jpg', 'src/*/install/**/su/*.png']);
    sizes.su.forEach(function(size) {
        supplierImages.pipe(gm(
            function(gmfile) {
                return gmfile.setFormat('jpg')
                    .background('#ffffff')
                    .gravity('Center')
                    .resize(size.width, size.height)
                    .extent(size.width, size.height);
            },
            { imageMagick: true }
            ))
            .pipe(rename(function(path) {
                path.basename = size.prefix + path.basename + size.suffix;
            }))
            .pipe(gulp.dest('dist/'));
    });
});

gulp.task('create-module-images', function(){
    var moduleImages = gulp.src([
        'src/*/modules/**/*.jpg',
        'src/*/modules/**/*.png',
        'src/*/img/**/*.jpg',
        'src/*/img/**/*.png'
    ]);

    moduleImages.pipe(gm(
        function(gmfile) {
            return gmfile.setFormat('jpg');
        },
        { imageMagick: true }
    ))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', [
    'create-category-images',
    'create-manufacturer-images',
    'create-product-images',
    'create-supplier-images',
    'create-module-images'
]);