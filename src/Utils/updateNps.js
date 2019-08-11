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
    const npsType = calculateNpsType(likelyHood)
    if(!npsObj) npsObj = DEFAULT_NPS;
    if(npsType) {
        npsObj[npsType]++;
        npsObj['respondents']++;
    }

    npsObj['nps'] = ((npsObj['promoters'] - npsObj['detractors'])/npsObj['respondents'])*100;

    npsObj['raters'].push(userId)

    return npsObj;
}

export default updateNps;