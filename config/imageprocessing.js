module.exports = function (grunt, config) {
  var algorithm = 'top-down';
  var defaultSpritePadding = 5;
  var spriteNameToCssPrefix = function (sprite) {
    // `sprite` has `name`, `image` (full path), `x`, `y`
    //   `width`, `height`, `total_width`, `total_height`
    sprite.name = 'icon-' + sprite.name;
  };
  return {
    tasks: {
      sprite: {
        icons22: {
          src: '<%= srcConfig.server %>/images-source/icons/*22.png',
          destImg: '<%= srcConfig.server %>/images/sprite/icons22.png',
          destCSS: '<%= srcConfig.server %>/styles/sprite/icons22.less',
          algorithm: algorithm,
          padding: defaultSpritePadding,
          engine: 'gm',
          engineOpts: {
            imagemagick: true
          },
          cssVarMap: spriteNameToCssPrefix
        },
        icons30: {
          src: '<%= srcConfig.server %>/images-source/icons/*30.png',
          destImg: '<%= srcConfig.server %>/images/sprite/icons30.png',
          destCSS: '<%= srcConfig.server %>/styles/sprite/icons30.less',
          algorithm: algorithm,
          padding: defaultSpritePadding,
          engine: 'gm',
          engineOpts: {
            imagemagick: true
          },
          cssVarMap: spriteNameToCssPrefix
        },
        icons44: {
          src: '<%= srcConfig.server %>/images-source/icons/*44.png',
          destImg: '<%= srcConfig.server %>/images/sprite/icons44.png',
          destCSS: '<%= srcConfig.server %>/styles/sprite/icons44.less',
          algorithm: algorithm,
          padding: defaultSpritePadding * 2,
          engine: 'gm',
          engineOpts: {
            imagemagick: true
          },
          cssVarMap: spriteNameToCssPrefix
        },
        icons88: {
          src: '<%= srcConfig.server %>/images-source/icons/*88.png',
          destImg: '<%= srcConfig.server %>/images/sprite/icons88.png',
          destCSS: '<%= srcConfig.server %>/styles/sprite/icons88.less',
          algorithm: algorithm,
          padding: defaultSpritePadding * 4,
          engine: 'gm',
          engineOpts: {
            imagemagick: true
          },
          cssVarMap: spriteNameToCssPrefix
        }
      },
      responsive_images: {
        icons: {  // ART DIRECTION!!!! all the icons should have the same height not width!
          options: {
            engine: 'im',
            sizes: [{
              height: 22
            }, {
              height: 30
            }, {
              height: 44
            }, {
              height: 88
            }]
          },
          files: [{
            newFilesOnly: true,
            expand: true,
            cwd: '<%= srcConfig.src %>/images-source/icons/',
            src: '*.png',
            dest: '<%= srcConfig.server %>/images-source/icons/'
          }]
        },
        logos: {
          options: {
            engine: 'im',
            sizes: [{
              width: 100
            }, {
              width: 200
            }, {
              width: 400
            }, {
              width: 800
            }]
          },
          files: [{
            expand: true,
            cwd: '<%= srcConfig.src %>/images-source/logos/',
            src: '*.*',
            dest: '<%= srcConfig.server %>/images/logos/'
          }]
        }
      }
    }
  };
};
