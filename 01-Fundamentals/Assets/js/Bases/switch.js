
const day = 0; // 0: Sunday

switch( day ) { // Uses triple = (Evaluates value and variable data type)
    case 0:
        console.log('Sunday' );
        break; // Get out of the switch
    case 1:
        console.log( 'Monday' );
        break;
    case 2:
        console.log( 'Tuesday' );
        break;
    default:
        console.log('Not Monday, Tuesday nor Sunday');
}