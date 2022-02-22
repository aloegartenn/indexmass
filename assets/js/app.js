function indexMass(){
    let weight = + inputWeight.value;
    let height = + inputHeight.value;
    if(height > 3 ){
        height = height / 100
    }
    let result = weight / height ** 2
    result= Math.round(result * 10) / 10
    resultPlaceFirst.innerHTML = result
    if(result < 18.5){
        resultPlaceSecond.innerHTML = 'Низкий индекс массы тела, повышен риск заболеваний'
    }
    if(result > 18.5 && result < 24.9){
        resultPlaceSecond.innerHTML = 'Нормальный  индекс массы тела'
    }
    if(result > 25 && result < 29.9){
        resultPlaceSecond.innerHTML = 'Избыточный индекс массы тела, предожирение'
    }
    if(result > 30 && result < 34.9){
        resultPlaceSecond.innerHTML = 'Ожирение 1 степени, повышен риск заболеваний'
    }
    if(result > 35 && result < 39.9){
        resultPlaceSecond.innerHTML = 'Ожирение 2 степени, повышен риск заболеваний'
    }
    if(result > 40){
        resultPlaceSecond.innerHTML = 'Ожирение 3 степени, повышен риск заболеваний'
    }
}