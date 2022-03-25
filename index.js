const hQ = 42, cityBlock = 264, promo = 400, priceCutOff = 2000, maxDist = 2500, fare = 0.02

function distanceFromHqInBlocks(number) {
    if (number >= hQ) {
        let distance = number - hQ
    return distance  
    } 
    else if (number <= hQ) {
        let distance = hQ - number
    return distance
    }
}

distanceFromHqInBlocks(43)
distanceFromHqInBlocks(50)
distanceFromHqInBlocks(34)

function distanceFromHqInFeet(number) {
    if (number >= hQ) {
        let distance = (number - hQ) * cityBlock
        return distance  
    } 
    else if (number <= hQ) {
        let distance = (hQ - number) * cityBlock
        return distance
    }
}

distanceFromHqInFeet(43)
distanceFromHqInFeet(50)
distanceFromHqInFeet(34)

function distanceTravelledInFeet(number, number2) {
    if (number2 >= number) {
        let distance = (number2 - number) * cityBlock
        return distance
    }
    else if (number >= number2) {
        let distance = (number - number2) * cityBlock
        return distance
    }
}

distanceTravelledInFeet(43, 48)
distanceTravelledInFeet(50, 60)
distanceTravelledInFeet(34, 28)

function  calculatesFarePrice(number, number2) {
    const travel = distanceTravelledInFeet(number,number2)
    if (travel > promo && travel < priceCutOff) {
        return (travel - promo) * fare
    }
    else if (travel > priceCutOff && travel < maxDist) {
        return 25
    }
    else if (travel < promo) {
        return 0
    }
    else if (travel > maxDist) {
        return 'cannot travel that far'
    }
}

calculatesFarePrice(43, 44) //distance 
calculatesFarePrice(34, 32) //distance is 128
calculatesFarePrice(50, 58) //distance is 1712
calculatesFarePrice(34, 24) //distance is 2240


