jQuery(document).ready(function() {
  jQuery("#data").mask("00.00.00");
  jQuery("input").val("");
  var img = new Image();
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  const FONT_NAME_1 = 'ALittleSunshine_Medium';
  const FONT_NAME_2 = 'OneStarryNight_Regular';
  function validador(id, x, y, cnt) {
    if (jQuery(id).val()) {
      ctx.fillText(jQuery(id).val(), x, y);
    } else {
      ctx.fillText(cnt, x, y);
    }
  }
  function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img,0,0);
    ctx.shadowColor = 'rgba(105,80,32,.15)';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 3;
    ctx.fillStyle = '#ff9e94';
    ctx.font = `173px "${FONT_NAME_1}"`;
    ctx.textAlign='start';
    // ctx.fillText(jQuery("#name2").val(), canvas.width/2-26, canvas.height-530);
    validador("#name2", canvas.width/2-26, canvas.height-530, "Nome 2");
    ctx.textAlign='center';
    // ctx.fillText(jQuery("#name1").val(), canvas.width/2, canvas.height-677);
    validador("#name1", canvas.width/2, canvas.height-677, "Nome 1");
    ctx.font = `89px "${FONT_NAME_1}"`;
    validador("#data", canvas.width/2, canvas.height-415, "00.00.00");
    ctx.fillStyle = '#b39789';
    ctx.font = `278px "${FONT_NAME_2}"`;
    ctx.rotate(-20 * Math.PI / 180);
    ctx.translate(-500, 60);
    ctx.fillText('&', canvas.width/2-94, canvas.height-535);
    ctx.resetTransform();
  }

  function downloadCanvas(link, filename) {
    link.href = document.getElementById('myCanvas').toDataURL();
    link.download = filename;
  }

  jQuery("#download").on('click', function(e) {
    downloadCanvas(this, jQuery("#name1").val()+" - "+jQuery("#name2").val()+'.png');
  });

  jQuery("input").on('keyup', function(e) {
    desenhar();
  });

  jQuery(img).attr("src", 'assets/img/bg.png')
  .load(function() {
    desenhar();
  });
});
