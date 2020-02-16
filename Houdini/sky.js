
class YdSky {
    static get inputProperties() {
        return ["--star-sky"];
    }
    paint(ctx, geom, properties) {
        const starSky = properties.get("--star-sky");
        //....... ctx绘制动画
    }
}

registerPaint("yd-sky", YdSky);