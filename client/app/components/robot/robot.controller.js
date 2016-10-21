class RobotController {

  constructor() {
    this.x = 0;
    this.y = 0;
  }

  getPosition() {
    return {x: this.x, y: this.y}
  }

  moveUp(){
      if(this.x > 0){
        this.x = this.x - 10;
      }
  }

  moveDown(){
      if(this.x < 600){
        this.x = this.x + 10;
      }
  }

  moveRight(){
      if(this.y < 1000){
        this.y = this.y + 10;
      }
  }

  moveLeft(){
      if(this.y > 0){
        this.y = this.y - 10;
      }
  }

}

// could also just export the class up top as well
export {RobotController};
