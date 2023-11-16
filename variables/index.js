const PI = 3.1415
const radius = 5
const area =  PI * radius * radius
console.log (area)

const minimumSpaceperplant = 0.8
const initialPlants = 20
let weeks = 4
const weeklyGrowth = weeks * initialPlants
console.log (weeklyGrowth)
const totalSpacerequired = weeklyGrowth * minimumSpaceperplant
console.log (totalSpacerequired, area )

if ( totalSpacerequired > area * 0.8 ) {
console.log ("plants need to be destroyed")
} else if (totalSpacerequired >= 0.5 * area && totalSpacerequired <= 0.8 * area ) {

    console.log (" Growth is still being montiored")
} else if ( totalSpacerequired <= 0.5 * area ) {
console.log (" We have room for more plants")

}
