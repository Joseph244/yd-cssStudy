// css  Houdini 
// 也可以采用类的方式书写，参考sky.js
if (typeof registerPaint !== "undefined") {
    registerPaint("background-canvas", class {
        static get inputProperties() {
          // --background-canvas 是index.html中css定义的样式变量
            return ["--background-canvas"];
        }
        paint(ctx, geom, properties) {
            eval(properties.get("--background-canvas").toString())(
                ctx, geom, properties
            );
        }
    });
}