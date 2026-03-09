

// function getTile(col,row){
//     if(row< 0 || row >= map.length) return 0;
//     if(col < 0 || col >= map[0].length) return 0;

//     return map[row][col];
// } Will need to add this into map folder so the collison can tell what tile is there
//const TILE_SIZE = 8;
import { map, tileSize } from "../tileMap.js";
 export function horizontal(player){
    //Converts player position into tile coordinates
    const leftTile = Math.floor(player.x / tileSize);
    const rightTile = Math.floor((player.x + player.width-1) / tileSize);
    const topTile = Math.floor(player.y / tileSize);
    const bottomTile = Math.floor((player.y + player.height - 1) / tileSize);
//Loops through tiles touching the player
for(let row = topTile; row <= bottomTile; row++){
    for (let col = leftTile; col <= rightTile; col++){
        // Check if tile is solid
        if(getTile(col,row) === 1){ 

            if(player.vx >  0 ){
            player.x = col * tileSize - player.width;
            } 
            else if (player.vx < 0 ){
            player.x = ( col + 1) * tileSize;
            }
            player.vx = 0;
            }
        }
    }
}

export function vertical(player){
    // Reset player's ground state
    player.grounded = false;
    //Converts player position into tile coordinates
    const leftTile = Math.floor(player.x / tileSize);
    const rightTile = Math.floor((player.x + player.width-1) / tileSize);
    const topTile = Math.floor(player.y / tileSize);
    const bottomTile = Math.floor((player.y + player.height - 1) / tileSize);
    
    //Loops through tiles touching the player
    for(let row = topTile; row <= bottomTile; row++){
        for(let col = leftTile; col <= rightTile; col++){
            // Check if tile is solid
            if(getTile(col,row) === 1 ){

                if(player.vy > 0 ){
                    player.y = row * tileSize - player.height;
                    //Ground detection
                    player.grounded = true;
                }
                else if ( player.vy < 0){
                    player.y = (row + 1 ) * tileSize
                }
                //Stop vertical velocity
                player.vy = 0;
            }
        }
    }

}