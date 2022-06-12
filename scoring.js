// DOMの読み込みが終わったらfunction()の中の処理を実行します。
$(document).ready(function () {

  function sum_points(){
    let sum = 0;
    for (i=0; i<$('.container input').length; i++){
      sum += Number($('.container input').eq(i).val());
    }
  return sum
  }

  function average_points(){
    let average = sum_points() / $('.container input').length;
    return average
  }

  function rank(){
    let average = average_points();
    if (average >= 80){
      return "A";
    } else if(average >= 60){
      return "B";
    }else if(average >= 40){
      return "C"
    }else{
      return "D"
    }
  };

  function judgement(){
    let judge = "合格"
    for (i=0; i<$('.container input').length; i++){
      let point = Number($('.container input').eq(i).val());
      if (point < 60){
        judge = "不合格"
      }
    }
    return judge
  }

  function final(){
    let message = `あなたの成績は${rank()}です。${judgement()}です。`
    return message
  }

  //htmlに反映
  $('.container input').change(function(){
    $("#sum_indicate").text(sum_points());
    $("#average_indicate").text(average_points());
  });
  $('#btn-evaluation').on('click',function(){
    $('#evaluation').text(rank());
  });
  $('#btn-judge').on('click',function(){
    $('#judge').text(judgement());
  })
  $('#btn-declaration').on('click',function(){
    $('#declaration').text(final());
  })
});
