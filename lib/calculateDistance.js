

export const  distanceCalculation=(la1,lo1,la2,lo2)=>{
    const r=6371;
    const dLat=(la2-la1)*(Math.PI/180)
    const dLon=(lo2 - lo1) * (Math.PI / 180);

    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(la1 * (Math.PI / 180)) * Math.cos(la2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return r * c; 

}