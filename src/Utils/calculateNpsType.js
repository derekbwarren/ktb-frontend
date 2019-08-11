// To move to cloud functions

const calculateNpsType = (value) => {
    let type = null;
    if(value >= 0 && value <=6) {
        type = 'detractors'
    } else if (value >=7 && value <=8) {
        type = 'passives'
    } else if (value>=9 && value <=10) {
        type = 'promoters'
    }
    return type;
}

export default calculateNpsType;