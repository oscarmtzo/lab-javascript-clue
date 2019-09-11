// Characters
const mrGreen = {
    first_name: 'Jacob',
    last_name: 'Green',
    color: 'green',
    description:  'He has a lot of connections',
    age: 45,
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    occupation: 'Entrepreneur'
}
const profPlum = {
    first_name:   'Victor',
    last_name:    'Plum',
    color:        'purple',
    description:  'Billionaire video game designer',
    age:          22,
    image:        'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
    occupation:   'Designer'
}
const missScarlet = {
    first_name:   'Kasandra',
    last_name:    'Scarlet',
    color:        'red',
    description:  'She is an A-list movie star with a dark past',
    age:          31,
    image:        'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    occupation:   'Actor'    
}
const mrsPeacock = {
    first_name:   'Eleanor',
    last_name:    'Peacock',
    color:        'blue',
    description:  'She is from a wealthy family and uses her status and money to earn popularity',
    age:          36,
    image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    occupation:   'Socialité'
}
const mrMustard ={
    first_name:   'Jack',
    last_name:    'Mustard',
    color:        'yellow',
    description:  'He is a former football player who tries to get by on his former glory',
    age:          62,
    image:        'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    occupation:   'Retired Football player'
}
// Weapons

const rope = {weight: 10}
const  knife = {weight: 8}
const candlestick  = {weight: 2}
const dumbbell = {weight: 30}
const poison = {weight: 2}
const axe = {weight: 15}
const bat = {weight: 13}
const trophy = {weight: 25}
const pistol = {weight: 20}

// Rooms


// Characters Collection
const charactersArray = [mrGreen, profPlum, missScarlet, mrsPeacock, mrMustard];

// Rooms Collection
const roomsArray = ['Dining Room', 'Conservatory', 'Kitchen', 'Study', 'Library', 'Billiard Room', 'Lounge', 'Ballroom', 'Hall', 'Spa', 'Living Room', 'Observatory', 'Theater', 'Guest House', 'Patio'];

// Weapons Collection
const weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol]

const randomSelector = (arr) =>{
    if(arr.length==0){
        return undefined
    }else {
        return arr[Math.floor(Math.random() * arr.length)]
    }
}
const pickMistery = (arr, suspect, weapons, rooms) => {
    
    arr =[]
    suspect = randomSelector(charactersArray)
    weapons = randomSelector(weaponsArray)
    rooms = randomSelector(roomsArray)
    arr.push(suspect, weapons, rooms )
    return arr
}
const revealMistery = (mysteryEnvelope) => {
    mysteryEnvelope = {}
    return mysteryEnvelope
}

   