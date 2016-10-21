class RobotController {

  constructor(Robot) {
    this.x = 0;
    this.y = 0;
  }

  getPosition() {
    return {x: this.x, y: this.y}
  }

  moveUp(){
      if(this.x > 10){
        this.x = this.x - 10;
      }
      return getPosition();
  }

  moveDown(){
      if(this.x < 1000){
        this.x = this.x + 10;
      }
      return getPosition();
  }

  moveRight(){
      if(this.y < 1000){
        this.x = this.x - 10;
      }
      return getPosition();
  }

  moveLeft(){
      if(this.x > 10){
        this.x = this.x + 10;
      }
      return getPosition();
  }

}

RobotController.$inject = ['Todos'];
// could also just export the class up top as well
export {RobotController};
