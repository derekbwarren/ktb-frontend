import calculateNpsType from "./calculateNpsType";

//npsObj type {
//     nps: number
//     respondents: number,
//     detractors: number,
//     passives: number,
//     promoters: number    
// }

const DEFAULT_NPS = {
    'nps': 0,
    'respondents': 0,
    'detractors': 0,
    'passives': 0,
    'promoters': 0,
    'raters': []
}

const updateNps = (likelyHood, npsObj, userId) => {
    //new Rater
    if(likelyHood === -1 && npsObj == null) {
        npsObj = DEFAULT_NPS;
    }
    else {
        const npsType = calculateNpsType(likelyHood)
        if(!npsObj) npsObj = DEFAULT_NPS;
        if(npsType != null) {
            npsObj[npsType]++;
            npsObj['respondents']++;
        }

        npsObj['nps'] = Math.round(((npsObj['promoters'] - npsObj['detractors'])/npsObj['respondents'])*100);

        npsObj['raters'].push(userId)
    }

    return npsObj;
}

export default updateNps;