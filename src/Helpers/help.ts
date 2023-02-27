import { clientsNames, liz, lizCategories, nrp, nrpCategories, potek, potekCategories, qualityAuto, qualityAutoCategories, star, starCategories, vjj, vjjCategories } from "../../data/data"

export default function generate(client: string, category: string, count: number): string {
    let newArray = []
    switch (client) {
        case clientsNames.qualityAuto : 
            switch (category) {
                case qualityAutoCategories[0]: 
                if (count > qualityAuto.qualityAuto.length) {
                    //Protect us from an infinite loop if the count is greater than the total number of items
                    count = qualityAuto.qualityAuto.length
                }
                for(let i = 1; i <= count; i++) {
                    let randomString = getRandomItemFromString(qualityAuto.qualityAuto)
                    if (newArray.includes(randomString)) {
                        i--
                    } else {
                        newArray.push(randomString)
                    }
                }
                break;
                case qualityAutoCategories[1]: 
                if (count > qualityAuto.clients.length) {
                    //Protect us from an infinite loop if the count is greater than the total number of items
                    count = qualityAuto.clients.length
                }
                for(let i = 1; i <= count; i++) {
                    let randomString = getRandomItemFromString(qualityAuto.clients)
                    if (newArray.includes(randomString)) {
                        i--
                    } else {
                        newArray.push(randomString)
                    }
                }
                break;
                case qualityAutoCategories[2]: 
                if (count > qualityAuto.tires.length) {
                    //Protect us from an infinite loop if the count is greater than the total number of items
                    count = qualityAuto.tires.length
                }
                for(let i = 1; i <= count; i++) {
                    let randomString = getRandomItemFromString(qualityAuto.tires)
                    if (newArray.includes(randomString)) {
                        i--
                    } else {
                        newArray.push(randomString)
                    }
                }
                break;
                case qualityAutoCategories[3]: 
                if (count > qualityAuto.exhaust.length) {
                    //Protect us from an infinite loop if the count is greater than the total number of items
                    count = qualityAuto.exhaust.length
                }
                for(let i = 1; i <= count; i++) {
                    let randomString = getRandomItemFromString(qualityAuto.exhaust)
                    if (newArray.includes(randomString)) {
                        i--
                    } else {
                        newArray.push(randomString)
                    }
                }
                break;
                case qualityAutoCategories[4]: 
                if (count > qualityAuto.oilChange.length) {
                    //Protect us from an infinite loop if the count is greater than the total number of items
                    count = qualityAuto.oilChange.length
                }
                for(let i = 1; i <= count; i++) {
                    let randomString = getRandomItemFromString(qualityAuto.oilChange)
                    if (newArray.includes(randomString)) {
                        i--
                    } else {
                        newArray.push(randomString)
                    }
                }
                break;
                case qualityAutoCategories[5]: 
                if (count > qualityAuto.breaks.length) {
                    //Protect us from an infinite loop if the count is greater than the total number of items
                    count = qualityAuto.breaks.length
                }
                for(let i = 1; i <= count; i++) {
                    let randomString = getRandomItemFromString(qualityAuto.breaks)
                    if (newArray.includes(randomString)) {
                        i--
                    } else {
                        newArray.push(randomString)
                    }
                }
                break;
                case qualityAutoCategories[6]: 
                if (count > qualityAuto.other.length) {
                    //Protect us from an infinite loop if the count is greater than the total number of items
                    count = qualityAuto.other.length
                }
                for(let i = 1; i <= count; i++) {
                    let randomString = getRandomItemFromString(qualityAuto.other)
                    if (newArray.includes(randomString)) {
                        i--
                    } else {
                        newArray.push(randomString)
                    }
                }
                break;
            }
        break;
        case clientsNames.liz: 
            switch (category) {
                case lizCategories[0]: 
                if (count > liz.aboutLiz.length) {
                    //Protect us from an infinite loop if the count is greater than the total number of items
                    count = liz.aboutLiz.length
                }
                for(let i = 1; i <= count; i++) {
                    let randomString = getRandomItemFromString(liz.aboutLiz)
                    if (newArray.includes(randomString)) {
                        i--
                    } else {
                        newArray.push(randomString)
                    }
                }
                break;
                case lizCategories[1]:
                    if (count > liz.clients.length) {
                        //Protect us from an infinite loop if the count is greater than the total number of items
                        count = liz.clients.length
                    }
                    for(let i = 1; i <= count; i++) {
                        let randomString = getRandomItemFromString(liz.clients)
                        if (newArray.includes(randomString)) {
                            i--
                        } else {
                            newArray.push(randomString)
                        }
                    } 
                break;
                case lizCategories[2]: 
                if (count > liz.homes.length) {
                    //Protect us from an infinite loop if the count is greater than the total number of items
                    count = liz.homes.length
                }
                for(let i = 1; i <= count; i++) {
                    let randomString = getRandomItemFromString(liz.homes)
                    if (newArray.includes(randomString)) {
                        i--
                    } else {
                        newArray.push(randomString)
                    }
                }
                break;
                case lizCategories[3]: 
                if (count > liz.gardening.length) {
                    //Protect us from an infinite loop if the count is greater than the total number of items
                    count = liz.gardening.length
                }
                for(let i = 1; i <= count; i++) {
                    let randomString = getRandomItemFromString(liz.gardening)
                    if (newArray.includes(randomString)) {
                        i--
                    } else {
                        newArray.push(randomString)
                    }
                }
                break;
                case lizCategories[4]: 
                if (count > liz.local.length) {
                    //Protect us from an infinite loop if the count is greater than the total number of items
                    count = liz.local.length
                }
                for(let i = 1; i <= count; i++) {
                    let randomString = getRandomItemFromString(liz.local)
                    if (newArray.includes(randomString)) {
                        i--
                    } else {
                        newArray.push(randomString)
                    }
                }
                break;
            }
        break;
        case clientsNames.nrp: 
            switch (category) {
                case nrpCategories[0]: 
                    if (count > nrp.aboutNRP.length) {
                        //Protect us from an infinite loop if the count is greater than the total number of items
                        count = nrp.aboutNRP.length
                    }
                    for(let i = 1; i <= count; i++) {
                        let randomString = getRandomItemFromString(nrp.aboutNRP)
                        if (newArray.includes(randomString)) {
                            i--
                        } else {
                            newArray.push(randomString)
                        }
                    }
                break;
                case nrpCategories[1]: 
                if (count > nrp.clients.length) {
                    //Protect us from an infinite loop if the count is greater than the total number of items
                    count = nrp.clients.length
                }
                for(let i = 1; i <= count; i++) {
                    let randomString = getRandomItemFromString(nrp.clients)
                    if (newArray.includes(randomString)) {
                        i--
                    } else {
                        newArray.push(randomString)
                    }
                }
                break;
                case nrpCategories[2]:
                    if (count > nrp.burns.length) {
                        //Protect us from an infinite loop if the count is greater than the total number of items
                        count = nrp.burns.length
                    }
                    for(let i = 1; i <= count; i++) {
                        let randomString = getRandomItemFromString(nrp.burns)
                        if (newArray.includes(randomString)) {
                            i--
                        } else {
                            newArray.push(randomString)
                        }
                    } 
                break;
                case nrpCategories[3]: 
                if (count > nrp.foliar.length) {
                    //Protect us from an infinite loop if the count is greater than the total number of items
                    count = nrp.foliar.length
                }
                for(let i = 1; i <= count; i++) {
                    let randomString = getRandomItemFromString(nrp.foliar)
                    if (newArray.includes(randomString)) {
                        i--
                    } else {
                        newArray.push(randomString)
                    }
                }
                break;
                case nrpCategories[4]: 
                if (count > nrp.prairie.length) {
                    //Protect us from an infinite loop if the count is greater than the total number of items
                    count = nrp.prairie.length
                }
                for(let i = 1; i <= count; i++) {
                    let randomString = getRandomItemFromString(nrp.prairie)
                    if (newArray.includes(randomString)) {
                        i--
                    } else {
                        newArray.push(randomString)
                    }
                }
                break;
                case nrpCategories[5]: 
                    if (count > nrp.buckthorn.length) {
                        //Protect us from an infinite loop if the count is greater than the total number of items
                        count = nrp.buckthorn.length
                    }
                    for(let i = 1; i <= count; i++) {
                        let randomString = getRandomItemFromString(nrp.buckthorn)
                        if (newArray.includes(randomString)) {
                            i--
                        } else {
                            newArray.push(randomString)
                        }
                    }
                break;
                case nrpCategories[6]:
                    if (count > nrp.erosion.length) {
                        //Protect us from an infinite loop if the count is greater than the total number of items
                        count = nrp.erosion.length
                    }
                    for(let i = 1; i <= count; i++) {
                        let randomString = getRandomItemFromString(nrp.erosion)
                        if (newArray.includes(randomString)) {
                            i--
                        } else {
                            newArray.push(randomString)
                        }
                    }
                break;
                case nrpCategories[7]: 
                if (count > nrp.felling.length) {
                    //Protect us from an infinite loop if the count is greater than the total number of items
                    count = nrp.felling.length
                }
                for(let i = 1; i <= count; i++) {
                    let randomString = getRandomItemFromString(nrp.felling)
                    if (newArray.includes(randomString)) {
                        i--
                    } else {
                        newArray.push(randomString)
                    }
                }
                break;
            }
        break;
        case clientsNames.vjj: 
            switch (category) {
                case vjjCategories[0]: 
                if (count > vjj.aboutVjj.length) {
                    //Protect us from an infinite loop if the count is greater than the total number of items
                    count = vjj.aboutVjj.length
                }
                for(let i = 1; i <= count; i++) {
                    let randomString = getRandomItemFromString(vjj.aboutVjj)
                    if (newArray.includes(randomString)) {
                        i--
                    } else {
                        newArray.push(randomString)
                    }
                }
                break;
                case vjjCategories[1]: 
                if (count > vjj.clients.length) {
                    //Protect us from an infinite loop if the count is greater than the total number of items
                    count = vjj.clients.length
                }
                for(let i = 1; i <= count; i++) {
                    let randomString = getRandomItemFromString(vjj.clients)
                    if (newArray.includes(randomString)) {
                        i--
                    } else {
                        newArray.push(randomString)
                    }
                }
                break;
                case vjjCategories[2]: 
                if (count > vjj.nationalPark.length) {
                    //Protect us from an infinite loop if the count is greater than the total number of items
                    count = vjj.nationalPark.length
                }
                for(let i = 1; i <= count; i++) {
                    let randomString = getRandomItemFromString(vjj.nationalPark)
                    if (newArray.includes(randomString)) {
                        i--
                    } else {
                        newArray.push(randomString)
                    }
                }
                break;
                case vjjCategories[3]:
                    if (count > vjj.abroad.length) {
                        //Protect us from an infinite loop if the count is greater than the total number of items
                        count = vjj.abroad.length
                    }
                    for(let i = 1; i <= count; i++) {
                        let randomString = getRandomItemFromString(vjj.abroad)
                        if (newArray.includes(randomString)) {
                            i--
                        } else {
                            newArray.push(randomString)
                        }
                    } 
                break;
                case vjjCategories[4]:
                    if (count > vjj.veganFood.length) {
                        //Protect us from an infinite loop if the count is greater than the total number of items
                        count = vjj.veganFood.length
                    }
                    for(let i = 1; i <= count; i++) {
                        let randomString = getRandomItemFromString(vjj.veganFood)
                        if (newArray.includes(randomString)) {
                            i--
                        } else {
                            newArray.push(randomString)
                        }
                    } 
                break;
                case vjjCategories[5]:
                    if (count > vjj.tips.length) {
                        //Protect us from an infinite loop if the count is greater than the total number of items
                        count = vjj.tips.length
                    }
                    for(let i = 1; i <= count; i++) {
                        let randomString = getRandomItemFromString(vjj.tips)
                        if (newArray.includes(randomString)) {
                            i--
                        } else {
                            newArray.push(randomString)
                        }
                    } 
                break;
            }
        break;
        case clientsNames.star: 
            switch (category) {
                case starCategories[0]: 
                if (count > star.aboutStar.length) {
                    //Protect us from an infinite loop if the count is greater than the total number of items
                    count = star.aboutStar.length
                }
                for(let i = 1; i <= count; i++) {
                    let randomString = getRandomItemFromString(star.aboutStar)
                    if (newArray.includes(randomString)) {
                        i--
                    } else {
                        newArray.push(randomString)
                    }
                }
                break;
                case starCategories[1]: 
                if (count > star.clients.length) {
                    //Protect us from an infinite loop if the count is greater than the total number of items
                    count = star.clients.length
                }
                for(let i = 1; i <= count; i++) {
                    let randomString = getRandomItemFromString(star.clients)
                    if (newArray.includes(randomString)) {
                        i--
                    } else {
                        newArray.push(randomString)
                    }
                }
                break;
                case starCategories[2]: 
                if (count > star.social.length) {
                    //Protect us from an infinite loop if the count is greater than the total number of items
                    count = star.social.length
                }
                for(let i = 1; i <= count; i++) {
                    let randomString = getRandomItemFromString(star.social)
                    if (newArray.includes(randomString)) {
                        i--
                    } else {
                        newArray.push(randomString)
                    }
                }
                break;
                case starCategories[3]:
                    if (count > star.photography.length) {
                        //Protect us from an infinite loop if the count is greater than the total number of items
                        count = star.photography.length
                    }
                    for(let i = 1; i <= count; i++) {
                        let randomString = getRandomItemFromString(star.photography)
                        if (newArray.includes(randomString)) {
                            i--
                        } else {
                            newArray.push(randomString)
                        }
                    } 
                break;
                case starCategories[4]:
                    if (count > star.video.length) {
                        //Protect us from an infinite loop if the count is greater than the total number of items
                        count = star.video.length
                    }
                    for(let i = 1; i <= count; i++) {
                        let randomString = getRandomItemFromString(star.video)
                        if (newArray.includes(randomString)) {
                            i--
                        } else {
                            newArray.push(randomString)
                        }
                    } 
                break;
                case starCategories[5]:
                    if (count > star.website.length) {
                        //Protect us from an infinite loop if the count is greater than the total number of items
                        count = star.website.length
                    }
                    for(let i = 1; i <= count; i++) {
                        let randomString = getRandomItemFromString(star.website)
                        if (newArray.includes(randomString)) {
                            i--
                        } else {
                            newArray.push(randomString)
                        }
                    } 
                break;
                case starCategories[6]: 
                if (count > star.business.length) {
                    //Protect us from an infinite loop if the count is greater than the total number of items
                    count = star.business.length
                }
                for(let i = 1; i <= count; i++) {
                    let randomString = getRandomItemFromString(star.business)
                    if (newArray.includes(randomString)) {
                        i--
                    } else {
                        newArray.push(randomString)
                    }
                }
                break;
            }
        break;
        case clientsNames.potek: 
            switch (category) {
                case potekCategories[0]: 
                if (count > potek.aboutPotek.length) {
                    //Protect us from an infinite loop if the count is greater than the total number of items
                    count = potek.aboutPotek.length
                }
                for(let i = 1; i <= count; i++) {
                    let randomString = getRandomItemFromString(potek.aboutPotek)
                    if (newArray.includes(randomString)) {
                        i--
                    } else {
                        newArray.push(randomString)
                    }
                }
                break;
                case potekCategories[1]: 
                if (count > potek.clients.length) {
                    //Protect us from an infinite loop if the count is greater than the total number of items
                    count = potek.clients.length
                }
                for(let i = 1; i <= count; i++) {
                    let randomString = getRandomItemFromString(potek.clients)
                    if (newArray.includes(randomString)) {
                        i--
                    } else {
                        newArray.push(randomString)
                    }
                }
                break;
                case potekCategories[2]: 
                if (count > potek.fusing.length) {
                    //Protect us from an infinite loop if the count is greater than the total number of items
                    count = potek.fusing.length
                }
                for(let i = 1; i <= count; i++) {
                    let randomString = getRandomItemFromString(potek.fusing)
                    if (newArray.includes(randomString)) {
                        i--
                    } else {
                        newArray.push(randomString)
                    }
                }
                break;
                case potekCategories[3]:
                    if (count > potek.stainedGlass.length) {
                        //Protect us from an infinite loop if the count is greater than the total number of items
                        count = potek.stainedGlass.length
                    }
                    for(let i = 1; i <= count; i++) {
                        let randomString = getRandomItemFromString(potek.stainedGlass)
                        if (newArray.includes(randomString)) {
                            i--
                        } else {
                            newArray.push(randomString)
                        }
                    } 
                break;
                case potekCategories[4]:
                    if (count > potek.torch.length) {
                        //Protect us from an infinite loop if the count is greater than the total number of items
                        count = potek.torch.length
                    }
                    for(let i = 1; i <= count; i++) {
                        let randomString = getRandomItemFromString(potek.torch)
                        if (newArray.includes(randomString)) {
                            i--
                        } else {
                            newArray.push(randomString)
                        }
                    } 
                break;
                case potekCategories[5]:
                    if (count > potek.other.length) {
                        //Protect us from an infinite loop if the count is greater than the total number of items
                        count = potek.other.length
                    }
                    for(let i = 1; i <= count; i++) {
                        let randomString = getRandomItemFromString(potek.other)
                        if (newArray.includes(randomString)) {
                            i--
                        } else {
                            newArray.push(randomString)
                        }
                    } 
                break;
            }
        break;
    
    
    }
    
    return returnStringFromArray(newArray)
}

const returnStringFromArray = (arr: string[]): string => {
    let longString = ''
    arr.forEach(item => {
        longString = longString + item + ' '
    })
    return longString
}

const getRandomItemFromString = (arr: string[]): string => {
    var item = arr[Math.floor(Math.random()*arr.length)]
    return item
}