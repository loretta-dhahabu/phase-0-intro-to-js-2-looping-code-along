// Code your solutions in this file
const name = [ "Guadalupe", "Ollie", "Aki" ];
const event = "surprise";
const gifts = [(["Guadalupe", "Ollie", "Aki"], "surprise")];
function writeCards ( names, event )
{
    for ( let i = 0; i < names.length; i++ )
    {
        gifts[ i ] = ( `Thank you, ${names[ i ]}, for the wonderful ${ event } gift!` );
        console.log( gifts[ i ] );
        debugger;
    }
    return gifts;
}
writeCards( names, event );

const number = [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]; 
function countDown (number)
{
    let i = number;
    while ( i >= 0 )
    {
        console.log( i );
        i-=1;
    }
}
countDown( 10 );


