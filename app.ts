
 /*
 function toggleNightMode() {
    this.nightMode = !this.nightMode;
    const bodyElement = document.body;
    bodyElement.style.backgroundColor = this.nightMode ? 'black' : 'white';
    

    
    const navbarElement = document.querySelector('.navbar');
    const header = document.querySelector(".navbar-brand");
    const info = document.querySelector(".fa-solid");
    const drumCont = document.querySelector(".drumContainer");
    const gridItems = document.querySelectorAll('.gridItem');
    gridItems.forEach(gridItem => {
      this.applyStyles(gridItem, this.nightMode ? 'darkgray' : null, null);
    });

    const nav = document.querySelector('.optionBar');
    const word = document.querySelector('.modeMenu')
    const header = document.querySelector(".header-text");

    // Apply styles based on nightMode
    if (nav) {
      if (this.nightMode) {
        this.renderer.setStyle(nav, 'background-color', 'black');
        this.renderer.setStyle(nav, 'color', 'white');

        this.renderer.setStyle(word, 'background-color', 'black');
        this.renderer.setStyle(word, 'color', 'white');

        this.renderer.setStyle(header, 'background-color', 'black');
        this.renderer.setStyle(header, 'color', 'white');

        this.renderer.setStyle(drumCont, 'background-color', 'black');
        this.renderer.setStyle(drumCont, 'color', 'white');

      } else {
        this.renderer.removeStyle(nav, 'background-color');
        this.renderer.removeStyle(nav, 'color');

        this.renderer.removeStyle(word, 'background-color');
        this.renderer.removeStyle(word, 'color');

        this.renderer.removeStyle(header, 'background-color');
        this.renderer.removeStyle(header, 'color');

        this.renderer.removeStyle(drumCont, 'background-color');
        this.renderer.removeStyle(drumCont, 'color');
      }
    }
  }
  
  applyStyles(gridItem: Element, backgroundColor: string | null, color: null) {
    if (gridItem) {
      if (backgroundColor) {
        this.renderer.setStyle(gridItem, 'background-color', backgroundColor);
      } else {
        this.renderer.removeStyle(gridItem, 'background-color');
      }

      if (color) {
        this.renderer.setStyle(gridItem, 'color', color);
      } else {
        this.renderer.removeStyle(gridItem, 'color');
      }
    }
  }
*/