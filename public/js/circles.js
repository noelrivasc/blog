function doMagic() {
  const container = document.getElementById('circles-container');

  const app = new PIXI.Application({
    width: 400,
    height: 400,
    resizeTo: container,
    backgroundAlpha: 0,
  });

  container.appendChild(app.view);

  let arc1 = new PIXI.Graphics();
  arc1.blendMode =  PIXI.BLEND_MODES.ADD;
  app.stage.addChild(arc1);

  let arc2 = new PIXI.Graphics();
  arc2.blendMode =  PIXI.BLEND_MODES.ADD;
  app.stage.addChild(arc2);

  let arc3 = new PIXI.Graphics();
  arc3.blendMode =  PIXI.BLEND_MODES.ADD;
  app.stage.addChild(arc3);

  const blurFilter1 = new PIXI.filters.BlurFilter();
  const noiseFilter1 = new PIXI.filters.NoiseFilter();
  blurFilter1.blur = 5;
  arc1.filters = [blurFilter1, noiseFilter1];
  arc2.filters = [blurFilter1, noiseFilter1];
  arc3.filters = [blurFilter1, noiseFilter1];
  noiseFilter1.blendMode =  PIXI.BLEND_MODES.ADD;

  let count = 0;
  const amplitude = 25;
  const period = 1000;
  let offset = 35;

  let widthAmplitude = 10;
  const baseWidth = 20;

  const sizeAmplitude = 30;
  let arcradius = 60;
  const baseSize = 45;

  app.ticker.add(() => {
    count += 1;

    arc1.geometry.clear();
    arc2.geometry.clear();
    arc3.geometry.clear();

    let lineWidth = baseWidth + (widthAmplitude * Math.cos((Math.PI*2) * count / period)); 

    arc1.lineStyle({
      width: lineWidth,
      color: 0xDD0000,
    });
    arc2.lineStyle({
      width: lineWidth,
      color: 0x00DD00,
    });
    arc3.lineStyle({
      width: lineWidth,
      color: 0x0000EE,
    });

    arc1.arc(arcradius * 1.75, arcradius * 1.75, arcradius, 0, 180);
    arc2.arc(arcradius * 1.75, arcradius * 1.75, arcradius, 0, 180);
    arc3.arc(arcradius * 1.75, arcradius * 1.75, arcradius, 0, 180);

    let currentOffset = offset * Math.sin((Math.PI*2) * count / period);
    
    let arc2count = count + currentOffset;
    let arc3count = count + (currentOffset*2);

    arc1.x = (amplitude * Math.cos((Math.PI*2) * count / period));
    arc2.x = (amplitude * Math.cos((Math.PI*2) * arc2count / period));
    arc3.x = (amplitude * Math.cos((Math.PI*2) * arc3count / period));

    arc1.y = (amplitude * Math.sin((Math.PI*2) * count / period));
    arc2.y = (amplitude * Math.sin((Math.PI*2) * arc2count / period));
    arc3.y = (amplitude * Math.sin((Math.PI*2) * arc3count / period));

    arcradius = baseSize + (sizeAmplitude + Math.sin((Math.PI*2) * count / period));
  });
};

window.onload = function() {
  doMagic();
}
