let j = document.createElement('iframe');
document.body.append(j);
window.alert = j.contentWindow.alert.bind(window);
window.console.log = j.contentWindow.console.log.bind(window);
j.remove();

function discordFooter() {
    let element = document.createElement('div');

    element.style = `font-family: "Nunito", sans-serif; font-size: 14px; height: 65px; width: 175px; border: 4px solid rgb(15, 15, 15); background: rgb(60, 60, 60); position: absolute; top: 20x; left: 20px; border-radius: 10px; color: rgb(0, 0, 0); text-align: center;`;
    element.innerHTML = `<p>Created by monkxy (jude)! <br> Join my <a style="color: #0000ff;" href="https://discord.gg/aeDraxAUpB" target="_blank">Discord.</a></p>`;
    document.body.appendChild(element);
  
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    element.onmousedown = ((e = window.event) => {
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = (() => {
        document.onmouseup = null;
        document.onmousemove = null;
      });
      document.onmousemove = ((e) => {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        let top = (element.offsetTop - pos2) > 0 ? (element.offsetTop - pos2) : 0;
        let left = (element.offsetLeft - pos1) > 0 ? (element.offsetLeft - pos1) : 0;
        element.style.top = top + "px";
        element.style.left = left + "px";
      });
    });
  };

if (!location.href.includes("play.blooket.com")) alert("Please go to play.blooket.com and run script again.");
             else {
                    var state = Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode.state;
                   const tokenadder = Object.values(webpackJsonp.push([ [], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']], ]).cache).find((x) => x.exports ?.a?.put).exports.a;
            tokenadder.get("https://play.blooket.com/api/users/me").then(a => {
                tokenadder.put("https://play.blooket.com/api/users/add-rewards", {
          name: a.data.name,
          addedTokens: 500,
          addedXp: 300
        })});
       if (state.xpAvailable === undefined) {
        state.xpAvailable = 0
      } if (state.tokensAvailable === undefined) {
        state.tokensAvailable = 0
      }

      alert('Added maximum rewards!');
             };

console.log(
        '%c CHEATS BY JUDE GIDEON %c\n\thttps://discord.gg/aeDraxAUpB',
        'color: #3632a8; font-size: 2rem',
        'color: #8332a8; font-size: 1rem'
)
